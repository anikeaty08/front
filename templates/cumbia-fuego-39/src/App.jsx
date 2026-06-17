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
      
<div className="min-h-screen flex flex-col bg-black">

<div className="h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500"></div>

<header className="w-full sticky top-0 z-30 bg-black/80 backdrop-blur border-b border-white/10">
<div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-9 h-9 rounded-full bg-pink-500 text-black text-lg font-semibold tracking-[0.16em]">
            CF
          </div>
<div className="leading-tight">
<div className="text-sm font-semibold uppercase tracking-[0.22em]">Cumbia Fuego</div>
<div className="text-[11px] text-white/60 uppercase tracking-[0.26em]">Buenos Aires</div>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em]">
<a className="text-white/70 hover:text-yellow-300 transition-colors" href="#inicio">Inicio</a>
<a className="text-white/70 hover:text-yellow-300 transition-colors" href="#shows">Shows</a>
<a className="text-white/70 hover:text-yellow-300 transition-colors" href="#musica">Música</a>
<a className="text-white/70 hover:text-yellow-300 transition-colors" href="#banda">La Banda</a>
<a className="text-white/70 hover:text-yellow-300 transition-colors" href="#contacto">Contacto</a>
</nav>

<a className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/70 text-xs font-semibold uppercase tracking-[0.2em] bg-pink-500/10 hover:bg-pink-500 hover:text-black hover:border-pink-400 transition-colors" href="#contacto">
<span>Book Now</span>
</a>

<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 hover:border-yellow-300 hover:bg-white/5 transition-colors">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</header>

<main className="flex-1" id="inicio">
<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
<div className="absolute top-40 -right-32 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[32rem] h-72 bg-gradient-to-t from-black to-transparent"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 pt-16 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-300/60 bg-yellow-400/10 text-[11px] font-medium uppercase tracking-[0.26em] text-yellow-200">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>
<span>Cumbia Argentina en vivo</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Ritmo caliente, <span className="text-pink-400">corazón</span> argento.
            </h1>
<p className="text-sm md:text-base text-white/75 max-w-xl">
              Cumbia Fuego mezcla la esencia barrial de Buenos Aires con beats modernos,
              una puesta en escena explosiva y letras que hacen bailar hasta al más tímido.
            </p>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.22em] bg-pink-500 text-black border border-pink-400 hover:bg-yellow-300 hover:border-yellow-200 transition-colors" href="#shows">
<span>Próximos Shows</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-[0.22em] border border-white/30 text-white hover:border-yellow-300 hover:text-yellow-200 hover:bg-white/5 transition-colors" href="#musica">
<span>Escuchar ahora</span>
</a>
</div>

<div className="flex flex-wrap gap-6 pt-4 text-xs uppercase tracking-[0.18em] text-white/70">
<div className="flex flex-col">
<span className="text-lg font-semibold text-yellow-300">+120</span>
<span className="text-[10px]">Shows en vivo</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold text-pink-400">3</span>
<span className="text-[10px]">Álbumes</span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold text-white">BA</span>
<span className="text-[10px]">Hecho en Argentina</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
<img alt="Cumbia band performing live on stage" className="w-full h-80 md:h-[22rem] object-cover" src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
<div className="flex items-center justify-between gap-3 text-[11px]">
<div className="flex flex-col">
<span className="font-semibold uppercase tracking-[0.24em] text-yellow-300">En Vivo</span>
<span className="text-white/80">Festival Río de la Plata · Buenos Aires</span>
</div>
<div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-[10px] uppercase tracking-[0.24em]">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
<span>Modo Fiesta</span>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col gap-2 p-3 rounded-2xl bg-black/90 border border-white/10 absolute -bottom-8 -right-4 w-40 shadow-lg">
<div className="text-[10px] uppercase tracking-[0.22em] text-white/60">Próximo show</div>
<div className="text-xs font-medium text-white">Teatro Flores</div>
<div className="text-[11px] text-white/70">Sábado 23 de Nov · 23:30 hs</div>
<div className="flex items-center justify-between pt-1">
<span className="text-[10px] text-yellow-300 uppercase tracking-[0.22em]">Buenos Aires</span>
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] uppercase tracking-[0.24em] bg-pink-500 text-black">
                  Tickets
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-black" id="shows">
<div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Próximos Shows</h2>
<p className="mt-2 text-sm text-white/70 max-w-md">
                Traemos la fiesta a cada barrio. Reservá tus entradas antes de que se agoten.
              </p>
</div>
<div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em]">
<button className="px-3 py-2 rounded-full border border-yellow-300/70 text-yellow-200 bg-yellow-300/10 hover:bg-yellow-300 hover:text-black hover:border-yellow-100 transition-colors">
                Todos
              </button>
<button className="px-3 py-2 rounded-full border border-white/20 text-white/70 hover:border-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors">
                Buenos Aires
              </button>
<button className="px-3 py-2 rounded-full border border-white/20 text-white/70 hover:border-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors">
                Interior
              </button>
</div>
</div>
<div className="space-y-3">

<div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-yellow-300/70 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-black border border-white/10">
<span className="text-xs font-semibold text-yellow-300 uppercase tracking-[0.22em]">NOV</span>
<span className="text-lg font-semibold">23</span>
</div>
<div>
<div className="text-sm font-medium">Teatro Flores</div>
<div className="text-xs text-white/60">Ciudad de Buenos Aires · 23:30 hs</div>
</div>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full">
<div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/60">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span> Show completo
                  </span>
<span className="hidden sm:inline-block">+ Banda invitada</span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.22em] bg-pink-500 text-black border border-pink-400 hover:bg-yellow-300 hover:border-yellow-200 transition-colors">
                    Comprar Tickets
                  </button>
<button className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.22em] border border-white/20 text-white/80 hover:border-yellow-300 hover:bg-white/5 transition-colors">
                    Info
                  </button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-yellow-300/70 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-black border border-white/10">
<span className="text-xs font-semibold text-yellow-300 uppercase tracking-[0.22em]">DEC</span>
<span className="text-lg font-semibold">07</span>
</div>
<div>
<div className="text-sm font-medium">Festival Cumbia al Río</div>
<div className="text-xs text-white/60">Rosario · 21:00 hs</div>
</div>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full">
<div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/60">
<span>Edición verano</span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.22em] bg-pink-500 text-black border border-pink-400 hover:bg-yellow-300 hover:border-yellow-200 transition-colors">
                    Reservar
                  </button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 py-4 rounded-2xl border border-white/10 bg-white/5 hover:border-yellow-300/70 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-black border border-white/10">
<span className="text-xs font-semibold text-yellow-300 uppercase tracking-[0.22em]">DEC</span>
<span className="text-lg font-semibold">31</span>
</div>
<div>
<div className="text-sm font-medium">Fiesta Año Nuevo</div>
<div className="text-xs text-white/60">Mar del Plata · 00:30 hs</div>
</div>
</div>
<div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full">
<div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/60">
<span className="inline-flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span> Especial fin de año
                  </span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.22em] bg-pink-500 text-black border border-pink-400 hover:bg-yellow-300 hover:border-yellow-200 transition-colors">
                    Tickets VIP
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-gradient-to-b from-black to-black" id="musica">
<div className="max-w-6xl mx-auto px-4 py-14 md:py-18 grid lg:grid-cols-[1.1fr,0.9fr] gap-12">

<div>
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Música</h2>
<p className="mt-2 text-sm text-white/70 max-w-md">
                  Cumbia clásica, cumbia villera y fusiones modernas. Escuchanos en tu plataforma favorita.
                </p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60">
<span className="w-2 h-2 rounded-full bg-pink-400"></span>
<span>Disponible en streaming</span>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
<div className="flex flex-col md:flex-row gap-4 md:gap-5 items-center">
<div className="relative w-full md:w-40 aspect-square rounded-2xl overflow-hidden border border-pink-400/70 bg-black">
<img alt="Album cover art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/90 to-transparent"></div>
</div>
<div className="flex-1 w-full space-y-3">
<div>
<div className="text-xs uppercase tracking-[0.24em] text-yellow-200">Nuevo Álbum</div>
<div className="text-lg font-semibold">Barrio en Llamas</div>
<div className="text-xs text-white/60">2024 · 11 canciones · 38 min</div>
</div>

<div className="mt-2">
<div className="flex items-center gap-3 mb-2">
<button className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-pink-500 text-black hover:bg-yellow-300 transition-colors shadow-md">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<div className="flex-1">
<div className="flex items-center justify-between text-[11px] text-white/60 mb-1">
<span>Intro · Fuego en el Sur</span>
<span>02:47</span>
</div>
<div className="relative h-1.5 rounded-full bg-white/10 overflow-hidden">
<div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-pink-500 to-yellow-300"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-white/60 mt-1">
<span>Reproduciendo</span>
<span>01:22</span>
</div>
</div>

<div className="pt-2 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.24em]">
<span className="px-3 py-1 rounded-full border border-white/20 text-white/80 hover:border-yellow-300 hover:bg-white/5 transition-colors">Spotify</span>
<span className="px-3 py-1 rounded-full border border-white/20 text-white/80 hover:border-yellow-300 hover:bg-white/5 transition-colors">YouTube</span>
<span className="px-3 py-1 rounded-full border border-white/20 text-white/80 hover:border-yellow-300 hover:bg-white/5 transition-colors">Apple Music</span>
</div>
</div>
</div>

<div className="mt-5 border-t border-white/10 pt-3">
<div className="flex items-center justify-between mb-2 text-[11px] uppercase tracking-[0.24em] text-white/40">
<span>Tracklist</span>
<span>Duración</span>
</div>
<div className="space-y-1 text-xs">
<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
<span className="flex items-center gap-2">
<span className="text-white/40 text-[11px]">01</span> Fuego en el Sur
                    </span>
<span className="text-white/60">3:18</span>
</div>
<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
<span className="flex items-center gap-2">
<span className="text-white/40 text-[11px]">02</span> Cumbia del Barrio
                    </span>
<span className="text-white/60">2:54</span>
</div>
<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
<span className="flex items-center gap-2">
<span className="text-white/40 text-[11px]">03</span> Luna de Lanús
                    </span>
<span className="text-white/60">3:42</span>
</div>
<div className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
<span className="flex items-center gap-2">
<span className="text-white/40 text-[11px]">04</span> Sábado Sin Fin
                    </span>
<span className="text-white/60">3:07</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-5">
<div className="rounded-3xl border border-yellow-300/60 bg-yellow-400/10 p-4">
<div className="flex items-center justify-between gap-2 mb-3">
<div className="text-xs uppercase tracking-[0.26em] text-yellow-200">Video Destacado</div>
<div className="flex items-center gap-1 text-[11px] text-yellow-100">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-300"></span>
<span>LIVE SESSION</span>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-yellow-300/60 bg-black">
<img alt="Live session performance" className="w-full h-52 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<button className="absolute inset-0 flex items-center justify-center">
<div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-500/95 text-black border border-pink-200 hover:bg-yellow-300 hover:border-yellow-100 transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</button>
<div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between text-[11px]">
<div>
<div className="font-medium">Cumbia Fuego – En vivo en el Sur</div>
<div className="text-white/70">Sesión en terraza · Palermo</div>
</div>
<div className="text-white/60">4:21</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-4">
<div className="text-xs uppercase tracking-[0.24em] text-white/50 mb-3">Para bailar</div>
<ul className="space-y-2 text-xs">
<li className="flex items-center justify-between py-2 px-2 rounded-xl hover:bg-white/5 transition-colors">
<span>Cumbia Romántica</span>
<span className="text-white/60">Playlist</span>
</li>
<li className="flex items-center justify-between py-2 px-2 rounded-xl hover:bg-white/5 transition-colors">
<span>Clásicos del Baile</span>
<span className="text-white/60">Mix</span>
</li>
<li className="flex items-center justify-between py-2 px-2 rounded-xl hover:bg-white/5 transition-colors">
<span>Villeras del Sur</span>
<span className="text-white/60">Selección</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-black" id="banda">
<div className="max-w-6xl mx-auto px-4 py-14 md:py-18">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
<div className="flex-1 space-y-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">La Banda</h2>
<p className="text-sm text-white/75">
                Nacidos en el corazón del conurbano bonaerense, Cumbia Fuego es una mezcla de
                guitarras villera, teclados pegadizos y percusiones que no aflojan nunca.
              </p>
<p className="text-sm text-white/70">
                Con más de una década girando por Argentina, el grupo lleva la cumbia a festivales,
                fiestas privadas y escenarios donde la consigna es siempre la misma: que nadie se quede sentado.
              </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">

<div className="flex flex-col items-start gap-2">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/15">
<img alt="Lead vocalist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div>
<div className="text-xs font-medium">Lucho</div>
<div className="text-[11px] text-white/60 uppercase tracking-[0.22em]">Voz líder</div>
</div>
</div>

<div className="flex flex-col items-start gap-2">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/15">
<img alt="Keyboard player" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div>
<div className="text-xs font-medium">Nati</div>
<div className="text-[11px] text-white/60 uppercase tracking-[0.22em]">Teclados</div>
</div>
</div>

<div className="flex flex-col items-start gap-2">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/15">
<img alt="Guitar player" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div>
<div className="text-xs font-medium">El Pola</div>
<div className="text-[11px] text-white/60 uppercase tracking-[0.22em]">Guitarra</div>
</div>
</div>

<div className="flex flex-col items-start gap-2">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/15">
<img alt="Percussionist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div>
<div className="text-xs font-medium">Chino</div>
<div className="text-[11px] text-white/60 uppercase tracking-[0.22em]">Percusión</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-80 rounded-3xl border border-pink-500/60 bg-pink-500/10 p-5">
<div className="text-xs uppercase tracking-[0.26em] text-pink-200 mb-2">Reseñas</div>
<p className="text-sm text-pink-50">
                “Pocas bandas logran mantener la esencia de la cumbia argentina y a la vez sonar tan frescos.
                Cumbia Fuego convierte cualquier noche en una fiesta inolvidable.”
              </p>
<div className="mt-4 text-[11px] text-pink-100">
                Revista Nocturna · <span className="text-pink-200 uppercase tracking-[0.22em]">Edición Especial</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 bg-gradient-to-b from-black to-black pb-14 md:pb-18" id="contacto">
<div className="max-w-6xl mx-auto px-4 pt-14 md:pt-18">
<div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14">

<div className="space-y-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contacto &amp; Booking</h2>
<p className="text-sm text-white/75">
                ¿Querés que Cumbia Fuego lleve la fiesta a tu evento, boliche o festival?
                Escribinos con los detalles y te respondemos al toque.
              </p>
<div className="grid sm:grid-cols-2 gap-4 pt-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs uppercase tracking-[0.24em] text-white/50">Booking</div>
<div className="mt-1 text-sm">booking@cumbiafuego.com</div>
<div className="mt-1 text-xs text-white/60">Eventos privados · Festivales</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs uppercase tracking-[0.24em] text-white/50">Prensa</div>
<div className="mt-1 text-sm">prensa@cumbiafuego.com</div>
<div className="mt-1 text-xs text-white/60">Notas · Entrevistas</div>
</div>
</div>
<div className="pt-4">
<div className="text-xs uppercase tracking-[0.24em] text-white/50 mb-2">Redes</div>
<div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.24em]">
<button className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:border-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors">
                    Instagram
                  </button>
<button className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:border-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors">
                    YouTube
                  </button>
<button className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:border-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors">
                    TikTok
                  </button>
<button className="px-3 py-1.5 rounded-full border border-white/20 text-white/80 hover:border-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors">
                    Facebook
                  </button>
</div>
</div>
</div>

<div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6">
<div className="text-xs uppercase tracking-[0.26em] text-white/60 mb-4">
                  Enviar consulta
                </div>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs uppercase tracking-[0.24em] text-white/60">Nombre</label>
<input className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300/70 transition-colors" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs uppercase tracking-[0.24em] text-white/60">Email</label>
<input className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300/70 transition-colors" placeholder="vos@ejemplo.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs uppercase tracking-[0.24em] text-white/60">Tipo de evento</label>
<select className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/70 transition-colors">
<option className="bg-black">Fiesta privada</option>
<option className="bg-black">Boliche</option>
<option className="bg-black">Festival</option>
<option className="bg-black">Evento corporativo</option>
<option className="bg-black">Otro</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs uppercase tracking-[0.24em] text-white/60">Ciudad</label>
<input className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/70 transition-colors" placeholder="Ciudad, Provincia" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs uppercase tracking-[0.24em] text-white/60">Detalles del evento</label>
<textarea className="w-full px-3 py-2.5 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300/70 transition-colors resize-none" placeholder="Fecha, horario, duración estimada, cantidad de personas..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.24em] bg-pink-500 text-black border border-pink-400 hover:bg-yellow-300 hover:border-yellow-200 transition-colors" type="submit">
                      Enviar mensaje
                    </button>
<p className="text-[11px] text-white/55">
                      Respondemos en menos de <span className="text-yellow-300">24 hs</span>.
                    </p>
</div>
</form>
</div>
</div>
</div>

<footer className="mt-12 pt-6 border-t border-white/10 text-[11px] text-white/55 flex flex-col md:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span>© <span className="text-white">Cumbia Fuego</span> · Argentina</span>
</div>
<div className="flex items-center gap-4">
<span className="uppercase tracking-[0.22em]">Hecho con cumbia y amor</span>
</div>
</footer>
</div>
</section>
</main>
</div>

    </>
  );
}
