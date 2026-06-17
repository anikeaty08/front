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
      

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100/80 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20 gap-8">

<a className="flex-shrink-0 flex items-center" href="#">
<span className="font-serif text-xl tracking-tighter uppercase text-slate-900 font-medium leading-none">
                        Tsaitel<br/><span className="text-sm tracking-widest text-slate-500">Law</span>
</span>
</a>

<nav className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5" href="#">Главная</a>

<div className="relative group cursor-pointer flex items-center gap-1">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors pb-0.5" href="#">Услуги</a>
<iconify-icon className="text-xs text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors pb-0.5" href="#">О нас</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors pb-0.5" href="#">Контакты</a>
</nav>

<div className="flex items-center gap-6 lg:gap-8 ml-auto">

<div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-400">
<button className="text-slate-900 transition-colors">RU</button>
<span>/</span>
<button className="hover:text-slate-900 transition-colors">HE</button>
<span>/</span>
<button className="hover:text-slate-900 transition-colors">EN</button>
</div>
<div className="h-4 w-px bg-slate-200 hidden lg:block"></div>

<div className="flex items-center gap-4">
<a className="flex flex-col items-end group" href="tel:+972000000000">
<span className="text-xs text-slate-400 mb-0.5 uppercase tracking-wider hidden sm:block">Горячая линия</span>
<span className="text-base font-medium text-slate-900 tracking-tight group-hover:text-amber-700 transition-colors">
                                +972 50 000 0000
                            </span>
</a>

<div className="hidden sm:flex items-center gap-2">
<a aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-green-600 hover:bg-green-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear"></iconify-icon>
</a>
<a aria-label="Telegram" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<a className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-[2px] hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-sm" href="#consultation">
                        Получить консультацию
                    </a>

<button className="md:hidden text-slate-900 p-2 -mr-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-white flex flex-col items-center">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium tracking-widest uppercase text-amber-700/80 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600/60"></span>
                    Премиальная юридическая практика
                </span>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tighter text-slate-900 leading-[1.1] mb-8">
                    Профессиональная юридическая помощь в Израиле
                </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 font-light leading-relaxed">
                    Сделки с недвижимостью, коммерческое право и бескомпромиссная защита ваших интересов на высшем уровне.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-slate-900 rounded-[2px] hover:bg-slate-800 transition-all shadow-sm group gap-2" href="#consultation">
                        Оставить заявку
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-900 bg-transparent border border-slate-200 rounded-[2px] hover:border-slate-300 hover:bg-slate-50 transition-all" href="#services">
                        Наши услуги
                    </a>
</div>
</div>

<div className="w-full max-w-7xl mx-auto px-6 lg:px-8 mt-20 lg:mt-32 relative z-10">
<div className="w-full h-[40vh] md:h-[60vh] rounded-sm overflow-hidden relative bg-slate-100 flex items-center justify-center border border-slate-200/50 shadow-2xl shadow-slate-200/50 group">

<img alt="Панорама Тель-Авива" className="w-full h-full object-cover filter grayscale opacity-90 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1590523292437-db5e4d27e997?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent mix-blend-screen"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-sm pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100 relative z-20 -mt-8 mx-6 lg:mx-auto max-w-6xl rounded-sm shadow-sm">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center text-center p-6">
<div className="font-serif text-4xl lg:text-5xl tracking-tighter text-slate-900 mb-2">15+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest font-medium">Лет опыта</div>
</div>
<div className="flex flex-col items-center justify-center text-center p-6">
<div className="font-serif text-4xl lg:text-5xl tracking-tighter text-slate-900 mb-2">98%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest font-medium">Успешных дел</div>
</div>
<div className="flex flex-col items-center justify-center text-center p-6">
<div className="font-serif text-4xl lg:text-5xl tracking-tighter text-slate-900 mb-2">₪2B+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest font-medium">Объем сделок</div>
</div>
<div className="flex flex-col items-center justify-center text-center p-6">
<div className="font-serif text-4xl lg:text-5xl tracking-tighter text-slate-900 mb-2">500+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest font-medium">Довольных клиентов</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50/50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
<div className="max-w-2xl">
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tighter text-slate-900 mb-6">Компетенции</h2>
<p className="text-base text-slate-500 leading-relaxed font-light">Мы специализируемся на сложных правовых вопросах, требующих глубокой экспертизы, безупречного знания израильского законодательства и стратегического подхода.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group whitespace-nowrap" href="#">
                        Все услуги <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white p-8 lg:p-10 border border-slate-100 rounded-sm hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-8 text-amber-700/80 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif tracking-tight text-slate-900 mb-4">Недвижимость</h3>
<p className="text-sm text-slate-500 leading-relaxed flex-grow font-light">Полное юридическое сопровождение сделок с коммерческой и жилой недвижимостью. Проверка чистоты объекта, договоры аренды и купли-продажи.</p>
<div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
<span className="text-xs font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Подробнее</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="bg-white p-8 lg:p-10 border border-slate-100 rounded-sm hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-8 text-amber-700/80 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:case-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif tracking-tight text-slate-900 mb-4">Коммерческое право</h3>
<p className="text-sm text-slate-500 leading-relaxed flex-grow font-light">Регистрация компаний, составление контрактов, партнерские соглашения и комплексное юридическое обслуживание бизнеса в Израиле.</p>
<div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
<span className="text-xs font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Подробнее</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="bg-white p-8 lg:p-10 border border-slate-100 rounded-sm hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-8 text-amber-700/80 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif tracking-tight text-slate-900 mb-4">Судебное представительство</h3>
<p className="text-sm text-slate-500 leading-relaxed flex-grow font-light">Защита интересов в судах всех инстанций. Разрешение корпоративных споров, арбитраж и медиация.</p>
<div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
<span className="text-xs font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Подробнее</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter text-slate-900 mb-4">Репутация, подтвержденная делом</h2>
<p className="text-sm text-slate-500 max-w-xl font-light">Нам доверяют клиенты со всего мира решение самых деликатных и сложных задач на территории Израиля.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 lg:p-10 bg-slate-50 rounded-sm flex flex-col">
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed mb-8 flex-grow font-serif italic">«Высочайший уровень профессионализма. Сделка по покупке коммерческой недвижимости в Тель-Авиве прошла безупречно благодаря детальному аудиту документов. Никаких скрытых рисков.»</p>
<div>
<div className="text-sm font-medium text-slate-900">Инвестиционная компания</div>
<div className="text-xs text-slate-500 mt-1">Клиент из Европы</div>
</div>
</div>

<div className="p-8 lg:p-10 bg-slate-50 rounded-sm flex flex-col">
<div className="flex gap-1 text-amber-500 mb-6">
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-lg fill-current" icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
<p className="text-base text-slate-700 leading-relaxed mb-8 flex-grow font-serif italic">«Обратились за решением корпоративного спора. Стратегия, предложенная адвокатами, позволила урегулировать конфликт в досудебном порядке с максимальной выгодой для нас.»</p>
<div>
<div className="text-sm font-medium text-slate-900">Конфиденциально</div>
<div className="text-xs text-slate-500 mt-1">IT Сектор, США</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                        Смотреть отзывы на Google Maps
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2">
<a className="inline-block mb-6" href="#">
<span className="font-serif text-2xl tracking-tighter uppercase text-slate-900 font-medium leading-none">
                            Tsaitel<br/><span className="text-base tracking-widest text-slate-500">Law</span>
</span>
</a>
<p className="text-sm text-slate-500 max-w-sm font-light mb-6">
                        Премиальные юридические услуги в Израиле. Надежность, конфиденциальность и результат для клиентов со всего мира.
                    </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:whatsapp-linear"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-slate-900 mb-6">Навигация</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">Главная</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Услуги</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Контакты</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest uppercase text-slate-900 mb-6">Связь</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="tel:+972000000000">+972 50 000 0000</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="mailto:office@tsaitellaw.com">office@tsaitellaw.com</a></li>
<li className="pt-2">Тель-Авив, Израиль<br/><span className="text-xs text-slate-400">(Только по предварительной записи)</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2024 Tsaitel Law. Все права защищены.</p>
<div className="flex gap-4 text-xs text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-900 transition-colors" href="#">Условия использования</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
