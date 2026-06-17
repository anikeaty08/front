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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
gold: '#C6A87C',
cream: '#FDFBF7',
dark: '#0A0A0A',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          // Scroll Reveal Logic
          const reveals = document.querySelectorAll('.reveal');

          const revealOnScroll = () => {
              const windowHeight = window.innerHeight;
              const elementVisible = 100;

              reveals.forEach((reveal) => {
                  const elementTop = reveal.getBoundingClientRect().top;
                  if (elementTop < windowHeight - elementVisible) {
                      reveal.classList.add('active');
                  }
              });
          };

          window.addEventListener('scroll', revealOnScroll);
          revealOnScroll(); // Trigger on load
      });
    
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
      

<nav className="fixed w-full z-50 px-6 py-6 transition-all duration-500 text-white flex justify-between items-center mix-blend-difference" id="navbar">
<div className="flex items-center space-x-6 hidden md:flex">
<a className="text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300" href="#esencia">
          Esencia
        </a>
<a className="text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300" href="#coleccion">
          Colección
        </a>
</div>
<a className="font-serif text-xl tracking-tighter uppercase font-medium absolute left-1/2 transform -translate-x-1/2" href="#">
        L. Nobleza
      </a>
<div className="flex items-center space-x-4">
<button className="hover:text-gold transition-colors duration-300 flex items-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-gold transition-colors duration-300 flex items-center">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="md:hidden hover:text-gold transition-colors duration-300 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
<div className="absolute inset-0 w-full h-full">
<img alt="Abstract perfume glass" className="w-full h-full object-cover opacity-50 scale-110 transform origin-center animate-[pulse_15s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1615486511484-934375b5b035?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center text-white flex flex-col items-center px-4 max-w-5xl w-full mt-16">
<span className="text-[10px] uppercase tracking-[0.6em] text-gold mb-8 reveal font-sans">
          Maison de Parfum
        </span>
<h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] mb-10 font-light italic reveal reveal-delay-1 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
          La Nobleza
        </h1>
<p className="font-sans text-sm md:text-base font-light text-neutral-300 max-w-2xl mb-16 tracking-[0.2em] uppercase reveal reveal-delay-2">
          El arte de convertir aromas en legado.
        </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 reveal reveal-delay-3">
<a className="group relative px-10 py-5 bg-gold/10 backdrop-blur-md border border-gold/30 text-white text-[10px] tracking-[0.3em] uppercase overflow-hidden hover:border-gold transition-all duration-700" href="#coleccion">
<span className="relative z-10 group-hover:text-dark transition-colors duration-700">
              Explorar Colección
            </span>
<div className="absolute inset-0 w-full h-full bg-gold transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
</a>
<a className="group relative px-10 py-5 bg-transparent border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase overflow-hidden hover:border-white transition-all duration-700" href="#esencia">
<span className="relative z-10">Nuestra Esencia</span>
</a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/30 animate-pulse flex flex-col items-center gap-4">
<span className="text-[8px] uppercase tracking-[0.3em]">Descubrir</span>
<div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
</div>
</header>

<section className="py-32 md:py-48 bg-cream px-6 relative overflow-hidden" id="esencia">
<div className="absolute top-0 right-0 w-1/2 h-full bg-dark/5 blur-3xl transform rotate-12 -translate-y-1/4 rounded-full pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-32 items-center">
<div className="md:col-span-6 relative z-10 reveal">
<div className="relative w-full aspect-[4/5] overflow-hidden group">
<img alt="Artesanía" className="w-full h-full object-cover grayscale-[10%] group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)]" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-dark/5 group-hover:bg-transparent transition-colors duration-1000"></div>
<div className="absolute inset-0 border border-dark/10 m-6 pointer-events-none"></div>
</div>
<div className="absolute -bottom-12 -right-12 w-3/4 aspect-square bg-dark p-12 text-white hidden md:flex flex-col justify-center shadow-2xl reveal reveal-delay-2 z-20">
<h3 className="font-serif text-4xl italic mb-6 font-light">
              L'Héritage
            </h3>
<p className="text-xs font-light text-neutral-400 leading-relaxed tracking-wide">
              Cada ingrediente es seleccionado a mano, destilado con precisión
              absoluta y reposado hasta alcanzar la perfección olfativa.
            </p>
</div>
</div>
<div className="md:col-span-6 flex flex-col justify-center reveal reveal-delay-1 relative z-10">
<span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 block font-medium">
            Nuestra Esencia
          </span>
<h2 className="font-serif text-5xl md:text-7xl tracking-tighter leading-[1.1] mb-12 font-light text-dark">
            Artesanía pura
            <br/>
            en cada gota.
          </h2>
<div className="space-y-8 text-sm text-neutral-600 leading-[2.2] max-w-lg font-light">
<p>
              En el corazón de París, nuestros maestros perfumistas destilan la
              memoria en aromas. Cada frasco de La Nobleza es el resultado de un
              proceso meticuloso y paciente, donde ingredientes selectos de todo
              el mundo se entrelazan.
            </p>
<p>
              No creamos simplemente fragancias; componemos sinfonías líquidas.
              Rechazamos la producción masiva para abrazar el arte de la
              perfumería de autor, garantizando una exclusividad que se siente
              en la piel y perdura en el tiempo.
            </p>
</div>
<div className="mt-16">
<a className="inline-flex items-center space-x-6 text-[10px] uppercase tracking-[0.3em] text-dark border-b border-dark/20 pb-3 hover:border-gold hover:text-gold transition-all duration-500 group" href="#">
<span>Conoce nuestro atelier</span>
<iconify-icon className="transform group-hover:translate-x-3 transition-transform duration-500 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-dark text-white px-6" id="coleccion">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 reveal">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">
              Le Parfum
            </span>
<h2 className="font-serif text-5xl md:text-7xl tracking-tighter font-light">
              Colección Exclusiva
            </h2>
</div>
<div className="mt-10 md:mt-0 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
<button className="text-white border-b border-white pb-1">Todos</button>
<button className="hover:text-white transition-colors pb-1">
              Floral
            </button>
<button className="hover:text-white transition-colors pb-1">
              Amaderado
            </button>
<button className="hover:text-white transition-colors pb-1">
              Oriental
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

<div className="group cursor-pointer reveal">
<div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-8">
<img alt="Éclipse Noir" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center items-center p-8 text-center border border-white/20 m-4 scale-95 group-hover:scale-100">
<p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-8">
                  Amaderado Especiado
                </p>
<div className="space-y-4 mb-8 text-xs font-light tracking-wide text-neutral-300">
<p>
<span className="text-white font-medium">Salida:</span>
                    Pimienta Negra, Bergamota
                  </p>
<p>
<span className="text-white font-medium">Corazón:</span>
                    Madera de Oud, Incienso
                  </p>
<p>
<span className="text-white font-medium">Fondo:</span>
                    Cuero, Vetiver, Ámbar
                  </p>
</div>
<p className="text-sm font-serif italic text-neutral-400 mb-10 max-w-xs leading-relaxed">
                  Un abismo de misterio donde la oscuridad se vuelve
                  irresistible.
                </p>
<button className="px-10 py-4 bg-white text-dark text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors duration-500">
                  Descubrir aroma
                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl tracking-tight mb-2 font-light group-hover:text-gold transition-colors duration-500">
                  Éclipse Noir
                </h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
                  Extrait de Parfum · 100ml
                </p>
</div>
<p className="text-lg font-light tracking-wide text-gold">€280</p>
</div>
</div>

<div className="group cursor-pointer reveal md:mt-32">
<div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-8">
<img alt="Velvet Ambre" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center items-center p-8 text-center border border-white/20 m-4 scale-95 group-hover:scale-100">
<p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-8">
                  Oriental Vainilla
                </p>
<div className="space-y-4 mb-8 text-xs font-light tracking-wide text-neutral-300">
<p>
<span className="text-white font-medium">Salida:</span>
                    Almendra amarga, Azafrán
                  </p>
<p>
<span className="text-white font-medium">Corazón:</span>
                    Jazmín Egipcio, Cedro
                  </p>
<p>
<span className="text-white font-medium">Fondo:</span>
                    Ámbar Gris, Vainilla Absoluta
                  </p>
</div>
<p className="text-sm font-serif italic text-neutral-400 mb-10 max-w-xs leading-relaxed">
                  Una caricia cálida y envolvente que hipnotiza los sentidos.
                </p>
<button className="px-10 py-4 bg-white text-dark text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors duration-500">
                  Descubrir aroma
                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl tracking-tight mb-2 font-light group-hover:text-gold transition-colors duration-500">
                  Velvet Ambre
                </h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
                  Extrait de Parfum · 100ml
                </p>
</div>
<p className="text-lg font-light tracking-wide text-gold">€245</p>
</div>
</div>

<div className="group cursor-pointer reveal">
<div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-8">
<img alt="Fleur Impériale" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595425970377-c9703c586515?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-dark/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center items-center p-8 text-center border border-white/20 m-4 scale-95 group-hover:scale-100">
<p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-8">
                  Floral Exquisito
                </p>
<div className="space-y-4 mb-8 text-xs font-light tracking-wide text-neutral-300">
<p>
<span className="text-white font-medium">Salida:</span>
                    Lichi, Peonía, Ruibarbo
                  </p>
<p>
<span className="text-white font-medium">Corazón:</span>
                    Rosa Búlgara, Jazmín de Grasse
                  </p>
<p>
<span className="text-white font-medium">Fondo:</span>
                    Almizcle Blanco, Cashmeran
                  </p>
</div>
<p className="text-sm font-serif italic text-neutral-400 mb-10 max-w-xs leading-relaxed">
                  La majestuosidad de un jardín imperial bajo el rocío del alba.
                </p>
<button className="px-10 py-4 bg-white text-dark text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors duration-500">
                  Descubrir aroma
                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl tracking-tight mb-2 font-light group-hover:text-gold transition-colors duration-500">
                  Fleur Impériale
                </h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
                  Eau de Parfum · 100ml
                </p>
</div>
<p className="text-lg font-light tracking-wide text-gold">€260</p>
</div>
</div>

<div className="group cursor-pointer reveal md:mt-32">
<div className="relative w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-8">
<img alt="Nuit Royale" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)] opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1615486171448-4fb3253b2024?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-dark/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center items-center p-8 text-center border border-white/20 m-4 scale-95 group-hover:scale-100">
<p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-8">
                  Chypre Sofisticado
                </p>
<div className="space-y-4 mb-8 text-xs font-light tracking-wide text-neutral-300">
<p>
<span className="text-white font-medium">Salida:</span>
                    Bergamota de Calabria, Higo
                  </p>
<p>
<span className="text-white font-medium">Corazón:</span>
                    Iris Pallida, Pachulí
                  </p>
<p>
<span className="text-white font-medium">Fondo:</span>
                    Sándalo, Haba Tonka
                  </p>
</div>
<p className="text-sm font-serif italic text-neutral-400 mb-10 max-w-xs leading-relaxed">
                  Elegancia nocturna sin esfuerzo, diseñada para conquistar.
                </p>
<button className="px-10 py-4 bg-white text-dark text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors duration-500">
                  Descubrir aroma
                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-3xl tracking-tight mb-2 font-light group-hover:text-gold transition-colors duration-500">
                  Nuit Royale
                </h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">
                  Extrait de Parfum · 100ml
                </p>
</div>
<p className="text-lg font-light tracking-wide text-gold">€295</p>
</div>
</div>
</div>
<div className="mt-32 text-center reveal">
<a className="inline-block border-b border-white/20 pb-2 text-[10px] uppercase tracking-[0.3em] text-white hover:text-gold hover:border-gold transition-all duration-500" href="#">
            Explorar la Colección Completa
          </a>
</div>
</div>
</section>

<section className="relative py-48 md:py-64 flex items-center justify-center px-6 overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-parallax scale-110" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1608528577891-eb05eb82e811?auto=format&amp', transform: 'translateZ(0)'}}></div>
<div className="absolute inset-0 bg-dark/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
<div className="relative z-10 text-center max-w-5xl mx-auto reveal">
<iconify-icon className="text-gold mb-12 mx-auto animate-pulse" icon="solar:stars-linear" strokeWidth="1" width="40"></iconify-icon>
<h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter leading-[1.2] font-light italic mb-12 drop-shadow-2xl">
          "Cada fragancia deja una memoria imposible de olvidar."
        </h2>
<p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          Le Manifeste
        </p>
<div className="mt-16 w-[1px] h-32 bg-gradient-to-b from-gold/50 to-transparent mx-auto"></div>
</div>
</section>

<section className="py-32 md:py-48 bg-cream px-6 border-t border-b border-dark/5">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-24 md:mb-32 reveal">
<span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6 block font-medium">
            Le Cercle Privé
          </span>
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter text-dark font-light">
            Voces de la Excelencia
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
<div className="flex flex-col items-center text-center reveal p-8 hover:bg-white hover:shadow-2xl transition-all duration-700 ease-out cursor-default">
<iconify-icon className="text-gold/50 mb-8" icon="solar:quote-left-linear" strokeWidth="1" width="32"></iconify-icon>
<p className="text-sm md:text-base text-neutral-600 font-serif italic leading-relaxed mb-10">
              "Éclipse Noir no es un perfume, es una declaración de intenciones.
              La profundidad del Oud se mantiene viva durante horas. Una obra
              maestra contemporánea."
            </p>
<p className="text-[10px] font-sans uppercase tracking-[0.2em] text-dark mt-auto font-medium">
              Sophie L.
              <span className="text-neutral-400 font-light block mt-2">
                Paris, FR
              </span>
</p>
</div>
<div className="flex flex-col items-center text-center reveal reveal-delay-1 p-8 hover:bg-white hover:shadow-2xl transition-all duration-700 ease-out cursor-default">
<iconify-icon className="text-gold/50 mb-8" icon="solar:quote-left-linear" strokeWidth="1" width="32"></iconify-icon>
<p className="text-sm md:text-base text-neutral-600 font-serif italic leading-relaxed mb-10">
              "La elegancia embotellada. Cada vez que uso Fleur Impériale, el
              mundo se detiene. Es sutil, misterioso y absolutamente refinado."
            </p>
<p className="text-[10px] font-sans uppercase tracking-[0.2em] text-dark mt-auto font-medium">
              Marc E.
              <span className="text-neutral-400 font-light block mt-2">
                Londres, UK
              </span>
</p>
</div>
<div className="flex flex-col items-center text-center reveal reveal-delay-2 p-8 hover:bg-white hover:shadow-2xl transition-all duration-700 ease-out cursor-default">
<iconify-icon className="text-gold/50 mb-8" icon="solar:quote-left-linear" strokeWidth="1" width="32"></iconify-icon>
<p className="text-sm md:text-base text-neutral-600 font-serif italic leading-relaxed mb-10">
              "El diseño del frasco y el packaging anticipan la magia. Velvet
              Ambre tiene una calidez que envuelve. Arte olfativo en estado
              puro."
            </p>
<p className="text-[10px] font-sans uppercase tracking-[0.2em] text-dark mt-auto font-medium">
              Elena V.
              <span className="text-neutral-400 font-light block mt-2">
                Milán, IT
              </span>
</p>
</div>
</div>
</div>
</section>

<footer className="bg-dark text-white pt-32 pb-12 px-6">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 mb-32">
<div className="md:col-span-4">
<a className="font-serif text-3xl tracking-tighter uppercase font-light block mb-8 text-white" href="#">
            L. Nobleza
          </a>
<p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm tracking-wide">
            Maison de Parfum Parisienne. Artesanía, exclusividad y vanguardia
            olfativa. Creado para quienes dejan huella.
          </p>
</div>
<div className="md:col-span-2">
<h4 className="text-[9px] uppercase tracking-[0.3em] text-gold mb-8">
            Boutique
          </h4>
<ul className="space-y-5 text-xs font-light text-neutral-400 tracking-wide">
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                La Colección
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Ediciones Limitadas
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Discovery Set
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Tarjetas Regalo
              </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-[9px] uppercase tracking-[0.3em] text-gold mb-8">
            Maison
          </h4>
<ul className="space-y-5 text-xs font-light text-neutral-400 tracking-wide">
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Nuestra Historia
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Le Atelier
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Materias Primas
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300" href="#">
                Concierge
              </a>
</li>
</ul>
</div>
<div className="md:col-span-4">
<h4 className="text-[9px] uppercase tracking-[0.3em] text-gold mb-8">
            Le Cercle Privé
          </h4>
<p className="text-xs text-neutral-400 font-light mb-6 tracking-wide leading-relaxed">
            Suscríbase para acceder a prelanzamientos, ediciones numeradas y
            eventos privados.
          </p>
<form className="flex items-end mt-4 group">
<input className="bg-transparent border-b border-neutral-700 py-3 px-0 text-sm focus:outline-none focus:border-gold w-full text-white placeholder:text-neutral-600 transition-colors" placeholder="Su correo electrónico" required="" type="email"/>
<button className="ml-4 text-neutral-500 group-hover:text-gold transition-colors duration-300 pb-3" type="submit">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1" width="24"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="max-w-[1400px] mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] text-neutral-500 uppercase tracking-[0.2em]">
<p>© 2026 Parfums La Nobleza. Todos los derechos reservados.</p>
<div className="flex space-x-8 mt-6 md:mt-0">
<a className="hover:text-gold transition-colors duration-300" href="#">
            Instagram
          </a>
<a className="hover:text-gold transition-colors duration-300" href="#">
            Pinterest
          </a>
<a className="hover:text-gold transition-colors duration-300" href="#">
            Privacidad
          </a>
</div>
</div>
</footer>



    </>
  );
}
