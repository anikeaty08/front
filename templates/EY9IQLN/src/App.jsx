import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      lucide.createIcons();
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">

<header className="absolute top-0 left-0 w-full z-20">
<div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-8">
<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/80 shadow-lg">
<svg className="stroke-zinc-900" fill="none" height="28" viewbox="0 0 24 24" width="28">
<path d="M3 21V10.5L12 3l9 7.5V21" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
<div className="flex flex-col">
<span className="font-semibold text-2xl tracking-tight text-white drop-shadow">B3 Hogar</span>
<span className="italic text-white/90 text-base leading-tight -mt-1">inversiones</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-white/90 text-base font-medium drop-shadow">
<a className="hover:text-white/60 transition" href="#inversion">Invertir</a>
<a className="hover:text-white/60 transition" href="#proyecto">Proyecto</a>
<a className="hover:text-white/60 transition" href="#contacto">Contacto</a>
</div>
</div>
</header>
<div className="relative z-10 flex flex-col items-center text-center w-full px-4">
<span className="inline-block bg-white/10 text-white/80 px-4 py-1 rounded-full font-medium text-base mb-6 tracking-wide backdrop-blur-sm border border-white/20">INVERSIÓN B3 HOGAR</span>
<h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tight mb-8 drop-shadow-xl max-w-4xl mx-auto leading-tight">
        [casa] benito<br/>
<span className="font-normal text-white/80 text-2xl md:text-3xl block mt-4">Convertí tu inversión en una casa de ensueño en Devoto</span>
</h1>
<a className="inline-flex items-center px-8 py-4 bg-white text-zinc-900 font-medium text-lg rounded-full shadow-lg hover:bg-zinc-100 transition group" href="#inversion">
        Quiero invertir
        <svg className="ml-3 w-5 h-5 stroke-zinc-900 group-hover:translate-x-1 transition" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path></svg>
</a>
</div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
</section>

<section className="w-full pt-20 pb-10 bg-white" id="proyecto">
<div className="max-w-5xl mx-auto px-4 flex flex-col gap-14">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2 w-full">
<div className="overflow-hidden rounded-2xl shadow-2xl border border-zinc-200">
<img alt="Estado original vintage render" className="object-cover w-full h-64 md:h-80 transition hover:scale-105 duration-700" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=2160&amp;q=80"/>
</div>
</div>
<div className="md:w-1/2 w-full flex flex-col gap-4">
<span className="text-zinc-500 text-base font-medium uppercase tracking-wide mb-1">Así es como lo encontramos</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Un PH con potencial único</h2>
<p className="text-zinc-700 text-lg leading-relaxed">
            En el corazón de Devoto, a pasos de los mejores accesos, descubrimos esta joya esperando ser transformada. Imaginá el antes y el después: de un espacio tradicional a una casa moderna, luminosa, lista para una nueva vida.
          </p>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse gap-12 items-center">
<div className="md:w-1/2 w-full">
<div className="grid grid-cols-2 gap-4">
<img alt="Render vintage living" className="rounded-xl border border-zinc-100 object-cover w-full h-40 md:h-52 shadow" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=2160&amp;q=80"/>
<img alt="Render vintage cocina" className="rounded-xl border border-zinc-100 object-cover w-full h-40 md:h-52 shadow" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=2160&amp;q=80"/>
<img alt="Render vintage comedor" className="rounded-xl border border-zinc-100 object-cover w-full h-40 md:h-52 shadow" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=2160&amp;q=80"/>
<img alt="Render vintage dormitorio" className="rounded-xl border border-zinc-100 object-cover w-full h-40 md:h-52 shadow" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=2160&amp;q=80"/>
</div>
</div>
<div className="md:w-1/2 w-full flex flex-col gap-4">
<span className="text-zinc-500 text-base font-medium uppercase tracking-wide mb-1">El proyecto</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Transformación total</h2>
<p className="text-zinc-700 text-lg leading-relaxed">
            Con planos renovados, la casa pasará a tener <span className="font-semibold text-zinc-900">3 dormitorios, 2 baños, cocina, estar comedor, patio, terraza y cochera</span>. Todo pensado para la vida moderna y el máximo confort, sumando valor a cada metro cuadrado.
          </p>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-zinc-50 border-t border-zinc-200" id="arquitectura">
<div className="max-w-5xl mx-auto px-4">
<div className="mb-10 text-center">
<span className="text-zinc-500 text-base font-medium uppercase tracking-wide mb-2 block">Planificación</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Planos de arquitectura</h2>
<p className="text-zinc-700 text-lg max-w-2xl mx-auto">
          Así se distribuye el proyecto: espacios modernos, funcionales y pensados para la vida actual. Mirá los planos y descubrí cómo se transforma cada ambiente.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl shadow border border-zinc-200 flex flex-col overflow-hidden">
<img alt="Plano planta baja" className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1465101178521-c1a9136a03a0?w=1200&amp;q=80"/>
<div className="p-5 border-t border-zinc-100">
<span className="text-zinc-900 font-medium text-lg">Planta Baja</span>
<p className="text-zinc-600 text-base mt-1">Ingreso, estar-comedor, cocina, cochera y patio.</p>
</div>
</div>
<div className="bg-white rounded-2xl shadow border border-zinc-200 flex flex-col overflow-hidden">
<img alt="Plano planta alta" className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&amp;q=80"/>
<div className="p-5 border-t border-zinc-100">
<span className="text-zinc-900 font-medium text-lg">Planta Alta</span>
<p className="text-zinc-600 text-base mt-1">Dormitorios, baños y acceso a terraza.</p>
</div>
</div>
<div className="bg-white rounded-2xl shadow border border-zinc-200 flex flex-col overflow-hidden">
<img alt="Plano terraza" className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&amp;q=80"/>
<div className="p-5 border-t border-zinc-100">
<span className="text-zinc-900 font-medium text-lg">Terraza</span>
<p className="text-zinc-600 text-base mt-1">Espacio exterior para relax y reuniones.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-28 bg-zinc-900 relative overflow-hidden">
<img alt="Inspiración vintage" className="absolute inset-0 w-full h-full object-cover object-center opacity-50" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/60 to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center">
<span className="inline-block bg-white/10 text-white/80 px-4 py-1 rounded-full font-medium text-base mb-4 tracking-wide backdrop-blur-sm border border-white/20">Nos inspiran los mejores</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
        Diseño, calidad y visión<br/>
<span className="font-normal text-white/80 text-2xl md:text-3xl block mt-3">Creamos hogares que enamoran</span>
</h2>
<div className="flex items-center justify-center gap-6 mt-10">
<img alt="Inspiration 1" className="h-24 w-24 object-cover rounded-lg border-4 border-white shadow-xl" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=2160&amp;q=80"/>
<img alt="Inspiration 2" className="h-24 w-24 object-cover rounded-lg border-4 border-white shadow-xl" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=2160&amp;q=80"/>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
</section>

<section className="w-full py-24 bg-white" id="inversion">
<div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
<span className="text-zinc-500 font-medium text-base uppercase tracking-wide mb-4">Oportunidad de inversión</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 text-center">Invertí y potenciá tu capital</h2>
<p className="text-zinc-700 text-lg mb-8 text-center max-w-2xl">
        Sumate a una inversión inmobiliaria segura, transparente y con gran potencial de crecimiento. Un proyecto pensado para multiplicar tu dinero en pocos meses.
      </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
<div className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 border border-zinc-200 rounded-2xl p-7 flex flex-col gap-4 shadow-lg">
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-base font-medium">Metros actuales:</span>
<span className="font-medium text-zinc-900">120 m²</span>
</div>
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-base font-medium">Metros proyectados:</span>
<span className="font-medium text-zinc-900">150 m²</span>
</div>
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-base font-medium">Plazo obra + venta:</span>
<span className="font-medium text-zinc-900">6 a 9 meses</span>
</div>
</div>
<div className="bg-gradient-to-br from-zinc-100 via-white to-zinc-50 border border-zinc-200 rounded-2xl p-7 flex flex-col gap-4 shadow-lg">
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-base font-medium">Inversión total:</span>
<span className="font-medium text-zinc-900">$241.000</span>
</div>
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-base font-medium">Precio de venta estimado:</span>
<span className="font-medium text-zinc-900">$270.000</span>
</div>
<div className="flex items-center gap-3">
<span className="text-zinc-500 text-base font-medium">Retorno proyectado:</span>
<span className="font-medium text-green-600">+12%</span>
</div>
</div>
</div>
<a className="mt-10 inline-flex items-center px-10 py-4 bg-zinc-900 text-white font-medium text-lg rounded-full shadow-lg hover:bg-zinc-800 transition group" href="#contacto">
        Hablemos de tu inversión
        <svg className="ml-3 w-5 h-5 stroke-white group-hover:translate-x-1 transition" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path></svg>
</a>
</div>
</section>

<section className="w-full bg-zinc-950 text-white pt-24 pb-14 px-4" id="contacto">
<div className="max-w-3xl mx-auto flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 text-center">¿Listo para invertir?</h2>
<p className="text-zinc-300 text-lg mb-8 text-center">
        Contactanos y te contamos cómo formar parte de este proyecto exclusivo.
      </p>
<div className="flex flex-col md:flex-row gap-6 items-center justify-center">
<a className="inline-flex items-center gap-3 bg-white text-zinc-900 px-8 py-3 rounded-full font-medium shadow-lg hover:bg-zinc-100 transition" href="mailto:hola@b3hogar.com">
<svg className="stroke-zinc-900" fill="none" height="20" width="20"><rect height="12" rx="2" strokeWidth="1.5" width="16" x="2" y="4"></rect><path d="M2 4l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
          hola@b3hogar.com
        </a>
<a className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-green-700 transition" href="https://wa.me/5491131155981">
<svg className="stroke-white" fill="none" height="20" width="20"><path d="M18 16.1C17.1 17 15.6 18 13 18c-5.5 0-10-4.5-10-10.1C3 7.1 4.4 5 5.7 4.1C7 3.3 8.4 3 10 3c2.6 0 4.1 1 5 1.9c1.3 1.2 2.7 3.1 2.7 6.1c0 2.6-1.4 4.4-2.7 5.1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M10 13c-1.7 0-3-1.3-3-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
          +54 9 11 3115-5981
        </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-zinc-900">
<svg className="stroke-white" fill="none" height="22" viewbox="0 0 24 24" width="22">
<path d="M3 21V10.5L12 3l9 7.5V21" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</span>
<span className="font-semibold text-lg tracking-tight select-none">B3 Hogar</span>
</div>
<div className="flex flex-col md:flex-row gap-5 items-center text-zinc-500 text-base">
<a className="hover:text-zinc-900 transition" href="mailto:hola@b3hogar.com">hola@b3hogar.com</a>
<span className="hidden md:block text-zinc-200">|</span>
<a className="hover:text-zinc-900 transition" href="https://wa.me/5491131155981">+54 9 11 3115-5981</a>
</div>
</div>
</footer>


    </>
  );
}
