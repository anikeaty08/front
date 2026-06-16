import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
        var ctx = document.getElementById('weightsChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['mensaje_estándar', 'sensación'],
            datasets: [{
              label: 'Peso',
              data: [5, 5],
              backgroundColor: ['#2563eb', '#d97706'],
              borderRadius: 6,
              borderSkipped: false,
              barThickness: 32,
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#a3a3a3', font: { family: 'Inter', weight: 500 } } },
              y: { grid: { color: '#262626' }, ticks: { color: '#a3a3a3', font: { family: 'Inter', weight: 500 }, precision: 0 } }
            },
            animation: { duration: 1200, easing: 'easeOutQuart' },
            responsive: true,
            maintainAspectRatio: false,
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex items-center border-b border-neutral-800 px-6 h-16 bg-neutral-950/90 backdrop-blur z-20 sticky top-0 animate-fadeInUp" style={{animationDelay: '0.05s'}}>
<svg className="mr-3 text-blue-500" fill="none" height="28" stroke="currentColor" strokeWidth="2" width="28"><use href="#clipboard-list"></use></svg>
<h1 className="text-2xl tracking-tight font-semibold">Plantillas de Auditoría</h1>
<div className="ml-auto flex gap-2">
<button className="flex items-center px-3 py-1.5 rounded-md font-medium text-sm bg-blue-600 hover:bg-blue-700 transition outline-none focus-visible:ring focus-visible:ring-blue-400" id="btn-create">
<svg className="mr-1.5" height="18" width="18"><use href="#plus"></use></svg>
          Crear Auditoría
        </button>
</div>
</header>

<main className="flex-1 flex flex-col md:flex-row overflow-hidden">

<aside className="w-full md:w-80 border-r border-neutral-800 bg-neutral-950 pt-2 pb-6 px-4 flex-shrink-0 overflow-y-auto animate-fadeInUp" style={{animationDelay: '0.12s'}}>

<div className="flex flex-col gap-2 mb-6">
<div className="flex gap-2">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1">Empresa</label>
<select className="bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 text-sm focus:outline-none focus-visible:ring focus-visible:ring-blue-400 transition">
<option>All</option>
<option>Acme S.A.</option>
<option>Globex</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1">Proyecto</label>
<select className="bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 text-sm focus:outline-none focus-visible:ring focus-visible:ring-blue-400 transition">
<option>All</option>
<option>Onboarding</option>
<option>Calidad</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1">Auditoría</label>
<select className="bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 text-sm focus:outline-none focus-visible:ring focus-visible:ring-blue-400 transition">
<option>All</option>
<option>Calidad</option>
<option>Procesos</option>
</select>
</div>
</div>

<nav>
<ul>
<li>
<button className="flex items-center w-full px-2 py-2 rounded-lg text-left hover:bg-neutral-800 focus:outline-none transition group animate-fadeInUp" style={{animationDelay: '0.19s'}}>
<svg className="mr-2 text-blue-400" height="18" width="18"><use href="#layers"></use></svg>
<span className="font-medium text-neutral-100">Calidad</span>
<span className="ml-auto text-xs bg-blue-800/40 rounded px-2 py-0.5 text-blue-300 font-medium">3 niveles</span>
<span className="ml-2 rounded px-1 text-xs bg-green-900/40 text-green-400">Listo</span>
</button>

<ul className="ml-6 border-l border-neutral-800 pl-4 mt-1">
<li>
<button className="flex items-center w-full px-2 py-1.5 rounded-lg hover:bg-neutral-900 focus:outline-none group transition animate-fadeInUp" style={{animationDelay: '0.24s'}}>
<svg className="mr-2 text-purple-300" height="16" width="16"><use href="#folder"></use></svg>
<span className="font-medium">USO DEL LENGUAJE Y DE LA VOZ</span>
</button>
<ul className="ml-6 border-l border-neutral-800 pl-3 mt-1">
<li>
<button className="flex items-center w-full px-2 py-1.5 rounded-lg hover:bg-neutral-900 focus:outline-none group transition animate-fadeInUp" style={{animationDelay: '0.29s'}}>
<svg className="mr-2 text-teal-300" height="15" width="15"><use href="#folder"></use></svg>
<span>Cortesía</span>
</button>
<ul className="ml-6 border-l border-neutral-800 pl-3 mt-1">
<li>
<button className="flex items-center w-full px-2 py-1 rounded-md hover:bg-neutral-950 focus:outline-none group transition animate-fadeInUp" style={{animationDelay: '0.34s'}}>
<svg className="mr-2 text-yellow-400" height="14" width="14"><use href="#circle-dot"></use></svg>
                            mensaje_estándar
                          </button>
</li>
<li>
<button className="flex items-center w-full px-2 py-1 rounded-md hover:bg-neutral-950 focus:outline-none group transition animate-fadeInUp" style={{animationDelay: '0.38s'}}>
<svg className="mr-2 text-yellow-400" height="14" width="14"><use href="#circle-dot"></use></svg>
                            sensación
                          </button>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>

</ul>
</nav>
<div className="mt-8 text-xs text-neutral-500 font-medium border-t border-neutral-800 pt-3">Selecciona una auditoría para ver o editar su estructura</div>
</aside>

<section className="flex-1 flex flex-col overflow-y-auto px-6 py-6 gap-4 animate-fadeInUp" style={{animationDelay: '0.23s'}}>

<nav className="flex items-center gap-2 text-sm mb-4 animate-fadeInUp" style={{animationDelay: '0.33s'}}>
<a className="text-blue-400 hover:underline font-medium transition" href="#">Calidad</a>
<span className="text-neutral-500">/</span>
<a className="text-blue-400 hover:underline font-medium transition" href="#">Cortesía</a>
<span className="text-neutral-500">/</span>
<span className="text-neutral-300 font-medium">Sensación</span>
</nav>

<div className="flex flex-col xl:flex-row gap-6">

<div className="flex-1 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-sm p-6 animate-fadeInUp" style={{animationDelay: '0.41s'}}>
<h2 className="text-lg font-semibold tracking-tight mb-3">Estructura de Auditoría</h2>
<table className="w-full text-sm border-separate border-spacing-y-2">
<thead>
<tr>
<th className="text-left text-neutral-400 font-medium">Nivel</th>
<th className="text-left text-neutral-400 font-medium">Nombre</th>
<th className="text-left text-neutral-400 font-medium">Peso</th>
<th className="text-left text-neutral-400 font-medium">Valor</th>
<th className="text-left text-neutral-400 font-medium">Crítico</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-neutral-800 rounded transition group">
<td>Grupo</td>
<td>USO DEL LENGUAJE Y DE LA VOZ</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr className="hover:bg-neutral-800 rounded transition group">
<td>Subgrupo</td>
<td>Cortesía</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr className="hover:bg-neutral-800 rounded transition group">
<td>Elemento</td>
<td>mensaje_estándar</td>
<td>5.0</td>
<td>
<span className="inline-flex items-center gap-1 bg-blue-900/30 px-2 py-0.5 rounded text-blue-300">bp <svg height="16" width="16"><use href="#chevron-right"></use></svg> sbp <svg height="16" width="16"><use href="#chevron-right"></use></svg> ki</span>
</td>
<td>
<span className="inline-block rounded px-2 py-0.5 text-xs bg-neutral-800 text-neutral-300">No crítico</span>
</td>
</tr>
<tr className="hover:bg-neutral-800 rounded transition group">
<td>Elemento</td>
<td>sensación</td>
<td>5.0</td>
<td>
<span className="inline-flex items-center gap-1 bg-blue-900/30 px-2 py-0.5 rounded text-blue-300">bp <svg height="16" width="16"><use href="#chevron-right"></use></svg> sbp <svg height="16" width="16"><use href="#chevron-right"></use></svg> ki</span>
</td>
<td>
<span className="inline-block rounded px-2 py-0.5 text-xs bg-neutral-800 text-neutral-300">No crítico</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="w-full xl:w-80 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 shadow-sm flex flex-col items-center animate-fadeInUp" style={{animationDelay: '0.47s'}}>
<h2 className="text-lg font-semibold tracking-tight mb-4">Pesos de Elementos</h2>
<div className="w-full flex-1 flex items-center justify-center">
<div className="w-full flex justify-center">
<div style={{width: '100%', maxWidth: '220px'}}>
<canvas height="180" id="weightsChart"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-3 mt-6 animate-fadeInUp" style={{animationDelay: '0.54s'}}>
<button className="flex items-center px-4 py-2 rounded-lg bg-blue-600 font-medium text-sm hover:bg-blue-700 transition outline-none focus-visible:ring focus-visible:ring-blue-400">
<svg className="mr-2" height="18" width="18"><use href="#rocket"></use></svg>
            Desplegar
          </button>
<button className="flex items-center px-4 py-2 rounded-lg bg-neutral-800 font-medium text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white transition outline-none focus-visible:ring focus-visible:ring-blue-400">
<svg className="mr-2" height="18" width="18"><use href="#edit"></use></svg>
            Editar
          </button>
<button className="flex items-center px-4 py-2 rounded-lg bg-neutral-800 font-medium text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white transition outline-none focus-visible:ring focus-visible:ring-blue-400">
<svg className="mr-2" height="18" width="18"><use href="#eye"></use></svg>
            Preview
          </button>
<button className="flex items-center px-4 py-2 rounded-lg bg-red-700/80 font-medium text-sm text-red-100 hover:bg-red-600 hover:text-white transition outline-none focus-visible:ring focus-visible:ring-red-400">
<svg className="mr-2" height="18" width="18"><use href="#trash-2"></use></svg>
            Eliminar
          </button>
</div>
</section>

<aside className="w-full md:w-96 border-l border-neutral-800 bg-neutral-950/95 px-6 py-6 flex-shrink-0 overflow-y-auto animate-fadeInUp" style={{animationDelay: '0.29s'}}>
<h2 className="text-lg font-semibold tracking-tight mb-4 flex items-center">
<svg className="mr-2 text-blue-400" height="18" width="18"><use href="#settings"></use></svg>
          Configuración
        </h2>

<form className="flex flex-col gap-5">
<div>
<label className="text-xs font-medium text-neutral-400 mb-1 block">Nombre</label>
<input className="bg-neutral-900 border border-neutral-800 rounded-md px-3 py-2 w-full font-medium text-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 transition" type="text" value="Cortesía"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-400 mb-1 block">Condiciones</label>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-md bg-neutral-800 font-medium text-neutral-200 hover:bg-blue-950 hover:text-blue-400 border border-neutral-700 flex items-center transition outline-none focus-visible:ring focus-visible:ring-blue-400" type="button">
<svg className="mr-1.5" height="16" width="16"><use href="#toggle-left"></use></svg>
                apply_if
              </button>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 font-medium text-neutral-200 hover:bg-blue-950 hover:text-blue-400 border border-neutral-700 flex items-center transition outline-none focus-visible:ring focus-visible:ring-blue-400" type="button">
<svg className="mr-1.5" height="16" width="16"><use href="#toggle-right"></use></svg>
                skip_if
              </button>
</div>
<div className="mt-2 text-xs text-neutral-400 italic">Configura una condición lógica (builder)</div>
</div>
<div>
<label className="text-xs font-medium text-neutral-400 mb-1 block">Redistribución</label>
<select className="bg-neutral-900 border border-neutral-800 rounded-md px-2 py-1 w-full text-sm focus:outline-none focus-visible:ring focus-visible:ring-blue-400 transition">
<option value="group">A grupo</option>
<option value="subgroup">A subgrupo</option>
</select>
</div>
<div>
<button className="flex items-center px-4 py-2 rounded-lg bg-red-700/80 font-medium text-sm text-red-100 hover:bg-red-600 hover:text-white transition outline-none focus-visible:ring focus-visible:ring-red-400 w-full" type="button">
<svg className="mr-2" height="18" width="18"><use href="#trash-2"></use></svg>
              Eliminar grupo
            </button>
<div className="mt-1 text-xs text-red-400">Esta acción eliminará todos los subgrupos y elementos.</div>
</div>
</form>
</aside>
</main>

<svg style={{display: 'none'}}>
<symbol id="clipboard-list" viewbox="0 0 24 24"><rect height="14" rx="2" width="18" x="3" y="5"></rect><path d="M9 3v4"></path><path d="M15 3v4"></path><path d="M9 13h.01"></path><path d="M13 16h.01"></path><path d="M13 13h2"></path><path d="M9 16h2"></path></symbol>
<symbol id="plus" viewbox="0 0 24 24"><path d="M12 5v14"></path><path d="M5 12h14"></path></symbol>
<symbol id="layers" viewbox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></symbol>
<symbol id="folder" viewbox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h4l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></symbol>
<symbol id="circle-dot" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle></symbol>
<symbol id="chevron-right" viewbox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></symbol>
<symbol id="edit" viewbox="0 0 24 24"><path d="M11 4h2a2 2 0 0 1 2 2v2"></path><path d="M18.5 13.5l-1.5 1.5a2 2 0 0 1-2.83 0l-6.67-6.68a2 2 0 0 1 0-2.83l1.5-1.5a2 2 0 0 1 2.83 0l6.67 6.68a2 2 0 0 1 0 2.83z"></path></symbol>
<symbol id="eye" viewbox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></symbol>
<symbol id="trash-2" viewbox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M10 11v6M14 11v6"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></symbol>
<symbol id="rocket" viewbox="0 0 24 24"><path d="M4.5 19.5l5-5"></path><path d="M15 12L19 8"></path><path d="M2 16l2 2"></path><path d="M14.5 8.5L18 5"></path><path d="M9 10l6 6"></path><path d="M2 22l1.5-1.5"></path><path d="M16.5 5.5L19 3"></path><path d="M22 2l-2 2"></path><path d="M6 6l12 12"></path></symbol>
<symbol id="settings" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c.36.17.7.46 1 .82a1.65 1.65 0 0 0 1.51 1h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.17.36.46.7.82 1a1.65 1.65 0 0 0 1.51 1h.09a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></symbol>
<symbol id="toggle-left" viewbox="0 0 24 24"><rect height="14" rx="7" width="22" x="1" y="5"></rect><circle cx="8" cy="12" r="3"></circle></symbol>
<symbol id="toggle-right" viewbox="0 0 24 24"><rect height="14" rx="7" width="22" x="1" y="5"></rect><circle cx="16" cy="12" r="3"></circle></symbol>
</svg>



    </>
  );
}
