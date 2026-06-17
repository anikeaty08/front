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



        lucide.createIcons();

        const main = document.getElementById('main-scroll');
        const progress = document.getElementById('progress-bar');
        const currentSlideEl = document.getElementById('current-slide');
        
        window.navigate = (direction) => {
            const width = main.clientWidth;
            main.scrollBy({ left: width * direction, behavior: 'smooth' });
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
        });

        const updateScroll = () => {
            const scrollWidth = main.scrollWidth - main.clientWidth;
            const scrolled = main.scrollLeft;
            const percentage = scrolled / scrollWidth;
            
            if(progress) {
                 progress.style.width = `${Math.max(12.5, percentage * 100)}%`; 
            }
            
            const current = Math.round((scrolled / main.clientWidth) + 1);
            if(currentSlideEl) {
                currentSlideEl.innerText = Math.min(Math.max(current, 1), 8).toString().padStart(2, '0');
            }
        };

        main.addEventListener('scroll', updateScroll);
        
        // Touch swipe logic
        let touchStartX = 0;
        let touchEndX = 0;
        
        main.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        main.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) navigate(1);
            if (touchEndX > touchStartX + 50) navigate(-1);
        }

        updateScroll();
    
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
      

<div className="fixed inset-0 bg-[#050505] z-0">
<div className="absolute inset-0 bg-grid-dark"></div>

<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 p-2 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all active:scale-95" onclick="navigate(-1)">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="flex flex-col items-center justify-center px-4 min-w-[80px]">
<span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">Slide</span>
<div className="flex items-baseline gap-1 font-mono text-sm font-semibold text-white">
<span id="current-slide">08</span><span className="text-zinc-600">/</span><span className="text-zinc-600">08</span>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white transition-all active:scale-95" onclick="navigate(1)">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="absolute bottom-0 left-4 right-4 h-[1px] bg-white/5 overflow-hidden rounded-full translate-y-4">
<div className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] w-[12.5%] transition-all duration-300" id="progress-bar" style={{width: '100%'}}></div>
</div>
</nav>

<main className="slide-container flex flex-row w-screen h-screen overflow-x-auto overflow-y-hidden no-scrollbar relative z-10 focus:outline-none" id="main-scroll" tabindex="0">

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden group">

<div className="flex justify-center mb-auto animate-enter">
<div className="flex items-center gap-3 px-2 py-1.5 pr-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border border-[#111]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-6 h-6 rounded-full border border-[#111]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-6 h-6 rounded-full border border-[#111]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-xs font-medium text-zinc-300">Realidad Operativa</span>
</div>
</div>

<div className="flex-1 flex flex-col justify-center items-center text-center z-10 -mt-10">
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1] mb-6 animate-enter delay-100 text-balance">
                        Tu oficina ideal <br/>es <span className="font-serif-italic text-blue-500 font-normal">mortal</span> para<br/> tu flujo.
                    </h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-sm mx-auto animate-enter delay-200">
                        Así es como estás pagando el "éxito" <br/>con tu propia rentabilidad.
                    </p>
<div className="mt-10 animate-enter delay-300">
</div>
</div>

<div className="mt-auto flex justify-between items-end w-full border-t border-white/5 pt-6 animate-enter delay-500">
<div>
<p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Costo Oculto</p>
<p className="text-xl font-bold text-white font-mono">+35%</p>
</div>
<div className="text-right">
<p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">Productividad</p>
<p className="text-xl font-bold text-white font-mono">-18%</p>
</div>
</div>
</div>
</section>

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden">
<div className="flex justify-between items-center mb-10 opacity-50">
<i className="w-6 h-6 text-white" data-lucide="building-2"></i>
<span className="font-mono text-xs text-zinc-400">02</span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-[1.1] mb-12">
                        La gran mentira <br/> <span className="font-serif-italic text-blue-500 text-glow">del ladrillo.</span>
</h2>

<div className="space-y-4">
<div className="group p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-zinc-500" data-lucide="armchair"></i>
</div>
<span className="text-lg font-medium text-zinc-300">Oficina Física</span>
</div>
<span className="text-[10px] font-bold text-red-400 bg-red-400/10 px-3 py-1 rounded-full tracking-wider">PASIVO</span>
</div>
<div className="group p-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-between shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
<i className="w-5 h-5 text-white fill-white" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold text-white">Sistemas</span>
</div>
<span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full tracking-wider shadow-[0_0_10px_rgba(59,130,246,0.2)]">ACTIVO</span>
</div>
</div>
<p className="text-lg text-zinc-400 leading-relaxed mt-10">
                        Nos vendieron metros cuadrados como éxito. Si no produce <span className="text-white font-semibold">facturación directa</span>, te está robando vida.
                    </p>
</div>
</div>
</section>

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden">
<div className="flex justify-between items-center mb-10 opacity-50">
<i className="w-6 h-6 text-white" data-lucide="calculator"></i>
<span className="font-mono text-xs text-zinc-400">03</span>
</div>
<div className="flex-1 flex flex-col justify-center">
<h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">La cuenta real.</h2>
<div className="grid grid-cols-1 gap-12 text-center md:text-left">
<div className="">
<p className="md:text-6xl text-5xl font-bold text-white tracking-tighter mb-2">$200M<span className="text-blue-500 text-3xl align-top">+</span></p>
<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Costo Fijo Anual</p>
</div>
<div className="">
<p className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2">480h<span className="text-blue-500 text-3xl align-top">+</span></p>
<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Perdidas en Transporte</p>
</div>
</div>
<div className="mt-auto pt-10 border-t border-white/5">
<p className="text-base text-zinc-300">
                            Ese es el capital exacto que necesitas para <span className="font-serif-italic text-blue-400 text-xl">sistematizar y ser libre.</span>
</p>
</div>
</div>
</div>
</section>

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex justify-between items-center mb-10 opacity-50">
<i className="w-6 h-6 text-white" data-lucide="users"></i>
<span className="font-mono text-xs text-zinc-400">04</span>
</div>
<div className="flex-1 flex flex-col justify-center relative z-10">
<i className="w-10 h-10 text-blue-500 mb-6 opacity-80 fill-blue-500/20" data-lucide="quote"></i>
<h3 className="text-2xl md:text-3xl font-medium text-zinc-100 leading-snug mb-10 tracking-tight">
                        "Creer que la gente solo trabaja si la ves es un síntoma de <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-4">procesos rotos</span>."
                    </h3>
<div className="space-y-6">
<div className="pl-4 border-l-2 border-blue-500">
<h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Alto Nivel</h4>
<p className="text-zinc-400 text-sm">El talento real odia el micromanagement y ama los resultados.</p>
</div>
<div className="pl-4 border-l-2 border-zinc-800 opacity-60">
<h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">Mediocridad</h4>
<p className="text-zinc-500 text-sm">Necesita la silla para simular trabajo y cobrar horas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden">
<div className="flex justify-between items-center mb-10 opacity-50">
<i className="w-6 h-6 text-white" data-lucide="globe"></i>
<span className="font-mono text-xs text-zinc-400">05</span>
</div>
<div className="flex-1 flex flex-col text-center items-center justify-center">
<div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(59,130,246,0.4)] animate-pulse">
<i className="w-10 h-10 text-white stroke-[2]" data-lucide="backpack"></i>
</div>
<h2 className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase mb-4">El Modelo Moderno</h2>
<h3 className="md:text-5xl text-balance text-4xl font-bold text-white tracking-tighter mb-8">Una empresa en un <span className="font-normal text-blue-300 font-serif-italic">morral</span></h3>
<div className="space-y-3 w-full max-w-xs mx-auto text-left">
<div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<p className="text-sm text-zinc-300">Si el mercado local cae, te mueves.</p>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<p className="text-sm text-zinc-300">Si el arriendo sube, te vas.</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden">
<div className="flex justify-between items-center mb-10 opacity-50">
<i className="w-6 h-6 text-white" data-lucide="file-warning"></i>
<span className="font-mono text-xs text-zinc-400">06</span>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="relative w-20 h-20 mb-8">
<i className="w-20 h-20 text-zinc-800 absolute" data-lucide="file-text"></i>
<i className="w-10 h-10 text-blue-500 absolute bottom-0 right-0 fill-blue-900/50 stroke-[2]" data-lucide="pencil"></i>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-balance tracking-tight">
                        Hoy mismo revisa tu contrato de arrendamiento.
                    </h2>
<p className="text-xl text-zinc-400 leading-relaxed mb-10">
                        Si no puedes justificar ese gasto con un retorno de , tienes grasa operativa disfrazada de estatus.
                    </p>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>
</div>
</section>

<section className="slide min-w-full flex md:p-8 h-full pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-[#111] to-blue-950/20">
<div className="flex justify-between items-center mb-10 opacity-50">
<i className="w-6 h-6 text-white" data-lucide="activity"></i>
<span className="font-mono text-xs text-zinc-400">07</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="p-5 bg-white/5 rounded-full mb-8 border border-white/10">
<i className="w-12 h-12 text-blue-400" data-lucide="stethoscope"></i>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Diagnóstico <br/>de Realidad</h2>
<p className="text-balance text-lg font-medium text-zinc-400 max-w-xs">Empieza cortando los tumores que tú llamas <span className="font-serif-italic text-2xl text-blue-400 font-normal block mt-2">'estatus'</span></p>
<p className="mt-16 text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 animate-pulse">Sin anestesia</p>
</div>
</div>
</section>

<section className="slide min-w-full h-full flex items-center justify-center p-4 md:p-8">
<div className="card-dark aspect-insta h-[85vh] max-h-[900px] w-auto flex flex-col p-8 md:p-12 relative overflow-hidden">
<div className="flex-1 flex flex-col text-center items-center justify-center">

<h2 className="md:text-5xl text-4xl font-bold text-white tracking-tighter mb-4">Imagina lo que haria <br/> <span className="font-normal text-blue-500 font-serif-italic">revisando tu negocio</span></h2>
<p className="leading-relaxed text-balance text-sm text-zinc-400 max-w-[280px] mr-auto mb-10 ml-auto">Sin PowerPoints. Solo acciones que resuelven.</p>

<button className="btn-glow w-full max-w-xs py-4 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 border border-zinc-600 text-white font-medium text-sm flex items-center justify-center gap-2 mb-10 shadow-2xl group relative z-10">
                        Agendar llamada diagnóstico
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform text-zinc-400 group-hover:text-white" data-lucide="arrow-right"></i>
</button>

</div>
</div>
</section>
</main>


    </>
  );
}
