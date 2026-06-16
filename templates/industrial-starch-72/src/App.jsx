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



      document.addEventListener('DOMContentLoaded', () => {
          const links = document.querySelectorAll('.nav-link');
          const views = document.querySelectorAll('.page-view');

          links.forEach(link => {
              link.addEventListener('click', (e) => {
                  e.preventDefault();
                  const targetId = link.getAttribute('data-target');
                  if(targetId) {
                      // Hide all
                      views.forEach(view => {
                          view.classList.remove('active');
                          // Add slight delay to force re-animation if needed,
                          // though simple toggle works for prototype
                      });
                      // Show target
                      const targetView = document.getElementById(targetId);
                      if(targetView) {
                          targetView.classList.add('active');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                  }
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer nav-link" data-target="home">
<div className="flex items-center">
<svg className="h-8 w-8 mr-2.5" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#004B87" height="28" rx="2" width="12" x="2" y="2"></rect>
<rect fill="#FACC15" height="18" rx="2" width="12" x="18" y="12"></rect>
<rect fill="#004B87" height="6" rx="2" width="12" x="18" y="2"></rect>
</svg>
<span className="font-bold text-xl tracking-tighter text-[#004B87] uppercase">
                Interstarch
              </span>
</div>
</div>

<nav className="hidden md:flex space-x-8">
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="about">
              Про компанію
            </button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="products">
              Продукція
            </button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="applications">
              Застосування
            </button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="news">
              Новини
            </button>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" data-target="contacts">
              Контакти
            </button>
</nav>

<div className="flex items-center space-x-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-0.5 cursor-pointer">
              UA
            </span>
<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="min-h-screen">

<div className="page-view active" id="home">

<section className="bg-slate-50 py-32 lg:py-40 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900 mb-8">
                Високотехнологічне виробництво інгредієнтів для світової
                індустрії
              </h1>
<p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
                Надійний B2B партнер у постачанні нативних та модифікованих
                крохмалів, сиропів і глютену для харчової, кормової та паперової
                промисловості.
              </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="nav-link bg-[#004B87] text-white px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-[#00335D] transition-colors flex justify-center items-center" data-target="products">
                  Каталог продукції
                </button>
<button className="nav-link bg-transparent border-2 border-[#004B87] text-[#004B87] px-8 py-4 text-sm font-semibold tracking-wide uppercase hover:bg-slate-50 transition-colors flex justify-center items-center" data-target="contacts">
                  Зв'язатися з нами
                </button>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">
                  Експертиза та якість
                </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Ми переробляємо понад 600 тисяч тонн кукурудзи та пшениці
                  щорічно. Наші виробничі потужності сертифіковані за
                  міжнародними стандартами FSSC 22000, ISO, Halal та Kosher, що
                  гарантує стабільність та безпечність кожної партії.
                </p>
<button className="nav-link text-sm font-semibold text-slate-900 flex items-center group" data-target="about">
                  Більше про компанію
                  <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="bg-slate-100 aspect-video w-full flex items-center justify-center text-slate-400 text-sm">
                [Зображення виробничої лінії]
              </div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight mb-12">
              Напрямки постачання
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 border border-slate-100 border-t-2 border-t-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer nav-link group" data-target="products">
<iconify-icon className="text-3xl mb-5 text-slate-900" icon="solar:cup-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Харчова промисловість
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Інгредієнти для кондитерської, м'ясної та молочної галузей.
                </p>
</div>
<div className="bg-white p-8 border border-slate-100 border-t-2 border-t-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer nav-link group" data-target="products">
<iconify-icon className="text-3xl mb-5 text-slate-900" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Кормова промисловість
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Високобілкові добавки та компоненти для тваринництва.
                </p>
</div>
<div className="bg-white p-8 border border-slate-100 border-t-2 border-t-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer nav-link group" data-target="products">
<iconify-icon className="text-3xl mb-5 text-slate-900" icon="solar:box-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Індустріальне застосування
                </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                  Рішення для виробництва паперу, картону та клеїв.
                </p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight">
                Останні новини
              </h2>
<button className="nav-link text-sm font-medium text-slate-500 hover:text-slate-900" data-target="news">
                Всі новини
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer nav-link" data-target="news">
<div className="bg-slate-100 aspect-video mb-4"></div>
<span className="text-xs text-slate-500 mb-2 block">
                  12 Жовтня, 2023
                </span>
<h3 className="text-lg font-semibold tracking-tight group-hover:text-slate-600 transition-colors leading-snug">
                  Участь у міжнародній виставці FI Europe
                </h3>
</div>
<div className="group cursor-pointer nav-link" data-target="news">
<div className="bg-slate-100 aspect-video mb-4"></div>
<span className="text-xs text-slate-500 mb-2 block">
                  05 Вересня, 2023
                </span>
<h3 className="text-lg font-semibold tracking-tight group-hover:text-slate-600 transition-colors leading-snug">
                  Модернізація лінії виробництва глютену
                </h3>
</div>
<div className="group cursor-pointer nav-link" data-target="news">
<div className="bg-slate-100 aspect-video mb-4"></div>
<span className="text-xs text-slate-500 mb-2 block">
                  20 Серпня, 2023
                </span>
<h3 className="text-lg font-semibold tracking-tight group-hover:text-slate-600 transition-colors leading-snug">
                  Розширення географії експорту до країн Азії
                </h3>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="about">
<section className="py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-10">
              Про компанію
            </h1>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-7">
<div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
<p>
                    Interstarch є одним з провідних виробників крохмалепродуктів
                    у Східній Європі. Ми спеціалізуємося на глибокій переробці
                    кукурудзи та пшениці, створюючи інгредієнти, які є основою
                    для тисяч продуктів по всьому світу.
                  </p>
<p>
                    Наш підхід базується на поєднанні багаторічного досвіду,
                    сучасних технологій та суворого контролю якості. Виробничі
                    процеси повністю автоматизовані та відповідають найвищим
                    світовим стандартам харчової безпеки.
                  </p>
<p>
                    Ми будуємо довгострокові партнерські відносини з клієнтами,
                    пропонуючи не просто продукцію, а комплексні технологічні
                    рішення для оптимізації їх виробничих процесів.
                  </p>
</div>
</div>
<div className="lg:col-span-5 grid grid-cols-2 gap-8">
<div className="border-l-2 border-slate-900 pl-4 py-1 flex flex-col justify-center">
<span className="text-4xl font-semibold tracking-tight mb-1 text-slate-900">
                    20+
                  </span>
<span className="text-sm font-medium text-slate-500">
                    Років на ринку
                  </span>
</div>
<div className="border-l-2 border-slate-900 pl-4 py-1 flex flex-col justify-center">
<span className="text-4xl font-semibold tracking-tight mb-1 text-slate-900">
                    70+
                  </span>
<span className="text-sm font-medium text-slate-500">
                    Країн експорту
                  </span>
</div>
<div className="border-l-2 border-slate-900 pl-4 py-1 flex flex-col justify-center">
<span className="text-4xl font-semibold tracking-tight mb-1 text-slate-900">
                    600k
                  </span>
<span className="text-sm font-medium text-slate-500">
                    Тонн сировини
                  </span>
</div>
<div className="border-l-2 border-slate-900 pl-4 py-1 flex flex-col justify-center">
<span className="text-4xl font-semibold tracking-tight mb-1 text-slate-900">
                    ISO
                  </span>
<span className="text-sm font-medium text-slate-500">
                    Стандарти якості
                  </span>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="products">
<section className="py-16 border-b border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight">
              Каталог продукції
            </h1>
</div>
</section>
<section className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">

<aside className="w-full md:w-64 flex-shrink-0">
<nav className="space-y-0.5">
<a className="block px-4 py-2.5 text-sm font-medium bg-[#004B87] text-white transition-colors" href="#">
                  Всі продукти
                </a>
<a className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent hover:border-slate-300 transition-colors" href="#">
                  Нативні крохмалі
                </a>
<a className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent hover:border-slate-300 transition-colors" href="#">
                  Модифіковані крохмалі
                </a>
<a className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent hover:border-slate-300 transition-colors" href="#">
                  Глюкозні сиропи
                </a>
<a className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent hover:border-slate-300 transition-colors" href="#">
                  Глютен
                </a>
<a className="block px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-2 border-transparent hover:border-slate-300 transition-colors" href="#">
                  Кукурудзяна олія
                </a>
</nav>
</aside>

<div className="flex-1">
<div className="border-y sm:border sm:border-slate-200 bg-white divide-y divide-slate-100">
<div className="hidden sm:grid sm:grid-cols-12 gap-6 px-6 py-4 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-widest">
<div className="col-span-4">Продукт</div>
<div className="col-span-5">Опис</div>
<div className="col-span-3">Характеристики</div>
</div>
<div className="px-6 py-5 sm:grid sm:grid-cols-12 gap-6 items-center hover:bg-slate-50 transition-colors group cursor-pointer nav-link" data-target="product-detail">
<div className="col-span-4 mb-2 sm:mb-0">
<h3 className="text-sm font-semibold text-slate-900 group-hover:underline">
                      Нативний кукурудзяний крохмаль
                    </h3>
</div>
<div className="col-span-5 mb-3 sm:mb-0">
<p className="text-sm text-slate-600 leading-relaxed">
                      Універсальний загущувач та стабілізатор для харчової та
                      паперової промисловості.
                    </p>
</div>
<div className="col-span-3 text-xs text-slate-500 space-y-2">
<div className="flex justify-between border-b border-slate-100 pb-1">
<span className="text-slate-400">Вологість:</span>
<span className="font-medium text-slate-700">макс 14%</span>
</div>
<div className="flex justify-between">
<span className="text-slate-400">pH:</span>
<span className="font-medium text-slate-700">4.5 - 7.0</span>
</div>
</div>
</div>
<div className="px-6 py-5 sm:grid sm:grid-cols-12 gap-6 items-center hover:bg-slate-50 transition-colors group cursor-pointer nav-link" data-target="product-detail">
<div className="col-span-4 mb-2 sm:mb-0">
<h3 className="text-sm font-semibold text-slate-900 group-hover:underline">
                      Глюкозний сироп 43 DE
                    </h3>
</div>
<div className="col-span-5 mb-3 sm:mb-0">
<p className="text-sm text-slate-600 leading-relaxed">
                      В'язка солодка рідина, використовується в кондитерських
                      виробах для контролю кристалізації.
                    </p>
</div>
<div className="col-span-3 text-xs text-slate-500 space-y-2">
<div className="flex justify-between border-b border-slate-100 pb-1">
<span className="text-slate-400">Сухі речовини:</span>
<span className="font-medium text-slate-700">80%</span>
</div>
<div className="flex justify-between">
<span className="text-slate-400">DE:</span>
<span className="font-medium text-slate-700">40-44</span>
</div>
</div>
</div>
<div className="px-6 py-5 sm:grid sm:grid-cols-12 gap-6 items-center hover:bg-slate-50 transition-colors group cursor-pointer nav-link" data-target="product-detail">
<div className="col-span-4 mb-2 sm:mb-0">
<h3 className="text-sm font-semibold text-slate-900 group-hover:underline">
                      Кукурудзяний глютен
                    </h3>
</div>
<div className="col-span-5 mb-3 sm:mb-0">
<p className="text-sm text-slate-600 leading-relaxed">
                      Цінний рослинний білок, незамінний компонент при
                      виробництві кормів для тварин.
                    </p>
</div>
<div className="col-span-3 text-xs text-slate-500 space-y-2">
<div className="flex justify-between border-b border-slate-100 pb-1">
<span className="text-slate-400">Протеїн:</span>
<span className="font-medium text-slate-700">мін 60%</span>
</div>
<div className="flex justify-between">
<span className="text-slate-400">Вологість:</span>
<span className="font-medium text-slate-700">макс 10%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="product-detail">
<section className="py-16 border-b border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="nav-link text-sm font-semibold text-slate-500 mb-8 flex items-center hover:text-slate-900 transition-colors uppercase tracking-wider" data-target="products">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear"></iconify-icon>
              До каталогу
            </button>
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
<div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2 block">
                  Нативні крохмалі
                </span>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                  Нативний кукурудзяний крохмаль
                </h1>
</div>
<button className="nav-link bg-[#004B87] text-white px-6 py-2 text-sm font-medium hover:bg-[#00335D] transition-colors" data-target="contacts">
                Запитати ціну
              </button>
</div>
</div>
</section>
<section className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 space-y-10">

<div>
<h2 className="text-xl font-semibold tracking-tight mb-4">
                  Опис продукту
                </h2>
<p className="text-sm text-slate-600 leading-relaxed">
                  Нативний кукурудзяний крохмаль — це вуглевод, отриманий із
                  зерен кукурудзи шляхом вологого помелу. Являє собою білий або
                  злегка жовтуватий порошок без вираженого смаку та запаху.
                  Широко застосовується як загущувач, стабілізатор, наповнювач у
                  харчовій промисловості, а також у виробництві паперу та
                  гофрокартону.
                </p>
</div>

<div>
<h2 className="text-xl font-semibold tracking-tight mb-4">
                  Фізико-хімічні показники
                </h2>
<div className="overflow-hidden">
<table className="min-w-full text-sm">
<tbody className="divide-y divide-slate-100">
<tr>
<td className="py-4 font-medium text-slate-900 w-1/2">
                          Зовнішній вигляд
                        </td>
<td className="py-4 text-slate-600">Білий порошок</td>
</tr>
<tr>
<td className="py-4 font-medium text-slate-900">
                          Масова частка вологи, % макс
                        </td>
<td className="py-4 text-slate-600">14.0</td>
</tr>
<tr>
<td className="py-4 font-medium text-slate-900">pH</td>
<td className="py-4 text-slate-600">4.5 - 7.0</td>
</tr>
<tr>
<td className="py-4 font-medium text-slate-900">
                          Вміст протеїну, % макс
                        </td>
<td className="py-4 text-slate-600">0.5</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-8">
<div className="bg-slate-50 p-8">
<h3 className="text-sm font-semibold tracking-tight mb-4">
                  Документація
                </h3>
<a className="flex items-center text-sm text-slate-600 hover:text-slate-900 mb-3 group" href="#">
<iconify-icon className="mr-2 text-slate-400 group-hover:text-slate-900" icon="solar:document-text-linear"></iconify-icon>
                  Специфікація (PDF)
                </a>
<a className="flex items-center text-sm text-slate-600 hover:text-slate-900 group" href="#">
<iconify-icon className="mr-2 text-slate-400 group-hover:text-slate-900" icon="solar:shield-check-linear"></iconify-icon>
                  Паспорт безпеки (MSDS)
                </a>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight mb-4">
                  Сфери застосування
                </h3>
<ul className="space-y-2">
<li>
<button className="nav-link text-sm text-slate-600 hover:underline" data-target="application-detail">
                      М'ясна промисловість
                    </button>
</li>
<li>
<button className="nav-link text-sm text-slate-600 hover:underline" data-target="application-detail">
                      Кондитерська промисловість
                    </button>
</li>
<li>
<button className="nav-link text-sm text-slate-600 hover:underline" data-target="application-detail">
                      Паперова промисловість
                    </button>
</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="applications">
<section className="py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-6">
              Сфери застосування
            </h1>
<p className="text-base text-slate-600 max-w-2xl mb-12">
              Наші інгредієнти розроблені для вирішення конкретних технологічних
              завдань у різних галузях промисловості.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-8 border border-slate-100 border-t-2 border-t-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer nav-link group" data-target="application-detail">
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  М'ясна промисловість
                </h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  Зв'язування вологи, покращення текстури та зниження
                  собівартості ковбасних виробів.
                </p>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest flex items-center">
                  Детальніше
                  <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="bg-white p-8 border border-slate-100 border-t-2 border-t-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer nav-link group" data-target="application-detail">
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Кондитерська промисловість
                </h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  Формоутворення желейних цукерок, контроль кристалізації,
                  надання структури.
                </p>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest flex items-center">
                  Детальніше
                  <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="bg-white p-8 border border-slate-100 border-t-2 border-t-slate-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer nav-link group" data-target="application-detail">
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Паперова промисловість
                </h3>
<p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  Підвищення міцності паперу, покращення друкарських
                  властивостей, виробництво гофрокартону.
                </p>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest flex items-center">
                  Детальніше
                  <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="application-detail">
<section className="py-16 border-b border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<button className="nav-link text-sm font-semibold text-slate-500 mb-8 flex items-center hover:text-slate-900 transition-colors uppercase tracking-wider" data-target="applications">
<iconify-icon className="mr-1" icon="solar:arrow-left-linear"></iconify-icon>
              Всі сфери
            </button>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900">
              Паперова промисловість
            </h1>
</div>
</section>
<section className="py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-2">
<h2 className="text-2xl font-semibold tracking-tight mb-6">
                Технологічне рішення
              </h2>
<div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed mb-12">
<p>
                  Крохмаль є одним з найважливіших компонентів у виробництві
                  паперу та картону, поступаючись за обсягами використання лише
                  целюлозі та наповнювачам. Він відіграє ключову роль на різних
                  етапах технологічного процесу.
                </p>
<p>
                  При додаванні в масу (внутрішня проклейка) крохмаль підвищує
                  фізико-механічні показники паперу, утримує дрібне волокно та
                  наповнювачі. При поверхневій обробці крохмальний клейстер
                  закриває пори на поверхні паперу, покращуючи його гладкість та
                  властивості для друку.
                </p>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-6 mt-12">
                Рекомендовані продукти
              </h2>
<div className="divide-y divide-slate-100 border-y border-slate-200">
<div className="py-5 flex justify-between items-center bg-white group">
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-slate-600 cursor-pointer nav-link" data-target="product-detail">
                      Нативний кукурудзяний крохмаль
                    </h4>
<p className="text-sm text-slate-500">
                      Для приготування клеїв та поверхневої проклейки
                    </p>
</div>
<button className="nav-link text-slate-400 hover:text-slate-900 transition-colors ml-4" data-target="product-detail">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="py-5 flex justify-between items-center bg-white group">
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-slate-600 cursor-pointer nav-link" data-target="product-detail">
                      Окислений крохмаль
                    </h4>
<p className="text-sm text-slate-500">
                      Знижена в'язкість для висококонцентрованих розчинів
                    </p>
</div>
<button className="nav-link text-slate-400 hover:text-slate-900 transition-colors ml-4" data-target="product-detail">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="bg-slate-100 aspect-square w-full flex items-center justify-center text-slate-400 text-sm border border-slate-200">
              [Зображення процесу]
            </div>
</div>
</section>
</div>

<div className="page-view" id="news">
<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-12">
              Новини компанії
            </h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="bg-slate-100 aspect-video mb-4 border border-slate-200 group-hover:border-slate-300 transition-colors"></div>
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-widest">
                  Виставки
                </span>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Участь у міжнародній виставці FI Europe у Парижі
                </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                  Компанія Interstarch традиційно бере участь у головній події
                  харчової індустрії Європи, представляючи нові розробки
                  модифікованих крохмалів.
                </p>
</div>

<div className="group cursor-pointer">
<div className="bg-slate-100 aspect-video mb-4 border border-slate-200 group-hover:border-slate-300 transition-colors"></div>
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-widest">
                  Виробництво
                </span>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-slate-600 transition-colors">
                  Модернізація лінії виробництва глютену
                </h3>
<p className="text-sm text-slate-500 line-clamp-2">
                  Встановлено нове сушильне обладнання, що дозволило збільшити
                  потужність випуску кукурудзяного глютену на 15%.
                </p>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="certificates">
<section className="py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-6">
              Сертифікати якості
            </h1>
<p className="text-base text-slate-600 mb-10">
              Система менеджменту якості та безпечності харчових продуктів
              сертифікована за міжнародними стандартами.
            </p>
<div className="divide-y divide-slate-100 border-y border-slate-200">
<div className="py-6 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-6">
<div className="flex items-center">
<iconify-icon className="text-3xl text-slate-400 mr-5" icon="solar:medal-ribbon-linear"></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">
                      FSSC 22000
                    </h3>
<p className="text-sm text-slate-500">
                      Система менеджменту безпечності харчових продуктів
                    </p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-900 p-2 transition-colors">
<iconify-icon className="text-2xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>
<div className="py-6 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-6">
<div className="flex items-center">
<iconify-icon className="text-3xl text-slate-400 mr-5" icon="solar:medal-ribbon-linear"></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">
                      ISO 9001:2015
                    </h3>
<p className="text-sm text-slate-500">
                      Система управління якістю
                    </p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-900 p-2 transition-colors">
<iconify-icon className="text-2xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>
<div className="py-6 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-6">
<div className="flex items-center">
<iconify-icon className="text-3xl text-slate-400 mr-5" icon="solar:medal-ribbon-linear"></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 mb-1">
                      Halal Certificate
                    </h3>
<p className="text-sm text-slate-500">
                      Сертифікат відповідності стандартам Халяль
                    </p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-900 p-2 transition-colors">
<iconify-icon className="text-2xl" icon="solar:download-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="contacts">
<section className="py-20 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-12">
              Контакти
            </h1>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="mb-10">
<h2 className="text-2xl font-semibold tracking-tight mb-8">
                    Головний офіс
                  </h2>
<ul className="space-y-6 text-base text-slate-600">
<li className="flex items-start">
<iconify-icon className="mr-3 text-lg text-slate-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>
                        вул. Промислова 1,
                        <br/>
                        м. Київ, 01000, Україна
                      </span>
</li>
<li className="flex items-center">
<iconify-icon className="mr-3 text-lg text-slate-400" icon="solar:phone-linear"></iconify-icon>
<span>+380 44 000 00 00</span>
</li>
<li className="flex items-center">
<iconify-icon className="mr-3 text-lg text-slate-400" icon="solar:letter-linear"></iconify-icon>
<span>sales@interstarch.ua</span>
</li>
</ul>
</div>
<div className="bg-slate-100 w-full h-64 flex items-center justify-center text-slate-400 text-sm">
                  [Мапа]
                </div>
</div>

<div className="bg-slate-50 p-8 sm:p-10">
<h2 className="text-lg font-semibold tracking-tight mb-6">
                  Залишити запит
                </h2>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                        Ім'я
                      </label>
<input className="w-full border-b border-slate-300 py-2 text-base bg-transparent focus:border-slate-900 transition-colors" placeholder="Ваше ім'я" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                        Компанія
                      </label>
<input className="w-full border-b border-slate-300 py-2 text-base bg-transparent focus:border-slate-900 transition-colors" placeholder="Назва компанії" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Email
                    </label>
<input className="w-full border-b border-slate-300 py-2 text-base bg-transparent focus:border-slate-900 transition-colors" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Повідомлення
                    </label>
<textarea className="w-full border-b border-slate-300 py-2 text-base bg-transparent focus:border-slate-900 transition-colors resize-none" placeholder="Деталі вашого запиту..." rows="3"></textarea>
</div>
<button className="bg-[#004B87] text-white px-8 py-3 text-sm font-medium hover:bg-[#00335D] transition-colors mt-4 inline-flex items-center" type="submit">
                    Відправити запит
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="delivery">
<section className="py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-8">
              Умови постачання
            </h1>
<div className="prose prose-slate text-base text-slate-600 space-y-6 leading-relaxed">
<p>
                Ми здійснюємо доставку продукції по всьому світу, використовуючи
                оптимальні логістичні рішення для кожного клієнта.
              </p>
<h3 className="text-base font-semibold text-slate-900 mt-6 mb-2">
                Упаковка
              </h3>
<ul className="list-disc pl-5 space-y-1">
<li>Паперові багатошарові мішки (25 кг)</li>
<li>Біг-беги (1000 кг)</li>
<li>Насипом у спеціалізованих цистернах</li>
</ul>
<h3 className="text-base font-semibold text-slate-900 mt-6 mb-2">
                Логістика
              </h3>
<p>
                Відвантаження здійснюється на умовах FCA, DAP, CIF, FOB
                (Incoterms 2020) автомобільним, залізничним та морським
                транспортом.
              </p>
</div>
</div>
</section>
</div>

<div className="page-view" id="vacancies">
<section className="py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-8">Вакансії</h1>
<div className="divide-y divide-slate-200 border-y border-slate-200">
<div className="flex justify-between items-center group cursor-pointer py-6">
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-slate-600 transition-colors">
                    Технолог харчового виробництва
                  </h3>
<p className="text-sm text-slate-500">Київ • Повна зайнятість</p>
</div>
<iconify-icon className="text-2xl text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex justify-between items-center group cursor-pointer py-6">
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-slate-600 transition-colors">
                    Менеджер з експортних продажів B2B
                  </h3>
<p className="text-sm text-slate-500">Київ • Повна зайнятість</p>
</div>
<iconify-icon className="text-2xl text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>
</div>

<div className="page-view" id="privacy">
<section className="py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl font-semibold tracking-tight mb-8">
              Політика конфіденційності
            </h1>
<div className="prose prose-slate text-base text-slate-600 space-y-6 leading-relaxed">
<p>
                Ця Політика конфіденційності пояснює, як ми збираємо,
                використовуємо та захищаємо вашу персональну інформацію під час
                використання нашого сайту.
              </p>
<p>
                Ми використовуємо файли cookie виключно для забезпечення
                технічної працездатності сайту та збору анонімної статистики
                відвідувань (Google Analytics).
              </p>
<p>
                Інформація, залишена у формах зворотного зв'язку,
                використовується виключно для комунікації B2B та не передається
                третім особам.
              </p>
</div>
</div>
</section>
</div>

<div className="page-view" id="404">
<section className="py-32 text-center">
<div className="max-w-xl mx-auto px-4">
<h1 className="text-6xl font-semibold tracking-tighter text-slate-200 mb-4">
              404
            </h1>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
              Сторінку не знайдено
            </h2>
<p className="text-sm text-slate-500 mb-8">
              Можливо, вона була видалена, перейменована, або ви ввели
              неправильну адресу.
            </p>
<button className="nav-link bg-[#004B87] text-white px-6 py-2 text-sm font-medium hover:bg-[#00335D] transition-colors" data-target="home">
              На головну
            </button>
</div>
</section>
</div>
</main>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
<div className="md:col-span-1">
<div className="flex items-center mb-5">
<svg className="h-7 w-7 mr-2.5 opacity-90" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#60A5FA" height="28" rx="2" width="12" x="2" y="2"></rect>
<rect fill="#FACC15" height="18" rx="2" width="12" x="18" y="12"></rect>
<rect fill="#60A5FA" height="6" rx="2" width="12" x="18" y="2"></rect>
</svg>
<span className="font-bold text-lg tracking-tighter text-white uppercase">
                Interstarch
              </span>
</div>
<p className="text-xs leading-relaxed max-w-xs">
              Виробництво та постачання високоякісних інгредієнтів для харчової
              та індустріальної промисловості.
            </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Компанія</h4>
<ul className="space-y-2 text-xs">
<li>
<button className="nav-link hover:text-white transition-colors" data-target="about">
                  Про нас
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="certificates">
                  Сертифікати
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="news">
                  Новини
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="vacancies">
                  Кар'єра
                </button>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Клієнтам</h4>
<ul className="space-y-2 text-xs">
<li>
<button className="nav-link hover:text-white transition-colors" data-target="products">
                  Каталог
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="applications">
                  Рішення
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="delivery">
                  Доставка
                </button>
</li>
<li>
<button className="nav-link hover:text-white transition-colors" data-target="contacts">
                  Контакти
                </button>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Зв'язок</h4>
<ul className="space-y-2 text-xs">
<li>sales@interstarch.ua</li>
<li>+380 44 000 00 00</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 Interstarch. Всі права захищено.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<button className="nav-link hover:text-white transition-colors" data-target="privacy">
              Політика конфіденційності
            </button>

<button className="nav-link hover:text-white transition-colors" data-target="404">
              Системна сторінка
            </button>
</div>
</div>
</div>
</footer>



    </>
  );
}
