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



      // Initialize Lucide icons
      lucide.createIcons();

      // Intersection Observer to trigger scroll scale/spring reveal animations
      document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // Unobserve to trigger animation exactly once
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach(el => observer.observe(el));
      });
      
      // Placeholder for Modal functionality mentioned in the CTA button
      function openModal() {
        console.log("Modal functionality triggered.");
        // Modal implementation goes here
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.025]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E&quot'}}></div>

<nav className="absolute z-[1000] flex md:px-14 transition-all duration-400 md:justify-start border-b pt-4 pr-6 pb-4 pl-6 top-0 right-0 left-0 items-center justify-center" id="navbar">
<a className="flex items-center text-none" href="#inicio">
<img alt="Brutal Premium Cars" className="h-5 w-auto block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2353fce0-99cd-462e-ba32-68da43b03d16_320w.png"/>
</a>
</nav>

<section className="min-h-[100svh] relative overflow-hidden bg-[#080808] flex items-center" id="inicio">
<div className="absolute inset-0 z-0">
<video aria-hidden="true" className="hidden"></video>
<style>
    #inicio .z-\[2\] {
      width: 100% !important;
      max-width: 100% !important;
      min-height: 100svh !important;
      margin: 0 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      text-align: center !important;
      padding-top: 6rem !important;
      padding-bottom: 4rem !important;
      box-sizing: border-box !important;
    }
    #inicio .z-\[2\] > p {
      max-width: 800px !important;
    }
    #inicio .z-\[2\] > .flex {
      justify-content: center !important;
      width: 100% !important;
    }
    #inicio .z-\[2\] > .sm\:flex-row {
      align-items: center !important;
      justify-content: center !important;
    }
    #inicio .z-\[1\] {
      background: radial-gradient(circle at center, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.85) 60%, #080808 100%), linear-gradient(to top, #080808 0%, transparent 30%) !important;
    }
  </style>
</div>
<div className="absolute inset-0 z-[1] pointer-events-none" style={{background: 'linear-gradient(to right, rgba(8,8,8,1) 0%, rgba(8,8,8,0.98) 18%, rgba(8,8,8,0.7) 35%, rgba(8,8,8,0.15) 55%, rgba(8,8,8,0) 70%), linear-gradient(to top, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0) 20%), linear-gradient(to bottom, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0) 12%)'}}></div>
<div className="relative z-[2] px-4 w-full md:px-16 lg:px-16 flex flex-col justify-center items-center -mt-16 md:mt-0" style={{paddingTop: 'clamp(0.5rem, 2vh, 6rem) !important', paddingBottom: 'clamp(1.5rem, 6vh, 4rem) !important'}}>
<div className="reveal">
<div className="uppercase flex gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm md:text-base lg:text-lg sm:mb-6 lg:mb-10 text-[#E87D00] tracking-widest font-['JetBrains_Mono',monospace] w-full mb-2 gap-x-3 gap-y-3 items-center justify-center" style={{animation: 'breathe-aura-empee2rv0gcfz1xj 4s ease-in-out infinite'}}>
<style>
              @keyframes breathe-aura-empee2rv0gcfz1xj {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.75; transform: scale(1.02); }
              }
            </style>
            Importación directa
          </div>
</div>
<h1 className="font-['Bebas_Neue',sans-serif] text-[clamp(4rem,17vw,5rem)] md:text-[clamp(4.5rem,7vw,7rem)] lg:text-[clamp(6rem,9vw,10rem)] leading-[0.85] tracking-tight uppercase text-[#EBEBEB] m-0 text-center w-full reveal reveal-delay-1">
          El coche
          <br/>
          que deseas.
          <br/>
<span className="text-[#E87D00] block">Pagando menos.</span>
</h1>
<p className="leading-[1.6] sm:text-base md:text-lg md:max-w-[600px] md:leading-[1.75] md:mt-6 md:mb-8 lg:text-xl lg:max-w-[750px] lg:mt-10 lg:mb-14 text-xs font-normal text-slate-50 text-center max-w-[92%] mt-4 mb-6 reveal reveal-delay-2">Lo buscamos en el extranjero, lo verificamos, lo matriculamos en tu comunidad y lo entregamos en la puerta de tu casa. </p>
<div className="flex flex-wrap gap-3 sm:gap-5 md:gap-6 lg:gap-10 md:pt-10 lg:pt-12 md:mb-12 lg:mb-16 md:max-w-[900px] lg:max-w-[1100px] w-full max-w-[95%] border-white/10 border-t mr-auto mb-8 ml-auto pt-8 gap-x-3 gap-y-3 justify-center relative">
<style>
    @keyframes premium-shine {
      0% { 
        transform: translateX(-200px) rotate(25deg); 
        opacity: 0; 
      }
      1% { 
        opacity: 1; 
      }
      20% { 
        transform: translateX(500px) rotate(25deg); 
        opacity: 1; 
      }
      21% { 
        transform: translateX(500px) rotate(25deg); 
        opacity: 0; 
      }
      100% { 
        transform: translateX(500px) rotate(25deg); 
        opacity: 0; 
      }
    }
    
    .glass-card-reflection::before {
      content: '';
      position: absolute;
      top: -50%;
      left: 0;
      width: 40px;
      height: 200%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
      filter: blur(6px);
      pointer-events: none;
      z-index: 20;
    }
    
    .reflection-delay-1::before { 
      animation: premium-shine 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite 0s; 
    }
    .reflection-delay-2::before { 
      animation: premium-shine 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite 2.6s; 
    }
    .reflection-delay-3::before { 
      animation: premium-shine 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite 5.2s; 
    }
  </style>
<div className="relative flex flex-col items-center justify-center w-[47%] sm:w-[31%] max-w-[320px] p-5 sm:p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-black/40 backdrop-blur-2xl border border-white/[0.12] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] group glass-card-reflection reflection-delay-1 reveal reveal-delay-3" style={{boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.5)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
<div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none rounded-t-[1.5rem] lg:rounded-t-[2rem]"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40"></div>
<span className="relative z-10 font-['Bebas_Neue',sans-serif] text-[2.2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[0.9] text-[#E87D00] tracking-tight drop-shadow-md mb-1.5 sm:mb-2">
      24H
    </span>
<span className="relative z-10 font-['JetBrains_Mono',monospace] text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-widest uppercase text-[#A1A1AA] text-center leading-snug">
      Primera<br className="block sm:hidden"/> respuesta
    </span>
</div>
<div className="relative flex flex-col items-center justify-center w-[47%] sm:w-[31%] max-w-[320px] p-5 sm:p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-black/40 backdrop-blur-2xl border border-white/[0.12] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] group glass-card-reflection reflection-delay-2 reveal reveal-delay-4" style={{boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.5)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
<div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none rounded-t-[1.5rem] lg:rounded-t-[2rem]"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40"></div>
<span className="relative z-10 font-['Bebas_Neue',sans-serif] text-[2.2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[0.9] text-[#E87D00] tracking-tight drop-shadow-md mb-1.5 sm:mb-2">
      1 AÑO
    </span>
<span className="relative z-10 font-['JetBrains_Mono',monospace] text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-widest uppercase text-[#A1A1AA] text-center leading-snug">
      Garantía<br className="block sm:hidden"/> incluida
    </span>
</div>
<div className="relative flex flex-col items-center justify-center w-[47%] sm:w-[31%] max-w-[320px] p-5 sm:p-6 lg:p-8 rounded-[1.5rem] lg:rounded-[2rem] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-black/40 backdrop-blur-2xl border border-white/[0.12] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] group glass-card-reflection reflection-delay-3 reveal reveal-delay-5" style={{boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.03), 0 20px 40px rgba(0, 0, 0, 0.5)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
<div className="absolute top-0 inset-x-0 h-[45%] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none rounded-t-[1.5rem] lg:rounded-t-[2rem]"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80"></div>
<div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-40"></div>
<span className="relative z-10 font-['Bebas_Neue',sans-serif] text-[2.2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[0.9] text-[#E87D00] tracking-tight drop-shadow-md mb-1.5 sm:mb-2 whitespace-nowrap">20%</span>
<span className="relative z-10 font-['JetBrains_Mono',monospace] text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-widest uppercase text-[#A1A1AA] text-center leading-snug">
      Ahorro<br className="block sm:hidden"/> vs España
    </span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center justify-center w-full">
<div className="relative inline-block w-[90%] sm:w-auto max-w-[360px] sm:max-w-none reveal reveal-delay-6">
<button className="glass-btn cursor-pointer inline-flex justify-center w-full sm:w-auto overflow-hidden text-base sm:text-lg lg:text-xl uppercase transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 text-black tracking-widest font-['Bebas_Neue',sans-serif] bg-gradient-to-br from-orange-400 to-orange-600 border-white/30 border py-3 px-6 lg:py-4 lg:px-12 relative gap-x-2 gap-y-2 items-center whitespace-nowrap" onclick="openModal()" onmouseenter="this.style.animation='none'" onmouseleave="this.style.animation='breathe 2.8s ease-in-out infinite'" style={{clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)', boxShadow: 'rgba(255, 255, 255, 0.4) 0px 1px 0px inset, rgba(0, 0, 0, 0.2) 0px -1px 0px inset, rgba(232, 125, 0, 0.35) 0px 8px 24px', animation: '2.8s ease-in-out 0s infinite normal none running breathe'}}>Solicitar búsqueda gratuita</button>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 h-[1px] z-[3]" style={{background: 'linear-gradient(to right, rgba(232,125,0,0.55) 0%, rgba(232,125,0,0.2) 45%, transparent 72%)'}}></div>
<div className="absolute bottom-8 right-6 md:right-14 z-[3] flex items-center gap-2.5">
</div>
</section>

<div className="bg-[#E87D00] overflow-hidden py-2.5">
<div className="flex whitespace-nowrap w-max" style={{animation: 'marquee 30s linear infinite'}}>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          ITV Pasada
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Matriculación incluida
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Garantía 1 año
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Concesionarios oficiales alemanes
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Entrega a domicilio
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Sin burocracia
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Ahorro real hasta 30%
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          ITV Pasada
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Matriculación incluida
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Garantía 1 año
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Concesionarios oficiales alemanes
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Entrega a domicilio
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Sin burocracia
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
<span className="font-['Bebas_Neue',sans-serif] text-[0.95rem] tracking-widest uppercase text-black px-10 inline-flex items-center gap-10">
          Ahorro real hasta 30%
          <span className="inline-block w-1 h-1 bg-black/35 rounded-full"></span>
</span>
</div>
</div>

<div className="overflow-hidden bg-[#080808] border-white/5 border-b pt-10 pb-10 relative">
<div className="absolute inset-y-0 left-0 w-[40px] md:w-[120px] z-[2] pointer-events-none" style={{background: 'linear-gradient(to right, #080808 0%, transparent 100%)'}}></div>
<div className="absolute inset-y-0 right-0 w-[40px] md:w-[120px] z-[2] pointer-events-none" style={{background: 'linear-gradient(to left, #080808 0%, transparent 100%)'}}></div>
<div className="flex items-center w-max hover:[animation-play-state:paused]" style={{animation: 'brandScroll 32s linear infinite'}}>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Audi" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/audi.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="BMW" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/bmw.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Porsche" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/porsche.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Bentley" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/bentley.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Ferrari" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/ferrari.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Lamborghini" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/lamborghini.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="McLaren" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/mclaren.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Bugatti" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/bugatti.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Audi" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/audi.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="BMW" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/bmw.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Porsche" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/porsche.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Bentley" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/bentley.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Ferrari" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/ferrari.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Lamborghini" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/lamborghini.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="McLaren" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/mclaren.svg"/>
</div>
<div className="inline-flex items-center justify-center px-16 shrink-0 transition-all duration-300 opacity-100">
<img alt="Bugatti" className="h-8 w-auto block" src="https://brutalpremiumcars.com/assets/images/brand/bugatti.svg"/>
</div>
</div>
</div>

<section className="md:py-28 md:px-14 pt-16 pr-6 pb-16 pl-6 relative bg-[#080808] overflow-hidden" id="como-funciona">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#E87D00]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 md:mb-24 reveal">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-[0.24em] uppercase text-[#E87D00] flex items-center justify-center gap-3 mb-4 before:content-[''] before:block before:w-[1.8rem] before:h-[1px] before:bg-[#E87D00] after:content-[''] after:block after:w-[1.8rem] after:h-[1px] after:bg-[#E87D00]">
        // Proceso
      </div>
<h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase text-[#EBEBEB] mb-5">
        Así importamos<br/>tu coche <span className="text-[#E87D00]">premium</span>
</h2>
<p className="text-base md:text-lg text-[#999] font-light max-w-2xl mx-auto leading-[1.75]">
        Encontramos, verificamos y entregamos tu coche sin complicaciones.
      </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">

<div className="flex flex-col gap-6 order-2 lg:order-1">

<div className="p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#E87D00]/50 hover:-translate-y-1 reveal reveal-delay-1">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 text-[#E87D00]">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-tight uppercase text-[#EBEBEB] mb-3">Verificación completa</h3>
<p className="text-[0.9rem] text-[#999] leading-relaxed font-light">Inspeccionamos cada vehículo en concesionarios europeos certificados para garantizar su historial y estado mecánico impecable.</p>
</div>

<div className="p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#E87D00]/50 hover:-translate-y-1 reveal reveal-delay-2">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 text-[#E87D00]">
<i className="w-6 h-6" data-lucide="lock"></i>
</div>
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-tight uppercase text-[#EBEBEB] mb-3">Compra segura</h3>
<p className="text-[0.9rem] text-[#999] leading-relaxed font-light">Gestión de pagos protegida y contratos claros sin letra pequeña. Tu inversión está respaldada en todo momento.</p>
</div>
</div>

<div className="relative flex justify-center order-1 lg:order-2 reveal reveal-delay-3">
<div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[650px] bg-black rounded-[48px] border-[12px] border-[#1a1a1a] shadow-[0_20px_50px_rgba(232,125,0,0.2)] overflow-hidden z-20 ring-1 ring-white/10">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-30 pointer-events-none"></div>

<div className="absolute top-4 inset-x-0 flex justify-center z-40">
<div className="w-28 h-7 bg-black rounded-full flex items-center justify-between px-3 shadow-lg border border-white/5">
<div className="w-3 h-3 rounded-full bg-[#0a0a0a] shadow-inner border border-white/10 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-blue-900/40"></div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/20 shadow-[0_0_4px_#22c55e]"></div>
</div>
</div>

<div className="absolute top-0 inset-x-0 z-30 flex justify-between items-center px-6 pt-5 pointer-events-none">
<div className="text-white text-[12px] font-semibold w-12 text-center tracking-tight">9:41</div>
<div className="flex items-center gap-1.5 w-12 justify-center">
<i className="w-[14px] h-[14px] text-white" data-lucide="bar-chart-2"></i>
<i className="w-[14px] h-[14px] text-white" data-lucide="wifi"></i>
<i className="w-[16px] h-[16px] text-white" data-lucide="battery-full"></i>
</div>
</div>

<div className="absolute inset-0 z-20 flex flex-col justify-end p-6 pb-8 pointer-events-none">

<div className="bg-black/60 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl pointer-events-auto">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E87D00]/30 to-[#E87D00]/5 flex items-center justify-center border border-[#E87D00]/30 shadow-[0_0_15px_rgba(232,125,0,0.2)]">
<i className="w-6 h-6 text-[#E87D00]" data-lucide="car-front"></i>
</div>
<div>
<div className="text-white text-sm font-semibold tracking-wide">Porsche 911 GT3</div>
<div className="text-white/60 text-xs font-light flex items-center gap-1 mt-0.5">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                    Stuttgart, Germany
                  </div>
</div>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2 relative">
<div className="bg-gradient-to-r from-[#E87D00] to-yellow-500 w-[75%] h-full rounded-full relative">
<div className="absolute top-0 right-0 w-2 h-full bg-white/50 rounded-full blur-[1px]"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-white/50 font-['JetBrains_Mono',monospace] uppercase tracking-widest">
<span>Inspección</span>
<span className="text-[#E87D00]">En tránsito</span>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/50 rounded-full"></div>
</div>

<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-driving-a-porsche-in-the-mountains-4394/1080p.mp4" type="video/mp4"/>
</video>
</div>
</div>

<div className="flex flex-col gap-6 order-3">

<div className="p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#E87D00]/50 hover:-translate-y-1 reveal reveal-delay-4">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 text-[#E87D00]">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-tight uppercase text-[#EBEBEB] mb-3">Gestión integral</h3>
<p className="text-[0.9rem] text-[#999] leading-relaxed font-light">Nos ocupamos de la burocracia, impuestos, aduanas e ITV. Todo el proceso administrativo resuelto sin que tengas que mover un dedo.</p>
</div>

<div className="p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#E87D00]/50 hover:-translate-y-1 reveal reveal-delay-5">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 text-[#E87D00]">
<i className="w-6 h-6" data-lucide="key"></i>
</div>
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-tight uppercase text-[#EBEBEB] mb-3">Entrega llave en mano</h3>
<p className="text-[0.9rem] text-[#999] leading-relaxed font-light">Recibe tu coche matriculado, limpio y listo para conducir en la puerta de tu casa. Transportado en grúa cerrada premium.</p>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-[1px] bg-white/5"></div>

<section className="md:py-28 md:px-14 bg-[#080808] pt-16 pr-6 pb-16 pl-6 relative" id="ventajas">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 md:mt-16 mt-8 gap-x-12 gap-y-12 items-start">
<div className="lg:sticky lg:top-32 reveal">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-[0.24em] uppercase text-[#E87D00] flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[1.8rem] before:h-[1px] before:bg-[#E87D00]">
        // Por qué Brutal Cars
      </div>
<h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tight uppercase text-[#EBEBEB] mb-5">
        Lo que solo
        <br/>
            encontrarás
        <br/>
<span className="text-[#E87D00]">con nosotros.</span>
</h2>
<p className="text-base text-[#999] font-light max-w-[540px] leading-[1.75] mt-4">
        Directo de Alemania. Con todas las garantías. A tu puerta.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-transparent">
<div className="glass-card p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 reveal reveal-delay-1">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 relative z-[3] text-[#E87D00] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
</svg>
</div>
<div className="font-['Bebas_Neue',sans-serif] text-[1.1rem] tracking-[0.06em] uppercase text-[#EBEBEB] mb-2.5 relative z-[3]">
          Ahorro real en impuestos
        </div>
<p className="text-xs text-[#666] leading-[1.7] font-light relative z-[3]">
          Matriculamos directamente en tu comunidad autónoma, eliminando el
          impuesto de matriculación. Ahorro directo de cientos de euros que
          va a tu bolsillo.
        </p>
</div>
<div className="glass-card p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 reveal reveal-delay-2">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 relative z-[3] text-[#E87D00] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
<div className="font-['Bebas_Neue',sans-serif] text-[1.1rem] tracking-[0.06em] uppercase text-[#EBEBEB] mb-2.5 relative z-[3]">
          ITV pasada y certificada
        </div>
<p className="text-xs text-[#666] leading-[1.7] font-light relative z-[3]">
          El vehículo pasa la ITV de homologación española antes de
          entregártelo. Listo para circular desde el primer día, sin
          trámites adicionales.
        </p>
</div>
<div className="glass-card p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 reveal reveal-delay-3">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 relative z-[3] text-[#E87D00] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="font-['Bebas_Neue',sans-serif] text-[1.1rem] tracking-[0.06em] uppercase text-[#EBEBEB] mb-2.5 relative z-[3]">
          Garantía 1 año incluida
        </div>
<p className="text-xs text-[#666] leading-[1.7] font-light relative z-[3]">
          Motor, embrague y componentes principales cubiertos durante 12
          meses, emitida directamente a tu nombre por empresa especializada.
        </p>
</div>
<div className="glass-card p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 reveal reveal-delay-4">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 relative z-[3] text-[#E87D00] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
<path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
<path d="M12 3v6"></path>
</svg>
</div>
<div className="font-['Bebas_Neue',sans-serif] text-[1.1rem] tracking-[0.06em] uppercase text-[#EBEBEB] mb-2.5 relative z-[3]">
          Concesionario oficial alemán
        </div>
<p className="text-xs text-[#666] leading-[1.7] font-light relative z-[3]">
          Compramos exclusivamente en concesionarios oficiales, no en
          subastas ni a particulares. Historial completo y kilómetros
          verificados.
        </p>
</div>
<div className="glass-card p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 reveal reveal-delay-5">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 relative z-[3] text-[#E87D00] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="font-['Bebas_Neue',sans-serif] text-[1.1rem] tracking-[0.06em] uppercase text-[#EBEBEB] mb-2.5 relative z-[3]">
          Entrega donde estés
        </div>
<p className="text-xs text-[#666] leading-[1.7] font-light relative z-[3]">
          Operamos en el arco mediterráneo y zonas de interior. El coche
          llega a tu dirección, ya matriculado, ya revisado, con toda la
          documentación en orden.
        </p>
</div>
<div className="glass-card p-8 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/5 via-white/5 to-black/20 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.4),inset_1px_0_0_rgba(255,255,255,0.08),0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 reveal reveal-delay-6">
<div className="w-12 h-12 rounded-sm bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/20 flex items-center justify-center mb-5 relative z-[3] text-[#E87D00] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<div className="font-['Bebas_Neue',sans-serif] text-[1.1rem] tracking-[0.06em] uppercase text-[#EBEBEB] mb-2.5 relative z-[3]">
          Respuesta en 24h
        </div>
<p className="text-xs text-[#666] leading-[1.7] font-light relative z-[3]">
          En cuanto recibes tu solicitud, nuestro equipo te contacta ese
          mismo día o al siguiente con disponibilidad y estimación de
          precio.
        </p>
</div>
</div>
</div>
<div className="mt-24 md:mt-32 relative">
<div className="font-['JetBrains_Mono',monospace] text-xs tracking-[0.24em] uppercase text-[#E87D00] flex items-center gap-3 mb-4 before:content-[''] before:block before:w-[1.8rem] before:h-[1px] before:bg-[#E87D00] reveal">
      // Vehículos Destacados
    </div>
<h2 className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] uppercase reveal reveal-delay-1 text-[#EBEBEB] tracking-tight font-['Bebas_Neue',sans-serif] mb-10">
      Joyas sobre <br className="md:hidden"/> <span className="text-[#E87D00]">Ruedas.</span>
</h2>
<div className="relative w-full overflow-hidden reveal reveal-delay-2" style={{maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'}}>
<div className="flex gap-6 w-max hover:[animation-play-state:paused]" style={{animation: 'marquee 35s linear infinite'}}>
<div className="w-[280px] md:w-[380px] shrink-0 p-5 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/10 via-white/5 to-black/40 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group hover:-translate-y-2 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(232,125,0,0.15)] cursor-pointer">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#E87D00]/10 to-transparent pointer-events-none z-10">
</div>
<div className="relative h-[180px] md:h-[220px] w-full overflow-hidden rounded-sm mb-5 z-20">
<img alt="Porsche 911" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#EBEBEB] text-[0.7rem] font-['JetBrains_Mono',monospace] tracking-widest uppercase px-2 py-1 rounded-sm border border-white/10">
              VENDIDO</div>
</div>
<div className="relative z-20">
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-wide text-[#EBEBEB] mb-1 group-hover:text-[#E87D00] transition-colors duration-300">
              Porsche 911 GT3</h3>
<div className="flex gap-3 text-[#E87D00] font-['JetBrains_Mono',monospace] text-[0.65rem] tracking-widest mb-3 uppercase">
<span>2022</span>
<span>•</span>
<span>15.000 KM</span>
</div>
<p className="text-[0.8rem] text-[#999] leading-relaxed font-light">Importado desde Stuttgart. Certificación
              oficial y garantía extendida Porsche Approved.</p>
</div>
</div>
<div className="w-[280px] md:w-[380px] shrink-0 p-5 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/10 via-white/5 to-black/40 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group hover:-translate-y-2 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(232,125,0,0.15)] cursor-pointer">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#E87D00]/10 to-transparent pointer-events-none z-10">
</div>
<div className="relative h-[180px] md:h-[220px] w-full overflow-hidden rounded-sm mb-5 z-20">
<img className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-[#E87D00]/80 backdrop-blur-md text-[#EBEBEB] text-[0.7rem] font-['JetBrains_Mono',monospace] tracking-widest uppercase px-2 py-1 rounded-sm border border-[#E87D00]">
              DISPONIBLE</div>
</div>
<div className="relative z-20">
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-wide text-[#EBEBEB] mb-1 group-hover:text-[#E87D00] transition-colors duration-300">
              BMW M4 Competition</h3>
<div className="flex gap-3 text-[#E87D00] font-['JetBrains_Mono',monospace] text-[0.65rem] tracking-widest mb-3 uppercase">
<span>2023</span>
<span>•</span>
<span>8.500 KM</span>
</div>
<p className="text-[0.8rem] text-[#999] leading-relaxed font-light">Unidad en stock. Revisión completa en
              concesionario oficial M-GmbH en Múnich.</p>
</div>
</div>
<div className="w-[280px] md:w-[380px] shrink-0 p-5 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/10 via-white/5 to-black/40 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group hover:-translate-y-2 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(232,125,0,0.15)] cursor-pointer">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#E87D00]/10 to-transparent pointer-events-none z-10">
</div>
<div className="relative h-[180px] md:h-[220px] w-full overflow-hidden rounded-sm mb-5 z-20">
<img alt="Mercedes G63" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#EBEBEB] text-[0.7rem] font-['JetBrains_Mono',monospace] tracking-widest uppercase px-2 py-1 rounded-sm border border-white/10">
              EN TRÁNSITO</div>
</div>
<div className="relative z-20">
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-wide text-[#EBEBEB] mb-1 group-hover:text-[#E87D00] transition-colors duration-300">
              Mercedes-Benz G63 AMG</h3>
<div className="flex gap-3 text-[#E87D00] font-['JetBrains_Mono',monospace] text-[0.65rem] tracking-widest mb-3 uppercase">
<span>2021</span>
<span>•</span>
<span className="">32.000 KM</span>
</div>
<p className="text-[0.8rem] text-[#999] leading-relaxed font-light">Exclusividad y potencia bruta. Equipamiento
              completo Manufaktur. Llegada en 7 días.</p>
</div>
</div>
<div className="w-[280px] md:w-[380px] shrink-0 p-5 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/10 via-white/5 to-black/40 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group hover:-translate-y-2 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(232,125,0,0.15)] cursor-pointer">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#E87D00]/10 to-transparent pointer-events-none z-10">
</div>
<div className="relative h-[180px] md:h-[220px] w-full overflow-hidden rounded-sm mb-5 z-20">
<img alt="Porsche 911" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-[#EBEBEB] text-[0.7rem] font-['JetBrains_Mono',monospace] tracking-widest uppercase px-2 py-1 rounded-sm border border-white/10">
              VENDIDO</div>
</div>
<div className="relative z-20">
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-wide text-[#EBEBEB] mb-1 group-hover:text-[#E87D00] transition-colors duration-300">
              Porsche 911 GT3</h3>
<div className="flex gap-3 text-[#E87D00] font-['JetBrains_Mono',monospace] text-[0.65rem] tracking-widest mb-3 uppercase">
<span className="">2022</span>
<span>•</span>
<span>15.000 KM</span>
</div>
<p className="text-[0.8rem] text-[#999] leading-relaxed font-light">Importado desde Stuttgart. Certificación
              oficial y garantía extendida Porsche Approved.</p>
</div>
</div>
<div className="w-[280px] md:w-[380px] shrink-0 p-5 relative overflow-hidden rounded-sm bg-gradient-to-br from-white/10 via-white/5 to-black/40 border border-white/20 border-b-white/5 border-r-white/5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.5),0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 group hover:-translate-y-2 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_rgba(232,125,0,0.15)] cursor-pointer">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-[#E87D00]/10 to-transparent pointer-events-none z-10">
</div>
<div className="relative h-[180px] md:h-[220px] w-full overflow-hidden rounded-sm mb-5 z-20">
<img alt="BMW M4" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute top-3 right-3 bg-[#E87D00]/80 backdrop-blur-md text-[#EBEBEB] text-[0.7rem] font-['JetBrains_Mono',monospace] tracking-widest uppercase px-2 py-1 rounded-sm border border-[#E87D00]">
              DISPONIBLE</div>
</div>
<div className="relative z-20">
<h3 className="font-['Bebas_Neue',sans-serif] text-[1.4rem] tracking-wide text-[#EBEBEB] mb-1 group-hover:text-[#E87D00] transition-colors duration-300">
              BMW M4 Competition</h3>
<div className="flex gap-3 text-[#E87D00] font-['JetBrains_Mono',monospace] text-[0.65rem] tracking-widest mb-3 uppercase">
<span>2023</span>
<span>•</span>
<span>8.500 KM</span>
</div>
<p className="text-[0.8rem] text-[#999] leading-relaxed font-light">Unidad en stock. Revisión completa en
              concesionario oficial M-GmbH en Múnich.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-[1px] bg-white/5"></div>

<section className="py-24 px-6 md:px-14 bg-gradient-to-b from-[#080808] to-[#111] relative overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#E87D00]/5 opacity-60 blur-[120px] rounded-full w-[80%] h-[80%] mx-auto top-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center reveal">
<div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#E87D00]/20 to-transparent border border-[#E87D00]/30 rounded-full flex items-center justify-center mb-8 text-[#E87D00] shadow-[0_0_30px_rgba(232,125,0,0.15)]">
<i className="w-7 h-7" data-lucide="search"></i>
</div>
<h2 className="font-['Bebas_Neue',sans-serif] text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-tight uppercase text-[#EBEBEB] mb-6">
          ¿No encuentras el coche <br/><span className="text-[#E87D00]">que buscas?</span>
</h2>
<p className="text-[#999] text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-[1.75]">
          Dinos qué modelo exacto tienes en mente. Nuestro equipo rastreará el mercado alemán y europeo para encontrar la mejor unidad al mejor precio. Te enviaremos una propuesta sin compromiso en menos de 24 horas.
        </p>
<button className="glass-btn cursor-pointer inline-flex justify-center overflow-hidden text-base sm:text-lg lg:text-xl uppercase transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 text-black tracking-widest font-['Bebas_Neue',sans-serif] bg-gradient-to-br from-orange-400 to-orange-600 border-white/30 border py-4 px-8 lg:px-12 relative gap-x-3 items-center" style={{clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)', boxShadow: 'rgba(255, 255, 255, 0.4) 0px 1px 0px inset, rgba(0, 0, 0, 0.2) 0px -1px 0px inset, rgba(232, 125, 0, 0.35) 0px 8px 24px'}}>
<span>Solicitar Búsqueda Personalizada</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<footer className="bg-black pt-20 pb-10 px-6 md:px-14 border-t border-white/10 relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 reveal">

<div className="lg:col-span-1">
<img alt="Brutal Premium Cars" className="h-6 w-auto block mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2353fce0-99cd-462e-ba32-68da43b03d16_320w.png"/>
<p className="text-[#666] text-[0.85rem] font-light leading-[1.8]">
            Tu socio exclusivo para la importación de vehículos premium desde Alemania. Transparencia, seguridad y ahorro real garantizados en cada gestión.
          </p>
</div>

<div>
<h4 className="font-['JetBrains_Mono',monospace] text-[#E87D00] text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-[#E87D00]">Servicios</h4>
<ul className="space-y-3.5 text-=" duration-300"="" hover:text-white="" hover:translate-x-1="" inline-block="" transition-all="">Búsqueda a la carta
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Verificación in-situ</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Gestión de trámites completos</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Transporte en grúa cerrada</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Homologación e ITV</a></li>
</ul>
</div>

<div>
<h4 className="font-['JetBrains_Mono',monospace] text-[#E87D00] text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-[#E87D00]">Empresa</h4>
<ul className="space-y-3.5 text-[0.85rem] text-[#999] font-light">
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Sobre nosotros</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Casos de éxito</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Preguntas frecuentes (FAQ)</a></li>
<li><a className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300" href="#">Contacto</a></li>
</ul>
</div>

<div>
<h4 className="font-['JetBrains_Mono',monospace] text-[#E87D00] text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-3 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-[#E87D00]">Contacto</h4>
<ul className="space-y-4 text-[0.85rem] text-[#999] font-light">
<li className="flex items-start gap-3 group">
<i className="w-[18px] h-[18px] text-[#E87D00] mt-0.5 group-hover:scale-110 transition-transform" data-lucide="mail"></i>
<span className="hover:text-white transition-colors cursor-pointer">info@brutalpremiumcars.com</span>
</li>
<li className="flex items-start gap-3 group">
<i className="w-[18px] h-[18px] text-[#E87D00] mt-0.5 group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<span className="hover:text-white transition-colors cursor-pointer">+34 900 123 456</span>
</li>
<li className="flex items-start gap-3 group">
<i className="w-[18px] h-[18px] text-[#E87D00] mt-0.5 group-hover:scale-110 transition-transform" data-lucide="map-pin"></i>
<span className="leading-relaxed">Sede Principal<br/>Madrid, España</span>
</li>
</ul>
</div>
</div>

<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[#555] text-[0.75rem] font-light gap-4 md:gap-0 reveal reveal-delay-2">
<p>© 2024 Brutal Premium Cars. Todos los derechos reservados.</p>
<div className="flex flex-wrap justify-center gap-4 sm:gap-6">
<a className="hover:text-[#E87D00] transition-colors" href="#">Aviso Legal</a>
<a className="hover:text-[#E87D00] transition-colors" href="#">Política de Privacidad</a>
<a className="hover:text-[#E87D00] transition-colors" href="#">Política de Cookies</a>
</div>
</div>
</footer>




    </>
  );
}
