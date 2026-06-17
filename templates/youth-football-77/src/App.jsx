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
      

<header className="relative w-full min-h-screen flex flex-col justify-between bg-[#90181C]">

<nav className="w-full p-6 md:p-10 flex justify-between items-center z-10">
<div className="flex items-center gap-2">

<svg className="w-8 h-8 text-[#C18722]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v4.82c0 4.5-3.08 8.68-8 9.8-4.92-1.12-8-5.3-8-9.8V8.18l8-4z"></path></svg>
<span className="font-light tracking-widest text-xs uppercase text-[#FDE6C8]">Albion FC Presents</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-light tracking-widest uppercase text-[#FDE6C8]">
<a className="hover:text-[#C18722] transition-colors" href="#teams">Equipos</a>
<a className="hover:text-[#C18722] transition-colors" href="#fixture">Fixture</a>
<a className="hover:text-[#C18722] transition-colors" href="#connect">Connect</a>
</div>
</nav>

<div className="flex-1 flex flex-col justify-center px-6 md:px-12">
<h1 className="md:text-9xl uppercase leading-[0.85] text-7xl font-medium text-[#C18722] tracking-tight">
                Fútbol <br/>
<span className="text-[#FDE6C8]">En Estado</span> <br/>
                Puro
            </h1>
</div>

<div className="w-full p-6 md:p-12 border-t border-[#C18722]/30 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
<div className="text-right md:text-left">
<p className="font-oswald text-xl uppercase tracking-tight text-[#FDE6C8]">25 — 28 Febrero 2025</p>
<p className="font-light text-xs text-[#FDE6C8]/70">Montevideo, Uruguay</p>
</div>
<a className="group flex items-center gap-4 bg-[#C18722] text-[#001018] px-8 py-4 font-medium uppercase tracking-tight hover:bg-[#FDE6C8] transition-colors duration-300" href="#fixture">
                Ver Partidos
                <iconify-icon height="20" icon="solar:arrow-right-down-linear" width="20"></iconify-icon>
</a>
</div>
</header>

<section className="py-24 px-6 md:px-12 bg-[#002B45]">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-block border border-[#C18722] px-4 py-1 mb-8">
<span className="font-oswald text-xs uppercase tracking-widest text-[#C18722]">Torneo Internacional</span>
</div>
<h2 className="text-4xl md:text-6xl font-medium font-oswald uppercase tracking-tight mb-8 text-[#FDE6C8]">
                Pioneros Sub 16
            </h2>
<p className="text-lg md:text-xl font-light leading-relaxed text-[#FDE6C8]/80 mb-12">
                Pioneros U16 es mucho más que un torneo: es un punto de encuentro para las futuras estrellas del fútbol. Organizado por Albion FC en Montevideo, Uruguay, este certamen ha reunido en sus dos primeras ediciones a equipos de élite del continente.
            </p>
<button className="border border-[#C18722] text-[#C18722] px-8 py-3 uppercase font-medium text-sm tracking-wide hover:bg-[#C18722] hover:text-[#001018] transition-colors duration-300">
                Así fue la edición 2025
            </button>
</div>
</section>

<section className="py-20 bg-[#001D2D] border-y border-[#C18722]/20" id="teams">
<div className="md:px-12 pr-6 pl-6">
<h3 className="font-oswald text-2xl text-[#C18722] uppercase mb-12 tracking-tight">Equipos Participantes 2026</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border-t border-l border-[#C18722]/20 text-[#FDE6C8]">

<div className="aspect-square flex hover:opacity-100 hover:bg-[#002B45] transition-all opacity-60 border-[#C18722]/20 border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<img alt="Albion FC Logo" className="w-full h-full object-contain drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square flex hover:opacity-100 hover:bg-[#002B45] transition-all opacity-60 border-[#C18722]/20 border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<span className="font-oswald text-3xl">BRA</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">TAL</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">SCR</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">UNI</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">BOL</span>
</div>

<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">COR</span>
</div>
<div className="aspect-square flex hover:opacity-100 hover:bg-[#002B45] transition-all opacity-60 border-[#C18722]/20 border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<span className="font-oswald text-3xl">AUD</span>
</div>
<div className="aspect-square flex hover:opacity-100 hover:bg-[#002B45] transition-all opacity-60 border-[#C18722]/20 border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<span className="font-oswald text-3xl">BAR</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">SPO</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">DEC</span>
</div>
<div className="aspect-square flex items-center justify-center border-b border-r border-[#C18722]/20 p-8 opacity-60 hover:opacity-100 hover:bg-[#002B45] transition-all">
<span className="font-oswald text-3xl">AUF</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#002B45]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col border-b-4 border-[#C18722] bg-[#001D2D] p-8">
<iconify-icon className="text-[#C18722] mb-6" height="32" icon="solar:calendar-linear" width="32"></iconify-icon>
<h4 className="font-oswald text-2xl text-[#FDE6C8] uppercase mb-2">¿Cuándo?</h4>
<p className="font-light text-sm text-[#FDE6C8]/80">Del miércoles 25 al sábado 28 de febrero 2025.</p>
</div>

<div className="flex flex-col border-b-4 border-[#C18722] bg-[#001D2D] p-8">
<iconify-icon className="text-[#C18722] mb-6" height="32" icon="solar:map-point-linear" width="32"></iconify-icon>
<h4 className="font-oswald text-2xl text-[#FDE6C8] uppercase mb-2">¿Dónde?</h4>
<p className="font-light text-sm text-[#FDE6C8]/80">
<span className="block mb-2"> Ciudad Deportiva Albion FC.</span>
<span className="block"> Estadio Charrúa.</span>
</p>
</div>

<div className="flex flex-col border-b-4 border-[#C18722] bg-[#001D2D] p-8">
<iconify-icon className="text-[#C18722] mb-6" height="32" icon="solar:ticket-sale-linear" width="32"></iconify-icon>
<h4 className="font-oswald text-2xl text-[#FDE6C8] uppercase mb-2">Acceso</h4>
<p className="font-light text-sm text-[#FDE6C8]/80">Acceso libre a los partidos de la cancha 1 y las finales en el Estadio Charrúa.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 mt-16 justify-center">
<button className="bg-[#C18722] text-[#001018] px-10 py-4 font-oswald font-medium uppercase tracking-wide hover:bg-[#FDE6C8] transition-colors">
                Scouting Pass
            </button>
<button className="border border-[#FDE6C8] text-[#FDE6C8] px-10 py-4 font-oswald font-medium uppercase tracking-wide hover:bg-[#FDE6C8] hover:text-[#001018] transition-colors">
                Ver en vivo
            </button>
<button className="border border-[#C18722] text-[#C18722] px-10 py-4 font-oswald font-medium uppercase tracking-wide hover:bg-[#C18722] hover:text-[#001018] transition-colors">
                Albion Connect
            </button>
</div>
</section>

<section className="py-20 px-6 md:px-12 bg-[#90181C] flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-3 h-3 bg-[#FDE6C8] rounded-full animate-pulse"></div>
<span className="font-oswald text-xs uppercase tracking-widest text-[#FDE6C8]">Live Stream</span>
</div>
<h2 className="text-3xl md:text-5xl font-oswald uppercase font-medium tracking-tight text-[#FDE6C8]">
                ¡Mirá todos los partidos en vivo!
            </h2>
</div>
<a className="flex items-center gap-3 bg-[#001018] text-[#FDE6C8] px-8 py-4 font-oswald font-medium uppercase tracking-wide hover:bg-[#FDE6C8] hover:text-[#001018] transition-colors" href="#">
<iconify-icon height="24" icon="solar:play-circle-linear" width="24"></iconify-icon>
            Ir al Canal
        </a>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]" id="connect">

<div className="bg-[#C18722] p-12 flex flex-col justify-center">
<h2 className="text-6xl md:text-8xl font-oswald font-medium uppercase leading-none text-[#001018] mb-4">
                Albion<br/>Con<br/>Nect
            </h2>
<div className="w-20 h-2 bg-[#001018] mt-6"></div>
</div>

<div className="bg-[#002B45] p-12 md:p-20 flex flex-col justify-center border-l border-[#C18722]/20">
<h3 className="font-oswald text-3xl text-[#FDE6C8] uppercase tracking-tight mb-6">
                Una charla sobre formación con referentes de América.
            </h3>
<ul className="space-y-4 mb-10 font-light text-[#FDE6C8]/80 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C18722] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    Exponen Talleres, RB Bragantino, Sporting Cristal y AUF.
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C18722] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    Espacio de intercambio exclusivo.
                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C18722] shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                    Cocktail de cierre.
                </li>
</ul>
<div className="border-l-4 border-[#C18722] pl-6 py-2 mb-10">
<p className="font-oswald text-xl uppercase text-[#C18722]">26 de Febrero, 18:00 HS</p>
<p className="font-light text-xs uppercase text-[#FDE6C8]">Ciudad Deportiva Albion FC</p>
</div>
<button className="w-fit bg-[#FDE6C8] text-[#001018] px-10 py-4 font-oswald font-medium uppercase tracking-wide hover:bg-[#C18722] transition-colors">
                Comprar Tickets
            </button>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#001D2D]">
<div className="border border-[#C18722] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-oswald uppercase font-medium text-[#C18722] mb-6">Scouting Pass</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-center gap-4">
<div className="p-2 bg-[#002B45] border border-[#C18722]">
<iconify-icon className="text-[#FDE6C8]" height="20" icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<span className="font-light text-sm text-[#FDE6C8]">Acceso a todas las canchas</span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 bg-[#002B45] border border-[#C18722]">
<iconify-icon className="text-[#FDE6C8]" height="20" icon="solar:star-linear" width="20"></iconify-icon>
</div>
<span className="font-light text-sm text-[#FDE6C8]">Acceso a Zona VIP</span>
</div>
<div className="flex items-center gap-4">
<div className="p-2 bg-[#002B45] border border-[#C18722]">
<iconify-icon className="text-[#FDE6C8]" height="20" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<span className="font-light text-sm text-[#FDE6C8]">Entrada a Albion Connect</span>
</div>
</div>
</div>
<button className="bg-[#C18722] text-[#001018] min-w-[200px] h-16 font-oswald font-medium uppercase text-xl hover:bg-[#FDE6C8] transition-colors">
                Tickets
            </button>
</div>
</section>

<section className="py-24 px-4 md:px-12 bg-[#002B45]" id="fixture">
<div className="max-w-6xl mx-auto">
<h2 className="text-5xl md:text-7xl font-oswald font-medium uppercase text-[#FDE6C8] mb-16 text-center tracking-tight">Fixture Oficial</h2>

<details className="group mb-4" open="">
<summary className="cursor-pointer bg-[#001D2D] border-l-4 border-[#C18722] p-6 flex justify-between items-center hover:bg-[#002538] transition-colors">
<span className="font-oswald text-2xl uppercase text-[#FDE6C8]">Día 1 — Miércoles 25 Feb</span>
<iconify-icon className="text-[#C18722] transition-transform group-open:rotate-180" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="bg-[#001018] p-6 animate-fade-in">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="text-[#C18722] font-oswald uppercase text-xs border-b border-[#FDE6C8]/10">
<tr>
<th className="p-4">Hora</th>
<th className="p-4">Partido</th>
<th className="p-4">Cancha</th>
</tr>
</thead>
<tbody className="font-light text-[#FDE6C8] text-sm">
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">08:00</td>
<td className="p-4"> vs Bolivar City</td>
<td className="p-4 opacity-70">Sintética</td>
</tr>
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">08:00</td>
<td className="p-4"> vs D. Concepción</td>
<td className="p-4 opacity-70">Cancha 2</td>
</tr>
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">09:30</td>
<td className="p-4"> vs Sports Boys</td>
<td className="p-4 opacity-70">Sintética</td>
</tr>
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">16:00</td>
<td className="p-4"> vs RB Bragantino</td>
<td className="p-4 opacity-70">Sintética</td>
</tr>
<tr className="hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">17:30</td>
<td className="p-4"> vs Sports Boys</td>
<td className="p-4 opacity-70">Cancha 2</td>
</tr>
</tbody>
</table>
</div>
</div>
</details>

<details className="group mb-4">
<summary className="cursor-pointer bg-[#001D2D] border-l-4 border-[#C18722] p-6 flex justify-between items-center hover:bg-[#002538] transition-colors">
<span className="font-oswald text-2xl uppercase text-[#FDE6C8]">Día 2 — Jueves 26 Feb</span>
<iconify-icon className="text-[#C18722] transition-transform group-open:rotate-180" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="bg-[#001018] p-6">
<div className="p-4 mb-4 bg-[#002B45] border border-[#C18722]/30 text-center">
<span className="text-[#C18722] font-oswald uppercase tracking-widest text-xs">Mañana Libre (City Tour)</span>
</div>
<table className="w-full text-left border-collapse">
<tbody className="font-light text-[#FDE6C8] text-sm">
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722] w-24">15:00</td>
<td className="p-4"> vs Barra FC</td>
<td className="p-4 opacity-70 text-right">Sintética</td>
</tr>
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">16:30</td>
<td className="p-4"> vs S. Cristal</td>
<td className="p-4 opacity-70 text-right">Sintética</td>
</tr>
<tr className="bg-[#C18722]/10 hover:bg-[#C18722]/20">
<td className="p-4 font-mono text-[#C18722]">18:20</td>
<td className="p-4 font-oswald text-[#C18722] uppercase tracking-wide">Albion Connect Event</td>
<td className="p-4 opacity-70 text-right">Auditorio</td>
</tr>
</tbody>
</table>
</div>
</details>

<details className="group mb-4">
<summary className="cursor-pointer bg-[#001D2D] border-l-4 border-[#C18722] p-6 flex justify-between items-center hover:bg-[#002538] transition-colors">
<span className="font-oswald text-2xl uppercase text-[#FDE6C8]">Día 3 — Viernes 27 Feb</span>
<iconify-icon className="text-[#C18722] transition-transform group-open:rotate-180" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="bg-[#001018] p-6">
<table className="w-full text-left border-collapse">
<tbody className="font-light text-[#FDE6C8] text-sm">
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722] w-24">08:00</td>
<td className="p-4"> vs Universitario</td>
</tr>
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">16:00</td>
<td className="p-4"> vs Barra FC</td>
</tr>
<tr className="hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">17:30</td>
<td className="p-4"> vs S. Cristal</td>
</tr>
</tbody>
</table>
</div>
</details>

<details className="group mb-4">
<summary className="cursor-pointer bg-[#90181C] text-[#FDE6C8] p-6 flex justify-between items-center hover:bg-[#7a1417] transition-colors">
<span className="font-oswald text-2xl uppercase">Día 4 — Sábado 28 Feb (Estadio Charrúa)</span>
<iconify-icon height="24" icon="solar:cup-star-linear" width="24"></iconify-icon>
</summary>
<div className="bg-[#001018] p-6">
<table className="w-full text-left border-collapse">
<tbody className="font-light text-[#FDE6C8] text-sm">
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722] w-24">08:00</td>
<td className="p-4">Definición de puestos (6ºA vs 6ºB / 4ºA vs 4ºB)</td>
</tr>
<tr className="border-b border-[#FDE6C8]/5 hover:bg-[#001D2D]">
<td className="p-4 font-mono text-[#C18722]">16:00</td>
<td className="p-4">3er y 4to Puesto</td>
</tr>
<tr className="bg-[#C18722] text-[#001018] font-medium">
<td className="p-4 font-mono">20:00</td>
<td className="p-4 font-oswald uppercase tracking-wide">GRAN FINAL (1ºA vs 1ºB)</td>
</tr>
</tbody>
</table>
</div>
</details>
</div>
</section>

<section className="relative bg-[#001D2D] border-t border-[#C18722] py-24 overflow-hidden">

<span className="absolute top-0 left-0 text-[20vw] font-oswald font-bold text-[#FDE6C8]/5 select-none leading-none -mt-10">VS</span>
<div className="relative z-10 container mx-auto px-6 text-center">
<h2 className="text-xl font-light uppercase tracking-[0.3em] text-[#C18722] mb-4">La Revancha Digital</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 mb-12">
<div className="text-right">
<h3 className="text-5xl md:text-7xl font-oswald font-medium uppercase text-[#FDE6C8]">Uruguay</h3>
<p className="text-[#FDE6C8]/60 uppercase tracking-widest">Creadores</p>
</div>
<div className="w-2 h-20 md:h-32 bg-[#90181C]"></div>
<div className="text-left">
<h3 className="text-5xl md:text-7xl font-oswald font-medium uppercase text-[#FDE6C8]">Argentina</h3>
<p className="text-[#FDE6C8]/60 uppercase tracking-widest">Streamers</p>
</div>
</div>
<div className="inline-flex flex-col gap-2">
<div className="bg-[#FDE6C8] text-[#001018] px-6 py-2 font-oswald font-medium uppercase">
                    Sábado 28 Feb — 17:00 HS
                </div>
<div className="flex items-center justify-center gap-2 text-[#C18722] text-xs uppercase tracking-wider mt-4">
<iconify-icon height="16" icon="solar:monitor-camera-linear" width="16"></iconify-icon>
                    En vivo por Twitch SLAKUNTV
                </div>
</div>
</div>
</section>

<section className="py-16 bg-[#002B45] border-t border-[#FDE6C8]/10">
<div className="container mx-auto px-6">
<p className="text-center font-oswald text-xs text-[#FDE6C8]/40 uppercase tracking-widest mb-10">Partners Oficiales</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-all duration-500">

<span className="font-oswald text-2xl text-[#FDE6C8] font-medium">SARA</span>
<span className="font-oswald text-2xl text-[#FDE6C8] font-medium">KELME</span>
<span className="font-serif text-2xl text-[#FDE6C8] italic">Estrella Galicia</span>
<span className="font-oswald text-2xl text-[#FDE6C8] font-medium">EMIGRANTE</span>
<span className="font-oswald text-2xl text-[#FDE6C8] font-medium italic">ENA</span>
<span className="font-oswald text-2xl text-[#FDE6C8] font-medium">Kawasaki</span>
</div>
</div>
</section>

<footer className="bg-[#001D2D] pt-20 pb-10 border-t-4 border-[#C18722]">
<div className="container mx-auto px-6 flex flex-col items-center">

<div className="mb-10 p-4 border border-[#C18722]/30 rounded-full">
<svg className="w-12 h-12 text-[#FDE6C8]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v4.82c0 4.5-3.08 8.68-8 9.8-4.92-1.12-8-5.3-8-9.8V8.18l8-4z"></path></svg>
</div>
<h4 className="font-oswald text-2xl uppercase text-[#FDE6C8] mb-8">Albion Football Club</h4>
<div className="flex gap-6 mb-12">
<a className="p-3 border border-[#FDE6C8]/20 hover:border-[#C18722] hover:text-[#C18722] transition-colors text-[#FDE6C8]" href="#">
<iconify-icon height="20" icon="solar:camera-square-linear" width="20"></iconify-icon>
</a>
<a className="p-3 border border-[#FDE6C8]/20 hover:border-[#C18722] hover:text-[#C18722] transition-colors text-[#FDE6C8]" href="#">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
<a className="p-3 border border-[#FDE6C8]/20 hover:border-[#C18722] hover:text-[#C18722] transition-colors text-[#FDE6C8]" href="#">
<iconify-icon height="20" icon="solar:music-note-linear" width="20"></iconify-icon>
</a>
</div>
<div className="w-full h-px bg-[#FDE6C8]/10 mb-8"></div>
<p className="font-light text-xs text-[#FDE6C8]/40 uppercase tracking-widest text-center">
                © 2025 Torneo Pioneros. Todos los derechos reservados.
            </p>
</div>
</footer>

    </>
  );
}
