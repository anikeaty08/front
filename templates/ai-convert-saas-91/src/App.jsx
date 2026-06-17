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



        // Init Iconify
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<span className="font-medium tracking-tight text-sm group-hover:opacity-70 transition-opacity">AI CONVERT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-black transition-colors" href="#features">Возможности</a>
<a className="hover:text-black transition-colors" href="#how-it-works">Как это работает</a>
<a className="hover:text-black transition-colors" href="#integrations">Интеграции</a>
<a className="hover:text-black transition-colors" href="#pricing">Тарифы</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">Войти</a>
<a className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200" href="#">
                    Начать бесплатно
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-gray-50 to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-gray-600 tracking-wide uppercase">GPT-4 Turbo Integrated</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-[1.1]">
                    Новый стандарт <br/>
<span className="text-gray-400">коммуникации с клиентом.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl font-light leading-relaxed mb-10">
                    Умный AI-виджет для вашего сайта. Квалифицирует лиды, отвечает на вопросы 24/7 и повышает конверсию в заявку на 
                    <span className="text-black font-medium border-b border-gray-300">1.2%</span>.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2">
                        Подключить виджет
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        Демонстрация
                    </button>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-12 group">

<div className="absolute -inset-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>

<div className="relative bg-white rounded-xl border border-gray-200 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1]">

<div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-200"></div>
</div>
<div className="mx-auto w-64 h-5 bg-gray-100 rounded-md"></div>
</div>
<div className="flex h-full">

<div className="w-64 border-r border-gray-100 bg-gray-50/30 p-4 hidden md:flex flex-col gap-4">
<div className="h-8 w-32 bg-gray-100 rounded mb-4"></div>
<div className="flex flex-col gap-2">
<div className="h-8 w-full bg-gray-100 rounded-md"></div>
<div className="h-8 w-full bg-white border border-gray-100 shadow-sm rounded-md flex items-center px-3 gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<div className="h-2 w-16 bg-gray-200 rounded"></div>
</div>
<div className="h-8 w-full bg-gray-100 rounded-md"></div>
</div>
</div>

<div className="flex-1 p-8 relative flex flex-col items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

<div className="absolute bottom-8 right-8 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
<div className="bg-black p-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:bot" data-width="18"></span>
</div>
<div>
<div className="text-white text-sm font-medium">AI Assistant</div>
<div className="text-white/60 text-xs">Online</div>
</div>
</div>
<div className="p-4 h-64 bg-gray-50 flex flex-col gap-3 overflow-hidden relative">
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[85%] text-xs text-gray-600 leading-relaxed">
                                        Здравствуйте! 👋 Как я могу помочь вам увеличить продажи сегодня?
                                    </div>
<div className="self-end bg-black text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-xs leading-relaxed">
                                        Расскажи про интеграцию с CRM.
                                    </div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[85%] text-xs text-gray-600 leading-relaxed">
                                        Мы поддерживаем 50+ CRM систем, включая Bitrix24 и AmoCRM. Данные передаются мгновенно.
                                        <div className="mt-2 h-6 w-24 bg-blue-50 text-blue-600 rounded flex items-center justify-center font-medium cursor-pointer hover:bg-blue-100 transition-colors">
                                            Попробовать
                                        </div>
</div>
</div>
<div className="p-3 border-t border-gray-100 bg-white flex gap-2 items-center">
<div className="flex-1 h-8 bg-gray-50 rounded-full border border-gray-100 px-3 flex items-center text-xs text-gray-400">Напишите сообщение...</div>
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:opacity-80">
<span className="iconify" data-icon="lucide:arrow-up" data-width="14"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-10 border-t border-gray-100">
<p className="text-center text-xs text-gray-400 uppercase tracking-widest font-medium mb-8">Интегрируется с лучшими инструментами</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-xl"><span className="iconify" data-icon="lucide:layers"></span> Notion</div>
<div className="flex items-center gap-2 font-semibold text-xl"><span className="iconify" data-icon="lucide:trello"></span> Hubspot</div>
<div className="flex items-center gap-2 font-semibold text-xl"><span className="iconify" data-icon="lucide:slack"></span> Slack</div>
<div className="flex items-center gap-2 font-semibold text-xl"><span className="iconify" data-icon="lucide:database"></span> Airtable</div>
<div className="flex items-center gap-2 font-semibold text-xl"><span className="iconify" data-icon="lucide:webhook"></span> Zapier</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                    Результат, который <br/>можно измерить.
                </h2>
<p className="text-gray-500 font-light leading-relaxed mb-8">
                    Наш алгоритм не просто общается, он ведет клиента по воронке. Анализируя тысячи диалогов, AI выявляет потребности и мягко подталкивает к целевому действию.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-gray-600">Круглосуточная квалификация лидов без выходных</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-gray-600">Мгновенный ответ на первом этапе коммуникации</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-gray-600">Автоматический сбор контактов в CRM</span>
</li>
</ul>
</div>
<div className="relative bg-white rounded-2xl p-10 border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center">
<span className="text-8xl md:text-9xl font-semibold tracking-tighter text-gray-900 opacity-90">+1.2%</span>
<span className="text-lg text-gray-500 font-medium mt-4">К конверсии сайта в среднем</span>
<div className="absolute top-6 right-6 p-2 bg-green-50 text-green-700 rounded-lg text-xs font-semibold flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="14"></span>
                    Verified
                </div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Технологическое превосходство.</h2>
<p className="text-gray-500 font-light text-lg">
                    Мы объединили передовые LLM модели с инструментами маркетинга, чтобы создать идеального ассистента продаж.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cpu" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold mb-2">LLM последнего поколения</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        В основе лежат модели уровня GPT-4. Виджет понимает контекст, тональность и сложные вопросы, отвечая как опытный менеджер.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold mb-2">Глубокая кастомизация</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Настройте тон общения (Tone of Voice), цвета, приветствия и сценарии продаж через удобный личный кабинет.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
<div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold mb-2">Установка за 2 минуты</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                        Просто скопируйте JS-код и вставьте его в head вашего сайта. Виджет начнет работать мгновенно без участия разработчиков.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Полный цикл автоматизации</h2>
<p className="text-gray-400 font-light max-w-lg">От первого клика до закрытой сделки. Визуализация потока данных внутри системы.</p>
</div>
</div>

<div className="relative w-full border border-white/10 rounded-2xl bg-white/5 p-8 md:p-12">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-center z-10">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<span className="iconify text-white" data-icon="lucide:user" data-width="24"></span>
</div>
<h4 className="font-medium mb-1">Посетитель</h4>
<p className="text-xs text-gray-500">Задает вопрос</p>
</div>

<div className="hidden md:flex justify-center">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 border border-blue-400/30 flex items-center justify-center mb-4 relative shadow-[0_0_30px_rgba(59,130,246,0.3)]">
<span className="animate-spin absolute inset-0 rounded-2xl border-t border-white/30"></span>
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="28"></span>
</div>
<h4 className="font-medium mb-1">AI Анализ</h4>
<p className="text-xs text-gray-400">Консультация &amp; Квалификация</p>
</div>

<div className="hidden md:flex justify-center">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
</div>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-colors duration-300">
<span className="iconify text-white" data-icon="lucide:check-circle" data-width="24"></span>
</div>
<h4 className="font-medium mb-1">Готовый Лид</h4>
<p className="text-xs text-gray-500">Отправка в CRM</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-50"></div>

<div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-6 relative z-10 max-w-md mx-auto lg:mx-0">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
<h3 className="font-semibold text-sm">Настройки виджета</h3>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
</div>

<div className="space-y-6">
<div>
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Цветовая схема</label>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-black cursor-pointer ring-2 ring-offset-2 ring-gray-300"></div>
<div className="w-8 h-8 rounded-full bg-blue-600 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-blue-200 transition-all"></div>
<div className="w-8 h-8 rounded-full bg-purple-600 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-purple-200 transition-all"></div>
<div className="w-8 h-8 rounded-full bg-orange-500 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-orange-200 transition-all"></div>
</div>
</div>
<div>
<label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Tone of Voice</label>
<div className="grid grid-cols-2 gap-2">
<div className="border border-black bg-gray-50 text-black text-xs font-medium py-2 px-3 rounded text-center cursor-pointer">Официальный</div>
<div className="border border-gray-200 text-gray-500 text-xs font-medium py-2 px-3 rounded text-center cursor-pointer hover:border-gray-300">Дружелюбный</div>
</div>
</div>
<div className="flex items-center justify-between py-2 border-t border-gray-100">
<span className="text-sm font-medium">Активный сбор лидов</span>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
                    Ваш бренд,<br/> ваши правила.
                </h2>
<p className="text-gray-500 font-light leading-relaxed mb-8">
                    Мы понимаем важность айдентики. Настройте виджет так, чтобы он выглядел нативной частью вашего сайта. Изменяйте цвета, приветственные сообщения, иконки и даже характер ответов искусственного интеллекта прямо в личном кабинете.
                </p>
<div className="flex items-center gap-4 text-sm font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
</div>
<span className="text-gray-400">Используется 200+ компаниями</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Прозрачные тарифы</h2>
<p className="text-gray-500">Выберите план, который подходит вашему объему трафика.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col">
<div className="mb-4">
<span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Start</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-gray-900">2,900₽</span>
<span className="text-gray-500">/мес</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> До 1,000 диалогов</li>
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> Базовая настройка</li>
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> Email уведомления</li>
</ul>
<button className="w-full py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:border-black hover:bg-gray-50 transition-all">Выбрать план</button>
</div>

<div className="bg-black text-white p-8 rounded-2xl shadow-2xl scale-105 relative flex flex-col z-10">
<div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg uppercase">Популярный</div>
<div className="mb-4">
<span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Business</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-white">5,900₽</span>
<span className="text-gray-400">/мес</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> До 5,000 диалогов</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> Полная кастомизация</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> CRM Интеграции</li>
<li className="flex items-center gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> GPT-4 Turbo</li>
</ul>
<button className="w-full py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-all">Попробовать бесплатно</button>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col">
<div className="mb-4">
<span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Enterprise</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-gray-900">Индив.</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> Безлимитные диалоги</li>
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> Обучение на вашей базе</li>
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> API Доступ</li>
<li className="flex items-center gap-3 text-sm text-gray-600"><span className="iconify text-black" data-icon="lucide:check"></span> Персональный менеджер</li>
</ul>
<button className="w-full py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:border-black hover:bg-gray-50 transition-all">Связаться</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Готовы повысить продажи?</h2>
<p className="text-gray-500 mb-8 max-w-lg mx-auto">Установите виджет сегодня и получите первые квалифицированные лиды уже завтра. 14 дней бесплатно.</p>
<div className="flex justify-center gap-4">
<button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-lg">Создать аккаунт</button>
</div>
</div>
</section>

<footer className="border-t border-gray-100 bg-gray-50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
</div>
<span className="font-medium text-sm tracking-tight">AI CONVERT © 2024</span>
</div>
<div className="flex gap-8 text-sm text-gray-500">
<a className="hover:text-black transition-colors" href="#">Политика</a>
<a className="hover:text-black transition-colors" href="#">Условия</a>
<a className="hover:text-black transition-colors" href="#">Twitter</a>
<a className="hover:text-black transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>


    </>
  );
}
