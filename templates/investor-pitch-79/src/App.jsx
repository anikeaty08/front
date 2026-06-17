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
      

<header className="fixed top-0 w-full z-50 border-b border-stone-200 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-10 h-10 text-[#8B3A3A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#8B3A3A" stroke="none"></path>
<path className="opacity-30" d="M7 12l5 5 5-5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-3xl font-serif-logo font-bold text-[#8B3A3A] tracking-tight">AiyM</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-[#8B3A3A] transition-colors" href="#mission">Миссия</a>
<a className="hover:text-[#8B3A3A] transition-colors" href="#traction">Показатели</a>
<a className="hover:text-[#8B3A3A] transition-colors" href="#ecosystem">Экосистема</a>
<a className="hover:text-[#8B3A3A] transition-colors" href="#impact">Влияние</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-xs font-medium text-stone-500 hover:text-[#8B3A3A] transition-colors" href="#">
                    Вход для инвесторов
                </a>
<button className="bg-[#8B3A3A] text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#6f2e2e] transition-all shadow-lg shadow-red-900/10 flex items-center gap-2">
<iconify-icon height="16" icon="solar:download-linear" width="16"></iconify-icon>
                    Скачать презентацию
                </button>
</div>
</div>
</header>
<main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">

<section className="text-center space-y-8 max-w-4xl mx-auto animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[#8B3A3A] text-xs font-semibold tracking-wide uppercase">
<iconify-icon height="14" icon="solar:chart-2-linear" width="14"></iconify-icon>
                Открыт Seed-раунд
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.05]">
                Первая экосистема безопасности <br/>
<span className="text-stone-400 font-serif-logo italic pr-2">для</span>
<span className="text-[#8B3A3A]">женщин в ЦА.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
                AiyM объединяет технологии экстренного реагирования, юридический ИИ и образовательные ресурсы в супер-приложении. Мы решаем критическую проблему рынка с высоким социальным влиянием.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="bg-stone-900 text-white h-12 px-8 rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center gap-2">
                    Запросить доступ
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="text-stone-600 h-12 px-8 rounded-full font-medium hover:bg-stone-100 border border-stone-200 transition-colors flex items-center gap-2 bg-white">
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Смотреть демо
                </button>
</div>
</section>

<section className="border-y border-stone-200 bg-white/50 py-12 -mx-6 px-6 md:mx-0 md:px-0 md:rounded-2xl md:border animate-fade-up delay-100" id="traction">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-[#8B3A3A] tracking-tight">45K+</div>
<div className="text-xs font-medium text-stone-500 uppercase tracking-wide">Активных пользователей</div>
</div>
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-[#8B3A3A] tracking-tight">2.1M</div>
<div className="text-xs font-medium text-stone-500 uppercase tracking-wide">Инцидентов предотвращено</div>
</div>
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-[#8B3A3A] tracking-tight">150+</div>
<div className="text-xs font-medium text-stone-500 uppercase tracking-wide">НПО-партнеров</div>
</div>
<div className="space-y-1">
<div className="text-3xl md:text-4xl font-semibold text-[#8B3A3A] tracking-tight">4.9/5</div>
<div className="text-xs font-medium text-stone-500 uppercase tracking-wide">Рейтинг в App Store</div>
</div>
</div>
</section>

<section className="space-y-8 animate-fade-up delay-200" id="ecosystem">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-2">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Экосистема продукта</h2>
<p className="text-stone-500 max-w-md">Наш интегрированный набор инструментов обеспечивает безопасность, юридическую защиту и заботу о здоровье в единой защищенной среде.</p>
</div>
<a className="text-[#8B3A3A] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    Смотреть карту развития <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 group bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
<div className="absolute -right-10 -top-10 text-[#8B3A3A] opacity-[0.03]">
<iconify-icon height="256" icon="solar:shield-linear" width="256"></iconify-icon>
</div>
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 rounded-xl bg-[#8B3A3A] text-white flex items-center justify-center shadow-lg shadow-red-900/20">
<iconify-icon height="24" icon="solar:radio-minimalistic-linear" width="24"></iconify-icon>
</div>
<span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Запатентовано</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-2">Протокол экстренного реагирования</h3>
<p className="text-stone-500 leading-relaxed max-w-lg mb-8">
                        Собственная система активации SOS работает офлайн, используя GSM-триангуляцию. Скрытые режимы активации (кнопки громкости, голосовой код) гарантируют безопасность.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
<div className="text-[#8B3A3A] font-semibold text-lg mb-1">&lt; 3 сек</div>
<div className="text-xs text-stone-500">Задержка сигнала</div>
</div>
<div className="bg-stone-50 rounded-lg p-4 border border-stone-100">
<div className="text-[#8B3A3A] font-semibold text-lg mb-1">100%</div>
<div className="text-xs text-stone-500">Гарантия аптайма</div>
</div>
</div>
</div>

<div className="col-span-1 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-stone-100 text-[#8B3A3A] flex items-center justify-center mb-6">
<iconify-icon height="20" icon="solar:scale-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Юридический ИИ</h3>
<p className="text-sm text-stone-500 mb-6">
                        Автоматизированная юридическая помощь при семейных спорах, разводах и защите прав, обученная на местном законодательстве.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-stone-400">
<iconify-icon className="text-green-600" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                        Снижает расходы на 90%
                    </div>
</div>

<div className="col-span-1 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-stone-100 text-[#8B3A3A] flex items-center justify-center mb-6">
<iconify-icon height="20" icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Фин. независимость</h3>
<p className="text-sm text-stone-500 mb-6">
                        Инструменты микро-сбережений и курсы финансовой грамотности для создания подушки безопасности.
                    </p>
<div className="w-full bg-stone-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-[#8B3A3A] w-3/4 h-full rounded-full"></div>
</div>
<div className="text-[10px] text-stone-400">Удержание пользователей: Высокое</div>
</div>

<div className="col-span-1 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-stone-100 text-[#8B3A3A] flex items-center justify-center mb-6">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Доверие сообщества</h3>
<p className="text-sm text-stone-500 mb-6">
                        Анонимные сети поддержки и менторские программы для долгосрочного вовлечения и восстановления.
                    </p>
<div className="flex -space-x-2 pt-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-400"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-stone-500 text-white text-[10px] flex items-center justify-center font-medium">+4M</div>
</div>
</div>

<div className="col-span-1 bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
<div className="w-10 h-10 rounded-lg bg-stone-100 text-[#8B3A3A] flex items-center justify-center mb-6">
<iconify-icon height="20" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Здоровье (FemTech)</h3>
<p className="text-sm text-stone-500 mb-6">
                        Трекинг цикла, управление стрессом и каталог ресурсов психического здоровья с онлайн-записью.
                    </p>
<div className="text-xs font-medium text-[#8B3A3A] bg-red-50 inline-block px-2 py-1 rounded">
                        Новая вертикаль
                    </div>
</div>
</div>
</section>

<section className="bg-[#1C1917] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden animate-fade-up delay-300">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#8B3A3A] opacity-20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2 space-y-6">
<iconify-icon className="text-[#8B3A3A]" height="32" icon="solar:quote-up-linear" width="32"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-serif-logo font-light leading-snug">
                        "AiyM — это не просто приложение, это линия жизни. Оно создает инфраструктуру безопасности, которой нашему обществу не хватало десятилетиями."
                    </h2>
<div className="space-y-1">
<div className="font-medium text-white">Сара К.</div>
<div className="text-sm text-stone-400">Исполнительный директор, Партнер ООН Женщины в ЦА</div>
</div>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/5">
<div className="text-3xl font-bold text-[#8B3A3A] mb-2">Топ 10</div>
<div className="text-sm text-stone-300">Стартапов соц. влияния 2024</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/5">
<div className="text-3xl font-bold text-[#8B3A3A] mb-2">$200B</div>
<div className="text-sm text-stone-300">Общий объем рынка (TAM)</div>
</div>
<div className="col-span-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 flex items-center justify-between">
<div>
<div className="text-sm text-stone-300 mb-1">О нас пишут</div>
<div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="font-bold tracking-tighter">Forbes</span>
<span className="font-bold tracking-tighter">TechCrunch</span>
<span className="font-bold tracking-tighter">Bloomberg</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-200 pt-12 pb-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="space-y-4 max-w-xs">
<div className="flex items-center gap-2">
<svg className="w-6 h-6 text-[#8B3A3A]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#8B3A3A" stroke="none"></path>
</svg>
<span className="text-xl font-serif-logo font-bold text-[#8B3A3A]">AiyM</span>
</div>
<p className="text-sm text-stone-500">
                        Расширяем права и возможности женщин через технологии, безопасность и образование. Присоединяйтесь к созданию безопасного будущего.
                    </p>
</div>
<div className="flex gap-16">
<div className="space-y-4">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wide">Компания</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-[#8B3A3A]" href="#">О нас</a></li>
<li><a className="hover:text-[#8B3A3A]" href="#">Вакансии</a></li>
<li><a className="hover:text-[#8B3A3A]" href="#">Пресса</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wide">Ресурсы</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-[#8B3A3A]" href="#">Годовой отчет</a></li>
<li><a className="hover:text-[#8B3A3A]" href="#">Данные безопасности</a></li>
<li><a className="hover:text-[#8B3A3A]" href="#">Контакты</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wide">Соцсети</h4>
<div className="flex gap-3 text-stone-400">
<a className="hover:text-[#8B3A3A] transition-colors" href="#"><iconify-icon height="20" icon="ri:linkedin-fill" width="20"></iconify-icon></a>
<a className="hover:text-[#8B3A3A] transition-colors" href="#"><iconify-icon height="20" icon="ri:twitter-x-fill" width="20"></iconify-icon></a>
<a className="hover:text-[#8B3A3A] transition-colors" href="#"><iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 AiyM Technologies Inc. Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600" href="#">Политика конфиденциальности</a>
<a className="hover:text-stone-600" href="#">Условия использования</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
