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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
},
pearl: '#Fdfcfb',
champagne: '#E5D3B3',
}
}
}
}



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
      

<header className="fixed w-full top-0 z-50 transition-all duration-500 bg-stone-950/20 backdrop-blur-sm border-b border-white/10 text-white">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">

<div className="md:hidden flex-1">
<iconify-icon className="text-2xl cursor-pointer" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>

<nav className="hidden md:flex flex-1 gap-8 text-xs uppercase tracking-[0.15em] font-medium opacity-80">
<a className="hover:opacity-100 transition-opacity" href="#shop">Каталог</a>
<a className="hover:opacity-100 transition-opacity" href="#story">История</a>
<a className="hover:opacity-100 transition-opacity" href="#ai-assistant">AI Подбор</a>
</nav>

<div className="flex-1 flex justify-center text-center">
<a className="text-2xl md:text-3xl font-serif tracking-[0.3em] uppercase" href="#">Rayhon</a>
</div>

<div className="flex-1 flex justify-end gap-5 md:gap-6 items-center opacity-80">
<a className="hover:opacity-100 transition-opacity flex items-center hidden sm:block text-xs uppercase tracking-[0.1em] mr-2" href="#">УЗ / РУ</a>
<button className="hover:opacity-100 transition-opacity"><iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="hover:opacity-100 transition-opacity"><iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon></button>
<button className="hover:opacity-100 transition-opacity relative">
<iconify-icon className="text-xl" icon="solar:bag-2-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-white text-stone-950 text-[10px] w-3.5 h-3.5 flex items-center justify-center rounded-full">2</span>
</button>
</div>
</div>
</header>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-stone-950">

<img alt="Rayhon Cinematic" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 origin-center animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/80"></div>
<div className="relative z-10 flex flex-col items-center text-center text-white px-6 mt-20 max-w-5xl mx-auto">
<span className="text-xs uppercase tracking-[0.3em] mb-6 opacity-70">Luxury Beauty</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter font-normal mb-8 leading-[1.1]">Красота, вдохновленная<br/>совершенством.</h1>
<p className="text-sm md:text-base tracking-wide font-light mb-12 max-w-xl opacity-80">
                Премиальная косметика нового поколения. Создана подчеркнуть вашу уникальность.
            </p>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
<a className="bg-white text-stone-950 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-stone-200 transition-colors w-full sm:w-auto text-center" href="#shop">
                    Купить сейчас
                </a>
<a className="glass-panel text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center" href="#story">
                    Смотреть коллекцию
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
<span className="text-[10px] uppercase tracking-[0.2em] text-white mb-2">Scroll</span>
<div className="w-[1px] h-12 bg-white/30 overflow-hidden">
<div className="w-full h-1/2 bg-white animate-[bounce_2s_infinite]"></div>
</div>
</div>
</section>

<div className="w-full bg-stone-900 text-stone-300 py-3 overflow-hidden border-t border-b border-stone-800">
<div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] text-xs tracking-[0.1em] uppercase">
<span className="mx-8">Cruelty Free</span> <span className="mx-8">•</span>
<span className="mx-8">Premium Ingredients</span> <span className="mx-8">•</span>
<span className="mx-8">Dermatologically Tested</span> <span className="mx-8">•</span>
<span className="mx-8">Next Gen Beauty</span> <span className="mx-8">•</span>
<span className="mx-8">Cruelty Free</span> <span className="mx-8">•</span>
<span className="mx-8">Premium Ingredients</span> <span className="mx-8">•</span>
<span className="mx-8">Dermatologically Tested</span> <span className="mx-8">•</span>
<span className="mx-8">Next Gen Beauty</span>
</div>
</div>

<section className="py-24 md:py-40 px-6 bg-stone-50" id="story">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/5] bg-stone-200 overflow-hidden relative">
<img alt="Rayhon Founder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-100 -z-10"></div>
<div className="absolute -top-6 -left-6 w-32 h-32 border border-stone-200 -z-10"></div>
</div>
<div className="w-full lg:w-1/2 flex flex-col justify-center">
<span className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-6 block">Философия</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter font-normal mb-10 text-stone-900 leading-tight">
                    Искусство быть<br/>собой.
                </h2>
<blockquote className="text-xl md:text-2xl font-serif italic text-stone-600 mb-10 border-l border-stone-300 pl-8 leading-relaxed">
                    "Я создала эту коллекцию для женщин, которые хотят чувствовать себя уверенно каждый день. Макияж — это не маска, это способ подчеркнуть ваш внутренний свет."
                </blockquote>
<p className="text-sm leading-loose text-stone-500 mb-12 max-w-lg">
                    Каждый продукт в нашей линии RAYHON — это результат многолетних поисков идеальных текстур, стойкости и оттенков. Мы используем передовые формулы и премиальные ингредиенты, чтобы уход и макияж сливались воедино.
                </p>
<div className="flex items-center gap-6">
<div className="font-serif italic text-3xl text-stone-800 tracking-wider">Rayhon</div>
<div className="h-[1px] flex-1 bg-stone-200 max-w-[100px]"></div>
<span className="text-xs tracking-widest uppercase text-stone-400">Основатель</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-stone-100">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative aspect-square overflow-hidden bg-stone-200 block" href="#">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-2xl font-serif tracking-tight mb-1">Лицо</h3>
<span className="text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">Смотреть <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group relative aspect-square overflow-hidden bg-stone-200 block md:col-span-2" href="#">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 text-stone-900">
<h3 className="text-2xl font-serif tracking-tight mb-1">Губы</h3>
<span className="text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">Смотреть <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-50" id="shop">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-4 block">Коллекция</span>
<h2 className="text-3xl md:text-4xl font-serif tracking-tighter font-normal text-stone-900">Культовые продукты</h2>
</div>
<a className="text-xs uppercase tracking-[0.1em] text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors" href="#">
                    Весь каталог
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
<img className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4">
<span className="bg-stone-900 text-white text-[9px] uppercase tracking-widest px-2 py-1">Bestseller</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-stone-900/90 backdrop-blur-sm text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-950 transition-colors">
                                Добавить в корзину
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Flawless Filter Foundation</h3>
<p className="text-xs text-stone-500 mt-1">Тональная основа с эффектом сияния</p>
</div>
<span className="text-sm font-medium text-stone-900 whitespace-nowrap ml-4">$ 65.00</span>
</div>

<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#f1e0d6] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#e8cbb8] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#d2a78b] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#9f6d4d] border border-stone-200"></div>
<span className="text-[10px] text-stone-400 ml-1">+12</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
<img className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-stone-900/90 backdrop-blur-sm text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-950 transition-colors">
                                Добавить в корзину
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Velvet Matte Lipstick</h3>
<p className="text-xs text-stone-500 mt-1">Матовая помада</p>
</div>
<span className="text-sm font-medium text-stone-900 whitespace-nowrap ml-4">$ 38.00</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#8b2332] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#bd5c5c] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#cca299] border border-stone-200"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
<img className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-stone-900/90 backdrop-blur-sm text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-950 transition-colors">
                                Добавить в корзину
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Liquid Silk Blush</h3>
<p className="text-xs text-stone-500 mt-1">Жидкие румяна</p>
</div>
<span className="text-sm font-medium text-stone-900 whitespace-nowrap ml-4">$ 32.00</span>
</div>
<div className="flex gap-1.5 mt-3">
<div className="w-3 h-3 rounded-full bg-[#e8a5a5] border border-stone-200"></div>
<div className="w-3 h-3 rounded-full bg-[#d98b8b] border border-stone-200"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
<img className="object-cover w-full h-full mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-stone-900/90 backdrop-blur-sm text-white py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-950 transition-colors">
                                Добавить в корзину
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Lash Architect Mascara</h3>
<p className="text-xs text-stone-500 mt-1">Тушь для объема и удлинения</p>
</div>
<span className="text-sm font-medium text-stone-900 whitespace-nowrap ml-4">$ 28.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-950 text-white px-6 relative overflow-hidden" id="ai-assistant">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-800 rounded-full blur-[150px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-800 rounded-full blur-[120px] opacity-30 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-[1400px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

<div className="w-full lg:w-1/2">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-champagne text-xl" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs uppercase tracking-[0.2em] text-champagne">Инновации</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tighter font-normal mb-8">
                    AI Beauty<br/>Assistant
                </h2>
<p className="text-sm text-stone-400 leading-loose mb-10 max-w-lg">
                    Используйте возможности искусственного интеллекта для подбора идеального ухода и оттенков. Наш виртуальный консультант проанализирует тон вашей кожи с кинематографичной точностью.
                </p>
<div className="space-y-6 mb-12">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Виртуальная примерка (AR)</h4>
<p className="text-xs text-stone-500 leading-relaxed">Попробуйте оттенки помад и тональных основ прямо на себе с помощью камеры смартфона.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Color Match Technology</h4>
<p className="text-xs text-stone-500 leading-relaxed">Алгоритм сканирует подтон кожи и рекомендует средства со 100% точностью попадания.</p>
</div>
</div>
</div>
<button className="bg-white text-stone-950 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-stone-200 transition-colors">
                    Начать сканирование
                </button>
</div>

<div className="w-full lg:w-1/2 relative">

<div className="aspect-[3/4] max-w-md mx-auto relative rounded-[2.5rem] overflow-hidden glass-panel border border-white/10 p-2">

<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-stone-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40"></div>

<div className="absolute inset-8 border border-white/20 rounded-xl">
<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-champagne rounded-tl-xl"></div>
<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-champagne rounded-tr-xl"></div>
<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-champagne rounded-bl-xl"></div>
<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-champagne rounded-br-xl"></div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-champagne shadow-[0_0_15px_rgba(229,211,179,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
</div>

<div className="absolute bottom-8 left-0 w-full px-8 text-center">
<iconify-icon className="text-4xl text-white mb-3" icon="solar:face-scan-circle-linear"></iconify-icon>
<p className="text-[10px] tracking-[0.2em] uppercase text-white/80">Анализ текстуры кожи...</p>
</div>
</div>
</div>

<div className="absolute top-12 -left-8 glass-panel px-4 py-3 rounded-lg flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
<div className="w-6 h-6 rounded-full bg-[#f1e0d6]"></div>
<span className="text-xs font-medium">Оттенок 12W</span>
</div>
<div className="absolute bottom-24 -right-6 glass-panel px-4 py-3 rounded-lg flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse]">
<iconify-icon className="text-champagne" icon="solar:droplet-linear"></iconify-icon>
<span className="text-xs font-medium">Склонность к сухости</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 px-6">
<div className="max-w-[1400px] mx-auto text-center mb-16">
<h2 className="text-3xl font-serif tracking-tighter mb-4">#RayhonBeauty</h2>
<p className="text-sm text-stone-500">Присоединяйтесь к нашему комьюнити</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-[1400px] mx-auto">
<a className="group relative aspect-square overflow-hidden bg-stone-200" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-stone-200" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-stone-200 hidden md:block" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</a>
<a className="group relative aspect-square overflow-hidden bg-stone-200 hidden md:block" href="#">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:instagram-linear"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-200/50">
<div className="max-w-[800px] mx-auto text-center">
<iconify-icon className="text-4xl text-stone-900 mb-6" icon="solar:crown-star-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif tracking-tighter mb-6">Rayhon Beauty Club</h2>
<p className="text-sm text-stone-600 mb-10 leading-relaxed max-w-lg mx-auto">
                Станьте частью эксклюзивного клуба. Накапливайте баллы, получайте ранний доступ к лимитированным коллекциям и приглашения на закрытые мероприятия.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-stone-900 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-stone-800 transition-colors">
                    Регистрация
                </button>
<button className="border border-stone-900 text-stone-900 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-stone-900 hover:text-white transition-colors">
                    Войти
                </button>
</div>
</div>
</section>

<footer className="bg-stone-950 text-white pt-24 pb-12 px-6 border-t border-stone-900 mt-auto">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div className="lg:col-span-2">
<div className="text-3xl font-serif tracking-[0.3em] uppercase mb-8">Rayhon</div>
<p className="text-sm text-stone-400 mb-8 max-w-sm">
                    Подпишитесь на рассылку, чтобы первыми узнавать о новинках, секретах красоты и эксклюзивных предложениях.
                </p>
<form className="flex border-b border-stone-700 pb-2 max-w-md">
<input className="bg-transparent w-full text-xs tracking-[0.1em] text-white outline-none placeholder-stone-600 uppercase" placeholder="ВАШ E-MAIL" type="email"/>
<button className="text-xs uppercase tracking-[0.1em] hover:text-stone-300 transition-colors" type="submit">Подписаться</button>
</form>
</div>

<div>
<h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-stone-500">Магазин</h4>
<ul className="space-y-4 text-sm text-stone-300">
<li><a className="hover:text-white transition-colors" href="#">Лицо</a></li>
<li><a className="hover:text-white transition-colors" href="#">Губы</a></li>
<li><a className="hover:text-white transition-colors" href="#">Глаза</a></li>
<li><a className="hover:text-white transition-colors" href="#">Уход за кожей</a></li>
<li><a className="hover:text-white transition-colors" href="#">Подарочные наборы</a></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-[0.2em] mb-6 text-stone-500">Поддержка</h4>
<ul className="space-y-4 text-sm text-stone-300">
<li><a className="hover:text-white transition-colors" href="#">Доставка и оплата</a></li>
<li><a className="hover:text-white transition-colors" href="#">Возврат</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Контакты</a></li>
<li><a className="hover:text-white transition-colors" href="#">Beauty Club</a></li>
</ul>
</div>
</div>

<div className="max-w-[1400px] mx-auto pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.1em] text-stone-600">
<div>© 2024 RAYHON BEAUTY. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Условия использования</a>
</div>
<div className="flex gap-4 text-lg">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:tik-tok-linear"></iconify-icon></a>
</div>
</div>
</footer>

<style>
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
    </style>

    </>
  );
}
