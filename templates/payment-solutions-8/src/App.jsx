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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function() {
            const targetDate = new Date("2026-06-06T08:00:00-04:00").getTime();
            const updateTimer = () => {
              const now = new Date().getTime();
              const diff = targetDate - now;
              
              if (diff <= 0) {
                document.getElementById('cd-days').textContent = "00";
                document.getElementById('cd-hours').textContent = "00";
                document.getElementById('cd-mins').textContent = "00";
                document.getElementById('cd-secs').textContent = "00";
                return;
              }
              
              document.getElementById('cd-days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
              document.getElementById('cd-hours').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
              document.getElementById('cd-mins').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
              document.getElementById('cd-secs').textContent = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
            };
            
            setInterval(updateTimer, 1000);
            updateTimer();
          })();
        


        (function() {
          const container = document.getElementById('compare-container');
          const slider = document.getElementById('compare-slider');
          const beforeImg = document.getElementById('compare-before');
          if (!container || !slider || !beforeImg) return;

          let isDragging = false;
          function slide(e) {
            if (!isDragging) return;
            let x = 0;
            if (e.type.includes('mouse')) x = e.pageX - container.getBoundingClientRect().left - window.scrollX;
            else if (e.type.includes('touch')) x = e.touches[0].pageX - container.getBoundingClientRect().left - window.scrollX;
            const width = container.offsetWidth;
            if (x < 0) x = 0;
            if (x > width) x = width;
            const percentage = (x / width) * 100;
            beforeImg.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            slider.style.left = `${percentage}%`;
          }

          slider.addEventListener('mousedown', (e) => { isDragging = true; e.preventDefault(); });
          window.addEventListener('mouseup', () => { isDragging = false; });
          window.addEventListener('mousemove', slide);
          slider.addEventListener('touchstart', () => { isDragging = true; });
          window.addEventListener('touchend', () => { isDragging = false; });
          window.addEventListener('touchmove', slide, { passive: true });
        })();
      
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
      

<div className="fixed z-0 pointer-events-none flex overflow-hidden top-0 right-0 bottom-0 left-0 items-start justify-center">
<div className="absolute top-[-20%] w-[800px] h-[600px] bg-[#8BC34A]/5 rounded-full blur-[150px]"></div>
<div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-screen"></div>
</div>
<main className="flex flex-col overflow-hidden w-full z-10 pt-1 pb-10 relative items-center" role="main">

<div className="flex flex-col hero-section z-0 w-full mt-2 mb-2 pt-30 pr-6 pb-40 pl-6 relative top-10 items-center">
<div className="inline-flex gap-2 hover:bg-[#8BC34A]/10 transition-colors cursor-pointer group scroll-item scroll-fade-up bg-[#8BC34A]/5 border-[#8BC34A]/30 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md items-center">
<iconify-icon className="text-base text-[#8BC34A]" icon="solar:shield-check-linear"></iconify-icon>
<span className="whitespace-nowrap text-sm font-normal text-[#8BC34A] tracking-tight text-center">No solo aprendes trading. Aprendes a vivir de él</span>
</div>
<h1 className="scroll-item scroll-blur-in delay-100 leading-[1.05] md:text-7xl lg:text-8xl text-5xl font-light text-[#ffffff] tracking-tighter text-center max-w-5xl mr-auto ml-auto">
        Tu dinero. <br className=""/> Tus reglas. <br className=""/> <span className="font-light text-[#ffffff]">Un mercado <span className="font-semibold text-[#8BC34A]">ILIMITADO</span></span>
</h1>
<p className="leading-relaxed scroll-item scroll-fade-up delay-200 text-xl text-gray-400 font-extralight text-center max-w-2xl mt-8 mx-auto">
        El evento donde aprenderás la habilidad que te permite generar ganancias reales en dólares desde cualquier lugar del mundo.
      </p>

<div className="flex flex-row flex-nowrap gap-1.5 sm:gap-4 scroll-item scroll-fade-up delay-200 w-full max-w-2xl mt-10 mr-auto mb-8 ml-auto pr-2 pl-2 gap-x-1.5 gap-y-1.5 items-center justify-center">
<div className="flex flex-col items-center justify-center bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-5 w-[22%] sm:w-28 shadow-[0_0_15px_rgba(139,195,74,0.15)] shrink-0 max-w-[100px]">
<span className="text-2xl sm:text-5xl font-semibold text-[#8BC34A] tracking-tight tabular-nums" id="cd-days">35</span>
<span className="text-[10px] sm:text-sm font-medium text-white/80 uppercase tracking-widest mt-1">Días</span>
</div>
<span className="text-lg sm:text-4xl font-light text-gray-600 shrink-0 pb-4 sm:pb-6">:</span>
<div className="flex flex-col items-center justify-center bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-5 w-[22%] sm:w-28 shadow-[0_0_15px_rgba(139,195,74,0.15)] shrink-0 max-w-[100px]">
<span className="text-2xl sm:text-5xl font-semibold text-[#8BC34A] tracking-tight tabular-nums" id="cd-hours">17</span>
<span className="text-[10px] sm:text-sm font-medium text-white/80 uppercase tracking-widest mt-1">Hrs</span>
</div>
<span className="text-lg sm:text-4xl font-light text-gray-600 shrink-0 pb-4 sm:pb-6">:</span>
<div className="flex flex-col items-center justify-center bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-5 w-[22%] sm:w-28 shadow-[0_0_15px_rgba(139,195,74,0.15)] shrink-0 max-w-[100px]">
<span className="text-2xl sm:text-5xl font-semibold text-[#8BC34A] tracking-tight tabular-nums" id="cd-mins">39</span>
<span className="text-[10px] sm:text-sm font-medium text-white/80 uppercase tracking-widest mt-1">Min</span>
</div>
<span className="text-lg sm:text-4xl font-light text-gray-600 shrink-0 pb-4 sm:pb-6">:</span>
<div className="flex flex-col items-center justify-center bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-5 w-[22%] sm:w-28 shadow-[0_0_15px_rgba(139,195,74,0.15)] shrink-0 max-w-[100px]">
<span className="text-2xl sm:text-5xl font-semibold text-[#8BC34A] tracking-tight tabular-nums" id="cd-secs">29</span>
<span className="text-[10px] sm:text-sm font-medium text-white/80 uppercase tracking-widest mt-1">Seg</span>
</div>

</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 mb-2 z-10 w-full scroll-item scroll-fade-up delay-300">
<div className="flex items-center gap-2.5 group cursor-default">
<iconify-icon className="text-xl text-[#8BC34A] opacity-80 group-hover:opacity-100 transition-opacity duration-300" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xl sm:text-2xl font-normal text-white tracking-tight group-hover:text-gray-100 transition-colors duration-300">
            Valencia, <span className="font-extralight text-gray-400">Venezuela</span>
</span>
</div>
<div className="hidden sm:block w-[1px] h-6 bg-white/10"></div>
<div className="flex items-center gap-2.5 group cursor-default">
<iconify-icon className="text-xl text-[#8BC34A] opacity-80 group-hover:opacity-100 transition-opacity duration-300" icon="solar:calendar-linear"></iconify-icon>
<span className="sm:text-2xl group-hover:text-gray-300 transition-colors duration-300 text-xl text-gray-400 tracking-tight font-extralight"><span className="font-normal text-white">6</span> de junio 2026</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 mt-10 scroll-item scroll-fade-up delay-300">
<a className="group flex items-center justify-center transition-all hover:bg-[#9CCC65] hover:shadow-[0_0_30px_-5px_rgba(139,195,74,0.4)] text-base font-medium text-black bg-[#8BC34A] h-12 rounded-full px-8" href="#elige-tu-experiencia">Asegurar mi lugar →</a>
</div>
</div>

<section className="scroll-item scroll-fade-up sm:px-6 w-full max-w-6xl mt-1 mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 md:my-10 md:py-10 my-6 py-6">
<div className="bg-[#111111] border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_0_15px_rgba(139,195,74,0.15)] hover:shadow-[0_0_25px_rgba(139,195,74,0.25)] transition-shadow duration-300 flex flex-col justify-center">
<div className="md:text-5xl text-3xl font-semibold text-[#8BC34A] tracking-tight mb-1 md:mb-2">200+</div>
<div className="md:text-base text-xs sm:text-sm font-medium text-white/90">Estudiantes</div>
</div>
<div className="bg-[#111111] border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_0_15px_rgba(139,195,74,0.15)] hover:shadow-[0_0_25px_rgba(139,195,74,0.25)] transition-shadow duration-300 flex flex-col justify-center">
<div className="md:text-5xl text-3xl font-semibold text-[#8BC34A] tracking-tight mb-1 md:mb-2">8+</div>
<div className="md:text-base text-xs sm:text-sm font-medium text-white/90">Años de experiencia</div>
</div>
<div className="bg-[#111111] border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_0_15px_rgba(139,195,74,0.15)] hover:shadow-[0_0_25px_rgba(139,195,74,0.25)] transition-shadow duration-300 flex flex-col justify-center">
<div className="md:text-5xl text-3xl text-[#8BC34A] font-semibold tracking-tight mb-1 md:mb-2">7+</div>
<div className="md:text-base sm:text-sm text-xs font-medium text-white/90">Países</div>
</div>
<div className="bg-[#111111] border border-white/10 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-[0_0_15px_rgba(139,195,74,0.15)] hover:shadow-[0_0_25px_rgba(139,195,74,0.25)] transition-shadow duration-300 flex flex-col justify-center">
<div className="md:text-5xl text-3xl font-semibold text-[#8BC34A] tracking-tight mb-1 md:mb-2">100%</div>
<div className="md:text-base sm:text-sm leading-tight text-xs font-medium text-white/90">Presencial</div>
</div>
</div>
</section>

<section className="scroll-item scroll-fade-up w-full max-w-4xl z-10 my-10 mx-auto px-6 relative">
<div className="flex flex-col gap-6 md:gap-8 py-1">
<span className="md:text-sm uppercase text-xs font-medium text-[#8BC34A]/60 tracking-widest">
          Esto nadie te lo va a decir en la escuela
        </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-2">
          Llevas toda la vida <span className="text-[#8BC34A]">jugando un juego</span> cuyas reglas nunca te explicaron.
        </h2>
<div className="flex flex-col gap-8 text-lg md:text-xl text-gray-400 font-extralight leading-relaxed">
<p>Te enseñaron a estudiar. A trabajar duro. A ahorrar. A confiar en el sistema.</p>
<p>Y mientras tanto, <span className="text-gray-200 font-normal">la élite imprime dinero a voluntad</span>, devalúa el que tú tienes en el bolsillo, sube el costo de vida, y te obliga a trabajar más horas por cada vez menos poder adquisitivo.</p>
<p>No es un accidente. Es el diseño.</p>
<p>El dinero fiat que tú cambias por tu tiempo no vale lo mismo que valía hace diez años. Y no va a valer lo mismo mañana. Mientras tú intercambias <span className="text-gray-200 font-normal">tiempo de vida irrecuperable</span> por un número en una pantalla que ellos controlan, los mercados financieros operan las 24 horas moviendo billones y la mayoría de la gente ni siquiera sabe que eso existe.</p>
</div>
<div className="mt-6 border-l-[3px] border-[#8BC34A] bg-[#111111]/80 backdrop-blur-md p-6 md:p-8 rounded-r-2xl shadow-[0_0_20px_rgba(139,195,74,0.05)]">
<p className="text-lg md:text-xl italic text-[#8BC34A] font-light leading-relaxed">
            "Yo no te voy a vender el sueño. Te voy a enseñar la habilidad real que me sacó del sistema y me dio libertad. Eso es lo que traigo a este evento."
          </p>
</div>
</div>
</section>

<section className="scroll-item scroll-fade-up z-10 text-center w-full max-w-5xl my-10 mx-auto px-6 relative">
<div className="text-center mb-10">
<h2 className="md:text-6xl text-2xl font-normal text-white tracking-tighter mb-6">La vida cambia, solo cuando realmente decides cambiarla.</h2>
</div>
<div className="overflow-hidden group select-none aspect-[4/5] sm:aspect-[4/3] touch-none w-full max-w-3xl border-white/10 border rounded-[2rem] mx-auto relative shadow-[0_0_50px_rgba(0,0,0,0.5)]" id="compare-container">

<img alt="Después de la transformación" className="select-none pointer-events-none w-full h-full object-cover bg-center absolute inset-0" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cba9915-4f07-4076-9a3f-774b45285f7d_1600w.jpg"/>
<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-black/80 backdrop-blur-md border border-[#8BC34A]/30 text-[#8BC34A] text-xs font-medium tracking-widest uppercase py-2 px-5 rounded-full z-10 pointer-events-none shadow-[0_0_15px_rgba(139,195,74,0.15)]">
          Después
        </div>

<div className="absolute inset-0 z-20 pointer-events-none w-full h-full" id="compare-before" style={{clipPath: 'inset(0px 44.9219% 0px 0px)'}}>
<img alt="Antes de la transformación" className="select-none pointer-events-none w-full h-full object-cover bg-center absolute inset-0" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dec1aca2-f403-42a6-ad04-60f7ae029f03_1600w.jpg"/>
<div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-black/80 backdrop-blur-md border border-white/10 text-white/70 text-xs font-medium tracking-widest uppercase py-2 px-5 rounded-full pointer-events-none shadow-lg">
            Antes
          </div>
</div>

<div className="cursor-ew-resize flex -ml-[1px] z-40 bg-[#8BC34A]/60 w-[2px] absolute top-0 bottom-0 left-[50%] items-center justify-center" id="compare-slider" style={{left: '55.0781%'}}>
<div className="flex border-[3px] hover:scale-110 transition-transform duration-200 active:scale-95 text-black bg-[#8BC34A] w-12 h-12 border-[#7ab52e] rounded-full shadow-[0_0_20px_rgba(139,195,74,0.3)] items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-black text-xl -mr-1" icon="solar:alt-arrow-left-linear"></iconify-icon>
<iconify-icon className="text-black text-xl -ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<p className="text-sm text-[#8BC34A]/80 tracking-wide font-extralight text-center my-4">Arrastra el control para comparar</p>
<p className="text-xl text-slate-50/80 font-extralight text-center max-w-xl mx-auto my-4">La diferencia entre estas dos versiones fue una sola decisión. La misma que tú tienes frente a ti ahora mismo.</p>

</section>

<div className="text-center max-w-5xl my-10 mx-auto">
<h3 className="md:text-5xl leading-[1.1] text-3xl font-medium text-white tracking-tight w-full mb-6">La fórmula existe.<br/> Lo que falta eres <span className="text-[#8BC34A]">tú y este evento.</span></h3>
<section className="scroll-item scroll-fade-up w-full max-w-6xl mx-auto px-6" id="how-it-works">
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center mt-12">

<div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-[2px] bg-white/5 z-0 overflow-hidden rounded-full">
<div className="absolute top-0 h-full w-[120px] bg-gradient-to-r from-transparent via-[#7ab52e] to-transparent shadow-[0_0_15px_#7ab52e] rounded-full animate-[travel-horizontal_3s_ease-in-out_infinite]"></div>
</div>
<div className="md:hidden absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-[2px] bg-white/5 z-0 overflow-hidden rounded-full">
<div className="absolute left-0 w-full h-[120px] bg-gradient-to-b from-transparent via-[#7ab52e] to-transparent shadow-[0_0_15px_#7ab52e] rounded-full animate-[travel-vertical_3s_ease-in-out_infinite]"></div>
</div>

<div className="z-10 flex flex-col group relative items-center">
<div className="w-20 h-20 bg-[#111111] border border-[#8BC34A]/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(139,195,74,0.1)] group-hover:border-[#8BC34A]/60 group-hover:shadow-[0_0_25px_rgba(139,195,74,0.2)] transition-all duration-300">
<span className="text-2xl font-medium text-[#8BC34A]">1</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Identificar la oportunidad</h3>
<p className="leading-relaxed text-base text-gray-400 font-extralight px-4">Te enseño a leer el contexto del mercado como un profesional, sin indicadores mágicos ni señales de terceros.</p>
</div>

<div className="relative z-10 flex flex-col items-center group">
<div className="w-20 h-20 bg-[#111111] border border-[#8BC34A]/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(139,195,74,0.1)] group-hover:border-[#8BC34A]/60 group-hover:shadow-[0_0_25px_rgba(139,195,74,0.2)] transition-all duration-300">
<span className="text-2xl font-medium text-[#8BC34A]">2</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Ejecutar con precisión</h3>
<p className="leading-relaxed text-base text-gray-400 font-extralight px-4">Entradas calculadas, sin emociones. Sin adivinar. Con el método exacto que yo uso en mis operaciones reales.</p>
</div>

<div className="relative z-10 flex flex-col items-center group">
<div className="w-20 h-20 bg-[#111111] border border-[#8BC34A]/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(139,195,74,0.1)] group-hover:border-[#8BC34A]/60 group-hover:shadow-[0_0_25px_rgba(139,195,74,0.2)] transition-all duration-300">
<span className="text-2xl font-medium text-[#8BC34A]">3</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Escalar ganancias</h3>
<p className="leading-relaxed text-base text-gray-400 font-extralight px-4">Con el proceso dominado, escalar es cuestión de repetir. Más consistencia, más capital, más libertad.</p>
</div>
</div>
</section>
<p className="md:text-xl leading-relaxed text-lg text-gray-400 font-extralight mt-20 mb-10 px-4">Un día. Mi método completo. Las mismas bases mentales aplicadas al trading.</p>
<a className="group inline-flex items-center justify-center gap-3 hover:bg-[#9CCC65] transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,195,74,0.5)] hover:-translate-y-1 font-medium text-black bg-[#8BC34A] rounded-full py-4 px-8 shadow-[0_0_20px_rgba(139,195,74,0.3)]" href="#elige-tu-experiencia">
<span className="text-lg">Quiero aprender esta fórmula</span>
<iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<section className="scroll-item scroll-fade-up sm:px-6 w-full max-w-6xl my-1 mx-auto px-4">
<div className="overflow-hidden sm:p-10 md:p-16 bg-[#0a0a0a] border-white/5 border rounded-[2rem] p-6 relative shadow-2xl">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8BC34A]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="flex flex-col text-center z-10 mb-1 relative items-center">
<div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-black/40 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]"></div>
<span className="uppercase text-xs font-medium text-gray-400 tracking-widest">Resultados Reales</span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-3xl font-medium text-white tracking-tight mb-6">Ellos también vieron esta página.<br/> <span className="text-[#8BC34A]">Y tomaron la decisión de actuar</span></h2>
<p className="leading-relaxed md:text-xl text-lg text-gray-400 font-extralight max-w-full mx-auto">Personas como tú, sin experiencia previa, que decidieron apostar por sí mismas.</p>
</div>
<div className="flex items-center gap-4 mb-8 relative z-10">
<span className="uppercase text-xs font-medium text-[#8BC34A]/80 tracking-widest whitespace-nowrap">Reseñas de estudiantes</span>
<div className="h-[1px] w-full bg-white/10"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-[#8BC34A]/20 transition-colors duration-300">
<div className="">
<div className="flex gap-1 text-[#8BC34A] mb-6 items-center">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="md:text-lg leading-relaxed text-base italic text-gray-400 font-extralight mb-8">
                "Llevaba años buscando algo que realmente cambiara mi situación. <span className="not-italic font-normal text-[#8BC34A]">En dos días entendí más sobre el dinero que en toda mi vida.</span> Ojalá lo hubiera hecho antes."
              </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-12 h-12 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center flex-shrink-0">
<span className="font-medium text-[#8BC34A] tracking-tight">MR</span>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">Melanie R.</h4>
<p className="text-sm text-gray-500 font-extralight">Valencia, Venezuela</p>
</div>
</div>
</div>

<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-[#8BC34A]/20 transition-colors duration-300">
<div className="">
<div className="flex gap-1 text-[#8BC34A] mb-6 items-center">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<p className="md:text-lg leading-relaxed text-base italic text-gray-400 font-extralight mb-8">
                "El miedo que tenía a perder dinero desapareció cuando entendí cómo funciona la gestión de riesgo. <span className="not-italic font-normal text-[#8BC34A]">Entendí la estrategia para arriesgar un poco pero ganar mucho.</span>"
              </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-12 h-12 rounded-full bg-[#8BC34A]/10 border border-[#8BC34A]/30 flex items-center justify-center flex-shrink-0">
<span className="font-medium text-[#8BC34A] tracking-tight">JF</span>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">José F.</h4>
<p className="text-sm text-gray-500 font-extralight">Valencia, Venezuela</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 mt-16 border-t border-white/10 relative z-10">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold text-[#8BC34A] tracking-tight mb-2">200+</div>
<div className="text-sm md:text-base font-medium text-gray-400">Estudiantes formados</div>
</div>
<div className="text-center">
<div className="md:text-5xl text-4xl font-semibold text-[#8BC34A] tracking-tight mb-2">8+</div>
<div className="text-sm md:text-base font-medium text-gray-400">Años de experiencia</div>
</div>
<div className="text-center">
<div className="md:text-6xl text-4xl font-semibold text-[#8BC34A] tracking-tight h-14">∞</div>
<div className="md:text-base text-sm font-medium text-gray-400">Habilidad de por vida</div>
</div>
</div>
</div>
</section>

<div className="border-y overflow-hidden flex bg-[#0a0a0a]/80 w-full border-[#8BC34A]/20 my-10 py-5 relative backdrop-blur-md">
<div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-scroll-x whitespace-nowrap items-center w-max">

<div className="flex gap-12 sm:gap-16 sm:px-8 px-6 items-center">
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Candy M. — "Gané +$650 en 1 semana sin tener experiencia previa"</span>
<div className="w-1.5 h-1.5 bg-[#8BC34A]/60 rounded-full shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Julio F — "Aprender a hacer Trading me cambió la vida"</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Carlos M. — "Primera semana operando: +$840"</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Daniela R. — "Nunca había invertido. Ahora opero todos los días."</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Andrés P. — "+$2,300 en el primer mes aplicando el método"</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
</div>

<div className="flex gap-12 sm:gap-16 sm:px-8 px-6 items-center">
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Candy M. — "Gané +$650 en 1 semana sin tener experiencia previa"</span>
<div className="w-1.5 h-1.5 bg-[#8BC34A]/60 rounded-full shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Julio F — "Aprender a hacer Trading me cambió la vida"</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Carlos M. — "Primera semana operando: +$840"</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Daniela R. — "Nunca había invertido. Ahora opero todos los días."</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
<span className="sm:text-xl text-lg font-medium text-gray-400 tracking-tight">Andrés P. — "+$2,300 en el primer mes aplicando el método"</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#8BC34A]/60 shadow-[0_0_8px_rgba(139,195,74,0.6)]"></div>
</div>
</div>
</div>

<div className="scroll-item scroll-fade-up w-full max-w-5xl mx-auto px-6 sm:mt-1">
<p className="uppercase text-sm font-medium text-gray-500 tracking-widest text-center mb-8">Lo que vas a dominar</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-10 w-full max-w-4xl mx-auto">
<div className="flex items-center gap-4 group">
<iconify-icon className="text-4xl sm:text-3xl text-[#8BC34A] group-hover:scale-110 transition-transform duration-300 shrink-0" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-lg sm:text-xl font-medium text-white/80 tracking-tight leading-tight group-hover:text-white transition-colors duration-300">Cómo ganar dinero haciendo Trading</span>
</div>
<div className="flex items-center gap-4 group">
<iconify-icon className="text-4xl sm:text-3xl text-[#8BC34A] group-hover:scale-110 transition-transform duration-300 shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-lg sm:text-xl font-medium text-white/80 tracking-tight leading-tight group-hover:text-white transition-colors duration-300">El momento correcto para entrar al mercado</span>
</div>
<div className="flex items-center gap-4 group">
<iconify-icon className="text-4xl sm:text-3xl text-[#8BC34A] group-hover:scale-110 transition-transform duration-300 shrink-0" icon="solar:shield-check-linear"></iconify-icon>
<span className="sm:text-xl leading-tight group-hover:text-white transition-colors duration-300 text-lg font-medium text-white/80 tracking-tight">Arriesgar poco para ganar mucho</span>
</div>
<div className="flex items-center gap-4 group">
<iconify-icon className="text-4xl sm:text-3xl text-[#8BC34A] group-hover:scale-110 transition-transform duration-300 shrink-0" icon="solar:monitor-linear"></iconify-icon>
<span className="text-lg sm:text-xl font-medium text-white/80 tracking-tight leading-tight group-hover:text-white transition-colors duration-300">Una estrategia rentable a largo plazo</span>
</div>
</div>
</div>

<section className="scroll-item scroll-fade-up sm:px-6 w-full max-w-7xl mt-20 mb-20 mx-auto px-4 relative" id="elige-tu-experiencia">
<div className="flex flex-col z-10 mt-5 mb-16 relative items-center justify-center">
<h2 className="md:text-7xl uppercase leading-[0.95] text-5xl font-semibold text-white tracking-tighter text-center">
          ELIGE TU<br/>
<span className="text-[#8BC34A] py-2 drop-shadow-[0_0_25px_rgba(158,255,0,0.2)]">EXPERIENCIA</span>
</h2>
<p className="leading-relaxed md:text-xl text-sm text-gray-400 font-extralight text-center max-w-2xl mt-2 mb-1">Una inversión. Una habilidad. Una vida diferente. </p>
<div className="inline-flex items-center gap-2 uppercase text-xs font-medium text-[#dca54a] tracking-widest border-[#dca54a]/30 border rounded-full py-2 px-5 shadow-[0_0_15px_rgba(220,165,74,0.05)] mt-4">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon>
          CUPOS EXTREMADAMENTE LIMITADOS
        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 z-10 relative items-stretch">

<div className="flex flex-col transition-all duration-300 hover:border-white/10 hover:shadow-xl bg-[#0c0c0c] h-full border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<span className="uppercase text-xs font-medium text-[#8BC34A]/80 tracking-widest mb-2">Nivel de Acceso</span>
<h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase mb-2">Esencial</h3>
<p className="text-sm text-gray-500 font-extralight mb-6">Valencia, Venezuela · Sábado 6 de Junio 2026</p>
<div className="mb-8">
<div className="text-6xl font-semibold text-[#8BC34A] tracking-tighter mb-2">$497</div>
<div className="text-sm text-gray-500 font-extralight">La alternativa más accesible</div>
</div>
<div className="h-px w-full bg-white/5 mb-8"></div>
<ul className="flex flex-col gap-6 mb-10 flex-grow">
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/10 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="text-white font-medium">Acceso completo al evento presencial</span> — un día de inmersión total en trading</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/10 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="text-white font-medium">Grabación del evento por 30 días</span> — revisa el contenido a tu propio ritmo</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/10 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="font-medium text-white">Coffee break</span> para continuar la jornada con energía</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/10 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="text-white font-medium">Kit del evento exclusivo</span> — bloc de notas, vaso y set de escritura de edición limitada</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/10 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="font-medium text-white">Material educativo digital</span> — recursos, guías y referencias para continuar tu formación</p>
</li>
</ul>
<div className="mt-auto">
<a className="flex justify-center hover:bg-[#9eff00]/10 transition-colors uppercase text-sm font-medium text-[#8BC34A] tracking-widest w-full border-[#9eff00]/30 border rounded-full mb-4 pt-4 pb-4" href="https://www.siempreinvertir.com/offers/SeQPMy2z/checkout">Asegurar Mi Acceso</a>
<div className="flex items-center justify-center gap-2">
<span className="bg-[#ffb3c7] text-black text-xs font-semibold px-2 py-0.5 rounded-sm tracking-tight">Klarna.</span>
<span className="text-xs text-gray-500 font-extralight">Financiamiento disponible</span>
</div>
</div>
</div>

<div className="bg-[#0c0c0c] border border-[#9eff00]/40 rounded-3xl p-8 flex flex-col relative transition-all duration-300 shadow-[0_0_30px_rgba(158,255,0,0.08)] lg:scale-105 h-full z-20 bg-gradient-to-b from-[#0c0c0c] to-[#0c0c0c]/90">
<div className="-top-4 -translate-x-1/2 uppercase flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold text-black tracking-widest bg-[#8BC34A] rounded-full px-4 py-1.5 absolute left-1/2 shadow-[0_0_20px_rgba(158,255,0,0.3)]">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon>
            Más Popular
          </div>
<span className="uppercase text-xs font-medium text-[#8BC34A]/80 tracking-widest mt-2 mb-2">Acceso Recomendado</span>
<h3 className="md:text-4xl uppercase text-3xl font-semibold text-[#8BC34A] tracking-tight mb-2">Master</h3>
<p className="text-sm text-gray-500 font-extralight mb-6">Valencia, Venezuela · Sábado 6 de Junio 2026</p>
<div className="mb-8">
<div className="text-6xl font-semibold text-[#8BC34A] tracking-tighter mb-2">$597</div>
<div className="text-sm text-gray-500 font-extralight">El mayor retorno de inversión</div>
</div>
<div className="h-px w-full bg-white/5 mb-8"></div>
<ul className="flex flex-col gap-6 mb-10 flex-grow">
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/20 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base font-medium text-[#8BC34A]">Todo lo incluido en Esencial</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/20 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="text-white font-medium">Grabación extendida por 12 meses</span> — acceso completo durante un año para dominar el método a profundidad</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/20 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="font-medium text-[#8BC34A]">4 sesiones de Trading en Vivo </span> — una sesión semanal durante el mes posterior al evento para aplicar el método con acompañamiento real</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#9eff00]/20 p-1 text-[#9eff00] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="text-white font-medium">Acceso prioritario</span> — primeras filas garantizadas y atención preferencial durante el evento</p>
</li>
</ul>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 hover:bg-[#b0ff33] transition-all hover:scale-[1.02] uppercase group text-sm font-semibold text-black tracking-widest bg-[#8BC34A] w-full rounded-full mb-4 pt-4 pb-4 shadow-[0_0_20px_rgba(158,255,0,0.15)]" href="https://www.siempreinvertir.com/offers/GwwxTnF6/checkout">
              Quiero Este Acceso
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center justify-center gap-2">
<span className="bg-[#ffb3c7] text-black text-xs font-semibold px-2 py-0.5 rounded-sm tracking-tight">Klarna.</span>
<span className="text-xs text-gray-500 font-extralight">Financiamiento disponible</span>
</div>
</div>
</div>

<div className="flex flex-col transition-all duration-300 hover:border-[#dca54a]/40 bg-[#0c0c0c] h-full border-[#dca54a]/20 border rounded-3xl p-8 relative">
<span className="text-xs font-medium text-[#dca54a]/80 tracking-widest uppercase mb-2">Acceso Exclusivo</span>
<h3 className="md:text-4xl uppercase text-3xl font-semibold text-[#dca54a] tracking-tight mb-2">VIP </h3>
<p className="text-sm text-gray-500 font-extralight mb-6">Valencia, Venezuela · Sábado 6 de Junio 2026</p>
<div className="mb-8">
<div className="text-6xl font-semibold text-[#dca54a] tracking-tighter mb-2">$997</div>
<div className="text-sm text-gray-500 font-extralight">Para quienes van en serio desde el primer día</div>
</div>
<div className="h-px w-full bg-white/5 mb-8"></div>
<ul className="flex flex-col gap-6 flex-grow mb-10">
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#dca54a]/10 p-1 text-[#dca54a] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base font-medium text-[#dca54a]">Todo lo incluido en Master</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#dca54a]/10 p-1 text-[#dca54a] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="font-medium text-white">Almuerzo y Cena VIP privada </span> — Una conversación que ninguna grabación puede capturar</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#dca54a]/10 p-1 text-[#dca54a] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="font-medium text-white">Experiencia VIP desde el primer momento</span> — zona exclusiva, atención personalizada y Q&amp;A privado con Hector</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-0.5 rounded-full bg-[#dca54a]/10 p-1 text-[#dca54a] shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="leading-relaxed text-base text-gray-400 font-extralight"><span className="font-medium text-[#dca54a]">Solo cinco espacios limitados</span> — este nivel existe para garantizar una experiencia que no se diluye</p>
</li>
</ul>
<div className="mt-auto">
<a className="flex justify-center hover:bg-[#eec167] transition-colors uppercase text-sm font-semibold text-black tracking-widest bg-[#dca54a] w-full rounded-full mb-4 pt-4 pb-4" href="https://www.siempreinvertir.com/offers/qrDDoEt4">Quiero la Experiencia VIP</a>
<div className="flex items-center justify-center gap-2">
<span className="bg-[#ffb3c7] text-black text-xs font-semibold px-2 py-0.5 rounded-sm tracking-tight">Klarna.</span>
<span className="text-xs text-gray-500 font-extralight">Financiamiento disponible</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col z-10 mt-20 relative items-center justify-center">
<p className="leading-relaxed text-sm text-gray-500 font-extralight text-center mx-auto mb-4">PLAN DE PAGO DISPONIBLE</p>
<div className="inline-flex items-center gap-2 bg-[#8BC34A]/5 border-[#9eff00]/20 border rounded-full mb-6 py-2.5 px-6">
<iconify-icon className="text-base text-[#9eff00]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-sm font-medium text-[#8BC34A] tracking-wide">100% garantía de satisfacción</span>
</div>
</div>
</section>

<section className="scroll-item scroll-fade-up z-10 w-full max-w-4xl mx-auto px-6 mb-10 relative">
<div className="flex flex-col text-center items-center justify-center">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">¿Necesitas ayuda?</h2>
<p className="md:text-xl leading-relaxed text-lg text-gray-400 font-extralight max-w-2xl mx-auto mb-10">Para otros métodos de pago o consultas, escríbenos. Uno de nuestros representantes te atenderá a la brevedad.</p>
<a className="group inline-flex items-center justify-center gap-3 hover:bg-[#22c55e] sm:px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] text-lg font-medium text-white bg-[#25D366] rounded-full py-4 px-8 shadow-[0_0_30px_rgba(37,211,102,0.15)]" href="https://wa.me/50764071225?text=Hola%2C%20mi%20nombre%20es%20______%20y%20estoy%20interesado%20en%20asistir%20al%20evento%20de%20Hector%20Zavala%20en%20Valencia.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20_________." target="_blank">
          Escribir por WhatsApp
        </a>
</div>
</section>

<section className="scroll-item scroll-fade-up w-full max-w-6xl mt-20 mx-auto px-6" id="mentor">
<div className="md:p-16 overflow-hidden bg-[#0a0a0a] border-white/10 border rounded-[2.5rem] p-8 relative shadow-2xl">
<div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#8BC34A]/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#8BC34A]/5 rounded-full blur-[100px] pointer-events-none"></div>
<h2 className="md:text-5xl text-4xl font-normal text-white text-center tracking-tight mb-12 relative z-10">Conoce a tu <span className="font-medium text-[#8BC34A]">Mentor</span></h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-stretch">
<div className="aspect-[4/5] lg:aspect-auto lg:min-h-[600px] hover:border-[#8BC34A]/40 transition-colors duration-500 overflow-hidden flex flex-col group bg-[#0c0c0c] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/108b6014-5414-4a87-8ab9-90c21ca94783_1600w.png)] bg-cover bg-center border-[#8BC34A]/20 border rounded-3xl relative shadow-[inset_0_0_40px_rgba(139,195,74,0.03)] items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/80 pointer-events-none"></div>
<div className="md:bottom-8 md:left-8 inline-flex gap-3 z-20 bg-black/20 border-white/10 border rounded-full py-3 px-5 absolute bottom-6 left-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md items-center">
<span className="md:text-sm text-xs font-medium text-[#8BC34A] tracking-tight">Fundador de Siempre Invertir</span>
</div>
</div>
<div className="flex flex-col justify-center">
<h3 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-2">Hector <span className="font-medium bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 to-white/0 xl:text-[#ffffff]">Zavala</span></h3>
<p className="md:text-base text-sm font-medium text-[#8BC34A] mb-8">Trading Expert &amp; Mentor</p>
<div className="flex flex-wrap gap-2 mb-8">
<div className="inline-flex text-xs font-medium text-[#8BC34A]/80 tracking-wide bg-[#8BC34A]/5 border-[#8BC34A]/20 border rounded-full py-1.5 px-4 items-center">9 años en mercados financieros</div>
<div className="inline-flex text-xs font-medium text-[#8BC34A]/80 tracking-wide bg-[#8BC34A]/5 border-[#8BC34A]/20 border rounded-full py-1.5 px-4 items-center">200+ estudiantes formados</div>
</div>
<div className="flex flex-col gap-6 text-base md:text-lg text-gray-400 font-extralight leading-relaxed mb-10">
<p className="">Llevo desde 2017 operando los mercados financieros y opero en vivo junto a mi comunidad y estudiantes VIP.</p>
<p className="">En 2021 empecé a enseñar. Ese mismo año, en una sesión en vivo en mi canal de YouTube, tomé $4,000 de capital propio y en menos de 90 días los convertí en más de $300,000 en ganancias frente a una audiencia real. He sido invitado como conferencista en Towerbank International Inc. en Panamá. Tengo estudiantes en mas de 7 países y una comunidad activa que opera con mi método.</p>
<p className="">Uno de mis estudiantes generó más de $10,000 en una sola semana, seis meses después de comenzar uno de mis programas. <span className="font-normal text-[#8BC34A]">No enseño desde un libro. Enseño desde la pantalla encendida, con el mercado abierto y el capital en riesgo.</span></p>
</div>
<a className="group inline-flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,195,74,0.3)] transition-all duration-300 uppercase hover:bg-[#9CCC65] whitespace-nowrap self-center mx-auto sm:mx-0 sm:self-start sm:text-sm py-2.5 px-6 sm:py-3 sm:px-8 text-xs font-medium text-black bg-[#8BC34A] w-max rounded-full" href="#elige-tu-experiencia">
              Quiero aprender el método
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="scroll-item scroll-fade-up w-full max-w-3xl mt-20 mx-auto px-6" id="faq">
<div className="text-center mb-12">
<h2 className="md:text-4xl text-3xl font-normal text-[#ffffff] tracking-tight mb-4">Preguntas frecuentes</h2>
</div>
<div className="space-y-4">
<details className="bg-[#0a0a0a] border border-white/10 rounded-2xl group overflow-hidden transition-all duration-300 open:bg-[#111]">
<summary className="flex cursor-pointer select-none text-xl font-normal tracking-tight p-6 items-center justify-between">
<span className="pr-4">¿Necesito experiencia previa en trading para asistir?</span>
<iconify-icon className="text-2xl text-[#8BC34A] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="leading-relaxed text-base text-gray-400 font-extralight border-white/5 border-t p-6 mt-2">No. El evento está diseñado tanto para principiantes que empiezan desde cero como para traders con experiencia que quieren llevar su operativa al siguiente nivel. </div>
</details>
<details className="bg-[#0a0a0a] border border-white/10 rounded-2xl group overflow-hidden transition-all duration-300 open:bg-[#111]">
<summary className="flex cursor-pointer select-none text-xl font-normal tracking-tight pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="pr-4">¿Dónde se realizará el evento presencial?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0 text-2xl text-[#8BC34A]" height="24" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(139, 195, 74)'}} width="24"></iconify-icon>
</summary>
<div className="leading-relaxed text-base text-gray-400 font-extralight border-white/5 border-t p-6 mt-2">El evento se realizará en Valencia, Venezuela. La ubicación exacta del lugar será enviada a todos los participantes confirmados una semana antes de la fecha del evento.</div>
</details>
<details className="bg-[#0a0a0a] border border-white/10 rounded-2xl group overflow-hidden transition-all duration-300 open:bg-[#111]">
<summary className="flex cursor-pointer select-none text-xl font-normal tracking-tight p-6 items-center justify-between">
<span className="pr-4">¿Qué métodos de pago aceptan?</span>
<iconify-icon className="text-2xl text-[#8BC34A] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="leading-relaxed text-base text-gray-400 font-extralight border-white/5 border-t p-6 mt-2">Aceptamos pago en bolívares, zelle, efectivo, USDT, y contamos con plan de pago disponible. Para coordinar tu método de pago o resolver cualquier duda, escríbenos directamente por WhatsApp al +50764071225 y uno de nuestros representantes te atenderá.</div>
</details>
<details className="bg-[#0a0a0a] border border-white/10 rounded-2xl group overflow-hidden transition-all duration-300 open:bg-[#111]">
<summary className="flex cursor-pointer select-none text-xl font-normal tracking-tight p-6 items-center justify-between">
<span className="pr-4">¿Qué debo llevar al evento?</span>
<iconify-icon className="text-2xl text-[#8BC34A] transition-transform duration-300 group-open:rotate-180 flex-shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="leading-relaxed text-base text-gray-400 font-extralight border-white/5 border-t p-6 mt-2">Solo necesitas traer tu laptop y disposición para aprender. Nosotros nos encargamos del resto.</div>
</details>
</div>
</section>

<section className="scroll-item scroll-fade-up w-full max-w-6xl mt-20 mb-20 mx-auto px-6">
<div className="md:py-24 md:px-12 flex flex-col overflow-hidden text-center bg-transparent border border-white/10 rounded-[2.5rem] p-16 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-[#8BC34A]/5 to-transparent pointer-events-none"></div>
<h2 className="md:text-5xl text-3xl font-normal text-white tracking-tight max-w-4xl z-10 mb-6 relative">¿Y si tu potencial fuera ilimitado?</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 relative z-10">
<a className="w-auto hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,195,74,0.3)] transition-all inline-flex items-center justify-center gap-2 group text-sm sm:text-base font-medium text-black bg-[#8BC34A] rounded-full py-3 px-6 sm:py-4 sm:px-8 whitespace-nowrap" href="#elige-tu-experiencia">
            Asegurar mi lugar
            <iconify-icon className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/5 hover:border-white/20 transition-colors flex items-center justify-center gap-2" href="https://wa.me/50764071225?text=Hola%2C%20mi%20nombre%20es%20______%20y%20estoy%20interesado%20en%20asistir%20al%20evento%20de%20Hector%20Zavala%20en%20Valencia.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20_________." target="_blank">
            WhatsApp
          </a>
</div>
<p className="text-sm text-gray-500 tracking-wide font-extralight z-10 relative">6 de junio 2026 • Valencia, Venezuela</p>
</div>
</section>
</main>

<footer className="z-10 bg-[#050505] w-full border-white/10 border-t pt-20 px-6 pb-10 relative" role="contentinfo">
<div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 font-extralight">
<p>© 2026 Siempre Invertir, LLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="https://www.siempreinvertir.com/politica-de-privacidad">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="https://www.siempreinvertir.com/terminos-y-condiciones">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
