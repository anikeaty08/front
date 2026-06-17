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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
<i className="w-5 h-5" data-lucide="droplets"></i>
</div>
<span className="text-lg font-medium tracking-tighter text-slate-900 uppercase">БурВод<span className="text-slate-400">Пермь</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#services">Услуги</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#process">Процесс</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#pricing">Цены</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#reviews">Отзывы</a>
</div>

<div className="hidden md:flex items-center gap-4">
<span className="text-xs font-medium text-slate-400 text-right leading-tight">Пермь и край<br/>Ежедневно 9-21</span>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                        +7 (342) 200-00-00
                    </button>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
<div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Работаем круглый год</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                Автономное водоснабжение<br/>
<span className="text-slate-400">для вашего дома в Перми.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Профессиональное бурение скважин на воду с гарантией 5 лет. Используем малогабаритные установки для сохранения ландшафта вашего участка.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-base font-medium py-3 px-8 rounded-full shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all duration-200 hover:-translate-y-0.5">
                    Рассчитать стоимость
                </button>
<button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-medium py-3 px-8 rounded-full transition-all duration-200">
                    Наши работы
                </button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-slate-100 pt-10">
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">12+</div>
<div className="text-sm text-slate-500 mt-1">Лет опыта</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">2500+</div>
<div className="text-sm text-slate-500 mt-1">Скважин пробурено</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">5 лет</div>
<div className="text-sm text-slate-500 mt-1">Гарантия по договору</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-slate-900">1-3</div>
<div className="text-sm text-slate-500 mt-1">Дня на работы</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Наши услуги</h2>
<p className="text-slate-500 mt-3 max-w-lg font-light">
                        Полный цикл работ: от геологической разведки до ввода воды в дом.
                    </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 mt-4 md:mt-0" href="#">
                    Смотреть прайс-лист <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="waves"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Скважина на песок</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Бюджетное решение для дачи и полива. Глубина до 30 метров. Быстрое бурение за 1 день.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3 h-3 text-blue-600" data-lucide="check"></i> Производительность до 1 м³/час
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3 h-3 text-blue-600" data-lucide="check"></i> Не требует лицензии
                        </li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 border border-blue-100 ring-1 ring-blue-100 shadow-lg shadow-blue-50 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">Популярное</div>
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="drill"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Артезианская скважина</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Стабильный источник чистой воды для коттеджа. Глубина от 30 метров. Срок службы до 50 лет.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3 h-3 text-blue-600" data-lucide="check"></i> Производительность до 5 м³/час
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3 h-3 text-blue-600" data-lucide="check"></i> Постоянный уровень воды
                        </li>
</ul>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Обустройство (Кессон)</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Установка насосного оборудования, кессона или адаптера. Ввод воды в дом и автоматика.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3 h-3 text-blue-600" data-lucide="check"></i> Монтаж "под ключ"
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<i className="w-3 h-3 text-blue-600" data-lucide="check"></i> Зимнее водоснабжение
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Работаем по сложным грунтам Пермского края</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none mt-1">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900">География работ</h4>
<p className="text-sm text-slate-500 mt-1 font-light">Пермь, Краснокамск, Добрянка, Полазна, Култаево, Лобаново и отдаленные районы до 150км.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none mt-1">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="truck"></i>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900">Техника</h4>
<p className="text-sm text-slate-500 mt-1 font-light">Имеем парк малогабаритных установок (МГБУ) для работы на облагороженных участках и тяжелую технику (УРБ 2А2) для глубоких скважин.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none mt-1">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="file-check"></i>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900">Документация</h4>
<p className="text-sm text-slate-500 mt-1 font-light">Выдаем паспорт скважины с характеристиками: дебит, статический и динамический уровень.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNjYmQ1ZTEiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50"></div>
<div className="relative z-10 space-y-3">
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">0 - 10м</span>
<span className="text-sm text-slate-700">Глина / Суглинок</span>
<div className="w-20 h-1 bg-amber-100 rounded-full"></div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">10 - 25м</span>
<span className="text-sm text-slate-700">Песчаный водонос</span>
<div className="w-20 h-1 bg-yellow-100 rounded-full"></div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">25 - 40м</span>
<span className="text-sm text-slate-700">Твердые породы</span>
<div className="w-20 h-1 bg-slate-200 rounded-full"></div>
</div>
<div className="bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between ring-1 ring-blue-200">
<span className="text-xs font-medium text-blue-600 uppercase tracking-wide">40 - 100м+</span>
<span className="text-sm font-medium text-blue-900">Артезианская вода</span>
<div className="w-20 h-1 bg-blue-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Прозрачное ценообразование</h2>
<p className="text-slate-400 font-light">Стоимость зависит от района, типа грунта и конструкции скважины.</p>
</div>
<div className="grid md:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-2xl overflow-hidden">

<div className="bg-slate-900 p-8 hover:bg-slate-800/50 transition-colors">
<h3 className="text-lg font-medium text-slate-200 mb-2">МГБУ (Малогабаритная)</h3>
<div className="text-3xl font-medium tracking-tight mb-4">от 2 200 ₽<span className="text-sm text-slate-500 font-normal"> / п.м.</span></div>
<p className="text-sm text-slate-500 mb-6">Для скважин до 50 метров на песок или известняк.</p>
<button className="w-full py-2 rounded-lg border border-slate-700 text-sm hover:bg-slate-800 transition-colors">Заказать</button>
</div>

<div className="bg-slate-900 p-8 hover:bg-slate-800/50 transition-colors relative">
<h3 className="text-lg font-medium text-slate-200 mb-2">УРБ 2А2 (Тяжелая техника)</h3>
<div className="text-3xl font-medium tracking-tight mb-4">от 2 500 ₽<span className="text-sm text-slate-500 font-normal"> / п.м.</span></div>
<p className="text-sm text-slate-500 mb-6">Для глубоких артезианских скважин и сложных грунтов.</p>
<button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm transition-colors border border-transparent">Заказать</button>
</div>

<div className="bg-slate-900 p-8 hover:bg-slate-800/50 transition-colors">
<h3 className="text-lg font-medium text-slate-200 mb-2">Обустройство</h3>
<div className="text-3xl font-medium tracking-tight mb-4">от 15 000 ₽<span className="text-sm text-slate-500 font-normal"> + материалы</span></div>
<p className="text-sm text-slate-500 mb-6">Монтаж насоса, оголовка, автоматики и гидроаккумулятора.</p>
<button className="w-full py-2 rounded-lg border border-slate-700 text-sm hover:bg-slate-800 transition-colors">Рассчитать</button>
</div>
</div>
<p className="text-center text-xs text-slate-500 mt-8">
                * В стоимость входит: проезд техники, бурение, обсадка трубами (нПВХ/сталь), прокачка до визуально чистой воды.
            </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Бесплатная консультация инженера</h2>
<p className="text-slate-500 mt-2 font-light">Оставьте заявку, мы перезвоним в течение 15 минут и рассчитаем примерную глубину скважины в вашем районе.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Имя</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm placeholder:text-slate-400" placeholder="Иван" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Телефон</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm placeholder:text-slate-400" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Район бурения</label>
<input className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-sm placeholder:text-slate-400" placeholder="Например: Култаево" type="text"/>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-slate-200 transition-all duration-200 mt-4" type="button">
                        Получить расчет сметы
                    </button>
<p className="text-[10px] text-center text-slate-400 mt-4">
                        Нажимаю кнопку, вы соглашаетесь с политикой обработки персональных данных.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-slate-900 text-white p-1 rounded">
<i className="w-3 h-3" data-lucide="droplets"></i>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">БурВод<span className="text-slate-400">Пермь</span></span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Профессиональное бурение скважин на воду в Перми и Пермском крае. Лицензированные специалисты.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Услуги</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Бурение на песок</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Артезианские скважины</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Обустройство скважин</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Ремонт скважин</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Компания</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Наши работы</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Отзывы</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Контакты</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Контакты</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="phone"></i> +7 (342) 200-00-00
                        </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="mail"></i> info@burvodperm.ru
                        </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="map-pin"></i> г. Пермь, ул. Промышленная, 15
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-slate-400">
                    © 2023 БурВодПермь. Все права защищены.
                </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
