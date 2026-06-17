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



document.addEventListener('DOMContentLoaded', () => {
if (window.lucide) {
window.lucide.createIcons({ attrs: { 'stroke-width': '1.5' } });
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/[0.04] ring-1 ring-white/10 text-white/90 group-hover:ring-white/20 group-hover:bg-white/[0.06] transition-colors">
<span className="text-xs tracking-tight font-semibold">VA</span>
</div>
<span className="text-[15px] md:text-[16px] font-semibold tracking-tight text-white">VetLab.AI</span>
<span className="ml-2 inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-0.5 text-[11px] font-medium text-neutral-300/80">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Beta
            </span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#features">Возможности</a>
<a className="hover:text-white transition-colors" href="#how">Как это работает</a>
<a className="hover:text-white transition-colors" href="#sample">Пример отчёта</a>
<a className="hover:text-white transition-colors" href="#pricing">Стоимость</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-500/90 shadow-sm shadow-cyan-500/10 ring-1 ring-inset ring-white/10 hover:ring-white/20 transition-colors" href="https://t.me/VetLabAI_bot" rel="noopener noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="send"></i>
              Открыть бота
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_-10%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(60%_40%_at_80%_10%,rgba(147,51,234,0.12),transparent_60%)]"></div>
<div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-xs text-neutral-300 mb-4">
<i className="h-3.5 w-3.5" data-lucide="bot"></i>
              Анализ в Telegram за 1–2 минуты
            </div>
<h1 className="text-[34px] leading-[1.1] md:text-6xl md:leading-[1.05] font-semibold tracking-tight text-white">
              ИИ‑анализ крови животных
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300">за минуты</span>
</h1>
<p className="mt-4 text-[15px] md:text-[17px] text-neutral-300/90">
              Отправьте фото или PDF ветеринарного анализа в Telegram — получите структурированный отчёт с референсами по виду и возрасту, интерпретацией отклонений и клиническими рекомендациями.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-500/90 shadow-sm shadow-cyan-500/10 ring-1 ring-inset ring-white/10 hover:ring-white/20 transition-colors" href="https://t.me/VetLabAI_bot" rel="noopener noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="send"></i>
                Открыть бота
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-neutral-200 bg-white/[0.02] hover:bg-white/[0.05] ring-1 ring-white/10 hover:ring-white/20 transition-colors" href="#sample">
<i className="h-4 w-4" data-lucide="file-text"></i>
                Посмотреть пример отчёта
              </a>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2 text-[13px] text-neutral-300">
<i className="h-4 w-4" data-lucide="camera"></i>
                  1) Сделайте фото анализа
                </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2 text-[13px] text-neutral-300">
<i className="h-4 w-4" data-lucide="send"></i>
                  2) Отправьте боту
                </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2 text-[13px] text-neutral-300">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                  3) Получите отчёт
                </div>
</div>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-neutral-400">
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                Шифрование и удаление по запросу
              </div>
<div className="inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="paw-print"></i>
                Собака, кошка и др. виды
              </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent blur-2xl"></div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40">
<img alt="Ветеринар с пациентом" className="h-80 w-full object-cover rounded-xl md:h-[420px]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<img alt="Микроскоп и лаборатория" className="h-28 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1578775887804-699de7086ff9?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 text-sm text-neutral-200">
<i className="h-4 w-4 text-cyan-300" data-lucide="activity"></i>
                  Быстрый скрининг показателей
                </div>
<div className="mt-3 h-2.5 w-full rounded-full bg-white/[0.06]">
<div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"></div>
</div>
<div className="mt-2 h-2.5 w-full rounded-full bg-white/[0.06]">
<div className="h-2.5 w-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 border-t border-white/10 pt-6">
<p className="text-xs uppercase tracking-wider text-neutral-400">Нам доверяют</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[12px] text-neutral-300 tracking-tight">ALPHA VET</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[12px] text-neutral-300 tracking-tight">PAWS LAB</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[12px] text-neutral-300 tracking-tight">BIOCLINIC</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[12px] text-neutral-300 tracking-tight">NOVA PET</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[12px] text-neutral-300 tracking-tight">V-CARE</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-center text-[12px] text-neutral-300 tracking-tight">CLINIX</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-14 md:py-20" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:ring-1 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="brain-circuit"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Комплексная интерпретация</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">
            Анализ ключевых показателей (ОАК, биохимия), корреляции и вероятные причины отклонений.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:ring-1 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="paw-print"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Референсы по виду/возрасту</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">
            Поддержка собак и кошек; учёт возраста, массы и состояния для корректных референсных диапазонов.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:ring-1 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="timeline"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Динамика и сравнение</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">
            Сравнивайте с предыдущими результатами для отслеживания трендов и эффективности терапии.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:ring-1 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="stethoscope"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Практические рекомендации</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">
            Подсказки по дополнительной диагностике и контролю, сформулированные простым языком.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:ring-1 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="file-scan"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Работает с фото и PDF</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">
            Оптическое распознавание с защитой от артефактов, ручная правка значений при необходимости.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:ring-1 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="lock"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Безопасность данных</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">
            Шифрование при передаче, удаление по запросу, анонимизация персональных данных.
          </p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-14" id="how">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
<div className="lg:col-span-1">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-white">Как это работает</h2>
<p className="mt-2 text-neutral-300">
            Весь процесс занимает 1–2 минуты в Telegram. Никаких сложных форм и кабинетов.
          </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-400 ring-1 ring-inset ring-white/10 hover:ring-white/20 transition" href="https://t.me/VetLabAI_bot" rel="noopener noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="send"></i>
            Начать сейчас
          </a>
</div>
<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/20 text-xs">1</span>
<h3 className="text-[17px] font-semibold tracking-tight">Загрузите анализ</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Отправьте фото/скан или PDF с показателями (ОАК, биохимия).</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/20 text-xs">2</span>
<h3 className="text-[17px] font-semibold tracking-tight">ИИ извлечёт значения</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Распознавание, нормализация единиц, проверка аномалий ввода.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/20 text-xs">3</span>
<h3 className="text-[17px] font-semibold tracking-tight">Сравнение с референсами</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Учёт вида, возраста и веса; отметка отклонений и их значимости.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/20 text-xs">4</span>
<h3 className="text-[17px] font-semibold tracking-tight">Готовый отчёт в чате</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Подробные комментарии, подсказки по дальнейшим шагам и динамика.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-14" id="sample">
<div className="flex items-center justify-between gap-4">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-white">Пример отчёта</h2>
<a className="hidden md:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-neutral-200 bg-white/[0.02] hover:bg-white/[0.05] ring-1 ring-white/10 hover:ring-white/20 transition" href="https://t.me/VetLabAI_bot" rel="noopener noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="message-square"></i>
          Получить в Telegram
        </a>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-300" data-lucide="file-text"></i>
<h3 className="text-[17px] font-semibold tracking-tight">Ветеринарный отчёт</h3>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="check-circle"></i> Готово
            </span>
</div>
<div className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="grid grid-cols-2 gap-3 text-sm">
<div className="text-neutral-400">Пациент</div>
<div className="text-neutral-200">Блэк, собака, 4 года, 18 кг</div>
<div className="text-neutral-400">Материал</div>
<div className="text-neutral-200">Кровь (ОАК + Биохимия)</div>
<div className="text-neutral-400">Дата</div>
<div className="text-neutral-200">12.10.2025</div>
<div className="text-neutral-400">Источник</div>
<div className="text-neutral-200">Фото анализа</div>
</div>
</div>
<div className="mt-5 space-y-4">

<div className="rounded-lg border border-white/10 p-4">
<div className="flex items-center justify-between text-sm">
<div className="text-neutral-300">Гемоглобин (Hb)</div>
<div className="text-neutral-300">132 г/л</div>
</div>
<div className="mt-2 h-2.5 rounded-full bg-white/[0.06]">
<div className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 w-[62%]"></div>
</div>
<div className="mt-1 text-xs text-neutral-400">Референс: 120–180 г/л (собака, взрослый)</div>
</div>
<div className="rounded-lg border border-white/10 p-4">
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2 text-neutral-300">
                  Лейкоциты (WBC)
                  <span className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] text-amber-300 border border-amber-400/20 bg-amber-500/10">
<i className="h-3.5 w-3.5" data-lucide="alert-triangle"></i> Высокий
                  </span>
</div>
<div className="text-neutral-300">19.2 ×10⁹/л</div>
</div>
<div className="mt-2 h-2.5 rounded-full bg-white/[0.06]">
<div className="h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 w-[88%]"></div>
</div>
<div className="mt-1 text-xs text-neutral-400">Референс: 6.0–17.0 ×10⁹/л</div>
<p className="mt-2 text-sm text-neutral-300">
                Возможны воспалительный процесс или стресс‑лейкоцитоз. Рекомендуется клинический осмотр, контроль температуры, при необходимости — С-реактивный белок.
              </p>
</div>
<div className="rounded-lg border border-white/10 p-4">
<div className="flex items-center justify-between text-sm">
<div className="text-neutral-300">Тромбоциты (PLT)</div>
<div className="text-neutral-300">220 ×10⁹/л</div>
</div>
<div className="mt-2 h-2.5 rounded-full bg-white/[0.06]">
<div className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 w-[48%]"></div>
</div>
<div className="mt-1 text-xs text-neutral-400">Референс: 200–500 ×10⁹/л</div>
</div>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-4 w-4 text-cyan-300" data-lucide="lightbulb"></i>
<h4 className="text-[15px] font-semibold tracking-tight">Рекомендации</h4>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-neutral-300 space-y-1">
<li>Повторить ОАК через 3–5 дней для оценки динамики WBC.</li>
<li>При клинических признаках — расширенная биохимия и УЗИ.</li>
<li>Уточнить анамнез: медикаменты, вакцинации, стрессы.</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="sparkles"></i>
<h3 className="text-[17px] font-semibold tracking-tight">Чётко и понятно</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Каждый показатель сопровождается пояснением и визуальной шкалой.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="download"></i>
<h3 className="text-[17px] font-semibold tracking-tight">PDF‑версия отчёта</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Загрузите отчёт одним нажатием — удобно отправить владельцу или прикрепить в карту.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="messages-square"></i>
<h3 className="text-[17px] font-semibold tracking-tight">Работает прямо в чате</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Без регистрации и кабинетов — вся история в вашем Telegram.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-2 text-neutral-200">
<i className="h-5 w-5 text-cyan-300" data-lucide="library"></i>
<h3 className="text-[17px] font-semibold tracking-tight">Обучено на данных</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Модель обучена на валидационных наборах с участием практикующих ветеринаров.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-10">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center bg-emerald-500/10 border border-emerald-400/20">
<i className="h-5 w-5 text-emerald-300" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-[18px] font-semibold tracking-tight text-white">Конфиденциальность по умолчанию</h3>
<p className="mt-1 text-sm text-neutral-300">
                Данные передаются по защищённым каналам, автоматически скрываются из обучающих выборок и могут быть удалены по команде /delete.
              </p>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-neutral-200 bg-white/[0.02] hover:bg-white/[0.05] ring-1 ring-white/10 hover:ring-white/20 transition" href="#">
<i className="h-4 w-4" data-lucide="file-lock"></i>
            Политика конфиденциальности
          </a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-14" id="pricing">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-white">Стоимость</h2>
<p className="mt-2 text-neutral-300">Для клиентов анализ бесплатный.</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-semibold tracking-tight text-white">Бесплатно</h3>
<span className="text-sm text-emerald-300">0 ₽</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>Без ограничений</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>Поддержка фото и PDF</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>Референсы и рекомендации</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-400 ring-1 ring-inset ring-white/10 hover:ring-white/20 transition" href="https://t.me/VetLabAI_bot" rel="noopener noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="send"></i>
            Начать бесплатно
          </a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-14" id="faq">
<h2 className="text-[28px] md:text-[34px] font-semibold tracking-tight text-white">Частые вопросы</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-200">Это заменяет консультацию ветеринара?</h3>
<p className="mt-2 text-sm text-neutral-400">Нет. Сервис помогает оперативно интерпретировать результаты и подготовиться к приёму. Для постановки диагноза обращайтесь к специалисту.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-200">Какие виды поддерживаются?</h3>
<p className="mt-2 text-sm text-neutral-400">Собаки и кошки. Поддержка других видов находится в разработке.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-200">Можно загрузить несколько анализов?</h3>
<p className="mt-2 text-sm text-neutral-400">Да. Бот сопоставляет даты, строит динамику и выделяет значимые изменения.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<h3 className="text-[16px] font-semibold tracking-tight text-neutral-200">Что с приватностью?</h3>
<p className="mt-2 text-sm text-neutral-400">Данные шифруются при передаче. По команде /delete мы удалим историю и связанные файлы.</p>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/[0.04] ring-1 ring-white/10 text-white/90">
<span className="text-xs tracking-tight font-semibold">VA</span>
</div>
<div>
<div className="text-[15px] font-semibold tracking-tight">VetLab.AI</div>
<div className="text-xs text-neutral-400">ИИ‑интерпретация ветеринарных анализов</div>
</div>
</div>
<div className="flex items-center gap-5 text-sm">
<a className="text-neutral-300 hover:text-white transition" href="#">Политика</a>
<a className="text-neutral-300 hover:text-white transition" href="#">Условия</a>
<a className="text-neutral-300 hover:text-white transition" href="mailto:hello@vetlab.ai">Контакты</a>
<a className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-white transition" href="https://t.me/VetLabAI_bot" rel="noopener noreferrer" target="_blank">
<i className="h-4 w-4" data-lucide="send"></i> Telegram
            </a>
</div>
</div>
<div className="mt-6 text-xs text-neutral-500">
          Важно: сервис не является медицинским изделием и не заменяет консультацию ветеринарного врача.
        </div>
</div>
</footer>

    </>
  );
}
