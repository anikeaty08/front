import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fdfbf9',
100: '#f7f3ef',
200: '#ece4dc',
300: '#dcd0c2',
400: '#b8a694',
500: '#968372',
600: '#756356',
800: '#4a3f38',
900: '#2e2621',
}
},
animation: {
'wave': 'wave 1.2s ease-in-out infinite',
},
keyframes: {
wave: {
'0%, 100%': { height: '8px' },
'50%': { height: '16px' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-stone-50/85 border-b border-stone-200/50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-serif tracking-tighter text-stone-900 hover:opacity-70 transition-opacity" href="#">
                S&amp;M
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#historia">Historia</a>
<a className="hover:text-stone-900 transition-colors" href="#detalles">Detalles</a>
<a className="hover:text-stone-900 transition-colors" href="#itinerario">Itinerario</a>
</div>
<a className="group flex items-center gap-2 text-xs font-medium bg-stone-900 text-stone-50 px-5 py-2 rounded-full hover:bg-stone-800 transition-all shadow-md shadow-stone-200" href="#rsvp">
<span>Confirmar</span>
<i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/40 backdrop-blur-sm mb-8 fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Save the Date</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 tracking-tight leading-[1.1] mb-6 fade-in-up delay-100">
                Sofía <span className="text-stone-300 font-light italic text-4xl md:text-6xl align-middle px-2">&amp;</span> Mateo
            </h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-lg mx-auto mb-10 fade-in-up delay-200 leading-relaxed">
                Nos casamos y queremos compartir este día tan especial contigo. Una celebración de amor, amistad y nuevos comienzos.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 fade-in-up delay-300">
<div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm border border-stone-100 rounded-xl shadow-sm hover:border-stone-200 transition-colors">
<i className="w-5 h-5 text-stone-400" data-lucide="calendar"></i>
<div className="text-left">
<p className="text-xs text-stone-400 uppercase tracking-wider font-medium">Fecha</p>
<p className="text-sm font-medium text-stone-800">12 de Octubre, 2024</p>
</div>
</div>
<div className="flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-sm border border-stone-100 rounded-xl shadow-sm hover:border-stone-200 transition-colors">
<i className="w-5 h-5 text-stone-400" data-lucide="map-pin"></i>
<div className="text-left">
<p className="text-xs text-stone-400 uppercase tracking-wider font-medium">Lugar</p>
<p className="text-sm font-medium text-stone-800">Hacienda Santa Cruz, CDMX</p>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 mix-blend-multiply"></div>
</header>

<main className="max-w-5xl mx-auto px-6 space-y-24 pb-24">

<section className="grid md:grid-cols-2 gap-12 items-center" id="historia">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 group ring-1 ring-stone-200">
<div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400">
<span className="text-sm font-medium tracking-wide">Foto de la Pareja</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">Diez años de historias,<br/>un día para celebrar.</h2>
<p className="text-stone-600 font-light leading-relaxed">
                    Desde aquel primer café hasta hoy, cada paso nos ha traído a este momento. No es solo una boda, es la promesa de seguir construyendo juntos.
                </p>
<div className="flex gap-4 pt-4">
<div className="pl-4 border-l border-stone-300">
<p className="text-2xl font-serif text-stone-900">10</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Años juntos</p>
</div>
<div className="pl-4 border-l border-stone-300">
<p className="text-2xl font-serif text-stone-900">∞</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Memorias</p>
</div>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto" id="itinerario">
<div className="text-center mb-16">
<h3 className="font-serif text-3xl text-stone-900 mb-2">Itinerario</h3>
<p className="text-stone-500 font-light">Los momentos clave del día</p>
</div>
<div className="relative border-l border-stone-200 ml-6 md:ml-0 space-y-12">
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-center group">
<div className="hidden md:block text-right">
<p className="text-xl font-medium text-stone-900">Ceremonia Civil</p>
<p className="text-stone-500 font-light text-sm">Jardín Principal</p>
</div>
<div className="absolute -left-[5px] md:static md:w-2.5 md:h-2.5 rounded-full bg-stone-800 outline outline-4 outline-stone-50 group-hover:scale-125 transition-transform duration-300"></div>
<div className="md:hidden mb-1">
<p className="text-lg font-medium text-stone-900">Ceremonia Civil</p>
<p className="text-stone-500 font-light text-xs">Jardín Principal</p>
</div>
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200/50">
<i className="w-3 h-3" data-lucide="clock"></i> 16:30 hrs
                        </span>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-center group">
<div className="hidden md:block text-right">
<p className="text-xl font-medium text-stone-900">Cóctel de Bienvenida</p>
<p className="text-stone-500 font-light text-sm">Terraza Sunset</p>
</div>
<div className="absolute -left-[5px] md:static md:w-2.5 md:h-2.5 rounded-full bg-stone-300 outline outline-4 outline-stone-50 group-hover:bg-stone-800 group-hover:scale-125 transition-all duration-300"></div>
<div className="md:hidden mb-1">
<p className="text-lg font-medium text-stone-900">Cóctel de Bienvenida</p>
<p className="text-stone-500 font-light text-xs">Terraza Sunset</p>
</div>
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200/50">
<i className="w-3 h-3" data-lucide="wine"></i> 17:30 hrs
                        </span>
</div>
</div>
<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-center group">
<div className="hidden md:block text-right">
<p className="text-xl font-medium text-stone-900">Cena y Fiesta</p>
<p className="text-stone-500 font-light text-sm">Gran Salón</p>
</div>
<div className="absolute -left-[5px] md:static md:w-2.5 md:h-2.5 rounded-full bg-stone-300 outline outline-4 outline-stone-50 group-hover:bg-stone-800 group-hover:scale-125 transition-all duration-300"></div>
<div className="md:hidden mb-1">
<p className="text-lg font-medium text-stone-900">Cena y Fiesta</p>
<p className="text-stone-500 font-light text-xs">Gran Salón</p>
</div>
<div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-medium border border-stone-200/50">
<i className="w-3 h-3" data-lucide="music"></i> 19:00 hrs
                        </span>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="detalles">

<div className="bg-stone-900 text-stone-50 rounded-2xl p-6 md:p-8 shadow-md border border-stone-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8 group">

<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>

<div className="relative z-10 flex items-center gap-5 w-full md:w-auto">
<div className="relative shrink-0">
<div className="w-20 h-20 bg-stone-700 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden border border-stone-600/50">

<div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-stone-800"></div>
<i className="w-8 h-8 text-stone-400/50" data-lucide="music"></i>
</div>
<div className="absolute -bottom-2 -right-2 bg-white text-stone-900 rounded-full p-1.5 shadow-lg cursor-pointer hover:scale-110 transition-transform">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-800/80 px-2 py-0.5 rounded-full border border-stone-700">First Dance</span>
</div>
<p className="font-serif text-xl md:text-2xl leading-none mb-1">L-O-V-E</p>
<p className="text-stone-400 text-sm font-light">Nat King Cole</p>

<div className="flex items-end gap-1 h-5 mt-3 opacity-60">
<div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div>
</div>
</div>
</div>

<div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-stone-700 to-transparent"></div>

<div className="relative z-10 flex-1 w-full max-w-sm">
<label className="block text-xs font-medium text-stone-300 uppercase tracking-wide mb-2.5 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="list-music"></i> Ayúdanos con la Playlist
                    </label>
<div className="flex gap-2">
<input className="w-full bg-stone-800/50 border border-stone-700 text-stone-100 placeholder:text-stone-600 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-stone-500 focus:border-stone-500 transition-all" placeholder="¿Qué canción te hace bailar?" type="text"/>
<button className="bg-stone-100 text-stone-900 p-2.5 rounded-lg hover:bg-white hover:scale-105 transition-all shadow-lg active:scale-95">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl p-8 border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-6">
<div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100">
<i className="w-5 h-5 text-stone-500" data-lucide="map"></i>
</div>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 flex items-center gap-1" href="#">
                            Ver mapa <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Hacienda Santa Cruz</h4>
<p className="text-stone-500 font-light text-sm mb-4 max-w-md">
                        Carretera Federal México-Cuernavaca Km 23, Ciudad de México. Contamos con servicio de Valet Parking.
                    </p>
<div className="h-32 w-full bg-stone-100 rounded-lg overflow-hidden relative border border-stone-200/30">
<div className="absolute inset-0 grid place-items-center text-stone-300 text-xs tracking-wider">MAP VIEW</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-stone-200/60 shadow-sm flex flex-col justify-between">
<div>
<div className="bg-stone-50 w-fit p-2.5 rounded-lg mb-6 border border-stone-100">
<i className="w-5 h-5 text-stone-500" data-lucide="shirt"></i>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Dress Code</h4>
<p className="text-stone-500 font-light text-sm mb-4">Formal Riguroso</p>
</div>
<div className="space-y-2 pt-4 border-t border-stone-100">
<div className="flex items-center gap-2 text-xs text-stone-500">
<div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div> Ellas: Vestido largo
                        </div>
<div className="flex items-center gap-2 text-xs text-stone-500">
<div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div> Ellos: Traje oscuro
                        </div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="bg-stone-50 w-fit p-2.5 rounded-lg mb-6 border border-stone-100">
<i className="w-5 h-5 text-stone-500" data-lucide="gift"></i>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-2">Mesa de Regalos</h4>
<p className="text-stone-500 font-light text-sm mb-6">
                        Su presencia es nuestro regalo. Detalles en:
                    </p>
<div className="space-y-3">
<a className="block w-full py-2 px-4 rounded-lg bg-stone-50 border border-stone-200 text-center text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors" href="#">
                            Liverpool
                        </a>
<a className="block w-full py-2 px-4 rounded-lg bg-stone-50 border border-stone-200 text-center text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors" href="#">
                            Amazon
                        </a>
</div>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-stone-100/80 to-stone-50 rounded-2xl p-8 border border-stone-200/60 shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-3">
<div className="bg-white p-2 rounded-lg shadow-sm border border-stone-100">
<i className="w-5 h-5 text-stone-500" data-lucide="bus"></i>
</div>
<h4 className="text-lg font-medium text-stone-900">Transporte &amp; Hospedaje</h4>
</div>
<p className="text-stone-500 font-light text-sm max-w-lg">
                                Bloque de habitaciones en Hotel City Express Plus (Tarifa Especial). Transporte disponible hotel-hacienda.
                            </p>
</div>
<a className="whitespace-nowrap px-5 py-2.5 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 shadow-sm hover:border-stone-300 transition-colors" href="#">
                            Ver opciones
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-xl mx-auto pt-16" id="rsvp">
<div className="text-center mb-10">
<h3 className="font-serif text-3xl text-stone-900 mb-3">Confirmar Asistencia</h3>
<p className="text-stone-500 font-light text-sm">Por favor confirma antes del 1 de Septiembre</p>
</div>
<form className="space-y-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide">Nombre Completo</label>
<input className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-500 transition-all text-sm placeholder:text-stone-300" placeholder="Ej. Juan Pérez" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide">Teléfono</label>
<input className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-500 transition-all text-sm placeholder:text-stone-300" placeholder="55 1234 5678" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide">Asistentes</label>
<select className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-500 transition-all text-sm text-stone-600 cursor-pointer">
<option>1 Persona</option>
<option>2 Personas</option>
</select>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide block">Asistencia</label>
<div className="grid grid-cols-2 gap-4">
<label className="custom-checkbox cursor-pointer relative group">
<input checked="" className="peer sr-only" name="attendance" type="radio"/>
<div className="p-4 rounded-xl border border-stone-200 bg-stone-50 peer-checked:bg-stone-800 peer-checked:border-stone-800 peer-checked:text-white transition-all hover:border-stone-300">
<div className="flex items-center justify-center gap-2">
<span className="text-sm font-medium">¡Sí, asistiré!</span>
</div>
</div>
</label>
<label className="custom-checkbox cursor-pointer relative group">
<input className="peer sr-only" name="attendance" type="radio"/>
<div className="p-4 rounded-xl border border-stone-200 bg-stone-50 peer-checked:bg-stone-800 peer-checked:border-stone-800 peer-checked:text-white transition-all hover:border-stone-300">
<div className="flex items-center justify-center gap-2">
<span className="text-sm font-medium">No podré ir</span>
</div>
</div>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-500 uppercase tracking-wide">Restricciones Alimentarias</label>
<textarea className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400/20 focus:border-stone-500 transition-all text-sm placeholder:text-stone-300 resize-none" placeholder="Alergias, vegetariano, vegano..." rows="2"></textarea>
</div>
<button className="w-full bg-stone-900 text-stone-50 font-medium py-3 rounded-xl hover:bg-stone-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10" type="button">
                    Enviar confirmación
                </button>
</form>
</section>
</main>
<footer className="border-t border-stone-200 bg-white py-12">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-center md:text-left">
<p className="font-serif text-xl tracking-tight text-stone-900">S&amp;M</p>
<p className="text-xs text-stone-400 mt-1">Hecho con amor para nuestro gran día.</p>
</div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>


    </>
  );
}
