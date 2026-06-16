import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-semibold tracking-tighter">C1</div>
<span className="font-semibold tracking-tight text-base">CarOne</span>
</div>
</div>
<div className="p-4 space-y-1">
<div className="text-xs font-medium text-slate-400 px-2 py-2 uppercase tracking-wider">Operaciones</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-md group" href="#">
<iconify-icon className="text-slate-900" icon="solar:tag-price-linear" width="20"></iconify-icon>
                    Pricing Unificado
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:history-linear" width="20"></iconify-icon>
                    Historial
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:chart-2-linear" width="20"></iconify-icon>
                    Reportes
                </a>
</div>
<div className="p-4 space-y-1">
<div className="text-xs font-medium text-slate-400 px-2 py-2 uppercase tracking-wider">Configuración</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
                    Reglas de Negocio
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Usuarios
                </a>
</div>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 text-xs font-semibold">
                    JP
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Juan Pérez</span>
<span className="text-xs text-slate-400">Analista Senior</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/50">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-4">
<span className="text-sm text-slate-400">Pricing</span>
<iconify-icon className="text-slate-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Nueva Cotización</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium">API Mercado: Online</span>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-auto custom-scrollbar p-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

<div className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-1 shadow-sm flex">
<button className="flex-1 py-1.5 text-sm font-medium text-center rounded-lg bg-slate-900 text-white shadow-sm transition-all">Compra</button>
<button className="flex-1 py-1.5 text-sm font-medium text-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all">Venta</button>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col gap-5 flex-1">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight">Datos del Vehículo</h2>
<button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">Limpiar</button>
</div>
<div className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Patente (Opcional)</label>
<input className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all uppercase placeholder:normal-case" placeholder="AA 123 BB" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Marca</label>
<div className="relative">
<input className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="text" value="Toyota"/>
<iconify-icon className="absolute right-3 top-2.5 text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Modelo</label>
<input className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="text" value="Corolla"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Año</label>
<input className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="number" value="2021"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Kilometraje</label>
<input className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all" type="text" value="45.000"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Versión</label>
<div className="relative">
<select className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 transition-all appearance-none">
<option>2.0 Seg CVT</option>
<option>1.8 XEI Hybrid</option>
<option>2.0 XEI CVT</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-slate-100">
<button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
                                Consultar Mercado
                            </button>
<p className="text-center text-[10px] text-slate-400 mt-2">Última actualización de bases: Hace 5m</p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden">
<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<div>
<h2 className="text-sm font-semibold text-slate-900 tracking-tight">Referencias de Mercado</h2>
<p className="text-xs text-slate-500 mt-0.5">Basado en 14 publicaciones comparables</p>
</div>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:sort-vertical-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50/50 sticky top-0 z-10 backdrop-blur-sm">
<tr>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Fuente</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500">Versión / Km</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 text-right">Precio</th>
<th className="px-5 py-3 text-xs font-medium text-slate-500 text-center">Antig.</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
<td className="px-5 py-3 align-top">
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="text-slate-400" icon="solar:shop-linear"></iconify-icon>
<div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white"></div>
</div>
<span className="text-xs font-medium text-slate-700">ML</span>
</div>
</td>
<td className="px-5 py-3">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">2.0 Seg CVT</span>
<span className="text-[10px] text-slate-500">42.000 km • Pilar</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-slate-900">$24.500.000</span>
</div>
</td>
<td className="px-5 py-3 text-center">
<span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">2d</span>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer bg-slate-50/30">
<td className="px-5 py-3 align-top">
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="text-slate-400" icon="solar:box-minimalistic-linear"></iconify-icon>
<div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white"></div>
</div>
<span className="text-xs font-medium text-slate-700">Kavak</span>
</div>
</td>
<td className="px-5 py-3">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">2.0 Seg CVT</span>
<span className="text-[10px] text-slate-500">48.000 km • CABA</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-slate-900">$23.900.000</span>
<span className="text-[10px] text-emerald-600 font-medium">-2.4% avg</span>
</div>
</td>
<td className="px-5 py-3 text-center">
<span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">5d</span>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer opacity-70">
<td className="px-5 py-3 align-top">
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="text-slate-400" icon="solar:global-linear"></iconify-icon>
<div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 border border-white"></div>
</div>
<span className="text-xs font-medium text-slate-700">DeM</span>
</div>
</td>
<td className="px-5 py-3">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">2.0 XEI CVT</span>
<span className="text-[10px] text-slate-500">55.000 km • Rosario</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-slate-900">$22.800.000</span>
</div>
</td>
<td className="px-5 py-3 text-center">
<span className="text-[10px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded border border-amber-100">15d</span>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors cursor-pointer">
<td className="px-5 py-3 align-top">
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="text-slate-400" icon="solar:shop-linear"></iconify-icon>
<div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white"></div>
</div>
<span className="text-xs font-medium text-slate-700">ML</span>
</div>
</td>
<td className="px-5 py-3">
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">2.0 Seg CVT</span>
<span className="text-[10px] text-slate-500">35.000 km • Norte</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-slate-900">$25.100.000</span>
<span className="text-[10px] text-rose-600 font-medium">+3.1% avg</span>
</div>
</td>
<td className="px-5 py-3 text-center">
<span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">1d</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-3 bg-slate-50 border-t border-slate-200 grid grid-cols-3 gap-4">
<div>
<span className="block text-[10px] font-medium text-slate-500 uppercase tracking-wide">Mínimo</span>
<span className="text-sm font-semibold text-slate-700">$22.8M</span>
</div>
<div className="text-center border-l border-r border-slate-200">
<span className="block text-[10px] font-medium text-slate-500 uppercase tracking-wide">Promedio</span>
<span className="text-sm font-semibold text-slate-900">$24.075M</span>
</div>
<div className="text-right">
<span className="block text-[10px] font-medium text-slate-500 uppercase tracking-wide">Máximo</span>
<span className="text-sm font-semibold text-slate-700">$25.1M</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Posicionamiento de Precio</h3>
<span className="text-xs font-medium text-indigo-600">Competitivo</span>
</div>
<div className="relative h-8 w-full mt-2">

<div className="absolute top-3 left-0 right-0 h-2 bg-slate-100 rounded-full overflow-hidden flex">
<div className="w-1/4 bg-emerald-200/50 h-full border-r border-white"></div> 
<div className="w-2/4 bg-indigo-200/50 h-full border-r border-white"></div> 
<div className="w-1/4 bg-rose-200/50 h-full"></div> 
</div>

<div className="absolute top-6 w-full flex justify-between text-[10px] text-slate-400 font-medium">
<span>$22.0M</span>
<span className="text-slate-900">$24.0M (Avg)</span>
<span>$26.0M</span>
</div>

<div className="absolute top-1 left-1/2 -ml-2 transform -translate-x-1/4 flex flex-col items-center group cursor-pointer">
<div className="w-0.5 h-6 bg-slate-900 rounded-full group-hover:h-7 transition-all"></div>
<div className="absolute -top-7 bg-slate-900 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Tu Precio
                                </div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="p-5 border-b border-slate-100">
<h2 className="text-sm font-semibold text-slate-900 tracking-tight">Motor de Reglas</h2>
</div>
<div className="p-5 flex-1 space-y-6">

<div className="flex justify-between items-center pb-4 border-b border-slate-100 border-dashed">
<span className="text-sm text-slate-500">Precio Base (Avg)</span>
<span className="text-sm font-medium text-slate-700">$24.075.000</span>
</div>

<div className="space-y-5">

<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">Margen Comercial</span>
<iconify-icon className="text-slate-300 hover:text-slate-500 cursor-help text-xs" icon="solar:info-circle-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-400">Estándar 15%</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-semibold text-rose-600">-$3.611.250</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-slate-900">Ajuste por Estado</span>
<span className="text-xs font-semibold text-rose-600">-$500.000</span>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:border [&amp;::-webkit-slider-thumb]:border-slate-300 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-sm" max="1000000" min="0" step="50000" type="range" value="500000"/>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-slate-400">Impecable</span>
<span className="text-[10px] text-slate-400">A Reparar</span>
</div>
</div>

<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-900">Bono Stock</span>
</div>
<span className="text-xs text-slate-400">Incentivo compra</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-semibold text-emerald-600">+$200.000</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-5 border-t border-slate-200 space-y-4">
<div className="flex justify-between items-center">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Precio Sugerido</label>
<span className="text-lg font-bold text-slate-900 tracking-tight">$20.163.750</span>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Decisión Final (Oferta)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-500 font-medium">$</span>
<input className="w-full pl-7 pr-3 py-2.5 text-lg font-bold text-slate-900 bg-white border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm" type="text" value="20.200.000"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3 pt-2">
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:disk-linear"></iconify-icon>
                                    Simular
                                </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 shadow-sm transition-colors shadow-indigo-200">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
                                    Aprobar Precio
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-8">
<h3 className="text-sm font-medium text-slate-500 mb-4 px-1">Consultas Recientes</h3>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-slate-50 border-b border-slate-100">
<tr>
<th className="px-6 py-3 text-xs font-medium text-slate-500">Fecha</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500">Vehículo</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500">Operación</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500">Precio Definido</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500">Estado</th>
<th className="px-6 py-3 text-xs font-medium text-slate-500 text-right">Acción</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-3 text-xs text-slate-500">Hoy, 09:41</td>
<td className="px-6 py-3 text-xs font-medium text-slate-900">Ford Ranger 2022</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium border border-slate-200">Compra</span></td>
<td className="px-6 py-3 text-xs text-slate-700 font-medium">$32.500.000</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
<span className="text-xs text-slate-600">Guardada</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">Ver</button>
</td>
</tr>
<tr>
<td className="px-6 py-3 text-xs text-slate-500">Ayer, 16:20</td>
<td className="px-6 py-3 text-xs font-medium text-slate-900">Peugeot 208 2023</td>
<td className="px-6 py-3"><span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[10px] font-medium border border-indigo-100">Venta</span></td>
<td className="px-6 py-3 text-xs text-slate-700 font-medium">$18.200.000</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs text-slate-600">Publicada</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<button className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">Ver</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-8"></div> 
</div>
</main>

    </>
  );
}
