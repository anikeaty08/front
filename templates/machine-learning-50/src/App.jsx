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
      

<nav className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tighter text-gray-900">HALYK ML</div>
<div className="text-xs text-gray-500">План внедрения</div>
</div>
</nav>
<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">

<section className="space-y-8 animate-fade-in" id="slide-1">
<div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Слайд 1</div>
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">
                    ML-инициативы для Halyk Super App:<br className="hidden sm:block"/>
<span className="text-gray-500">приоритизация и план внедрения</span>
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1">
<span className="text-xs text-gray-500">Роль</span>
<span className="text-sm font-medium">PM ML-платформы Halyk Super App</span>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1">
<span className="text-xs text-gray-500">Контекст</span>
<span className="text-sm font-medium">ML-команда отвечает за ML-инициативы across ecosystem</span>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1">
<span className="text-xs text-gray-500">Цель проекта</span>
<span className="text-sm font-medium">Найти ML-use cases с максимальным влиянием на выручку, CX и OPEX</span>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1">
<span className="text-xs text-gray-500">Scope</span>
<span className="text-sm font-medium">B2C, B2B, внутренние процессы</span>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
<p className="text-base text-gray-700 leading-relaxed">
                    Halyk уже имеет сильную цифровую базу: <span className="font-medium text-gray-900">7.9 млн MAU Super App</span>, <span className="font-medium text-gray-900">305 тыс. MAU Onlinebank</span>, <span className="font-medium text-gray-900">16.2 трлн тг</span> платежей и переводов в Super App за 2024 год.
                </p>
<div className="h-px bg-gray-100 w-full"></div>
<p className="text-base text-gray-700 leading-relaxed">
                    Это создает хорошую базу для ML-решений в трех направлениях: рост GMV/комиссий, снижение cost-to-serve, улучшение персонализации.
                </p>
<div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
<p className="text-sm text-gray-600">
<span className="font-medium text-gray-900">Задача проекта</span> — выбрать инициативы, которые можно быстро проверить и масштабировать внутри экосистемы Halyk.
                    </p>
</div>
</div>
</section>

<section className="space-y-6" id="slide-2">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 2</div>
<h2 className="text-2xl font-medium tracking-tight">Где ML может дать value в Halyk</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight">B2C</h3>
<ul className="space-y-3 text-sm text-gray-600 flex-1">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Умный поиск и рекомендации в Halyk Market / Super App.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>AI-ассистент для клиентской поддержки.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Персонализированные офферы / next best action.</span>
</li>
</ul>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight">B2B</h3>
<ul className="space-y-3 text-sm text-gray-600 flex-1">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Halyk AdTech для мерчантов.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>ML для ранжирования sponsored offers.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Seller assistant / seller support automation.</span>
</li>
</ul>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
<iconify-icon className="text-xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight">Internal / Operations</h3>
<ul className="space-y-3 text-sm text-gray-600 flex-1">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Интеллектуальная маршрутизация обращений.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>AI summary для операторов.</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>ML-мониторинг качества и fraud / abuse / anomaly support cases.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="space-y-6" id="slide-3">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 3</div>
<h2 className="text-2xl font-medium tracking-tight">Источник гипотез</h2>
</header>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap sm:whitespace-normal">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-3 px-4 font-medium text-gray-600 w-1/4">Гипотеза</th>
<th className="py-3 px-4 font-medium text-gray-600 w-1/3">Источник</th>
<th className="py-3 px-4 font-medium text-gray-600">Что подтвердило</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="py-4 px-4 font-medium text-gray-900">AI-ассистент в поддержке</td>
<td className="py-4 px-4 text-gray-600">Freedom benchmark, Gartner, McKinsey, отзывы пользователей, JTBD</td>
<td className="py-4 px-4 text-gray-600">Есть локальный PMF: автоматизация, faster response, savings</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-gray-900">Halyk AdTech</td>
<td className="py-4 px-4 text-gray-600">Halyk AR 2024, Kaspi FY2024, аналог T-Bank</td>
<td className="py-4 px-4 text-gray-600">Есть audience + merchant base + visible monetization benchmark</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-gray-900">Умный поиск и рекомендации</td>
<td className="py-4 px-4 text-gray-600">Halyk AR 2024, Kaspi / marketplace pattern, пользовательский сценарий выбора</td>
<td className="py-4 px-4 text-gray-600">Halyk уже пишет, что AI/ML-рекомендации драйвили рост Super App</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50/50 p-4 rounded-lg border border-gray-100">
<iconify-icon className="text-gray-400 text-lg flex-shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<p>Основой гипотез стали конкурентный анализ, публичная отчетность, JTBD и голос клиента.</p>
</div>
</section>

<section className="space-y-6" id="slide-4">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 4</div>
<h2 className="text-2xl font-medium tracking-tight">Гипотеза 1 — AI-ассистент для поддержки</h2>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="space-y-6">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Проблема</h3>
<ul className="space-y-2 text-sm text-gray-700">
<li className="flex gap-2"><span className="text-gray-300">—</span> Пользователи хотят получать ответ сразу, а не ждать оператора.</li>
<li className="flex gap-2"><span className="text-gray-300">—</span> В отзывах типовые боли: "не дождался оператора", "бот не понял вопрос".</li>
<li className="flex gap-2"><span className="text-gray-300">—</span> Большая доля обращений — повторяющиеся статусные и FAQ-сценарии.</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Решение</h3>
<p className="text-sm text-gray-700 mb-2">Встроить в Halyk Market / Super App LLM AI-assistant для:</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">FAQ</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">статуса заказа</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">возвратов</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">простых вопросов</span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">маршрутизации</span>
</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
<h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:lightbulb-bolt-linear"></iconify-icon>
                            Почему гипотеза сильная
                        </h3>
<ul className="space-y-3 text-sm text-gray-600">
<li>Freedom на локальном рынке уже показывает 65% чатов без оператора, x3 скорость ответа, 90% CSAT, 263 млн тг экономии в год.</li>
<li>Gartner отмечает, что 85% customer service leaders планируют пилот или внедрение conversational GenAI, а до 80% контактов потенциально разрешимы без человека.</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                            Ожидаемый эффект
                        </h3>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex justify-between border-b border-gray-50 pb-2">
<span>Автоматизация трафика</span> <span className="font-medium text-gray-900">60–70%</span>
</li>
<li className="flex justify-between border-b border-gray-50 pb-2">
<span>Метрики качества</span> <span className="font-medium text-gray-900">AHT -50%, FCR +20%</span>
</li>
<li className="flex justify-between border-b border-gray-50 pb-2">
<span>Скорость ответа</span> <span className="font-medium text-gray-900">&lt; 30 сек</span>
</li>
<li className="flex justify-between pt-1">
<span>OPEX savings</span> <span className="font-medium text-gray-900">150–400 млн тг/год</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="slide-5">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 5</div>
<h2 className="text-2xl font-medium tracking-tight">Гипотеза 2 — Halyk AdTech для мерчантов</h2>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="space-y-6">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Продукт</h3>
<p className="text-sm text-gray-700">
                            Self-service + managed-service рекламная платформа внутри Halyk Super App, Halyk Market, Bonus Club и других surfaces экосистемы.
                        </p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">JTBD</h3>
<div className="space-y-4">
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="text-xs font-medium text-gray-500 block mb-1">Merchant</span>
<p className="text-sm text-gray-800">«Найти внутри Halyk покупателей с высокой вероятностью покупки без сжигания бюджета»</p>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<span className="text-xs font-medium text-gray-500 block mb-1">User</span>
<p className="text-sm text-gray-800">«Видеть полезные офферы, а не баннерный шум»</p>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-900 mb-3">Почему Halyk может это запустить</h3>
<ul className="space-y-3 text-sm text-gray-600">
<li>Уже есть масштаб спроса: 7.9 млн MAU Super App, 11.3 млн активных retail клиентов, 16.2 трлн тг объема платежей.</li>
<li>Halyk уже использует AI/ML в рекомендательной системе, а также развивает бонусный агрегатор и персональные коммуникации.</li>
</ul>
</div>
<div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
<h3 className="text-sm font-medium text-gray-900 mb-3">Почему гипотеза сильная (Деньги)</h3>
<ul className="space-y-3 text-sm text-gray-600">
<li>Kaspi показывает, что слой Advertising + Delivery уже materially monetizes marketplace: в FY2024 marketplace GMV достиг около 6.0 трлн тг.</li>
<li>Даже при аккуратной оценке только для Halyk Market с GMV 375.1 млрд тг, monetization ad/promotional layer на уровне 1.0–1.5% GMV дает порядка <span className="font-medium text-gray-900">3.8–5.6 млрд тг в год</span> ориентировочной выручки.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="slide-6">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 6</div>
<h2 className="text-2xl font-medium tracking-tight">Гипотеза 3 — Умный поиск и рекомендации</h2>
</header>
<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
<p className="text-base text-gray-800 font-medium leading-relaxed">
                    Внедрение гибридной системы semantic search + personalized recommendations в Halyk Market / Super App повысит конверсию в покупку, CTR карточек, GMV и удержание.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
<h3 className="text-sm font-medium text-gray-900 mb-2">Почему это релевантно</h3>
<p className="text-sm text-gray-600">Halyk сам пишет, что рост популярности Super App в 2024 был поддержан персонализированной recommendation system на AI/ML. Следующий шаг — развить поиск, выдачу, подборки и NBO.</p>
</div>
<div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
<h3 className="text-sm font-medium text-gray-900 mb-2">Сравнение с рынком</h3>
<p className="text-sm text-gray-600">Kaspi и другие superapp/marketplace-игроки выигрывают за счет силы discovery, каталога и персонализированной выдачи. У Halyk есть база для next-step развития этого слоя.</p>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<h3 className="text-sm font-medium text-gray-900 mb-3">Продуктовый эффект</h3>
<ul className="space-y-2 text-sm text-gray-600">
<li className="flex gap-2"><span className="text-gray-400 text-xs mt-0.5">●</span> <b>User:</b> быстрее найти нужный товар/сервис.</li>
<li className="flex gap-2"><span className="text-gray-400 text-xs mt-0.5">●</span> <b>Market:</b> рост conversion, GMV, retention.</li>
<li className="flex gap-2"><span className="text-gray-400 text-xs mt-0.5">●</span> <b>Bank:</b> усиление engagement и cross-sell.</li>
</ul>
</div>
</div>
</section>

<section className="space-y-6" id="slide-7">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 7</div>
<h2 className="text-2xl font-medium tracking-tight">Приоритизация гипотез</h2>
</header>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap sm:whitespace-normal">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-3 px-4 font-medium text-gray-600">Гипотеза</th>
<th className="py-3 px-4 font-medium text-gray-600 text-center">Impact</th>
<th className="py-3 px-4 font-medium text-gray-600 text-center">Confidence</th>
<th className="py-3 px-4 font-medium text-gray-600 text-center">Ease</th>
<th className="py-3 px-4 font-medium text-gray-600 text-center">Priority</th>
<th className="py-3 px-4 font-medium text-gray-600 w-1/3">Почему</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="py-4 px-4 font-medium text-gray-900">AI-ассистент support</td>
<td className="py-4 px-4 text-center text-gray-600">9</td>
<td className="py-4 px-4 text-center text-gray-600">9</td>
<td className="py-4 px-4 text-center text-gray-600">7</td>
<td className="py-4 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">P1</span>
</td>
<td className="py-4 px-4 text-gray-500 text-xs">Быстрый и понятный ROI, сильный локальный benchmark</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-gray-900">Умный поиск и рекомендации</td>
<td className="py-4 px-4 text-center text-gray-600">8</td>
<td className="py-4 px-4 text-center text-gray-600">8</td>
<td className="py-4 px-4 text-center text-gray-600">6</td>
<td className="py-4 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">P1</span>
</td>
<td className="py-4 px-4 text-gray-500 text-xs">Уже есть foundation внутри Halyk, прямое влияние на GMV/CVR</td>
</tr>
<tr>
<td className="py-4 px-4 font-medium text-gray-900">Halyk AdTech</td>
<td className="py-4 px-4 text-center text-gray-600">9</td>
<td className="py-4 px-4 text-center text-gray-600">7</td>
<td className="py-4 px-4 text-center text-gray-600">5</td>
<td className="py-4 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-50 text-gray-500 border border-gray-200">P2</span>
</td>
<td className="py-4 px-4 text-gray-500 text-xs">Очень большой upside, но выше legal/privacy и platform complexity</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
<div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
<span className="text-xs font-medium text-gray-500 uppercase block mb-2">Запускать первыми</span>
<ul className="text-sm text-gray-900 font-medium space-y-1">
<li>1. AI support assistant</li>
<li>2. Smart search &amp; recommendations</li>
</ul>
</div>
<div className="p-4 rounded-lg bg-white border border-gray-200 border-dashed">
<span className="text-xs font-medium text-gray-400 uppercase block mb-2">Параллельно вести discovery</span>
<ul className="text-sm text-gray-600 space-y-1">
<li>Halyk AdTech</li>
</ul>
</div>
</div>
</section>

<section className="space-y-6" id="slide-8">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 8</div>
<h2 className="text-2xl font-medium tracking-tight">Почему такой приоритет</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="inline-block w-2 h-2 rounded-full bg-gray-800"></span>
<h3 className="font-medium text-gray-900">AI Support</h3>
</div>
<p className="text-sm text-gray-600">Самый быстрый путь в OPEX savings + CSAT uplift.</p>
<p className="text-sm text-gray-600">Есть benchmark в Казахстане, значит ниже риск product-market mismatch.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="inline-block w-2 h-2 rounded-full bg-gray-800"></span>
<h3 className="font-medium text-gray-900">Smart Search</h3>
</div>
<p className="text-sm text-gray-600">Прямо влияет на core user journey выбора, открытия карточки, добавления в корзину и покупки.</p>
<p className="text-sm text-gray-600">Уже согласуется с текущим вектором Halyk на AI/ML personalization.</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-3 opacity-90">
<div className="flex items-center gap-2 mb-1">
<span className="inline-block w-2 h-2 rounded-full border-2 border-gray-400"></span>
<h3 className="font-medium text-gray-900">AdTech <span className="text-xs text-gray-400 font-normal ml-1">(P2)</span></h3>
</div>
<p className="text-sm text-gray-600">Самый большой upside по новой fee-based revenue.</p>
<p className="text-sm text-gray-600">Но выше риск по privacy, measurement, cross-team dependencies и UX.</p>
</div>
</div>
</section>

<section className="space-y-6" id="slide-9">
<header className="border-b border-gray-200 pb-4 flex justify-between items-end">
<div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 9</div>
<h2 className="text-2xl font-medium tracking-tight">Roadmap внедрения</h2>
</div>
<div className="text-xs text-gray-500 max-w-xs text-right hidden sm:block">
                    Ответственные: Product, DS/ML, DE, Backend, CRM, Legal, Risk, Analytics
                </div>
</header>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-200"></div>
<span className="text-xs font-medium text-gray-500 block mb-3">Wave 1 (0–2 мес)</span>
<ul className="space-y-3 text-sm text-gray-700">
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Discovery, JTBD, сбор baseline-аналитики.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Аудит данных и event schema.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Legal / compliance review.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Выбор 2 приоритетов для MVP.</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
<span className="text-xs font-medium text-gray-900 block mb-3">Wave 2 (2–4 мес)</span>
<div className="space-y-4">
<div>
<span className="text-xs font-medium text-gray-500 mb-1 block">MVP AI Support:</span>
<p className="text-sm text-gray-700 leading-tight">FAQ, статус заказа, возвраты, routing to agent.</p>
</div>
<div>
<span className="text-xs font-medium text-gray-500 mb-1 block">MVP Smart Search:</span>
<p className="text-sm text-gray-700 leading-tight">semantic retrieval, query rewrite, personalized ranking.</p>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-400"></div>
<span className="text-xs font-medium text-gray-900 block mb-3">Wave 3 (4–6 мес)</span>
<ul className="space-y-3 text-sm text-gray-700">
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:play-circle-linear"></iconify-icon> Shadow mode, offline evaluation, limited pilot.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:play-circle-linear"></iconify-icon> A/B-тесты для support и search.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:play-circle-linear"></iconify-icon> Подготовка merchant pilot для AdTech.</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gray-800"></div>
<span className="text-xs font-medium text-gray-900 block mb-3">Wave 4 (6–9 мес)</span>
<ul className="space-y-3 text-sm text-gray-700">
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:rocket-linear"></iconify-icon> Масштабирование support automation.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:rocket-linear"></iconify-icon> Расширение recommendations surfaces.</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-gray-400 mt-0.5" icon="solar:rocket-linear"></iconify-icon> Запуск AdTech MVP для ограниченного merchant cohort.</li>
</ul>
</div>
</div>
<div className="text-xs text-gray-500 sm:hidden">
                Ответственные: Product, DS/ML, DE, Backend, CRM, Legal, Risk, Analytics
            </div>
</section>

<section className="space-y-6" id="slide-10">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 10</div>
<h2 className="text-2xl font-medium tracking-tight">ML-спецификация: AI-ассистент support</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="space-y-4">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Данные</h3>
<ul className="text-sm text-gray-600 space-y-1 ml-3">
<li>Исторические диалоги КЦ: 100K+ диалогов.</li>
<li>Knowledge base: FAQ, возвраты, доставка.</li>
<li>Транзакционные и order status данные.</li>
<li className="pt-1 text-xs text-gray-500">
                                События: <code className="font-mono bg-gray-50 px-1 rounded">intent_resolved</code>, <code className="font-mono bg-gray-50 px-1 rounded">escalated</code>, <code className="font-mono bg-gray-50 px-1 rounded">csat_score</code>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Разметка</h3>
<ul className="text-sm text-gray-600 space-y-1 ml-3">
<li>2–3 доменных эксперта из КЦ.</li>
<li>Разметка 5–10K диалогов: intent, сложность, тональность, <code className="font-mono text-xs bg-gray-50 px-1 rounded">can_be_auto_resolved</code>.</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Архитектура &amp; Infra</h3>
<ul className="text-sm text-gray-600 space-y-1 ml-3">
<li>RAG + LLM для ответа.</li>
<li>Отдельный intent-classifier для маршрутизации.</li>
<li>p99 latency &lt; 2 сек. RPS: 50–500.</li>
</ul>
</div>
</div>
<div className="space-y-4">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Target / Features</h3>
<div className="ml-3 space-y-2">
<p className="text-sm text-gray-600">Основной таргет: <code className="font-mono text-xs bg-gray-50 px-1 rounded">can_be_auto_resolved</code></p>
<p className="text-sm text-gray-600">Вторичный: <code className="font-mono text-xs bg-gray-50 px-1 rounded">intent_class</code></p>
<p className="text-sm text-gray-600 text-xs">Фичи: embedding первого сообщения, история, канал, сегмент, статус заказа, время суток.</p>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
<h3 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon> Оффлайн-метрики
                        </h3>
<ul className="text-sm text-gray-600 space-y-2 font-mono text-xs">
<li className="flex justify-between border-b border-gray-200 pb-1"><span>Intent accuracy</span> <span>≥ 92%</span></li>
<li className="flex justify-between border-b border-gray-200 pb-1"><span>Hallucination rate</span> <span>&lt; 2%</span></li>
<li className="flex justify-between border-b border-gray-200 pb-1"><span>Recall@escalation</span> <span>&gt; 99%</span></li>
<li className="pt-1 text-gray-500 sans-serif">Auto-resolution / containment</li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="slide-11">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 11</div>
<h2 className="text-2xl font-medium tracking-tight">ML-спецификация: Halyk AdTech</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
<div className="space-y-4">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Данные</h3>
<ul className="text-xs text-gray-600 space-y-1 ml-3 leading-relaxed">
<li><span className="font-medium text-gray-700">Транзакции:</span> merchant, MCC, сумма, частота, recency, geo, cashback usage.</li>
<li><span className="font-medium text-gray-700">Поведение:</span> просмотры, клики, поиск, add-to-cart, purchase.</li>
<li><span className="font-medium text-gray-700">Merchant:</span> бюджет, цель кампании, SKU/category, geo.</li>
<li className="pt-1 text-gray-500">
<code className="font-mono bg-gray-50 px-1 rounded">ad_impression</code>, <code className="font-mono bg-gray-50 px-1 rounded">ad_click</code>, <code className="font-mono bg-gray-50 px-1 rounded">purchase_attributed</code>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Ключевые фичи</h3>
<p className="text-sm text-gray-600 ml-3">RFM по категории/merchant, реакция на прошлые offers, зарплатный цикл, география, affinity к категории, discount sensitivity.</p>
</div>
</div>
<div className="space-y-4">
<div>
<h3 className="text-sm font-medium text-gray-900 mb-2 border-l-2 border-gray-300 pl-2">Model design</h3>
<ul className="text-sm text-gray-600 space-y-2 ml-3">
<li><b>Stage A:</b> candidate generation по rules/consent.</li>
<li><b>Stage B:</b> ranking model по <code className="font-mono text-xs bg-gray-50 px-1 rounded">P(conversion | show)</code>.</li>
<li className="text-xs text-gray-500">Next step: uplift model для оптимизации инкрементальной покупки.</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<h4 className="text-xs font-medium text-gray-900 mb-1">Метрики</h4>
<p className="font-mono text-[11px] text-gray-600 leading-tight">PR-AUC, ROC-AUC, LogLoss<br/>Precision@K / NDCG@K<br/>Qini / AUUC (uplift)</p>
</div>
<div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
<h4 className="text-xs font-medium text-gray-900 mb-1">Infra</h4>
<p className="text-xs text-gray-600 leading-tight">Daily batch + online rerank<br/>p95 latency 150–200 мс<br/>~1000 RPS</p>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="slide-12">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 12</div>
<h2 className="text-2xl font-medium tracking-tight">Проверка эффекта в проде</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
<h3 className="font-medium text-gray-900 mb-1">AI Support</h3>
<p className="text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">Формат: shadow mode → pilot → A/B<br/>Control: human-first flow → LLM assistant</p>
<div className="flex-1 space-y-4">
<div>
<span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mb-1">Primary metrics</span>
<ul className="text-sm text-gray-700 space-y-0.5">
<li>containment</li>
<li>AHT, FCR</li>
<li>CSAT</li>
</ul>
</div>
<div>
<span className="text-[11px] font-semibold text-rose-600 uppercase tracking-wider block mb-1">Guardrails</span>
<ul className="text-sm text-gray-600 space-y-0.5">
<li>escalation miss rate</li>
<li>hallucination complaints</li>
<li>repeat contact</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
<h3 className="font-medium text-gray-900 mb-1">Smart Search</h3>
<p className="text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">Формат: A/B<br/>Control: current search → hybrid semantic</p>
<div className="flex-1 space-y-4">
<div>
<span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mb-1">Primary metrics</span>
<ul className="text-sm text-gray-700 space-y-0.5">
<li>search success rate</li>
<li>CTR, add-to-cart</li>
<li>conversion</li>
</ul>
</div>
<div>
<span className="text-[11px] font-semibold text-rose-600 uppercase tracking-wider block mb-1">Guardrails</span>
<ul className="text-sm text-gray-600 space-y-0.5">
<li>zero-result rate</li>
<li>latency</li>
<li>bounce after search</li>
</ul>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
<h3 className="font-medium text-gray-900 mb-1">AdTech</h3>
<p className="text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">Формат: pilot (10-20 merch) → A/B<br/>Control: rule-based → ML ranking</p>
<div className="flex-1 space-y-4">
<div>
<span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mb-1">Primary metrics</span>
<ul className="text-sm text-gray-700 space-y-0.5">
<li>revenue per exposed user</li>
<li>inc. GMV per 1K impressions</li>
<li>advertiser ROI</li>
</ul>
</div>
<div>
<span className="text-[11px] font-semibold text-rose-600 uppercase tracking-wider block mb-1">Guardrails</span>
<ul className="text-sm text-gray-600 space-y-0.5">
<li>hide rate, opt-out</li>
<li>complaint rate</li>
<li>core banking journey completion</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6" id="slide-13">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 13</div>
<h2 className="text-2xl font-medium tracking-tight">Риски и как снижаем</h2>
</header>
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="py-3 px-4 font-medium text-gray-600 w-1/3">Риск</th>
<th className="py-3 px-4 font-medium text-gray-600 w-1/4">Где критичен</th>
<th className="py-3 px-4 font-medium text-gray-600">Как снижаем</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr>
<td className="py-3 px-4 font-medium text-gray-900">Privacy / consent</td>
<td className="py-3 px-4 text-gray-500">Особенно AdTech</td>
<td className="py-3 px-4 text-gray-600">Consent-first, opt-out, data minimization, no sensitive targeting</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900">Hallucinations / wrong answers</td>
<td className="py-3 px-4 text-gray-500">AI support</td>
<td className="py-3 px-4 text-gray-600">RAG, guardrails, confidence threshold, escalation fallback</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900">Ухудшение UX</td>
<td className="py-3 px-4 text-gray-500">Search / Ads / Support</td>
<td className="py-3 px-4 text-gray-600">Guardrail metrics, частотные ограничения, не трогать critical banking flows</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900">Слабая измеримость эффекта</td>
<td className="py-3 px-4 text-gray-500">AdTech</td>
<td className="py-3 px-4 text-gray-600">Прозрачная атрибуция, pilot design, reporting для merchants</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900">Cold start</td>
<td className="py-3 px-4 text-gray-500">Search / Ads</td>
<td className="py-3 px-4 text-gray-600">Hybrid ranking, popularity/content signals, manual bootstrap</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-gray-900">Cross-team conflict</td>
<td className="py-3 px-4 text-gray-500">Все инициативы</td>
<td className="py-3 px-4 text-gray-600">Steering committee, общий north star, governance cadence</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="space-y-6" id="slide-14">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 14</div>
<h2 className="text-2xl font-medium tracking-tight">Коммуникация со стейкхолдерами</h2>
</header>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-bold-linear"></iconify-icon> Топ-менеджмент
                    </h3>
<p className="text-sm text-gray-600">Это не «ML ради ML», а рост fee income, retention и efficiency.</p>
</div>
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:shield-warning-linear"></iconify-icon> Legal / Risk
                    </h3>
<p className="text-sm text-gray-600">Consent-first architecture, ограничения на sensitive use cases, auditable decisions.</p>
</div>
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:widget-add-linear"></iconify-icon> Product / CRM
                    </h3>
<p className="text-sm text-gray-600">ML должен усиливать текущие surfaces и customer journeys, а не ломать их.</p>
</div>
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:shop-2-linear"></iconify-icon> Мерчанты
                    </h3>
<p className="text-sm text-gray-600">Понятный инструмент роста продаж и прозрачная аналитика эффекта.</p>
</div>
<div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm lg:col-span-2">
<h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:users-group-two-rounded-linear"></iconify-icon> Пользователи
                    </h3>
<p className="text-sm text-gray-600">Только релевантная помощь и предложения, прозрачное управление персонализацией.</p>
</div>
</div>
</section>

<section className="space-y-6 pt-8" id="slide-15">
<header className="border-b border-gray-200 pb-4">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">Слайд 15</div>
<h2 className="text-2xl font-medium tracking-tight">Итоговая рекомендация</h2>
</header>
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10 space-y-8 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gray-900"></div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-700">1</div>
<p className="text-base text-gray-800">
                        Запустить в первую очередь <span className="font-medium text-gray-900">AI support assistant</span> — это самая быстрая и доказуемая ML-инициатива по ROI и OPEX, с сильным локальным benchmark.
                    </p>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-700">2</div>
<p className="text-base text-gray-800">
                        Параллельно развивать <span className="font-medium text-gray-900">smart search &amp; recommendations</span> как core B2C growth engine, потому что Halyk уже подтверждает value AI/ML personalization в росте Super App.
                    </p>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-gray-700">3</div>
<p className="text-base text-gray-800">
<span className="font-medium text-gray-900">Halyk AdTech</span> вести как стратегическую P2-инициативу: это самый сильный upside по новой комиссионной выручке, но запускать его лучше через staged pilot с сильным legal/privacy дизайном.
                    </p>
</div>
</div>
</section>
</main>

    </>
  );
}
