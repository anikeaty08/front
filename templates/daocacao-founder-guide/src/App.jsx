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
      

<header className="sticky top-0 z-50 bg-[#f9f8f6]/80 backdrop-blur-xl border-b border-stone-200/50">
<div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
<div className="font-medium tracking-tighter text-lg uppercase flex items-center gap-1.5 text-stone-800">
<iconify-icon className="text-emerald-700 text-xl" icon="solar:leaf-linear"></iconify-icon>
                ДАО КАКАО
            </div>
<div className="flex gap-2">
<button className="p-2 text-stone-500 hover:text-stone-800 transition-colors rounded-full hover:bg-stone-200/50 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="max-w-2xl mx-auto px-4 py-8 md:py-12 flex flex-col gap-8 md:gap-12">

<section className="text-center pt-4 pb-8">
<div className="inline-flex items-center justify-center p-3.5 bg-amber-100/50 text-amber-800 rounded-full mb-4 border border-amber-200/50 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-3">Руководство по управлению</h1>
<p className="text-stone-500 font-light max-w-md mx-auto">Мобильная инструкция для основателя по настройке и масштабированию экосистемы кафе.</p>
</section>

<article className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 deco-border relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-50 rounded-full blur-2xl opacity-60 pointer-events-none"></div>
<header className="flex items-baseline gap-3 mb-5">
<span className="text-amber-700/60 font-medium text-lg">01</span>
<h2 className="text-xl font-semibold tracking-tight text-stone-800">С чего всё начинается: Цели основателя</h2>
</header>
<p className="text-stone-600 font-light mb-5">Прежде чем говорить о гостях и деньгах, нужно понять, зачем это кафе лично его основателю. Бизнес — это инструмент для достижения личных целей. Например:</p>
<ul className="flex flex-col gap-3 mb-6">
<li className="flex gap-3 items-start bg-stone-50/50 p-3 rounded-2xl border border-stone-100">
<iconify-icon className="text-amber-600 mt-0.5 text-lg shrink-0" icon="solar:target-linear"></iconify-icon>
<span className="text-stone-700 font-light"><strong className="font-medium text-stone-900">Создать место</strong>, которым можно гордиться.</span>
</li>
<li className="flex gap-3 items-start bg-stone-50/50 p-3 rounded-2xl border border-stone-100">
<iconify-icon className="text-amber-600 mt-0.5 text-lg shrink-0" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-stone-700 font-light"><strong className="font-medium text-stone-900">Сформировать сообщество</strong> "своих" людей.</span>
</li>
<li className="flex gap-3 items-start bg-stone-50/50 p-3 rounded-2xl border border-stone-100">
<iconify-icon className="text-amber-600 mt-0.5 text-lg shrink-0" icon="solar:eye-linear"></iconify-icon>
<span className="text-stone-700 font-light"><strong className="font-medium text-stone-900">Реализовать</strong> своё видение прекрасного.</span>
</li>
<li className="flex gap-3 items-start bg-stone-50/50 p-3 rounded-2xl border border-stone-100">
<iconify-icon className="text-amber-600 mt-0.5 text-lg shrink-0" icon="solar:heart-linear"></iconify-icon>
<span className="text-stone-700 font-light"><strong className="font-medium text-stone-900">Заниматься делом</strong>, которое приносит радость.</span>
</li>
</ul>
<p className="text-stone-600 font-light mb-4">Чтобы это было возможно, кафе должно быть <strong className="font-medium text-stone-800">жизнеспособным</strong>. Оно должно как минимум окупать себя, а в идеале — приносить прибыль.</p>
<div className="bg-amber-50/80 p-4 md:p-5 rounded-2xl border border-amber-100/60 flex flex-col gap-2 relative overflow-hidden">
<iconify-icon className="absolute -right-4 -bottom-4 text-6xl text-amber-200/50 pointer-events-none" icon="solar:calculator-linear"></iconify-icon>
<span className="text-amber-900 font-medium tracking-tight text-lg">Прибыль = Все доходы − Все расходы</span>
<span className="text-amber-800/80 text-xs md:text-sm font-light leading-relaxed">Расходы — это аренда, зарплаты, маркетинговый бюджет, продукты. Это то, что нужно, чтобы система работала.</span>
</div>
</article>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<article className="bg-emerald-900/5 backdrop-blur-sm rounded-3xl p-6 border border-emerald-900/10">
<h2 className="text-lg font-semibold tracking-tight text-emerald-950 mb-3 flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="solar:waterdrops-linear"></iconify-icon>
                    Кафе как средоточие сил
                </h2>
<p className="text-stone-600 font-light text-sm mb-4">Представьте, что в городе постоянно движутся потоки: люди идут по делам, туристы гуляют... Это тысячи независимых процессов. Кафе — это пространство, где некоторые из этих потоков на время пересекаются.</p>
<div className="bg-white/60 p-3 rounded-xl border border-white/40 text-sm font-light text-stone-700">
<strong className="font-medium text-stone-900">Стратегия</strong> — это создание условий, чтобы потоки пересекались нужным образом и с нужным результатом.
                </div>
</article>
<article className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
<h2 className="text-lg font-semibold tracking-tight text-stone-800 mb-3 flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="solar:scale-linear"></iconify-icon>
                    Главная формула
                </h2>
<p className="text-stone-600 font-light text-sm mb-4">Вся сложная система в итоге сводится к простой и честной формуле. Каждое действие должно влиять на один из множителей.</p>
<div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-center">
<span className="font-semibold tracking-tight text-stone-900 block text-base md:text-lg">Выручка =<br/>Заказы × Средний чек</span>
</div>
</article>
</div>

<article className="space-y-4">
<header className="flex flex-col gap-1 px-2">
<span className="text-amber-700/60 font-medium text-sm">04</span>
<h2 className="text-xl font-semibold tracking-tight text-stone-800">Ресурсы: активы кафе</h2>
<p className="text-stone-500 font-light text-sm">Взаимодействующие элементы системы.</p>
</header>
<div className="flex overflow-x-auto hide-scroll gap-4 pb-4 snap-x snap-mandatory pr-4 -mr-4 pl-4 -ml-4">
<div className="snap-center shrink-0 w-[85vw] md:w-64 bg-white p-5 rounded-3xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-50 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-3">
<div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl group-active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 tracking-tight">Гость</h3>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed"><strong className="font-medium text-stone-700">Главный носитель энергии.</strong> Приходит со своими интересами, приносит время, внимание и деньги.</p>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-64 bg-white p-5 rounded-3xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-50 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-3">
<div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-xl group-active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 tracking-tight">Пространство</h3>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed"><strong className="font-medium text-stone-700">Сцена, задающая правила.</strong> Дизайн отсеивает "не ваших" гостей и притягивает "ваших".</p>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-64 bg-white p-5 rounded-3xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-50 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-3">
<div className="p-2.5 bg-amber-50 text-amber-700 rounded-xl group-active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 tracking-tight">Продукт</h3>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed"><strong className="font-medium text-stone-700">Инструмент удовлетворения.</strong> Еда, мерч, билеты и даже "право" посидеть в приятном месте.</p>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-64 bg-white p-5 rounded-3xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-stone-100 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-3">
<div className="p-2.5 bg-stone-100 text-stone-700 rounded-xl group-active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 tracking-tight">Команда</h3>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed"><strong className="font-medium text-stone-700">"Душа" пространства.</strong> Люди, превращающие визит в опыт и создающие лояльность.</p>
</div>
<div className="snap-center shrink-0 w-[85vw] md:w-64 bg-white p-5 rounded-3xl border border-stone-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent opacity-50"></div>
<div className="flex items-center gap-3 mb-3">
<div className="p-2.5 bg-blue-50 text-blue-700 rounded-xl group-active:scale-95 transition-transform">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="font-medium text-stone-800 tracking-tight">Время</h3>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed"><strong className="font-medium text-stone-700">Контекст.</strong> Утро и вечер — разные потребности. Сезон — ключевой фактор.</p>
</div>
</div>
</article>

<article className="bg-stone-900 rounded-3xl p-6 md:p-8 text-stone-300 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}}></div>
<header className="relative z-10 mb-6">
<span className="text-amber-500 font-medium text-sm block mb-1">05</span>
<h2 className="text-xl font-semibold tracking-tight text-white">Цепная реакция стратегии</h2>
</header>
<div className="relative z-10 space-y-4">
<div className="flex gap-4">
<div className="flex flex-col items-center mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-xs text-emerald-400">1</div>
<div className="w-px h-full bg-stone-800 my-1"></div>
</div>
<p className="font-light text-sm pb-2">Команда и Продукт в Пространстве создают для Гостя положительный <strong className="text-white font-medium">Опыт</strong>.</p>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-xs text-emerald-400">2</div>
<div className="w-px h-full bg-stone-800 my-1"></div>
</div>
<p className="font-light text-sm pb-2">Опыт превращает разового гостя в <strong className="text-white font-medium">постоянного</strong>.</p>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-xs text-emerald-400">3</div>
<div className="w-px h-full bg-stone-800 my-1"></div>
</div>
<p className="font-light text-sm pb-2">Он доверяет и покупает больше, <strong className="text-white font-medium">увеличивая средний чек</strong>.</p>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-xs text-emerald-400">4</div>
<div className="w-px h-full bg-stone-800 my-1"></div>
</div>
<p className="font-light text-sm pb-2">Становится "адвокатом бренда", <strong className="text-white font-medium">привлекая новых бесплатно</strong>.</p>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center mt-1">
<div className="w-6 h-6 rounded-full bg-amber-900 border border-amber-700 flex items-center justify-center text-xs text-amber-400">5</div>
</div>
<p className="font-light text-sm">Лояльные становятся <strong className="text-amber-400 font-medium">резидентами</strong>, используя Пространство для привлечения своей аудитории.</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-stone-800 relative z-10">
<p className="text-sm font-light text-stone-400">Один ресурс используется многократно, приближая основателя к целям.</p>
</div>
</article>

<section className="space-y-6">
<header className="px-2">
<h2 className="text-xl font-semibold tracking-tight text-stone-800">Управление: фокус на простом</h2>
<p className="text-stone-500 font-light text-sm mt-1">Два режима мышления: стратегия (лес) и тактика (деревья).</p>
</header>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
<div className="p-5 border-b border-stone-100 bg-stone-50/50 flex flex-col gap-1">
<span className="text-xs tracking-widest uppercase text-stone-400 font-medium">Ежедневная задача</span>
<p className="text-stone-800 font-medium">Сделать так, чтобы сегодня пришло достаточно людей, которые купят достаточно продуктов.</p>
</div>
<div className="p-2 space-y-2">

<div className="p-4 rounded-2xl hover:bg-stone-50 transition-colors flex flex-col gap-3">
<div className="flex items-center justify-between cursor-pointer" onclick="this.parentElement.querySelector('.content').classList.toggle('hidden')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-800">Увеличение заказов</h3>
<p className="text-xs text-stone-500 font-light">Привести человека "с улицы"</p>
</div>
</div>

<div className="w-8 h-4 bg-stone-200 rounded-full relative flex items-center px-1">
<div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="content hidden pl-[3.25rem] text-sm text-stone-600 font-light border-l-2 border-emerald-100 ml-5">
<span className="block mb-1 text-emerald-800 font-medium text-xs uppercase tracking-wider">Инструменты</span>
                            Репутация, вывеска, утренние предложения, мероприятия, создающие повод прийти.
                        </div>
</div>

<div className="p-4 rounded-2xl hover:bg-stone-50 transition-colors flex flex-col gap-3">
<div className="flex items-center justify-between cursor-pointer" onclick="this.parentElement.querySelector('.content').classList.toggle('hidden')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-800">Увеличение чека</h3>
<p className="text-xs text-stone-500 font-light">Продать больше тем, кто пришел</p>
</div>
</div>

<div className="w-8 h-4 bg-stone-200 rounded-full relative flex items-center px-1">
<div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="content hidden pl-[3.25rem] text-sm text-stone-600 font-light border-l-2 border-amber-100 ml-5">
<span className="block mb-1 text-amber-800 font-medium text-xs uppercase tracking-wider">Инструменты</span>
                            Доп. продажи у кассы, мерч, комплексные обеды, предложения с собой.
                        </div>
</div>
</div>
</div>
</section>

<article className="bg-[#f2efe9] rounded-3xl p-6 md:p-8 border border-[#e8e4db]">
<header className="mb-6 flex items-start justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-stone-800">Стратегия запуска</h2>
<p className="text-stone-500 font-light text-sm mt-1">Как запустить первый импульс</p>
</div>
<iconify-icon className="text-3xl text-amber-700/50" icon="solar:rocket-linear"></iconify-icon>
</header>
<div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-[#dcd7ce]">
<div className="relative pl-10">
<div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-amber-100 border-2 border-amber-600 flex items-center justify-center z-10"></div>
<h3 className="font-medium text-stone-800 mb-1 text-base">Шаг 1: Первая искра</h3>
<p className="text-sm text-stone-600 font-light">Поговорить с теми, кто уже был. Узнать, что им понравилось, какую потребность закрыли, почему готовы вернуться. Это описание вашего продукта.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-[#f2efe9] border-2 border-stone-300 flex items-center justify-center z-10"></div>
<h3 className="font-medium text-stone-800 mb-1 text-base">Шаг 2: Точки контакта</h3>
<div className="bg-white/60 rounded-xl p-3 text-sm font-light text-stone-600 mt-2 space-y-2 border border-white/40">
<p><strong className="font-medium text-stone-800 text-xs">ЦИФРОВЫЕ:</strong> Карты, локальные Telegram-каналы.</p>
<p><strong className="font-medium text-stone-800 text-xs">ФИЗИЧЕСКИЕ:</strong> Маршруты, вывески, партнерские локации.</p>
<p><strong className="font-medium text-stone-800 text-xs">СОЦИАЛЬНЫЕ:</strong> Люди с доверием (блогеры, друзья).</p>
</div>
</div>
<div className="relative pl-10">
<div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-[#f2efe9] border-2 border-stone-300 flex items-center justify-center z-10"></div>
<h3 className="font-medium text-stone-800 mb-1 text-base">Шаг 3: Дешево и надежно</h3>
<p className="text-sm text-stone-600 font-light">Люди, которые вам уже доверяют — первые лидеры мнений. Максимальный охват + максимальное доверие + минимальная стоимость.</p>
</div>
<div className="relative pl-10">
<div className="absolute left-1 top-1 w-5 h-5 rounded-full bg-[#f2efe9] border-2 border-stone-300 flex items-center justify-center z-10"></div>
<h3 className="font-medium text-stone-800 mb-1 text-base">Шаг 4: Повод сильнее привычки</h3>
<div className="bg-emerald-50/80 rounded-xl p-3 text-sm font-light text-emerald-800 mt-2 border border-emerald-100">
<strong className="font-medium">Мероприятие</strong> — идеальный "троянский конь". Уникальное событие знакомит с пространством.
                    </div>
</div>
</div>
</article>

<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-stone-800 mb-2">Автономные системы</h3>
<p className="text-sm font-light text-stone-600 mb-4">Сделать ресурсы независимыми. Пример: <strong className="font-medium">Система резидентов</strong>. Один документ отвечает на вопросы: кто, что получает, что должен делать, как включиться. Система работает без вас.</p>
</div>
<div className="flex-1 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
<div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-stone-800 mb-2">Настройка команды</h3>
<p className="text-sm font-light text-stone-600 mb-4">Единая цель — увеличение прибыли через заказы и средний чек. Каждый сотрудник должен понимать, как его действие влияет на формулу (бариста предлагает десерт, уборщик создает уют).</p>
</div>
</div>

<article className="bg-stone-800 text-stone-100 rounded-3xl overflow-hidden">
<div className="p-6 md:p-8 bg-stone-900 border-b border-stone-700/50">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:chart-square-linear"></iconify-icon>
<h2 className="text-xl font-semibold tracking-tight text-white">План "на коленке"</h2>
</div>
<p className="text-sm font-light text-stone-400">Расчет коридора: от "пола" к "потолку".</p>
</div>
<div className="p-6 md:p-8 space-y-6">
<div>
<h3 className="text-emerald-400 font-medium text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> Потолок (Выручка)
                    </h3>
<p className="text-sm font-light text-stone-300 bg-stone-700/30 p-3 rounded-xl border border-stone-700/50">
                        Места × Оборачиваемость × Целевой чек = <strong className="text-white font-medium">Максимальная выручка</strong> (путеводная звезда).
                    </p>
</div>
<div>
<h3 className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
<iconify-icon icon="solar:arrow-down-linear"></iconify-icon> Пол (Затраты)
                    </h3>
<p className="text-sm font-light text-stone-300 bg-stone-700/30 p-3 rounded-xl border border-stone-700/50">
                        Постоянные (аренда, ЗП) + Переменные (продукты) = <strong className="text-white font-medium">Точка безубыточности</strong>.
                    </p>
</div>
<div className="bg-amber-900/20 p-4 rounded-2xl border border-amber-800/30">
<p className="text-sm font-light text-amber-200">
<strong className="font-medium text-amber-100 block mb-1">Фокус доходов:</strong>
<span className="block mb-1">• <strong className="text-white">Заказы:</strong> Поводы прийти (завтрак, "мертвые часы", вечер).</span>
<span>• <strong className="text-white">Чек:</strong> Доп. ценность (платные ивенты, товары мастеров).</span>
</p>
</div>
</div>
</article>

<section className="space-y-4">
<h2 className="text-xl font-semibold tracking-tight text-stone-800 px-2">Задачи и Стандарты</h2>
<div className="bg-white border border-stone-200 rounded-3xl p-2 relative">

<div className="flex gap-2 p-1 bg-stone-50 rounded-2xl mb-4 text-sm font-medium">
<div className="flex-1 text-center py-2 bg-white rounded-xl shadow-sm border border-stone-100 text-stone-800">Разовые (Проекты)</div>
<div className="flex-1 text-center py-2 text-stone-500">Регулярные (Процессы)</div>
</div>
<div className="p-4 bg-stone-50/50 rounded-2xl mb-4 border border-stone-100">
<p className="text-sm font-light text-stone-600 mb-3"><strong className="font-medium text-stone-800">Создание/изменение системы:</strong> Разработка меню, поиск мастеров, создание схемы.</p>
<div className="text-xs text-stone-500 font-light space-y-1 pl-3 border-l-2 border-amber-200">
<p>1. Поставить задачу</p>
<p>2. Контролировать</p>
<p>3. Принять результат</p>
<p>4. Интегрировать</p>
</div>
</div>
<div className="p-5 bg-amber-50/50 border border-amber-100 rounded-2xl">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-600 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="font-medium text-stone-800">Стандарты: защита от хаоса</h3>
</div>
<p className="text-sm font-light text-stone-600 mb-3">Зафиксированный лучший способ сделать что-либо. Нужен там, где возникают споры или ошибки.</p>

<div className="space-y-2">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-amber-600 bg-amber-600 text-white flex items-center justify-center shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-light text-stone-700">Техкарты напитков</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-stone-300 bg-white shrink-0"></div>
<span className="text-sm font-light text-stone-700">Чек-лист открытия смены</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-stone-300 bg-white shrink-0"></div>
<span className="text-sm font-light text-stone-700">Скрипт для резидентов</span>
</div>
</div>
</div>
</div>
</section>

<article className="bg-[#fcfaf8] border border-stone-200 rounded-3xl p-6 shadow-sm">
<header className="mb-5 flex justify-between items-end">
<div>
<h2 className="text-lg font-semibold tracking-tight text-stone-800 flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="solar:widget-3-linear"></iconify-icon>
                        Приборная панель
                    </h2>
<p className="text-xs font-light text-stone-500 mt-1">Ключевые индикаторы прогресса</p>
</div>
</header>
<div className="space-y-3">
<div className="flex justify-between items-center bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
<div>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">Бизнес</span>
<span className="text-sm font-medium text-stone-800">Чистая прибыль</span>
</div>
<div className="w-12 h-6 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 text-xs">$$$</div>
</div>
<div className="flex justify-between items-center bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
<div>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">Команда</span>
<span className="text-sm font-medium text-stone-800">Выполнение задач</span>
</div>

<div className="w-16 h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-amber-500 rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-center bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
<div>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">Привлечение</span>
<span className="text-sm font-medium text-stone-800">Количество заказов</span>
</div>
<div className="text-sm font-medium text-stone-600 bg-stone-50 px-2 py-1 rounded">/ день</div>
</div>
<div className="flex justify-between items-center bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
<div>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">Удержание</span>
<span className="text-sm font-medium text-stone-800">Средний чек</span>
</div>
<iconify-icon className="text-emerald-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
</div>
<p className="text-xs font-light text-stone-500 mt-4 text-center">Главный индикатор — прибыль. И её сравнение с планом.</p>
</article>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<article className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-stone-800 mb-4">Две роли основателя</h2>
<div className="mb-4">
<h3 className="text-sm font-medium text-stone-800 flex items-center gap-2 mb-1">
<iconify-icon className="text-amber-600" icon="solar:shield-warning-linear"></iconify-icon> Хранитель системы
                        </h3>
<p className="text-xs font-light text-stone-600">Наблюдение, анализ причин сбоев ("почему?"), постановка задач на исправление причины, контроль.</p>
</div>
<div>
<h3 className="text-sm font-medium text-stone-800 flex items-center gap-2 mb-1">
<iconify-icon className="text-amber-600" icon="solar:star-fall-linear"></iconify-icon> Лидер
                        </h3>
<p className="text-xs font-light text-stone-600">Сияние и трансляция сути. Поддержка боевого духа команды, статус для гостей и артистов, живое воплощение ценностей.</p>
</div>
</div>
</article>
<article className="bg-stone-900 text-stone-200 rounded-3xl p-6 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '100% 1.5rem', backgroundPosition: '0 3rem'}}></div>
<div className="relative z-10">
<h2 className="text-lg font-semibold tracking-tight text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-stone-400" icon="solar:pen-new-square-linear"></iconify-icon> Блокнот и ручка
                    </h2>
<p className="text-xs font-light text-stone-400 mb-4">Рабочий стол руководителя. Память ненадежна, внимание ограничено. Фиксируйте всё немедленно.</p>
<div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700 backdrop-blur-sm">
<h3 className="text-xs uppercase tracking-wider text-emerald-400 font-medium mb-2">Система разбора "Входящих":</h3>
<ul className="text-sm font-light space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-500"></div> В <strong className="text-white font-medium">задачу</strong> в плане</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-500"></div> В <strong className="text-white font-medium">идею</strong> для команды</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-500"></div> В <strong className="text-white font-medium">контакт</strong></li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-500"></div> В <strong className="text-white font-medium">мысль</strong> на потом</li>
</ul>
</div>
</div>
</article>
</div>

<footer className="pt-8 pb-4 text-center border-t border-stone-200/60">
<div className="inline-flex items-center gap-1.5 text-stone-400 text-sm">
<iconify-icon className="text-emerald-800/40" icon="solar:leaf-linear"></iconify-icon>
                ДАО КАКАО
            </div>
</footer>
</main>

    </>
  );
}
