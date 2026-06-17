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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-slate-50/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex bg-center bg-blue-600 w-8 h-8 bg-[url(logo.jpg)] bg-cover rounded-lg items-center justify-center">
</div>
<span className="text-lg font-medium tracking-tight">ТОПРЕП</span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="hover:text-slate-900 text-sm font-medium text-slate-600" href="#tarif">Тарифы</a>
<a className="hover:text-slate-900 text-sm font-medium text-slate-600" href="#contact">Контакты</a>
</div>
<div className="flex items-center gap-4">
<a className="transition hover:bg-blue-700 text-sm font-medium text-white bg-blue-600 rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" href="https://app.toprep.space/">Войти</a>
</div>
</div>
</nav>

<section className="chaos-section relative w-full overflow-hidden bg-white py-20">

<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_20%,rgba(59,130,246,0.08),transparent_70%)]">
</div>
<div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-3xl mx-auto text-center">
<span className="uppercase text-xs tracking-[0.2em] text-slate-500">
        ГОТОВИМ: Инструментарий для онлайн-школ
      </span>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
          ТОПРЕП. Платформа для организации работы репетитора.
        </h1>
<p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Видеозвонки, онлайн-доска, сохранение материалов - все в одном месте.
        </p>

<div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-white font-medium transition hover:bg-slate-800" href="https://app.toprep.space/">
            Попробуй бесплатно

            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 transition hover:bg-slate-50" href="https://t.me/toprepspace">
            Узнать подробнее
          </a>
</div>

<div className="mt-10 flex items-center justify-center gap-6">
<div className="flex -space-x-2">
<img alt="" className="h-10 w-10 rounded-full border-2 border-white shadow-md object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&amp;q=80"/>
<img alt="" className="h-10 w-10 rounded-full border-2 border-white shadow-md object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&amp;q=80"/>
<img alt="" className="h-10 w-10 rounded-full border-2 border-white shadow-md object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=160&amp;q=80"/>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white border-2 border-white shadow-md">
              500+
            </div>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900">
              500+ довольных преподавателей
            </p>
<p className="text-sm text-slate-500">
              Работаем с онлайн-школами
            </p>
</div>
</div>
<div className="grid lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 my-20 space-y-0 gap-x-8 gap-y-8">
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'running'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-presentation w-8 h-8 text-white" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20"></path>
<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
<path d="m7 21 5-5 5 5"></path>
</svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Онлайн-доска</h3>
</div>
</div>
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'running'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-video w-8 h-8 text-white" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Видеозвонки</h3>
</div>
</div>
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'running'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-folder w-8 h-8 text-white" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z">
</path>
</svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Сохранение материалов</h3>
</div>
</div>
<div className="group card-hover slide-up delay-100 text-center rounded-2xl pt-4 pr-4 pb-4 pl-4 space-y-6" style={{animationPlayState: 'running'}}>
<div className="relative">
<div className="flex bg-slate-800 w-16 h-16 rounded-2xl mr-auto ml-auto shadow-lg items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard w-8 h-8 text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</div>
</div>
<div className="space-y-2">
<h3 className="text-xl font-semibold text-gray-900">Система управления</h3>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="chaos-section bg-white min-h-[80vh] flex pt-0 pb-0 relative items-center justify-center">
<div className="container">
<div className="section-header">
<div className="section-label"> Для преподавателей </div>
<h2 className="section-title"> Перестаньте управлять обучением через
          <span className="">WhatsApp, Telegram, таблицы и заметки</span>
</h2>
<p className="section-description"> Если вы преподаёте частно, то наверняка сталкивались с этим: </p>
</div>
<div className="chaos-graph"> <svg className="chaos-lines" viewbox="0 0 900 520">
<path d="M170 120 C 310 120 320 260 450 260"></path>
<path d="M170 400 C 310 400 320 260 450 260"></path>
<path d="M730 120 C 590 120 580 260 450 260"></path>
<path d="M730 400 C 590 400 580 260 450 260"></path>
</svg>
<div className="chaos-card chaos-card-1">
<div className="chaos-icon"><svg fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24">
<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg></div>
<h3 className="">Сообщения не теряются</h3>
<p className=""></p>
</div>
<div className="chaos-card chaos-card-2">
<div className="chaos-icon"> <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<path d="M16 12h.01"></path>
<path d="M2 10h20"></path>
</svg></div>
<h3 className="">Оплата контроллируется и напоминается автоматически</h3>
<p className=""></p>
</div>
<div className="chaos-card chaos-card-3">
<div className="chaos-icon"><svg className="" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg></div>
<h3 className="">Всё в одном расписании</h3>
<p className=""></p>
</div>
<div className="chaos-card chaos-card-4">
<div className="chaos-icon">
<svg className="" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24">
<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
</div>
<h3 className="">Всё в одном месте</h3>
<p className=""></p>
</div>
<div className="platform-core">
<div className="platform-core-icon">
<div className="flex bg-center w-16 h-16 bg-[url(logo.jpg)] bg-cover rounded-lg items-center justify-center">
</div>
</div>
<h3>Всё в одном месте</h3>
<p> Наша платформа собирает все процессы в едином кабинете преподавателя. </p>
</div>
</div>
<div className="benefits-grid">
<div className="benefit-item">✓ Онлайн доска и звонки</div>
<div className="benefit-item">✓ Учёт оплат и долгов</div>
<div className="benefit-item">✓ Управление расписанием</div>
<div className="benefit-item">✓ Материалы курса</div>
<div className="benefit-item">✓ Домашняя работа</div>
<div className="benefit-item">✓ История обучения каждого ученика</div>
</div>
<div className="result-block">
<p> Откройте один сайт и управляйте всей своей практикой из одного кабинета. </p>
<h3> Меньше хаоса. Меньше рутины. Больше времени на работу, отдых и развитие. </h3>
</div>
</div>
</section>
<section className="bg-white text-slate-900 antialiased selection:bg-cyan-100 selection:text-cyan-700 overflow-x-hidden" style={{fontFamily: '\'Inter\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif'}}>
<main className="min-h-screen flex pt-0 pb-0 relative items-center justify-center">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
<div className="w-[800px] h-[800px] bg-cyan-400/10 blur-[140px] rounded-full translate-x-1/3 opacity-70"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-5 flex flex-col justify-center space-y-8">

<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm self-start">
<iconify-icon className="text-cyan-600 text-sm" icon="solar:map-arrow-up-linear">
</iconify-icon>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Наша траектория развития</span>
</div>

<div className="space-y-6">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.15]">Наша история
              </h2>
<p className="text-base lg:text-lg text-slate-600 leading-relaxed font-normal">Мы последовательно развиваем
                продукт, добавляя новые функции и улучшая пользовательский опыт. Каждый этап дорожной карты приближает
                нас к созданию полноценного решения для наших клиентов.</p>
</div>

<div className="flex flex-wrap items-center gap-4 pt-2">
</div>
</div>

<div className="lg:col-span-7 relative" id="timeline">
<div className="relative pl-6 md:pl-0">

<div className="absolute left-[27px] md:left-[110px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent">
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
<div className="hidden md:flex w-[70px] justify-end shrink-0 pt-5">
<span className="text-xs font-medium text-slate-400 tracking-wider">
              СЕЙЧАС
            </span>
</div>
<div className="absolute left-[-5px] md:left-[106px] top-6 w-[10px] h-[10px] rounded-full bg-cyan-500 ring-4 ring-white shadow-lg shadow-cyan-500/30">
</div>
<div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
<div className="flex items-start sm:items-center justify-between gap-4 mb-5 flex-col sm:flex-row">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center">
<iconify-icon className="text-cyan-600 text-lg" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900">
                        Уже работает
                      </h3>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-cyan-50 text-cyan-700 uppercase tracking-widest border border-cyan-100">
                Active
              </span>
</div>
<div className="space-y-3 pl-11">
<div className="flex items-center gap-3 text-sm text-slate-700">
<span>Онлайн доска и звонки</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<span>Ученики и группы</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<span>Расписание занятий</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<span>Учёт оплат и задолженностей</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-700">
<span>Материалы и домашние задания</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
<div className="hidden md:flex w-[70px] justify-end shrink-0 pt-5">
<span className="text-xs font-medium text-slate-400 tracking-wider">
              ОСЕНЬ 2026
            </span>
</div>
<div className="absolute left-[-4px] md:left-[107px] top-6 w-[8px] h-[8px] rounded-full bg-slate-300 ring-4 ring-white">
</div>
<div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-5">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-500 text-lg" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-700">
                      Новые инструменты для обучения
                    </h3>
</div>
<div className="space-y-3 pl-11">
<div className="flex gap-3 text-sm text-slate-500 items-center">
<span>Модуль курсов</span>
</div>
<div className="flex gap-3 text-sm text-slate-500 items-center">
<span>Конструктор тестов и экзаменов</span>
</div>
<div className="flex gap-3 text-sm text-slate-500 items-center">
<span>Инструментарий школ (администрирование)</span>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
<div className="hidden md:flex w-[70px] justify-end shrink-0 pt-5">
<span className="text-xs font-medium text-slate-400 tracking-wider">
              2027
            </span>
</div>
<div className="absolute left-[-4px] md:left-[107px] top-6 w-[8px] h-[8px] rounded-full bg-slate-300 ring-4 ring-white">
</div>
<div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-500 text-lg" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-600">
                      Инструменты ИИ для преподавателей
                    </h3>
</div>
<div className="space-y-3 pl-11">
<div className="flex items-center gap-3 text-sm text-slate-500">
<span>Автоматическая проверка заданий</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-500">
<span>Помощь в создании материалов и тестов</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-500">
<span>Умные рекомендации по обучению учеников</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></main>


</section>
<section className="sm:px-6 lg:px-8 flex flex-col w-full z-10 pt-20 pr-4 pb-32 pl-4 relative items-center" id="tarif">
<div className="lg:pt-6 lg:pb-6 font-sans max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 gap-x-10 gap-y-10 items-start">
<div className="lg:col-span-7">
<div className="flex gap-4 mb-8 items-center">
<div className="h-[1px] w-12 bg-indigo-600/30"></div>
<div className="flex gap-3 items-baseline">
<span className="text-sm font-bold text-indigo-600 tracking-tighter font-mono"></span>
<span className="uppercase text-xs font-bold text-indigo-600/80 tracking-widest">Тарифы</span>
</div>
<div className="h-[1px] flex-grow bg-gray-100 lg:hidden"></div>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-[#0a2540] tracking-tight">Нам
            доверяют.</h2>
</div>
<div className="lg:col-span-5 pt-1 lg:pt-3">
<div className="space-y-8">
<p className="md:text-xl leading-relaxed text-lg text-[#425466]">Всё необходимое для успешной работы.
              Посмотрите, как наша платформа помогает достигать максимальной эффективности в своей работе.</p>
<div className="flex items-center">
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl mr-auto ml-auto gap-x-8 gap-y-8 items-start">
<div className="flex flex-col space-y-12 lg:pr-6 py-2">
<div className="flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white to-blue-50 border border-blue-200 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_0_5px_10px_rgba(37,99,235,0.15)] text-[#2563eb] flex items-center justify-center mb-5">
<svg className="w-6 h-6 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z"></path>
<path className="" d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
</svg>
</div>
<h3 className="text-[22px] leading-snug font-semibold text-gray-900 tracking-tight mb-2.5 drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
            Онлайн-доска и звонки</h3>
<p className="text-[15px] leading-relaxed text-gray-600">Проводите занятия на платформе: видеосвязь один на один
            или с группой, чат, демонстрация экрана и встроенная интерактивная доска с инструментами как в Miro. Все
            материалы и заметки сохраняются автоматически и доступны после урока.</p>
</div>
<div className="flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white to-blue-50 border border-blue-200 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_0_5px_10px_rgba(37,99,235,0.15)] text-[#2563eb] flex items-center justify-center mb-5">
<svg className="w-6 h-6 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-[22px] leading-snug font-semibold text-gray-900 tracking-tight mb-2.5 drop-shadow-[0_1px_1px_rgba(255,255,255,1)]">
            Управление учениками</h3>
<p className="text-[15px] leading-relaxed text-gray-600">Ведите учет учеников и предметов, создавайте расписание
            занятий и группы. Добавляйте материалы, назначайте домашние задания и пробники, отмечайте прогресс по
            кодификатору. Храните контакты и условия оплаты, анализируйте статистику и результаты — всё в одном месте.
          </p>
</div>
</div>
<div className="border border-blue-300 rounded-[2.5rem] bg-gradient-to-b from-blue-50 to-[#dbeafe] flex flex-col relative overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),_0_10px_20px_rgba(0,0,0,0.1)] group">
<div className="bg-gradient-to-b from-white to-[#f8fbff] z-10 border-gray-200 border rounded-[2.5rem] mt-[5px] mr-[5px] mb-0 ml-[5px] pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_2px_5px_rgba(255,255,255,1),_0_15px_30px_-10px_rgba(0,0,0,0.2)]">
<div className="flex justify-between items-center mb-5">
<h3 className="text-xl font-bold text-[#1e40af] tracking-tight drop-shadow-sm">Профи</h3>
<span className="text-[11px] uppercase font-bold text-[#1e40af] tracking-widest bg-gradient-to-b from-blue-100 to-blue-200 border-blue-300 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),_0_2px_4px_rgba(0,0,0,0.05)]">Популярный</span>
</div>
<div className="flex mb-4 gap-x-2 gap-y-2 items-end">
<span className="leading-none text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">700 ₽</span>
<span className="text-[15px] font-semibold text-gray-600 mb-1">/месяц</span>
</div>
<p className="text-[15px] font-medium text-gray-500 mb-8">Полный доступ для профессиональных репетиторов.</p>
<button className="text-[15px] hover:from-[#2563eb] hover:to-[#1e40af] active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.4)] active:translate-y-[2px] transition-all font-semibold text-white bg-gradient-to-b from-[#3b82f6] to-[#1d4ed8] w-full border-blue-300 rounded-full border-t mb-4 pt-3.5 pb-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_6px_10px_rgba(29,78,216,0.3)]" onclick="window.location.href='https://app.toprep.space/'" role="button">Начать</button>
<button className="text-[15px] hover:from-gray-50 hover:to-gray-200 active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] active:translate-y-[2px] transition-all font-semibold text-gray-700 bg-gradient-to-b from-white to-gray-100 w-full border-gray-300 border rounded-full pt-3.5 pb-3.5 shadow-[inset_0_2px_2px_rgba(255,255,255,1),_0_4px_6px_rgba(0,0,0,0.05)]" onclick="window.location.href='https://t.me/toprepspace'">Узнать подробнее</button>
</div>
<div className="px-8 pt-10 pb-10 relative z-0">
<h4 className="text-[11px] uppercase font-extrabold text-blue-900 tracking-[0.15em] mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Включает</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_2px_3px_rgba(0,0,0,0.1)] text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">До 10 учеников</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_2px_3px_rgba(0,0,0,0.1)] text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">Расширенная отчетность</span>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_2px_3px_rgba(0,0,0,0.1)] text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">Приоритетная поддержка</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_2px_3px_rgba(0,0,0,0.1)] text-[#1d4ed8] flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">Большой набор инструментов</span>
</li>
</ul>
</div>
</div>
<div className="border border-gray-300 rounded-[2.5rem] bg-gradient-to-b from-[#e5e7eb] to-[#f3f4f6] flex flex-col relative overflow-hidden shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),_0_10px_20px_rgba(0,0,0,0.05)] group">
<div className="z-10 bg-gradient-to-b from-white to-gray-50 border-gray-200 border rounded-[2.5rem] mt-[5px] mr-[5px] mb-0 ml-[5px] pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_2px_5px_rgba(255,255,255,1),_0_15px_30px_-10px_rgba(0,0,0,0.15)]">
<div className="flex justify-between items-center mb-5 h-[28px]">
<h3 className="text-xl font-bold text-gray-800 tracking-tight drop-shadow-sm">Профи
            </h3>
</div>
<div className="flex items-end gap-2 mb-4">
<span className="leading-none text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,1)]">7000 ₽</span>
<span className="text-[15px] font-semibold text-gray-600 mb-1">/ год</span>
</div>
<p className="text-[15px] font-medium text-gray-500 mb-8">Всего 583 ₽ в месяц. Экономия 1400 ₽ в год.</p>
<button className="text-[15px] hover:from-gray-700 hover:to-gray-900 active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.6)] active:translate-y-[2px] transition-all font-semibold text-white bg-gradient-to-b from-gray-800 to-black w-full border-gray-600 rounded-full border-t mb-4 pt-3.5 pb-3.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),_0_6px_10px_rgba(0,0,0,0.3)]" onclick="window.location.href='https://app.toprep.space/'" role="button">Начать</button>
<button className="text-[15px] hover:from-gray-50 hover:to-gray-200 active:shadow-[inset_0_4px_6px_rgba(0,0,0,0.1)] active:translate-y-[2px] transition-all font-semibold text-gray-700 bg-gradient-to-b from-white to-gray-100 w-full border-gray-300 border rounded-full pt-3.5 pb-3.5 shadow-[inset_0_2px_2px_rgba(255,255,255,1),_0_4px_6px_rgba(0,0,0,0.05)]" onclick="window.location.href='https://t.me/toprepspace'">Узнать подробнее</button>
</div>
<div className="px-8 pt-10 pb-10 relative z-0">
<h4 className="text-[11px] uppercase font-extrabold text-gray-800 tracking-[0.15em] mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Включает</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_2px_3px_rgba(0,0,0,0.1)] text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">До 10 учеников</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_2px_3px_rgba(0,0,0,0.1)] text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">Расширенная отчетность</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_2px_3px_rgba(0,0,0,0.1)] text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">Приоритетная поддержка</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full bg-gradient-to-b from-gray-200 to-gray-300 border border-gray-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),_0_2px_3px_rgba(0,0,0,0.1)] text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
<svg className="w-3 h-3 drop-shadow-sm" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-[15px] font-medium text-gray-700">Большой набор инструментов</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="w-[100%] max-w-7xl mx-auto">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs tracking-widest text-neutral-500 uppercase font-geist">Познакомьтесь с
          возможностями платформы ближе</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Функционал</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="./wiki/tutor_profile.html">
<img alt="Cloud Analytics dashboard project" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_1.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Редактирование личных данных • Настройка предметов и ставок •
              Управление расписанием • Настройка уведомлений</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Профиль репетитора</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="./wiki/tutor_calendar.html">
<img alt="E-commerce platform" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_2.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Создание занятия • Редактирование расписания • Отмена и перенос
              уроков • Управление статусами занятий</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Управление занятиями
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="https://app.toprep.space/">
<img alt="Portfolio website" className="h-48 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_3.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Добавление ученика • Редактирование данных ученика • Поиск и
              фильтрация учеников • Архивирование профилей</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Профиль студента</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="./wiki/tutor_dashboard.html">
<img alt="Product launch landing page" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="./assets/landing/f_4.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Добавление предмета • Редактирование информации о предмете •
              Назначение учеников на предмет • Настройка стоимости и параметров обучения</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Управление предметами
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="./wiki/tutor_dashboard.html">
<img alt="Mobile app design" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_5.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Учёт оплат • История платежей • Контроль задолженностей •
              Финансовая отчётность</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Управление финансами
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="https://app.toprep.space/">
<img alt="Data visualization" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_6.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Просмотр расписания • Подтверждение участия • История занятий •
              Домашние задания</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Занятия для студента
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="./wiki/tutor_students.html">
<img alt="Design system" className="h-72 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_7.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Добавление ученика • Редактирование данных ученика • Поиск и
              фильтрация учеников • Архивирование профилей</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Управление учениками
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="#timeline">
<img alt="Brand identity and campaign visuals" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="./assets/landing/f_8.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Новые инструменты для обучения • Модуль курсов • Конструктор
              тестов и экзаменов • Инструментарий школ (администрирование)</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Функции в разработке
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
<a className="group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm" href="https://app.toprep.space/">
<img alt="Web application" className="h-56 w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="./assets/landing/f_9.png"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-white/70 font-geist">Календарь занятий • Напоминания об уроках • Просмотр предстоящих
              событий • Синхронизация расписания</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Календарь для студента
              </h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
<i className="h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="./wiki/index.html">Переходите
        на вики</a>
</div>
</section>
<section className="relative w-full max-w-7xl mx-auto mt-24 p-6 sm:p-8 bg-white border border-neutral-200 rounded-3xl shadow-2xl">

<div className="flex flex-col lg:flex-row lg:items-center gap-4">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter text-zinc-950 font-geist">
        Как это работает
      </h2>
<div className="hidden lg:block w-px h-12 bg-neutral-200"></div>
<p className="text-sm sm:text-base text-neutral-400 tracking-tight">
        Три простых шага для начала работы
      </p>
</div>
<div className="h-px bg-neutral-200 mt-6"></div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

<div className="group relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<span className="text-7xl sm:text-8xl font-bold text-neutral-100 select-none">
        01
      </span>
<div className="mt-8 flex gap-5">
<div className="w-px bg-neutral-200"></div>
<div>
<h3 className="text-3xl sm:text-4xl tracking-tighter text-neutral-900">
              Зарегистрируйтесь
            </h3>
<p className="mt-3 text-neutral-600 leading-relaxed">
              Создайте аккаунт и получите доступ к личному кабинету со всеми инструментами платформы.
            </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<span className="text-7xl sm:text-8xl font-bold text-neutral-100 select-none">
        02
      </span>
<div className="mt-8 flex gap-5">
<div className="w-px bg-neutral-200"></div>
<div>
<h3 className="text-3xl sm:text-4xl tracking-tighter text-neutral-900">
              Выберите тариф
            </h3>
<p className="mt-3 text-neutral-600 leading-relaxed">
              Подберите подходящий тарифный план в зависимости от количества учеников и задач.
            </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
<span className="text-7xl sm:text-8xl font-bold text-neutral-100 select-none">
        03
      </span>
<div className="mt-8 flex gap-5">
<div className="w-px bg-neutral-200"></div>
<div>
<h3 className="text-3xl sm:text-4xl tracking-tighter text-neutral-900">
              Начните работу
            </h3>
<p className="mt-3 text-neutral-600 leading-relaxed">
              Проводите занятия, управляйте учениками и используйте все возможности платформы в одном месте.
            </p>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="https://app.toprep.space/">Попробуйте
        за 0₽</a>
</div>
</section>
<section className="bg-white pt-32 pb-32">
<div className="max-w-3xl mx-auto px-6 reveal">
<h2 className="text-2xl font-medium text-gray-900 tracking-tight text-center mb-10">Частые вопросы</h2>
<div className="space-y-4">
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              У меня уже есть ученики.
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Не ищите клиентов заново. Просто организуйте работу удобнее.
          </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              Мне нужен стабильный сервис.
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Российская платформа без зависимости от зарубежных сервисов.
          </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              Я развиваю свою практику.
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Создайте профессиональный опыт для учеников без лишней административной работы.
          </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              Я устал от таблиц и чатов.
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Все ученики, занятия, оплаты и материалы в одном месте.
          </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              Зачем мне переходить, если всё работает?
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Если вам удобно вести учеников в таблицах и чатах — ничего менять не нужно. Мы нужны тем, кто хочет тратить
            меньше времени на организацию занятий.
          </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              А если сервис закроется?
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Мы работаем в российской юрисдикции и развиваем продукт для долгосрочной работы преподавателей.
          </p>
</details>
<details className="group border border-gray-200 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-gray-50/50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="text-sm font-medium">
              Я не хочу несколько дней всё настраивать.
            </h3>
<div className="white-bg p-1 rounded-md border border-gray-100 shadow-sm group-open:rotate-180 transition-transform">
<svg className="w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</summary>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Первых учеников можно добавить за несколько минут.
          </p>
</details>
</div>
</div>
</section>
<section className="bg-black pt-24 pb-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="fade-in text-center max-w-4xl mr-auto ml-auto" style={{animationPlayState: 'running'}}>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-bold text-white tracking-tight mb-8">Будущее вашей работы
          <span className="bg-clip-text font-medium text-transparent font-playfair bg-neutral-50/60">начинается сегодня</span>
</h2>
<p className="leading-relaxed text-xl text-gray-300 max-w-2xl mr-auto mb-12 ml-auto">Присоединяйтесь к нашему
          сообществу,
          которые уже эффективно управляет своими ресурсами и зарабатывайте с TopRep.</p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 slide-up delay-200" style={{animationPlayState: 'running'}}>
<button className="group inline-flex hover:bg-gray-100 transition-all duration-300 hover:shadow-xl font-semibold text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-3 gap-y-3 items-center" onclick="window.location.href='https://app.toprep.space/'" role="button">
<svg aria-hidden="true" className="lucide lucide-rocket group-hover:scale-110 transition-transform w-[24px] h-[24px]" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>
                        Начать бесплатно
                    </button>
<button className="inline-flex hover:bg-gray-900 transition-all duration-300 font-medium text-white border-gray-600 border rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-3 gap-y-3 items-center" onclick="window.location.href='https://t.me/toprepspace'" role="button">
<svg aria-hidden="true" className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        Узнать подробнее
                    </button>
</div>

<div className="text-center border-gray-800 border-t pt-16 gap-x-8 gap-y-8" style={{animationPlayState: 'running'}}>
<p className="leading-relaxed text-xl text-gray-300 max-w-2xl mr-auto mb-12 ml-auto" id="contact">Мы всегда рады
            вашим вопросам!
            info@toprep.space</p>
</div>
</div>
</div>
</section>
<footer className="bg-white border-gray-100 border-t pt-24 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="bg-black w-4 h-4 bg-[url(logo.jpg)] bg-cover bg-center rounded-full">
</div>
<span className="text-sm font-semibold tracking-tight">ТОПРЕП</span>
</div>
<p className="leading-relaxed text-sm text-gray-500 pr-4">Видеозвонки, онлайн-доска, сохранение материалов - все в
            одном месте.</p>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-4">ТОПРЕР</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className=""><a className="hover:text-gray-900" href="#tarif">тарифы</a></li>
<li className=""><a className="hover:text-gray-900" href="#contact">контакты</a></li>
<li className=""><a className="hover:text-gray-900" href="#"></a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-4">Информация</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className=""><a className="hover:text-gray-900" href="https://s3.twcstorage.ru/legal/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf">Политика в отношении обработки персональных данных</a></li>
<li className=""><a className="hover:text-gray-900" href="https://s3.twcstorage.ru/legal/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20.pdf">Пользовательское соглашение</a></li>
<li className=""><a className="hover:text-gray-900" href="./wiki/privacy.html">Документы</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-gray-900 mb-4">Репетиторам</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className=""><a className="hover:text-gray-900" href="https://app.toprep.space/">Личный кабинет</a></li>
<li className=""><a className="hover:text-gray-900" href="https://app.toprep.space/">Зарегистрироваться</a></li>
<li className=""><a className="hover:text-gray-900" href="#"></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row border-gray-100 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs text-gray-400">© 2026 toprep
          ИНН: <a className="" href="tel:244313524709">244313524709</a>
          ФИО: КАНИН НИКИТА РОМАНОВИЧ</p>
<div className="flex gap-x-4 gap-y-4" onclick="window.location.href='https://t.me/toprepspace'" role="button">
<a className="text-gray-400 hover:text-gray-900" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="logos" data-logos="telegram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="SVG6DaOZcwt" x1="50%" x2="50%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2aabee"></stop>
<stop offset="100%" stop-color="#229ed9"></stop>
</lineargradient>
</defs>
<path className="" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0" fill="url(#SVG6DaOZcwt)"></path>
<path className="" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072" fill="#fff">
</path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-900" href="mailto:info@toprep.space">
<svg aria-hidden="true" className="lucide lucide-github w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="logos" data-logos="mailgun-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 256 261" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M126.143.048C197.685.048 256 58.363 256 130.025a42.083 42.083 0 0 1-63.967 35.71l-.6-.36l-.241.601c-18.108 32.825-57.803 47.059-92.643 33.22c-34.84-13.837-53.951-51.428-44.602-87.731c9.349-36.304 44.24-59.988 81.43-55.276s65.073 36.348 65.073 73.836a13.707 13.707 0 0 0 27.294 0c0-56.132-45.469-101.655-101.601-101.721c-47.083-.085-88.07 32.152-99.083 77.93c-11.012 45.776 10.83 93.128 52.8 114.466s93.098 11.085 123.596-24.784l21.643 18.276a129.5 129.5 0 0 1-98.956 45.93C55.864 257.986 0 200.397 0 130.086S55.864 2.185 126.143.048m0 83.926a46.171 46.171 0 1 0 .12 92.223c24.551-1.286 43.789-21.584 43.757-46.169s-19.323-44.832-43.877-46.054m0 27.414c10.293 0 18.637 8.344 18.637 18.637s-8.344 18.637-18.637 18.637s-18.637-8.344-18.637-18.637s8.344-18.637 18.637-18.637" fill="#f06b66"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>

<div className="bg-neutral-950 text-neutral-300">






</div>


    </>
  );
}
