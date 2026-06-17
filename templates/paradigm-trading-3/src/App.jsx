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
},
colors: {
background: '#0a0a0a',
surface: '#111111',
border: 'rgba(255, 255, 255, 0.05)',
primary: '#10B981', // Neon Money Green
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function(){var slides=document.getElementById('reviews-slides');var dots=document.querySelectorAll('.reviews-dot');var cards=document.querySelectorAll('.reviews-card');var total=3;var cur=0;function show(i){cur=i;slides.style.transform='translateX(-'+(i*100)+'%)';dots.forEach(function(d,di){if(di===i){d.className='reviews-dot w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#10B981] transition-all duration-300';}else{d.className='reviews-dot w-2.5 h-2.5 rounded-full bg-neutral-700 transition-all duration-300';}});cards.forEach(function(c,ci){if(ci===i){c.classList.add('shadow-[0_0_40px_rgba(16,185,129,0.15)]','border-primary/30');c.classList.remove('border-white/10');}else{c.classList.remove('shadow-[0_0_40px_rgba(16,185,129,0.15)]','border-primary/30');c.classList.add('border-white/10');}});}dots.forEach(function(d){d.addEventListener('click',function(){show(parseInt(d.getAttribute('data-index')));});});var timer=setInterval(function(){show((cur+1)%total);},5000);show(0);})();
        


      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(16,185,129,0.3)]">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M2 4 L8 12 L2 20 Z" opacity="0.4"></path>
<path d="M8 4 L14 12 L8 20 Z" opacity="0.7"></path>
<path d="M14 4 L20 12 L14 20 Z"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight">Paradigm</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base">
<a className="hover:text-white transition-colors" href="#features">
            Преимущества
          </a>
<a className="hover:text-white transition-colors" href="#calculator">
            Калькулятор
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Тарифы
          </a>
<a className="hover:text-white transition-colors" href="#affiliate">
            Партнерам
          </a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-base font-medium text-white hover:text-primary transition-colors">
            Войти
          </button>
<button className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium text-base hover:bg-primary hover:text-black shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
            Зарегистрироваться
          </button>
</div>
</div>
</nav>
<main className="flex-grow pt-24 pb-20">

<section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-base font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_#10B981]"></span>
          Интеграция с Telegram Bot API
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
          Доминируйте на рынке
          <br className="hidden md:block"/>
          с алгоритмами
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-200">
            нового поколения
          </span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Мощная аналитика, мгновенные уведомления и исполнение сделок прямо из
          вашего Telegram. Управляйте портфелем без задержек.
        </p>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Инструменты для профи
          </h2>
<p className="text-lg text-neutral-400">
            Все необходимое для принятия взвешенных решений.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
<div className="h-48 flex flex-col justify-center relative z-10 mb-6">
<div className="bg-background border border-border rounded-xl p-3 flex items-center gap-3 w-max mb-4 shadow-lg">
<div className="bg-primary/20 p-1.5 rounded text-primary">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<span className="text-base text-neutral-300">
                  монета выросла за 24ч
                </span>
</div>
<div className="relative h-20 w-full flex items-end">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 60">
<path className="drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,10 L120,25 L140,5 L160,15 L180,0 L200,10" fill="none" stroke="#10B981" strokeWidth="2"></path>
<path d="M0,60 L0,50 L20,40 L40,45 L60,20 L80,30 L100,10 L120,25 L140,5 L160,15 L180,0 L200,10 L200,60 Z" fill="url(#grad1)" opacity="0.2"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#10B981"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute right-0 top-0 text-primary font-medium text-base">
                  +20%
                </div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 relative z-10">
              Анализ влияния рынка
            </h3>
<p className="text-base text-neutral-400 relative z-10">
              Оценивайте потенциал прибыли или рисков с помощью наших рыночных
              инсайтов.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
<div className="absolute center w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
<div className="h-48 flex items-center justify-center relative z-10 mb-6">
<div className="relative w-full max-w-[200px] h-32">

<svg className="absolute inset-0 w-full h-full" z-index="-1">
<line stroke="rgba(16,185,129,0.3)" stroke-dasharray="4" strokeWidth="2" x1="50%" x2="20%" y1="20%" y2="60%"></line>
<line stroke="rgba(16,185,129,0.3)" stroke-dasharray="4" strokeWidth="2" x1="50%" x2="80%" y1="20%" y2="80%"></line>
</svg>
<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-12 h-12 bg-background border border-primary/40 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<i className="w-6 h-6 text-primary" data-lucide="bot"></i>
</div>
<div className="absolute top-[50%] left-[10%] w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-neutral-400" data-lucide="smartphone"></i>
</div>
<div className="absolute top-[70%] right-[10%] w-10 h-10 bg-background border border-border rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-neutral-400" data-lucide="monitor"></i>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 relative z-10">
              Уведомления везде
            </h3>
<p className="text-base text-neutral-400 relative z-10">
              Оставайтесь в курсе событий с помощью мобильных, веб или Telegram
              уведомлений.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
<div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
<div className="h-48 flex flex-col justify-center items-end gap-3 relative z-10 mb-6 w-full">
<div className="bg-background border border-border rounded-xl p-3 flex items-center gap-3 w-[90%] opacity-60 scale-95 translate-x-4">
<div className="bg-neutral-800 p-1.5 rounded text-neutral-400">
<i className="w-4 h-4" data-lucide="message-square"></i>
</div>
<div className="flex-1">
<div className="h-2 w-1/2 bg-neutral-800 rounded mb-2"></div>
<div className="h-2 w-1/4 bg-neutral-800 rounded"></div>
</div>
</div>
<div className="bg-background border border-primary/30 rounded-xl p-3 flex items-center gap-3 w-full shadow-[0_4px_20px_rgba(16,185,129,0.1)] z-10">
<div className="bg-primary p-1.5 rounded text-black">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-base font-medium text-white">
                    Сдвиг тренда: Бычий
                  </div>
<div className="text-base text-neutral-400">
                    Настроение рынка улучшилось
                  </div>
</div>
</div>
<div className="bg-background border border-border rounded-xl p-3 flex items-center gap-3 w-[90%] opacity-40 scale-90 translate-x-8">
<div className="bg-neutral-800 p-1.5 rounded text-neutral-400">
<i className="w-4 h-4" data-lucide="trending-down"></i>
</div>
<div className="flex-1">
<div className="h-2 w-1/3 bg-neutral-800 rounded"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 relative z-10">
              Анализ настроений
            </h3>
<p className="text-base text-neutral-400 relative z-10">
              Следите за тем, что происходит на волатильных криптовалютных
              рынках.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
<div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
<div className="h-48 flex items-center justify-center relative z-10 mb-6">
<div className="relative w-full max-w-[220px]">
<div className="bg-background border border-border rounded-xl p-4 mb-3 flex items-center justify-between">
<div>
<div className="text-white font-medium text-base">ETH/USDT</div>
<div className="text-red-400 text-base">-0.07%</div>
</div>
<svg className="w-16 h-8" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,15 L20,25 L40,10 L60,20 L80,5 L100,15" fill="none" stroke="#10B981" strokeWidth="2"></path>
</svg>
</div>
<button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-emerald-400 text-black font-medium text-base shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 group-hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
                  Купить
                </button>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 relative z-10">
              Встроенные кнопки
            </h3>
<p className="text-base text-neutral-400 relative z-10">
              Получайте уведомления с кнопками покупки для прямой торговли.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500"></div>
<div className="h-48 relative z-10 mb-6 flex flex-col justify-center">
<div className="w-full text-base">
<div className="grid grid-cols-3 text-neutral-500 mb-2 pb-2 border-b border-border">
<div>ТИКЕР</div>
<div className="text-right">ЦЕНА</div>
<div className="text-right">ИЗМЕНЕНИЕ</div>
</div>
<div className="grid grid-cols-3 items-center py-2 border-b border-border/50">
<div className="text-white font-medium">
                    ETH
                    <span className="text-neutral-500 text-base">/USDT</span>
</div>
<div className="text-right text-neutral-300">$2,450.50</div>
<div className="text-right text-primary">+18.2%</div>
</div>
<div className="grid grid-cols-3 items-center py-2 border-b border-border/50">
<div className="text-white font-medium">
                    SOL
                    <span className="text-neutral-500 text-base">/USDT</span>
</div>
<div className="text-right text-neutral-300">$142.50</div>
<div className="text-right text-red-400">-8.2%</div>
</div>
<div className="grid grid-cols-3 items-center py-2">
<div className="text-white font-medium">
                    BTC
                    <span className="text-neutral-500 text-base">/USDT</span>
</div>
<div className="text-right text-neutral-300">$63,230</div>
<div className="text-right text-primary">+2.4%</div>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 relative z-10">
              Рыночные данные
            </h3>
<p className="text-base text-neutral-400 relative z-10">
              Отслеживайте текущую ситуацию на рынке не выходя из приложения.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
<div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors duration-500"></div>
<div className="h-48 flex items-center justify-center relative z-10 mb-6">
<div className="relative w-full max-w-[200px]">
<div className="bg-background border border-border rounded-xl p-4 shadow-lg mb-[-10px] relative z-0 opacity-50 translate-x-4 translate-y-[-10px]">
<div className="h-4 w-1/2 bg-neutral-800 rounded mb-2"></div>
<div className="h-10 w-full bg-neutral-800/50 rounded"></div>
</div>
<div className="bg-background border border-border rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10">
<div className="flex justify-between items-start mb-4">
<div>
<div className="text-white font-medium text-base">
                        SOL/USDT
                      </div>
<div className="text-primary text-base">+13.5%</div>
</div>
<i className="w-4 h-4 text-neutral-500" data-lucide="star"></i>
</div>
<button className="w-full py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-medium text-base hover:bg-primary hover:text-black transition-colors flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<i className="w-4 h-4" data-lucide="plus"></i>
                    В избранное
                  </button>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2 relative z-10">
              Списки наблюдения
            </h3>
<p className="text-base text-neutral-400 relative z-10">
              Следите за активами и получайте обновления об изменениях.
            </p>
</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-20" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4" style={{textShadow: '0_0_20px_rgba(16,185,129,0.35)'}}>
            ТАРИФНЫЕ ПЛАНЫ
          </h2>
<p className="text-lg text-neutral-400">
            Выберите план, который подходит вашему стилю торговли.
          </p>
</div>
<div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-stretch">
<div className="group flex-1 bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]">
<div className="text-neutral-400 transition-all duration-300 group-hover:text-green-400 group-hover:scale-110 mb-6">
<i className="w-10 h-10" data-lucide="rocket"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
              TESTING
            </h3>
<div className="mb-6">
<span className="text-3xl font-semibold text-white">100$ – 999$</span>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex justify-between items-center">
<span className="text-gray-400 text-sm">Срок</span>
<span className="text-white font-medium text-sm">30 дней</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-sm">Доходность</span>
<span className="text-green-400 font-medium text-sm">
                  0.3% – 0.9% в день
                </span>
</div>
</div>
<button className="mt-auto w-full py-3 rounded-xl bg-transparent border border-primary/40 text-primary font-medium text-base hover:bg-primary hover:text-black transition-colors">
              ВЫБРАТЬ ПЛАН
            </button>
</div>
<div className="group flex-1 bg-zinc-900/50 border border-green-500/50 rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] shadow-[0_0_40px_rgba(16,185,129,0.1)]">
<div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl pointer-events-none"></div>
<div className="relative z-10 text-neutral-400 transition-all duration-300 group-hover:text-green-400 group-hover:scale-110 mb-6">
<i className="w-10 h-10" data-lucide="crown"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2 relative z-10">
              PRO
            </h3>
<div className="mb-6 relative z-10">
<span className="text-3xl font-semibold text-white">
                1000$ – 9999$
              </span>
</div>
<div className="flex flex-col gap-3 mb-8 relative z-10">
<div className="flex justify-between items-center">
<span className="text-gray-400 text-sm">Срок</span>
<span className="text-white font-medium text-sm">45 дней</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-sm">Доходность</span>
<span className="text-green-400 font-medium text-sm">
                  0.9% – 1.3% в день
                </span>
</div>
</div>
<button className="mt-auto w-full py-3 rounded-xl bg-primary text-black font-semibold text-base hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] relative z-10">
              ВЫБРАТЬ ПЛАН
            </button>
</div>
<div className="group flex-1 bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]">
<div className="text-neutral-400 transition-all duration-300 group-hover:text-green-400 group-hover:scale-110 mb-6">
<i className="w-10 h-10" data-lucide="gem"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">
              VIP
            </h3>
<div className="mb-6">
<span className="text-3xl font-semibold text-white">от 10 000$</span>
</div>
<div className="flex flex-col gap-3 mb-8">
<div className="flex justify-between items-center">
<span className="text-gray-400 text-sm">Срок</span>
<span className="text-white font-medium text-sm">90 дней</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-400 text-sm">Доходность</span>
<span className="text-green-400 font-medium text-sm">
                  1.5% – 2% в день
                </span>
</div>
</div>
<button className="mt-auto w-full py-3 rounded-xl bg-transparent border border-primary/40 text-primary font-medium text-base hover:bg-primary hover:text-black transition-colors">
              ВЫБРАТЬ ПЛАН
            </button>
</div>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 py-20" id="calculator">
<div className="bg-surface border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2 relative z-10">
            Калькулятор доходности
          </h2>
<p className="text-lg text-neutral-400 mb-10 relative z-10">
            Рассчитайте потенциальную прибыль на основе исторических данных
            алгоритма.
          </p>
<div className="grid md:grid-cols-2 gap-12 relative z-10">
<div className="space-y-8">
<div>
<div className="flex justify-between text-base mb-4">
<label className="text-white font-medium">Сумма инвестиций</label>
<span className="text-primary font-medium">$5,000</span>
</div>
<input className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary" max="50000" min="100" type="range" value="5000"/>
<div className="flex justify-between text-base text-neutral-500 mt-2">
<span>$100</span>
<span>$50,000+</span>
</div>
</div>
<div>
<div className="flex justify-between text-base mb-4">
<label className="text-white font-medium">Период (месяцев)</label>
<span className="text-primary font-medium">12 мес</span>
</div>
<input className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary" max="36" min="1" type="range" value="12"/>
<div className="flex justify-between text-base text-neutral-500 mt-2">
<span>1</span>
<span>36</span>
</div>
</div>
</div>
<div className="bg-background border border-border rounded-2xl p-6 flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 border border-primary/20 rounded-2xl shadow-[inset_0_0_30px_rgba(16,185,129,0.05)] pointer-events-none"></div>
<div className="text-base text-neutral-400 mb-2">
                Ожидаемая прибыль
              </div>
<div className="text-4xl font-semibold tracking-tight text-white mb-2">
                +$3,450
              </div>
<div className="text-primary text-lg font-medium mb-6">
                ~69% годовых
              </div>
<button className="w-full py-3 rounded-xl bg-primary text-black font-medium text-lg hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Начать инвестировать
              </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="affiliate">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3" style={{textShadow: '0_0_20px_rgba(16,185,129,0.35)'}}>
            ЗАРАБАТЫВАЙ БОНУСЫ
          </h2>
<p className="text-xl md:text-2xl font-semibold text-primary tracking-tight">
            ПРИГЛАШАЙ КОЛЛЕГ
          </p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-center">
<div className="order-2 lg:order-1 space-y-6">
<div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
<div className="text-primary">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<span className="text-base font-medium text-white tracking-wide">
                ПРОСТАЯ СТРУКТУРА
              </span>
</div>
<div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
<div className="text-primary">
<i className="w-6 h-6" data-lucide="dollar-sign"></i>
</div>
<span className="text-base font-medium text-white tracking-wide">
                ПАССИВНЫЙ ДОХОД
              </span>
</div>
<div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
<div className="text-primary">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<span className="text-base font-medium text-white tracking-wide">
                РЕГУЛЯРНЫЕ ВЫПЛАТЫ
              </span>
</div>
</div>
<div className="order-1 lg:order-2 relative h-[360px] flex items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<svg className="relative z-10 w-full max-w-[320px] h-[300px]" fill="none" viewbox="0 0 300 280">
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" x1="150" x2="75" y1="50" y2="150"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" x1="150" x2="225" y1="50" y2="150"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" x1="75" x2="40" y1="150" y2="240"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" x1="75" x2="110" y1="150" y2="240"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" x1="225" x2="190" y1="150" y2="240"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" x1="225" x2="260" y1="150" y2="240"></line>
<circle className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="150" cy="50" fill="#10B981" r="8"></circle>
<circle className="drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]" cx="75" cy="150" fill="#10B981" r="6"></circle>
<circle className="drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]" cx="225" cy="150" fill="#10B981" r="6"></circle>
<circle className="drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]" cx="40" cy="240" fill="#10B981" r="5"></circle>
<circle className="drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]" cx="110" cy="240" fill="#10B981" r="5"></circle>
<circle className="drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]" cx="190" cy="240" fill="#10B981" r="5"></circle>
<circle className="drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]" cx="260" cy="240" fill="#10B981" r="5"></circle>
</svg>
<div className="absolute top-2 left-0 z-20 bg-zinc-900/40 border border-white/10 rounded-xl p-3 backdrop-blur-md shadow-lg animate-pulse w-[150px]">
<div className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                СТАТИСТИКА
              </div>
<svg className="w-full h-8" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,25 L20,18 L40,22 L60,8 L80,12 L100,2" fill="none" stroke="#10B981" strokeWidth="2"></path>
</svg>
<div className="text-primary font-semibold text-base mt-1">+$500</div>
</div>
<div className="absolute bottom-2 right-0 z-20 bg-zinc-900/40 border border-white/10 rounded-xl p-3 backdrop-blur-md shadow-lg animate-pulse flex items-center gap-3">
<div className="text-primary">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div className="text-xs uppercase tracking-widest text-white">
                ВСЕГО ПАРТНЕРОВ:
                <span className="text-primary font-semibold">12 ЧЕЛ.</span>
</div>
</div>
</div>
<div className="order-3">
<div className="bg-surface border border-primary/30 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.12)]">
<div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-4 relative z-10">
                ТВОЯ ССЫЛКА — ТВОЙ ДОХОД!
              </h3>
<input className="w-full bg-background border border-border rounded-xl px-4 py-3 text-neutral-300 text-base focus:outline-none focus:border-primary/50 mb-3 relative z-10 blur-[2px] select-none pointer-events-none" placeholder="••••••••••••••••••" readonly="" type="text" value=""/>
<div className="flex items-center gap-2 text-sm text-neutral-500 mb-4 relative z-10">
<i className="w-4 h-4 text-primary/70" data-lucide="lock"></i>
<span>Для получения личной ссылки необходима регистрация.</span>
</div>
<button className="w-full py-3 rounded-xl bg-primary text-black font-semibold text-base hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 relative z-10">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                Зарегистрироваться
              </button>
</div>
</div>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-24" id="reviews">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white" style={{textShadow: '0_0_20px_rgba(16,185,129,0.35)'}}>
            ОТЗЫВЫ ПАРТНЕРОВ
          </h2>
</div>
<div className="relative">
<div className="overflow-hidden" id="reviews-track">
<div className="flex transition-transform duration-700 ease-in-out" id="reviews-slides">
<div className="reviews-slide w-full flex-shrink-0 px-2 md:px-6">
<div className="reviews-card bg-zinc-900/40 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md max-w-2xl mx-auto transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-green-500/30 flex items-center justify-center text-green-400 font-semibold flex-shrink-0">
                        БК
                      </div>
<div>
<div className="text-base font-medium text-white">
                          Богдан К.
                        </div>
<div className="text-gray-400 text-sm">Head of SEO</div>
</div>
</div>
<div className="text-primary/20">
<i className="w-8 h-8" data-lucide="quote"></i>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
                    Сотрудничаю с Paradigm уже полгода. Работал напрямую с SEO
                    проекта, впечатления исключительно положительные. Быстрые
                    сделки и абсолютно прозрачная статистика в боте.
                  </p>
</div>
</div>
<div className="reviews-slide w-full flex-shrink-0 px-2 md:px-6">
<div className="reviews-card bg-zinc-900/40 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md max-w-2xl mx-auto transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-green-500/30 flex items-center justify-center text-green-400 font-semibold flex-shrink-0">
                        ЕМ
                      </div>
<div>
<div className="text-base font-medium text-white">
                          Елена М.
                        </div>
<div className="text-gray-400 text-sm">
                          Senior Media Buyer
                        </div>
</div>
</div>
<div className="text-primary/20">
<i className="w-8 h-8" data-lucide="quote"></i>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
                    Лучший бот на рынке. Подключил свой портфель, все летает
                    моментально. Пассивный доход с партнерки перекрыл все
                    ожидания.
                  </p>
</div>
</div>
<div className="reviews-slide w-full flex-shrink-0 px-2 md:px-6">
<div className="reviews-card bg-zinc-900/40 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md max-w-2xl mx-auto transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-green-500/30 flex items-center justify-center text-green-400 font-semibold flex-shrink-0">
                        Д
                      </div>
<div>
<div className="text-base font-medium text-white">
                          Дмитрий
                        </div>
<div className="text-gray-400 text-sm">Tech Lead</div>
</div>
</div>
<div className="text-primary/20">
<i className="w-8 h-8" data-lucide="quote"></i>
</div>
</div>
<p className="text-lg md:text-xl text-neutral-200 leading-relaxed">
                    Очень удобный интерфейс, никаких лишних заморочек.
                    Интеграция через API заняла пару минут, техподдержка топ.
                  </p>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-3 mt-10" id="reviews-dots">
<button className="reviews-dot w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#10B981] transition-all duration-300" data-index="0"></button>
<button className="reviews-dot w-2.5 h-2.5 rounded-full bg-neutral-700 transition-all duration-300" data-index="1"></button>
<button className="reviews-dot w-2.5 h-2.5 rounded-full bg-neutral-700 transition-all duration-300" data-index="2"></button>
</div>
</div>

</section>
<section className="max-w-3xl mx-auto px-6 py-20 border-t border-border/50" id="faq">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-10 text-center">
          Часто задаваемые вопросы
        </h2>
<div className="space-y-4">

<div className="bg-surface border border-border rounded-2xl p-6">
<button className="w-full flex justify-between items-center text-left group">
<span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                Как работает интеграция с Telegram?
              </span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<p className="mt-4 text-base text-neutral-400 leading-relaxed">
              Мы предоставляем безопасный API токен, который вы подключаете к
              нашему официальному Telegram боту. После этого вы сможете получать
              уведомления и совершать сделки прямо в мессенджере.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6">
<button className="w-full flex justify-between items-center text-left group">
<span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                Безопасны ли мои средства?
              </span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<p className="mt-4 text-base text-neutral-400 leading-relaxed">
              Да. Мы не храним ваши средства на платформе — торговля происходит
              через защищённое API-подключение к вашей бирже. Все ключи
              шифруются, а права доступа ограничены только торговыми операциями
              без возможности вывода.
            </p>
</div>

<div className="bg-surface border border-border rounded-2xl p-6">
<button className="w-full flex justify-between items-center text-left group">
<span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                Могу ли я отменить подписку в любой момент?
              </span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<p className="mt-4 text-base text-neutral-400 leading-relaxed">
              Конечно. Вы можете отменить или сменить тарифный план в любой
              момент в личном кабинете. После отмены доступ к платным функциям
              сохраняется до конца оплаченного периода.
            </p>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="register-modal">
<div className="bg-surface border border-border rounded-3xl p-8 w-full max-w-md relative">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
            Регистрация
          </h3>
<p className="text-base text-neutral-400 mb-8">
            Создайте аккаунт для доступа к платформе.
          </p>
<form className="space-y-4">
<div>
<input className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-neutral-600" placeholder="ФИО" required="" type="text"/>
</div>
<div>
<input className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-neutral-600" placeholder="Номер телефона" required="" type="tel"/>
</div>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
                @
              </span>
<input className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-white text-base focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-neutral-600" placeholder="Telegram Username" required="" type="text"/>
</div>
<div>
<input className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-neutral-600" placeholder="Email" required="" type="email"/>
</div>
<div>
<input className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-neutral-600" placeholder="Пароль" required="" type="password"/>
</div>
<label className="flex items-start gap-3 cursor-pointer mt-6">
<div className="relative flex items-center justify-center mt-1">
<input className="peer appearance-none w-5 h-5 border border-border rounded bg-background checked:bg-primary checked:border-primary transition-colors cursor-pointer" required="" type="checkbox"/>
<i className="absolute w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-base text-neutral-400 select-none">
                Я согласен с условиями обработки данных и подтверждаю, что не
                являюсь ботом.
              </span>
</label>
<button className="w-full py-4 rounded-xl bg-primary text-black font-semibold text-lg hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] mt-8" type="submit">
              Создать аккаунт
            </button>
</form>
</div>
</div>
</main>

<footer className="border-t border-border bg-surface/50">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
<svg className="w-3.5 h-3.5" fill="currentColor" viewbox="0 0 24 24">
<path d="M3 4 L11 12 L3 20 Z" opacity="0.5"></path>
<path d="M10 4 L18 12 L10 20 Z"></path>
</svg>
</div>
<span className="text-base font-medium">Paradigm</span>
</div>
<div className="text-base text-neutral-500">
          © 2024 Paradigm. Все права защищены.
        </div>
<div className="flex items-center gap-6 text-base text-neutral-400">
<a className="hover:text-white transition-colors" href="#">
            Политика конфиденциальности
          </a>
<a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="send"></i>
            Наше комьюнити
          </a>
</div>
</div>
</footer>


    </>
  );
}
