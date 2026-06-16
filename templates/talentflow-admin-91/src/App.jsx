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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden lg:flex z-10 blur-[1px]">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<span className="iconify text-xl" data-icon="lucide:hexagon" data-strokeWidth="1.5"></span>
<span className="font-semibold tracking-tight text-sm">TalentFlow</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Principal</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 transition-colors group" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-md group" href="#">
<span className="iconify text-slate-900" data-icon="lucide:library" data-strokeWidth="1.5"></span>
                Repositorio
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 transition-colors group" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-600" data-icon="lucide:users" data-strokeWidth="1.5"></span>
                Candidatos
            </a>
</nav>

<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-medium">LM</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Luis Martínez</span>
<span className="text-[10px] text-slate-500">Analista Sr.</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative blur-[1px]">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 shrink-0">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="hover:text-slate-900 cursor-pointer transition-colors">Repositorio</span>
<span className="iconify text-slate-300" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="16"></span>
<span className="font-medium text-slate-900 flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:folder-open" data-width="14"></span>
                    Técnicas
                </span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
<div>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight flex items-center gap-3">
                        Categoría: Técnicas
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">Activo</span>
</h1>
</div>
</div>

</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"></div>

<div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200">

<div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-white z-10">
<div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Nueva Convocatoria - BeLabs</h2>
<p className="text-sm text-slate-500 mt-1">Selecciona los coders que participarán en la convocatoria</p>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-slate-50 rounded-md">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>

<div className="px-6 py-4 bg-white shrink-0">
<div className="flex items-center justify-between text-xs font-medium mb-2">
<span className="text-slate-900">Paso 2 de 5 - Selección</span>
<span className="text-slate-400">40%</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-violet-600 w-2/5 rounded-full"></div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 py-2">

<div className="mb-8">
<span className="block text-xs font-semibold text-slate-900 mb-3">Modo de selección</span>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<button className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 hover:border-slate-300 transition-all group text-center h-32">
<span className="iconify text-slate-400 group-hover:text-slate-600 mb-3" data-icon="lucide:shuffle" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-sm font-semibold text-slate-900">Automático</span>
<span className="text-xs text-slate-500 mt-1">El sistema selecciona aleatoriamente</span>
</button>

<button className="flex flex-col items-center justify-center p-6 border border-violet-500 rounded-lg bg-violet-50/50 relative text-center h-32 shadow-sm">
<div className="absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none opacity-10"></div>
<span className="iconify text-violet-600 mb-3" data-icon="lucide:mouse-pointer-2" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-sm font-semibold text-violet-700">Manual</span>
<span className="text-xs text-violet-600/80 mt-1">Tú eliges cada coder</span>
</button>
</div>
</div>

<div className="mb-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-slate-900">Coders disponibles</span>
<span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium border border-slate-200">0/6</span>
</div>
<div className="space-y-3 pb-6">

<div className="flex items-center p-3 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white group">
<div className="flex items-center h-5 w-5 mr-4">
<input className="custom-checkbox appearance-none h-5 w-5 border border-slate-300 rounded bg-white transition-all cursor-pointer" type="checkbox"/>
</div>
<div className="h-10 w-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mr-4 border border-slate-100 shrink-0">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-slate-900 truncate">Felipe Castro</h3>
<p className="text-xs text-slate-500 truncate">Clan Alpha • Cohorte 4</p>
</div>
</div>

<div className="flex items-center p-3 border border-orange-200 rounded-lg bg-orange-50/10 hover:border-orange-300 hover:shadow-sm transition-all group relative">
<div className="flex items-center h-5 w-5 mr-4">
<input className="custom-checkbox appearance-none h-5 w-5 border border-slate-300 rounded bg-white transition-all cursor-pointer" type="checkbox"/>
</div>
<div className="h-10 w-10 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mr-4 border border-violet-100 shrink-0">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="text-sm font-medium text-slate-900 truncate">Laura Gómez</h3>

<div className="group/tooltip relative inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 text-[10px] font-semibold tracking-tight cursor-help">
<span className="iconify" data-icon="lucide:alert-circle" data-strokeWidth="2" data-width="10"></span>
                                        Ya evaluado en V2
                                        
                                        
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-800 text-white text-[11px] p-2.5 rounded-md shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-50 pointer-events-none transform translate-y-1 group-hover/tooltip:translate-y-0">
<div className="font-medium mb-1 border-b border-slate-700 pb-1 flex justify-between">
<span>Historial Detectado</span>
<span className="text-slate-400">V2</span>
</div>
<div className="space-y-1 text-slate-300 font-light">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:calendar" data-width="10"></span>
<span>Última evaluación: 15 Ene 2024</span>
</div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:file-check" data-width="10"></span>
<span>Convocatoria: #C-2024-01</span>
</div>
</div>

<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
</div>
</div>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">Clan Alpha • Cohorte 4</p>
</div>
</div>

<div className="flex items-center p-3 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white group">
<div className="flex items-center h-5 w-5 mr-4">
<input className="custom-checkbox appearance-none h-5 w-5 border border-slate-300 rounded bg-white transition-all cursor-pointer" type="checkbox"/>
</div>
<div className="h-10 w-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mr-4 border border-slate-100 shrink-0">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-slate-900 truncate">Andrés Martínez</h3>
<p className="text-xs text-slate-500 truncate">Clan Alpha • Cohorte 4</p>
</div>
</div>

<div className="flex items-center p-3 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white group">
<div className="flex items-center h-5 w-5 mr-4">
<input className="custom-checkbox appearance-none h-5 w-5 border border-slate-300 rounded bg-white transition-all cursor-pointer" type="checkbox"/>
</div>
<div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mr-4 border border-emerald-100 shrink-0">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="text-sm font-medium text-slate-900 truncate">Sebastián Morales</h3>

<div className="group/tooltip relative inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 text-[10px] font-semibold tracking-tight cursor-help">
<span className="iconify" data-icon="lucide:alert-circle" data-strokeWidth="2" data-width="10"></span>
                                        Ya evaluado en V1
                                        
                                        
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-800 text-white text-[11px] p-2.5 rounded-md shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-50 pointer-events-none transform translate-y-1 group-hover/tooltip:translate-y-0">
<div className="font-medium mb-1 border-b border-slate-700 pb-1 flex justify-between">
<span>Historial Legacy</span>
<span className="text-slate-400">V1</span>
</div>
<div className="space-y-1 text-slate-300 font-light">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:calendar" data-width="10"></span>
<span>Última evaluación: 02 Dic 2023</span>
</div>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
</div>
</div>
</div>
<p className="text-xs text-slate-500 truncate mt-0.5">Clan Alpha • Cohorte 4</p>
</div>
</div>

<div className="flex items-center p-3 border border-slate-200 rounded-lg hover:border-slate-300 hover:shadow-sm transition-all bg-white group">
<div className="flex items-center h-5 w-5 mr-4">
<input className="custom-checkbox appearance-none h-5 w-5 border border-slate-300 rounded bg-white transition-all cursor-pointer" type="checkbox"/>
</div>
<div className="h-10 w-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mr-4 border border-slate-100 shrink-0">
<span className="iconify" data-icon="lucide:user" data-width="18"></span>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-slate-900 truncate">Juan Pérez</h3>
<p className="text-xs text-slate-500 truncate">Clan Beta • Cohorte 3</p>
</div>
</div>

<div className="flex justify-between text-xs font-medium text-violet-600 px-2 pt-2">
<span className="cursor-pointer hover:underline">+11 más</span>
<span className="cursor-pointer hover:underline">+7 más</span>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between shrink-0 rounded-b-xl">
<button className="px-4 py-2 border border-slate-200 rounded-md text-sm font-medium text-slate-600 hover:bg-white hover:text-slate-800 transition-colors bg-white shadow-sm">
                    Atrás
                </button>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-500">0 seleccionados</span>
<button className="px-4 py-2 bg-slate-200 text-slate-400 rounded-md text-sm font-medium cursor-not-allowed shadow-none" disabled="">
                        Siguiente: Confirmación
                    </button>
</div>
</div>
</div>
</div>

    </>
  );
}
