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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<iconify-icon className="text-zinc-400" height="20" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
                DTLNG.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#services">Услуги</a>
<a className="hover:text-zinc-100 transition-colors" href="#portfolio">Работы</a>
<a className="hover:text-zinc-100 transition-colors" href="#about">О студии</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="tel:+79991234567">
                    +7 (999) 123-45-67
                </a>
<a className="text-xs font-medium bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full hover:bg-white transition-colors flex items-center gap-2" href="#contact">
                    Записаться
                </a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 relative overflow-hidden">
<div className="hero-glow"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/50 bg-zinc-900/30 text-xs font-medium text-zinc-400 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></span>
                Свободно 2 места на этой неделе
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500 max-w-4xl mb-6">
                Искусство сохранения<br/>совершенства.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 font-normal">
                Премиальный уход за вашим автомобилем. Полиуретановая пленка, керамические покрытия и детальная химчистка с вниманием к каждому микрону.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto text-sm font-medium bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                    Рассчитать стоимость
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-medium text-zinc-300 px-6 py-3 rounded-full border border-zinc-800 hover:bg-zinc-900 hover:text-zinc-100 transition-all flex items-center justify-center" href="#services">
                    Изучить услуги
                </a>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mt-20">
<div className="aspect-[21/9] rounded-2xl border border-zinc-800/50 bg-zinc-900/20 relative overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>

<div className="relative z-0 w-3/4 h-3/4 border border-zinc-800/80 rounded-full flex items-center justify-center">
<div className="w-2/3 h-2/3 border border-zinc-700/50 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
<div className="w-1/2 h-1/2 border border-zinc-600/30 rounded-full bg-gradient-to-br from-zinc-800/20 to-transparent backdrop-blur-sm"></div>
</div>
</div>
<div className="absolute z-20 bottom-8 left-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-300" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-zinc-200">Гарантия 5 лет</p>
<p className="text-xs text-zinc-500">На полиуретановые пленки</p>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-4">Наши направления</h2>
<p className="text-base text-zinc-400 max-w-xl">Мы используем только премиальную химию и материалы от ведущих мировых производителей для достижения эталонного результата.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<iconify-icon className="text-zinc-300" height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Антигравийная защита</h3>
<p className="text-sm text-zinc-400 mb-6 flex-grow">Оклейка кузова прозрачной или матовой полиуретановой пленкой. Защита от сколов, царапин и химии.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors mt-auto">
                        Подробнее <iconify-icon className="ml-1" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<iconify-icon className="text-zinc-300" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Керамические покрытия</h3>
<p className="text-sm text-zinc-400 mb-6 flex-grow">Нанесение нанокерамики на кузов, диски и кожу. Глубокий цвет, гидрофобный эффект и защита от УФ.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors mt-auto">
                        Подробнее <iconify-icon className="ml-1" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<iconify-icon className="text-zinc-300" height="24" icon="solar:sofa-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Детейлинг химчистка</h3>
<p className="text-sm text-zinc-400 mb-6 flex-grow">Глубокая очистка всех элементов салона с разбором. Устранение запахов, пятен и консервация пластика.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors mt-auto">
                        Подробнее <iconify-icon className="ml-1" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<iconify-icon className="text-zinc-300" height="24" icon="solar:waterdrop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Трехфазная мойка</h3>
<p className="text-sm text-zinc-400 mb-6 flex-grow">Бережная ручная мойка кузова в 3 этапа. Очистка труднодоступных мест кистями, сушка турбосушкой.</p>
<div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors mt-auto">
                        Подробнее <iconify-icon className="ml-1" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-[#0a0a0c]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-12 text-center">Почему выбирают нас</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-zinc-800 absolute top-8 right-8" height="48" icon="solar:buildings-linear" width="48"></iconify-icon>
<div className="relative z-10 mt-32">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-2">Оборудованная студия</h3>
<p className="text-sm text-zinc-400 max-w-md">Идеальное освещение, система очистки воды и климат-контроль для соблюдения технологических процессов на 100%.</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 flex flex-col">
<iconify-icon className="text-zinc-300 mb-8" height="32" icon="solar:medal-star-circle-linear" width="32"></iconify-icon>
<div className="mt-auto">
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Опыт 7 лет</h3>
<p className="text-sm text-zinc-400">Специалисты прошли стажировку в ведущих академиях Европы.</p>
</div>
</div>

<div className="p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 flex flex-col">
<iconify-icon className="text-zinc-300 mb-8" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
<div className="mt-auto">
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Фотоотчет</h3>
<p className="text-sm text-zinc-400">Предоставляем детальный отчет о каждом этапе проделанной работы.</p>
</div>
</div>

<div className="md:col-span-2 p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 flex items-center justify-between gap-8">
<div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Закрытая парковка</h3>
<p className="text-sm text-zinc-400 max-w-sm">Ваш автомобиль находится под круглосуточной охраной и видеонаблюдением.</p>
</div>
<div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-950 shrink-0">
<iconify-icon className="text-zinc-300" height="24" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-zinc-900/20"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-zinc-500 mb-6" height="40" icon="solar:letter-opened-linear" width="40"></iconify-icon>
<h2 className="text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Готовы преобразить ваш автомобиль?</h2>
<p className="text-base text-zinc-400 mb-10">Оставьте контактные данные, и наш мастер свяжется с вами для бесплатной консультации и оценки стоимости работ.</p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<div className="relative w-full">
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder-zinc-600" placeholder="Ваш телефон" type="text"/>
</div>
<button className="w-full sm:w-auto shrink-0 bg-zinc-100 text-zinc-950 text-sm font-medium px-6 py-3 rounded-xl hover:bg-white transition-colors" type="button">
                    Отправить
                </button>
</form>
<p className="text-xs text-zinc-600 mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</div>
</section>

<footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-zinc-500" height="20" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
                        DTLNG.
                    </a>
<p className="text-zinc-500 text-xs mb-6 max-w-xs">
                        Студия профессионального детейлинга. Сохраняем эстетику и инвестиции в ваш автомобиль.
                    </p>
</div>
<div>
<h4 className="font-medium text-zinc-100 mb-4">Услуги</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Оклейка пленкой</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Керамика</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Химчистка</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Полировка</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-100 mb-4">Студия</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Портфолио</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Прайс-лист</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Контакты</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-100 mb-4">Контакты</h4>
<ul className="space-y-3 text-zinc-500">
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                            г. Москва, ул. Примерная, 12с3
                        </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                            +7 (999) 123-45-67
                        </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
                            Ежедневно, 10:00 - 21:00
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
<p>© 2024 DTLNG. Все права защищены.</p>
<div className="flex items-center gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Telegram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">WhatsApp</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
