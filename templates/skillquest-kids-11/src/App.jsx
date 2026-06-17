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



tailwind.config = {
theme: {
extend: {
fontFamily: {
'game': ['Bangers', 'cursive'],
'body': ['Outfit', 'sans-serif'],
},
colors: {
'fortnite-purple': '#6366f1',
'fortnite-blue': '#0ea5e9',
'fortnite-yellow': '#facc15',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/80 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0">
<a className="font-game text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-fortnite-yellow to-orange-500 drop-shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300" href="#">
                        SKILL QUEST
                    </a>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-slate-300 hover:text-white hover:scale-105 transition-all font-medium text-sm tracking-wide" href="#cursos">MISIONES</a>
<a className="text-slate-300 hover:text-white hover:scale-105 transition-all font-medium text-sm tracking-wide" href="#mentor">MENTORES</a>
<a className="text-slate-300 hover:text-white hover:scale-105 transition-all font-medium text-sm tracking-wide" href="#precios">PASE DE BATALLA</a>
</div>
</div>

<div className="hidden md:block">
<button className="bg-fortnite-yellow text-slate-900 font-game text-xl px-6 py-1 rounded-sm transform skew-x-[-10deg] hover:skew-x-0 hover:bg-yellow-300 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
<span className="block transform skew-x-[10deg] tracking-wide">JUGAR AHORA</span>
</button>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none" type="button">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl filter"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl filter"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">

<div className="lg:w-1/2 text-center lg:text-left z-10">
<div className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-500/20 border border-indigo-500/50 backdrop-blur-sm">
<span className="text-indigo-300 font-semibold text-xs tracking-wider uppercase flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="lucide:sparkles"></iconify-icon> Temporada 1: El Futuro
                    </span>
</div>
<h1 className="text-6xl sm:text-7xl lg:text-8xl font-game tracking-tight text-white mb-6 leading-none drop-shadow-xl">
                    Sube de <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">NIVEL</span>
</h1>
<p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                    Desbloquea habilidades épicas en robótica, IA y diseño. No es solo estudiar, es equipar a tu personaje para el futuro.
                </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="group relative bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-game text-2xl tracking-wide transition-all duration-200 shadow-lg hover:shadow-indigo-500/50 overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
<span>INICIAR CURSO</span>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-700 hover:border-fortnite-yellow text-slate-300 hover:text-white font-game text-xl tracking-wide transition-all duration-200 hover:bg-slate-800">
<iconify-icon icon="lucide:play-circle" width="24"></iconify-icon>
                        VER TRAILER
                    </button>
</div>

<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400" icon="lucide:users"></iconify-icon>
<span>+500 Alumnos</span>
</div>
<div className="w-1 h-1 bg-slate-600 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="lucide:star"></iconify-icon>
<span>4.9/5 Valoración</span>
</div>
</div>
</div>

<div className="lg:w-1/2 mt-12 lg:mt-0 relative">
<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute top-0 right-0 w-48 h-64 bg-slate-800 rounded-2xl border-4 border-yellow-400 transform rotate-6 shadow-2xl z-20 flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
<div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-yellow-400 text-4xl" icon="lucide:bot"></iconify-icon>
</div>
<h3 className="font-game text-2xl text-white">Robótica</h3>
<div className="mt-2 w-full bg-slate-700 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
<p className="text-xs text-slate-400 mt-1 self-end">Lvl 12</p>
</div>
<div className="absolute bottom-10 left-10 w-48 h-60 bg-slate-800 rounded-2xl border-4 border-purple-500 transform -rotate-12 shadow-2xl z-10 flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
<div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-purple-400 text-4xl" icon="lucide:palette"></iconify-icon>
</div>
<h3 className="font-game text-2xl text-white">Arte</h3>
<div className="mt-2 w-full bg-slate-700 rounded-full h-2">
<div className="bg-purple-500 h-2 rounded-full" style={{width: '45%'}}></div>
</div>
<p className="text-xs text-slate-400 mt-1 self-end">Lvl 5</p>
</div>

<iconify-icon className="absolute top-10 left-10 text-cyan-400 text-6xl animate-pulse z-0 opacity-50" icon="lucide:zap"></iconify-icon>
<iconify-icon className="absolute bottom-0 right-10 text-pink-500 text-5xl transform rotate-45 z-30" icon="lucide:gamepad-2"></iconify-icon>
</div>
</div>
</div>
</div>

<section className="py-20 bg-slate-900 relative" id="cursos">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-game text-white tracking-wide mb-4">
<span className="text-fortnite-yellow">ELIGE</span> TU CAMINO
                </h2>
<p className="text-slate-400 max-w-2xl mx-auto">Selecciona tu clase y comienza a ganar experiencia en las habilidades más demandadas del mundo digital.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
<div className="p-6">
<div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<iconify-icon className="text-orange-500 text-2xl" icon="lucide:cpu"></iconify-icon>
</div>
<h3 className="font-game text-2xl text-white mb-2 tracking-wide">ROBÓTICA LEGO</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-3">Construye y programa tus propios mechs y vehículos. Domina la ingeniería desde cero.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-xs font-mono text-orange-400 bg-orange-400/10 px-2 py-1 rounded">HARDWARE</span>
<iconify-icon className="text-white transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-pink-500 transition-all duration-300 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
<div className="p-6">
<div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon className="text-pink-500 text-2xl" icon="lucide:pen-tool"></iconify-icon>
</div>
<h3 className="font-game text-2xl text-white mb-2 tracking-wide">DISEÑO &amp; CUENTOS</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-3">Crea mundos fantásticos y personajes únicos. Aprende ilustración digital y narrativa.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-xs font-mono text-pink-400 bg-pink-400/10 px-2 py-1 rounded">CREATIVO</span>
<iconify-icon className="text-white transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div className="p-6">
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
<iconify-icon className="text-cyan-500 text-2xl" icon="lucide:brain-circuit"></iconify-icon>
</div>
<h3 className="font-game text-2xl text-white mb-2 tracking-wide">INTELIGENCIA ARTIFICIAL</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-3">Entrena modelos y descubre cómo piensan las máquinas. El futuro es ahora.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">LÓGICA</span>
<iconify-icon className="text-white transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
<div className="p-6">
<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
<iconify-icon className="text-green-500 text-2xl" icon="lucide:zap"></iconify-icon>
</div>
<h3 className="font-game text-2xl text-white mb-2 tracking-wide">TÉCNICAS DE ESTUDIO</h3>
<p className="text-sm text-slate-400 mb-4 line-clamp-3">Hackea tu cerebro para aprender más rápido. Mapas mentales y lectura veloz.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded">BOOST</span>
<iconify-icon className="text-white transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-950 relative overflow-hidden clip-path-slant">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-indigo-900 opacity-90"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-4xl sm:text-5xl font-game text-white mb-6">
                        RECOMPENSAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">LEGENDARIAS</span>
</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/30 transform rotate-3">
<iconify-icon className="text-white text-xl" icon="lucide:trophy"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Certificados de Habilidad</h4>
<p className="text-indigo-200 text-sm">Gana insignias digitales al completar proyectos y súbelas a tu perfil.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30 transform -rotate-2">
<iconify-icon className="text-white text-xl" icon="lucide:users-2"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Clanes de Trabajo</h4>
<p className="text-indigo-200 text-sm">Aprende en equipo. Colabora en misiones grupales y gana XP extra.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-pink-600 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/30 transform rotate-1">
<iconify-icon className="text-white text-xl" icon="lucide:video"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold text-white mb-1">Clases en Vivo</h4>
<p className="text-indigo-200 text-sm">Mentores expertos transmitiendo estrategias en tiempo real.</p>
</div>
</li>
</ul>
</div>
<div className="md:w-1/2 relative">

<div className="w-full h-80 bg-gradient-to-tr from-slate-800 to-slate-700 rounded-3xl border-4 border-indigo-400/50 relative flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.3)]">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 rounded-2xl"></div>
<iconify-icon className="text-9xl text-indigo-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" icon="lucide:package-open"></iconify-icon>

<div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 flex items-center justify-center shadow-lg border-b-4 border-yellow-600">
<iconify-icon className="text-yellow-900 text-4xl" icon="lucide:gem"></iconify-icon>
</div>
<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400 rounded-xl -rotate-6 flex items-center justify-center shadow-lg border-b-4 border-cyan-600">
<iconify-icon className="text-cyan-900 text-3xl" icon="lucide:code-2"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900" id="precios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl sm:text-5xl font-game text-white mb-4">PASE DE BATALLA</h2>
<p className="text-slate-400 mb-12">Escoge tu suscripción y desbloquea todo el contenido.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col">
<h3 className="font-game text-2xl text-slate-300 mb-2">NOVATO</h3>
<div className="text-4xl font-bold text-white mb-6">Gratis</div>
<ul className="text-left space-y-3 mb-8 flex-1 text-slate-400 text-sm">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> 1 Curso Introductorio</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Acceso a la comunidad</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-600 text-white font-semibold hover:bg-slate-700 transition-colors">Crear Cuenta</button>
</div>

<div className="bg-indigo-600 rounded-2xl p-8 border-4 border-yellow-400 transform md:-translate-y-4 shadow-2xl relative flex flex-col">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider">Más Popular</div>
<h3 className="font-game text-3xl text-white mb-2 tracking-wide">PRO GAMER</h3>
<div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg font-normal text-indigo-200">/mes</span></div>
<p className="text-indigo-200 text-xs mb-6">Facturado anualmente</p>
<ul className="text-left space-y-3 mb-8 flex-1 text-indigo-100 text-sm font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-300" icon="lucide:check"></iconify-icon> Acceso a TODOS los cursos</li>
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-300" icon="lucide:check"></iconify-icon> Mentoría semanal</li>
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-300" icon="lucide:check"></iconify-icon> Certificados Premium</li>
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-300" icon="lucide:check"></iconify-icon> Skin de perfil exclusiva</li>
</ul>
<button className="w-full py-3 rounded-xl bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20">Obtener Pase</button>
</div>

<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col">
<h3 className="font-game text-2xl text-slate-300 mb-2">CLAN</h3>
<div className="text-4xl font-bold text-white mb-6">$89<span className="text-lg font-normal text-slate-400">/mes</span></div>
<ul className="text-left space-y-3 mb-8 flex-1 text-slate-400 text-sm">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Hasta 5 estudiantes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Panel de padres</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Proyectos colaborativos</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-600 text-white font-semibold hover:bg-slate-700 transition-colors">Empezar Clan</button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-8">
<a className="font-game text-2xl tracking-wider text-white mb-4 md:mb-0" href="#">
                    SKILL QUEST
                </a>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitch" width="20"></iconify-icon></a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2023 SkillQuest Inc. Game on.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-slate-300" href="#">Términos</a>
<a className="hover:text-slate-300" href="#">Privacidad</a>
<a className="hover:text-slate-300" href="#">Soporte</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
