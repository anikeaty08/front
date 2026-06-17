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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("sys-active");
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".sys-reveal").forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid"></div>

<header className="relative z-40 h-16 border-b border-zinc-800 bg-[#050505] flex items-stretch sticky top-0">
<div className="md:w-64 flex bg-[#050505] w-full border-zinc-800 border-r px-6 items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-orange-600 rounded-none"></div>
<span className="text-white font-medium tracking-tight uppercase">NexAI</span>
</div>
<div className="text-[10px] font-mono text-zinc-600">v2.0</div>
</div>
<nav className="hidden md:flex flex-1 items-stretch">
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#features">
<span className="text-orange-600 mr-2">01.</span> Функции
            </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#templates">
<span className="text-zinc-600 mr-2">02.</span> Шаблоны
            </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#integrations">
<span className="text-zinc-600 mr-2">03.</span> Матрица
            </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#pricing">
<span className="text-zinc-600 mr-2">04.</span> Доступ
            </a>
</nav>
<div className="flex items-stretch">
<div className="flex items-center border-l border-zinc-800 bg-[#050505]">
<button className="px-6 h-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors text-xs font-mono uppercase tracking-widest">
                    Вход
                </button>
</div>
<button className="px-8 border-l border-zinc-800 text-black bg-white hover:bg-orange-600 hover:text-white transition-colors h-full flex items-center justify-center text-xs font-mono uppercase tracking-widest font-bold">
                Создать Агента
            </button>
</div>
</header>
<main className="relative z-10 flex-1 flex flex-col md:flex-row">


<div className="flex-1 flex flex-col min-w-0">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-b border-zinc-800">

<div className="lg:col-span-7 md:p-16 flex flex-col lg:border-r overflow-hidden bg-[#050505] border-zinc-800 pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-zinc-700"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-zinc-700"></div>
<div className="font-mono text-xs text-orange-600 mb-8 uppercase tracking-widest sys-reveal">
                        // Персональный Блок Интеллекта
                    </div>
<div className="space-y-8 relative z-10">
<h1 className="uppercase leading-none md:text-8xl text-5xl font-medium text-white tracking-tight sys-reveal sys-delay-100">
                            Внедряйте <br/>
<span className="text-zinc-600">Автономию</span>
</h1>
<p className="max-w-md text-sm text-zinc-500 font-mono leading-relaxed border-l-2 border-orange-600 pl-4 sys-reveal sys-delay-200">
                            Ваша личная инфраструктура ИИ. Автономные агенты, оптимизированные для выполнения задач, сохранения памяти и безопасных операций.
                        </p>
</div>
<div className="pt-12 flex gap-4 sys-reveal sys-delay-300">
<button className="group bg-zinc-100 hover:bg-orange-600 text-black hover:text-white text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 border border-transparent hover:border-orange-600 rounded-none font-semibold">
                            Запустить
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="group bg-transparent text-zinc-400 hover:text-white text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 border border-zinc-800 hover:border-white rounded-none">
                            Документация
                        </button>
</div>
</div><div className="lg:col-span-5 relative bg-zinc-900 overflow-hidden group border-b lg:border-b-0 border-zinc-800">
<div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-black/80 backdrop-blur-sm border border-zinc-700 p-2 text-[10px] font-mono text-white">
                                ВИД_АГЕНТА [LIVE]
                            </div>
</div>
<div className="self-end bg-[#050505] border border-zinc-700 p-4 w-64 shadow-2xl sys-reveal sys-delay-300">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
<span className="text-[10px] text-white uppercase tracking-widest">Банк Памяти</span>
<div className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>ОКНО_КОНТЕКСТА</span>
<span className="text-white">128K</span>
</div>
<div className="w-full bg-zinc-800 h-0.5">
<div className="w-[64%] h-full bg-orange-600"></div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#080808]">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-zinc-700 rounded-full opacity-20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-dashed border-orange-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-orange-600 opacity-50">
<iconify-icon icon="solar:cpu-bold" width="48"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border-b border-zinc-800 bg-[#050505]" id="dashboard">
<div className="flex flex-col md:flex-row md:items-end bg-gradient-to-r from-white/5 via-transparent to-transparent border-zinc-800 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="text-[10px] font-mono text-orange-600 mb-2 uppercase tracking-widest">
                            // Интерфейс
                        </div>
<h2 className="text-3xl font-medium text-white uppercase tracking-tight leading-none">
                            Консоль <span className="text-zinc-600">Управления</span>
</h2>
</div>
<div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
<span className="w-2 h-2 bg-green-500 animate-pulse"></span>
<span className="">Соединение Установлено</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">

<div className="lg:col-span-3 border-r border-zinc-800 bg-zinc-900/5 p-0 flex flex-col">
<div className="bg-[#080808] h-10 border-zinc-800 border-b pr-4 pl-4 pt-1.5">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Активные_Узлы</span>
</div>
<div className="flex-1 overflow-y-auto">

<div className="group flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-900 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-orange-600"></div>
<span className="text-xs font-mono text-white group-hover:text-orange-500 transition-colors">ГЛАВНЫЙ_КОНТРОЛЬ</span>
</div>
<span className="text-[9px] text-green-500 font-mono">[АКТ]</span>
</div>

<div className="group flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-900 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-orange-600 transition-colors"></div>
<span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">РЫНОК_ИССЛЕД</span>
</div>
<span className="text-[9px] text-zinc-600 font-mono">[ОЖИД]</span>
</div>

<div className="group flex items-center justify-between p-4 border-b border-zinc-800 hover:bg-zinc-900 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-orange-600 transition-colors"></div>
<span className="text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">ПОДДЕРЖКА_БОТ</span>
</div>
<span className="text-[9px] text-zinc-600 font-mono">[ОЖИД]</span>
</div>
</div>
<div className="text-[10px] flex text-zinc-500 font-mono border-zinc-800 border-t pt-4 pr-4 pb-4 pl-4 justify-between">
<span>НАГРУЗКА_CPU</span>
<span className="text-white">12%</span>
</div>
</div>

<div className="lg:col-span-9 bg-[#050505] relative flex flex-col">
<div className="absolute inset-0 pointer-events-none scanline opacity-20"></div>

<div className="h-10 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900/10">
<span className="text-[10px] font-mono text-zinc-500 uppercase">id_сессии: 8842-XC</span>
<div className="flex gap-2">
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer" icon="solar:minimize-square-linear" width="14"></iconify-icon>
<iconify-icon className="text-zinc-600 hover:text-white cursor-pointer" icon="solar:close-square-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 font-mono text-xs overflow-y-auto space-y-6">

<div className="flex gap-4 group">
<div className="text-orange-600 w-28 shrink-0 uppercase tracking-wider text-[10px] py-1 border-r border-zinc-800 pr-2 text-right">
            Пользователь_01</div>
<div className="text-zinc-300">
<span className="text-zinc-600 mr-2">&gt;</span>
            Проанализируй загруженный PDF на предмет прогнозов выручки в сравнении с целями 3-го квартала.
        </div>
</div>

<div className="flex gap-4 group">
<div className="text-green-500 w-28 shrink-0 uppercase tracking-wider text-[10px] py-1 border-r border-zinc-800 pr-2 text-right">
    Система</div>
<div className="text-zinc-400 space-y-2 max-w-2xl">
<div className=""><span className="text-zinc-600 mr-2">&gt;</span> Обработка
                <span className="text-white">Q4_Financials.pdf</span>... Готово.</div>
<div className="border border-zinc-800 bg-zinc-900/20 p-4 mt-2 grid grid-cols-2 gap-4 w-full md:w-2/3">
<div className="">
<div className="text-[9px] uppercase text-zinc-600 mb-1">Прогноз</div>
<div className="text-lg text-white font-medium">$1.2M</div>
</div>
<div className="">
<div className="text-[9px] uppercase text-zinc-600 mb-1">Цель</div>
<div className="text-lg text-zinc-400 font-medium">$950k</div>
</div>
<div className="col-span-2 border-t border-zinc-800 pt-2 text-[10px]">
                    Анализ: Рост превышает цель на <span className="text-green-500">+26%</span>. Драйвер роста —
                    корпоративные подписки.
                </div>
</div>
</div>
</div>
</div>

<div className="bg-[#080808] border-zinc-800 border-t pr-4 h-12 pt-2.5 pl-4">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<span className="text-orange-600 font-mono text-xs">&gt;</span>
<input className="w-full bg-transparent border-none text-white font-mono text-xs focus:ring-0 placeholder-zinc-700 uppercase tracking-widest" placeholder="ВВЕДИТЕ_КОМАНДУ..." type="text"/>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:upload-square-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-zinc-800 bg-[#050505]" id="features">

<div className="group border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal">
<div className="flex items-start justify-between">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">РИС. 01</span>
<iconify-icon className="text-zinc-400 group-hover:text-orange-600 transition-colors" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Мультимодельность</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
            Бесшовное переключение между GPT-4, Claude 3 и локальными моделями (Llama 3). Оптимизация под задачи.
        </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-100">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">РИС. 02</span>
<iconify-icon className="text-zinc-400 group-hover:text-orange-600 transition-colors" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Долгосрочная Память</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                            Сохранение контекста между сессиями. Интеграция с векторными базами данных для работы с документами и кодом.
                        </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group border-b lg:border-r-0 lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-200">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">РИС. 03</span>
<iconify-icon className="text-zinc-400 group-hover:text-orange-600 transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Безопасность</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                            Инфраструктура по стандарту SOC2. Сквозное шифрование данных. Изолированные среды выполнения.
                        </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">РИС. 04</span>
<iconify-icon className="text-zinc-400 group-hover:text-orange-600 transition-colors" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Выполнение Кода</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                             Агенты могут писать и выполнять код на Python для анализа данных, построения графиков или работы с файлами.
                        </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-100">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">РИС. 05</span>
<iconify-icon className="text-zinc-400 group-hover:text-orange-600 transition-colors" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Веб-Серфинг</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                            Возможность поиска в реальном времени, сканирования веб-сайтов и агрегации новостных источников.
                        </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group border-b lg:border-r-0 lg:border-b-0 border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-200">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">РИС. 06</span>
<iconify-icon className="text-zinc-400 group-hover:text-orange-600 transition-colors" icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">API First</h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                             Интеграция агентов в ваши приложения с помощью трех строк кода. Полная поддержка REST API и WebSocket.
                        </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>
</section>

<section className="bg-[#050505] border-b border-zinc-800 py-16 px-4 md:px-8" id="templates">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<div className="mb-12 text-center max-w-2xl">
<div className="text-[10px] font-mono text-orange-600 mb-4 uppercase tracking-widest">// Сценарии_Использования</div>
<h2 className="text-4xl font-medium text-white uppercase tracking-tight leading-none mb-4">
                            Шаблоны <span className="text-zinc-600">Агентов</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed">
                            Предустановленные шаблоны для бизнес-логики и управления личными задачами.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-l border-zinc-800">

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Бизнес</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Аналитик Рынка</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Отслеживает конкурентов, резюмирует отчеты и мониторит тренды акций.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Поиск</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-100">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Бизнес</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">HR Рекрутер</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Парсит резюме из PDF, сопоставляет навыки с вакансиями, пишет email.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Файлы</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-200">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Бизнес</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Sales Менеджер</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Автоматизирует холодные письма, скоринг лидов и CRM записи.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Почта</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-300">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Бизнес</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Юр. Ассистент</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Проверка контрактов, поиск прецедентов и compliance-контроль.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: База</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-orange-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Лайфстайл</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Тревел Консьерж</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Находит рейсы, создает маршруты и проверяет визовые требования.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Web</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-100">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-orange-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Лайфстайл</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Учебный Бот</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Создает тесты из заметок, объясняет сложные темы и планирует учебу.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Загрузки</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-200">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-orange-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Лайфстайл</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Фитнес Тренер</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Составляет план питания, трекает прогресс и дает советы по сну.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Health</span>
</div>

<div className="group border-r border-b border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors sys-reveal sys-delay-300">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-1.5 bg-orange-500"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase">Лайфстайл</span>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">Фин. Менеджер</h3>
<p className="text-xs text-zinc-500 font-mono mb-6">Учет личных расходов, анализ бюджета и новости инвестиций.</p>
<span className="text-[9px] border border-zinc-800 text-zinc-500 px-2 py-1 font-mono uppercase">Доступ: Банк</span>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-800 bg-[#080808] p-8 md:p-12" id="integrations">
<div className="flex items-end justify-between mb-8">
<div>
<div className="text-[10px] font-mono text-orange-600 mb-2 uppercase tracking-widest">// Матрица</div>
<h2 className="text-3xl font-medium text-white uppercase tracking-tight leading-none">
                            Системные <span className="text-zinc-600">Интеграции</span>
</h2>
</div>
<button className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white border-b border-zinc-800 hover:border-orange-600 pb-1 transition-colors">
                        Все Интеграции
                    </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-zinc-800 border border-zinc-800">

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="ph:telegram-logo-light" width="24"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">Telegram</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="ph:discord-logo-light" width="24"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">Discord</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="ph:whatsapp-logo-light" width="24"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">WhatsApp</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="ph:slack-logo-light" width="24"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">Slack</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="simple-icons:lark" width="20"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">Feishu</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="simple-icons:dingtalk" width="20"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">DingTalk</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="ri:wechat-2-line" width="24"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">Mochat</span>
</div>

<div className="bg-[#050505] p-6 hover:bg-zinc-900 transition-colors flex flex-col items-center justify-center gap-3 group aspect-square">
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
<span className="text-[9px] font-mono uppercase text-zinc-600 group-hover:text-zinc-400">Запрос</span>
</div>
</div>
</section>

<section className="border-b border-zinc-800 bg-[#050505] py-16">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex items-center gap-4 mb-12">
<div className="w-12 h-px bg-zinc-800"></div>
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">ЖУРНАЛ_ОТЗЫВОВ</div>
<div className="flex-1 h-px bg-zinc-800"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-900/5 border border-zinc-800 p-8 sys-reveal">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-xs">AK</div>
<div className="">
<div className="text-xs text-white font-medium uppercase tracking-wide">Алексей К.</div>
<div className="text-[10px] text-zinc-600 font-mono">CTO, TechFlow</div>
</div>
</div>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-400 font-mono leading-relaxed">
                                "Интеграция NexAI сократила время обработки клиентских запросов на 40%. Возможность локального запуска моделей — это game changer для безопасности данных."
                            </p>
</div>

<div className="bg-zinc-900/5 border border-zinc-800 p-8 sys-reveal sys-delay-100">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-xs">MK</div>
<div>
<div className="text-xs text-white font-medium uppercase tracking-wide">Мария К.</div>
<div className="text-[10px] text-zinc-600 font-mono">Founder, StartupX</div>
</div>
</div>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-400 font-mono leading-relaxed">
                                "Шаблон HR-рекрутера невероятен. Он автоматически фильтрует сотни резюме и назначает встречи. Это как нанять целый отдел за $29/мес."
                            </p>
</div>

<div className="bg-zinc-900/5 border border-zinc-800 p-8 sys-reveal sys-delay-200">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 flex items-center justify-center text-zinc-500 font-mono text-xs">DM</div>
<div>
<div className="text-xs text-white font-medium uppercase tracking-wide">Дмитрий М.</div>
<div className="text-[10px] text-zinc-600 font-mono">DevOps Lead</div>
</div>
</div>
<iconify-icon className="text-blue-500" icon="solar:verified-check-bold" width="16"></iconify-icon>
</div>
<p className="text-xs text-zinc-400 font-mono leading-relaxed">
                                "API спроектирован идеально. Никакой лишней сложности, вебсокеты работают стабильно. Мы развернули кастомного агента поддержки за два дня."
                            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-b border-zinc-800 py-16 px-4" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-[10px] font-mono text-orange-600 mb-4 uppercase tracking-widest">// Контроль_Доступа</div>
<h2 className="text-4xl md:text-5xl font-medium text-white uppercase tracking-tight leading-none mb-6">
                            Выберите <span className="text-zinc-600">Уровень</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">

<div className="group relative bg-zinc-900/10 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/30 p-8 flex flex-col transition-all duration-500 rounded-sm">
<div className="px-3 py-1 border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-6 w-fit">
                                Уровень_01
                            </div>
<h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-2">Хобби</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-mono text-white">$9</span>
<span className="text-xs text-zinc-600 font-mono">/мес</span>
</div>
<ul className="space-y-4 w-full border-t border-zinc-800 pt-8 mb-8 flex-1">
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                                    1 Персональный Агент
                                </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                                    Общая Инфраструктура
                                </li>
</ul>
<button className="w-full py-3 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white text-[10px] text-zinc-400 uppercase tracking-widest font-mono transition-all">
                                Инициализировать
                            </button>
</div>

<div className="group relative bg-zinc-900/30 border border-orange-600/30 p-8 flex flex-col transition-all duration-500 rounded-sm lg:-mt-4 lg:-mb-4 shadow-[0_0_30px_rgba(234,88,12,0.1)]">
<div className="absolute top-0 right-0 p-2 bg-orange-600 text-white text-[9px] font-mono uppercase tracking-wider">
                                 Популярное
                             </div>
<div className="px-3 py-1 border border-orange-600/30 bg-orange-600/10 text-[10px] font-mono text-orange-500 uppercase tracking-wider mb-6 w-fit">
                                Уровень_02
                            </div>
<h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-2">Про</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-mono text-white">$29</span>
<span className="text-xs text-zinc-600 font-mono">/мес</span>
</div>
<ul className="space-y-4 w-full border-t border-zinc-800 pt-8 mb-8 flex-1">
<li className="flex items-center gap-3 text-[10px] text-white font-mono uppercase">
<iconify-icon className="text-orange-600" icon="solar:check-read-bold"></iconify-icon>
                                    3 Одновременных Агента
                                </li>
<li className="flex items-center gap-3 text-[10px] text-white font-mono uppercase">
<iconify-icon className="text-orange-600" icon="solar:check-read-bold"></iconify-icon>
                                    Быстрый Инференс (GPU)
                                </li>
</ul>
<button className="w-full py-4 bg-orange-600 text-white hover:bg-orange-500 text-[10px] uppercase tracking-widest font-mono font-semibold transition-all">
                                Выбрать Уровень
                            </button>
</div>

<div className="group relative bg-zinc-900/10 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/30 p-8 flex flex-col transition-all duration-500 rounded-sm">
<div className="px-3 py-1 border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-6 w-fit">
                                Уровень_03
                            </div>
<h3 className="text-2xl font-medium text-white uppercase tracking-tight mb-2">Команда</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-mono text-white">$99</span>
<span className="text-xs text-zinc-600 font-mono">/мес</span>
</div>
<ul className="space-y-4 w-full border-t border-zinc-800 pt-8 mb-8 flex-1">
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                                    Безлимитные Агенты
                                </li>
<li className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono uppercase">
<iconify-icon className="text-zinc-600" icon="solar:check-read-linear"></iconify-icon>
                                    Выделенная Инфраструктура
                                </li>
</ul>
<button className="w-full py-3 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black hover:border-white text-[10px] text-zinc-400 uppercase tracking-widest font-mono transition-all">
                                Связаться
                            </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 bg-[#050505] text-zinc-500 font-mono relative z-20">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px] relative z-10">

<div className="lg:col-span-3 border-r border-zinc-800 p-8 flex flex-col justify-between bg-zinc-900/5">
<div>
<div className="flex items-center gap-3 mb-8">
<div className="w-6 h-6 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:command-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-white tracking-widest uppercase">NexAI_Inc.</span>
</div>
<div className="border border-zinc-800 bg-[#050505] p-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex items-center gap-2 mb-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] text-white font-medium tracking-wide uppercase">Все Системы: Норма</span>
</div>
</div>
</div>
<div className="text-[10px] pt-8">
                             © 2023 NexAI Inc. Все права защищены.
                         </div>
</div>

<div className="lg:col-span-6 border-r border-zinc-800 grid grid-cols-1 md:grid-cols-3">
<div className="border-r border-zinc-800 p-8 flex flex-col hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-orange-600 uppercase tracking-widest mb-6 font-semibold">// Продукт</div>
<ul className="space-y-3 text-[10px] font-medium tracking-wide uppercase">
<li><a className="hover:text-white transition-colors" href="#">Обновления</a></li>
<li><a className="hover:text-white transition-colors" href="#">Документация</a></li>
</ul>
</div>
<div className="border-r border-zinc-800 p-8 flex flex-col hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">// Компания</div>
<ul className="space-y-3 text-[10px] font-medium tracking-wide uppercase">
<li><a className="hover:text-white transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-white transition-colors" href="#">Карьера</a></li>
</ul>
</div>
<div className="p-8 flex flex-col hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">// Соцсети</div>
<ul className="space-y-3 text-[10px] font-medium tracking-wide uppercase">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:brand-x-linear"></iconify-icon> Twitter/X</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:brand-github-linear"></iconify-icon> Github</a></li>
</ul>
</div>
</div>

<div className="lg:col-span-3 p-8 flex flex-col justify-between bg-zinc-900/5">
<div>
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">// Рассылка</div>
<div className="flex gap-2">
<input className="bg-zinc-900/50 border border-zinc-800 text-[10px] px-2 py-1.5 w-full focus:outline-none focus:border-orange-600 text-white placeholder-zinc-700 font-mono uppercase" placeholder="EMAIL_АДРЕС" type="text"/>
<button className="bg-zinc-800 hover:bg-orange-600 text-white px-2 py-1.5 transition-colors border border-zinc-700 hover:border-orange-600">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
