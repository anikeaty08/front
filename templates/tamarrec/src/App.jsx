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



      (function(){
        var stage=document.getElementById('cinema-stage');
        if(!stage)return;
        var slides=Array.prototype.slice.call(stage.querySelectorAll('.cinema-slide'));
        var n=slides.length;
        var active=Math.floor(n/2);
        var dotsWrap=document.getElementById('cinema-dots');
        dotsWrap.innerHTML='';
        var dots=[];
        for(var i=0;i<n;i++){
          (function(i){
            var b=document.createElement('button');
            b.type='button';
            b.setAttribute('aria-label','Ir al testimonio '+(i+1));
            b.className='h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4';
            b.addEventListener('click',function(){active=i;render();});
            dotsWrap.appendChild(b);
            dots.push(b);
          })(i);
        }
        function render(){
          slides.forEach(function(el,i){
            var offset=i-active;
            if(offset > Math.floor(n/2)) offset -= n;
            if(offset < -Math.floor(n/2)) offset += n;
            var abs=Math.abs(offset);
            var sign=offset<0?-1:1;
            var translateX=offset*38;
            var translateZ=-abs*160;
            var rotateY=offset===0?0:-sign*22;
            var scale=offset===0?1:Math.max(0.78,1-abs*0.08);
            var opacity=abs>2?0:(offset===0?1:0.55-abs*0.1);
            var blur=offset===0?0:Math.min(6,abs*2.2);
            var z=100-abs;
            el.style.transition='transform 800ms cubic-bezier(0.22,1,0.36,1), opacity 700ms ease, filter 700ms ease';
            el.style.transform='translate(-50%,-50%) translateX('+translateX+'%) translateZ('+translateZ+'px) rotateY('+rotateY+'deg) scale('+scale+')';
            el.style.opacity=opacity;
            el.style.filter='blur('+blur+'px)';
            el.style.zIndex=z;
            el.style.pointerEvents=offset===0?'auto':'none';
            el.style.cursor=offset===0?'grab':'pointer';
            if(offset!==0){el.onclick=function(){active=i;render();};}else{el.onclick=null;}
          });
          dots.forEach(function(d,i){d.className=(i===active)?'h-1.5 rounded-full transition-all duration-500 bg-[#5C1625] w-8':'h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4';});
        }
        function go(dir){
          active = (active + dir + n) % n;
          render();
        }
        document.getElementById('cinema-prev').addEventListener('click',function(){go(-1);});
        document.getElementById('cinema-next').addEventListener('click',function(){go(1);});
        var startX=null,deltaX=0,dragging=false;
        function onDown(e){dragging=true;startX=(e.touches?e.touches[0].clientX:e.clientX);deltaX=0;stage.style.cursor='grabbing';}
        function onMove(e){if(!dragging)return;var x=(e.touches?e.touches[0].clientX:e.clientX);deltaX=x-startX;}
        function onUp(){
          if(!dragging)return;
          dragging=false;
          stage.style.cursor='';
          if(Math.abs(deltaX)>50){go(deltaX<0?1:-1);}
          deltaX=0;
        }
        stage.addEventListener('mousedown',onDown);window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp);
        stage.addEventListener('touchstart',onDown,{passive:true});stage.addEventListener('touchmove',onMove,{passive:true});stage.addEventListener('touchend',onUp);
        document.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1);});
        render();
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
      

<nav className="fixed z-50 bg-[#FAF8F2]/80 w-full border-zinc-200/50 border-b top-0 backdrop-blur-md">
<div className="flex max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-xs tracking-[0.25em] font-medium uppercase text-zinc-800">
          Método R.E.C.
        </span>
<div className="hidden md:flex items-center gap-8 text-xs tracking-widest font-medium uppercase text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#metodo">
            Método
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#testimonios">
            Testimonios
          </a>
<a className="hover:text-zinc-900 transition-colors" href="#contacto">
            WhatsApp
          </a>
</div>
<a className="inline-flex items-center gap-2 hover:shadow-[0_12px_32px_-10px_rgba(92,22,37,0.7)] hover:-translate-y-0.5 transition-all duration-300 text-xs font-medium text-white tracking-wide bg-gradient-to-br from-[#7A1A2E] to-[#3D101A] ring-white/10 ring-1 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_24px_-10px_rgba(92,22,37,0.5)]" href="https://wa.me/595991755871?text=Hola%2C%20quiero%20contar%20mi%20situaci%C3%B3n%20y%20ver%20si%20pueden%20ayudarme." rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="14"></iconify-icon>
          Contanos tu situación
        </a>
</div>
</nav>

<section className="md:min-h-screen md:pt-52 md:pb-32 overflow-hidden pt-32 pr-6 pb-12 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="max-w-4xl">
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-balance text-5xl font-medium text-zinc-900 tracking-tighter font-editorial mb-8">
            Recuperá la conexión con tu pareja en
            <span className="font-normal italic" style={{color: '#4A0F1E'}}>
              21 días sin rogar ni sostener la relación sola.
            </span>
</h1>
<p className="md:text-xl leading-relaxed text-balance text-lg font-light text-zinc-600 max-w-2xl mt-8">
            A través de mi método R.E.C., te ayudamos a identificar qué está
            generando la distancia y reconstruir la conexión para que sea más
            sana y estable.
          </p>
<div className="flex flex-col gap-4 mt-12 gap-x-4 gap-y-4 items-start">
<a className="group relative inline-flex items-center justify-center bg-gradient-to-br from-[#7A1A2E] via-[#5C1625] to-[#3D101A] text-[#F7F6F3] px-10 py-5 rounded-full text-sm font-medium tracking-wide overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(92,22,37,0.6)] hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(92,22,37,0.45)] ring-1 ring-white/10" href="https://wa.me/595991755871?text=Hola%2C%20quiero%20contar%20mi%20situaci%C3%B3n%20y%20ver%20si%20pueden%20ayudarme." rel="noopener noreferrer" target="_blank">
<span className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></span>
<span className="z-10 flex items-center gap-3 relative">
<iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Hablemos por WhatsApp
              </span>
</a>
<span className="text-xs font-light text-zinc-500 tracking-wide">
              Contanos tu situación y veamos cómo podemos ayudarte.
            </span>
</div>
</div>

</div>
</section>


<section className="pt-4 md:pt-24 pb-8 md:pb-12 px-2 md:px-6" id="testimonios">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-10 md:mb-14">
<h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl tracking-tight text-zinc-900 font-medium">
            Testimonios de clientes
          </h2>
</div>
<div className="relative h-[78vw] max-h-[560px] md:h-[660px] md:max-h-none w-full select-none" id="cinema-stage" style={{perspective: '1600px', transformStyle: 'preserve-3d'}}>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="WhatsApp Gratitude Message Screenshot" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1234199-cdd0-471f-afbd-866d4bc2f89d_800w.png"/>
</div>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="Spanish Messaging App Screenshot" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/480c9f91-217b-4f13-9bfd-e2bc20fede6a_800w.png"/>
</div>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="Spanish Testimonial Message Bubble" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c43b26f-18d1-4061-b5c8-d75d990015e4_800w.png"/>
</div>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="WhatsApp Chat Screenshot with Flower Bouquet" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb161728-acd9-4857-b7f3-6c53030659a5_800w.png"/>
</div>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="Spanish Messaging App Interface Screenshot" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/064f258a-738c-4289-9d7f-5cdee31f266d_800w.png"/>
</div>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="WhatsApp Chat Screenshot with Romantic Message" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db7b733d-5891-4421-ae68-255e80431f2d_800w.png"/>
</div>
<div className="cinema-slide absolute top-1/2 left-1/2" style={{transform: 'translate(-50%,-50%)'}}>
<img alt="WhatsApp Chat Screenshot in Spanish" className="block max-h-[78vw] md:max-h-[660px] w-auto h-auto rounded-[28px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bffc1d93-2887-48ed-97bd-736d547ce2bc_800w.png"/>
</div>
</div>
<div className="flex items-center justify-center gap-6 mt-6">
<button aria-label="Anterior" className="w-11 h-11 rounded-full ring-1 ring-zinc-300 bg-white/60 backdrop-blur-sm hover:bg-white hover:ring-[#5C1625]/40 transition-all flex items-center justify-center text-zinc-700 hover:text-[#5C1625]" id="cinema-prev" type="button">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="flex items-center gap-2" id="cinema-dots">
<button aria-label="Ir al testimonio 1" className="h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4" type="button"></button>
<button aria-label="Ir al testimonio 2" className="h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4" type="button"></button>
<button aria-label="Ir al testimonio 3" className="h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4" type="button"></button>
<button aria-label="Ir al testimonio 4" className="h-1.5 rounded-full transition-all duration-500 bg-[#5C1625] w-8" type="button"></button>
<button aria-label="Ir al testimonio 5" className="h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4" type="button"></button>
<button aria-label="Ir al testimonio 6" className="h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4" type="button"></button>
<button aria-label="Ir al testimonio 7" className="h-1.5 rounded-full transition-all duration-500 bg-zinc-300 hover:bg-zinc-500 w-4" type="button"></button>
</div>
<button aria-label="Siguiente" className="w-11 h-11 rounded-full ring-1 ring-zinc-300 bg-white/60 backdrop-blur-sm hover:bg-white hover:ring-[#5C1625]/40 transition-all flex items-center justify-center text-zinc-700 hover:text-[#5C1625]" id="cinema-next" type="button">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</section>
<section className="py-24 md:py-40 px-6">
<div className="flex flex-col max-w-6xl mr-auto ml-auto gap-x-16 gap-y-12 lg:flex-row lg:gap-32">
<div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
<span className="uppercase block text-xs font-medium text-[#5C1625] tracking-[0.2em] mb-4">
            Esto es para vos si...
          </span>
<h2 className="md:text-5xl leading-tight text-4xl font-medium text-zinc-900 tracking-tight font-editorial">
            La
            <span className="bg-gradient-to-r from-zinc-900 to-[#5C1625] bg-clip-text text-transparent">
              distancia emocional
            </span>
            ya se siente, aunque todavía estén juntos.
          </h2>
<p className="md:text-base leading-relaxed text-sm font-light text-zinc-500 mt-4">
            Reconocer el patrón te permite dejar de reaccionar desde el miedo y
            empezar a construir claridad.
          </p>
</div>
<div className="lg:w-2/3">
<ul className="flex flex-col">
<li className="py-8 border-b border-zinc-200 group flex items-start gap-6">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-[#5C1625] transition-colors mt-1 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg md:text-xl font-light text-zinc-800 tracking-tight">
                Sentís que tu pareja está distante.
              </span>
</li>
<li className="py-8 border-b border-zinc-200 group flex items-start gap-6">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-[#5C1625] transition-colors mt-1 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg md:text-xl font-light text-zinc-800 tracking-tight">
                Cada conversación termina peor.
              </span>
</li>
<li className="py-8 border-b border-zinc-200 group flex items-start gap-6">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-[#5C1625] transition-colors mt-1 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg md:text-xl font-light text-zinc-800 tracking-tight">
                Te da miedo perder la relación.
              </span>
</li>
<li className="py-8 border-b border-zinc-200 group flex items-start gap-6">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-[#5C1625] transition-colors mt-1 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg md:text-xl font-light text-zinc-800 tracking-tight">
                Sentís ansiedad constante.
              </span>
</li>
<li className="py-8 border-b border-zinc-200 group flex items-start gap-6">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-[#5C1625] transition-colors mt-1 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg md:text-xl font-light text-zinc-800 tracking-tight">
                No querés seguir intentando cosas al azar.
              </span>
</li>
</ul>
</div>
</div>
</section>


<section className="md:pb-32 text-zinc-100 bg-[#14080A] pt-32 pr-6 pb-32 pl-6" id="metodo">
<div className="max-w-6xl mr-auto ml-auto">
<div className="md:mb-32 text-center mb-24">
<h2 className="md:text-5xl lg:text-6xl text-4xl font-medium tracking-tight font-editorial mb-6">
            El Método R.E.C.
          </h2>
<p className="md:text-base text-sm font-light text-zinc-400 max-w-xl mr-auto ml-auto">
            Un proceso estructurado de 60 días para desescalar el conflicto,
            recuperar claridad emocional y reconstruir cercanía paso a paso.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-y-32 gap-x-12 gap-y-20">

<div className="relative group">
<div className="font-editorial text-6xl md:text-8xl text-zinc-800/50 absolute -top-10 -left-6 z-0 select-none transition-colors duration-500 group-hover:text-[#5C1625]/30">
              01
            </div>
<div className="relative z-10 pl-6 border-l border-zinc-800">
<h3 className="font-editorial text-2xl md:text-3xl tracking-tight mb-4 text-white">
                Claridad del vínculo
              </h3>
<p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Entendés qué está pasando realmente debajo de la superficie y
                reconocés los patrones que sostienen la distancia.
              </p>
</div>
</div>

<div className="relative group">
<div className="font-editorial text-6xl md:text-8xl text-zinc-800/50 absolute -top-10 -left-6 z-0 select-none transition-colors duration-500 group-hover:text-[#5C1625]/30">
              02
            </div>
<div className="relative z-10 pl-6 border-l border-zinc-800">
<h3 className="font-editorial text-2xl md:text-3xl tracking-tight mb-4 text-white">
                Cambio de dinámica
              </h3>
<p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Dejás de actuar desde la desesperación y empezás a responder con
                límites, calma y dirección.
              </p>
</div>
</div>

<div className="relative group">
<div className="font-editorial text-6xl md:text-8xl text-zinc-800/50 absolute -top-10 -left-6 z-0 select-none transition-colors duration-500 group-hover:text-[#5C1625]/30">
              03
            </div>
<div className="relative z-10 pl-6 border-l border-zinc-800">
<h3 className="font-editorial text-2xl md:text-3xl tracking-tight mb-4 text-white">
                Reconexión
              </h3>
<p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Generás nuevas interacciones que reactivan el vínculo desde una
                comunicación más segura y menos defensiva.
              </p>
</div>
</div>

<div className="relative group">
<div className="font-editorial text-6xl md:text-8xl text-zinc-800/50 absolute -top-10 -left-6 z-0 select-none transition-colors duration-500 group-hover:text-[#5C1625]/30">
              04
            </div>
<div className="relative z-10 pl-6 border-l border-zinc-800">
<h3 className="font-editorial text-2xl md:text-3xl tracking-tight mb-4 text-white">
                Estabilización
              </h3>
<p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Construís una relación más segura, con herramientas para
                sostener el cambio sin volver a los viejos patrones.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-8 border-b border-zinc-200 pb-8 text-center md:text-left">
<h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tight font-editorial">
            El programa incluye
          </h2>
<span className="uppercase text-xs font-medium text-zinc-500 tracking-[0.2em]">
            Proceso completo de 60 días
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
<div className="group rounded-sm border border-zinc-200/70 bg-white/35 p-8 transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:shadow-zinc-900/5">
<iconify-icon className="text-2xl text-zinc-400 mb-6 group-hover:text-[#5C1625] transition-colors" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-editorial text-xl tracking-tight text-zinc-900 mb-3">
              Diagnóstico personalizado
            </h4>
<p className="leading-relaxed text-sm font-light text-zinc-600">
              Evaluación profunda de la situación actual para adaptar la
              estrategia de intervención a tu contexto específico.
            </p>
</div>
<div className="group transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:shadow-zinc-900/5 bg-white/35 border-zinc-200/70 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="text-2xl text-zinc-400 mb-6 group-hover:text-[#5C1625] transition-colors" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-editorial text-xl tracking-tight text-zinc-900 mb-3">
              Acompañamiento guiado
            </h4>
<p className="leading-relaxed text-sm font-light text-zinc-600">
              Módulos secuenciales que te guían paso a paso a lo largo del
              proceso de 60 días.
            </p>
</div>
<div className="group transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:shadow-zinc-900/5 bg-white/35 border-zinc-200/70 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="text-2xl text-zinc-400 mb-6 group-hover:text-[#5C1625] transition-colors" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-editorial text-xl tracking-tight text-zinc-900 mb-3">
              Seguimiento
            </h4>
<p className="leading-relaxed text-sm font-light text-zinc-600">
              Puntos de control para evaluar el progreso, ajustar el enfoque y
              mantener la claridad del proceso.
            </p>
</div>
<div className="group transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:shadow-zinc-900/5 bg-white/35 border-zinc-200/70 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="text-2xl text-zinc-400 mb-6 group-hover:text-[#5C1625] transition-colors" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-editorial text-xl tracking-tight text-zinc-900 mb-3">
              Herramientas de comunicación
            </h4>
<p className="leading-relaxed text-sm font-light text-zinc-600">
              Guiones y estructuras verbales para abordar conversaciones
              difíciles sin generar actitudes defensivas o discusiones
            </p>
</div>
<div className="group rounded-sm border border-zinc-200/70 bg-white/35 p-8 transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:shadow-zinc-900/5">
<iconify-icon className="text-2xl text-zinc-400 mb-6 group-hover:text-[#5C1625] transition-colors" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-editorial text-xl tracking-tight text-zinc-900 mb-3">
              Ejercicios prácticos
            </h4>
<p className="leading-relaxed text-sm font-light text-zinc-600">
              Tareas introspectivas y de pareja para mejorar las dinámicas en la
              relación.
            </p>
</div>
<div className="group rounded-sm border border-zinc-200/70 bg-white/35 p-8 transition-all duration-300 hover:bg-white/60 hover:shadow-xl hover:shadow-zinc-900/5">
<iconify-icon className="text-2xl text-zinc-400 mb-6 group-hover:text-[#5C1625] transition-colors" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="font-editorial text-xl tracking-tight text-zinc-900 mb-3">
              Soporte durante el proceso
            </h4>
<p className="leading-relaxed text-sm font-light text-zinc-600">
              Acceso a resolución de dudas para no sentirte solo en los momentos
              de mayor incertidumbre.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[#14080A] relative overflow-hidden flex flex-col items-center justify-center text-center" id="contacto">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5C1625] via-transparent to-transparent opacity-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-3xl mr-auto ml-auto relative">
<h2 className="font-editorial text-5xl md:text-7xl text-[#F7F6F3] tracking-tighter leading-tight mb-8 font-medium">
          Empezá por una conversación honesta.
        </h2>
<p className="md:text-base text-sm font-light text-zinc-400 max-w-xl mr-auto mb-12 ml-auto">
          Escribinos por WhatsApp. Evaluaremos tu situación de forma
          confidencial para ver si el Método R.E.C. puede ayudarte a reconstruir
          claridad y conexión.
        </p>
<a className="group relative inline-flex items-center justify-center bg-gradient-to-br from-[#8A1E34] via-[#5C1625] to-[#3D101A] text-[#F7F6F3] px-12 py-6 rounded-full text-base font-medium tracking-wide overflow-hidden transition-all duration-500 hover:-translate-y-0.5 shadow-[0_20px_60px_-15px_rgba(92,22,37,0.65)] hover:shadow-[0_30px_80px_-15px_rgba(122,26,46,0.85)] ring-1 ring-white/15" href="https://wa.me/595991755871?text=Hola%2C%20quiero%20contar%20mi%20situaci%C3%B3n%20y%20ver%20si%20pueden%20ayudarme." rel="noopener noreferrer" target="_blank">
<span className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/15 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></span>
<span className="absolute -inset-1 bg-gradient-to-r from-[#7A1A2E]/40 to-[#3D101A]/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
<span className="z-10 flex items-center gap-3 relative">
<iconify-icon className="text-xl" icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
            Quiero recuperar la conexión
          </span>
</a>
</div>
</section>

<footer className="py-12 bg-[#14080A] border-t border-white/5 text-center px-6">
<span className="text-xs tracking-[0.25em] font-medium uppercase text-zinc-600 block mb-4">
        Método R.E.C.
      </span>
<p className="text-xs font-light text-zinc-700">
        © 2024. Todos los derechos reservados. Un espacio seguro para la
        reconexión.
      </p>
</footer>

    </>
  );
}
