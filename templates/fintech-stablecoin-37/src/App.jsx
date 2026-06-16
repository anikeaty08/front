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



      // Initialize Lucide Icons
      lucide.createIcons();

      // FAQ Accordion Logic
      document.querySelectorAll('.faq-button').forEach(button => {
          button.addEventListener('click', () => {
              const content = button.nextElementSibling;
              const icon = button.querySelector('i');

              // Close others
              document.querySelectorAll('.faq-content').forEach(c => {
                  if (c !== content) {
                      c.classList.add('hidden');
                      c.previousElementSibling.querySelector('i').classList.remove('rotate-180');
                  }
              });

              // Toggle current
              content.classList.toggle('hidden');
              icon.classList.toggle('rotate-180');
          });
      });

      // Intersection Observer for Fade-in Animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.fade-in-section').forEach((section) => {
          observer.observe(section);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
<i className="text-[#315EFB] w-4 h-4" data-lucide="russian-ruble" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">RUBx</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-lg text-gray-600 hover:text-gray-900 transition-colors nav-link" href="#about">
              Что это
            </a>
<a className="text-lg text-gray-600 hover:text-gray-900 transition-colors nav-link" href="#use-cases">
              Применение
            </a>
<a className="text-lg text-gray-600 hover:text-gray-900 transition-colors nav-link" href="#buy">
              Где купить
            </a>
<a className="text-lg text-gray-600 hover:text-gray-900 transition-colors nav-link" href="#faq">
              FAQ
            </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-lg text-gray-600 hover:text-gray-900 font-medium transition-colors nav-link" href="#">
              Документация
            </a>
<a className="inline-flex items-center justify-center rounded-full bg-[#315EFB] px-6 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 btn-glow" href="#buy">
              Купить RUBx
            </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-white to-white">

<div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl pointer-events-none animate-pulse-soft hidden lg:block"></div>
<div className="absolute bottom-10 right-20 w-[40rem] h-[40rem] bg-gradient-to-l from-[#315EFB]/10 to-blue-300/10 rounded-full blur-3xl pointer-events-none animate-float-slow hidden lg:block"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] opacity-40 pointer-events-none hidden lg:block">
<svg className="w-full h-full" fill="none" viewbox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
<g className="animate-spin-slow">
<circle className="orbit-path" cx="400" cy="400" r="390"></circle>
<circle className="animate-pulse-soft" cx="790" cy="400" fill="#315EFB" r="4"></circle>
<circle cx="10" cy="400" fill="#9CA3AF" r="3"></circle>
</g>
<g className="animate-spin-slow-reverse" style={{animationDuration: '45s'}}>
<circle className="orbit-path" cx="400" cy="400" r="300"></circle>
<circle className="animate-pulse-soft" cx="400" cy="100" fill="#315EFB" r="5"></circle>
<circle cx="400" cy="700" fill="#9CA3AF" r="4"></circle>
</g>
<g className="animate-spin-slow" style={{animationDuration: '25s'}}>
<circle className="orbit-path" cx="400" cy="400" r="200"></circle>
<circle cx="600" cy="400" fill="#315EFB" fillOpacity="0.8" r="6"></circle>
</g>
<path className="network-line" d="M400 100 L600 400 L400 700 L10" opacity="0.6" stroke="url(#gradient-line)" strokeWidth="1.5"></path>
<path className="network-line" d="M790 400 L400 400 L400 100" opacity="0.4" stroke="url(#gradient-line)" strokeWidth="1.5" style={{animationDelay: '1s'}}></path>
<circle className="animate-pulse-soft" cx="400" cy="400" fill="url(#core-glow)" opacity="0.15" r="100"></circle>
<circle className="animate-spin-slow" cx="400" cy="400" r="100" stroke="rgba(49, 94, 251, 0.2)" stroke-dasharray="2 4" strokeWidth="1"></circle>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gradient-line" x1="0" x2="800" y1="0" y2="800">
<stop stop-color="#315EFB" stop-opacity="0"></stop>
<stop offset="0.5" stop-color="#315EFB"></stop>
<stop offset="1" stop-color="#315EFB" stop-opacity="0"></stop>
</lineargradient>
<radialgradient cx="0.5" cy="0.5" id="core-glow" r="0.5">
<stop stop-color="#315EFB"></stop>
<stop offset="1" stop-color="#315EFB" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
<div className="absolute inset-0 moving-grid opacity-30"></div>
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full blur-[2px] animate-float opacity-50"></div>
<div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full blur-[2px] animate-float-slow opacity-40"></div>
<div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#315EFB] rounded-full blur-[1px] animate-pulse-soft opacity-60"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-3xl">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-[1.1] fade-in-section">
            RUBx — рублевый
            <br className="hidden lg:block"/>
            стейблкоин
          </h1>
<p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed font-normal max-w-2xl fade-in-section delay-100">
            Цифровой инструмент для быстрых переводов, международных расчетов и
            современной цифровой торговли.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10 fade-in-section delay-200">
<a className="inline-flex items-center justify-center rounded-full bg-[#315EFB] px-8 py-4 text-lg font-medium text-white hover:bg-blue-700 transition-colors gap-2 btn-glow hover-lift" href="#buy">
              Купить RUBx
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 px-8 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors btn-glow hover-lift" href="#">
              Документация
            </a>
</div>
<div className="flex items-center gap-3 text-base text-gray-500 fade-in-section delay-300">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 relative z-10 hover:-translate-y-1 transition-transform cursor-default">
                F
              </div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 relative z-0 hover:-translate-y-1 transition-transform cursor-default">
                B
              </div>
</div>
<span>Торговля доступна на FINZY и BitMart</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-6 fade-in-section">
            Что такое RUBx
          </h2>
<p className="text-xl text-gray-600 leading-relaxed fade-in-section delay-100">
            RUBx — рублевый стейблкоин с фиксированным курсом, созданный для
            цифровых расчетов, переводов и международных операций. RUBx сочетает
            скорость блокчейн-технологий, удобство цифровых переводов и
            стабильность расчетов в рублях.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section delay-100">

<div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group hover-lift animated-border-top">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#315EFB] transition-colors" data-lucide="equal" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
              Фиксированный курс
            </h3>
<p className="text-lg text-gray-600">
              Стоимость всегда равна одному российскому рублю. Надежная база для
              расчетов.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group hover-lift animated-border-top">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#315EFB] transition-colors" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
              Быстрые переводы
            </h3>
<p className="text-lg text-gray-600">
              Транзакции осуществляются за секунды, минуя традиционные
              банковские задержки.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group hover-lift animated-border-top">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#315EFB] transition-colors" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
              Работа 24/7
            </h3>
<p className="text-lg text-gray-600">
              Сеть функционирует без выходных и праздников, обеспечивая
              постоянный доступ.
            </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group hover-lift animated-border-top">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#315EFB] transition-colors" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
              Международные операции
            </h3>
<p className="text-lg text-gray-600">
              Удобный инструмент для трансграничных расчетов и
              внешнеэкономической деятельности.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="use-cases">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="flex-1">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-10 fade-in-section">
              Где используется RUBx
            </h2>
<div className="flex flex-col gap-4">
<div className="p-5 rounded-2xl border border-gray-100/60 bg-white/40 backdrop-blur-sm hover:bg-white hover:border-blue-200 hover:shadow-[0_8px_30px_-4px_rgba(49,94,251,0.12)] transition-all duration-500 cursor-default relative overflow-hidden group hover:-translate-y-1 fade-in-section delay-100">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 transition-colors duration-500 pointer-events-none"></div>
<div className="relative z-10 flex gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50 group-hover:bg-[#315EFB] group-hover:border-[#315EFB] transition-colors duration-500 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#315EFB] group-hover:text-white transition-colors duration-500" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1 group-hover:text-[#315EFB] transition-colors duration-300">
                      Международные расчеты
                    </h3>
<p className="text-base text-gray-600 leading-snug">
                      Оптимизация ВЭД-контрактов и снижение издержек на
                      конвертацию.
                    </p>
</div>
</div>
</div>
<div className="p-5 rounded-2xl border border-gray-100/60 bg-white/40 backdrop-blur-sm hover:bg-white hover:border-blue-200 hover:shadow-[0_8px_30px_-4px_rgba(49,94,251,0.12)] transition-all duration-500 cursor-default relative overflow-hidden group hover:-translate-y-1 fade-in-section delay-200">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 transition-colors duration-500 pointer-events-none"></div>
<div className="relative z-10 flex gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50 group-hover:bg-[#315EFB] group-hover:border-[#315EFB] transition-colors duration-500 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#315EFB] group-hover:text-white transition-colors duration-500" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1 group-hover:text-[#315EFB] transition-colors duration-300">
                      Бизнес-переводы
                    </h3>
<p className="text-base text-gray-600 leading-snug">
                      Мгновенные B2B платежи партнерам и контрагентам.
                    </p>
</div>
</div>
</div>
<div className="p-5 rounded-2xl border border-gray-100/60 bg-white/40 backdrop-blur-sm hover:bg-white hover:border-blue-200 hover:shadow-[0_8px_30px_-4px_rgba(49,94,251,0.12)] transition-all duration-500 cursor-default relative overflow-hidden group hover:-translate-y-1 fade-in-section delay-300">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 transition-colors duration-500 pointer-events-none"></div>
<div className="relative z-10 flex gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50 group-hover:bg-[#315EFB] group-hover:border-[#315EFB] transition-colors duration-500 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#315EFB] group-hover:text-white transition-colors duration-500" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1 group-hover:text-[#315EFB] transition-colors duration-300">
                      Цифровая торговля
                    </h3>
<p className="text-base text-gray-600 leading-snug">
                      Расчеты на маркетплейсах и P2P-платформах.
                    </p>
</div>
</div>
</div>
<div className="p-5 rounded-2xl border border-gray-100/60 bg-white/40 backdrop-blur-sm hover:bg-white hover:border-blue-200 hover:shadow-[0_8px_30px_-4px_rgba(49,94,251,0.12)] transition-all duration-500 cursor-default relative overflow-hidden group hover:-translate-y-1 fade-in-section delay-400">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 transition-colors duration-500 pointer-events-none"></div>
<div className="relative z-10 flex gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100/50 group-hover:bg-[#315EFB] group-hover:border-[#315EFB] transition-colors duration-500 shadow-sm shrink-0">
<i className="w-5 h-5 text-[#315EFB] group-hover:text-white transition-colors duration-500" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1 group-hover:text-[#315EFB] transition-colors duration-300">
                      Криптобиржи
                    </h3>
<p className="text-base text-gray-600 leading-snug">
                      Базовый актив для торговли цифровыми валютами.
                    </p>
</div>
</div>
</div>
</div>
<p className="mt-8 text-lg text-gray-500 flex items-center gap-2 fade-in-section delay-500">
<i className="w-5 h-5" data-lucide="info" strokeWidth="1.5"></i>
              RUBx доступен на FINZY и BitMart
            </p>
</div>

<div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none fade-in-section delay-100">
<div className="bg-gray-50/80 backdrop-blur-md border border-gray-100 rounded-[2.5rem] p-8 relative overflow-hidden premium-shadow animate-float-slow">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent z-0"></div>
<svg className="absolute w-[180%] h-[180%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-0" fill="none" viewbox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
<g className="animate-spin-slow">
<circle cx="400" cy="400" r="280" stroke="#315EFB" stroke-dasharray="4 8" strokeWidth="1.5"></circle>
<circle cx="400" cy="400" r="380" stroke="#315EFB" stroke-dasharray="2 12" strokeWidth="1"></circle>
<circle cx="400" cy="400" opacity="0.3" r="180" stroke="#315EFB" strokeWidth="1"></circle>
<circle className="animate-pulse-soft" cx="680" cy="400" fill="#315EFB" r="5"></circle>
<circle className="animate-pulse-soft" cx="120" cy="400" fill="#315EFB" r="4"></circle>
<circle className="animate-pulse-soft" cx="400" cy="120" fill="#315EFB" r="6"></circle>
</g>
<g className="animate-spin-slow-reverse" style={{animationDuration: '40s'}}>
<circle cx="400" cy="400" opacity="0.5" r="330" stroke="#9CA3AF" stroke-dasharray="3 9" strokeWidth="1"></circle>
<circle cx="730" cy="400" fill="#9CA3AF" r="3"></circle>
<circle cx="400" cy="730" fill="#315EFB" r="4"></circle>
</g>
<path className="flow-stroke" d="M400 120 Q 550 250 680 400" stroke="url(#globe-glow2)" strokeWidth="2"></path>
<path className="flow-stroke" d="M120 400 Q 250 550 400 730" stroke="url(#globe-glow2)" strokeWidth="2" style={{animationDelay: '0.5s'}}></path>
<path className="flow-stroke" d="M680 400 Q 550 550 400 730" stroke="url(#globe-glow2)" strokeWidth="1.5" style={{animationDelay: '1s'}}></path>
<defs>
<lineargradient id="globe-glow2" x1="0" x2="1" y1="0" y2="1">
<stop stop-color="#315EFB" stop-opacity="0"></stop>
<stop offset="0.5" stop-color="#315EFB" stop-opacity="0.8"></stop>
<stop offset="1" stop-color="#315EFB" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-[64px] animate-pulse-soft z-0"></div>
</div>

<div className="relative z-10 w-full h-full min-h-[460px] flex flex-col justify-center gap-6">

<div className="bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-900/5 rounded-[2rem] p-6 hover:-translate-y-1.5 transition-transform duration-500 w-full max-w-sm self-end animate-float">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-[#315EFB] font-semibold text-lg border border-blue-100/50 shadow-inner">
<i className="w-6 h-6" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs text-gray-500 font-medium uppercase tracking-widest mb-1">
                          Доступно RUBx
                        </div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">
                          1 250 000,00
                        </div>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-gray-50/80 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-100 hover:text-gray-600 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200/80 shadow-sm py-3 rounded-xl text-sm font-medium transition-colors flex justify-center items-center gap-2 group">
<div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#315EFB] transition-colors">
<i className="w-3.5 h-3.5" data-lucide="arrow-down-left"></i>
</div>
                      Пополнить
                    </button>
<button className="flex-1 bg-[#315EFB] hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 flex justify-center items-center gap-2 group">
<i className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-lucide="send"></i>
                      Перевести
                    </button>
</div>
</div>

<div className="bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-900/5 rounded-[2rem] p-6 hover:-translate-y-1.5 transition-transform duration-500 w-[95%] max-w-sm self-start animate-float-slow relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex justify-between items-center mb-6 relative z-10">
<div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      Международный перевод
                    </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-600 rounded-full text-[11px] font-semibold border border-green-100/50">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      Успешно
                    </div>
</div>
<div className="flex items-center justify-between mb-6 relative">
<div className="flex flex-col items-center gap-2 z-10 bg-white/60 px-2 py-1 rounded-xl backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-700 shadow-sm relative">
<span className="text-[13px] font-semibold">MOW</span>
<img alt="RU" className="w-4 h-4 rounded-full absolute -bottom-1 -right-1 border-2 border-white shadow-sm object-cover" src="https://flagcdn.com/w20/ru.png"/>
</div>
<span className="text-[11px] font-medium text-gray-500">
                        Москва
                      </span>
</div>
<div className="absolute top-6 left-12 right-12 h-px flex items-center justify-center">
<svg className="w-full h-8 overflow-visible absolute" preserveaspectratio="none" viewbox="0 0 100 24">
<path d="M0,12 Q50,2 100,12" fill="none" stroke="#E5E7EB" stroke-dasharray="3 3" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path className="flow-stroke" d="M0,12 Q50,2 100,12" fill="none" stroke="#315EFB" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="bg-white border border-blue-100 rounded-full w-7 h-7 flex items-center justify-center shadow-md z-10 text-[#315EFB] mb-2 transform hover:scale-110 transition-transform">
<i className="w-3.5 h-3.5" data-lucide="plane"></i>
</div>
</div>
<div className="flex flex-col items-center gap-2 z-10 bg-white/60 px-2 py-1 rounded-xl backdrop-blur-sm">
<div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#315EFB] shadow-sm relative">
<span className="text-[13px] font-semibold">DXB</span>
<img alt="AE" className="w-4 h-4 rounded-full absolute -bottom-1 -left-1 border-2 border-white shadow-sm object-cover" src="https://flagcdn.com/w20/ae.png"/>
</div>
<span className="text-[11px] font-medium text-gray-500">
                        Дубай
                      </span>
</div>
</div>
<div className="bg-gray-50/80 rounded-2xl p-4 flex justify-between items-center border border-gray-100/80 backdrop-blur-sm relative z-10">
<div>
<div className="text-[11px] text-gray-500 font-medium mb-1">
                        Сумма перевода
                      </div>
<div className="text-xl font-bold tracking-tight text-gray-900">
                        250 000 RUBx
                      </div>
</div>
<div className="w-10 h-10 rounded-full bg-green-100 border border-green-200/50 flex items-center justify-center text-green-600 shadow-sm">
<i className="w-5 h-5" data-lucide="check" strokeWidth="2.5"></i>
</div>
</div>
</div>

<div className="absolute right-2 top-1/3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-100 shadow-xl shadow-blue-900/5 flex items-center gap-2.5 animate-float hover:scale-105 transition-transform cursor-default z-20" style={{animationDelay: '1s'}}>
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#315EFB] opacity-40"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#315EFB]"></span>
</div>
<span className="text-xs font-semibold text-gray-700">
                    Мгновенно
                  </span>
</div>
<div className="absolute left-2 bottom-16 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-gray-100 shadow-xl shadow-blue-900/5 flex items-center gap-2.5 animate-float-slow hover:scale-105 transition-transform cursor-default z-20" style={{animationDelay: '2.5s'}}>
<div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#315EFB]" data-lucide="shield-check"></i>
</div>
<span className="text-xs font-semibold text-gray-700">
                    Защищено
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center fade-in-section">
          Почему выбирают RUBx
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-section delay-100">
<div className="bg-white rounded-3xl p-8 border border-gray-100 hover-lift group relative overflow-hidden animated-border-top">
<div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#315EFB] transition-all duration-400">
<i className="w-7 h-7 text-[#315EFB] group-hover:text-white transition-colors duration-400" data-lucide="gauge" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
              Скорость
            </h3>
<p className="text-lg text-gray-600">
              Мгновенные транзакции без банковских часов.
            </p>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-100 hover-lift group relative overflow-hidden animated-border-top">
<div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#315EFB] transition-all duration-400">
<i className="w-7 h-7 text-[#315EFB] group-hover:text-white transition-colors duration-400" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
              Стабильность
            </h3>
<p className="text-lg text-gray-600">
              Надежная привязка к курсу рубля 1:1.
            </p>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-100 hover-lift group relative overflow-hidden animated-border-top">
<div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#315EFB] transition-all duration-400">
<i className="w-7 h-7 text-[#315EFB] group-hover:text-white transition-colors duration-400" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
              Доступность
            </h3>
<p className="text-lg text-gray-600">
              Интеграция с ведущими цифровыми биржами.
            </p>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-100 hover-lift group relative overflow-hidden animated-border-top">
<div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#315EFB] transition-all duration-400">
<i className="w-7 h-7 text-[#315EFB] group-hover:text-white transition-colors duration-400" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">
              Простота
            </h3>
<p className="text-lg text-gray-600">
              Понятный интерфейс для бизнеса и трейдеров.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50/30 via-white to-white" id="buy">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4 fade-in-section">
            Где купить RUBx
          </h2>
<p className="text-xl text-gray-600 max-w-3xl fade-in-section delay-100 lg:col-span-2">
            RUBx доступен для покупки, хранения и международных операций через
            партнерские платформы.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-section delay-100">

<div className="border border-gray-200/80 rounded-[2rem] p-10 flex flex-col items-start bg-white/60 backdrop-blur-sm hover-lift group relative overflow-hidden z-10 animated-border-top">
<div className="w-16 h-16 rounded-2xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/80 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-400">
<span className="text-2xl font-semibold text-gray-400">F</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
              FINZY
            </h3>
<p className="text-lg text-gray-600 mb-8 flex-1">
              Криптокошелек для хранения RUBx, цифровых переводов и оплаты по
              всему миру.
            </p>
<a className="inline-flex items-center text-lg font-medium text-[#315EFB] hover:text-blue-700 transition-colors gap-2 group" href="#">
              Перейти в FINZY
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="border border-gray-200/80 rounded-[2rem] p-10 flex flex-col items-start bg-white/60 backdrop-blur-sm hover-lift group relative overflow-hidden z-10 animated-border-top">
<div className="w-16 h-16 rounded-2xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/80 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-400">
<span className="text-2xl font-semibold text-gray-400">B</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
              BitMart
            </h3>
<p className="text-lg text-gray-600 mb-8 flex-1">
              Международная криптовалютная биржа для торговли RUBx и цифровыми
              активами.
            </p>
<a className="inline-flex items-center text-lg font-medium text-[#315EFB] hover:text-blue-700 transition-colors gap-2 group" href="#">
              Перейти на BitMart
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="border border-gray-200/80 rounded-[2rem] p-10 flex flex-col items-start bg-white/60 backdrop-blur-sm hover-lift group relative overflow-hidden z-10 animated-border-top">
<div className="w-16 h-16 rounded-2xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/80 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-400">
<span className="text-2xl font-semibold text-gray-400">0</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">
              0xBTC
            </h3>
<p className="text-lg text-gray-600 mb-8 flex-1">
              Платформа для международных операций, цифровых переводов и
              ВЭД-расчетов.
            </p>
<a className="inline-flex items-center text-lg font-medium text-[#315EFB] hover:text-blue-700 transition-colors gap-2 group" href="#">
              Перейти в 0xBTC
              <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-t border-gray-100" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center fade-in-section">
          Часто задаваемые вопросы
        </h2>
<div className="space-y-4">
<div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 hover:border-blue-200 fade-in-section delay-100">
<button className="faq-button w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-[#315EFB] transition-colors">
                Что такое RUBx?
              </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-[#315EFB]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content hidden px-6 pb-5 text-lg text-gray-600">
              RUBx — это цифровой актив (стейблкоин), курс которого
              алгоритмически и экономически привязан к российскому рублю в
              соотношении 1:1.
            </div>
</div>
<div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 hover:border-blue-200 fade-in-section delay-200">
<button className="faq-button w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-[#315EFB] transition-colors">
                Это криптовалюта?
              </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-[#315EFB]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content hidden px-6 pb-5 text-lg text-gray-600">
              В техническом смысле RUBx использует блокчейн-технологии, но в
              отличие от классических криптовалют (как Bitcoin), он не подвержен
              волатильности, так как обеспечен и имеет фиксированный курс к
              рублю.
            </div>
</div>
<div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 hover:border-blue-200 fade-in-section delay-300">
<button className="faq-button w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-[#315EFB] transition-colors">
                Где купить RUBx?
              </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-[#315EFB]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content hidden px-6 pb-5 text-lg text-gray-600">
              На данный момент RUBx торгуется на партнерских биржах FINZY и
              BitMart. Вы можете приобрести его там за другие цифровые активы.
            </div>
</div>
<div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 hover:border-blue-200 fade-in-section delay-400">
<button className="faq-button w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-lg font-medium text-gray-900 group-hover:text-[#315EFB] transition-colors">
                Можно ли использовать RUBx для международных переводов?
              </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-[#315EFB]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content hidden px-6 pb-5 text-lg text-gray-600">
              Да, благодаря блокчейн-архитектуре, RUBx позволяет осуществлять
              мгновенные трансграничные переводы с минимальными комиссиями,
              независимо от банковских ограничений.
            </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-white border-t border-gray-100">
<div className="absolute inset-0 moving-grid opacity-30"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 fade-in-section">
          Начните использовать RUBx
        </h2>
<p className="text-xl lg:text-2xl text-gray-600 mb-10 font-normal fade-in-section delay-100">
          Покупайте, переводите и используйте RUBx для цифровых операций и
          международных расчетов.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-section delay-200">
<a className="inline-flex items-center justify-center rounded-full bg-[#315EFB] px-8 py-4 text-lg font-medium text-white hover:bg-blue-700 transition-colors btn-glow hover-lift" href="#buy">
            Купить RUBx
          </a>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 px-8 py-4 text-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors btn-glow hover-lift" href="#">
            Связаться с нами
          </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="text-gray-400 w-5 h-5" data-lucide="russian-ruble" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-gray-900">
              RUBx
            </span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-base text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">
              Документация
            </a>
<a className="hover:text-gray-900 transition-colors" href="#">
              Политика конфиденциальности
            </a>
<a className="hover:text-gray-900 transition-colors" href="#">
              Условия использования
            </a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="mt-8 text-center text-sm text-gray-400">
          © 2024 RUBx. Все права защищены.
        </div>
</div>
</footer>


    </>
  );
}
