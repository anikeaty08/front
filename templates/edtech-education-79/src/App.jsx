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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#1A3FAA]/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-3 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#0D1F5C] flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-lg" icon="solar:arrow-up-linear"></iconify-icon>
</div>
<span className="text-[#1A3FAA] font-medium text-lg tracking-tight uppercase">
              Верх
            </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-[#1F2937]/70 hover:text-[#0D1F5C] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#1A3FAA] after:origin-left after:transition-transform hover:after:scale-x-100" href="#">
              Предметы
            </a>
<a className="text-sm text-[#1F2937]/70 hover:text-[#0D1F5C] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#1A3FAA] after:origin-left after:transition-transform hover:after:scale-x-100" href="#">
              Преподаватели
            </a>
<a className="text-sm text-[#1F2937]/70 hover:text-[#0D1F5C] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#1A3FAA] after:origin-left after:transition-transform hover:after:scale-x-100" href="#">
              Цены
            </a>
<a className="text-sm text-[#1F2937]/70 hover:text-[#0D1F5C] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-[#1A3FAA] after:origin-left after:transition-transform hover:after:scale-x-100" href="#">
              Отзывы
            </a>
</div>

<div className="flex items-center">
<button className="bg-[#F5C842] text-[#0D1F5C] px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 hover:bg-[#E5B832] hover:scale-[1.02] shadow-sm">
              Записаться
            </button>
</div>
</div>
</div>
</nav>

<section className="bg-[#0D1F5C] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1A3FAA] to-[#0D1F5C] relative overflow-hidden pt-32 pb-40 sm:pt-40 sm:pb-48 border-b border-[#1A3FAA]/20">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

<div className="w-full lg:w-3/5 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5C842]/10 border border-[#F5C842]/40 text-xs font-medium text-[#F5C842] mb-10 backdrop-blur-md shadow-sm">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
              Средний балл выпускников — 84
            </div>
<h1 className="text-5xl sm:text-6xl lg:text-[72px] font-medium text-white tracking-tight mb-8 leading-tight">
              Иди на
              <span className="relative inline-block">
                Верх
                <span className="text-[#F5C842]">.</span>
<span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#F5C842] rounded-full"></span>
</span>
</h1>
<p className="text-lg sm:text-xl text-[#EEF2FF]/70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Живые онлайн-курсы подготовки к ЦТ и ЦЭ. Преподаватели —
              стобалльники. Telegram-экосистема. Вся Беларусь.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
<button className="w-full sm:w-auto bg-[#F5C842] text-[#0D1F5C] px-8 py-4 rounded-xl text-base font-medium hover:bg-[#E5B832] hover:scale-[1.02] transition-all duration-150 shadow-lg shadow-[#F5C842]/20 animate-[pulse_3s_ease-in-out_infinite]">
                Оставить заявку
              </button>
<button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/5 hover:scale-[1.02] transition-all duration-150">
                Пробный урок бесплатно
              </button>
</div>

<div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-0 justify-center lg:justify-start pt-12 border-t border-white/10 max-w-3xl mx-auto lg:mx-0">
<div className="flex flex-col items-center sm:items-start flex-1 px-4 sm:border-r border-white/10 last:border-0">
<span className="text-4xl font-medium text-white tracking-tight mb-1">
                  21 000+
                </span>
<span className="text-sm text-[#EEF2FF]/50 font-normal uppercase tracking-wider">
                  Выпускников
                </span>
</div>
<div className="flex flex-col items-center sm:items-start flex-1 px-4 sm:border-r border-white/10 last:border-0">
<span className="text-4xl font-medium text-white tracking-tight mb-1">
                  84
                </span>
<span className="text-sm text-[#EEF2FF]/50 font-normal uppercase tracking-wider">
                  Средний балл
                </span>
</div>
<div className="flex flex-col items-center sm:items-start flex-1 px-4 sm:border-r border-white/10 last:border-0">
<span className="text-4xl font-medium text-white tracking-tight mb-1">
                  6 лет
                </span>
<span className="text-sm text-[#EEF2FF]/50 font-normal uppercase tracking-wider">
                  На рынке
                </span>
</div>
</div>
</div>

<div className="w-full max-w-md lg:w-2/5 relative mt-16 lg:mt-0 perspective-1000 hidden lg:block">
<div className="relative w-full aspect-[4/5] sm:aspect-square">

<div className="absolute inset-y-12 inset-x-8 bg-gradient-to-br from-[#1A3FAA]/40 to-[#0D1F5C]/40 border border-white/10 rounded-2xl rotate-[-6deg] transform-gpu transition-transform duration-700 hover:rotate-[-8deg] shadow-2xl backdrop-blur-sm"></div>

<div className="absolute inset-y-6 inset-x-4 bg-gradient-to-br from-[#1A3FAA]/60 to-[#1A3FAA]/20 border border-white/20 rounded-2xl rotate-[-3deg] transform-gpu transition-transform duration-700 hover:rotate-[-4deg] shadow-xl backdrop-blur-md"></div>

<div className="absolute inset-0 bg-white rounded-2xl shadow-2xl flex flex-col p-6 sm:p-8 z-10 transform-gpu rotate-0 transition-transform duration-700 hover:scale-[1.02]">
<div className="flex justify-between items-start mb-10">
<div>
<h3 className="text-[#0D1F5C] font-medium text-lg tracking-tight">
                      Прогресс
                    </h3>
<p className="text-[#6B7280] text-xs mt-1 font-normal">
                      Средний балл учеников
                    </p>
</div>
<div className="bg-[#EEF2FF] text-[#1A3FAA] text-xs font-medium px-2.5 py-1 rounded-md tracking-tight">
                    ЦТ / ЦЭ
                  </div>
</div>

<div className="flex items-end justify-between gap-3 h-full pb-2 mt-auto">

<div className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
<span className="text-[#6B7280] text-xs font-medium transition-colors group-hover:text-[#1F2937]">
                      68
                    </span>
<div className="w-full bg-[#F8F9FB] border border-gray-100 rounded-t-lg h-[68%] relative overflow-hidden transition-all duration-500 group-hover:bg-gray-100">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-gray-200/40 to-transparent"></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
<span className="text-[#6B7280] text-xs font-medium transition-colors group-hover:text-[#1F2937]">
                      79
                    </span>
<div className="w-full bg-[#EEF2FF] rounded-t-lg h-[79%] relative overflow-hidden transition-all duration-500 group-hover:bg-blue-100">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#1A3FAA]/5 to-transparent"></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
<span className="text-[#1A3FAA] text-xs font-medium">84</span>
<div className="w-full bg-[#1A3FAA] rounded-t-lg h-[84%] shadow-[0_0_15px_rgba(26,63,170,0.15)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent"></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
<span className="text-[#0D1F5C] text-xs font-medium">100</span>
<div className="w-full bg-[#F5C842] rounded-t-lg h-[100%] shadow-[0_0_20px_rgba(245,200,66,0.3)] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div>
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-orange-500/10 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-32 overflow-hidden border-b border-gray-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-20">
<h2 className="text-4xl sm:text-5xl font-medium text-[#0D1F5C] tracking-tight mb-4">
            Частые вопросы
          </h2>
</div>
<div className="space-y-8">
<div className="border-l-4 border-[#1A3FAA] pl-6 py-2">
<h3 className="text-xl font-medium text-[#0D1F5C] mb-2">
              Нужно ли специальное оборудование?
            </h3>
<p className="text-[#6B7280] text-base leading-relaxed">
              Нет. Достаточно компьютера или телефона с интернетом. Занятия
              проходят в Zoom/StreamYard.
            </p>
</div>
<div className="border-l-4 border-[#1A3FAA] pl-6 py-2">
<h3 className="text-xl font-medium text-[#0D1F5C] mb-2">
              Что если я пропущу занятие?
            </h3>
<p className="text-[#6B7280] text-base leading-relaxed">
              Все занятия записываются и хранятся 30 дней — можно пересмотреть в
              любое время.
            </p>
</div>
<div className="border-l-4 border-[#1A3FAA] pl-6 py-2">
<h3 className="text-xl font-medium text-[#0D1F5C] mb-2">
              Как работает возврат средств?
            </h3>
<p className="text-[#6B7280] text-base leading-relaxed">
              Мы гарантируем 100% возврат до 2-го занятия включительно. Без
              вопросов и объяснений.
            </p>
</div>
<div className="border-l-4 border-[#1A3FAA] pl-6 py-2">
<h3 className="text-xl font-medium text-[#0D1F5C] mb-2">
              Из какого города можно заниматься?
            </h3>
<p className="text-[#6B7280] text-base leading-relaxed">
              Из любого! Курсы полностью онлайн — Минск, Брест, Гродно, регионы,
              даже из-за рубежа.
            </p>
</div>
</div>
</div>
</section>
<section className="bg-white py-32 overflow-hidden border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-20">
<h2 className="text-4xl sm:text-5xl font-medium text-[#0D1F5C] tracking-tight mb-4">
            Отзывы наших учеников
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#0D1F5C] rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
<div className="absolute -top-4 right-4 text-[120px] text-white/5 font-serif leading-none select-none">
              "
            </div>
<div className="flex justify-between items-start gap-4 mb-8 relative z-10">
<div className="bg-[#F5C842] text-[#0D1F5C] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                100 баллов
              </div>
</div>
<p className="italic text-white text-lg leading-relaxed mb-10 flex-1 relative z-10">
              «Егор — лучший преподаватель по математике. Он придумывает такие
              способы решения, которые точно не объяснят в школе. Я набрала 100
              баллов с нуля!»
            </p>
<div className="font-medium text-white/60 relative z-10">
              Юля М. · Математика
            </div>
</div>
<div className="bg-[#0D1F5C] rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
<div className="absolute -top-4 right-4 text-[120px] text-white/5 font-serif leading-none select-none">
              "
            </div>
<div className="flex justify-between items-start gap-4 mb-8 relative z-10">
<div className="bg-[#F5C842] text-[#0D1F5C] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                100 баллов
              </div>
</div>
<p className="italic text-white text-lg leading-relaxed mb-10 flex-1 relative z-10">
              «Летом до 11-го класса я не мог написать даже на 70. Только
              благодаря курсу я написал на 100 — первая сотка в истории моего
              района!»
            </p>
<div className="font-medium text-white/60 relative z-10">
              Николай Р. · Русский язык
            </div>
</div>
<div className="bg-[#0D1F5C] rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
<div className="absolute -top-4 right-4 text-[120px] text-white/5 font-serif leading-none select-none">
              "
            </div>
<div className="flex justify-between items-start gap-4 mb-8 relative z-10">
<div className="bg-[#F5C842] text-[#0D1F5C] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                100 баллов
              </div>
</div>
<p className="italic text-white text-lg leading-relaxed mb-10 flex-1 relative z-10">
              «100 баллов... У меня даже в мечтах не было такого результата.
              Влад очень понятно объясняет и всегда отвечает на вопросы.»
            </p>
<div className="font-medium text-white/60 relative z-10">
              Анастасия К. · История
            </div>
</div>
</div>
</div>
</section>
<section className="bg-[#0D1F5C] py-32 relative overflow-hidden border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
<h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-4">
            Стоимость
          </h2>
<p className="text-base sm:text-lg text-[#EEF2FF]/70 font-normal leading-relaxed">
            Прозрачная цена. Без скрытых платежей.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 backdrop-blur-xl">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Стандарт
            </h3>
<div className="mb-4">
<span className="text-5xl font-bold text-white tracking-tight">
                160 BYN
              </span>
<span className="text-[#EEF2FF]/50 text-sm">/мес</span>
</div>
<p className="text-sm text-[#EEF2FF]/70 mb-8 font-normal">
              1 предмет · 8 занятий × 90 мин
            </p>
<ul className="text-sm text-[#EEF2FF]/90 space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Живые трансляции</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Telegram-бот с домашками</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Личная статистика</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Поддержка преподавателя</span>
</li>
</ul>
<button className="w-full bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl text-base font-medium transition-all duration-150 hover:bg-white/5 hover:scale-[1.02]">
              Записаться
            </button>
</div>

<div className="bg-white/5 border-2 border-[#F5C842] rounded-2xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(245,200,66,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-6">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5C842] text-[#0D1F5C] px-3 py-1 rounded-full text-xs font-semibold tracking-tight uppercase whitespace-nowrap">
              Популярный
            </div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Комплект 2 предмета
            </h3>
<div className="mb-4">
<span className="text-5xl font-bold text-white tracking-tight">
                290 BYN
              </span>
<span className="text-[#EEF2FF]/50 text-sm">/мес</span>
<span className="text-sm text-[#EEF2FF]/50 line-through ml-2">
                320 BYN
              </span>
</div>
<p className="text-sm text-[#EEF2FF]/70 mb-8 font-normal">
              2 предмета одновременно
            </p>
<ul className="text-sm text-[#EEF2FF]/90 space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Всё из Стандарта × 2</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Скидка 9%</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Приоритетная поддержка</span>
</li>
</ul>
<button className="w-full bg-[#F5C842] text-[#0D1F5C] px-6 py-4 rounded-xl text-base font-medium transition-all duration-150 hover:bg-[#E5B832] hover:scale-[1.02]">
              Записаться
            </button>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 backdrop-blur-xl">
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">
              Интенсив (июнь)
            </h3>
<div className="mb-4">
<span className="text-5xl font-bold text-white tracking-tight">
                200 BYN
              </span>
</div>
<p className="text-sm text-[#EEF2FF]/70 mb-8 font-normal">
              12 занятий за 3 недели
            </p>
<ul className="text-sm text-[#EEF2FF]/90 space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Экспресс-подготовка</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Фокус на слабые темы</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Только июнь</span>
</li>
</ul>
<button className="w-full bg-transparent border border-white/20 text-white px-6 py-4 rounded-xl text-base font-medium transition-all duration-150 hover:bg-white/5 hover:scale-[1.02]">
              Записаться
            </button>
</div>
</div>
<div className="flex items-center justify-center gap-3 text-[#EEF2FF]/70 text-sm">
<iconify-icon className="text-2xl text-[#F5C842]" icon="solar:shield-check-bold"></iconify-icon>
<span>
            100% возврат средств до 2-го занятия без объяснения причин
          </span>
</div>
</div>
</section>
<section className="bg-[#060E2E] py-32 overflow-hidden border-b border-white/5 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-20">
<h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-4">
            Наши преподаватели
          </h2>
<p className="text-lg text-white/60 font-normal leading-relaxed max-w-2xl">
            Только 1 из 20 проходит отбор. Все — стобалльники или призёры
            олимпиад.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#0D1F5C] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5C842] border border-white/10 shadow-xl">
<div className="w-24 h-24 rounded-full bg-[#1A3FAA] text-white flex items-center justify-center text-3xl font-medium mb-6 border-2 border-[#F5C842]">
              ЕР
            </div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
              Егор Рудинский
            </h3>
<div className="bg-[#F5C842]/10 text-[#F5C842] px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-[#F5C842]/20">
              Математика
            </div>
<div className="flex flex-wrap justify-center gap-2 w-full mb-10 flex-1">
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                100 баллов на ЦТ
              </span>
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                Авторская методика
              </span>
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                16 стобалльников
              </span>
</div>
<div className="flex items-center justify-center gap-4 w-full">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:tiktok"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:telegram"></iconify-icon>
</a>
</div>
</div>
<div className="bg-[#0D1F5C] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5C842] border border-white/10 shadow-xl">
<div className="w-24 h-24 rounded-full bg-[#1A3FAA] text-white flex items-center justify-center text-3xl font-medium mb-6 border-2 border-[#F5C842]">
              ТК
            </div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
              Таня Ключ
            </h3>
<div className="bg-[#F5C842]/10 text-[#F5C842] px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-[#F5C842]/20">
              Русский язык
            </div>
<div className="flex flex-wrap justify-center gap-2 w-full mb-10 flex-1">
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                8 лет преподавания
              </span>
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                Автор книги
              </span>
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                28 стобалльников
              </span>
</div>
<div className="flex items-center justify-center gap-4 w-full">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:tiktok"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:telegram"></iconify-icon>
</a>
</div>
</div>
<div className="bg-[#0D1F5C] rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5C842] border border-white/10 shadow-xl">
<div className="w-24 h-24 rounded-full bg-[#1A3FAA] text-white flex items-center justify-center text-3xl font-medium mb-6 border-2 border-[#F5C842]">
              НТ
            </div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
              Настя Трушкевич
            </h3>
<div className="bg-[#F5C842]/10 text-[#F5C842] px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-[#F5C842]/20">
              Английский язык
            </div>
<div className="flex flex-wrap justify-center gap-2 w-full mb-10 flex-1">
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                5 лет опыта
              </span>
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                Лингвист БГУ
              </span>
<span className="bg-white/5 text-white/80 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10">
                11 стобалльников
              </span>
</div>
<div className="flex items-center justify-center gap-4 w-full">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:tiktok"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="text-lg" icon="bi:telegram"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 overflow-hidden border-b border-gray-100 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-20">
<h2 className="text-4xl sm:text-5xl font-medium text-[#0D1F5C] tracking-tight mb-4">
            Как проходит обучение
          </h2>
</div>
<div className="relative">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
<div className="flex flex-col relative group">
<div className="absolute hidden md:block top-6 left-full w-full h-[1px] border-t border-dashed border-[#1A3FAA]/20 -ml-6"></div>
<div className="text-[80px] font-bold text-[#0D1F5C]/5 leading-none mb-4 transition-colors duration-300 group-hover:text-[#1A3FAA]/10">
                01
              </div>
<h3 className="text-xl font-medium text-[#1F2937] mb-3 tracking-tight group-hover:text-[#1A3FAA] transition-colors">
                Занятия
              </h3>
<p className="text-base text-[#6B7280] leading-relaxed font-normal">
                8 живых стримов по 90 минут каждый месяц
              </p>
</div>
<div className="flex flex-col relative group">
<div className="absolute hidden md:block top-6 left-full w-full h-[1px] border-t border-dashed border-[#1A3FAA]/20 -ml-6"></div>
<div className="text-[80px] font-bold text-[#0D1F5C]/5 leading-none mb-4 transition-colors duration-300 group-hover:text-[#1A3FAA]/10">
                02
              </div>
<h3 className="text-xl font-medium text-[#1F2937] mb-3 tracking-tight group-hover:text-[#1A3FAA] transition-colors">
                Вопросы
              </h3>
<p className="text-base text-[#6B7280] leading-relaxed font-normal">
                Преподаватель отвечает в чате прямо во время урока
              </p>
</div>
<div className="flex flex-col relative group">
<div className="absolute hidden md:block top-6 left-full w-full h-[1px] border-t border-dashed border-[#1A3FAA]/20 -ml-6"></div>
<div className="text-[80px] font-bold text-[#0D1F5C]/5 leading-none mb-4 transition-colors duration-300 group-hover:text-[#1A3FAA]/10">
                03
              </div>
<h3 className="text-xl font-medium text-[#1F2937] mb-3 tracking-tight group-hover:text-[#1A3FAA] transition-colors">
                Домашние задания
              </h3>
<p className="text-base text-[#6B7280] leading-relaxed font-normal">
                Telegram-бот с реальными тестами ЦТ/ЦЭ
              </p>
</div>
<div className="flex flex-col relative group">
<div className="text-[80px] font-bold text-[#0D1F5C]/5 leading-none mb-4 transition-colors duration-300 group-hover:text-[#1A3FAA]/10">
                04
              </div>
<h3 className="text-xl font-medium text-[#1F2937] mb-3 tracking-tight group-hover:text-[#1A3FAA] transition-colors">
                Статистика
              </h3>
<p className="text-base text-[#6B7280] leading-relaxed font-normal">
                Личный прогресс по каждой теме, видны слабые места
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-32 overflow-hidden">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#0D1F5C] rounded-[32px] p-12 sm:p-24 text-center relative overflow-hidden border border-white/10 shadow-2xl">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D1F5C] via-transparent to-transparent"></div>
<div className="absolute inset-0 border border-[#F5C842]/20 rounded-[32px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl sm:text-5xl lg:text-[56px] font-medium text-white tracking-tight mb-6">
              Готов идти на Верх?
            </h2>
<p className="text-lg sm:text-xl text-[#EEF2FF]/70 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
              Оставь заявку — менеджер свяжется в течение 15 минут и подберёт
              подходящий курс.
            </p>
<div className="flex flex-col items-center gap-8">
<button className="bg-[#F5C842] text-[#0D1F5C] px-12 py-5 rounded-xl text-lg font-medium hover:bg-[#E5B832] transition-all duration-300 shadow-[0_0_30px_rgba(245,200,66,0.2)] hover:shadow-[0_0_40px_rgba(245,200,66,0.4)] hover:scale-[1.02] animate-[pulse_3s_ease-in-out_infinite]">
                Оставить заявку
              </button>
<div className="text-sm text-white/50 font-medium tracking-wide">
                ☎ +375 (29) 619-81-50 · Работаем 10:00–22:00 без выходных
              </div>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-[#060E2E] text-white/60 pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
<iconify-icon className="text-white text-lg" icon="solar:arrow-up-linear"></iconify-icon>
</div>
<span className="text-white font-medium text-lg tracking-tight uppercase">
                Верх
              </span>
</div>
<p className="text-sm font-normal leading-relaxed max-w-sm">
              Онлайн-подготовка к ЦТ и ЦЭ · Беларусь
            </p>
</div>
<div className="lg:col-span-1">
<h4 className="text-white/90 font-medium mb-6 tracking-tight">
              Предметы
            </h4>
<ul className="space-y-4 text-sm font-normal">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Математика
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Русский язык
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Английский
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Биология
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  История
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-white/90 font-medium mb-6 tracking-tight">
              Компания
            </h4>
<ul className="space-y-4 text-sm font-normal">
<li>
<a className="hover:text-white transition-colors" href="#">О нас</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Преподаватели
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Вакансии
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Контакты
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-white/90 font-medium mb-6 tracking-tight">
              Документы
            </h4>
<ul className="space-y-4 text-sm font-normal">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Договор оферты
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Политика конфиденциальности
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Оплата и возврат
                </a>
</li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-white/90 font-medium mb-6 tracking-tight">
              Соцсети
            </h4>
<div className="flex flex-wrap gap-4">
<a className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="bi:tiktok"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="bi:instagram"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="bi:telegram"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors" href="#">
<iconify-icon className="text-base" icon="bi:youtube"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px]">
<div className="text-center md:text-left">
            © 2025 ООО «Верх» · УНП: XXXXXXX · verkh.by
          </div>
<div className="flex flex-wrap items-center justify-center gap-4 opacity-50">
<iconify-icon className="text-2xl grayscale" icon="logos:visa"></iconify-icon>
<iconify-icon className="text-2xl grayscale" icon="logos:mastercard"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
