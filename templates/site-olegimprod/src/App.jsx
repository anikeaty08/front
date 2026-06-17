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
      

<div className="flex flex-col gap-8 w-full max-w-[450px]">

<div className="w-full aspect-[9/16] bg-[#F9F7F2] relative flex flex-col p-8 border border-gray-200 shadow-xl overflow-hidden text-slate-900">

<div className="flex justify-between items-center mb-12 border-b border-black/10 pb-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">Слайд 1/10</span>
<div className="h-2 w-2 bg-[#990000]"></div>
</div>

<div className="flex-1 flex flex-col justify-center">
<div className="bg-[#990000] text-white w-fit px-3 py-1 text-sm font-semibold uppercase tracking-wider mb-6">
                    Проблема
                </div>
<h1 className="text-6xl font-semibold uppercase leading-[0.9] tracking-tighter mb-10 text-[#990000]">
                    Почему у тебя<br/>нет заявок?
                </h1>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 mt-1 shrink-0 stroke-[1.5]" data-lucide="video-off"></i>
<p className="text-xl font-medium leading-tight">Боишься камеры и откладываешь съемки уже год</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 mt-1 shrink-0 stroke-[1.5]" data-lucide="clock"></i>
<p className="text-xl font-medium leading-tight">Нет времени на контент — работаешь 24/7</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 mt-1 shrink-0 stroke-[1.5]" data-lucide="banknote"></i>
<p className="text-xl font-medium leading-tight">Реклама съедает бюджет без гарантий результата</p>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 mt-1 shrink-0 stroke-[1.5]" data-lucide="alert-circle"></i>
<p className="text-xl font-medium leading-tight">Конкуренты активны, а ты стоишь на месте</p>
</li>
</ul>
</div>

<div className="mt-auto pt-8 border-t border-black/10 flex justify-between items-end">
<span className="text-6xl font-bold text-gray-200 opacity-50">01</span>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#990000] relative flex flex-col p-8 border border-[#990000] shadow-xl overflow-hidden text-white">

<div className="flex justify-between items-center mb-12 border-b border-white/20 pb-4">
<span className="text-xs font-medium uppercase tracking-widest text-white/60">Слайд 2/10</span>
<div className="h-2 w-2 bg-white"></div>
</div>

<div className="flex-1 flex flex-col justify-center">
<h1 className="text-6xl font-semibold uppercase leading-[0.9] tracking-tighter mb-12 text-white">
                    Пока ты<br/>откладываешь...
                </h1>
<div className="space-y-8 relative">

<div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/30"></div>
<div className="flex items-start gap-6 relative z-10">
<div className="w-6 h-6 bg-white shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-[#990000] stroke-[2]" data-lucide="arrow-down"></i>
</div>
<p className="text-xl font-medium leading-tight">Конкуренты набирают тысячи просмотров каждый день</p>
</div>
<div className="flex items-start gap-6 relative z-10">
<div className="w-6 h-6 bg-white shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-[#990000] stroke-[2]" data-lucide="arrow-down"></i>
</div>
<p className="text-xl font-medium leading-tight">Твои потенциальные клиенты покупают у других</p>
</div>
<div className="flex items-start gap-6 relative z-10">
<div className="w-6 h-6 bg-white shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-[#990000] stroke-[2]" data-lucide="arrow-down"></i>
</div>
<p className="text-xl font-medium leading-tight">Рекламные бюджеты растут, а заявок меньше</p>
</div>
<div className="flex items-start gap-6 relative z-10">
<div className="w-6 h-6 bg-white shrink-0 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-[#990000] stroke-[2]" data-lucide="arrow-down"></i>
</div>
<p className="text-xl font-medium leading-tight">Ты теряешь деньги каждый день без контента</p>
</div>
</div>
</div>
<div className="mt-auto">
<div className="w-full h-1 bg-white/20"></div>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#F9F7F2] relative flex flex-col p-8 border border-gray-200 shadow-xl overflow-hidden text-slate-900">
<div className="flex justify-between items-center mb-8 border-b border-black/10 pb-4">
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">Слайд 3/10</span>
<i className="w-4 h-4 text-[#990000]" data-lucide="x"></i>
</div>
<h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tighter mb-10">
                Что ты уже <span className="text-[#990000]">пробовал?</span>
</h1>
<div className="space-y-6 flex-1">

<div className="border-l-2 border-[#990000] pl-4">
<div className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#990000] stroke-[2]" data-lucide="x"></i>
<span className="font-bold text-lg uppercase">Блогеры</span>
</div>
<p className="text-lg text-gray-600 leading-tight">50-100к за интеграцию, гарантий нет</p>
</div>

<div className="border-l-2 border-[#990000] pl-4">
<div className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#990000] stroke-[2]" data-lucide="x"></i>
<span className="font-bold text-lg uppercase">Яндекс Директ</span>
</div>
<p className="text-lg text-gray-600 leading-tight">150-200к в месяц, не все отбиваются</p>
</div>

<div className="border-l-2 border-[#990000] pl-4">
<div className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#990000] stroke-[2]" data-lucide="x"></i>
<span className="font-bold text-lg uppercase">Продакшн</span>
</div>
<p className="text-lg text-gray-600 leading-tight">От 30к за съемку + время</p>
</div>

<div className="border-l-2 border-[#990000] pl-4">
<div className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[#990000] stroke-[2]" data-lucide="x"></i>
<span className="font-bold text-lg uppercase">"Сниму сам"</span>
</div>
<p className="text-lg text-gray-600 leading-tight">Откладываешь уже третий год</p>
</div>
</div>
<div className="mt-8 bg-[#1a1a1a] p-6 text-white text-center">
<p className="text-xl font-medium uppercase tracking-wide">Вывод: Дорого, долго, без гарантий</p>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#990000] relative flex flex-col p-8 border border-[#990000] shadow-xl overflow-hidden text-white">
<div className="absolute top-0 right-0 p-8 opacity-20">
<i className="w-32 h-32 text-white stroke-[1]" data-lucide="zap"></i>
</div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-auto">
<div className="bg-white text-[#990000] inline-block px-3 py-1 mb-6 text-sm font-bold uppercase tracking-widest">
                        Решение
                    </div>
<h1 className="text-5xl font-semibold uppercase leading-none tracking-tighter mb-12">
                        А что, если есть способ проще?
                    </h1>
<ul className="space-y-8">
<li className="flex gap-4 items-start">
<div className="bg-white rounded-none p-1 shrink-0 mt-1">
<i className="w-5 h-5 text-[#990000] stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-2xl font-medium leading-tight">Контент создаётся без твоего участия</span>
</li>
<li className="flex gap-4 items-start">
<div className="bg-white rounded-none p-1 shrink-0 mt-1">
<i className="w-5 h-5 text-[#990000] stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-2xl font-medium leading-tight">Ты всегда выглядишь идеально в кадре</span>
</li>
<li className="flex gap-4 items-start">
<div className="bg-white rounded-none p-1 shrink-0 mt-1">
<i className="w-5 h-5 text-[#990000] stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-2xl font-medium leading-tight">Видео выходят каждый день, пока ты работаешь</span>
</li>
<li className="flex gap-4 items-start">
<div className="bg-white rounded-none p-1 shrink-0 mt-1">
<i className="w-5 h-5 text-[#990000] stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-2xl font-medium leading-tight">Бюджет — 10.000₽ vs 100.000₽ на рекламу</span>
</li>
</ul>
</div>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#F9F7F2] relative flex flex-col p-8 border border-gray-200 shadow-xl overflow-hidden text-slate-900">
<div className="flex items-center gap-2 mb-8">
<i className="w-6 h-6 text-[#990000]" data-lucide="trending-up"></i>
<span className="text-sm font-bold uppercase tracking-widest text-gray-400">Кейс #1</span>
</div>
<h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
                Кейс: кресла,<br/>1 млн за 19 дней
            </h1>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="border border-black p-4 flex flex-col">
<span className="text-xs text-gray-500 uppercase mb-1">Ниша</span>
<span className="font-bold leading-tight">Офисная мебель</span>
</div>
<div className="border border-black p-4 flex flex-col">
<span className="text-xs text-gray-500 uppercase mb-1">Старт</span>
<span className="font-bold leading-tight">С нуля, новый аккаунт</span>
</div>
</div>
<div className="flex-1 bg-white border border-gray-200 p-6 flex flex-col justify-center items-center shadow-lg mb-8 relative">

<div className="absolute top-4 left-4 flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="text-center space-y-4 w-full mt-4">
<div className="flex justify-between items-center border-b border-gray-100 pb-2">
<span className="text-gray-500 text-sm">Просмотры</span>
<span className="font-bold text-xl">700,000</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-2">
<span className="text-gray-500 text-sm">Заявки</span>
<span className="font-bold text-xl">400+</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-sm">Продажи</span>
<span className="font-bold text-xl text-green-600">1,000,000₽</span>
</div>
</div>
</div>
<div className="bg-[#1a1a1a] text-white p-4 text-center">
<p className="font-medium">19 видео с ИИ аватаром</p>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#990000] relative flex flex-col p-8 border border-[#990000] shadow-xl overflow-hidden text-white">
<div className="flex items-center justify-end gap-2 mb-8 opacity-60">
<span className="text-sm font-bold uppercase tracking-widest">Кейс #2</span>
</div>
<h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tighter mb-12">
                Кейс: опт обуви,<br/>300к за месяц
            </h1>
<div className="flex flex-col gap-6 flex-1">
<div className="border-t border-white/30 pt-4">
<p className="text-white/70 text-sm uppercase tracking-wider mb-1">Вложения</p>
<p className="text-3xl font-bold">С нуля, 10.000₽</p>
</div>
<div className="border-t border-white/30 pt-4">
<p className="text-white/70 text-sm uppercase tracking-wider mb-1">Охват</p>
<p className="text-3xl font-bold">1.5 млн просмотров</p>
<p className="text-sm text-white/50">(всего за 2 видео)</p>
</div>
<div className="border-t border-white/30 pt-4">
<p className="text-white/70 text-sm uppercase tracking-wider mb-1">Аудитория</p>
<p className="text-3xl font-bold">+4000 подписчиков</p>
</div>
<div className="mt-auto bg-white text-[#990000] p-6 text-center">
<span className="block text-sm uppercase tracking-widest font-bold mb-2">Итог продаж</span>
<span className="block text-5xl font-bold tracking-tighter">300.000₽</span>
<span className="block text-sm font-medium">оптом за первый месяц</span>
</div>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#F9F7F2] relative flex flex-col p-8 border border-gray-200 shadow-xl overflow-hidden text-slate-900">
<div className="w-full h-2 bg-[#990000] mb-8"></div>
<h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tighter mb-6 text-[#1a1a1a]">
                Кейс: недвижка на Пхукете
            </h1>

<div className="w-full h-48 bg-gray-200 mb-8 border border-gray-300 flex items-center justify-center relative overflow-hidden group">
<i className="w-24 h-24 text-gray-400 absolute bottom-0" data-lucide="user"></i>
<div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-1 uppercase font-bold tracking-wider">AI Avatar</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 px-4 py-2 border border-gray-200 shadow-sm backdrop-blur-sm">
<span className="text-xs font-bold uppercase tracking-wide">Риэлтор Алина</span>
</div>
</div>
</div>
<ul className="space-y-6 flex-1">
<li className="flex gap-4">
<div className="w-1 h-full bg-[#990000]"></div>
<div>
<p className="text-sm text-gray-500 uppercase font-bold">Ситуация</p>
<p className="text-xl font-medium leading-tight">Нет времени на съемки</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-1 h-full bg-[#990000]"></div>
<div>
<p className="text-sm text-gray-500 uppercase font-bold">Решение</p>
<p className="text-xl font-medium leading-tight">Создали 5 аватаров удаленно. Рилсы выходят без её участия.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-1 h-full bg-[#990000]"></div>
<div>
<p className="text-sm text-gray-500 uppercase font-bold">Результат</p>
<p className="text-xl font-medium leading-tight">Стабильный поток заявок, пока она работает</p>
</div>
</li>
</ul>
</div>

<div className="w-full aspect-[9/16] bg-[#990000] relative flex flex-col p-8 border border-[#990000] shadow-xl overflow-hidden text-white">
<h1 className="text-5xl font-semibold uppercase leading-none tracking-tighter mb-12 text-center">
                Система простая:
            </h1>
<div className="flex-1 flex flex-col gap-6">

<div className="flex items-center bg-white/10 p-4 border border-white/20">
<span className="text-5xl font-bold font-oswald text-white/90 mr-6">01</span>
<p className="text-xl font-medium leading-tight">Создаём твоего цифрового двойника</p>
</div>

<div className="flex items-center bg-white/10 p-4 border border-white/20">
<span className="text-5xl font-bold font-oswald text-white/90 mr-6">02</span>
<p className="text-xl font-medium leading-tight">Генерируем по 3-5 видео в день</p>
</div>

<div className="flex items-center bg-white/10 p-4 border border-white/20">
<span className="text-5xl font-bold font-oswald text-white/90 mr-6">03</span>
<p className="text-xl font-medium leading-tight">Выкладываем контент → получаем заявки</p>
</div>

<div className="flex items-center bg-white text-[#990000] p-4 border border-white">
<span className="text-5xl font-bold font-oswald mr-6">04</span>
<p className="text-xl font-bold leading-tight">Ты занимаешься бизнесом, клон работает</p>
</div>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#F9F7F2] relative flex flex-col p-8 border border-gray-200 shadow-xl overflow-hidden text-slate-900">
<h1 className="text-5xl font-semibold uppercase leading-none tracking-tighter mb-8">
                Это для тебя, если:
            </h1>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-green-600 fill-green-100" data-lucide="check-circle-2"></i>
<p className="text-lg font-medium leading-tight">Ты эксперт, врач, психолог, риэлтор</p>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-green-600 fill-green-100" data-lucide="check-circle-2"></i>
<p className="text-lg font-medium leading-tight">Продаешь товары (мебель, одежда, WB)</p>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-green-600 fill-green-100" data-lucide="check-circle-2"></i>
<p className="text-lg font-medium leading-tight">Услуги B2B или B2C</p>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-green-600 fill-green-100" data-lucide="check-circle-2"></i>
<p className="text-lg font-medium leading-tight">Нет времени на съемки каждый день</p>
</div>
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-green-600 fill-green-100" data-lucide="check-circle-2"></i>
<p className="text-lg font-medium leading-tight">Хочешь заявки без бюджетов на рекламу</p>
</div>
</div>
<div className="mt-auto bg-[#1a1a1a] p-6 text-white border-t-4 border-[#990000]">
<p className="text-sm font-bold uppercase tracking-widest text-[#990000] mb-4">НЕ подойдет:</p>
<div className="space-y-3">
<div className="flex gap-3">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle"></i>
<p className="text-base font-medium leading-tight">Если ожидаешь волшебную таблетку</p>
</div>
<div className="flex gap-3">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x-circle"></i>
<p className="text-base font-medium leading-tight">Если не готов выкладывать контент</p>
</div>
</div>
</div>
</div>

<div className="w-full aspect-[9/16] bg-[#990000] relative flex flex-col p-8 border border-[#990000] shadow-xl overflow-hidden text-white">
<div className="mb-8 border-b border-white/20 pb-6">
<h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tighter">
                    Интересно как запустить так же?
                </h1>
</div>
<p className="text-xl font-medium leading-snug mb-8 opacity-90">
                Я собрал всю систему создания ИИ аватара в один готовый продукт.
            </p>
<div className="bg-black/20 p-6 mb-8 border border-white/10">
<p className="text-sm font-bold uppercase tracking-widest mb-4 opacity-70">Внутри пошагово:</p>
<ul className="space-y-3">
<li className="flex gap-3 text-lg leading-tight items-start">
<div className="w-1.5 h-1.5 bg-white mt-2 shrink-0"></div>
                        Как создать своего цифрового двойника
                    </li>
<li className="flex gap-3 text-lg leading-tight items-start">
<div className="w-1.5 h-1.5 bg-white mt-2 shrink-0"></div>
                        Где брать идеи для рилсов, которые залетают
                    </li>
<li className="flex gap-3 text-lg leading-tight items-start">
<div className="w-1.5 h-1.5 bg-white mt-2 shrink-0"></div>
                        Как генерить по 3-5 видео в день без съёмок
                    </li>
<li className="flex gap-3 text-lg leading-tight items-start">
<div className="w-1.5 h-1.5 bg-white mt-2 shrink-0"></div>
                        Какие нейросети использовать и как их настроить
                    </li>
</ul>
</div>
<div className="mt-auto">
<div className="flex items-center gap-2 mb-2 animate-pulse">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
<span className="text-sm uppercase tracking-widest font-bold">Действуй сейчас</span>
</div>
<div className="bg-white text-[#990000] p-6 text-center border-2 border-white cursor-pointer hover:bg-gray-100 transition-colors">
<p className="text-lg font-medium leading-tight mb-1 text-black">Напиши мне в директ слово</p>
<p className="text-5xl font-bold uppercase tracking-tighter">КЛОН</p>
</div>
<p className="text-center mt-4 text-sm opacity-60">Скину всё, что нужно для запуска.</p>
</div>
</div>
</div>


    </>
  );
}
