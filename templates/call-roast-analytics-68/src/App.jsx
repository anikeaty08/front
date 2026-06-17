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
      

<header className="h-14 border-b border-neutral-800 bg-[#050505] fixed top-0 w-full z-50">
<div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded flex items-center justify-center font-bold text-xs shadow-lg shadow-purple-900/20">L</div>
<div className="h-4 w-px bg-neutral-800"></div>
<span className="text-xs font-medium text-white tracking-tight">client_alexey_novikov.mp3</span>
<span className="text-[10px] px-1.5 py-0.5 rounded border border-purple-500/20 text-purple-400 bg-purple-500/10">Analysis Complete</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 rounded border border-neutral-800">
<i className="w-3 h-3 text-emerald-500" data-lucide="file-check"></i>
<span className="text-[10px] text-neutral-400">knowledge_base_v2.pdf</span>
</div>
<div className="h-4 w-px bg-neutral-800"></div>
<button className="text-xs text-neutral-400 hover:text-white transition-colors">Export</button>
<button className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-neutral-200 transition-colors">Share Report</button>
</div>
</div>
</header>

<main className="pt-20 pb-10 px-6 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-20px)]">

<div className="lg:col-span-4 flex flex-col gap-4 h-full overflow-hidden">

<div className="panel rounded-lg p-4 bg-[#0a0a0a]">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
<div>
<p className="text-xs font-medium text-white">04:20</p>
<p className="text-[10px] text-neutral-500">Total: 14:20</p>
</div>
</div>
<div className="flex gap-1">
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-500"><i className="w-3 h-3" data-lucide="skip-back"></i></button>
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-500"><i className="w-3 h-3" data-lucide="skip-forward"></i></button>
</div>
</div>
<div className="h-8 flex items-center gap-0.5 justify-between playing opacity-80">
<div className="bar h-3"></div><div className="bar h-5"></div><div className="bar h-8 bg-purple-500"></div>
<div className="bar h-4"></div><div className="bar h-2"></div><div className="bar h-6"></div>
<div className="bar h-8 bg-purple-500"></div><div className="bar h-10 bg-purple-500"></div><div className="bar h-4"></div>
<div className="bar h-2"></div><div className="bar h-5"></div><div className="bar h-7"></div>
<div className="bar h-3"></div><div className="bar h-2"></div><div className="bar h-6"></div>
<div className="bar h-4"></div><div className="bar h-8"></div><div className="bar h-5"></div>
<div className="bar h-2"></div><div className="bar h-4"></div><div className="bar h-6"></div>
<div className="bar h-3"></div><div className="bar h-2"></div><div className="bar h-4"></div>
</div>
</div>

<div className="panel rounded-lg flex-grow flex flex-col overflow-hidden">
<div className="p-3 border-b border-neutral-800 flex justify-between items-center bg-[#0f0f0f]">
<h3 className="text-xs font-medium text-neutral-300">Live Transcript</h3>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
<span className="text-[10px] text-neutral-500">Analyzing</span>
</div>
</div>
<div className="overflow-y-auto p-4 space-y-6 custom-scroll flex-grow">
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Клиент</span>
<span className="text-[10px] text-neutral-600 font-mono">04:10</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Хорошо, а с 1С:Битрикс интеграция есть? У нас там вся база крутится.
                        </p>
</div>
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Продавец</span>
<span className="text-[10px] text-neutral-600 font-mono">04:12</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Да, конечно. Есть готовый модуль, ставится буквально за 5 минут. Данные синхронизируются в реальном времени.
                        </p>
</div>
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Продавец</span>
<span className="text-[10px] text-neutral-600 font-mono">04:15</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Кстати, у нас есть уникальная система защиты данных, аналогов нет.
                        </p>
</div>

<div className="pl-3 border-l-2 border-yellow-600 bg-yellow-900/10 -mx-4 px-4 py-3">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-yellow-500">Клиент</span>
<span className="text-[10px] text-yellow-600/60 font-mono">04:20</span>
</div>
<p className="text-xs text-white leading-relaxed">
                            А какой стандарт шифрования используете? Мне нужен именно ГОСТ для тендера.
                        </p>
<div className="mt-2 flex gap-2">
<span className="inline-flex items-center gap-1 text-[9px] text-yellow-500 bg-yellow-950/30 px-1.5 py-0.5 rounded border border-yellow-900/50">
<i className="w-2.5 h-2.5" data-lucide="search"></i> Технический запрос
                            </span>
</div>
</div>
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Продавец</span>
<span className="text-[10px] text-neutral-600 font-mono">04:25</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Эм, ну у нас стандартное шифрование, очень надежное. Никто еще не жаловался.
                        </p>
</div>
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Клиент</span>
<span className="text-[10px] text-neutral-600 font-mono">04:28</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Это критично. Без ГОСТа безопасники не пропустят. А что по SLA? Как быстро отвечаете?
                        </p>
</div>
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Продавец</span>
<span className="text-[10px] text-neutral-600 font-mono">04:35</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Техподдержка 24/7. В Enterprise тарифе выделяем персонального менеджера, реакция до 15 минут.
                        </p>
</div>
<div className="pl-3 border-l-2 border-transparent hover:border-neutral-700 transition-colors">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-semibold text-neutral-400">Клиент</span>
<span className="text-[10px] text-neutral-600 font-mono">04:40</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Звучит неплохо. Давайте вернемся к ценам. Вы присылали КП, там была скидка за годовую оплату?
                        </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-5 overflow-y-auto custom-scroll pr-1">

<div className="grid grid-cols-3 gap-4">

<div className="panel p-4 rounded-lg relative overflow-hidden group bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<i className="w-12 h-12 text-yellow-500" data-lucide="crown"></i>
</div>
<div className="flex items-center gap-2 mb-1">
<p className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">Уровень Легендарности</p>
</div>
<div className="flex items-baseline gap-2 mt-2">
<span className="text-3xl font-semibold text-gradient-gold">Pro</span>
<span className="text-xs text-neutral-500">Топ 15%</span>
</div>
<div className="mt-3 flex gap-1">
<div className="h-1 flex-1 bg-yellow-600 rounded-full"></div>
<div className="h-1 flex-1 bg-yellow-600 rounded-full"></div>
<div className="h-1 flex-1 bg-yellow-600 rounded-full"></div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
</div>
</div>

<div className="panel p-4 rounded-lg col-span-2 flex flex-col justify-center relative">
<div className="flex items-start gap-3">
<div className="mt-0.5 p-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded text-indigo-400">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium mb-1">Резюме AI</p>
<p className="text-xs text-neutral-300 leading-relaxed">
                                Продавец демонстрирует высокую эмпатию, но <span className="text-white border-b border-yellow-500/50">плавает в технической части</span>. Клиент готов к сделке, если получит подтверждение соответствия ГОСТ. Требуется вмешательство эксперта.
                            </p>
</div>
</div>
</div>
</div>

<div className="panel rounded-lg overflow-hidden border-indigo-500/30">
<div className="bg-indigo-950/10 border-b border-indigo-500/20 p-3 flex justify-between items-center">
<h2 className="text-xs font-semibold text-indigo-300 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="brain-circuit"></i>
                        Экспертная База Знаний
                    </h2>
<span className="text-[10px] text-indigo-400/70 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                        Найдено в Technical_Spec_v4.pdf
                    </span>
</div>
<div className="grid grid-cols-2 divide-x divide-neutral-800">

<div className="p-4 bg-neutral-900/30">
<div className="mb-2 flex items-center gap-2">
<i className="w-3 h-3 text-neutral-500" data-lucide="file-text"></i>
<span className="text-[10px] font-medium text-neutral-400 uppercase">Факт из документации</span>
</div>
<p className="text-xs text-white leading-relaxed font-medium">
                            "Платформа поддерживает шифрование по ГОСТ Р 34.10-2012 через интеграцию с КриптоПро CSP 5.0."
                        </p>
<div className="mt-2 text-[10px] text-neutral-500 font-mono">Стр. 14, Параграф 3.2</div>
</div>

<div className="p-4 bg-indigo-900/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 blur-xl rounded-full pointer-events-none"></div>
<div className="mb-2 flex items-center gap-2">
<i className="w-3 h-3 text-indigo-400" data-lucide="lightbulb"></i>
<span className="text-[10px] font-medium text-indigo-400 uppercase">Рекомендация Продавцу</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed">
                            Вместо "стандартного шифрования" скажи: <span className="text-indigo-200">"Да, мы полностью поддерживаем ГОСТ Р 34.10-2012 через КриптоПро"</span>. Это закроет возражение клиента о тендере.
                        </p>
</div>
</div>
</div>

<div>
<h2 className="text-xs font-medium text-neutral-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                    Зоны Роста
                </h2>
<div className="grid grid-cols-2 gap-4">

<div className="panel p-4 rounded-lg border-l-2 border-l-rose-500 hover:bg-neutral-900 transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xs font-semibold text-rose-200">Неуверенность в продукте</h3>
<span className="text-[9px] bg-rose-500/10 text-rose-500 px-1.5 py-0.5 rounded border border-rose-500/20">-15 XP</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">
                            Использованы слова-паразиты "эм", "ну", "наверное" при ответе на технический вопрос. Снижает статус эксперта.
                        </p>
</div>

<div className="panel p-4 rounded-lg border-l-2 border-l-orange-500 hover:bg-neutral-900 transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xs font-semibold text-orange-200">Потеря инициативы</h3>
<span className="text-[9px] bg-orange-500/10 text-orange-500 px-1.5 py-0.5 rounded border border-orange-500/20">-10 XP</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">
                            После ответа на вопрос возникла пауза 4 секунды. Клиент перехватил инициативу следующим вопросом.
                        </p>
</div>
</div>
</div>

<div>
<h2 className="text-xs font-medium text-neutral-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                    Данные CRM
                </h2>
<div className="panel rounded-lg divide-y divide-neutral-800">
<div className="grid grid-cols-4 divide-x divide-neutral-800">
<div className="p-3">
<p className="text-[9px] text-neutral-500 uppercase mb-1">Бюджет</p>
<p className="text-xs font-medium text-white">500 000 ₽</p>
</div>
<div className="p-3">
<p className="text-[9px] text-neutral-500 uppercase mb-1">Вероятность</p>
<p className="text-xs font-medium text-emerald-400">75%</p>
</div>
<div className="p-3">
<p className="text-[9px] text-neutral-500 uppercase mb-1">ЛПР</p>
<p className="text-xs font-medium text-neutral-300">CTO</p>
</div>
<div className="p-3">
<p className="text-[9px] text-neutral-500 uppercase mb-1">Этап</p>
<p className="text-xs font-medium text-neutral-300">Квалификация</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
