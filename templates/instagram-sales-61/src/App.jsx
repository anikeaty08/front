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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Tariff Selection Logic
        function selectTariff(tariffName) {
            const input = document.getElementById('selectedTariff');
            if(input) {
                input.value = tariffName;
                console.log("Selected tariff:", tariffName);
            }
        }
    
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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter text-slate-900">
                INSTA<span className="insta-text">FLOW</span>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#tariffs">
                Тарифы
            </a>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
</span>
                Автоматизация продаж 2.0
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                Instagram, который сам превращает <br className="hidden md:block"/>
<span className="insta-text">подписчиков в клиентов</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
                Мы создаём систему, где каждый новый подписчик становится теплым лидом — без ручной переписки и потерь заявок. Контент, реклама и автоматизация работают вместе, чтобы твой Instagram продавал 24/7.
            </p>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-medium bg-slate-900 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group" href="#contact-form">
                    Подключить автоматизацию
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-600 font-medium bg-white border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center" href="#how-it-works">
                    Как это работает
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Результат внедрения</h2>
<p className="text-slate-500 max-w-xl">
                    Наша система превращает хаос в директе в структурированную воронку продаж.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Быстрый отклик</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Каждый новый подписчик вовлекается в диалог, получает подарок или скидку и становится тёплым лидом мгновенно.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-fuchsia-50 flex items-center justify-center mb-6 text-fuchsia-600">
<i className="w-6 h-6" data-lucide="infinity"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Полный цикл</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Каждый отклик превращается в диалог, все заявки фиксируются и догреваются автоматически без участия менеджера.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-6 text-purple-600">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Экосистема</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Контент привлекает, реклама проталкивает, автоматизация закрывает. Instagram превращается в машину продаж.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="tariffs">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Выберите свой тариф</h2>
<p className="text-slate-500">Прозрачные условия без скрытых платежей</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col h-full hover:border-slate-300 transition-colors">
<div className="mb-8">
<h3 className="text-lg font-semibold text-slate-900">Быстрый старт</h3>
<p className="text-xs font-medium text-slate-400 mt-2 h-10">Приветственная автоматизация + кнопки для действующих подписчиков</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$497</span>
</div>
<div className="mb-8 space-y-3">
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Срок установки: 24 часа</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Авто-приветствие подписчиков</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Меню самообслуживания</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Базовая выдача лид-магнита</span>
</div>
</div>
<div className="mt-auto">
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium rounded-xl border border-slate-200 text-center transition-colors" href="#contact-form" onclick="selectTariff('Быстрый старт')">
                            Выбрать этот тариф
                        </a>
</div>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col h-full relative shadow-2xl">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                        Популярный
                    </div>
<div className="mb-8">
<h3 className="text-lg font-semibold text-white">Полный комплекс</h3>
<p className="text-xs font-medium text-slate-400 mt-2 h-10">Глубокая интеграция воронок и CRM системы</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">$997</span>
</div>
<div className="mb-8 space-y-3">
<div className="flex gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-fuchsia-500 shrink-0" data-lucide="check"></i>
<span>Срок установки: 14 дней</span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-fuchsia-500 shrink-0" data-lucide="check"></i>
<span>Все функции "Быстрого старта"</span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-fuchsia-500 shrink-0" data-lucide="check"></i>
<span>Вариативная воронка продаж</span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-fuchsia-500 shrink-0" data-lucide="check"></i>
<span>Интеграция с Google Sheets/CRM</span>
</div>
<div className="flex gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-fuchsia-500 shrink-0" data-lucide="check"></i>
<span>Авто-дожим клиентов</span>
</div>
</div>
<div className="mt-auto">
<a className="block w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium rounded-xl text-center transition-colors" href="#contact-form" onclick="selectTariff('Полный комплекс')">
                            Выбрать этот тариф
                        </a>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col h-full hover:border-slate-300 transition-colors">
<div className="mb-8">
<h3 className="text-lg font-semibold text-slate-900">Умный Instagram</h3>
<p className="text-xs font-medium text-slate-400 mt-2 h-10">Экосистема привлечения горячих лидов под ключ</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$2997</span>
</div>
<div className="mb-8 space-y-3">
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Индивидуальный срок разработки</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Разработка контент-стратегии</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Настройка таргетированной рекламы</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>AI-ассистент для ответов</span>
</div>
<div className="flex gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
<span>Персональная техподдержка</span>
</div>
</div>
<div className="mt-auto">
<a className="block w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-900 text-sm font-medium rounded-xl border border-slate-200 text-center transition-colors" href="#contact-form" onclick="selectTariff('Умный Instagram')">
                            Выбрать этот тариф
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact-form">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mx-auto mb-6 shadow-sm">
<i className="w-6 h-6 text-slate-900" data-lucide="mail"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Начните получать лидов уже завтра</h2>
<p className="text-slate-500">Заполните форму, и мы свяжемся с вами для настройки.</p>
</div>
<form className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 space-y-6 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 insta-gradient"></div>

<input id="selectedTariff" name="tariff" type="hidden" value=""/>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="name">Имя</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-sm" id="name" placeholder="Иван Иванов" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="phone">Телефон</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-sm" id="phone" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="niche">Ниша бизнеса</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-sm appearance-none" id="niche">
<option disabled="" selected="" value="">Выберите вариант</option>
<option value="clothing">Продажа одежды / обуви</option>
<option value="legal">Услуги юриста / консалтинг</option>
<option value="beauty">Косметология / Бьюти-сфера</option>
<option value="education">Образование / Курсы</option>
<option value="realestate">Недвижимость</option>
<option value="fitness">Фитнес / Спорт</option>
<option value="other">Другое</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="telegram">Telegram</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">@</span>
<input className="w-full pl-8 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 focus:border-fuchsia-500 transition-all text-sm" id="telegram" placeholder="username" type="text"/>
</div>
</div>
<div className="pt-2">
<button className="w-full py-4 rounded-xl text-white font-medium insta-gradient shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 hover:opacity-95 transition-all text-sm" type="button">
                        Отправить заявку
                    </button>
</div>
<p className="text-center text-[10px] text-slate-400 leading-tight max-w-xs mx-auto">
                    Нажимая кнопку, вы соглашаетесь с условиями <a className="underline hover:text-slate-600" href="#">обработки персональных данных</a>.
                </p>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="text-lg font-semibold tracking-tighter text-slate-900 mb-2">
                    INSTA<span className="insta-text">FLOW</span>
</div>
<p className="text-sm text-slate-400">Автоматизация, которая работает.</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-fuchsia-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-sky-500 transition-colors" href="#"><i className="w-5 h-5" data-lucide="send"></i></a> 
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 InstaFlow Automation. Все права защищены.</p>
<a className="text-xs text-slate-500 hover:text-slate-900" href="mailto:hello@instaflow.com">hello@instaflow.com</a>
</div>
</footer>



    </>
  );
}
