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



      document.addEventListener("DOMContentLoaded", function () {
        const icons = {
          "icon-play": "play",
          "icon-sparkles": "sparkles",
          "icon-activity": "activity",
          "icon-target": "target",
          "icon-alert-triangle": "alert-triangle",
          "icon-person-standing": "person-standing",
          "icon-brain-circuit": "brain-circuit",
          "icon-bell-ring": "bell-ring",
          "icon-shopping-bag": "factory",
          "icon-arrow-right": "arrow-right",
          "icon-camera": "camera",
          "icon-send": "send"
        };
        for (const id in icons) {
          const el = document.getElementById(id);
          if (el && window.lucide && lucide[icons[id]]) {
            lucide[icons[id]].create(el, { strokeWidth: 1.5 });
          }
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
      

<div className="flex-1 flex flex-col">

<header className="border-b border-white/5 backdrop-blur bg-[#050815]/80 sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center">
<span className="text-xs font-semibold tracking-[0.22em] text-indigo-300">DV</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-100">DeepVision</span>
<span className="text-[11px] text-slate-400 -mt-0.5">Industrial Safety AI</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-[13px] text-slate-300">
<a className="hover:text-slate-100 transition-colors" href="#product">Возможности</a>
<a className="hover:text-slate-100 transition-colors" href="#cases">Отрасли</a>
<a className="hover:text-slate-100 transition-colors" href="#how">Таймлайн</a>
<a className="hover:text-slate-100 transition-colors" href="#pricing">Тарифы</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-[13px] text-slate-300 hover:text-slate-50 px-3 py-1.5 rounded-md border border-white/5 hover:border-slate-400/60 bg-white/0 hover:bg-white/5 transition-colors">
                Вход
              </button>
<button className="inline-flex text-[13px] font-medium tracking-tight px-3.5 py-1.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white shadow-sm shadow-indigo-500/40 border border-indigo-400/80 transition-colors">
                Запросить демо
              </button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden border-b border-white/5">

<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -left-10 -top-32 h-72 w-72 bg-indigo-500/20 blur-3xl rounded-full"></div>
<div className="absolute right-0 top-32 h-64 w-64 bg-cyan-500/10 blur-3xl rounded-full"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f293700,_#020617)]"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 mb-6">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[11px] font-medium tracking-[0.16em] uppercase text-emerald-200">
                    В реальном времени • Промышленная безопасность
                  </span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
                  ИИ‑видеоаналитика для<br className="hidden sm:block"/>
                  промышленной безопасности и стройплощадок
                </h1>
<p className="text-sm sm:text-base text-slate-300 max-w-xl mb-4">
                  DeepVision — облачная платформа, использующая компьютерное зрение и искусственный интеллект
                  для автоматического мониторинга соблюдения техники безопасности на промышленных объектах
                  и стройплощадках в режиме реального времени.
                </p>
<p className="text-xs sm:text-[13px] text-slate-300 max-w-xl mb-6">
                  Подходит для: нефтегазовой промышленности, химических заводов, металлургии, горнодобывающих
                  предприятий, строительных бизнесов, девелоперских холдингов, логистических комплексов,
                  сортировочных центров, энергетики (АЭС, ГЭС, ТЭЦ), машиностроения и др.
                </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-7">
<button className="inline-flex items-center justify-center gap-2 text-[13px] font-medium tracking-tight px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white shadow-sm shadow-indigo-500/40 border border-indigo-400/80 transition-colors">
<span className="w-4 h-4" id="icon-play"></span>
                    Посмотреть демо 3 минуты
                  </button>
<button className="inline-flex items-center justify-center gap-2 text-[13px] px-4 py-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-slate-300/60 text-slate-100 transition-colors">
<span className="w-4 h-4" id="icon-sparkles"></span>
                    Оценить экономический эффект
                  </button>
</div>

<div className="flex flex-col sm:flex-row gap-5 sm:items-center text-[11px] text-slate-400">
<div className="flex -space-x-2">
<img className="h-7 w-7 rounded-full border border-slate-900/80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="h-7 w-7 rounded-full border border-slate-900/80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="h-7 w-7 rounded-full border border-slate-900/80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-wrap gap-4 sm:gap-6">
<span>Снижение инцидентов до 40%</span>
<span className="hidden sm:inline-block h-4 w-px bg-white/10"></span>
<span>До 1000+ видеопотоков в одной системе</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950/90 p-4 sm:p-5 shadow-[0_18px_60px_rgba(15,23,42,0.8)]">

<div className="relative rounded-xl overflow-hidden border border-white/5 bg-black/60">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-slate-900/80">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-red-500/80"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
<span className="h-2 w-2 rounded-full bg-emerald-500/80"></span>
</div>
<span className="text-[11px] text-slate-300">Цех №4 / Камера #27 • Онлайн</span>
<span className="text-[10px] text-slate-500">1080p • 25 FPS</span>
</div>
<div className="relative aspect-[16/9] overflow-hidden">
<img className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-[6%] top-[40%] border border-emerald-400/80 rounded-sm">
<div className="px-1.5 py-0.5 bg-emerald-500/80 text-[9px] text-slate-950 font-medium m-0.5 rounded">
                            Каска • СИЗ ок
                          </div>
</div>
<div className="absolute right-[18%] top-[30%] border border-amber-400/80 rounded-sm">
<div className="px-1.5 py-0.5 bg-amber-400/80 text-[9px] text-slate-950 font-medium m-0.5 rounded">
                            Нет жилета • риск
                          </div>
</div>
<div className="absolute left-[40%] bottom-[18%] border border-red-500/80 rounded-sm">
<div className="px-1.5 py-0.5 bg-red-500/80 text-[9px] text-slate-50 font-medium m-0.5 rounded">
                            Вход в опасную зону
                          </div>
</div>
</div>

<div className="absolute left-3 bottom-3 flex flex-col gap-1 text-[10px]">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-900/90 border border-white/10 text-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Онлайн контроль ТБ • <span className="text-slate-300 font-medium">20+ типов объектов</span>
</div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-900/80 border border-white/10 text-slate-300">
<span>Прогноз риска за 5–10 сек до инцидента</span>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
<div className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-2.5 py-2">
<div className="flex items-center justify-between mb-1">
<span className="text-slate-400">Нарушения ТБ</span>
<span className="w-3.5 h-3.5 text-emerald-400" id="icon-activity"></span>
</div>
<div className="text-xs font-medium text-slate-50">−37%</div>
<div className="text-[9px] text-slate-400 mt-0.5">за последние 90 дней</div>
</div>
<div className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-2.5 py-2">
<div className="flex items-center justify-between mb-1">
<span className="text-slate-400">Ручной мониторинг</span>
<span className="w-3.5 h-3.5 text-sky-400" id="icon-target"></span>
</div>
<div className="text-xs font-medium text-slate-50">−80% времени</div>
<div className="text-[9px] text-slate-400 mt-0.5">за счёт автоматизации</div>
</div>
<div className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-2.5 py-2">
<div className="flex items-center justify-between mb-1">
<span className="text-slate-400">Штрафы и простои</span>
<span className="w-3.5 h-3.5 text-amber-400" id="icon-alert-triangle"></span>
</div>
<div className="text-xs font-medium text-emerald-300">до −50%</div>
<div className="text-[9px] text-slate-400 mt-0.5">потенциальная экономия</div>
</div>
</div>
</div>

<div className="hidden sm:block absolute -right-3 -bottom-6 w-52 rounded-xl border border-white/10 bg-slate-900/95 p-3 shadow-xl shadow-black/60">
<div className="flex items-center justify-between mb-1.5">
<span className="text-[11px] text-slate-300">Покрытие критических зон</span>
<span className="text-[10px] text-emerald-300">AI‑мониторинг</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-xl font-semibold tracking-tight text-slate-50">98.1%</div>
<div className="text-[10px] text-slate-400 mt-0.5">
                        объектов под контролем
                      </div>
</div>
<div className="flex flex-col gap-1 text-[10px]">
<div className="inline-flex items-center gap-1 text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Открытые площадки
                      </div>
<div className="inline-flex items-center gap-1 text-sky-300">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                        Цеха и участки
                      </div>
<div className="inline-flex items-center gap-1 text-amber-300">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                        Опасные зоны
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050815]" id="product">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Система не только фиксирует нарушения, но и предсказывает риск
                </h2>
<p className="text-sm text-slate-300 max-w-xl">
                  DeepVision анализирует видеопотоки в реальном времени, распознаёт СИЗ, людей, технику и зоны,
                  фиксирует нарушения и предсказывает опасные ситуации за 5–10 секунд до их возникновения,
                  снижая риск несчастных случаев и помогая соблюдать нормативы.
                </p>
</div>
<div className="flex flex-wrap gap-3 text-[11px] text-slate-300">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Облако + Edge
                </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                  Интеграция с ERP / SCADA
                </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  1000+ видеопотоков без переобучения
                </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="group rounded-xl border border-white/5 bg-slate-950/60 hover:bg-slate-900/80 transition-colors p-4 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-indigo-500/15 border border-indigo-500/40 flex items-center justify-center">
<span className="w-3.5 h-3.5 text-indigo-300" id="icon-person-standing"></span>
</div>
<span className="text-sm font-medium text-slate-50">Контроль и предиктивный риск</span>
</div>
<span className="text-[10px] text-slate-400">5–10 сек до инцидента</span>
</div>
<p className="text-[13px] text-slate-300 mb-3">
                  Система не просто фиксирует нарушения, а предсказывает риски, предотвращая большинство опасных ситуаций.
                  DeepVision освобождает сотрудников от рутинного просмотра сотен камер и работает 24/7 без усталости.
                </p>
<div className="mt-auto flex flex-wrap gap-1.5 text-[11px] text-slate-300">
<span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10">Авто‑обнаружение нарушений</span>
<span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10">Прогноз риска ситуаций</span>
</div>
</div>

<div className="group rounded-xl border border-white/5 bg-slate-950/60 hover:bg-slate-900/80 transition-colors p-4 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
<span className="w-3.5 h-3.5 text-emerald-300" id="icon-brain-circuit"></span>
</div>
<span className="text-sm font-medium text-slate-50">Глубокая аналитика по ТБ</span>
</div>
<span className="text-[10px] text-slate-400">20+ типов объектов</span>
</div>
<p className="text-[13px] text-slate-300 mb-3">
                  Гибридная архитектура компьютерного зрения распознаёт каски, жилеты, спецодежду, технику, опасные зоны
                  и другие объекты. Система анализирует их взаимодействие и формирует объективную аналитику
                  для внутренних проверок и отчётности.
                </p>
<div className="mt-auto flex flex-wrap gap-1.5 text-[11px] text-slate-300">
<span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10">Статистика нарушений</span>
<span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10">Отчёты по сменам / сменщикам</span>
</div>
</div>

<div className="group rounded-xl border border-white/5 bg-slate-950/60 hover:bg-slate-900/80 transition-colors p-4 flex flex-col">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center">
<span className="w-3.5 h-3.5 text-amber-300" id="icon-bell-ring"></span>
</div>
<span className="text-sm font-medium text-slate-50">Масштабируемость и интеграции</span>
</div>
<span className="text-[10px] text-slate-400">SaaS‑архитектура</span>
</div>
<p className="text-[13px] text-slate-300 mb-3">
                  SaaS‑платформа интегрируется с ERP, SCADA и внутренними системами без перестройки инфраструктуры,
                  масштабируется под 1000+ видеопотоков. DeepVision берёт всю вычислительную нагрузку на себя —
                  инженеры заходят только в онлайн‑панель с удобной аналитикой.
                </p>
<div className="mt-auto flex flex-wrap gap-1.5 text-[11px] text-slate-300">
<span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10">ERP / SCADA / BI</span>
<span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10">Облачное хранение видео</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050815]" id="cases">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Для тяжёлой промышленности, стройки и энергетики
                </h2>
<p className="text-sm text-slate-300 max-w-xl">
                  DeepVision помогает избежать штрафов, компенсаций, простоев и других затрат, связанных
                  с нарушением требований техники безопасности, устраняя человеческий фактор и повышая
                  прозрачность процессов.
                </p>
</div>
<div className="flex gap-3 text-[12px] text-slate-300">
<button className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 hover:border-slate-300/60 transition-colors">
                  Заводы и фабрики
                </button>
<button className="px-3 py-1.5 rounded-md border border-white/5 bg-transparent hover:bg-white/5 hover:border-slate-300/60 transition-colors">
                  Стройплощадки
                </button>
<button className="px-3 py-1.5 rounded-md border border-white/5 bg-transparent hover:bg-white/5 hover:border-slate-300/60 transition-colors">
                  Складская логистика
                </button>
</div>
</div>
<div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 items-start">

<div className="rounded-2xl border border-white/5 bg-slate-950/70 overflow-hidden">
<div className="grid sm:grid-cols-2 gap-0">
<div className="p-4 sm:p-5 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[11px] text-emerald-200 mb-3">
<span className="w-3.5 h-3.5" id="icon-shopping-bag"></span>
                        Промышленные отрасли
                      </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-50 mb-2">
                        ИИ‑видеоаналитика для ключевых отраслей
                      </h3>
<p className="text-[13px] text-slate-300 mb-3">
                        DeepVision уже адаптирован под особенности промышленных объектов, где требования к технике безопасности
                        особенно высоки.
                      </p>
<ul className="space-y-1.5 text-[12px] text-slate-300">
<li className="flex gap-2">
<span className="mt-[5px] h-1 w-1 rounded-full bg-emerald-400"></span>
<span>Нефтегазовая промышленность, химические заводы, металлургия</span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1 w-1 rounded-full bg-emerald-400"></span>
<span>Горнодобывающие предприятия, строительные бизнесы, девелоперские холдинги</span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1 w-1 rounded-full bg-emerald-400"></span>
<span>Логистические комплексы, сортировочные центры, энергетика (АЭС, ГЭС, ТЭЦ), машиностроение</span>
</li>
</ul>
</div>
<p className="mt-4 text-[11px] text-slate-400">
                      Решение повышает управляемость процессов и упрощает внутренние проверки и внешние аудиты.
                    </p>
</div>
<div className="relative bg-black">
<img className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px]">
<div className="flex flex-col">
<span className="text-slate-200">Снижение человеческого фактора</span>
<span className="text-slate-400">Авто‑мониторинг вместо ручного просмотра</span>
</div>
<div className="flex gap-4 text-right">
<div>
<div className="text-xs font-medium text-emerald-300">−80%</div>
<div className="text-[10px] text-slate-400">времени инспекторов</div>
</div>
<div>
<div className="text-xs font-medium text-emerald-300">24/7</div>
<div className="text-[10px] text-slate-400">непрерывный контроль</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-xl border border-white/5 bg-slate-950/70 p-4">
<div className="text-[11px] text-slate-400 mb-3">Экономический эффект</div>
<ul className="space-y-1.5 text-[12px] text-slate-300">
<li>• Снижение риска штрафов и компенсаций за счёт своевременного обнаружения нарушений.</li>
<li>• Меньше простоев из‑за расследований и остановок производства.</li>
<li>• Объективная аналитика по нарушениям — проще защищаться перед регуляторами.</li>
</ul>
</div>
<div className="rounded-xl border border-white/5 bg-slate-950/70 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] text-slate-400">Облачный подход</span>
<span className="text-[10px] text-slate-500">вычисления на стороне DeepVision</span>
</div>
<p className="text-[12px] text-slate-300 mb-2">
                    DeepVision берёт всю вычислительную нагрузку на себя: заводы и фабрики передают видеопоток
                    на облачную платформу, а инженеры по ТБ работают с удобной online‑панелью без дорогого «железа» на месте.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050815]" id="how">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Таймлайн развития DeepVision
                </h2>
<p className="text-sm text-slate-300 max-w-xl">
                  Поэтапное развитие решения: от концепции до минимальной коммерческой модели, готовой к масштабному внедрению.
                </p>
</div>
</div>
<div className="grid md:grid-cols-5 gap-4">

<div className="relative rounded-xl border border-white/5 bg-slate-950/70 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] text-slate-400">1) Концепт</span>
<span className="text-[11px] text-slate-300">2 кв. 2025</span>
</div>
<p className="text-[12px] text-slate-300">
                  Формирование идеи и требований к системе промышленной видеоаналитики для ТБ.
                </p>
</div>

<div className="relative rounded-xl border border-white/5 bg-slate-950/70 p-4">
<div className="flex items-center justify-between mb-1">
<span className="text-[11px] text-slate-400">2) Проверка теории</span>
<span className="text-[11px] text-slate-300">2 кв. 2025</span>
</div>
<p className="text-[12px] text-slate-300 mb-1">Разработка MVP и тестирование ключевых гипотез.</p>
</div>

<div className="relative rounded-xl border border-white/5 bg-slate-950/70 p-4">
<div className="flex items-center justify-between mb-1">
<span className="text-[11px] text-slate-400">3) Внедрение проекта</span>
<span className="text-[11px] text-slate-300">3 кв. 2025</span>
</div>
<p className="text-[12px] text-slate-300 mb-1">Первые пилоты и внедрение на реальных объектах.</p>
<p className="text-[11px] text-emerald-300">Необходимо ~240 000 ₽</p>
</div>

<div className="relative rounded-xl border border-white/5 bg-slate-950/70 p-4">
<div className="flex items-center justify-between mb-1">
<span className="text-[11px] text-slate-400">4) Доработка решения</span>
<span className="text-[11px] text-slate-300">1 кв. 2026</span>
</div>
<p className="text-[12px] text-slate-300 mb-1">Усиление модулей аналитики, новые сценарии ТБ.</p>
<p className="text-[11px] text-emerald-300">Необходимо ~400 000 ₽</p>
</div>

<div className="relative rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-4">
<div className="flex items-center justify-between mb-1">
<span className="text-[11px] text-emerald-300">5) Минимальная коммерческая модель</span>
<span className="text-[11px] text-emerald-200">1–2 кв. 2026</span>
</div>
<p className="text-[12px] text-slate-200 mb-1">
                  Запуск минимальной коммерческой версии для заводов, стройки и логистики.
                </p>
<p className="text-[11px] text-emerald-200">Необходимо ~400 000 ₽</p>
</div>
</div>
</div>
</section>

<section className="bg-[#050815]" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="grid lg:grid-cols-[1.1fr,1fr] gap-10 items-start">

<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mb-2">
                  Тарифы для заводов и промышленных площадок
                </h2>
<p className="text-sm text-slate-300 mb-5 max-w-xl">
                  Помесячная оплата за объект / площадку. Все вычисления происходят на стороне DeepVision —
                  вам не нужно докупать серверы и GPU. Ниже — три версии тарифа и для кого каждая подойдёт.
                </p>
<div className="grid md:grid-cols-3 gap-4 mb-5">

<div className="rounded-xl border border-white/5 bg-slate-950/70 p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-50">Start</span>
<span className="text-[10px] text-slate-400">до 32 камер</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-xl font-semibold tracking-tight text-slate-50">от 60 000 ₽</span>
<span className="text-[11px] text-slate-400">/ месяц</span>
</div>
<ul className="space-y-1.5 text-[12px] text-slate-300 mb-3">
<li>• Базовый контроль СИЗ (каски, жилеты, спецодежда).</li>
<li>• Фиксация основных нарушений ТБ (вход в опасные зоны, нахождение без СИЗ).</li>
<li>• Онлайн‑панель для инженера ТБ, история событий за 30 дней.</li>
<li>• E‑mail и веб‑уведомления.</li>
</ul>
<div className="mt-auto pt-2 border-t border-white/5 text-[11px] text-slate-400">
                      Подойдёт для небольших заводов, строительных площадок и логистических комплексов,
                      которые хотят быстро запустить автоматический контроль ТБ без сложной интеграции.
                    </div>
</div>

<div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-50">Pro</span>
<span className="text-[10px] text-emerald-200">до 128 камер</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-xl font-semibold tracking-tight text-slate-50">от 180 000 ₽</span>
<span className="text-[11px] text-emerald-100">/ месяц</span>
</div>
<ul className="space-y-1.5 text-[12px] text-slate-200 mb-3">
<li>• Все из Start‑тарифа.</li>
<li>• Расширенный набор сценариев: техника, погрузка/разгрузка, работа на высоте, пересечение маршрутов людей и техники.</li>
<li>• Интеграция с ERP / SCADA / ССПБ (через API или Webhook).</li>
<li>• Расширенная аналитика: отчёты по сменам, зонам, подрядчикам, экспорт в Excel/BI.</li>
<li>• История событий за 90 дней, базовый SLA.</li>
</ul>
<div className="mt-auto pt-2 border-t border-emerald-500/40 text-[11px] text-emerald-100">
                      Подойдёт для средних и крупных промышленных площадок, где важно не только фиксировать нарушения,
                      но и управлять рисками и подрядчиками на уровне всей компании.
                    </div>
</div>

<div className="rounded-xl border border-white/10 bg-slate-950/80 p-4 flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-slate-50">Enterprise</span>
<span className="text-[10px] text-slate-400">от 128+ камер</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-xl font-semibold tracking-tight text-slate-50">от 350 000 ₽</span>
<span className="text-[11px] text-slate-400">/ месяц</span>
</div>
<ul className="space-y-1.5 text-[12px] text-slate-300 mb-3">
<li>• Все возможности Pro‑тарифа.</li>
<li>• Индивидуальные модели под специфику производства (химия, нефтегаз, энергетика и др.).</li>
<li>• Развёртывание в частном облаке или on‑prem по требованию.</li>
<li>• Интеграция с корпоративными системами (HR, обучение, управление подрядчиками).</li>
<li>• История инцидентов за 1+ год, расширенный SLA 24/7.</li>
</ul>
<div className="mt-auto pt-2 border-t border-white/10 text-[11px] text-slate-400">
                      Подойдёт для холдингов, девелоперов и крупных промышленных групп с несколькими площадками,
                      повышенными требованиями по ИБ и необходимости глубокой интеграции в корпоративный контур.
                    </div>
</div>
</div>
<p className="text-[11px] text-slate-400">
                  Итоговая стоимость зависит от количества камер, площадок и глубины интеграции. Поможем рассчитать
                  экономический эффект с учётом штрафов, простоев и компенсаций, которых удастся избежать.
                </p>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.85)]">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="text-sm font-medium text-slate-50">Запросить пилот на вашем заводе</h3>
<p className="text-[12px] text-slate-300">
                      Оставьте контакт — подготовим расчёт по штрафам, рискам и окупаемости DeepVision
                      именно для ваших объектов.
                    </p>
</div>
<div className="hidden sm:flex h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/40 items-center justify-center">
<span className="w-4 h-4 text-indigo-300" id="icon-camera"></span>
</div>
</div>
<form className="space-y-3 mt-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] text-slate-300 mb-1">Имя</label>
<input className="w-full bg-slate-950/80 border border-white/10 rounded-md px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/70 transition-colors" placeholder="Алексей" type="text"/>
</div>
<div>
<label className="block text-[11px] text-slate-300 mb-1">Компания</label>
<input className="w-full bg-slate-950/80 border border-white/10 rounded-md px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/70 transition-colors" placeholder="Промышленный холдинг" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] text-slate-300 mb-1">E‑mail</label>
<input className="w-full bg-slate-950/80 border border-white/10 rounded-md px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/70 transition-colors" placeholder="you@company.com" type="email"/>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] text-slate-300 mb-1">Количество камер</label>
<select className="w-full bg-slate-950/80 border border-white/10 rounded-md px-3 py-2 text-[13px] text-slate-100 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/70 transition-colors">
<option className="bg-slate-900">до 32 камер</option>
<option className="bg-slate-900">32–128 камер</option>
<option className="bg-slate-900">128–300 камер</option>
<option className="bg-slate-900">300+ камер</option>
</select>
</div>
<div>
<label className="block text-[11px] text-slate-300 mb-1">Отрасль</label>
<select className="w-full bg-slate-950/80 border border-white/10 rounded-md px-3 py-2 text-[13px] text-slate-100 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/70 transition-colors">
<option className="bg-slate-900">Нефтегаз / химия</option>
<option className="bg-slate-900">Металлургия / машиностроение</option>
<option className="bg-slate-900">Горнодобыча</option>
<option className="bg-slate-900">Стройка / девелопмент</option>
<option className="bg-slate-900">Логистика / сортировочные центры</option>
<option className="bg-slate-900">Энергетика (АЭС, ГЭС, ТЭЦ)</option>
<option className="bg-slate-900">Другое</option>
</select>
</div>
</div>
<div>
<label className="block text-[11px] text-slate-300 mb-1">Кратко о задаче</label>
<textarea className="w-full bg-slate-950/80 border border-white/10 rounded-md px-3 py-2 text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/70 transition-colors" placeholder="Например: контроль СИЗ и опасных зон на 3 цехах, снижение штрафов по итогам проверок..." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 text-[13px] font-medium tracking-tight px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white shadow-sm shadow-indigo-500/40 border border-indigo-400/80 transition-colors w-full sm:w-auto" type="submit">
<span className="w-4 h-4" id="icon-send"></span>
                      Отправить запрос
                    </button>
<p className="text-[10px] text-slate-400">
                      Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных.
                    </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050815]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-200">DeepVision</span>
<span className="h-3 w-px bg-white/10"></span>
<span>© 2025 ИИ‑видеоаналитика промышленной безопасности</span>
</div>
<div className="flex flex-wrap gap-4">
<a className="hover:text-slate-200 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-200 transition-colors" href="#">Техническая документация</a>
<a className="hover:text-slate-200 transition-colors" href="#">Партнёрская программа</a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
