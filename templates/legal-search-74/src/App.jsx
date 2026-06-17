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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_0%,_rgba(255,93,1,0.15),_transparent_50%)] pointer-events-none z-0"></div>

<header className="sticky top-0 z-40 bg-[#000000]/50 backdrop-blur-xl border-b border-white/10">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-white flex items-baseline" href="#">
                    LEX<span className="text-[#FF5D01] text-2xl leading-none">.</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-white" href="#">Buscador</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Estructura</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Jurisprudencia</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
<iconify-icon className="text-[#FF5D01] text-xs" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-white/70">Plan Básico</span>
</div>

<button className="text-sm font-medium bg-[#FF5D01] text-white px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,93,1,0.3)] hover:shadow-[0_0_25px_rgba(255,93,1,0.5)] border border-[#FF5D01]/50 hover:bg-[#FF5D01]/90 transition-all">
                    Mejorar a Pro
                </button>
<button className="text-white/50 hover:text-white transition-colors flex items-center ml-2">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-5xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center relative z-10">

<div className="w-full text-center mb-10">
<h1 className="text-3xl font-medium tracking-tight text-white mb-3 drop-shadow-sm">Código Nacional de Procedimientos Penales</h1>
<p className="text-base text-white/50">Búsqueda semántica e inteligente para profesionales del derecho.</p>
</div>

<div className="w-full max-w-2xl relative mb-16 group">
<div className="relative z-20">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/40">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<input autocomplete="off" className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/10 rounded-2xl py-4 pl-12 pr-16 shadow-[0_8px_30px_rgb(0,0,0,0.5)] text-base text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF5D01]/30 focus:border-[#FF5D01]/50 transition-all peer" placeholder="Busca por artículo, concepto o procedimiento..." type="text" value="Prisión preventiva"/>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-xs font-medium text-white/40 bg-white/5 border border-white/10 rounded-md">
<span className="text-xs">⌘</span>K
                    </kbd>
</div>
</div>

<div className="absolute top-full left-0 w-full mt-2 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden z-10 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-all duration-200 translate-y-[-10px] peer-focus:translate-y-0">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="p-2 relative z-10">
<div className="px-3 py-2 text-xs font-medium text-white/30 tracking-wide uppercase">Resultados en el Código</div>
<a className="flex flex-col px-3 py-2.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group/item border border-transparent hover:border-white/5" href="#">
<div className="flex items-center justify-between mb-0.5">
<span className="text-sm font-medium text-white/90">Artículo 167. Causas de procedencia</span>
<span className="text-xs text-white/40 group-hover/item:text-white/60">Capítulo IV</span>
</div>
<p className="text-xs text-white/50 line-clamp-2">El Juez de control en el ámbito de su competencia, ordenará la <span className="text-[#FF5D01] bg-[#FF5D01]/10 px-1 rounded font-medium border border-[#FF5D01]/20">prisión preventiva</span> oficiosamente en los casos de...</p>
</a>
<a className="flex flex-col px-3 py-2.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group/item border border-transparent hover:border-white/5" href="#">
<div className="flex items-center justify-between mb-0.5">
<span className="text-sm font-medium text-white/90">Artículo 155. Tipos de medidas cautelares</span>
<span className="text-xs text-white/40 group-hover/item:text-white/60">Capítulo II</span>
</div>
<p className="text-xs text-white/50 line-clamp-2">A solicitud del Ministerio Público o de la víctima u ofendido, el juez podrá imponer... XIV. La <span className="text-[#FF5D01] bg-[#FF5D01]/10 px-1 rounded font-medium border border-[#FF5D01]/20">prisión preventiva</span>.</p>
</a>
<div className="px-3 py-2 text-xs font-medium text-white/30 tracking-wide uppercase mt-2 border-t border-white/5 pt-3">Conceptos Relacionados</div>
<div className="flex flex-wrap gap-2 px-3 pt-1 pb-2">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/60 cursor-pointer hover:bg-white/10 hover:text-white transition-colors">Medidas cautelares</span>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/60 cursor-pointer hover:bg-white/10 hover:text-white transition-colors">Juez de control</span>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-white/60 cursor-pointer hover:bg-white/10 hover:text-white transition-colors">Vinculación a proceso</span>
</div>
<div className="border-t border-white/5 mt-1 pt-2 px-3 py-2 flex items-center justify-between text-xs bg-black/40 rounded-b-xl">
<span className="text-white/40">Presiona <span className="font-medium text-white/70">Enter</span> para ver los 42 resultados</span>
<iconify-icon className="text-white/40" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-between px-2">
<div className="flex items-center gap-2">
<div className="flex space-x-1">

<div className="w-1.5 h-1.5 rounded-full bg-[#FF5D01] shadow-[0_0_8px_rgba(255,93,1,0.8)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#FF5D01] shadow-[0_0_8px_rgba(255,93,1,0.8)]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>
<p className="text-xs text-white/50">
<span className="font-medium text-white/90">2</span> de 10 búsquedas gratuitas usadas
                    </p>
</div>
<a className="text-xs font-medium text-white/50 hover:text-white flex items-center gap-1 transition-colors" href="#">
                    Suscripción ilimitada
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-0">

<div className="bg-[#050505] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group/card">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h2 className="text-sm font-medium tracking-tight text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-white/40" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Búsquedas Recientes
                </h2>
<ul className="space-y-1">
<li>
<a className="group flex items-center justify-between text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<span className="truncate">Flagrancia y caso urgente</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 text-white/40 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</li>
<li>
<a className="group flex items-center justify-between text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<span className="truncate">Art. 146 Fracción II</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 text-white/40 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</li>
<li>
<a className="group flex items-center justify-between text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<span className="truncate">Etapa intermedia</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 text-white/40 transition-opacity" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</li>
</ul>
</div>

<div className="bg-[#050505] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group/card">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h2 className="text-sm font-medium tracking-tight text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-white/40" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Estructura Rápida
                </h2>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<iconify-icon className="text-white/30 group-hover:text-[#FF5D01] transition-colors" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="truncate">Libro Primero: Generales</span>
</a>
</li>
<li>
<a className="group flex items-center gap-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<iconify-icon className="text-white/30 group-hover:text-[#FF5D01] transition-colors" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="truncate">Libro Segundo: Procedimiento</span>
</a>
</li>
<li>
<a className="group flex items-center gap-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<iconify-icon className="text-white/30 group-hover:text-[#FF5D01] transition-colors" icon="solar:sitemap-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="truncate">Índice Analítico</span>
</a>
</li>
</ul>
</div>

<div className="bg-[#050505] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group/card">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h2 className="text-sm font-medium tracking-tight text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-white/40" icon="solar:bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Artículos Guardados
                </h2>
<ul className="space-y-2">
<li>
<a className="group flex flex-col justify-center text-sm text-white/60 hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<div className="flex items-center gap-2">
<span className="font-medium text-white/90 group-hover:text-[#FF5D01] transition-colors">Art. 211</span>
<span className="text-xs px-1.5 py-0.5 rounded bg-[#FF5D01]/10 border border-[#FF5D01]/20 text-[#FF5D01]">Nota añadida</span>
</div>
<span className="text-xs text-white/40 truncate mt-0.5">Etapas del procedimiento penal</span>
</a>
</li>
<li>
<a className="group flex flex-col justify-center text-sm text-white/60 hover:bg-white/5 rounded-lg px-2 py-1.5 -mx-2 transition-colors" href="#">
<div className="flex items-center gap-2">
<span className="font-medium text-white/90 group-hover:text-[#FF5D01] transition-colors">Art. 16</span>
</div>
<span className="text-xs text-white/40 truncate mt-0.5">Inmediación en las audiencias</span>
</a>
</li>
</ul>
</div>
</div>
</main>

    </>
  );
}
