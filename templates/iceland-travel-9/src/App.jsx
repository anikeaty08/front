import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function filterSeasons(criteria) { const winter = document.getElementById('winter'); const spring = document.getElementById('spring'); const summer = document.getElementById('summer'); const autumn = document.getElementById('autumn'); const bgLayer = document.getElementById('bg-layer'); const bgs = { 'aurora': 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop', 'summer': 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2000&auto=format&fit=crop', 'balance': 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=2000&auto=format&fit=crop' }; if(bgs[criteria]) bgLayer.style.backgroundImage = `url('${bgs[criteria]}')`; [winter, spring, summer, autumn].forEach(card => { card.classList.remove('highlight'); card.classList.add('dimmed'); }); if (criteria === 'aurora') { winter.classList.remove('dimmed'); winter.classList.add('highlight'); autumn.classList.remove('dimmed'); autumn.style.opacity = '0.7'; } else if (criteria === 'summer') { summer.classList.remove('dimmed'); summer.classList.add('highlight'); } else if (criteria === 'balance') { autumn.classList.remove('dimmed'); autumn.classList.add('highlight'); spring.classList.remove('dimmed'); spring.style.opacity = '0.7'; } const routes = { 'aurora': 'route-aurora', 'summer': 'route-summer', 'balance': 'route-balance' }; document.getElementById('route-placeholder').classList.add('opacity-0', 'pointer-events-none'); Object.values(routes).forEach(id => { const el = document.getElementById(id); if(el) { el.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4'); el.classList.remove('opacity-100', 'translate-y-0'); } }); const selectedId = routes[criteria]; if(selectedId) { const el = document.getElementById(selectedId); if(el) { el.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4'); el.classList.add('opacity-100', 'translate-y-0'); } } } function resetFilters() { const cards = document.querySelectorAll('.season-card'); const bgLayer = document.getElementById('bg-layer'); bgLayer.style.backgroundImage = "url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop')"; cards.forEach(card => { card.classList.remove('dimmed', 'highlight'); card.style.opacity = ''; }); document.getElementById('route-placeholder').classList.remove('opacity-0', 'pointer-events-none'); ['route-aurora', 'route-summer', 'route-balance'].forEach(id => { const el = document.getElementById(id); if(el) { el.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4'); el.classList.remove('opacity-100', 'translate-y-0'); } }); }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 w-full h-full -z-50 bg-cover bg-center transition-all duration-700 ease-in-out" id="bg-layer" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&amp'}}>
<div className="absolute inset-0 bg-black/50"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-teal-400 iconify--lucide" data-icon="lucide:mountain-snow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m8 3l4 8l5-5l5 15H2z"></path>
<path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"></path>
</g>
</svg>
<span className="text-sm font-medium text-white tracking-tight">ISLANDIA</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md">
<span className="text-zinc-500 uppercase tracking-wide text-[10px]">
            Nº de días:
          </span>
<span className="text-white font-semibold">7</span>
</div>
</div>
</nav>

<header className="relative h-[85vh] w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">

<div className="bg-gradient-to-b from-black/20 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-4xl animate-fade-in-up">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-teal-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
          Regalo viaje 2025
        </span>
<h1 className="text-5xl tracking-tighter text-white mb-6 leading-[0.9] font-bold md:text-7xl lg:text-8xl">
          Viaje a
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-cyan-200">
            Islandia
          </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-300 max-w-2xl mr-auto ml-auto">
          islandia es una tierra de contrastes donde el hielo se encuentra con
          el fuego. Elige el momento perfecto para tu viaje según lo que te
          mueve.
        </p>
</div>
<div className="absolute bottom-10 animate-bounce">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:chevron-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</header>

<main className="-mt-20 z-20 max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 relative">

<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">
          Define tu experiencia
        </h2>
<p className="text-zinc-400 text-sm max-w-lg mx-auto">
          La "mejor época" es subjetiva. Selecciona tu prioridad principal y te
          mostraremos cuándo viajar.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">

<button className="group hover:bg-zinc-800/50 hover:border-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/50 active-btn text-left bg-zinc-900/50 border-gray-50 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative" id="btn-aurora" onclick="filterSeasons('aurora')">
<div className="mb-4 inline-flex p-3 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide w-[24px] h-[24px]" data-icon="lucide:sparkles" data-icon-replaced="true" data-width="24" height="24" role="img" strokeWidth="2" style={{color: 'rgb(165, 180, 252)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-extrabold text-white tracking-tight mb-1">
            Cazar Auroras
          </h3>
<p className="leading-relaxed text-xs text-zinc-500">
            Priorizas el espectáculo de luces del norte y paisajes nevados y las
            mejores auroras boreales...aunque haga frío.
          </p>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-icon="lucide:arrow-right" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{color: 'rgb(129, 140, 248)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</button>

<button className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all text-left focus:outline-none focus:ring-2 focus:ring-teal-500/50 active-btn" id="btn-summer" onclick="filterSeasons('summer')">
<div className="mb-4 inline-flex p-3 rounded-lg bg-amber-500/10 text-amber-400 group-hover:text-amber-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">
            Clima Suave &amp; Rutas
          </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
            Prefieres temperaturas agradables, senderismo y acceso a las Tierras
            Altas.
          </p>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</button>

<button className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all text-left focus:outline-none focus:ring-2 focus:ring-teal-500/50 active-btn" id="btn-balance" onclick="filterSeasons('balance')">
<div className="mb-4 inline-flex p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:text-emerald-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scale" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-medium text-white mb-1 tracking-tight">
            Menos Gente &amp; Color
          </h3>
<p className="leading-relaxed text-xs text-zinc-500">
            Buscas equilibrio entre afluencia y belleza natural.
          </p>
<div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</button>
</div>

<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
          Desglose por Estaciones
        </h3>
<button className="text-xs text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 cursor-pointer" onclick="resetFilters()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rotate-ccw" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
</g>
</svg>
          Ver todas
        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="seasons-container">

<article className="season-card relative flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm" id="winter">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:snowflake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m10 20l-1.25-2.5L6 18m4-14L8.75 6.5L6 6m8 14l1.25-2.5L18 18M14 4l1.25 2.5L18 6"></path>
<path d="m17 21l-3-6h-4m7-12l-3 6l1.5 3M2 12h6.5L10 9m10 1l-1.5 2l1.5 2"></path>
<path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7l3-6l-1.5-3M7 3l3 6h4"></path>
</g>
</svg>
</span>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              Nov - Mar
            </span>
</div>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
            Invierno
          </h4>
<p className="text-xs text-zinc-400 mb-6 h-10">
            El reino del hielo y las luces del norte. Mágico pero extremo.
          </p>
<div className="space-y-4 mb-6 flex-grow">
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Ideal Para
              </span>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Auroras Boreales (Pico)
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Cuevas de hielo
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Festivales de invierno
                </li>
</ul>
</div>
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Desventajas
              </span>
<p className="mt-1 text-xs text-zinc-500">
                Pocas horas de luz, carreteras heladas, frío extremo.
              </p>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              -5°C a 5°C
            </span>
</div>
</article>

<article className="season-card relative flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm" id="spring">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flower-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path>
<circle cx="12" cy="8" r="2"></circle>
<path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path>
</g>
</svg>
</span>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              Abr - May
            </span>
</div>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
            Primavera
          </h4>
<p className="text-xs text-zinc-400 mb-6 h-10">
            Transición asequible. La naturaleza despierta y el hielo se derrite.
          </p>
<div className="space-y-4 mb-6 flex-grow">
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Ideal Para
              </span>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-emerald-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Presupuesto ajustado
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-emerald-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Cascadas caudalosas
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-emerald-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Regreso de frailecillos
                </li>
</ul>
</div>
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Desventajas
              </span>
<p className="mt-1 text-xs text-zinc-500">
                Clima muy cambiante, algunos caminos aún cerrados.
              </p>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              0°C a 10°C
            </span>
</div>
</article>

<article className="season-card relative flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm" id="summer">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun-medium" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"></path>
</g>
</svg>
</span>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              Jun - Ago
            </span>
</div>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
            Verano
          </h4>
<p className="text-xs text-zinc-400 mb-6 h-10">
            Días infinitos bajo el sol de medianoche. Acceso total.
          </p>
<div className="space-y-4 mb-6 flex-grow">
<div className="">
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Ideal Para
              </span>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-amber-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Sol de medianoche
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-amber-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Tierras Altas (4x4)
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-amber-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Avistamiento de ballenas
                </li>
</ul>
</div>
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Desventajas
              </span>
<p className="mt-1 text-xs text-zinc-500">
                Precios máximos, mucha gente.
              </p>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              10°C a 18°C
            </span>
</div>
</article>

<article className="season-card relative flex flex-col p-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm" id="autumn">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-6">
<span className="inline-flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-orange-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:leaf" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
</g>
</svg>
</span>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
              Sep - Oct
            </span>
</div>
<h4 className="text-xl font-medium text-white mb-2 tracking-tight">
            Otoño
          </h4>
<p className="text-xs text-zinc-400 mb-6 h-10">
            El equilibrio dorado. Primeras auroras sin el frío extremo.
          </p>
<div className="space-y-4 mb-6 flex-grow">
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Ideal Para
              </span>
<ul className="mt-2 space-y-2">
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-orange-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Primeras Auroras
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-orange-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Colores otoñales
                </li>
<li className="flex items-start gap-2 text-xs text-zinc-300">
<svg aria-hidden="true" className="iconify text-orange-400 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Menos multitudes
                </li>
</ul>
</div>
<div>
<span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">
                Desventajas
              </span>
<p className="mt-1 text-xs text-zinc-500">
                Clima impredecible, días acortándose.
              </p>
</div>
</div>
<div className="pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              3°C a 10°C
            </span>
</div>
</article>
</div>
<div className="mt-24 pt-12 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
<div>
<h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<svg className="text-teal-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="m13 2 9 10-9 10"></path>
<path d="M22 12s-3-7-12-7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h5c9 0 12-7 12-7z"></path>
</svg>
              Vuelos desde Barcelona
            </h3>
<div className="p-1 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900/0">
<div className="rounded-xl bg-zinc-900/90 border border-white/5 p-6 backdrop-blur-sm">
<div className="relative h-40 w-full mb-6">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 400 160">
<path className="animate-pulse" d="M 40,120 Q 200,20 360,60" fill="none" stroke="url(#flightGradient)" stroke-dasharray="6 6" strokeWidth="2"></path>
<defs>
<lineargradient id="flightGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#52525b" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#2dd4bf"></stop>
<stop offset="100%" stop-color="#52525b" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<circle cx="40" cy="120" fill="#fff" r="3"></circle>
<circle cx="360" cy="60" fill="#2dd4bf" r="3"></circle>
</svg>
<div className="absolute left-6 bottom-4">
<div className="text-xs font-bold text-white">BCN</div>
<div className="text-[10px] text-zinc-500">Barcelona</div>
</div>
<div className="absolute right-6 top-8 text-right">
<div className="text-xs font-bold text-white">KEF</div>
<div className="text-[10px] text-zinc-500">Reykjavík</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950/80 border border-teal-500/30 px-3 py-1 rounded-full">
<span className="text-[10px] font-mono text-teal-300">
                      ~4h 40m
                    </span>
</div>
</div>
<div className="flex items-center justify-between text-xs pt-4 border-t border-white/5">
<div className="flex gap-4">
<span className="text-zinc-400">
                      Directos:
                      <span className="text-white">Vueling, Play</span>
</span>
</div>
<span className="text-teal-400">desde 280€</span>
</div>
</div>
</div>
</div>
<div className="relative min-h-[300px]">
<h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<svg className="text-teal-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
              Ruta Recomendada
            </h3>
<div className="absolute inset-x-0 top-12 p-8 text-center border border-dashed border-zinc-800 rounded-2xl transition-all duration-500" id="route-placeholder">
<p className="text-zinc-500 text-sm">
                Selecciona una experiencia arriba para ver el itinerario ideal.
              </p>
</div>
<div className="absolute inset-x-0 top-12 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-950/10 backdrop-blur-sm transition-all duration-500 opacity-0 pointer-events-none translate-y-4" id="route-aurora">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-white font-semibold">
                    South Coast &amp; Ice
                  </h4>
<p className="text-xs text-indigo-300">
                    Maximiza auroras y cuevas de hielo
                  </p>
</div>
<span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2 py-1 rounded uppercase">
                  Invierno
                </span>
</div>
<div className="space-y-3 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-indigo-500/20">
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-indigo-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-indigo-400 mb-0.5">
                    Días 1-2
                  </span>
<span className="text-sm text-zinc-300">
                    Círculo Dorado y cascadas del sur.
                  </span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-indigo-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-indigo-400 mb-0.5">
                    Días 3-5
                  </span>
<span className="text-sm text-zinc-300">
                    Glaciar Jökulsárlón, Cueva de Hielo Azul.
                  </span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-indigo-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-indigo-400 mb-0.5">
                    Días 6-7
                  </span>
<span className="text-sm text-zinc-300">
                    Sky Lagoon y Reykjavík.
                  </span>
</div>
</div>
</div>
<div className="absolute inset-x-0 top-12 p-6 rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-sm transition-all duration-500 opacity-0 pointer-events-none translate-y-4" id="route-summer">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-white font-semibold">Ring Road Express</h4>
<p className="text-xs text-amber-300">
                    Vuelta completa a la isla
                  </p>
</div>
<span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-1 rounded uppercase">
                  Verano
                </span>
</div>
<div className="space-y-3 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-amber-500/20">
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-amber-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-amber-400 mb-0.5">
                    Días 1-2
                  </span>
<span className="text-sm text-zinc-300">
                    Costa Sur rápida hasta Höfn.
                  </span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-amber-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-amber-400 mb-0.5">
                    Días 3-4
                  </span>
<span className="text-sm text-zinc-300">
                    Fiordos del Este y Lago Mývatn.
                  </span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-amber-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-amber-400 mb-0.5">
                    Días 5-7
                  </span>
<span className="text-sm text-zinc-300">
                    Akureyri, Ballenas y regreso.
                  </span>
</div>
</div>
</div>
<div className="absolute inset-x-0 top-12 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-sm transition-all duration-500 opacity-0 pointer-events-none translate-y-4" id="route-balance">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-white font-semibold">
                    West &amp; South Slow
                  </h4>
<p className="text-xs text-emerald-300">Naturaleza sin prisas</p>
</div>
<span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-1 rounded uppercase">
                  Otoño
                </span>
</div>
<div className="space-y-3 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-emerald-500/20">
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-emerald-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-emerald-400 mb-0.5">
                    Días 1-3
                  </span>
<span className="text-sm text-zinc-300">
                    Península de Snæfellsnes.
                  </span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-emerald-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-emerald-400 mb-0.5">
                    Días 4-6
                  </span>
<span className="text-sm text-zinc-300">
                    Costa Sur profunda y Playa Diamantes.
                  </span>
</div>
<div className="relative pl-8">
<div className="absolute left-0 top-1.5 w-6 h-1 bg-emerald-500/50 rounded-full"></div>
<span className="block text-xs font-mono text-emerald-400 mb-0.5">
                    Día 7
                  </span>
<span className="text-sm text-zinc-300">
                    Blue Lagoon antes del vuelo.
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-12 mt-12 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
<svg aria-hidden="true" className="iconify text-teal-400 iconify--lucide" data-icon="lucide:mountain-snow" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m8 3l4 8l5-5l5 15H2z"></path>
<path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"></path>
</g>
</svg>
<span className="font-semibold text-white tracking-tight">
            ISLANDIA 2025
          </span>
</div>
<p className="md:text-right text-xs text-zinc-600 text-center">
          © 2025 Guía de Viaje a Islandia.
        </p>
</div>
</footer>


    </>
  );
}
