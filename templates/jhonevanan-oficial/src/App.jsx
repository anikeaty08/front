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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#0B0F1A',
surface: 'rgba(255, 255, 255, 0.03)',
surfaceHover: 'rgba(255, 255, 255, 0.06)',
borderLight: 'rgba(255, 255, 255, 0.08)',
textMuted: '#A0A3BD',
accent: '#7B61FF',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Inicializar iconos Lucide
        lucide.createIcons();
    
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
      

<div className="fixed blur-[150px] pointer-events-none -z-10 opacity-20 w-[50%] h-[50%] rounded-full top-[-20%] left-[-10%]"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[50%] bg-blue-900 opacity-20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed w-full z-50 glass-panel border-b-0 border-b borderLight">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-4xl font-semibold tracking-wide w-50 max-w-4xl">Jhon Evanan</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-textMuted hover:text-white transition-colors text-sm" href="#inicio">Inicio</a>
<a className="text-textMuted hover:text-white transition-colors text-sm" href="#sobre-mi">Sobre mí</a>
<a className="text-sm text-textMuted hover:text-white transition-colors" href="#servicios">Servicios</a>
</div>
<button className="hover:opacity-90 transition-opacity glow-btn hidden md:block text-sm font-medium text-white bg-gradient-to-r from-accent to-blue-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 cursor-pointer" onclick="window.location.href='https://wa.me/51935270310?text=Hola%20John,%20vi%20tu%20p%C3%A1gina%20y%20me%20llam%C3%B3%20la%20atenci%C3%B3n.%20Me%20gustar%C3%ADa%20conversar%20contigo%20cuando%20tengas%20un%20momento.'" role="button">
                Contáctame
            </button>
<button className="md:hidden text-textMuted">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="scroll-mt-20 lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" id="inicio">
<div className="grid lg:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col items-start gap-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel borderLight">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="text-sm text-textMuted">Asesor Inmobiliario Premium</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium tracking-tight">
                    Encuentra tu hogar con asesoría
                    <span className="bg-gradient-to-r from-accent to-blue-400 text-gradient">profesional.</span>
</h1>
<p className="text-lg text-textMuted max-w-lg leading-relaxed">
                    Desbloquea el potencial de tu inversión inmobiliaria con estrategias basadas en datos. Convierto
                    visitantes en compradores y búsquedas en hogares.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="sm:w-auto hover:opacity-90 transition-all glow-btn flex gap-2 cursor-pointer text-base font-medium text-white bg-gradient-to-r from-accent to-blue-600 w-full rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://wa.me/51935270310?text=Hola%20John,%20vi%20tu%20p%C3%A1gina%20y%20me%20llam%C3%B3%20la%20atenci%C3%B3n.%20Me%20gustar%C3%ADa%20conversar%20contigo%20cuando%20tengas%20un%20momento.'" role="button">
                            Hablar por WhatsApp
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<a className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white hover:bg-surface transition-all flex items-center justify-center gap-2 glass-panel" href="#propiedades">
<i className="w-5 h-5 text-accent" data-lucide="play-circle" strokeWidth="1.5"></i>
                            Ver propiedades
                        </a>
</div>
<div className="flex items-center gap-4 pt-4 border-t border-borderLight w-full sm:w-auto">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36a3810d-32f2-41bc-9279-8596d23d5ef5_320w.webp"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-textMuted text-sm font-extrabold mt-1">+1000 familias felices</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:ml-auto">
<div className="-z-10 bg-gradient-to-tr from-accent/20 to-transparent rounded-3xl absolute top-0 right-0 bottom-0 left-0 blur-xl translate-x-4 translate-y-4">
</div>
<img alt="Modern Home" className="border-borderLight w-full h-full object-cover border rounded-3xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc02dd1a-98ce-4d1f-a86a-9b415d38c364_1600w.png"/>

<div className="absolute top-8 -left-8 lg:-left-12 glass-panel p-4 rounded-2xl flex items-center gap-4 shadow-xl animate-[bounce_4s_infinite]">
<div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div className="">
<p className="text-textMuted text-xs font-extrabold text-zinc-50">Ventas cerradas</p>
<p className="text-xl font-medium tracking-tight">+S/760K</p>
</div>
</div>

<div className="absolute bottom-12 -right-4 lg:-right-8 glass-panel p-4 rounded-2xl flex items-center gap-3 shadow-xl">
<img alt="Agent" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50ef8e22-a096-4153-9fe3-c3525a1e8dba_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-base font-medium">4.9</span>
<i className="w-3 h-3 text-yellow-500 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-textMuted text-xs text-zinc-50">Asesor Top 20%</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-borderLight pt-10 pb-10">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<p className="text-textMuted text-sm text-center mb-8">Desarrolladoras y marcas que confían en mi gestión</p>
<div className="flex flex-wrap gap-8 md:gap-16 hover:grayscale-0 transition-all duration-500 opacity-50 grayscale gap-x-8 gap-y-8 items-center justify-center">
<div className="flex items-center gap-2"><img alt="Inmobi Logo" className="h-20 object-cover rounded-md scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2e78035-349a-4c14-9bd6-0ea526e4b852_1600w.png"/></div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center"><img alt="Constructa Logo" className="-translate-x-8 -translate-y-3 -translate-y-4 opacity-90 w-35 h-24 object-cover bg-center rounded-md relative right-4 translate-x-12 scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7c4b8da-020f-4c76-a4a7-4e92c2b10e6a_320w.png"/></div>
<div className="flex items-center gap-2"></div>
<div className="flex items-center gap-2"></div>
<div className="flex items-center gap-2 hidden md:flex"></div>
</div>
</div>
</section>

<section className="scroll-mt-20 pt-24 pr-6 pb-24 pl-6" id="sobre-mi">
<div className="grid lg:grid-cols-2 gap-16 -translate-x-2 max-w-7xl mr-auto ml-auto translate-y-1 gap-x-16 gap-y-16 items-center">
<div className="w-full max-w-md mr-auto ml-auto relative">
<img alt="Asesor" className="aspect-square border-borderLight w-ful max-w-full max-h-96 object-cover border rounded-2xl pt-- pb-- shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63b753c8-2f7c-459c-a060-9db3cbd180a6_800w.jpg"/>
<div className="absolute -top-6 -right-6 glass-panel p-6 rounded-2xl flex flex-col items-center justify-center border-t border-l border-white/20 shadow-2xl">
<span className="text-accent text-4xl font-medium tracking-tight mb-1">2+</span>
<span className="text-xs text-textMuted uppercase tracking-wider text-center leading-tight">Años de<br/>Experiencia</span>
</div>
</div>
<div className="flex flex-col gap-6">
<span className="text-accent text-sm tracking-widest uppercase">Sobre el asesor</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                    Personas reales entregando <span className="text-textMuted">resultados reales.</span>
</h2>
<p className="text-textMuted leading-relaxed text-lg">
                    En el mercado inmobiliario actual, no basta con mostrar casas. Soy un profesional apasionado que cree en el poder de la estrategia analítica combinada con un trato excepcionalmente humano para transformar decisiones complejas en transacciones seguras.
                </p>
<div className="mt-4 flex flex-col gap-6">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0 text-accent">
<i data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-lg font-medium mb-1 tracking-tight">Marketing Basado en Datos</h3>
<p className="text-sm text-textMuted leading-relaxed">No adivinamos. Usamos análisis de mercado avanzado para fijar precios precisos y encontrar al comprador ideal en tiempo récord.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0 text-accent">
<i data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-lg font-medium mb-1 tracking-tight">Acompañamiento Legal y Financiero</h3>
<p className="text-sm text-textMuted leading-relaxed">Protegemos tu patrimonio en cada etapa, asegurando que el proceso de compra o venta en Perú sea transparente y sin estrés.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-20 py-24 px-6 bg-surface/20 border-y border-borderLight relative" id="servicios">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="text-accent text-sm tracking-widest uppercase mb-4">Servicios Destacados</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center max-w-2xl mb-4 leading-tight">
                Soluciones inmobiliarias con tecnología creativa
            </h2>
<p className="text-lg text-textMuted text-center max-w-xl mb-16">
                Estrategias integrales diseñadas para ayudarte a comprar, vender o invertir en el momento exacto.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

<div className="glass-panel hover:-translate-y-2 transition-transform duration-300 group cursor-pointer rounded-2xl pt-8 pr-8 pb-8 pl-8" onclick="window.location.href='https://wa.me/p/26382055871411384/51935270310'" role="button">
<div className="w-12 h-12 rounded-xl bg-surface border border-borderLight flex items-center justify-center mb-6 text-textMuted group-hover:text-accent group-hover:border-accent/50 transition-colors">
<i data-lucide="message-square-more" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Asesoría Personalizada</h3>
<p className="text-textMuted leading-relaxed min-h-[60px] text-sm mb-6">Evaluación experta adaptada a tus objetivos de vida e inversión inmobiliaria para descubrir oportunidades ocultas.</p>
<span className="text-sm font-medium text-textMuted group-hover:text-white flex items-center gap-2 transition-colors">
                        Saber más <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>

<div className="glass-panel hover:-translate-y-2 transition-transform duration-300 group cursor-pointer rounded-2xl pt-8 pr-8 pb-8 pl-8" onclick="window.location.href='https://wa.me/p/26533422482961816/51935270310'" role="button">
<div className="w-12 h-12 rounded-xl bg-surface border border-borderLight flex items-center justify-center mb-6 text-textMuted group-hover:text-accent group-hover:border-accent/50 transition-colors">
<i data-lucide="search" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Búsqueda de Propiedades</h3>
<p className="text-sm text-textMuted mb-6 leading-relaxed min-h-[60px]">Filtramos el mercado peruano para encontrar inmuebles que cumplan estrictamente con tus requisitos y presupuesto.</p>
<span className="text-sm font-medium text-textMuted group-hover:text-white flex items-center gap-2 transition-colors">
                        Saber más <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>

<div className="glass-panel hover:-translate-y-2 transition-transform duration-300 group cursor-pointer rounded-2xl pt-8 pr-8 pb-8 pl-8" onclick="window.location.href='https://wa.me/p/26728706510056974/51935270310'" role="button">
<div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6 text-accent">
<i data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Venta Acelerada</h3>
<p className="text-sm text-textMuted mb-6 leading-relaxed min-h-[60px]">Maximizamos el ROI con campañas de marketing digital segmentadas que llegan a la audiencia compradora correcta.</p>
<span className="text-sm font-medium text-white flex items-center gap-2">
                        Saber más <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>

<div className="glass-panel hover:-translate-y-2 transition-transform duration-300 group cursor-pointer rounded-2xl pt-8 pr-8 pb-8 pl-8" onclick="window.location.href='https://wa.me/p/26271871435767795/51935270310'" role="button">
<div className="w-12 h-12 rounded-xl bg-surface border border-borderLight flex items-center justify-center mb-6 text-textMuted group-hover:text-accent group-hover:border-accent/50 transition-colors">
<i data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Gestión Documental</h3>
<p className="text-sm text-textMuted mb-6 leading-relaxed min-h-[60px]">Nos encargamos de todo el papeleo notarial y registral, construyendo confianza y legalidad en cada firma.</p>
<span className="text-sm font-medium text-textMuted group-hover:text-white flex items-center gap-2 transition-colors">
                        Saber más <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</div>
</div>
</section>


<section className="py-24 px-6 bg-[#070A12]">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="text-accent text-sm tracking-widest uppercase mb-4">Testimonios</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-4 leading-tight">
                No confíes solo en mis palabras
            </h2>
<p className="text-lg text-textMuted text-center max-w-xl mb-16">
                Escucha a las familias e inversores que ya escalaron su patrimonio con nuestra ayuda.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="glass-panel p-8 rounded-2xl relative">
<div className="absolute -top-3 right-8 text-6xl text-surface font-serif">"</div>
<div className="flex text-yellow-500 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-textMuted leading-relaxed mb-8 italic">
                        "Transformó completamente nuestra búsqueda. El equipo es profesional, creativo y se guía por datos. Vendimos nuestro departamento antiguo y compramos la casa soñada en solo 3 meses."
                    </p>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<img alt="Sarah" className="w-12 h-12 rounded-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="">
<h4 className="text-base font-medium">Sara Rojas</h4>
<p className="text-textMuted text-xs">Propietaria en Ica</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative bg-surfaceHover border-accent/20">
<div className="absolute -top-3 right-8 text-6xl text-surface font-serif">"</div>
<div className="flex text-yellow-500 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-white leading-relaxed mb-8 italic">
                        "El mejor asesor con el que hemos trabajado. Su atención al detalle y capacidad de negociar a nuestro favor no tiene igual. Altamente recomendado para cualquier inversión inmobiliaria."
                    </p>
<div className="flex items-center gap-4">
<img alt="David" className="w-12 h-12 rounded-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="">
<h4 className="text-base font-medium">David Vivama</h4>
<p className="text-xs text-textMuted">Inversionista Inmobiliario</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative">
<div className="absolute -top-3 right-8 text-6xl text-surface font-serif">"</div>
<div className="flex text-yellow-500 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-textMuted leading-relaxed mb-8 italic">
                        "Quedé impresionado por los conceptos creativos para presentar mi propiedad. No solo pusieron un letrero; construyeron una estrategia que resonó con el comprador perfecto."
                    </p>
<div className="flex items-center gap-4">
<img alt="Emily" className="w-12 h-12 object-cover rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8434c85-a821-467d-8899-e9f0d5e32184_320w.webp"/>
<div className="">
<h4 className="text-base font-medium">Emily Rodríguez</h4>
<p className="text-xs text-textMuted">Vendedora en San Borja</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#1E153A] via-[#331C71] to-[#14102C] border border-white/10 p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent opacity-30 blur-[100px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
                    Construyamos el puente entre<br/>tu marca y tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A58BFF] to-[#D0C2FF]">nuevo hogar.</span>
</h2>
<p className="text-lg text-white/70 max-w-2xl mr-auto mb-16 ml-auto">He ayudado a miles de familias a asegurar su futuro. Únete a la red de clientes satisfechos y da el siguiente paso hoy mismo.</p>

<div className="grid grid-cols-3 gap-8 w-full max-w-2xl mx-auto mb-12 border-b border-white/10 pb-12">
<div className="">
<p className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-2">1000+</p>
<p className="text-xs text-white/60 tracking-widest uppercase">Propiedades<br/>Vendidas</p>
</div>
<div className="border-x border-white/10">
<p className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-2">S/1.3M+</p>
<p className="text-xs text-white/60 tracking-widest uppercase">Ahorro a<br/>Clientes</p>
</div>
<div className="">
<p className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">4.9</p>
<p className="text-xs text-white/60 tracking-widest uppercase">Rating de<br/>Clientes</p>
</div>
</div>
<button className="text-background hover:bg-gray-100 transition-colors text-base font-medium bg-white rounded-full pt-4 pr-10 pb-4 pl-10 shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer" onclick="window.location.href='https://wa.me/51935270310?text=Hola%20John,%20vi%20tu%20p%C3%A1gina%20y%20me%20llam%C3%B3%20la%20atenci%C3%B3n.%20Me%20gustar%C3%ADa%20conversar%20contigo%20cuando%20tengas%20un%20momento.'" role="button">
                    Contactar ahora
                </button>
</div>
</div>
</section>

<footer className="border-borderLight bg-[#05070D] border-t pt-20 pr-6 pb-10 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight">Jhon Evanan</span>
</div>
<p className="text-sm text-textMuted leading-relaxed pr-4">
                    Asesoría inmobiliaria premium en Perú. Ayudamos a personas a crecer con estrategias creativas e integrales. Hagamos algo asombroso juntos.
                </p>
<div className="flex items-center gap-4 mt-2">
<a className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-textMuted hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-textMuted hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-textMuted hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="">
<h4 className="text-base font-medium mb-6">Enlaces Rápidos</h4>
<ul className="flex flex-col gap-4 text-sm text-textMuted">
<li className=""><a className="hover:text-accent transition-colors" href="#sobre-mi">Sobre mí</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#servicios">Servicios</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#propiedades">Portafolio</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Precios referenciales</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="#">Contacto</a></li>
</ul>
</div>

<div className="">
<h4 className="text-base font-medium mb-6">Nuestros Servicios</h4>
<ul className="flex flex-col gap-4 text-sm text-textMuted">
<li className=""><a className="hover:text-accent transition-colors" href="https://wa.me/p/26533422482961816/51935270310">Análisis de Mercado</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="https://wa.me/p/26728706510056974/51935270310">Marketing de Propiedades</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="https://wa.me/p/26271871435767795/51935270310">Gestión Legal Inmobiliaria</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="https://wa.me/p/26382055871411384/51935270310">Asesoría de Inversión</a></li>
<li className=""><a className="hover:text-accent transition-colors" href="https://wa.me/p/26724455673806641/51935270310">Desarrollo de Proyectos</a></li>
</ul>
</div>

<div className="">
<h4 className="text-base font-medium mb-6">Contáctanos</h4>
<ul className="flex flex-col gap-4 text-sm text-textMuted">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="">Calle Gladiolos # 229, Ica, Peru</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<span className="">+51 935270310</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span className="">jhonevananbussiness@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-borderLight flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-textMuted text-xs">© 2024 Jhon Evanan. Todos los derechos reservados.</p>
<div className="flex gap-4 text-xs text-textMuted">
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
</div>
</div>
</footer>


    </>
  );
}
