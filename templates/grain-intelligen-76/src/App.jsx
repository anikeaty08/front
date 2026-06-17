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



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#F3F4F6',      // Світло-сірий фон
surface: '#FFFFFF',  // Білі картки
primary: '#22C55E',  // Green-500 (troхи темніший для білого фону)
primaryHover: '#16A34A',
textMain: '#111827', // Майже чорний текст
textSec: '#64748B',  // Slate-500 для другорядного тексту
borderSubtle: '#E2E8F0' // Slate-200 для легких рамок
},
spacing: {
'section': '100px',
'card-p': '32px',
'card-gap': '24px'
},
fontFamily: {
inter: ['Inter', 'sans-serif'],
}
}
}
}



        // Initialize Lucide Icons
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
      

<section className="relative pt-section pb-section px-6 flex flex-col items-center justify-center text-center min-h-[80vh]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-[1200px] w-full mx-auto flex flex-col items-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl text-textMain">
                Grain Intelligence Bot —<br/>
<span className="text-textMain">Ваш Надійний Помічник</span>
</h1>
<h2 className="text-lg md:text-xl text-textSec font-normal mb-10 max-w-2xl leading-relaxed">
                Автоматичний збір аналітики, цін та новин у Telegram
            </h2>
<button className="bg-textMain hover:bg-black text-white font-medium tracking-wide h-[56px] px-9 rounded-xl transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-2 group shadow-lg shadow-gray-200">
                Спробувати зараз
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="py-section px-6">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center md:text-left text-textMain">
                Проблема Ринку:<br/>
<span className="text-textSec">Інформаційний Хаос</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p hover:border-primary/40 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-textMain">Розрізненість Даних</h3>
<p className="text-sm md:text-base text-textSec leading-relaxed">
                        Інформація розпорошена по численних веб-сайтах та новинних стрічках.
                    </p>
</div>

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p hover:border-primary/40 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-textMain">Втрата Часу</h3>
<p className="text-sm md:text-base text-textSec leading-relaxed">
                        Постійний моніторинг займає години та відволікає від бізнесу.
                    </p>
</div>

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p hover:border-primary/40 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-textMain">Складність Аналізу</h3>
<p className="text-sm md:text-base text-textSec leading-relaxed">
                        Збір і порівняння даних ускладнює прийняття рішень.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-section px-6 border-t border-borderSubtle bg-surface">
<div className="max-w-[1200px] mx-auto">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-textMain">
                    Grain Intelligence Bot —<br/>
<span className="text-primary">Ваш Надійний Помічник</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap">

<div className="bg-bg border border-borderSubtle rounded-2xl p-card-p flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all duration-300 group">
<div className="w-16 h-16 rounded-full bg-white border border-borderSubtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-7 h-7 text-primary stroke-[1.5]" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Збір Даних</h3>
<p className="text-sm text-textSec">Агрегація з перевірених джерел</p>
</div>

<div className="bg-bg border border-borderSubtle rounded-2xl p-card-p flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all duration-300 group">
<div className="w-16 h-16 rounded-full bg-white border border-borderSubtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-7 h-7 text-primary stroke-[1.5]" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Аналіз</h3>
<p className="text-sm text-textSec">Обробка AI алгоритмами</p>
</div>

<div className="bg-bg border border-borderSubtle rounded-2xl p-card-p flex flex-col items-center text-center hover:bg-white hover:shadow-md transition-all duration-300 group">
<div className="w-16 h-16 rounded-full bg-white border border-borderSubtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
<i className="w-7 h-7 text-primary stroke-[1.5]" data-lucide="send"></i>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Доставка</h3>
<p className="text-sm text-textSec">Миттєве сповіщення в Telegram</p>
</div>
</div>
</div>
</section>

<section className="py-section px-6">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-textMain">Функціонал</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-card-gap">

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p flex items-start gap-6 hover:shadow-md transition-all">
<div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="tag"></i>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Актуальні Ціни</h3>
<p className="text-textSec text-sm md:text-base">Моніторинг цін на зернові культури в реальному часі.</p>
</div>
</div>

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p flex items-start gap-6 hover:shadow-md transition-all">
<div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="pie-chart"></i>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Аналітика Ринку</h3>
<p className="text-textSec text-sm md:text-base">Глибокий аналіз трендів та обсягів торгівлі.</p>
</div>
</div>

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p flex items-start gap-6 hover:shadow-md transition-all">
<div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Прогнози</h3>
<p className="text-textSec text-sm md:text-base">Предиктивна аналітика на основі історичних даних.</p>
</div>
</div>

<div className="bg-surface border border-borderSubtle rounded-2xl p-card-p flex items-start gap-6 hover:shadow-md transition-all">
<div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
<i className="w-6 h-6 text-primary stroke-[1.5]" data-lucide="newspaper"></i>
</div>
<div>
<h3 className="text-xl font-semibold mb-2 tracking-tight text-textMain">Свіжі Новини</h3>
<p className="text-textSec text-sm md:text-base">Дайджест найважливіших подій агросектору.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-section px-6 border-t border-borderSubtle">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center text-textMain">Переваги</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-card-gap">
<div className="bg-white border border-borderSubtle rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
<i className="w-8 h-8 text-primary mx-auto mb-4 stroke-[1.5]" data-lucide="zap"></i>
<h3 className="font-semibold text-lg tracking-tight text-textMain">Економія Часу</h3>
</div>
<div className="bg-white border border-borderSubtle rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
<i className="w-8 h-8 text-primary mx-auto mb-4 stroke-[1.5]" data-lucide="coins"></i>
<h3 className="font-semibold text-lg tracking-tight text-textMain">Збільшення Прибутку</h3>
</div>
<div className="bg-white border border-borderSubtle rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
<i className="w-8 h-8 text-primary mx-auto mb-4 stroke-[1.5]" data-lucide="shield-check"></i>
<h3 className="font-semibold text-lg tracking-tight text-textMain">Зниження Ризиків</h3>
</div>
<div className="bg-white border border-borderSubtle rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
<i className="w-8 h-8 text-primary mx-auto mb-4 stroke-[1.5]" data-lucide="award"></i>
<h3 className="font-semibold text-lg tracking-tight text-textMain">Конкурентна Перевага</h3>
</div>
</div>
</div>
</section>

<section className="py-section px-6">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center text-textMain">
                Монетизація Grain Intelligence Bot
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-card-gap items-center">

<div className="bg-surface border border-borderSubtle rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300">
<div>
<h3 className="text-lg font-medium text-textSec mb-4">1 Місяць</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-textMain">$6.99</span>
</div>
</div>
<ul className="mt-8 space-y-4 text-sm text-textSec">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Повний доступ</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Всі функції</li>
</ul>
<button className="mt-8 w-full py-3 rounded-lg border border-borderSubtle text-sm font-medium text-textMain hover:bg-gray-50 transition-colors">Обрати</button>
</div>

<div className="bg-surface border border-borderSubtle rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-xl hover:border-primary/30 transition-all duration-300">
<div>
<h3 className="text-lg font-medium text-textSec mb-4">6 Місяців</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-textMain">$6.49</span>
<span className="text-textSec text-sm">/ місяць</span>
</div>
</div>
<ul className="mt-8 space-y-4 text-sm text-textSec">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Економія 7%</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Пріоритетний сапорт</li>
</ul>
<button className="mt-8 w-full py-3 rounded-lg border border-borderSubtle text-sm font-medium text-textMain hover:bg-gray-50 transition-colors">Обрати</button>
</div>

<div className="relative bg-surface border-2 border-primary rounded-2xl p-8 lg:p-10 flex flex-col justify-between h-full shadow-[0_10px_40px_-10px_rgba(34,197,94,0.2)] transform md:scale-105 z-10">
<div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        Best choice
                    </div>
<div>
<h3 className="text-lg font-medium text-primary mb-4">1 Рік</h3>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-bold tracking-tight text-textMain">$5.49</span>
<span className="text-textSec text-sm">/ місяць</span>
</div>
<p className="text-xs text-primary mt-2">Найвигідніша пропозиція</p>
</div>
<ul className="mt-8 space-y-4 text-sm text-textMain">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Максимальна економія</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Персональний менеджер</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Ранній доступ до оновлень</li>
</ul>
<button className="mt-8 w-full py-3 rounded-lg bg-primary hover:bg-primaryHover text-white font-semibold transition-colors shadow-lg shadow-green-200">Обрати</button>
</div>
</div>
</div>
</section>

<section className="py-section px-6">
<div className="max-w-[1200px] mx-auto">
<div className="bg-surface border border-borderSubtle rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-sm">

<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-textMain">
                        Grain Intelligence Bot —<br/>
<span className="text-textSec">Майбутнє Агробізнесу</span>
</h2>
<button className="bg-textMain hover:bg-black text-white font-medium tracking-wide h-[56px] px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.03] flex items-center gap-3 shadow-lg shadow-gray-200">
<i className="w-5 h-5" data-lucide="send"></i>
                        Запустити бота в Telegram
                    </button>
</div>
</div>
<footer className="mt-16 text-center border-t border-borderSubtle pt-8">
<p className="text-textSec text-sm">© 2023 Grain Intelligence Bot. Всі права захищено.</p>
</footer>
</div>
</section>


    </>
  );
}
