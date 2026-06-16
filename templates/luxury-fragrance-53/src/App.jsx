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



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24">

<a className="font-serif text-3xl tracking-tight font-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900" href="#">
                Parfums La Nobleza
            </a>

<ul className="hidden lg:flex items-center gap-10">
<li><a className="text-xs uppercase tracking-widest font-light text-gray-500 hover:text-black transition-colors" href="#boutique">Nuestros Aromas</a></li>
<li><a className="text-xs uppercase tracking-widest font-light text-gray-500 hover:text-black transition-colors" href="#bespoke">Alquimia a Medida</a></li>
<li><a className="text-xs uppercase tracking-widest font-light text-gray-500 hover:text-black transition-colors" href="#heritage">La Herencia</a></li>
<li><a className="text-xs uppercase tracking-widest font-light text-gray-500 hover:text-black transition-colors" href="#boutiques">Boutiques</a></li>
</ul>

<div className="flex items-center gap-6">
<a className="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-widest font-light border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors" href="#bespoke">
                    Cita Privada
                </a>
<button className="lg:hidden text-gray-900">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-24 min-h-screen flex items-center bg-[#1a1412] overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#2a1b12] via-[#1a1412] to-black opacity-90"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center py-20">

<div className="lg:col-span-5 relative z-10">
<div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm amber-glow">
<img alt="Maestra Perfumista" className="w-full h-full object-cover object-center grayscale-[20%] contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 border border-white/10"></div>

<div className="absolute bottom-0 right-0 w-32 h-32 bg-[#c27c59] blur-[80px] opacity-40"></div>
</div>
</div>

<div className="lg:col-span-7 lg:pl-16 flex flex-col justify-center text-white z-10">
<p className="text-xs uppercase tracking-[0.3em] text-[#c27c59] mb-6 font-light">Colección Privada</p>
<h1 className="text-5xl lg:text-7xl font-serif tracking-tight font-normal leading-tight mb-8">
                    DESCUBRE TU<br/><i className="font-light italic text-gray-300">ESENCIA NOBLE.</i>
</h1>
<p className="text-lg lg:text-xl font-light text-gray-400 mb-12 max-w-xl leading-relaxed">
                    Un extracto de tu esencia más profunda, destilado con ingredientes de la más alta pureza. Nuestro best-seller no es un perfume, es una firma olfativa.
                </p>
<div className="flex items-center gap-8">

<a className="relative group overflow-hidden inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-widest font-light text-white bg-gradient-to-r from-[#8b5a40] via-[#c27c59] to-[#8b5a40] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 border border-[#c27c59]/50 shadow-[0_0_20px_rgba(194,124,89,0.3)]" href="#boutique">
                        Descubrir Colecciones
                    </a>

<div className="hidden sm:flex items-center gap-4 border-l border-white/20 pl-8">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<i className="text-[#c27c59]" data-lucide="flask-conical"></i>
</div>
<div>
<p className="text-sm font-light text-white">Extracción Pura</p>
<p className="text-xs font-light text-gray-500">Proceso en frío</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#faf9f6] relative border-b border-gray-200" id="heritage">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="mb-20 text-center lg:text-left">
<h2 className="text-4xl lg:text-5xl font-serif tracking-tight font-normal text-gray-900 mb-6 uppercase">
                    La Alquimia del Perfume:<br/><span className="italic font-light text-gray-500">Una Pasión Artesanal</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 flex flex-col gap-12">
<div className="prose prose-lg">
<p className="text-xl font-light text-gray-600 leading-relaxed">
                            Nuestra Alquimista crea cada mezcla con la precisión de un maestro y el corazón de un artista. A través de un proceso de destilación lento y cuidadoso, extraemos el alma pura de la naturaleza.
                        </p>
<p className="text-lg font-light text-gray-500 leading-relaxed mt-6">
                            Cada gota es un testimonio de nuestra herencia, utilizando métodos que datan de siglos atrás, refinados para la sensibilidad moderna. No hacemos fragancias; componemos sinfonías líquidas.
                        </p>
</div>

<div className="relative aspect-square w-full sm:w-3/4 overflow-hidden rounded-sm">
<img alt="Equipo de Destilación" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>

<div className="lg:col-span-7 relative">

<div className="absolute -right-12 -top-12 w-64 h-64 bg-tile-pattern opacity-50 z-0 hidden lg:block"></div>
<div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-sm group">
<img alt="Perfumista trabajando" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-10 left-10 right-10">
<p className="text-2xl font-serif tracking-tight font-normal text-white mb-2">El Arte de la Botica</p>
<p className="text-lg font-light text-gray-300">Seleccionando a mano resinas raras y absolutos florales.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] text-white relative" id="boutique">

<div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] z-0"></div>
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
<div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-[#c27c59] mb-4 font-light">Colecciones Exclusivas</p>
<h2 className="text-4xl lg:text-5xl font-serif tracking-tight font-normal uppercase">Botica de Autor</h2>
</div>
<a className="text-sm font-light uppercase tracking-widest border-b border-gray-600 pb-1 hover:border-white transition-colors flex items-center gap-2" href="#">
                    Ver Toda la Colección <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">

<div className="lg:col-span-1 border-t border-white/10 pt-8 lg:sticky lg:top-32">
<h3 className="text-lg font-serif tracking-tight font-normal mb-8 text-gray-300">Familias Olfativas</h3>
<div className="space-y-6">

<label className="custom-checkbox flex items-center gap-4 cursor-pointer group">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/30 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 transition-opacity" data-lucide="check"></i>
</div>
<div className="flex items-center gap-3 text-lg font-light text-gray-400 group-hover:text-white transition-colors">
<i data-lucide="citrus"></i> Cítrico
                            </div>
</label>
<label className="custom-checkbox flex items-center gap-4 cursor-pointer group">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/30 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 transition-opacity" data-lucide="check"></i>
</div>
<div className="flex items-center gap-3 text-lg font-light text-gray-400 group-hover:text-white transition-colors">
<i data-lucide="trees"></i> Amaderado
                            </div>
</label>
<label className="custom-checkbox flex items-center gap-4 cursor-pointer group">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/30 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 transition-opacity" data-lucide="check"></i>
</div>
<div className="flex items-center gap-3 text-lg font-light text-gray-400 group-hover:text-white transition-colors">
<i data-lucide="flower-2"></i> Floral
                            </div>
</label>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="md:col-span-2 xl:col-span-2 relative group bg-[#1a1a1a] border border-white/5 overflow-hidden rounded-sm hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2a1b12]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="aspect-[16/9] md:aspect-[2/1] w-full p-12 flex items-center justify-center relative">

<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Perfume" className="relative z-10 h-64 w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:-translate-y-4 transition-transform duration-700" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<h4 className="text-2xl font-serif tracking-tight font-normal text-white mb-2">Mancera Collection - Cedrat Boise</h4>
<p className="text-sm font-light text-gray-300 mb-6">Notas de Bergamota, Manzana, Jazmín, Almizcle.</p>
<button className="w-full py-4 border border-white/30 text-xs uppercase tracking-widest font-light text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                                Comprar Ahora
                            </button>
</div>
</div>

<div className="relative group bg-[#1a1a1a] border border-white/5 overflow-hidden rounded-sm hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="aspect-[4/5] w-full p-8 flex items-center justify-center relative">
<img alt="Perfume" className="relative z-10 h-48 w-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center">
<h4 className="text-xl font-serif tracking-tight font-normal text-white mb-4">Elixir Oud</h4>
<button className="px-6 py-2 bg-[#c27c59] text-[10px] uppercase tracking-widest font-light text-white w-full">
                                Explorar
                            </button>
</div>
</div>

<div className="relative group bg-[#1a1a1a] border border-white/5 overflow-hidden rounded-sm hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="aspect-[4/5] w-full p-8 flex items-center justify-center relative">
<img alt="Perfume" className="relative z-10 h-48 w-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center">
<h4 className="text-xl font-serif tracking-tight font-normal text-white mb-4">Rose Nobile</h4>
<button className="px-6 py-2 bg-[#c27c59] text-[10px] uppercase tracking-widest font-light text-white w-full">
                                Explorar
                            </button>
</div>
</div>

<div className="md:col-span-2 relative group bg-[#1a1a1a] border border-white/5 overflow-hidden rounded-sm hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#132621]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<div className="aspect-[2/1] w-full p-8 flex items-center justify-center relative">
<img alt="Perfume" className="relative z-10 h-56 w-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)] group-hover:-translate-y-2 transition-transform duration-700" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
<div>
<h4 className="text-2xl font-serif tracking-tight font-normal text-white mb-1">Xerjoff Niche</h4>
<p className="text-sm font-light text-gray-400">Edición Limitada</p>
</div>
<button className="px-8 py-3 border border-white/30 text-xs uppercase tracking-widest font-light text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                                Añadir
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#132621] text-white overflow-hidden" id="bespoke">

<div className="absolute inset-0 opacity-20 mix-blend-luminosity">
<img alt="Barra de Madera" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-sm shadow-2xl">
<div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
<span className="font-serif text-xl tracking-tight font-normal">Mesa de Mezcla Virtual</span>
<i className="text-gray-400" data-lucide="sliders-horizontal"></i>
</div>

<div className="flex justify-center mb-12 relative">
<div className="w-32 h-48 border border-white/20 rounded-t-full flex flex-col items-center justify-end pb-4 relative overflow-hidden bg-gradient-to-b from-transparent to-white/5">
<div className="w-16 h-16 rounded-full bg-[#c27c59]/20 blur-xl absolute bottom-4"></div>
<i className="text-[#c27c59] w-8 h-8 relative z-10" data-lucide="droplet"></i>
<div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent absolute top-0"></div>
</div>
</div>

<div className="grid grid-cols-4 gap-4">
<div className="aspect-square border border-white/10 rounded-sm bg-black/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#c27c59] transition-colors group">
<div className="w-6 h-8 bg-black rounded-t-sm border border-white/20 group-hover:border-[#c27c59]"></div>
<span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-white">Oud</span>
</div>
<div className="aspect-square border border-white/10 rounded-sm bg-black/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#c27c59] transition-colors group">
<div className="w-6 h-8 bg-black rounded-t-sm border border-white/20 group-hover:border-[#c27c59]"></div>
<span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-white">Rosa</span>
</div>
<div className="aspect-square border border-white/10 rounded-sm bg-black/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#c27c59] transition-colors group">
<div className="w-6 h-8 bg-black rounded-t-sm border border-white/20 group-hover:border-[#c27c59]"></div>
<span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-white">Vetiver</span>
</div>
<div className="aspect-square border border-white/10 border-dashed rounded-sm flex items-center justify-center text-gray-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
</div>
</div>

<div>
<h2 className="text-4xl lg:text-6xl font-serif tracking-tight font-normal uppercase mb-8 leading-tight">
                    Diseña tu propia<br/>mezcla exclusiva
                </h2>
<p className="text-xl font-light text-gray-300 mb-12 max-w-lg leading-relaxed">
                    Nuestra Consulta a Medida transforma tus deseos en un aroma único. Siéntate en nuestra barra de madera de nogal y deja que nuestra Maestra Alquimista guíe tus sentidos.
                </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors" href="#">
                    Reservar Sesión Privada
                </a>
</div>
</div>
</section>

<section className="py-32 bg-white relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-serif tracking-tight font-normal text-gray-900 uppercase mb-4">Raíces Nobles: La Esencia</h2>
<p className="text-lg font-light text-gray-500">Explora la pureza de los ingredientes crudos que definen nuestra herencia.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#1a1a1a] rounded-sm overflow-hidden mb-6 relative">
<img alt="Frasco Oscuro" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[#2a1b12]/20 mix-blend-multiply"></div>
</div>
<h3 className="text-xl font-serif tracking-tight font-normal text-gray-900 mb-2">Oud Assoluto</h3>
<p className="text-sm font-light text-gray-600 leading-relaxed">Resina preciosa añejada, profunda y animal, el corazón de nuestras mezclas más oscuras.</p>
</div>

<div className="group cursor-pointer mt-0 lg:mt-12">
<div className="aspect-[3/4] bg-[#1a1a1a] rounded-sm overflow-hidden mb-6 relative">
<img alt="Frasco Oscuro" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-red-900/10 mix-blend-multiply"></div>
</div>
<h3 className="text-xl font-serif tracking-tight font-normal text-gray-900 mb-2">Rosa Damascena</h3>
<p className="text-sm font-light text-gray-600 leading-relaxed">Pétalos destilados al amanecer para capturar la esencia floral más pura y embriagadora.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#1a1a1a] rounded-sm overflow-hidden mb-6 relative">
<img alt="Frasco Oscuro" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-green-900/10 mix-blend-multiply"></div>
</div>
<h3 className="text-xl font-serif tracking-tight font-normal text-gray-900 mb-2">Bergamota de Calabria</h3>
<p className="text-sm font-light text-gray-600 leading-relaxed">Un estallido cítrico, brillante y sofisticado, prensado en frío de cáscaras selectas.</p>
</div>

<div className="group cursor-pointer mt-0 lg:mt-12">
<div className="aspect-[3/4] bg-[#1a1a1a] rounded-sm overflow-hidden mb-6 relative">
<img alt="Frasco Oscuro" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply"></div>
</div>
<h3 className="text-xl font-serif tracking-tight font-normal text-gray-900 mb-2">Sándalo Mysore</h3>
<p className="text-sm font-light text-gray-600 leading-relaxed">Madera sagrada, cremosa y rica, que proporciona una base duradera y noble.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#faf9f6] border-t border-gray-200 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div>
<a className="font-serif text-2xl tracking-tight font-normal text-gray-900 block mb-6" href="#">Parfums La Nobleza</a>
<ul className="space-y-4 text-sm font-light text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Política de Privacidad</a></li>
<li><a className="hover:text-black transition-colors" href="#">Términos de Servicio</a></li>
<li><a className="hover:text-black transition-colors" href="#">Envíos y Devoluciones</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contacto</a></li>
</ul>
</div>

<div>
<h4 className="text-sm uppercase tracking-widest font-medium text-gray-900 mb-6">Social Media</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
</div>
</div>

<div className="relative w-full h-32 bg-gray-100 rounded-sm overflow-hidden group">
<div className="absolute inset-0 bg-tile-pattern opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<i className="w-4 h-4 text-white" data-lucide="map-pin"></i>
</div>
</div>
<p className="absolute bottom-2 left-0 w-full text-center text-[10px] uppercase tracking-widest text-gray-500 font-light">Boutique Alicante</p>
</div>

<div>
<h4 className="text-sm uppercase tracking-widest font-medium text-gray-900 mb-2">Newsletter VIP</h4>
<p className="text-sm font-light text-gray-500 mb-6">Recibe novedades exclusivas y acceso a colecciones privadas.</p>
<form className="flex flex-col gap-4">
<input className="bg-transparent border-b border-gray-300 py-2 text-lg font-light text-gray-900 placeholder-gray-400 focus:outline-none focus:border-black transition-colors rounded-none" placeholder="Tu correo electrónico" type="email"/>
<button className="bg-[#132621] text-white py-3 text-xs uppercase tracking-widest font-light hover:bg-black transition-colors w-full mt-2" type="button">
                            Suscribirse
                        </button>
</form>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-400">
<p>© 2024 Parfums La Nobleza. Todos los derechos reservados.</p>
<div className="flex gap-4">
<span>Diseñado con precisión</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
