import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        const initAnim = () => {
            const textWrapper = document.querySelector('.stiven-text');
            if(textWrapper && typeof anime !== 'undefined') {
              textWrapper.innerHTML = textWrapper.textContent.trim().split('').map(char => {
                return char === ' ' ? '&nbsp;' : `<span class="inline-block opacity-0 translate-y-12 letter">${char}</span>`;
              }).join('');
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    anime({
                      targets: '.stiven-text .letter',
                      translateY: [80, 0],
                      opacity: [0, 1],
                      easing: 'easeOutExpo',
                      duration: 1400,
                      delay: (el, i) => 40 * i
                    });
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1 });
              observer.observe(textWrapper);
            }
          };
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAnim);
          } else {
            initAnim();
          }
      


          import { animate } from 'https://esm.sh/animejs';

    const initFooterAnim = () => {
      const title = document.querySelector('.stiven-title-anim');
      if (!title) return;
      
      const text = title.textContent.trim();
      title.innerHTML = text.split('').map(char => 
        char === ' ' ? '&nbsp;' : `<span class="inline-block opacity-0 stiven-char-anim" style="will-change: transform, opacity">${char}</span>`
      ).join('');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate('.stiven-char-anim', {
              translateY: [80, 0],
              scale: [0.3, 1],
              opacity: [0, 1],
              delay: (el, i) => i * 40,
              duration: 1400,
              ease: 'outExpo'
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(title);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFooterAnim);
    } else {
      initFooterAnim();
    }
        


    lucide.createIcons();
  


    document.addEventListener("DOMContentLoaded", () => {
        if (typeof anime !== 'undefined') {
          anime({
            targets: '.pulse-circle',
            scale: [0.95, 1.1],
            opacity: [0.6, 1],
            easing: 'easeInOutSine',
            duration: 2000,
            loop: true,
            direction: 'alternate',
            delay: anime.stagger(150)
          });
        }
      });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-[#f2f2f2]/90 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-[95%] xl:max-w-[1800px] mx-auto px-6 h-24 flex items-center justify-between">

<div className="flex items-center gap-3">
<a className="flex items-center" href="#inicio">
<img alt="The Code Company Corp" className="h-28 sm:h-36 md:h-48 w-auto object-contain drop-shadow-sm" src="https://i.ibb.co/zTyKTFdf/LOGO-CODE-COMPANY-NEGRO.png"/>
</a>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="flex flex-col items-center group cursor-pointer text-black" href="#musica">
<span className="">INICIO</span>
<div className="h-0.5 w-full bg-black mt-1"></div>
<div className="w-1 h-1 bg-black rounded-full mt-1"></div>
</a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#servicios">
          MÚSICA
        </a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#sobre-mi">
          SERVICIOS
        </a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#contacto">
          SOBRE MÍ
        </a>
<a className="text-zinc-500 hover:text-black transition-colors" href="#">
          CONTACTO
        </a>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4 text-zinc-600">
<a className="hover:text-black transition-colors" href="#">
<img alt="Spotify" className="h-5 w-5 object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"/>
</a>
<a className="hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="apple" strokeWidth="1.5"></i>
</a>
<a className="hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
<a className="hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hover:text-black transition-colors" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
</svg>
</a>
</div>
<a className="border border-black px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-colors" href="#musica">
          ESCUCHAR AHORA
        </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center" id="inicio">

<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute left-[10%] top-0 w-px h-full bg-zinc-400"></div>
<div className="absolute right-[25%] top-0 w-px h-full bg-zinc-400"></div>
<div className="absolute top-[30%] left-0 w-full h-px bg-zinc-400"></div>
</div>
<div className="max-w-[95%] xl:max-w-[1800px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

<div className="lg:col-span-4 flex flex-col justify-center">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-600 mb-6 flex items-center gap-2">
            PRODUCTOR
            <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
        CANTANTE
        <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
        COMPOSITOR
        </span>
<h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight uppercase leading-[0.9] mb-8">
          CODIGO.
          <br/>
            SONIDO.
          <br/>
            EMOCIÓN.
        </h1>
<p className="text-lg text-zinc-600 max-w-md mb-10 leading-relaxed font-medium">
          Creo música que conecta. Produzco, compongo e interpreto cada
          proyecto desde la esencia.
          <br/>
            Bienvenido a The Code Company Corp.
        </p>
<div className="flex flex-wrap items-center gap-6">
<a className="bg-black text-white px-8 py-4 text-sm font-semibold tracking-wide flex items-center gap-3 hover:bg-zinc-800 transition-colors" href="#musica">
            ESCUCHAR MI MÚSICA
            <i className="w-4 h-4 fill-white" data-lucide="play" strokeWidth="2"></i>
</a>
<a className="text-sm font-semibold tracking-wide flex items-center gap-2 group" href="#contacto">
            TRABAJEMOS JUNTOS
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] lg:h-[700px] flex justify-center items-end">

<div className="absolute inset-0 m-auto w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-zinc-300 pulse-circle">
</div>
<div className="absolute inset-0 m-auto w-[340px] h-[340px] sm:w-[510px] sm:h-[510px] rounded-full border border-dashed border-zinc-300 pulse-circle">
</div>
<div className="absolute inset-0 m-auto w-[260px] h-[260px] sm:w-[390px] sm:h-[390px] rounded-full bg-gradient-to-tr from-zinc-400 via-zinc-200 to-zinc-400 pulse-circle">
</div>

<div className="absolute top-[20%] -right-10 w-24 h-24 rounded-full bg-black text-white flex items-center justify-center rotate-12 z-20">
<div className="absolute inset-2 border border-white/20 rounded-full"></div>
<i className="w-8 h-8" data-lucide="audio-lines" strokeWidth="1.5"></i>
<svg className="absolute inset-0 animate-spin-slow w-[95px] h-[95px]" data-icon-replaced="true" strokeWidth="2" style={{animationDuration: '20s', width: '95px', height: '95px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 100 100">
<path className="" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="curve">
</path>
<text className="text-[9px] font-semibold tracking-widest uppercase fill-white">
<textpath className="" href="#curve" startoffset="0%">
                THE CODE COMPANY CORP • MUSIC IS THE CODE •
              </textpath>
</text>
</svg>
</div>
<div className="absolute bottom-[40%] -left-12 flex flex-col gap-1">
<div className="barcode w-24 h-8 opacity-40"></div>
<span className="text-[8px] font-mono tracking-widest text-zinc-500">
              83910219C 07U9E4
            </span>
</div>
<div className="absolute bottom-10 -right-20 flex flex-col items-center gap-1">
<div className="w-px h-24 waveform-bg"></div>
</div>
<div className="absolute top-10 right-0 flex gap-2">
<div className="w-1.5 h-1.5 bg-black"></div>
<div className="w-1.5 h-1.5 bg-black"></div>
<div className="w-1.5 h-1.5 border border-black"></div>
</div>

<img alt="Artist Profile" className="relative z-10 w-full max-w-[600px] object-cover object-top h-[95%] drop-shadow-2xl lg:scale-110" src="https://i.ibb.co/JjKCSHbj/05e836e2-4cb8-47c5-ba65-4573f065a656-Photoroom.png" style={{maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>

<div className="lg:col-span-3 flex justify-end" id="sobre-mi">
<div className="w-full max-w-sm relative mt-12 lg:mt-32">

<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black"></div>
<h3 className="text-sm font-semibold tracking-widest uppercase mb-6 leading-relaxed">
            'MÚSICA QUE NACE
            <br/>
              DE LA REALIDAD
          </h3>
<p className="text-base text-zinc-600 mb-8 font-medium leading-relaxed">
            Cada beat, cada letra y cada voz llevan un código. Mi misión es
            transformar ideas en sonido y emociones en experiencias.
          </p>

</div>
</div>
</div>
</main>

<section className="bg-[#0a0a0a] text-white py-14 border-y border-zinc-800" id="servicios">
<div className="max-w-[95%] xl:max-w-[1800px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">

<div className="flex items-start gap-5 pt-8 lg:pt-0 lg:pr-8">
<div className="relative w-12 h-12 flex-shrink-0">
<div className="absolute inset-0 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
<div className="absolute inset-1 rounded-full border border-zinc-800"></div>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">
              PRODUCCIÓN
            </h4>
<p className="text-base text-zinc-400 font-medium leading-relaxed">
              Beats, instrumentales y arreglos profesionales para artistas y
              marcas.
            </p>
</div>
</div>

<div className="flex items-start gap-5 pt-8 lg:pt-0 lg:px-8">
<i className="w-10 h-10 flex-shrink-0 text-zinc-300" data-lucide="audio-lines" strokeWidth="1.5"></i>
<div>
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">
              COMPOSICIÓN
            </h4>
<p className="text-base text-zinc-400 font-medium leading-relaxed">
              Letras y melodías originales que cuentan historias reales.
            </p>
</div>
</div>

<div className="flex items-start gap-5 pt-8 lg:pt-0 lg:px-8">
<i className="w-10 h-10 flex-shrink-0 text-zinc-300" data-lucide="mic-2" strokeWidth="1.5"></i>
<div className="">
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">
              INTERPRETACIÓN
            </h4>
<p className="text-base text-zinc-400 font-medium leading-relaxed">
              Voz, flow y sentimiento para conectar con tu audiencia.
            </p>
</div>
</div>

<div className="flex items-start gap-5 pt-8 lg:pt-0 lg:px-8">
<i className="w-10 h-10 flex-shrink-0 text-zinc-300" data-lucide="sliders-vertical" strokeWidth="1.5"></i>
<div>
<h4 className="text-sm font-semibold tracking-widest uppercase mb-2">
              MEZCLA &amp; MASTER
            </h4>
<p className="text-base text-zinc-400 font-medium leading-relaxed">
              Calidad, equilibrio y potencia en cada detalle sonoro.
            </p>
</div>
</div>

<div className="flex flex-col justify-center pt-8 lg:pt-0 lg:pl-8">
<h4 className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 mb-4">
            DISPONIBLE EN
          </h4>
<div className="flex items-center gap-4 text-zinc-300 mb-3">
<img alt="Spotify" className="h-6 w-auto grayscale brightness-200" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"/>
<i className="w-5 h-5" data-lucide="apple" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="cloud" strokeWidth="1.5"></i>
</div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">
              Y MÁS PLATAFORMAS
            </span>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] py-20 relative overflow-hidden" id="musica">

<div className="absolute right-0 bottom-0 w-[500px] h-[500px] border border-zinc-200 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none">
</div>
<div className="absolute right-0 bottom-0 w-[600px] h-[600px] border border-zinc-200 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none">
</div>
<div className="max-w-[95%] xl:max-w-[1800px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.5fr_3fr_2fr] gap-16 relative z-10">

<div className="">
<h4 className="text-xs font-semibold tracking-widest uppercase mb-8">
          EN NÚMEROS
        </h4>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-6">
<i className="w-5 h-5 text-zinc-800" data-lucide="music" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight w-16">
                +120
              </span>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                CANCIONES PRODUCIDAS
              </span>
</div>
<div className="flex items-center gap-6">
<i className="w-5 h-5 text-zinc-800" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight w-16">
                +35
              </span>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                ARTISTAS COLABORADOS
              </span>
</div>
<div className="flex items-center gap-6">
<i className="w-5 h-5 text-zinc-800" data-lucide="headphones" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight w-16">
                +2M
              </span>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                STREAMS TOTALES
              </span>
</div>
<div className="flex items-center gap-6">
<i className="w-5 h-5 text-zinc-800" data-lucide="trophy" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight w-16">+8</span>
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
                AÑOS DE EXPERIENCIA
              </span>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-8">
<h4 className="text-xs font-semibold tracking-widest uppercase">
            ÚLTIMOS LANZAMIENTOS
          </h4>
<a className="text-xs font-semibold tracking-widest uppercase flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">
            VER TODO
            <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-6 mb-4">

<div className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer">
<img alt="Real" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 p-4 flex flex-col justify-end">
<h5 className="text-white font-semibold tracking-tight uppercase text-lg leading-none">
                REAL
              </h5>
<span className="text-[8px] text-zinc-400 tracking-widest uppercase mt-1">
                  THE CODE COMPANY CORP
                </span>
</div>
<div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
<i className="w-3 h-3 fill-black text-black ml-0.5" data-lucide="play" strokeWidth="2"></i>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer">
<img alt="No Signal" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 p-4 flex flex-col justify-end">
<h5 className="text-white font-semibold tracking-tight uppercase text-lg leading-none">
                NO SIGNAL
              </h5>
<span className="text-[8px] text-zinc-400 tracking-widest uppercase mt-1">
                  THE CODE COMPANY CORP
                </span>
</div>
<div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
<i className="w-3 h-3 fill-black text-black ml-0.5" data-lucide="play" strokeWidth="2"></i>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer">
<img alt="En el Codigo" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity grayscale" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&amp;q=80"/>
<div className="absolute inset-0 p-4 flex flex-col justify-end">
<h5 className="text-white font-semibold tracking-tight uppercase text-lg leading-none">
                EN EL CÓDIGO
              </h5>
<span className="text-[8px] text-zinc-400 tracking-widest uppercase mt-1">
                  THE CODE COMPANY CORP
                </span>
</div>
<div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
<i className="w-3 h-3 fill-black text-black ml-0.5" data-lucide="play" strokeWidth="2"></i>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer">
<img alt="Mentes" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity grayscale" src="https://images.unsplash.com/photo-1619983081563-430f63602796?w=400&amp;q=80"/>
<div className="absolute inset-0 p-4 flex flex-col justify-end">
<h5 className="text-white font-semibold tracking-tight uppercase text-lg leading-none">
                MENTES
              </h5>
<span className="text-[8px] text-zinc-400 tracking-widest uppercase mt-1">
                  THE CODE COMPANY CORP
                </span>
</div>
<div className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
<i className="w-3 h-3 fill-black text-black ml-0.5" data-lucide="play" strokeWidth="2"></i>
</div>
</div>
</div>

<div className="h-6 w-full waveform-bg opacity-30"></div>
</div>

<div className="relative flex flex-col justify-center pl-8 border-l border-zinc-200">
<i className="w-12 h-12 text-zinc-300 mb-4 rotate-180" data-lucide="quote" strokeWidth="1"></i>
<p className="text-2xl font-medium tracking-tight leading-snug mb-8 relative z-10">
          La música no es suerte,
          <br/>
            es código, disciplina y alma.
        </p>
<div className="flex items-center justify-between relative z-10">
<span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500">
              — THE CODE COMPANY CORP
            </span>
<i className="w-6 h-6 text-zinc-300" data-lucide="quote" strokeWidth="1"></i>
</div>

<img alt="Microphone" className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-64 h-64 object-cover object-right opacity-20 mix-blend-multiply grayscale" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&amp;q=80" style={{maskImage: 'radial-gradient(circle, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'}}/>
</div>
</div>
</section>

<footer className="bg-[#000000] text-white pt-28 md:pt-40 lg:pt-56 pb-12 relative mt-32 md:mt-48 lg:mt-64" id="contacto">
<div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
<svg className="relative block md:h-[60px] lg:h-[80px] w-[1846px] h-[50px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '1846px', height: '50px'}} viewbox="0 0 1200 120">
<path className="fill-[#f5f5f5]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
<div className="max-w-[95%] xl:max-w-[1800px] mx-auto px-6">
<div className="absolute left-1/2 -top-[150px] md:-top-[225px] lg:-top-[300px] -translate-x-1/2 z-[40] pointer-events-none">
<img alt="Stiven Castillo" className="h-[300px] md:h-[450px] lg:h-[600px] w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" src="https://i.ibb.co/hFwh2wY3/image-Photoroom.png" />
</img></div>

<div className="flex flex-col md:pt-24 overflow-hidden md:rounded-[3rem] bg-[#0a0a0a]/0 w-full rounded-[2rem] mt-10 pt-16 pb-6 relative justify-end" style={{minHeight: '50vh'}}>

<div className="relative z-10 w-full flex justify-center items-center my-auto px-4">
<h1 className="stiven-title-anim text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] font-serif italic tracking-tighter leading-[0.8] w-full text-center whitespace-nowrap text-[#F5F4E8] drop-shadow-2xl" style={{letterSpacing: '-0.05em'}}>
<span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>S</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>t</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>i</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>v</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>e</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>n</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}> </span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>C</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>a</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>s</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>t</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>i</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>l</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>l</span><span className="inline-block opacity-0 stiven-char-anim" style={{willChange: 'transform, opacity'}}>o</span>
</h1>
</div>

<div className="relative z-10 w-full px-8 md:px-16 flex flex-col md:flex-row justify-between items-center text-[#F5F4E8]/60 text-sm md:text-base font-light mt-16 pb-2">
<p className="mb-4 md:mb-0">Copyright © Stiven Castillo</p>
<p className="flex items-center gap-2 mb-4 md:mb-0">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i> Bogotá D.C
          </p>
<div className="flex gap-6">
<a className="hover:text-[#F5F4E8] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#F5F4E8] transition-colors" href="#">LinkedIn</a>
</div>
</div>

</div>

</div>
</footer>



    </>
  );
}
