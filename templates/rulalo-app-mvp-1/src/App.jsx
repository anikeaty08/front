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



      function showPage(pageId) {
          // Hide all pages
          document.querySelectorAll('.page-section').forEach(el => {
              el.classList.add('hidden');
          });
          // Show requested page
          const target = document.getElementById('page-' + pageId);
          if (target) {
              target.classList.remove('hidden');
              window.scrollTo(0, 0);
          }
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
          showPage('home');
      });
    
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
      

<nav className="sticky top-0 z-50 border-b bg-white border-stone-200">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">

<a className="text-2xl uppercase shrink-0 select-none font-geist font-semibold tracking-tighter" href="#" onclick="showPage('home'); return false;">
          RÚLALO
        </a>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full border py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:bg-white transition-colors duration-0 font-medium focus:border-cyan-600 placeholder:text-stone-400 bg-stone-50 border-stone-200" placeholder="¿Qué quieres alquilar hoy?" type="text"/>
</div>

<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-1.5 text-sm font-semibold transition-colors duration-0 hover:text-cyan-800">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="font-light font-geist tracking-tighter">Madrid</span>
</button>
<button className="text-sm px-5 py-2.5 transition-colors duration-0 uppercase font-light font-geist tracking-tighter text-white hover:bg-stone-900 bg-cyan-800" onclick="showPage('publish')">
            Publicar Artículo
          </button>
<div className="cursor-pointer border w-10 h-10 flex items-center justify-center transition-colors duration-0 border-stone-200 hover:border-stone-900 bg-stone-50" onclick="showPage('dashboard')">
<span className="text-sm font-light font-geist tracking-tighter">
              JP
            </span>
</div>
</div>
</div>
</nav>

<div className="md:hidden border-b p-4 bg-white border-stone-200">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full border py-3 pl-10 text-sm outline-none focus:border-cyan-600 bg-stone-50 border-stone-200" placeholder="Buscar..." type="text"/>
</div>
</div>

<main className="flex-grow" id="app-content">

<div className="page-section" id="page-home">

<section className="border-b border-stone-200 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium mb-6 font-geist tracking-tight">
<span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                  Plataforma P2P #1 en España
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] mb-6 font-geist text-stone-950">
                  Alquila sin comprar.
                  <span className="text-stone-400">Rentabiliza</span>
                  lo tuyo.
                </h1>
<p className="text-lg text-stone-600 mb-8 font-light font-geist tracking-tight leading-relaxed max-w-lg">
                  La comunidad segura para compartir cámaras, herramientas y
                  más. Ahorra dinero y espacio alquilando a tus vecinos.
                </p>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full h-14 pl-12 pr-4 bg-stone-50 border border-stone-200 focus:border-cyan-800 focus:bg-white transition-colors outline-none font-medium text-stone-900 placeholder:text-stone-400 rounded" placeholder="¿Qué necesitas hoy? (Ej. GoPro, Taladro)" type="text"/>
</div>
<button className="h-14 px-8 bg-stone-900 hover:bg-cyan-800 text-white font-medium uppercase tracking-tight transition-colors rounded" onclick="showPage('search')">
                    Buscar
                  </button>
</div>
<div className="mt-10 flex items-center gap-6 text-sm font-medium text-stone-500 font-geist tracking-tight">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-800 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span>Seguro incluido</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-800 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>+15k Usuarios</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-800 text-xl" icon="solar:verified-check-linear"></iconify-icon>
<span>Verificados</span>
</div>
</div>
</div>
<div className="relative h-full hidden lg:block">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-5 translate-y-8">
<div className="bg-stone-50 p-4 rounded-xl border border-stone-200 shadow-sm">
<img className="w-full aspect-[4/3] object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="flex justify-between items-center">
<span className="font-semibold text-sm font-geist tracking-tight">
                          Cámara EOS R5
                        </span>
<span className="text-xs bg-white border border-stone-200 px-2 py-1 rounded font-medium">
                          50€/día
                        </span>
</div>
</div>
<div className="bg-stone-900 p-6 rounded-xl text-white shadow-lg">
<div className="text-3xl font-bold mb-1 font-geist tracking-tighter">
                        4.9/5
                      </div>
<div className="text-sm text-stone-400 font-geist tracking-tight">
                        Valoración media de usuarios
                      </div>
</div>
</div>
<div className="space-y-5">
<div className="bg-cyan-800 p-6 rounded-xl text-white h-36 flex flex-col justify-between shadow-lg">
<iconify-icon icon="solar:wallet-linear" width="32"></iconify-icon>
<div>
<p className="font-semibold font-geist tracking-tight">
                          Gana dinero extra
                        </p>
<p className="text-xs text-cyan-200 font-geist tracking-tight">
                          Alquila tus cosas seguras
                        </p>
</div>
</div>
<div className="bg-stone-50 p-4 rounded-xl border border-stone-200 shadow-sm">
<img className="w-full aspect-square object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="flex justify-between items-center">
<span className="font-semibold text-sm font-geist tracking-tight">
                          Taladro Makita
                        </span>
<span className="text-xs bg-white border border-stone-200 px-2 py-1 rounded font-medium">
                          15€/día
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b overflow-hidden border-stone-200">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
<div className="flex gap-3 overflow-x-auto hide-scroll pb-2">

<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter text-white border-stone-900 bg-stone-900 hover:bg-cyan-800 hover:border-cyan-800">
                Todo
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Electrónica
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Fotografía
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Herramientas
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Deportes
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Eventos
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Vehículos
              </button>
<button className="border px-5 py-2 text-sm whitespace-nowrap transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:border-stone-900">
                Hogar
              </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<h2 className="text-2xl uppercase font-geist font-semibold tracking-tighter">
              Destacados cerca de ti
            </h2>
<div className="flex gap-4 text-sm font-medium">
<button className="flex items-center gap-1 font-light font-geist tracking-tighter hover:text-cyan-800">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon>
                Relevancia
              </button>
<button className="flex items-center gap-1 font-light font-geist tracking-tighter hover:text-cyan-800">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                Filtros
              </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">

<div className="group cursor-pointer" onclick="showPage('detail')">
<div className="aspect-[4/3] w-full overflow-hidden border mb-3 relative bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-0" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 text-xs border font-light font-geist tracking-tighter bg-white border-stone-200">
                  POPULAR
                </div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg leading-tight group-hover:underline decoration-2 underline-offset-4 font-light font-geist tracking-tighter decoration-cyan-800">
                  Cámara Canon EOS R5
                </h3>
<span className="text-lg font-light font-geist tracking-tighter">
                  50€
                  <span className="text-xs font-light font-geist tracking-tighter text-stone-500">
                    /día
                  </span>
</span>
</div>
<div className="flex items-center gap-2 text-sm mb-2 text-stone-500">
<span className="px-1.5 py-0.5 border text-xs font-light font-geist tracking-tighter bg-stone-100 border-stone-200 text-stone-900">
                  FOTOGRAFÍA
                </span>
<span className="flex items-center gap-1 font-light font-geist tracking-tighter">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Madrid Centro
                </span>
</div>
<div className="flex items-center justify-between border-t pt-2 mt-2 border-stone-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-200"></div>
<span className="text-xs font-light font-geist tracking-tighter">
                    Elena R.
                  </span>
</div>
<div className="flex items-center gap-1 text-xs font-light font-geist tracking-tighter">
<iconify-icon className="text-cyan-800" icon="solar:star-bold"></iconify-icon>
                  4.9 (24)
                </div>
</div>
</div>

<div className="group cursor-pointer" onclick="showPage('detail')">
<div className="aspect-[4/3] w-full overflow-hidden border mb-3 relative bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-0" src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg leading-tight group-hover:underline decoration-2 underline-offset-4 font-light font-geist tracking-tighter decoration-cyan-800">
                  Taladro Percutor Makita
                </h3>
<span className="text-lg font-light font-geist tracking-tighter">
                  15€
                  <span className="text-xs font-light font-geist tracking-tighter text-stone-500">
                    /día
                  </span>
</span>
</div>
<div className="flex items-center gap-2 text-sm mb-2 text-stone-500">
<span className="px-1.5 py-0.5 border text-xs font-light font-geist tracking-tighter bg-stone-100 border-stone-200 text-stone-900">
                  HERRAMIENTAS
                </span>
<span className="flex items-center gap-1 font-light font-geist tracking-tighter">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Chamberí
                </span>
</div>
<div className="flex items-center justify-between border-t pt-2 mt-2 border-stone-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-200"></div>
<span className="text-xs font-light font-geist tracking-tighter">
                    Carlos M.
                  </span>
</div>
<div className="flex items-center gap-1 text-xs font-light font-geist tracking-tighter">
<iconify-icon className="text-cyan-800" icon="solar:star-bold"></iconify-icon>
                  5.0 (12)
                </div>
</div>
</div>

<div className="group cursor-pointer" onclick="showPage('detail')">
<div className="aspect-[4/3] w-full overflow-hidden border mb-3 relative bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-0" src="https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg leading-tight group-hover:underline decoration-2 underline-offset-4 font-light font-geist tracking-tighter decoration-cyan-800">
                  DJI Mavic Air 2
                </h3>
<span className="text-lg font-light font-geist tracking-tighter">
                  35€
                  <span className="text-xs font-light font-geist tracking-tighter text-stone-500">
                    /día
                  </span>
</span>
</div>
<div className="flex items-center gap-2 text-sm mb-2 text-stone-500">
<span className="px-1.5 py-0.5 border text-xs font-light font-geist tracking-tighter bg-stone-100 border-stone-200 text-stone-900">
                  ELECTRÓNICA
                </span>
<span className="flex items-center gap-1 font-light font-geist tracking-tighter">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Retiro
                </span>
</div>
<div className="flex items-center justify-between border-t pt-2 mt-2 border-stone-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-200"></div>
<span className="text-xs font-light font-geist tracking-tighter">
                    Ana P.
                  </span>
</div>
<div className="flex items-center gap-1 text-xs font-light font-geist tracking-tighter">
<iconify-icon className="text-cyan-800" icon="solar:star-bold"></iconify-icon>
                  4.8 (8)
                </div>
</div>
</div>

<div className="group cursor-pointer" onclick="showPage('detail')">
<div className="aspect-[4/3] w-full overflow-hidden border mb-3 relative bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-0" src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg leading-tight group-hover:underline decoration-2 underline-offset-4 font-light font-geist tracking-tighter decoration-cyan-800">
                  Altavoz JBL PartyBox
                </h3>
<span className="text-lg font-light font-geist tracking-tighter">
                  40€
                  <span className="text-xs font-light font-geist tracking-tighter text-stone-500">
                    /día
                  </span>
</span>
</div>
<div className="flex items-center gap-2 text-sm mb-2 text-stone-500">
<span className="px-1.5 py-0.5 border text-xs font-light font-geist tracking-tighter bg-stone-100 border-stone-200 text-stone-900">
                  EVENTOS
                </span>
<span className="flex items-center gap-1 font-light font-geist tracking-tighter">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Salamanca
                </span>
</div>
<div className="flex items-center justify-between border-t pt-2 mt-2 border-stone-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-stone-200"></div>
<span className="text-xs font-light font-geist tracking-tighter">
                    Javi G.
                  </span>
</div>
<div className="flex items-center gap-1 text-xs font-light font-geist tracking-tighter">
<iconify-icon className="text-cyan-800" icon="solar:star-bold"></iconify-icon>
                  5.0 (42)
                </div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="border px-8 py-3 text-sm uppercase transition-colors duration-0 font-light font-geist tracking-tighter hover:text-white border-stone-900 hover:bg-stone-900">
              Ver más artículos
            </button>
</div>
</section>
</div>

<div className="page-section hidden" id="page-search">
<div className="flex flex-col lg:flex-row min-h-screen">

<aside className="w-full lg:w-72 border-b lg:border-b-0 lg:border-r p-6 bg-white border-stone-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg uppercase font-light font-geist tracking-tighter">
                Filtros
              </h2>
<button className="text-xs underline font-light font-geist tracking-tighter text-stone-500 hover:text-cyan-800">
                Limpiar
              </button>
</div>
<div className="space-y-8">

<div>
<h3 className="text-sm mb-3 font-light font-geist tracking-tighter">
                  Categoría
                </h3>
<div className="space-y-2">
<label className="custom-checkbox flex items-center gap-2 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border transition-colors duration-0 flex items-center justify-center group-hover:border-stone-800 border-stone-300"></div>
<span className="text-sm font-light font-geist tracking-tighter">
                      Electrónica (120)
                    </span>
</label>
<label className="custom-checkbox flex items-center gap-2 cursor-pointer group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border transition-colors duration-0 flex items-center justify-center group-hover:border-stone-800 border-stone-300"></div>
<span className="text-sm font-light font-geist tracking-tighter">
                      Herramientas (45)
                    </span>
</label>
<label className="custom-checkbox flex items-center gap-2 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border transition-colors duration-0 flex items-center justify-center group-hover:border-stone-800 border-stone-300"></div>
<span className="text-sm font-light font-geist tracking-tighter">
                      Hogar (30)
                    </span>
</label>
</div>
</div>

<div>
<h3 className="text-sm mb-3 font-light font-geist tracking-tighter">
                  Precio / día
                </h3>
<div className="flex gap-2 items-center mb-4">
<input className="w-full border p-2 text-sm outline-none focus:border-cyan-600 border-stone-300" placeholder="Min" type="number"/>
<span className="font-light font-geist tracking-tighter text-stone-400">
                    -
                  </span>
<input className="w-full border p-2 text-sm outline-none focus:border-cyan-600 border-stone-300" placeholder="Max" type="number"/>
</div>
<input className="w-full h-0.5 appearance-none cursor-pointer bg-stone-200 accent-cyan-800" type="range"/>
</div>

<div>
<h3 className="text-sm mb-3 font-light font-geist tracking-tighter">
                  Distancia
                </h3>
<div className="flex items-center justify-between text-sm mb-2 text-stone-500">
<span className="font-light font-geist tracking-tighter">
                    +1 km
                  </span>
<span className="font-light font-geist tracking-tighter">
                    +50 km
                  </span>
</div>
<input className="w-full h-0.5 appearance-none cursor-pointer bg-stone-200 accent-cyan-800" type="range"/>
</div>
</div>
</aside>

<div className="flex-1 p-4 md:p-8">
<div className="flex justify-between items-center mb-6">
<h1 className="text-xl font-geist font-semibold tracking-tighter">
                165 resultados para "Madrid"
              </h1>
<div className="flex gap-2">
<button className="border p-2 text-white border-stone-200 hover:border-stone-900 bg-stone-900">
<iconify-icon icon="solar:list-linear" width="20"></iconify-icon>
</button>
<button className="border p-2 text-stone-500 border-stone-200 hover:border-stone-900 hover:text-stone-900">
<iconify-icon icon="solar:map-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer border p-3 transition-colors duration-0 border-stone-200 hover:border-stone-400" onclick="showPage('detail')">
<div className="aspect-square mb-3 overflow-hidden bg-stone-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="truncate font-light font-geist tracking-tighter">
                  Proyector Epson 4K
                </h3>
<p className="text-sm mb-2 font-light font-geist tracking-tighter text-stone-500">
                  Chamberí • A 2km
                </p>
<div className="flex justify-between items-center">
<span className="font-light font-geist tracking-tighter text-cyan-800">
                    25€/día
                  </span>
<span className="text-xs border px-1 font-light font-geist tracking-tighter border-stone-200">
                    4.5 ★
                  </span>
</div>
</div>
<div className="group cursor-pointer border p-3 transition-colors duration-0 border-stone-200 hover:border-stone-400" onclick="showPage('detail')">
<div className="aspect-square mb-3 overflow-hidden bg-stone-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="truncate font-light font-geist tracking-tighter">
                  Teclado Nord Stage 3
                </h3>
<p className="text-sm mb-2 font-light font-geist tracking-tighter text-stone-500">
                  Malasaña • A 1.2km
                </p>
<div className="flex justify-between items-center">
<span className="font-light font-geist tracking-tighter text-cyan-800">
                    60€/día
                  </span>
<span className="text-xs border px-1 font-light font-geist tracking-tighter border-stone-200">
                    5.0 ★
                  </span>
</div>
</div>
</div>

<div className="flex justify-center mt-12 gap-1">
<button className="w-10 h-10 border flex items-center justify-center font-light font-geist tracking-tighter border-stone-200 hover:bg-stone-100">
                &lt;
              </button>
<button className="w-10 h-10 border flex items-center justify-center font-light font-geist tracking-tighter text-white border-stone-900 bg-stone-900">
                1
              </button>
<button className="w-10 h-10 border flex items-center justify-center font-light font-geist tracking-tighter border-stone-200 hover:bg-stone-100">
                2
              </button>
<button className="w-10 h-10 border flex items-center justify-center font-light font-geist tracking-tighter border-stone-200 hover:bg-stone-100">
                3
              </button>
<button className="w-10 h-10 border flex items-center justify-center font-light font-geist tracking-tighter border-stone-200 hover:bg-stone-100">
                &gt;
              </button>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-detail">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">

<div className="flex items-center gap-2 text-xs uppercase font-semibold mb-6 text-stone-500">
<a className="font-light font-geist tracking-tighter hover:text-stone-900" href="#">
              Inicio
            </a>
<span className="font-light font-geist tracking-tighter">/</span>
<a className="font-light font-geist tracking-tighter hover:text-stone-900" href="#">
              Fotografía
            </a>
<span className="font-light font-geist tracking-tighter">/</span>
<span className="font-light font-geist tracking-tighter text-stone-900">
              Cámara Canon EOS R5
            </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-7">
<div className="aspect-[4/3] border mb-2 overflow-hidden bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="aspect-square border cursor-pointer overflow-hidden bg-stone-100 border-cyan-800">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"/>
</div>
<div className="aspect-square border cursor-pointer overflow-hidden bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4"/>
</div>
<div className="aspect-square border cursor-pointer overflow-hidden bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1552168324-d612d77725e3"/>
</div>
<div className="aspect-square border cursor-pointer overflow-hidden bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="mt-10">
<h2 className="text-xl uppercase mb-4 pb-2 border-b font-geist font-semibold tracking-tighter border-stone-200">
                  Descripción
                </h2>
<p className="leading-relaxed mb-6 font-light font-geist tracking-tighter text-stone-700">
                  Cámara mirrorless profesional Canon EOS R5 cuerpo. En perfecto
                  estado, ideal para producciones de video 8K y fotografía de
                  alta resolución. Incluye batería original, cargador y correa.
                  Tarjetas CFExpress no incluidas (se pueden alquilar aparte).
                </p>
<div className="flex gap-2 mb-8">
<span className="border px-3 py-1 text-xs font-light font-geist tracking-tighter border-stone-200 bg-stone-50 text-stone-600">
                    ESTADO: COMO NUEVO
                  </span>
<span className="border px-3 py-1 text-xs font-light font-geist tracking-tighter border-stone-200 bg-stone-50 text-stone-600">
                    MARCA: CANON
                  </span>
</div>
<h2 className="text-xl uppercase mb-4 pb-2 border-b font-geist font-semibold tracking-tighter border-stone-200">
                  Opiniones (3)
                </h2>
<div className="space-y-6">
<div className="border-b pb-4 border-stone-100">
<div className="flex justify-between mb-2">
<span className="text-sm font-light font-geist tracking-tighter">
                        Miguel Ángel
                      </span>
<div className="flex text-xs text-cyan-800">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-sm font-light font-geist tracking-tighter text-stone-600">
                      Equipo impecable. Elena fue muy puntual en la entrega.
                      Recomendado.
                    </p>
</div>
<div className="border-b pb-4 border-stone-100">
<div className="flex justify-between mb-2">
<span className="text-sm font-light font-geist tracking-tighter">
                        Lucía G.
                      </span>
<div className="flex text-xs text-cyan-800">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-outline"></iconify-icon>
</div>
</div>
<p className="text-sm font-light font-geist tracking-tighter text-stone-600">
                      Todo bien, aunque la batería no estaba al 100%.
                    </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-8">
<div>
<span className="inline-block border px-2 py-0.5 text-xs mb-3 uppercase font-light font-geist tracking-tighter text-cyan-800 border-cyan-800">
                  Fotografía
                </span>
<h1 className="text-4xl uppercase leading-none mb-4 font-geist font-semibold tracking-tighter">
                  Canon EOS R5 Body
                </h1>
<div className="flex items-center gap-2 text-sm font-light font-geist tracking-tighter text-stone-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Madrid Centro, España
                </div>
</div>

<div className="border p-4 flex items-center justify-between border-stone-200">
<div className="flex items-center gap-3">
<div className="w-12 h-12 overflow-hidden bg-stone-200">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=elena"/>
</div>
<div>
<p className="text-sm font-light font-geist tracking-tighter">
                      Elena R.
                    </p>
<p className="text-xs font-light font-geist tracking-tighter text-stone-500">
                      Miembro desde 2021
                    </p>
<div className="flex items-center gap-1 text-xs mt-1">
<iconify-icon className="text-cyan-800" icon="solar:star-bold"></iconify-icon>
<span className="font-light font-geist tracking-tighter">
                        4.9
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        (24 reseñas)
                      </span>
</div>
</div>
</div>
<button className="border px-4 py-2 text-xs uppercase transition-colors duration-0 font-light font-geist tracking-tighter border-stone-300 hover:bg-stone-50">
                  Contactar
                </button>
</div>

<div className="border p-6 border-stone-900 bg-stone-50">
<div className="flex items-end gap-2 mb-6">
<span className="text-4xl font-geist font-semibold tracking-tighter text-cyan-800">
                    50€
                  </span>
<span className="text-sm mb-1 font-light font-geist tracking-tighter text-stone-500">
                    / día
                  </span>
</div>
<div className="space-y-4 mb-6">
<div className="flex justify-between text-sm">
<span className="font-light font-geist tracking-tighter text-stone-600">
                      Precio semanal
                    </span>
<span className="font-light font-geist tracking-tighter">
                      300€
                      <span className="text-xs font-light font-geist tracking-tighter text-emerald-600">
                        (-15%)
                      </span>
</span>
</div>
<div className="flex justify-between text-sm">
<span className="font-light font-geist tracking-tighter text-stone-600">
                      Fianza
                    </span>
<span className="font-light font-geist tracking-tighter">
                      200€
                    </span>
</div>
<div className="flex justify-between text-sm border-t pt-4 border-stone-200">
<span className="font-light font-geist tracking-tighter">
                      Total estimado (2 días)
                    </span>
<span className="text-lg font-light font-geist tracking-tighter">
                      100€
                    </span>
</div>
</div>

<div className="mb-6">
<label className="block text-xs uppercase mb-2 font-light font-geist tracking-tighter">
                    Seleccionar fechas
                  </label>
<div className="border p-2 bg-white border-stone-300">
<div className="flex justify-between items-center mb-2 px-2">
<span className="text-sm font-light font-geist tracking-tighter">
                        Octubre 2023
                      </span>
<div className="flex gap-1">
<iconify-icon className="cursor-pointer" icon="solar:alt-arrow-left-linear"></iconify-icon>
<iconify-icon className="cursor-pointer" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-7 text-center text-xs gap-1">
<span className="font-light font-geist tracking-tighter text-stone-400">
                        L
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        M
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        X
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        J
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        V
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        S
                      </span>
<span className="font-light font-geist tracking-tighter text-stone-400">
                        D
                      </span>

<span className="p-1 font-light font-geist tracking-tighter text-stone-300">
                        28
                      </span>
<span className="p-1 font-light font-geist tracking-tighter text-stone-300">
                        29
                      </span>
<span className="p-1 font-light font-geist tracking-tighter text-stone-300">
                        30
                      </span>
<span className="p-1 cursor-pointer font-light font-geist tracking-tighter hover:bg-stone-100">
                        1
                      </span>
<span className="p-1 cursor-pointer font-light font-geist tracking-tighter hover:bg-stone-100">
                        2
                      </span>
<span className="p-1 cursor-pointer font-light font-geist tracking-tighter hover:bg-stone-100">
                        3
                      </span>
<span className="p-1 cursor-pointer font-light font-geist tracking-tighter hover:bg-stone-100">
                        4
                      </span>
<span className="p-1 font-light font-geist tracking-tighter text-white bg-stone-900">
                        5
                      </span>
<span className="p-1 border-t border-b font-light font-geist tracking-tighter bg-stone-100 border-stone-900">
                        6
                      </span>
<span className="p-1 font-light font-geist tracking-tighter text-white bg-cyan-800">
                        7
                      </span>
<span className="p-1 cursor-pointer font-light font-geist tracking-tighter hover:bg-stone-100">
                        8
                      </span>
</div>
</div>
</div>
<button className="w-full py-4 uppercase transition-colors duration-0 font-light font-geist tracking-tighter text-white hover:bg-cyan-700 bg-cyan-800">
                  Solicitar Alquiler
                </button>
<p className="text-center text-xs mt-3 font-light font-geist tracking-tighter text-stone-400">
                  No se te cobrará nada todavía.
                </p>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden bg-stone-50" id="page-dashboard">
<div className="max-w-7xl mx-auto md:flex min-h-[calc(100vh-64px)]">

<aside className="w-full md:w-64 border-r bg-white border-stone-200">
<div className="p-6 border-b border-stone-200">
<h2 className="text-xl uppercase font-geist font-semibold tracking-tighter">
                Mi Cuenta
              </h2>
</div>
<nav className="flex flex-col">
<a className="px-6 py-4 border-l-4 text-sm font-light font-geist tracking-tighter bg-stone-50 text-cyan-800 border-cyan-800" href="#">
                Resumen
              </a>
<a className="px-6 py-4 border-l-4 border-transparent text-sm transition-colors duration-0 font-light font-geist tracking-tighter hover:bg-stone-50 text-stone-600 hover:text-stone-900" href="#">
                Mis Alquileres
              </a>
<a className="px-6 py-4 border-l-4 border-transparent text-sm transition-colors duration-0 font-light font-geist tracking-tighter hover:bg-stone-50 text-stone-600 hover:text-stone-900" href="#">
                Mis Artículos
              </a>
<a className="px-6 py-4 border-l-4 border-transparent text-sm transition-colors duration-0 flex justify-between font-light font-geist tracking-tighter hover:bg-stone-50 text-stone-600 hover:text-stone-900" href="#">
                Solicitudes
                <span className="text-[10px] px-1.5 py-0.5 font-light font-geist tracking-tighter text-white bg-cyan-800">
                  2
                </span>
</a>
<a className="px-6 py-4 border-l-4 border-transparent text-sm transition-colors duration-0 font-light font-geist tracking-tighter hover:bg-stone-50 text-stone-600 hover:text-stone-900" href="#">
                Mensajes
              </a>
<a className="px-6 py-4 border-l-4 border-transparent text-sm transition-colors duration-0 font-light font-geist tracking-tighter hover:bg-stone-50 text-stone-600 hover:text-stone-900" href="#">
                Ganancias
              </a>
<a className="px-6 py-4 border-l-4 border-transparent text-sm transition-colors duration-0 font-light font-geist tracking-tighter hover:bg-stone-50 text-stone-600 hover:text-stone-900" href="#">
                Perfil
              </a>
</nav>
</aside>

<div className="flex-1 p-8">
<h1 className="text-2xl uppercase mb-8 font-geist font-semibold tracking-tighter">
              Panel de Control
            </h1>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
<div className="border p-6 bg-white border-stone-200">
<p className="text-xs uppercase mb-2 font-light font-geist tracking-tighter text-stone-400">
                  Ganancias Totales
                </p>
<p className="text-3xl font-geist font-semibold tracking-tighter">
                  €1,240.50
                </p>
</div>
<div className="border p-6 bg-white border-stone-200">
<p className="text-xs uppercase mb-2 font-light font-geist tracking-tighter text-stone-400">
                  Alquileres Activos
                </p>
<p className="text-3xl font-geist font-semibold tracking-tighter text-cyan-800">
                  3
                </p>
</div>
<div className="border p-6 bg-white border-stone-200">
<p className="text-xs uppercase mb-2 font-light font-geist tracking-tighter text-stone-400">
                  Valoración
                </p>
<div className="flex items-center gap-2">
<p className="text-3xl font-geist font-semibold tracking-tighter">
                    4.9
                  </p>
<iconify-icon className="text-xl text-cyan-800" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>

<div className="border p-6 mb-8 bg-white border-stone-200">
<h3 className="text-lg mb-4 uppercase font-light font-geist tracking-tighter">
                Solicitudes Pendientes
              </h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm border-collapse">
<thead>
<tr className="border-b border-stone-200">
<th className="py-3 uppercase text-xs font-light font-geist tracking-tighter text-stone-500">
                        Artículo
                      </th>
<th className="py-3 uppercase text-xs font-light font-geist tracking-tighter text-stone-500">
                        Solicitante
                      </th>
<th className="py-3 uppercase text-xs font-light font-geist tracking-tighter text-stone-500">
                        Fechas
                      </th>
<th className="py-3 uppercase text-xs font-light font-geist tracking-tighter text-stone-500">
                        Total
                      </th>
<th className="py-3 uppercase text-xs text-right font-light font-geist tracking-tighter text-stone-500">
                        Acción
                      </th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr>
<td className="py-4 font-light font-geist tracking-tighter">
                        GoPro Hero 11
                      </td>
<td className="py-4 flex items-center gap-2 font-light font-geist tracking-tighter">
<div className="w-6 h-6 bg-stone-200"></div>
                        Javier M.
                      </td>
<td className="py-4 font-light font-geist tracking-tighter">
                        12 Oct - 15 Oct
                      </td>
<td className="py-4 font-light font-geist tracking-tighter">
                        €45.00
                      </td>
<td className="py-4 text-right">
<button className="text-xs hover:underline mr-3 uppercase font-light font-geist tracking-tighter text-cyan-800">
                          Aceptar
                        </button>
<button className="text-xs hover:underline uppercase font-light font-geist tracking-tighter text-red-600">
                          Rechazar
                        </button>
</td>
</tr>
<tr>
<td className="py-4 font-light font-geist tracking-tighter">
                        Canon EOS R5
                      </td>
<td className="py-4 flex items-center gap-2 font-light font-geist tracking-tighter">
<div className="w-6 h-6 bg-stone-200"></div>
                        Sara L.
                      </td>
<td className="py-4 font-light font-geist tracking-tighter">
                        20 Oct - 21 Oct
                      </td>
<td className="py-4 font-light font-geist tracking-tighter">
                        €50.00
                      </td>
<td className="py-4 text-right">
<button className="text-xs hover:underline mr-3 uppercase font-light font-geist tracking-tighter text-cyan-800">
                          Aceptar
                        </button>
<button className="text-xs hover:underline uppercase font-light font-geist tracking-tighter text-red-600">
                          Rechazar
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="border p-6 bg-white border-stone-200">
<h3 className="text-lg mb-4 uppercase font-light font-geist tracking-tighter">
                Mis Alquileres (Como cliente)
              </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border p-4 flex gap-4 border-stone-200">
<div className="w-20 h-20 shrink-0 border bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-light font-geist tracking-tighter">
                      Teclado Nord Stage 3
                    </h4>
<p className="text-xs mb-2 font-light font-geist tracking-tighter text-stone-500">
                      Devolución: Mañana
                    </p>
<span className="text-[10px] px-2 py-0.5 uppercase font-light font-geist tracking-tighter text-white bg-cyan-800">
                      En curso
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-publish">
<div className="max-w-3xl mx-auto px-4 py-12">
<div className="text-center mb-10">
<h1 className="text-3xl uppercase mb-2 font-geist font-semibold tracking-tighter">
              Publicar Artículo
            </h1>
<p className="font-light font-geist tracking-tighter text-stone-500">
              Completa los detalles para empezar a ganar dinero.
            </p>
</div>
<form className="space-y-8">

<div>
<label className="block text-sm uppercase mb-3 font-light font-geist tracking-tighter">
                Fotos del producto
              </label>
<div className="grid grid-cols-3 md:grid-cols-5 gap-3">
<div className="aspect-square border border-dashed flex flex-col items-center justify-center cursor-pointer transition-colors duration-0 border-stone-400 bg-stone-50 text-stone-400 hover:bg-stone-100 hover:text-cyan-800 hover:border-cyan-800">
<iconify-icon icon="solar:camera-add-linear" width="24"></iconify-icon>
<span className="text-[10px] mt-1 uppercase font-light font-geist tracking-tighter">
                    Añadir
                  </span>
</div>
<div className="aspect-square border relative group bg-stone-100 border-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=200"/>
<button className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center text-xs font-light font-geist tracking-tighter text-white bg-red-600 hover:bg-red-700" type="button">
                    ×
                  </button>
</div>
</div>
<p className="text-xs mt-2 font-light font-geist tracking-tighter text-stone-400">
                Sube hasta 5 fotos. La primera será la portada.
              </p>
</div>

<div className="space-y-4">
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                  Título
                </label>
<input className="w-full border p-3 text-sm outline-none font-medium focus:border-cyan-600 border-stone-300" placeholder="Ej. Bicicleta de montaña Trek X-Caliber" type="text"/>
</div>
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                  Descripción
                </label>
<textarea className="w-full border p-3 text-sm outline-none font-medium resize-none focus:border-cyan-600 border-stone-300" placeholder="Describe el estado, características y accesorios incluidos..." rows="4"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                    Categoría
                  </label>
<div className="relative">
<select className="w-full border p-3 text-sm outline-none font-medium appearance-none bg-white focus:border-cyan-600 border-stone-300">
<option className="font-light font-geist tracking-tighter">
                        Seleccionar...
                      </option>
<option className="font-light font-geist tracking-tighter">
                        Electrónica
                      </option>
<option className="font-light font-geist tracking-tighter">
                        Herramientas
                      </option>
<option className="font-light font-geist tracking-tighter">
                        Fotografía
                      </option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                    Estado
                  </label>
<div className="relative">
<select className="w-full border p-3 text-sm outline-none font-medium appearance-none bg-white focus:border-cyan-600 border-stone-300">
<option className="font-light font-geist tracking-tighter">
                        Como nuevo
                      </option>
<option className="font-light font-geist tracking-tighter">
                        Buen estado
                      </option>
<option className="font-light font-geist tracking-tighter">
                        Usado
                      </option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border-t pt-6 border-stone-200">
<h3 className="text-lg mb-4 uppercase font-light font-geist tracking-tighter">
                Precio y Disponibilidad
              </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                    Precio / día (€)
                  </label>
<input className="w-full border p-3 text-sm outline-none font-bold focus:border-cyan-600 border-stone-300" type="number"/>
</div>
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                    Precio / semana (Opcional)
                  </label>
<input className="w-full border p-3 text-sm outline-none font-medium focus:border-cyan-600 border-stone-300" type="number"/>
</div>
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                    Fianza (€)
                  </label>
<input className="w-full border p-3 text-sm outline-none font-medium focus:border-cyan-600 border-stone-300" type="number"/>
</div>
</div>
<div className="flex items-center gap-2 mb-6">
<label className="custom-checkbox flex items-center gap-2 cursor-pointer group select-none">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-5 h-5 border transition-colors duration-0 flex items-center justify-center bg-white group-hover:border-stone-800 border-stone-300"></div>
<span className="text-sm font-light font-geist tracking-tighter">
                    Disponible inmediatamente
                  </span>
</label>
</div>
<div>
<label className="block text-xs uppercase mb-1 font-light font-geist tracking-tighter">
                  Ubicación
                </label>
<div className="relative">
<input className="w-full border p-3 pl-9 text-sm outline-none font-medium focus:border-cyan-600 border-stone-300" type="text" value="Madrid, Calle de Alcalá"/>
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
</div>
<div className="pt-6 border-t flex justify-end gap-4 border-stone-200">
<button className="px-6 py-3 uppercase text-sm hover:underline font-light font-geist tracking-tighter" onclick="showPage('home')" type="button">
                Cancelar
              </button>
<button className="px-8 py-3 uppercase text-sm transition-colors duration-0 font-light font-geist tracking-tighter text-white hover:bg-stone-900 bg-cyan-800" onclick="alert('Artículo publicado con éxito')" type="button">
                Publicar
              </button>
</div>
</form>
</div>
</div>
</main>

<footer className="border-t mt-auto text-white bg-stone-950 border-stone-800">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<a className="inline-block text-xl uppercase mb-4 font-geist font-semibold tracking-tighter hover:text-stone-300 transition-colors" href="#" onclick="showPage('home'); return false;">
              Rúlalo
            </a>
<p className="text-sm max-w-xs font-light font-geist tracking-tighter text-stone-500">
              La plataforma peer-to-peer para alquilar cualquier cosa, en
              cualquier lugar. Seguro, rápido y rentable.
            </p>
</div>
<div>
<h4 className="uppercase text-sm mb-4 font-light font-geist tracking-tighter">
              Explorar
            </h4>
<ul className="space-y-2 text-sm text-stone-400">
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Electrónica
                </a>
</li>
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Fotografía
                </a>
</li>
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Herramientas
                </a>
</li>
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Vehículos
                </a>
</li>
</ul>
</div>
<div>
<h4 className="uppercase text-sm mb-4 font-light font-geist tracking-tighter">
              Comunidad
            </h4>
<ul className="space-y-2 text-sm text-stone-400">
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Cómo funciona
                </a>
</li>
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Seguridad
                </a>
</li>
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Centro de ayuda
                </a>
</li>
</ul>
</div>
<div>
<h4 className="uppercase text-sm mb-4 font-light font-geist tracking-tighter">
              Legal
            </h4>
<ul className="space-y-2 text-sm text-stone-400">
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Términos
                </a>
</li>
<li>
<a className="font-light font-geist tracking-tighter hover:text-white" href="#">
                  Privacidad
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-900 text-stone-600">
<p className="font-light font-geist tracking-tighter">
            © 2023 Rúlalo Inc. Todos los derechos reservados.
          </p>
<div className="flex gap-4">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:monitor-camera-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
