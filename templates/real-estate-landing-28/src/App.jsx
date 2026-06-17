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
      

<header className="fixed top-0 w-full z-50 border-b border-neutral-800/50 bg-neutral-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-medium tracking-tighter text-white">NVSTRK.</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-sm font-light text-neutral-400 hover:text-white transition-colors duration-200" href="tel:+74950000000">+7 (495) 000-00-00</a>
<button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors duration-200">
                    Оставить заявку
                </button>
</div>
</div>
</header>

<main className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                Москва и Московская область
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 text-balance leading-tight">
                Новостройки <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">без первого взноса</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 mb-10 max-w-2xl text-balance font-light leading-relaxed">
                Помогаем выгодно купить квартиру. Одобряем ипотеку в 25+ банках на лучших условиях: семейная от 3,5%, стандартная от 7-10%.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center gap-2 group">
                    Подобрать варианты
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium bg-neutral-900 text-white border border-neutral-800 rounded-full hover:bg-neutral-800 hover:border-neutral-700 transition-colors duration-200">
                    Узнать условия
                </button>
</div>
</div>
</main>

<section className="py-24 px-6 border-t border-neutral-800/50 bg-neutral-950 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">0₽ первоначальный взнос</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Специальные программы застройщиков позволяют купить квартиру даже без собственных накоплений на старте.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Ставки от 3,5% в 25+ банках</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Подаем единую заявку во все ведущие банки. Оформляем семейную ипотеку от 3,5% и стандартные программы от 7% до 10% годовых.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Полное сопровождение</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Берем на себя всё: от подбора ЖК и одобрения кредита до юридической проверки и подписания договора.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Гарантия защиты</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Предоставляем гарантийный сертификат на полную юридическую защиту ваших интересов на всех этапах.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:umbrella-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Выгодное страхование</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Осуществляем подбор наиболее выгодных услуг страхования недвижимости и жизни специально для вас.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Снижение ставки</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        До 3-х раз проводим бесплатное рефинансирование для снижения процентной ставки по вашей ипотеке.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Экспертиза при приемке</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Профессиональная экспертиза при приемке квартиры с точной фиксацией всех строительных дефектов.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-xl border border-neutral-700/50 bg-neutral-800/50 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-2 text-neutral-200">Взыскание с застройщика</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Берем на себя взыскание с застройщика полной стоимости устранения найденных строительных дефектов.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-800/50 relative overflow-hidden">
<div className="max-w-4xl mx-auto">
<div className="rounded-3xl border border-neutral-800/80 bg-neutral-900/40 p-8 md:p-16 relative overflow-hidden backdrop-blur-md">

<div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-3xl font-medium tracking-tighter mb-4 text-white">Узнайте свои шансы<br/>на одобрение</h2>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                            Оставьте контакты для бесплатной консультации. Мы перезвоним, ответим на вопросы и пришлем подборку квартир, подходящих под вашу ситуацию.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Без комиссий и скрытых платежей
                            </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Одобрение в сложных случаях
                            </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                Эксклюзивные скидки застройщиков
                            </li>
</ul>
</div>
<form className="flex flex-col gap-4 bg-neutral-950/50 p-6 md:p-8 rounded-2xl border border-neutral-800/60">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest ml-1">Имя</label>
<input className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="Ваше имя" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-widest ml-1">Телефон</label>
<input className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl text-sm text-neutral-200 focus:outline-none focus:border-neutral-600 focus:bg-neutral-900 transition-all placeholder:text-neutral-600" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>

<div className="flex items-start gap-3 mt-2 group cursor-pointer">
<div className="relative flex items-start pt-0.5">
<input checked="" className="peer sr-only" id="privacy" type="checkbox"/>
<div className="h-4 w-4 rounded-[4px] border border-neutral-700 bg-neutral-900/50 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<iconify-icon className="text-black opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-linear" strokeWidth="2.5" width="12"></iconify-icon>
</div>
<label className="absolute inset-0 cursor-pointer" htmlFor="privacy"></label>
</div>
<label className="text-xs text-neutral-500 leading-tight font-light cursor-pointer group-hover:text-neutral-400 transition-colors" htmlFor="privacy">
                                Я соглашаюсь с политикой конфиденциальности и обработкой персональных данных.
                            </label>
</div>
<button className="w-full mt-2 px-6 py-3.5 text-sm font-medium bg-white text-black rounded-xl hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center gap-2" type="button">
                            Получить консультацию
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-neutral-900 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-8">
<div className="text-sm font-medium tracking-tighter text-neutral-300">NVSTRK.</div>
<div className="hidden sm:flex items-center gap-4 text-xs font-light text-neutral-600">
<a className="hover:text-neutral-300 transition-colors" href="#">Услуги</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Банки</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Контакты</a>
</div>
</div>
<div className="text-xs text-neutral-600 font-light text-center md:text-left">
                © 2024. Все права защищены. Не является публичной офертой.
            </div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
