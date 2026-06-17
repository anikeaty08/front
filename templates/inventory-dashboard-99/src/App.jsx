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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-gray-900">
<div className="bg-gray-900 text-white p-1 rounded-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<span className="font-semibold tracking-tight text-sm">INVENTORY<span className="text-gray-400 font-normal">OS</span></span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Vistas del Sistema</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-gray-600 iconify--lucide" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
                Catálogo Digital
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-gray-100 text-indigo-900 rounded-md transition-colors relative" href="#">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:table-2" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Admin / Almacén
                <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<svg aria-hidden="true" className="iconify text-gray-400 group-hover:text-gray-600 iconify--lucide" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
                Catálogo PDF
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Automatizaciones</div>
<button className="flex hover:bg-gray-50 transition-colors group text-sm font-medium text-gray-600 text-left w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:plus-circle" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
                Entrada Stock (+1)
            </button>
<button className="flex gap-3 hover:bg-gray-50 transition-colors group text-sm font-medium text-gray-600 text-left w-full rounded-md pt-2 pr-3 pb-2 pl-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:minus-circle" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></g></svg>
                Salida Stock (-1)
            </button>
</nav>

<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-semibold">AD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">Admin</span>
<span className="text-[10px] text-gray-500">Workspace Pro</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8 z-10">
<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 text-gray-400 text-xs mb-0.5">
<span>Base de Datos</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Productos</span>
</div>
<h1 className="text-lg font-medium tracking-tight text-gray-900 flex items-center gap-2">
                    Vista Almacén
                    <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-medium border border-indigo-100 uppercase tracking-wide">Tabla Activa</span>
</h1>
</div>
<div className="flex items-center gap-3">

<div className="relative hidden sm:block group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</span>
<input className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-64 bg-gray-50/50 transition-all text-gray-600 placeholder:text-gray-400" placeholder="Buscar producto..." type="text"/>
</div>
<div className="h-4 w-px bg-gray-200 mx-1"></div>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium px-3 py-2 rounded-md transition-all shadow-sm flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-strokeWidth="2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Nuevo Producto
                </button>
</div>
</header>

<div className="bg-gray-50/50 border-b border-gray-200 px-6 py-3 flex gap-6 overflow-x-auto">
<div className="flex items-center gap-2 text-xs">
<span className="text-gray-500">Total Items:</span>
<span className="font-medium text-gray-900">42</span>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-gray-500">Valor Inventario:</span>
<span className="font-medium text-gray-900">$12,450.00</span>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="text-gray-500">En Catálogo PDF:</span>
<span className="font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">35 Activos</span>
</div>
</div>

<div className="flex-1 overflow-auto bg-white">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 sticky top-0 z-10 text-xs uppercase tracking-wider text-gray-500 font-medium">
<tr>
<th className="px-6 py-3 border-b border-gray-200 w-12">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 appearance-none border bg-white checked:bg-indigo-600 checked:border-transparent cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[5px] after:top-[1px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45" type="checkbox"/>
</th>
<th className="px-6 py-3 border-b border-gray-200 font-medium cursor-pointer hover:text-gray-700 group">
                            Producto
                            <svg aria-hidden="true" className="iconify inline ml-1 opacity-0 group-hover:opacity-100 text-gray-400 iconify--lucide" data-icon="lucide:arrow-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</th>
<th className="px-4 py-3 border-b border-gray-200 font-medium">Categoría</th>
<th className="px-4 py-3 border-b border-gray-200 font-medium text-right">Stock</th>
<th className="px-4 py-3 border-b border-gray-200 font-medium text-right w-32">Precios</th>
<th className="px-4 py-3 border-b border-gray-200 font-medium text-right">Ganancia</th>
<th className="px-4 py-3 border-b border-gray-200 font-medium text-center">PDF</th>
<th className="px-4 py-3 border-b border-gray-200 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">

<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 appearance-none border bg-white checked:bg-indigo-600 checked:border-transparent cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[5px] after:top-[1px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
<svg aria-hidden="true" className="iconify text-gray-400 iconify--lucide" data-icon="lucide:image" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
<div>
<div className="font-medium text-gray-900">Silla Ergonómica Mesh</div>
<div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">Soporte lumbar ajustable, base de aluminio...</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
                                Mobiliario
                            </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2 group/stock">
<button className="opacity-0 group-hover:opacity-100 group-hover/stock:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500 transition-all" title="Reducir Stock">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="font-medium text-gray-900 w-6 text-center">12</span>
<button className="opacity-0 group-hover:opacity-100 group-hover/stock:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500 transition-all" title="Aumentar Stock">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</td>
<td className="px-4 py-4 text-right">
<div className="flex flex-col gap-0.5">
<span className="text-gray-900 font-medium">$299.00 <span className="text-gray-400 text-[10px] uppercase font-normal ml-1">Venta</span></span>
<span className="text-gray-400 text-xs">$150.00 <span className="text-[10px]">Costo</span></span>
</div>
</td>
<td className="px-4 py-4 text-right">

<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                +$149.00
                            </span>
</td>
<td className="px-4 py-4 text-center">
<div className="flex justify-center">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check-circle-2" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</td>
<td className="px-4 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600 p-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 appearance-none border bg-white checked:bg-indigo-600 checked:border-transparent cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[5px] after:top-[1px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&amp'}}>
</div>
<div>
<div className="font-medium text-gray-900">Teclado Mecánico K2</div>
<div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">Switches marrones, retroiluminación RGB, inalámbrico...</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                Tecnología
                            </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2 group/stock">
<button className="opacity-0 group-hover:opacity-100 group-hover/stock:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500 transition-all" title="Reducir Stock">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="font-medium text-red-600 w-6 text-center bg-red-50 rounded border border-red-100 px-1">2</span>
<button className="opacity-0 group-hover:opacity-100 group-hover/stock:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500 transition-all" title="Aumentar Stock">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</td>
<td className="px-4 py-4 text-right">
<div className="flex flex-col gap-0.5">
<span className="text-gray-900 font-medium">$89.00 <span className="text-gray-400 text-[10px] uppercase font-normal ml-1">Venta</span></span>
<span className="text-gray-400 text-xs">$45.00 <span className="text-[10px]">Costo</span></span>
</div>
</td>
<td className="px-4 py-4 text-right">
<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                +$44.00
                            </span>
</td>
<td className="px-4 py-4 text-center">
<div className="flex justify-center">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check-circle-2" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</td>
<td className="px-4 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600 p-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-6 py-4">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4 appearance-none border bg-white checked:bg-indigo-600 checked:border-transparent cursor-pointer relative after:content-[''] after:hidden checked:after:block after:absolute after:left-[5px] after:top-[1px] after:w-[5px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-white after:rotate-45" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&amp'}}>
</div>
<div>
<div className="font-medium text-gray-900">Mouse Wireless MX</div>
<div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">Sensor 4K DPI, carga USB-C, Bluetooth...</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                Tecnología
                            </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2 group/stock">
<button className="opacity-0 group-hover:opacity-100 group-hover/stock:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500 transition-all" title="Reducir Stock">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:minus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="font-medium text-gray-900 w-6 text-center">45</span>
<button className="opacity-0 group-hover:opacity-100 group-hover/stock:opacity-100 p-1 hover:bg-gray-200 rounded text-gray-500 transition-all" title="Aumentar Stock">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</td>
<td className="px-4 py-4 text-right">
<div className="flex flex-col gap-0.5">
<span className="text-gray-900 font-medium">$79.99 <span className="text-gray-400 text-[10px] uppercase font-normal ml-1">Venta</span></span>
<span className="text-gray-400 text-xs">$50.00 <span className="text-[10px]">Costo</span></span>
</div>
</td>
<td className="px-4 py-4 text-right">
<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                                +$29.99
                            </span>
</td>
<td className="px-4 py-4 text-center">
<div className="flex justify-center">
<svg aria-hidden="true" className="iconify text-gray-300 iconify--lucide" data-icon="lucide:circle" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
</td>
<td className="px-4 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600 p-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</td>
</tr>

<tr className="bg-gray-50/30 border-t border-dashed border-gray-200">
<td className="px-6 py-3" colspan="8">
<button className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-xs font-medium transition-colors w-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Nuevo producto...
                            </button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="absolute bottom-6 right-8 bg-white shadow-xl border border-gray-100 rounded-lg p-4 flex items-center gap-4 z-30 animate-pulse">
<div className="h-8 w-8 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Automatización lista</h4>
<p className="text-xs text-gray-500">Botones de stock configurados</p>
</div>
<div className="h-8 w-px bg-gray-100 mx-2"></div>
<button className="text-xs font-medium text-gray-500 hover:text-gray-900">Ocultar</button>
</div>
</main>

    </>
  );
}
