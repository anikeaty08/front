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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="text-lg font-medium tracking-tight uppercase">Bureau 710</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Проєкти</a>
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Послуги</a>
<a className="hidden md:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Контакти</a>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors ml-4">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-12 md:pt-24">
<div className="col-span-1 lg:col-span-8">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-zinc-900 uppercase leading-[0.9]">
                        Architecture <br/>
<span className="text-zinc-400">&amp;</span> Consulting
                    </h1>
</div>
<div className="col-span-1 lg:col-span-4 pb-2">
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-md">
                        Створюємо успішні ресторанні проекти, поєднуючи естетику, функціональність та бізнес-стратегію для Horeca.
                    </p>
</div>
</div>

<div className="mt-16 md:mt-24 w-full h-[60vh] md:h-[80vh] bg-zinc-100 overflow-hidden relative group">
<img alt="Hero Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end bg-gradient-to-t from-black/40 to-transparent">
<div className="flex flex-col text-white">
<span className="text-xs font-medium uppercase tracking-wider mb-2 opacity-80">Latest Project</span>
<span className="text-2xl md:text-3xl font-medium tracking-tight">Vezha Center / Lviv</span>
</div>
<button className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors group/btn">
<i className="w-5 h-5 md:w-6 md:h-6 text-zinc-900 stroke-[1.5] group-hover/btn:translate-y-1 transition-transform" data-lucide="arrow-down"></i>
</button>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 mb-40">
<div className="flex justify-between items-end mb-16 border-b border-zinc-200 pb-6">
<h2 className="text-4xl font-medium tracking-tight uppercase text-zinc-900">Вибрані Проєкти</h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
                    Всі проєкти <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<article className="group flex flex-col gap-6">
<div className="aspect-[4/3] bg-zinc-100 overflow-hidden w-full relative">
<img alt="Kyiv Food Market" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1">
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Kyiv Food Market / фуд-хол</h3>
<div className="text-xs text-zinc-500 font-medium">2000 м², Київ, 2019</div>
<div className="text-xs text-zinc-800 mt-2 font-medium">The Architecture MasterPrize</div>
<div className="text-xs text-zinc-400">Commercial Interior Winner | Рік: 2020</div>
</div>
<p className="text-sm leading-relaxed text-zinc-500 text-justify">
                            Kyiv Food Market розташований у приміщенні колишнього військового арсеналу XVIII століття. Завданням було перетворення індустріального об'єкта на сучасний ринок їжі, зберігши архітектурну автентичність будівлі. Фудкорти розміщені по периметру замкненим колом, у центрі — атріум на 300 гостей. Другий рівень відведений під винний бар та шоу-кухню.
                        </p>
</div>
</article>

<article className="group flex flex-col gap-6">
<div className="aspect-[4/3] bg-zinc-100 overflow-hidden w-full relative">
<img alt="Marko Cafe" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1">
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">Markó / кафе</h3>
<div className="text-xs text-zinc-500 font-medium">333 м², Київ, 2022</div>
</div>
<p className="text-sm leading-relaxed text-zinc-500 text-justify mt-[2.25rem]">
                            Markó — кафе на першому поверсі Sophia Hotel Kyiv біля Софійської площі. Простір адаптований для щоденних гостей і великих груп, та оформлений вінтажними меблями. Кафе поділене на три зони: основна зала з баром, внутрішній дворик і засклена тераса. Особливу увагу приділено акустиці та шумоізоляції для комфорту гостей готелю.
                        </p>
</div>
</article>

<article className="group flex flex-col gap-6">
<div className="aspect-[4/3] bg-zinc-100 overflow-hidden w-full relative">
<img alt="Thai Hello Restaurant" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1">
<h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900">«Тайський Привіт» / ресторан</h3>
<div className="text-xs text-zinc-500 font-medium">208 м², Київ, 2019</div>
</div>
<p className="text-sm leading-relaxed text-zinc-500 text-justify mt-[2.25rem]">
                            Тайський Привіт переносить гостей у атмосферу вуличного Таїланду. Простір поєднує автентичні локальні смаки, відкриту кухонну зону та кімнати для чайних церемоній. Інтер'єр побудовано на контрастах: вінтажні меблі, предмети побуту та декор з Таїланду, натуральні матеріали, тропічна зелень і гіпсовий тигр біля входу.
                        </p>
</div>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-20">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 uppercase">
                    Наші Послуги
                </h2>
</div>
<div className="flex flex-col">
<div className="group border-t border-zinc-200 py-12 grid grid-cols-1 lg:grid-cols-12 gap-y-6 items-start transition-all hover:bg-zinc-50/50">
<div className="col-span-1 lg:col-span-4">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Дизайн ресторанів
                        </h3>
</div>
<div className="col-span-1 lg:col-span-7 pr-0 lg:pr-12">
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed group-hover:text-zinc-800 transition-colors">
                            Сформуйте для ваших гостей досвід, що запам’ятовується – завдяки дизайн-рішенням, що поєднують атмосферу, функціональність і бізнес-цілі.
                        </p>
</div>
<div className="col-span-1 lg:col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="group border-t border-zinc-200 py-12 grid grid-cols-1 lg:grid-cols-12 gap-y-6 items-start transition-all hover:bg-zinc-50/50">
<div className="col-span-1 lg:col-span-4">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Реновація ресторанів
                        </h3>
</div>
<div className="col-span-1 lg:col-span-7 pr-0 lg:pr-12">
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed group-hover:text-zinc-800 transition-colors">
                            Оновіть наявний простір, заощадивши до 30% бюджету порівняно з новим ремонтом. Розумна оптимізація ресурсів.
                        </p>
</div>
<div className="col-span-1 lg:col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="group border-t border-zinc-200 py-12 grid grid-cols-1 lg:grid-cols-12 gap-y-6 items-start transition-all hover:bg-zinc-50/50">
<div className="col-span-1 lg:col-span-4">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Ресторанний консалтинг
                        </h3>
</div>
<div className="col-span-1 lg:col-span-7 pr-0 lg:pr-12">
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed group-hover:text-zinc-800 transition-colors">
                            Отримайте підтримку на всіх етапах: від вибору концепції до оптимізації операційної діяльності для стабільного розвитку.
                        </p>
</div>
<div className="col-span-1 lg:col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="group border-t border-zinc-200 py-12 grid grid-cols-1 lg:grid-cols-12 gap-y-6 items-start transition-all hover:bg-zinc-50/50">
<div className="col-span-1 lg:col-span-4">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Комплектація
                        </h3>
</div>
<div className="col-span-1 lg:col-span-7 pr-0 lg:pr-12">
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed group-hover:text-zinc-800 transition-colors">
                            Забезпечте свій заклад усім необхідним. Ми підберемо посуд, столові прибори та обладнання від надійних постачальників.
                        </p>
</div>
<div className="col-span-1 lg:col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="group border-t border-b border-zinc-200 py-12 grid grid-cols-1 lg:grid-cols-12 gap-y-6 items-start transition-all hover:bg-zinc-50/50">
<div className="col-span-1 lg:col-span-4">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                            Бюджетування
                        </h3>
</div>
<div className="col-span-1 lg:col-span-7 pr-0 lg:pr-12">
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed group-hover:text-zinc-800 transition-colors">
                            Оптимізуйте витрати на запуск. Ми допоможемо сформувати бюджет, гіпотезу окупності та стратегію повернення інвестицій.
                        </p>
</div>
<div className="col-span-1 lg:col-span-1 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-8 h-8 text-zinc-400 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
<div className="relative w-full aspect-[4/3] bg-zinc-100 overflow-hidden group">
<img alt="Interior Design Detail" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1632&amp;q=80"/>
<div className="absolute bottom-6 left-6 bg-white px-4 py-2 flex items-center gap-3 shadow-sm border border-zinc-100">
<div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
<span className="text-sm font-medium tracking-wide uppercase">Interior Concept</span>
</div>
</div>
<div className="flex flex-col pb-6">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 uppercase mb-8">
                        Чому Ми
                    </h2>
<div className="border-l border-zinc-200 pl-8 mb-12">
<h3 className="text-lg md:text-xl font-medium tracking-tight uppercase text-zinc-900 mb-6">
                            Стратегічний підхід від архітекторів і консультантів
                        </h3>
<p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
                            Ми не просто малюємо стіни. Ми створюємо екосистеми, де дизайн працює на бізнес. Наш досвід дозволяє бачити проект комплексно — від першого ескізу до першого гостя.
                        </p>
</div>
<div className="flex gap-4">
<button className="bg-zinc-900 text-white px-8 py-4 text-base font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 group">
                            Обговорити проект
                            <i className="w-5 h-5 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-200 py-12 mt-20">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-zinc-400 text-sm">© 2024 BUREAU 710</span>
<div className="flex gap-8">
<a className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors" href="#">Instagram</a>
<a className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors" href="#">Behance</a>
<a className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors" href="#">Telegram</a>
</div>
<button className="p-3 bg-zinc-50 rounded-full hover:bg-zinc-100 transition-colors text-zinc-500">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-up"></i>
</button>
</div>
</footer>


    </>
  );
}
