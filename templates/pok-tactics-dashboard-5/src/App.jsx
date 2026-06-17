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
      

<header className="flex-none flex z-20 bg-zinc-950/80 h-14 border-zinc-800/60 border-b pr-6 pl-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-md flex items-center justify-center shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-sm text-white" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white">POKÉTACTICS</span>
</div>
<nav className="hidden md:flex gap-6 text-xs font-medium text-zinc-500">
<a className="transition-colors text-zinc-100" href="#">Enciclopedia</a>
<a className="transition-colors hover:text-zinc-300" href="#">Tabla de Tipos</a>
<a className="transition-colors hover:text-zinc-300" href="#">Movimientos</a>
<a className="transition-colors hover:text-zinc-300" href="#">Constructor</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="border text-xs rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 w-64 transition-all bg-zinc-900 border-zinc-800 text-zinc-300" placeholder="Buscar Pokémon, Movimiento..." type="text"/>
</div>
<button className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="flex-none hidden lg:flex flex-col overflow-y-auto bg-zinc-950/50 w-72 border-zinc-800/60 border-r">
<div className="p-6 space-y-8">

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Filtrar por Tipo</h3>
<div className="grid grid-cols-2 gap-2">

<button className="flex items-center gap-2 group cursor-pointer text-left">
<div className="w-4 h-4 rounded border group-hover:border-zinc-500 flex items-center justify-center transition-colors border-zinc-700 bg-zinc-900">
<iconify-icon className="text-transparent group-active:text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs group-hover:text-zinc-200 text-zinc-400">Fuego</span>
</button>
<button className="flex items-center gap-2 group cursor-pointer text-left">
<div className="w-4 h-4 rounded border group-hover:border-zinc-500 flex items-center justify-center transition-colors border-zinc-700 bg-zinc-900"></div>
<span className="text-xs group-hover:text-zinc-200 text-zinc-400">Agua</span>
</button>
<button className="flex items-center gap-2 group cursor-pointer text-left">
<div className="w-4 h-4 rounded border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center transition-colors">
<iconify-icon className="text-xs text-indigo-400" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-indigo-300">Dragón</span>
</button>
<button className="flex items-center gap-2 group cursor-pointer text-left">
<div className="w-4 h-4 rounded border group-hover:border-zinc-500 flex items-center justify-center transition-colors border-zinc-700 bg-zinc-900"></div>
<span className="text-xs group-hover:text-zinc-200 text-zinc-400">Hada</span>
</button>
<button className="flex items-center gap-2 group cursor-pointer text-left">
<div className="w-4 h-4 rounded border group-hover:border-zinc-500 flex items-center justify-center transition-colors border-zinc-700 bg-zinc-900"></div>
<span className="text-xs group-hover:text-zinc-200 text-zinc-400">Acero</span>
</button>
<button className="flex items-center gap-2 group cursor-pointer text-left">
<div className="w-4 h-4 rounded border group-hover:border-zinc-500 flex items-center justify-center transition-colors border-zinc-700 bg-zinc-900"></div>
<span className="text-xs group-hover:text-zinc-200 text-zinc-400">Tierra</span>
</button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Velocidad Base</h3>
<div className="px-1">
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-zinc-800" max="200" min="0" type="range" value="100"/>
<div className="flex justify-between text-[10px] text-zinc-500 mt-2 font-mono">
<span>0</span>
<span>100+</span>
<span>200</span>
</div>
</div>
</div>

<div className="pt-6 border-t border-zinc-800/50">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:notebook-linear"></iconify-icon>
<h3 className="text-xs font-medium text-zinc-200 uppercase tracking-wider">Guía: Naturalezas</h3>
</div>
<div className="space-y-4">

<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:sword-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">Physical Sweeper</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Alegre</div>
<div className="flex justify-between text-[9px] mt-0.5 text-zinc-500">
<span className="text-emerald-500/80">+Vel</span>
<span className="text-red-500/60">-SpA</span>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Firme</div>
<div className="flex justify-between text-[9px] mt-0.5 text-zinc-500">
<span className="text-emerald-500/80">+Atk</span>
<span className="text-red-500/60">-SpA</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:stars-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">Special Sweeper</span>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Miedosa</div>
<div className="flex justify-between text-[9px] mt-0.5 text-zinc-500">
<span className="text-emerald-500/80">+Vel</span>
<span className="text-red-500/60">-Atk</span>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Modesta</div>
<div className="flex justify-between text-[9px] mt-0.5 text-zinc-500">
<span className="text-emerald-500/80">+SpA</span>
<span className="text-red-500/60">-Atk</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:shield-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wide">Walls / Staller</span>
</div>
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Agitada</div>
<div className="text-[9px] mt-0.5 text-zinc-500">Defensa Física</div>
<div className="flex justify-between text-[9px] text-zinc-600">
<span className="text-emerald-500/80">+Def</span>
<span className="text-red-500/60">-SpA</span>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Cauta</div>
<div className="text-[9px] mt-0.5 text-zinc-500">Def. Especial</div>
<div className="flex justify-between text-[9px] text-zinc-600">
<span className="text-emerald-500/80">+SpD</span>
<span className="text-red-500/60">-SpA</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Osada</div>
<div className="text-[9px] mt-0.5 text-zinc-500">Defensa (SpA)</div>
<div className="flex justify-between text-[9px] text-zinc-600">
<span className="text-emerald-500/80">+Def</span>
<span className="text-red-500/60">-Atk</span>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/80 rounded px-2 py-1.5">
<div className="text-xs text-zinc-200 font-medium">Serena</div>
<div className="text-[9px] mt-0.5 text-zinc-500">Def. Esp (SpA)</div>
<div className="flex justify-between text-[9px] text-zinc-600">
<span className="text-emerald-500/80">+SpD</span>
<span className="text-red-500/60">-Atk</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</aside>

<section className="flex-1 overflow-y-auto relative bg-zinc-950">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')'}}></div>
<div className="max-w-7xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="flex mb-8 items-end justify-between">
<div className="">
<h1 className="text-2xl font-semibold tracking-tight mb-2 text-zinc-100">Meta Actual (OU)</h1>
<p className="text-sm text-zinc-500">Selecciona Pokémon para analizar sinergias y cobertura de tipos.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">Ordenar:</span>
<button className="flex gap-1 hover:text-white text-xs font-medium text-zinc-300 gap-x-1 gap-y-1 items-center">
                            Uso
                            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="group hover:border-indigo-500/50 transition-all duration-300 cursor-pointer border rounded-xl p-5 relative hover:bg-zinc-900/60 bg-zinc-900/40 border-zinc-800">
<div className="absolute top-5 right-5 flex gap-1">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">DRAGON</span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-orange-500/10 border border-orange-500/20 text-orange-400">TIERRA</span>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden border group-hover:border-zinc-600 bg-zinc-800/50 border-zinc-700/50">
<img alt="Garchomp" className="group-hover:opacity-100 transition-opacity opacity-80 w-14 h-14 object-contain" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"/>
</div>
<div className="">
<h3 className="text-sm font-semibold group-hover:text-white text-zinc-200">Garchomp</h3>
<div className="flex items-center gap-2 mt-1">
<div className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-medium">Alegre (+Vel)</div>
<span className="text-[10px] text-zinc-500">Physical Sweeper</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] text-zinc-500 w-8">Vel</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-indigo-500 w-[85%]"></div>
</div>
<span className="text-[10px] text-zinc-400">102</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-zinc-500 w-8">Atk</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-emerald-500 w-[95%]"></div>
</div>
<span className="text-[10px] text-zinc-400">130</span>
</div>
</div>
</div>

<div className="mt-4 pt-4 border-t border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 mb-2 font-medium tracking-wide">Cobertura Ofensiva Clave</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Terremoto</span>
<span className="text-[10px] border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5 text-zinc-400 bg-zinc-900 border-zinc-800">Roca Afilada</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Enfado</span>
</div>
</div>

<div className="mt-4 pt-3 border-t flex items-center justify-between border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 font-medium tracking-wide">Top Objetos</p>
<div className="flex items-center gap-1.5">
<div className="item-tooltip-container cursor-help" data-name="Restos">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leftovers.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Casco Dentado">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rocky-helmet.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Pañuelo Elección">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-scarf.png"/>
</div>
</div>
</div>
</div>

<div className="group relative border rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/60">
<div className="absolute top-5 right-5 flex gap-1">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-purple-500/10 border border-purple-500/20 text-purple-400">FANTAS</span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-pink-500/10 border border-pink-500/20 text-pink-400">HADA</span>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden border group-hover:border-zinc-600 bg-zinc-800/50 border-zinc-700/50">
<img alt="Flutter Mane" className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png"/>
</div>
<div className="">
<h3 className="text-sm font-semibold group-hover:text-white text-zinc-200">Melenaleteo</h3>
<div className="flex items-center gap-2 mt-1">
<div className="px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] text-indigo-400 font-medium">Miedosa (+Vel)</div>
<span className="text-[10px] text-zinc-500">Special Sweeper</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] text-zinc-500 w-8">Vel</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-indigo-500 w-[100%]"></div>
</div>
<span className="text-[10px] text-zinc-400">135</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-zinc-500 w-8">SpA</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-emerald-500 w-[100%]"></div>
</div>
<span className="text-[10px] text-zinc-400">135</span>
</div>
</div>
</div>

<div className="mt-4 pt-4 border-t border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 mb-2 font-medium tracking-wide">Cobertura Ofensiva Clave</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Fuerza Lunar</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Bola Sombra</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Mistica</span>
</div>
</div>

<div className="mt-4 pt-3 border-t flex items-center justify-between border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 font-medium tracking-wide">Top Objetos</p>
<div className="flex items-center gap-1.5">
<div className="item-tooltip-container cursor-help" data-name="Gafas Elección">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-specs.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Energía Potenciadora">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/booster-energy.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Pañuelo Elección">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-scarf.png"/>
</div>
</div>
</div>
</div>

<div className="group hover:border-indigo-500/50 transition-all duration-300 cursor-pointer hover:bg-zinc-900/60 bg-zinc-900/40 border-zinc-800 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute top-5 right-5 flex gap-1">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-zinc-500/20 border border-zinc-500/20 text-zinc-400">ACERO</span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide border border-red-500/20 bg-red-900/20 text-red-400">SINIE</span>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden border group-hover:border-zinc-600 bg-zinc-800/50 border-zinc-700/50">
<img alt="Kingambit" className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png"/>
</div>
<div className="">
<h3 className="text-sm font-semibold group-hover:text-white text-zinc-200">Kingambit</h3>
<div className="flex items-center gap-2 mt-1">
<div className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-medium">Firme (+Atk)</div>
<span className="text-[10px] text-zinc-500">Bulky Attacker</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] text-zinc-500 w-8">Def</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-blue-500 w-[90%]"></div>
</div>
<span className="text-[10px] text-zinc-400">120</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-zinc-500 w-8">Atk</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-emerald-500 w-[100%]"></div>
</div>
<span className="text-[10px] text-zinc-400">135</span>
</div>
</div>
</div>

<div className="mt-4 pt-4 border-t border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 mb-2 font-medium tracking-wide">Cobertura Ofensiva Clave</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Cabeza Hierro</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Golpe Bajo</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Espada</span>
</div>
</div>

<div className="mt-4 pt-3 border-t flex items-center justify-between border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 font-medium tracking-wide">Top Objetos</p>
<div className="flex items-center gap-1.5">
<div className="item-tooltip-container cursor-help" data-name="Restos">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/leftovers.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Gafas de Sol">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/black-glasses.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Chaleco Asalto">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/assault-vest.png"/>
</div>
</div>
</div>
</div>

<div className="group relative border rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer bg-zinc-900/40 border-zinc-800 hover:bg-zinc-900/60">
<div className="absolute top-5 right-5 flex gap-1">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-blue-500/10 border border-blue-500/20 text-blue-400">AGUA</span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">HIELO</span>
</div>
<div className="flex gap-4 items-center">
<div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden border group-hover:border-zinc-600 bg-zinc-800/50 border-zinc-700/50">
<img alt="Iron Bundle" className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png"/>
</div>
<div className="">
<h3 className="text-sm font-semibold group-hover:text-white text-zinc-200">Ferrosaco</h3>
<div className="flex items-center gap-2 mt-1">
<div className="px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] text-indigo-400 font-medium">Miedosa (+Vel)</div>
<span className="text-[10px] text-zinc-500">Special Sweeper</span>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-[10px] text-zinc-500 w-8">Vel</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-indigo-500 w-[100%]"></div>
</div>
<span className="text-[10px] text-zinc-400">136</span>
</div>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-zinc-500 w-8">SpA</span>
<div className="w-16 h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-emerald-500 w-[90%]"></div>
</div>
<span className="text-[10px] text-zinc-400">124</span>
</div>
</div>
</div>

<div className="mt-4 pt-4 border-t border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 mb-2 font-medium tracking-wide">Cobertura Ofensiva Clave</p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Hidrobomba</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Liofilización</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border text-zinc-400 bg-zinc-900 border-zinc-800">Volteo</span>
</div>
</div>

<div className="mt-4 pt-3 border-t flex items-center justify-between border-zinc-800/50">
<p className="text-[10px] uppercase text-zinc-500 font-medium tracking-wide">Top Objetos</p>
<div className="flex items-center gap-1.5">
<div className="item-tooltip-container cursor-help" data-name="Energía Potenciadora">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/booster-energy.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Gafas Elección">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-specs.png"/>
</div>
<div className="item-tooltip-container cursor-help" data-name="Pañuelo Elección">
<img className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition-opacity" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/choice-scarf.png"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="w-80 flex-none border-l hidden 2xl:flex flex-col bg-zinc-950 border-zinc-800/60">
<div className="p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-semibold tracking-tight text-white">Análisis de Equipo</h2>
<button className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300">Resetear</button>
</div>

<div className="grid grid-cols-2 gap-3 mb-8">

<div className="aspect-square rounded-lg border flex flex-col items-center justify-center relative group transition-colors bg-zinc-900/50 border-zinc-800 hover:border-zinc-700">
<img alt="Garchomp" className="w-16 h-16 object-contain z-10" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"/>
<span className="text-[10px] font-medium mt-1 text-zinc-400">Garchomp</span>
<button className="absolute top-1 right-1 text-zinc-600 hover:text-red-400"><iconify-icon className="text-xs" icon="solar:close-circle-linear"></iconify-icon></button>
</div>

<div className="aspect-square rounded-lg border flex flex-col items-center justify-center relative group transition-colors bg-zinc-900/50 border-zinc-800 hover:border-zinc-700">
<img alt="Flutter Mane" className="w-16 h-16 object-contain z-10" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png"/>
<span className="text-[10px] font-medium mt-1 text-zinc-400">Melenaleteo</span>
<button className="absolute top-1 right-1 text-zinc-600 hover:text-red-400"><iconify-icon className="text-xs" icon="solar:close-circle-linear"></iconify-icon></button>
</div>

<div className="aspect-square rounded-lg border flex flex-col items-center justify-center relative group transition-colors bg-zinc-900/50 border-zinc-800 hover:border-zinc-700">
<img alt="Bundle" className="w-16 h-16 object-contain z-10" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png"/>
<span className="text-[10px] font-medium mt-1 text-zinc-400">Ferrosaco</span>
<button className="absolute top-1 right-1 text-zinc-600 hover:text-red-400"><iconify-icon className="text-xs" icon="solar:close-circle-linear"></iconify-icon></button>
</div>

<div className="aspect-square rounded-lg border border-dashed flex flex-col items-center justify-center group cursor-pointer transition-colors bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/40 hover:border-zinc-700">
<iconify-icon className="text-2xl group-hover:text-zinc-500 mb-1 text-zinc-700" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] group-hover:text-zinc-500 text-zinc-600">Añadir</span>
</div>

<div className="aspect-square rounded-lg border border-dashed flex flex-col items-center justify-center group cursor-pointer transition-colors bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/40 hover:border-zinc-700">
<iconify-icon className="text-2xl group-hover:text-zinc-500 mb-1 text-zinc-700" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] group-hover:text-zinc-500 text-zinc-600">Añadir</span>
</div>

<div className="aspect-square rounded-lg border border-dashed flex flex-col items-center justify-center group cursor-pointer transition-colors bg-zinc-900/20 border-zinc-800 hover:bg-zinc-900/40 hover:border-zinc-700">
<iconify-icon className="text-2xl group-hover:text-zinc-500 mb-1 text-zinc-700" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[10px] group-hover:text-zinc-500 text-zinc-600">Añadir</span>
</div>
</div>

<div className="flex-1 rounded-xl border p-4 relative overflow-hidden bg-zinc-900/20 border-zinc-800">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-xs font-semibold text-zinc-200">Cobertura Ofensiva</h3>
</div>

<div className="mb-6">
<div className="flex justify-between items-end mb-2">
<span className="text-[10px] text-zinc-400">Efectividad Global</span>
<span className="text-lg font-bold tracking-tighter text-white">83%</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[83%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<p className="text-[10px] text-zinc-500 mt-2 leading-tight">Tu equipo golpea Super Efectivo a 15 de los 18 tipos elementales.</p>
</div>

<div className="space-y-3">
<p className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">Débiles contra tu equipo</p>
<div className="flex flex-wrap gap-1">
<span className="w-6 h-6 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center text-[10px]" title="Fuego">🔥</span>
<span className="w-6 h-6 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[10px]" title="Agua">💧</span>
<span className="w-6 h-6 rounded bg-green-500/10 border border-green-500/20 flex items-center justify-center text-[10px]" title="Planta">🌿</span>
<span className="w-6 h-6 rounded bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-[10px]" title="Eléctrico">⚡</span>
<span className="w-6 h-6 rounded bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center text-[10px]" title="Acero">⚙️</span>
<span className="w-6 h-6 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[10px]" title="Veneno">☠️</span>
<span className="w-6 h-6 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[10px]" title="Tierra">🌍</span>
<span className="w-6 h-6 rounded bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-[10px]" title="Hada">✨</span>
</div>
<p className="text-[10px] font-medium uppercase tracking-wide mt-4 text-red-400">Amenazas (Sin cobertura)</p>
<div className="flex items-center gap-2 p-2 bg-red-500/5 border border-red-500/10 rounded-md">
<iconify-icon className="text-xs text-red-400" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-[10px] text-zinc-400">Normal, Eléctrico (Levitación)</span>
</div>
</div>
</div>
</div>
</div>
</aside>
</main>

<footer className="flex-none h-8 border-t flex items-center justify-between px-4 text-[10px] bg-zinc-950 border-zinc-800 text-zinc-600">
<div className="flex gap-4">
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Servidores Online</span>
<span>v2.4.0 (Linear Build)</span>
</div>
<div>
<span>Datos provistos por PokeAPI</span>
</div>
</footer>

    </>
  );
}
