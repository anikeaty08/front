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
      

<header className="border-b border-slate-100 bg-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center">
<span className="text-xl font-semibold tracking-tight text-slate-900 uppercase">
                    Технологии<span className="text-[#258795]">Здоровья</span>
</span>
</div>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group hover:opacity-80 transition-opacity" href="tel:+78630000000">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#258795] group-hover:bg-[#258795] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="hidden sm:block">
<div className="text-xs text-slate-500 mb-0.5">Круглосуточно</div>
<div className="text-base font-semibold tracking-tight text-slate-900">+7 (863) 000-00-00</div>
</div>
</a>
</div>
</div>
</header>

<section className="relative bg-white pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden">
<div className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-70 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="sm:px-6 lg:px-8 z-10 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<h1 className="sm:text-5xl lg:text-5xl text-4xl font-semibold text-slate-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
                Анонимная наркологическая помощь в Ростове-на-Дону 24/7
            </h1>
<p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 mb-10">
                Выезд врача за 30 минут. Полная анонимность. Не ставим на учёт. Современные методы лечения и гарантия результата.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="sm:w-auto hover:bg-[#1f737f] transition-colors shadow-[#258795]/20 font-medium text-white bg-[#258795] w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm">
                    Вызвать врача на дом
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm">
                    Получить консультацию
                </button>
</div>
<div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-8 border-t border-slate-100">
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-xl text-[#258795]" icon="solar:incognito-linear"></iconify-icon>
                    Анонимно
                </div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-xl text-[#258795]" icon="solar:clock-circle-linear"></iconify-icon>
                    Круглосуточно
                </div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-xl text-[#258795]" icon="solar:document-text-linear"></iconify-icon>
                    Лицензия
                </div>
<div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-xl text-[#258795]" icon="solar:medal-star-linear"></iconify-icon>
                    Опыт 10+ лет
                </div>
</div>
</div>
</section>

<section className="sm:py-28 bg-[#258795] pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl font-semibold text-slate-50 tracking-tight text-center mb-16">Почему выбирают нас</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#258795]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Безопасно</h3>
<p className="text-sm text-slate-600 leading-relaxed">Используем только сертифицированные препараты последнего поколения с доказанной эффективностью.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#258795]" icon="solar:incognito-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Анонимно</h3>
<p className="text-sm text-slate-600 leading-relaxed">Не передаем данные в государственные органы, лечение проходит без постановки на наркологический учет.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#258795]" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Честные цены</h3>
<p className="text-sm text-slate-600 leading-relaxed">Стоимость услуг фиксируется до начала лечения. Никаких скрытых платежей и навязанных услуг.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/50 hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#258795]" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Оперативно</h3>
<p className="text-sm text-slate-600 leading-relaxed">Дежурные бригады распределены по городу. Врач прибудет по Ростову-на-Дону в течение 30 минут.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-28 bg-white pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight text-center mb-16">Услуги и цены</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden">
<div className="p-8 flex-grow">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Вывод из запоя на дому</h3>
<div className="text-3xl font-semibold tracking-tight text-[#258795] mb-6">от 2 500 ₽</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Осмотр врачом-наркологом</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Постановка индивидуальной капельницы</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Оставление препаратов на 3 дня</span>
</li>
</ul>
</div>
<div className="p-8 pt-0 mt-auto">
<button className="w-full py-3 rounded-lg bg-[#258795] text-white font-medium hover:bg-[#1f737f] transition-colors shadow-sm">Заказать</button>
</div>
</div>

<div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden relative shadow-md shadow-slate-100 ring-1 ring-[#258795]">
<div className="absolute top-0 inset-x-0 h-1 bg-[#258795]"></div>
<div className="p-8 flex-grow">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Снятие ломки</h3>
<div className="text-3xl font-semibold tracking-tight text-[#258795] mb-6">от 5 000 ₽</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Быстрое очищение крови</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Купирование болевого синдрома</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Восстановление сна и аппетита</span>
</li>
</ul>
</div>
<div className="p-8 pt-0 mt-auto">
<button className="w-full py-3 rounded-lg bg-[#258795] text-white font-medium hover:bg-[#1f737f] transition-colors shadow-sm">Заказать</button>
</div>
</div>

<div className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden">
<div className="p-8 flex-grow">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Кодирование от алкоголя</h3>
<div className="text-3xl font-semibold tracking-tight text-[#258795] mb-6">от 10 000 ₽</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Подбор метода (вшивание, укол, гипноз)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Психотерапевтическая беседа</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#258795] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Гарантия на весь срок действия</span>
</li>
</ul>
</div>
<div className="p-8 pt-0 mt-auto">
<button className="w-full py-3 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm">Записаться</button>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-center text-center sm:text-left">
<div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
<iconify-icon className="text-3xl text-[#258795]" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Гарантия результата</h4>
<p className="text-sm text-slate-600">Мы используем только сертифицированные Минздравом РФ методики и препараты, гарантируя полную безопасность и эффективность лечения.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-28 bg-[#258795] pt-20 pb-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h2 className="text-5xl font-semibold text-slate-50 tracking-tight text-center mb-16">8 причин выбрать нас</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Работаем 24/7 без выходных</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Официальная лицензия МОЗ</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:medical-kit-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Опыт врачей от 10 лет</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:pill-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Современные препараты</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:hospital-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Собственный стационар</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Бесплатная поддержка</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:routing-2-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">Выезд во все районы</span>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-4 hover:border-[#258795]/30 transition-colors">
<iconify-icon className="text-2xl text-[#258795]" icon="solar:eye-closed-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-800">100% анонимность</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 sm:py-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">Отзывы клиентов</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-2xl">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">«Врач приехал быстро, прокапали, стало намного легче. Спасибо большое за профессионализм и понимание ситуации. Очень деликатный подход.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900">Михаил</div>
<div className="text-xs text-slate-500">42 года</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">«Обращались для мужа. Все абсолютно анонимно, никаких лишних вопросов. Врач оставил препараты на несколько дней и дал подробные инструкции.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Анна</div>
<div className="text-xs text-slate-500">35 лет</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-2xl">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 leading-relaxed mb-6">«Прошел процедуру кодирования полгода назад. С тех пор живу нормальной полноценной жизнью. Рекомендую клинику всем, кто столкнулся с такой бедой.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Игорь</div>
<div className="text-xs text-slate-500">50 лет</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-28 bg-[#258795] py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl font-semibold text-slate-50 tracking-tight text-center mb-16">Ответы на частые вопросы</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-100">
<div className="w-10 h-10 rounded-full bg-[#258795]/10 flex items-center justify-center mb-5">
<iconify-icon className="text-xl text-[#258795]" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-3">Как быстро приедет врач?</h3>
<p className="text-sm text-slate-600 leading-relaxed">В среднем по Ростову-на-Дону время ожидания бригады составляет 30-40 минут. Наши машины распределены по районам для оперативности.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100">
<div className="w-10 h-10 rounded-full bg-[#258795]/10 flex items-center justify-center mb-5">
<iconify-icon className="text-xl text-[#258795]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-3">Ставите ли вы на учет?</h3>
<p className="text-sm text-slate-600 leading-relaxed">Нет, мы частная клиника. Вся медицинская помощь оказывается строго анонимно. Мы не передаем данные пациентов в государственные диспансеры.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100">
<div className="w-10 h-10 rounded-full bg-[#258795]/10 flex items-center justify-center mb-5">
<iconify-icon className="text-xl text-[#258795]" icon="solar:moon-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-3">Работаете ли вы ночью?</h3>
<p className="text-sm text-slate-600 leading-relaxed">Да, наш колл-центр принимает звонки, а дежурные бригады выезжают на вызовы круглосуточно, без перерывов, выходных и праздников.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-20 sm:py-28 border-b border-slate-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-200/40 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#258795]"></div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Заявка в 1 клик</h2>
<p className="text-base text-slate-600 mb-8">Оставьте номер — дежурный врач перезвонит вам через 5 минут для бесплатной консультации.</p>
<form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
<input className="flex-1 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#258795]/20 focus:border-[#258795] transition-all" placeholder="Ваше имя" required="" type="text"/>
<input className="flex-1 px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#258795]/20 focus:border-[#258795] transition-all" placeholder="+7 (___) ___-__-__" required="" type="tel"/>
<button className="px-8 py-3.5 rounded-lg bg-[#258795] text-white font-medium text-sm hover:bg-[#1f737f] transition-colors whitespace-nowrap shadow-sm" type="button">
                        Заказать звонок
                    </button>
</form>
<p className="text-xs text-slate-400 mt-5">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
<div className="">
<span className="text-lg font-semibold tracking-tight text-slate-900 uppercase block mb-4">
                        Технологии<span className="text-[#258795]">Здоровья</span>
</span>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Анонимная наркологическая помощь в Ростове-на-Дону. Профессиональный вывод из запоя, кодирование и реабилитация.
                    </p>
<div className="text-xs text-slate-400">
                        Лицензия № ЛО-61-01-001234<br/>от 15.03.2018 г.
                    </div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Услуги</h4>
<ul className="space-y-3">
<li className=""><a className="text-sm text-slate-500 hover:text-[#258795] transition-colors" href="#">Вывод из запоя</a></li>
<li className=""><a className="text-sm text-slate-500 hover:text-[#258795] transition-colors" href="#">Снятие ломки</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#258795] transition-colors" href="#">Кодирование от алкоголя</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Документы</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-[#258795] transition-colors" href="#">О клинике</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#258795] transition-colors" href="#">Политика конфиденциальности</a></li>
<li><a className="text-sm text-slate-500 hover:text-[#258795] transition-colors" href="#">Пользовательское соглашение</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Контакты</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-slate-400 mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<a className="text-sm font-medium text-slate-900 hover:text-[#258795] transition-colors block" href="tel:+78630000000">+7 (863) 000-00-00</a>
<span className="text-xs text-slate-500">Круглосуточно, без выходных</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-slate-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-slate-500">г. Ростов-на-Дону,<br/>ул. Медицинская, д. 10</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-400 shrink-0">18+</div>
<div className="text-xs text-slate-400">
                        ООО «Медтайм» ИНН 7726439129 ОГРН 1157746123456.<br/>Имеются противопоказания. Необходима консультация специалиста.
                    </div>
</div>
<div className="text-xs text-slate-400 text-center md:text-right">
                    © 2023 ТехнологииЗдоровья. Все права защищены.<br/>Сайт использует файлы cookie.
                </div>
</div>
</div>
</footer>

    </>
  );
}
