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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>

<header className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-5">
<a className="group inline-flex items-center gap-2" href="/">
<span className="h-2 w-2 rounded-full bg-emerald-400/80 group-hover:bg-emerald-300 transition-colors"></span>
<span className="text-zinc-100 text-lg tracking-tight font-medium">paando</span>
</a>
<nav className="flex items-center gap-6">
<a className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm" href="/blog">Blog</a>
<a className="text-zinc-200 text-sm" href="/cursos">Cursos</a>
<a className="text-zinc-400 hover:text-zinc-200 transition-colors text-sm" href="/comunidad">Comunidad</a>
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-100 text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-white transition" href="/empieza">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Empieza ahora
            </a>
</nav>
</div>
</div>
</header>
<main>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="py-8 sm:py-12">
<h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-zinc-50 font-semibold" data-animate="fade">
              Cursos de bienestar guiados por expertos
            </h1>
<p className="mt-3 text-zinc-400 text-base sm:text-lg max-w-2xl" data-animate="fade">
              Explora clases diseñadas para nutrir mente, cuerpo y espíritu.
            </p>

<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent"></div>

<div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
<span className="rounded-full bg-zinc-900/60 ring-1 ring-zinc-800 px-3 py-1">Prácticas guiadas</span>
<span className="rounded-full bg-zinc-900/60 ring-1 ring-zinc-800 px-3 py-1">Audio + Video</span>
<span className="rounded-full bg-zinc-900/60 ring-1 ring-zinc-800 px-3 py-1">En español</span>
</div>
</div>
</div>
</section>

<section className="sticky top-0 z-40 border-b border-zinc-800/60 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<i className="h-4 w-4" data-lucide="filter"></i>
                Filtros
              </div>
<button className="hidden md:inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 transition" id="clearFilters">
                Limpiar
                <i className="h-3.5 w-3.5" data-lucide="x"></i>
</button>
</div>
<div className="flex flex-wrap items-center gap-2">

<button className="chip active inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-zinc-100 text-zinc-900 ring-1 ring-zinc-300 hover:bg-white transition" data-chip="todos">
                Todos
              </button>
<button className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-zinc-900/60 text-zinc-300 ring-1 ring-zinc-800 hover:ring-zinc-700 transition" data-chip="mente">
                Mente
              </button>
<button className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-zinc-900/60 text-zinc-300 ring-1 ring-zinc-800 hover:ring-zinc-700 transition" data-chip="cuerpo">
                Cuerpo
              </button>
<button className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-zinc-900/60 text-zinc-300 ring-1 ring-zinc-800 hover:ring-zinc-700 transition" data-chip="espiritu">
                Espíritu
              </button>
<button className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-zinc-900/60 text-zinc-300 ring-1 ring-zinc-800 hover:ring-zinc-700 transition" data-chip="certificados">
                Certificados
              </button>

<span className="mx-2 hidden h-5 w-px bg-zinc-800 sm:block"></span>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm bg-zinc-900/60 text-zinc-300 ring-1 ring-zinc-800 hover:ring-zinc-700 transition" id="durationBtn">
<i className="h-4 w-4" data-lucide="clock"></i>
<span id="durationLabel">Duración: Todas</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 pointer-events-none absolute z-50 mt-2 w-56 rounded-xl border border-zinc-800 bg-neutral-950/95 backdrop-blur p-1 shadow-2xl transition" id="durationMenu">
<button className="w-full text-left rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900" data-duration="todas">Todas</button>
<button className="w-full text-left rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900" data-duration="corta">0–15 min</button>
<button className="w-full text-left rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900" data-duration="media">15–45 min</button>
<button className="w-full text-left rounded-lg px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900" data-duration="larga">+45 min</button>
</div>
</div>

<div className="ml-auto hidden md:block">
<label className="sr-only" htmlFor="search">Buscar cursos</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" data-lucide="search"></i>
<input className="w-64 rounded-full bg-zinc-900/60 ring-1 ring-zinc-800 focus:ring-zinc-600 outline-none pl-10 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-500" id="search" placeholder="Buscar cursos..." type="text"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-hidden="true" className="sr-only">
<h2>Mente</h2>
<h2>Cuerpo</h2>
<h2>Espíritu</h2>
<h2>Certificados</h2>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between pt-10">
<h2 className="text-2xl sm:text-3xl tracking-tight text-zinc-50 font-semibold" data-animate="fade">
              Cursos destacados de este mes
            </h2>
<a className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition" href="#grid">
              Ver todos
              <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="fade">

<a className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" href="/curso/respiracion-consciente" title="Respiración consciente para reducir estrés | Curso de bienestar en español | Paando">
<div className="relative h-56 overflow-hidden">
<img alt="Curso de respiración consciente guiado por María López en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
<span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 text-emerald-950 text-xs font-medium px-2.5 py-1 shadow">
                  Nuevo
                </span>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Mente</span>
<span className="text-xs text-zinc-500">0–15 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition">
                  Respiración consciente para reducir estrés
                </h3>
<p className="mt-1 text-sm text-zinc-400">por María López</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" href="/curso/yoga-restaurativo" title="Yoga restaurativo al atardecer | Curso de bienestar en español | Paando">
<div className="relative h-56 overflow-hidden">
<img alt="Curso de yoga restaurativo guiado por Sofía Pérez en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
<span className="absolute left-3 top-3 rounded-full bg-indigo-400/90 text-indigo-950 text-xs font-medium px-2.5 py-1 shadow">
                  Popular
                </span>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Cuerpo</span>
<span className="text-xs text-zinc-500">+45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition">
                  Yoga restaurativo al atardecer
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Sofía Pérez</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" href="/curso/sonoterapia-descanso" title="Sonoterapia: vibraciones para el descanso | Curso de bienestar en español | Paando">
<div className="relative h-56 overflow-hidden">
<img alt="Curso de sonoterapia guiado por Pablo Vega en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
<span className="absolute left-3 top-3 rounded-full bg-fuchsia-400/90 text-fuchsia-950 text-xs font-medium px-2.5 py-1 shadow">
                  Nuevo
                </span>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Espíritu</span>
<span className="text-xs text-zinc-500">15–45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition">
                  Sonoterapia: vibraciones para el descanso
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Pablo Vega</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative mt-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900/40">
<div className="relative p-6 sm:p-10">
<div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
<div className="flex -space-x-3">
<img alt="" className="h-14 w-14 rounded-full object-cover ring-2 ring-zinc-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-14 w-14 rounded-full object-cover ring-2 ring-zinc-900" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-14 w-14 rounded-full object-cover ring-2 ring-zinc-900" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center md:text-left">
<p className="text-lg tracking-tight text-zinc-50 font-medium">Cursos creados por guías certificados</p>
<p className="mt-1 text-zinc-400">Acompañamiento real en cada práctica.</p>
</div>
<div className="md:ml-auto">
<a className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900 transition" href="/instructores">
                    Conocer instructores
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-14" id="grid">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="fade" id="coursesGrid">


<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="mente" data-duration="corta" data-instructor="maría lopez" data-title="respiración consciente reducir estrés" href="/curso/respiracion-consciente" title="Respiración consciente para reducir estrés | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de respiración consciente guiado por María López en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Mente</span>
<span className="text-xs text-zinc-500">0–15 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Respiración consciente para reducir estrés
                </h3>
<p className="mt-1 text-sm text-zinc-400">por María López</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="cuerpo" data-duration="media" data-instructor="diego ruiz" data-title="movilidad presencia movimiento suave" href="/curso/movimiento-suave" title="Movimiento suave: movilidad y presencia | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de movilidad y presencia guiado por Diego Ruiz en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Cuerpo</span>
<span className="text-xs text-zinc-500">15–45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Movimiento suave: movilidad y presencia
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Diego Ruiz</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="mente" data-duration="corta" data-instructor="ana torres" data-title="meditación guiada despertar mañana" href="/curso/meditacion-despertar" title="Meditación guiada al despertar | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de meditación al despertar guiado por Ana Torres en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1600&amp;auto=format&amp;fit=crop&amp;sat=-20"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Mente</span>
<span className="text-xs text-zinc-500">0–15 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Meditación guiada al despertar
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Ana Torres</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="cuerpo" data-duration="larga" data-instructor="sofía perez" data-title="yoga restaurativo tarde calma" href="/curso/yoga-restaurativo" title="Yoga restaurativo al atardecer | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de yoga restaurativo guiado por Sofía Pérez en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Cuerpo</span>
<span className="text-xs text-zinc-500">+45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Yoga restaurativo al atardecer
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Sofía Pérez</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="espiritu" data-duration="media" data-instructor="pablo vega" data-title="sonoterapia vibraciones descanso" href="/curso/sonoterapia-descanso" title="Sonoterapia: vibraciones para el descanso | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de sonoterapia guiado por Pablo Vega en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1600&amp;auto=format&amp;fit=crop&amp;h=900"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Espíritu</span>
<span className="text-xs text-zinc-500">15–45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Sonoterapia: vibraciones para el descanso
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Pablo Vega</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="mente" data-duration="corta" data-instructor="laura mendez" data-title="journaling consciente ritual escritura" href="/curso/journaling-consciente" title="Ritual de journaling consciente | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de journaling consciente guiado por Laura Méndez en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Mente</span>
<span className="text-xs text-zinc-500">0–15 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Ritual de journaling consciente
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Laura Méndez</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="espiritu" data-duration="media" data-instructor="julian ortiz" data-title="compasión radical metta bondad amorosa" href="/curso/compasion-radical" title="Compasión radical: prácticas de metta | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de compasión radical guiado por Julián Ortiz en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Espíritu</span>
<span className="text-xs text-zinc-500">15–45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Compasión radical: prácticas de metta
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Julián Ortiz</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="cuerpo" data-duration="larga" data-instructor="camila rios" data-title="respiración hielo exposición frío" href="/curso/respiracion-frio" title="Círculo de respiración con hielo | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de respiración con hielo guiado por Camila Ríos en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Cuerpo</span>
<span className="text-xs text-zinc-500">+45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Círculo de respiración con hielo
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Camila Ríos</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="certificados" data-duration="media" data-instructor="paula garcia" data-title="fundamentos mindfulness certificado" href="/curso/mindfulness-certificado" title="Fundamentos de mindfulness (Certificado) | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso certificado de mindfulness guiado por Paula García en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
<span className="absolute left-3 top-3 rounded-full bg-amber-300/90 text-amber-900 text-[11px] font-medium px-2 py-0.5 ring-1 ring-amber-400/50">Certificado</span>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Certificados</span>
<span className="text-xs text-zinc-500">15–45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Fundamentos de mindfulness (Certificado)
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Paula García</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="cuerpo" data-duration="media" data-instructor="marcos leon" data-title="automasaje liberación miofascial recuperación" href="/curso/automasaje-miofascial" title="Automasaje y liberación miofascial | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de automasaje miofascial guiado por Marcos León en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Cuerpo</span>
<span className="text-xs text-zinc-500">15–45 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Automasaje y liberación miofascial
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Marcos León</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="mente" data-duration="corta" data-instructor="elena cruz" data-title="sueño reparador descanso higiene del sueño" href="/curso/sueno-reparador" title="Introducción al sueño reparador | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de sueño reparador guiado por Elena Cruz en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Mente</span>
<span className="text-xs text-zinc-500">0–15 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Introducción al sueño reparador
                </h3>
<p className="mt-1 text-sm text-zinc-400">por Elena Cruz</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300">
                  Ver curso
                  <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
</a>

<a className="course group relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900/60 to-zinc-900/20 ring-1 ring-zinc-800" data-category="espiritu" data-duration="corta" data-instructor="valentina mora" data-title="rituales gratitud cotidiano presencia" href="/curso/rituales-gratitud" title="Rituales cotidianos de gratitud | Curso de bienestar en español | Paando">
<div className="relative h-48 overflow-hidden">
<img alt="Curso de gratitud guiado por Valentina Mora en Paando" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs ring-1 ring-zinc-800 text-zinc-300">Espíritu</span>
<span className="text-xs text-zinc-500">0–15 min</span>
</div>
<h3 className="mt-3 text-lg tracking-tight text-zinc-50 font-medium group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] transition line-clamp-1">
                  Rituales cotid</h3></div></a></div></div></section></main>
    </>
  );
}
