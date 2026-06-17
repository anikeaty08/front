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
      

<div className="w-full max-w-[540px] flex flex-col gap-2">

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col justify-between p-10 overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-center gap-8">
<div className="space-y-6">
<h1 className="text-4xl font-semibold text-white tracking-tighter leading-tight">
                        Почему дешёвый курс за 2.900₽ <span className="text-emerald-400">НЕ</span> принесёт миллион
                    </h1>
<div className="w-12 h-0.5 bg-emerald-500/50"></div>
<p className="text-xl font-medium text-zinc-400 leading-snug">
                        Математика, которая убьёт твою веру в "продам тысячам людей"
                    </p>
</div>
</div>

<div className="absolute bottom-10 right-10 opacity-20">
<i className="w-24 h-24 stroke-emerald-500" data-lucide="calculator"></i>
</div>
</section>

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col p-10 overflow-hidden">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">
                Математика усилий: 500 продаж vs 20 продаж
            </h2>
<div className="flex-1 flex flex-col gap-6">
<div className="text-lg text-zinc-400">
                    Цель — заработать миллион рублей на запуске.
                </div>

<div className="bg-zinc-900/50 p-6 border-l border-zinc-700">
<h3 className="text-lg font-medium text-white mb-2">Вариант А: Гайд за 2.000₽</h3>
<ul className="space-y-2">
<li className="flex items-start gap-3 text-base text-zinc-400">
<i className="w-5 h-5 mt-0.5 stroke-zinc-500 shrink-0" data-lucide="arrow-right"></i>
<span>Нужно 500 продаж</span>
</li>
<li className="flex items-start gap-3 text-base text-zinc-400">
<i className="w-5 h-5 mt-0.5 stroke-zinc-500 shrink-0" data-lucide="arrow-right"></i>
<span>Найти полтысячи людей, обработать 500 транзакций, залить огромный трафик</span>
</li>
</ul>
</div>

<div className="bg-emerald-950/20 p-6 border-l border-emerald-500">
<h3 className="text-lg font-medium text-white mb-2">Вариант Б: Профессия за 50.000₽</h3>
<ul className="space-y-2">
<li className="flex items-start gap-3 text-base text-emerald-100/80">
<i className="w-5 h-5 mt-0.5 stroke-emerald-400 shrink-0" data-lucide="check"></i>
<span>Нужно 20 продаж</span>
</li>
<li className="flex items-start gap-3 text-base text-emerald-100/80">
<i className="w-5 h-5 mt-0.5 stroke-emerald-400 shrink-0" data-lucide="check"></i>
<span>Найти 20 человек, которым реально нужна работа — это реально даже с небольшим блогом</span>
</li>
</ul>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<p className="text-base text-zinc-300">
                    Сделать 20 качественных продаж ПРОЩЕ, чем 500 на потоке. Чем выше чек — тем легче сделать кассу.
                </p>
</div>
</section>

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col p-10 overflow-hidden">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
                Парадокс цены: продажи падают не так, как ты думаешь
            </h2>
<div className="flex flex-col gap-6 h-full justify-center">
<div className="space-y-2">
<p className="text-lg text-zinc-400">Ты продаёшь обучение за 10.000₽. Купило 100 человек → выручка 1.000.000₽.</p>
<p className="text-lg text-zinc-400">Теперь упаковал как «Профессию» с кураторами за 50.000₽ (в 5 раз дороже).</p>
</div>
<div className="grid grid-cols-1 gap-4 mt-2">
<div className="p-5 bg-zinc-900 border border-zinc-800 opacity-60">
<div className="flex items-center gap-2 mb-2 text-zinc-500">
<i className="w-4 h-4" data-lucide="x-circle"></i>
<span className="text-sm font-medium uppercase tracking-wider">Логика новичка</span>
</div>
<p className="text-lg">"Продажи упадут в 5 раз!"</p>
</div>
<div className="p-5 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]">
<div className="flex items-center gap-2 mb-2 text-emerald-400">
<i className="w-4 h-4" data-lucide="zap"></i>
<span className="text-sm font-medium uppercase tracking-wider">Реальность</span>
</div>
<p className="text-lg text-white">Отваливаются только зеваки. Купит 50 человек (падение на 50%) → выручка 2.500.000₽.</p>
</div>
</div>
<p className="text-lg text-zinc-200 mt-2">
                    Ты работаешь МЕНЬШЕ (50 учеников вместо 100), а зарабатываешь в 2,5 раза БОЛЬШЕ.
                </p>
</div>
</section>

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col p-10 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">
                Психология: ты продаёшь не курс, а инвестицию
            </h2>
<div className="flex flex-col gap-8">
<div className="grid grid-cols-1 gap-4">
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-zinc-500 text-lg">Курс за 3-5к</span>
<span className="text-zinc-300 text-lg text-right">"Куплю почитать, не жалко"</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-white/5">
<span className="text-emerald-400 text-lg">Курс за 50-100к</span>
<span className="text-white font-medium text-lg text-right">"Инвестиция в будущую зарплату"</span>
</div>
</div>
<div className="space-y-4">
<p className="text-sm uppercase tracking-widest text-zinc-500 font-medium">Сравни:</p>
<div className="flex gap-4">
<div className="mt-1">
<i className="w-6 h-6 stroke-zinc-600" data-lucide="graduation-cap"></i>
</div>
<div>
<span className="text-lg text-white font-medium">Вуз: 150-200к в год.</span>
<p className="text-base text-zinc-400 mt-1">Окупаемость туманная, через 5 лет, зарплата 30-40к. Люди НАХОДЯТ деньги.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<i className="w-6 h-6 stroke-emerald-500" data-lucide="briefcase"></i>
</div>
<div>
<span className="text-lg text-white font-medium">Твоя профессия: 60-80к.</span>
<p className="text-base text-zinc-400 mt-1">Обучение 2-3 месяца. Доход 50к+ через полгода.</p>
</div>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<p className="text-lg text-zinc-300 font-medium">
                    Твоё предложение в разы выгоднее. Если продукт даёт навык зарабатывать — он не может стоить как кроссовки.
                </p>
</div>
</section>

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col p-10 overflow-hidden">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">
                Качество учеников = твои будущие кейсы
            </h2>
<div className="space-y-6">
<p className="text-lg text-zinc-400">
                    Клиент, купивший курс за 1.990₽, часто даже не открывает его. Для него эта сумма незначима.
                </p>
<div className="flex items-center gap-2 text-red-400/80 font-medium text-base">
<span>Нет внедрения</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
<span>нет результата</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
<span>нет кейсов</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
<span>ты не можешь продавать дальше.</span>
</div>
<div className="bg-zinc-900 border border-zinc-800 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 blur-2xl"></div>
<h3 className="text-lg font-medium text-white mb-4">Магия высокого чека:</h3>
<p className="text-base text-zinc-400 mb-4">Когда человек отдаёт 50-100к за обучение профессии, он:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 stroke-emerald-500/70" data-lucide="check-circle-2"></i>
                            Смотрит каждый урок
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 stroke-emerald-500/70" data-lucide="check-circle-2"></i>
                            Делает домашку
                        </li>
<li className="flex items-center gap-3 text-base text-zinc-300">
<i className="w-5 h-5 stroke-emerald-500/70" data-lucide="check-circle-2"></i>
                            Трясёт куратора
                        </li>
<li className="flex items-center gap-3 text-base font-semibold text-white">
<i className="w-5 h-5 stroke-emerald-400 fill-emerald-400/10" data-lucide="check-circle-2"></i>
                            ПОЛУЧАЕТ РЕЗУЛЬТАТ (деньги)
                        </li>
</ul>
</div>
<p className="text-base text-zinc-400">
                    Высокий чек автоматически фильтрует нытиков и привлекает тех, кто готов работать. Твои кейсы становятся сильнее, а работать с группой — в кайф.
                </p>
</div>
</section>

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col p-10 overflow-hidden justify-center">

<div className="absolute -left-20 top-1/2 w-64 h-64 bg-emerald-900/10 rounded-full blur-[80px] pointer-events-none"></div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8 relative z-10">
                Не стреляй из пушки по воробьям
            </h2>
<div className="space-y-6 relative z-10">
<p className="text-lg text-zinc-300 leading-relaxed">
                    Если ты эксперт, который показывает свой путь, доходы, результаты клиентов, транслирует ценности и делает крутой сторителлинг — продавать продукт за "три копейки" глупо.
                </p>
<div className="pl-4 border-l-2 border-emerald-500/30">
<p className="text-base text-zinc-400 italic">
                        Прогреть человека на гайд за 2.000₽ можно за 2 сторис: "Вот проблема — вот решение, ссылка тут".
                    </p>
</div>
<p className="text-lg text-zinc-300 leading-relaxed">
                    Если ты умеешь делать долгие качественные прогревы (недели контента), используй этот ресурс для продажи дорогих продуктов.
                </p>
<p className="text-lg font-medium text-white">
                    Твой навык маркетинга должен окупаться миллионными запусками, а не тысячами рублей. <span className="text-emerald-400">Не обесценивай свои усилия.</span>
</p>
</div>
</section>

<section className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/10 flex flex-col p-10 overflow-hidden">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">
                3 вывода, которые изменят твой подход к ценам
            </h2>
<div className="flex-1 space-y-6">

<div className="flex gap-4">
<div className="text-3xl font-light text-emerald-500/80 leading-none">1.</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Не бойся называть цену.</h3>
<p className="text-base text-zinc-400 leading-snug">Люди находят миллионы на образование с туманными перспективами. Найти 50-100к на конкретную профессию с гарантией спроса — рациональный выбор, а не "дорого".</p>
</div>
</div>

<div className="flex gap-4">
<div className="text-3xl font-light text-emerald-500/80 leading-none">2.</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Меньше клиентов — больше денег.</h3>
<p className="text-base text-zinc-400 leading-snug">Стратегия "продам дешево всем" ведёт к выгоранию. Стратегия "продам дорого заинтересованным" ведёт к ресурсу и кейсам.</p>
</div>
</div>

<div className="flex gap-4">
<div className="text-3xl font-light text-emerald-500/80 leading-none">3.</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Ты продаёшь зарплату.</h3>
<p className="text-base text-zinc-400 leading-snug">В нише профессий цена курса — это доля от будущих доходов ученика. Она не должна быть низкой.</p>
</div>
</div>
</div>
<div className="mt-8 bg-zinc-900 border border-zinc-800 p-6 text-center rounded-sm">
<p className="text-base text-zinc-300 mb-2">
                    Если ты запускаешь обучающий продукт, но не знаешь, какую цену ставить — напиши мне в телеграм
                </p>
<div className="inline-block bg-emerald-500 text-black font-semibold px-4 py-1 text-lg mb-2 mt-1">
                    "ЦЕНА"
                </div>
<p className="text-sm text-zinc-400">
                    Разберу твой продукт и покажу, как упаковать его на высокий чек.
                </p>
</div>
</section>
</div>


    </>
  );
}
