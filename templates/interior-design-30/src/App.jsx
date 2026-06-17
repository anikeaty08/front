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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-zinc-900 flex items-center gap-2" href="#">
                A R C H I T E C T U R E
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Услуги</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#portfolio">Портфолио</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">О студии</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#advantages">Преимущества</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-900" href="tel:+79990000000">+7 (999) 000-00-00</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-normal text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors" href="#contact">
                    Оставить заявку
                </a>
</div>
<button className="md:hidden text-zinc-900 flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-normal text-zinc-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                        Студия дизайна премиум-класса
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
                        Создаем стильные интерьеры, в которых хочется жить
                    </h1>
<p className="text-lg text-zinc-500 mt-6 leading-relaxed">
                        Продуманные пространства для жизни, комфорта и статуса. От разработки архитектурной концепции до финального декора и комплектации под ключ.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mt-10">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-normal text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors w-full sm:w-auto" href="#portfolio">
                            Смотреть портфолио
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-normal text-zinc-900 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors w-full sm:w-auto" href="#contact">
                            Получить консультацию
                        </a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-zinc-100">
<div>
<div className="text-2xl tracking-tight font-medium text-zinc-900">10+</div>
<div className="text-xs text-zinc-500 mt-1">лет опыта</div>
</div>
<div>
<div className="text-2xl tracking-tight font-medium text-zinc-900">150+</div>
<div className="text-xs text-zinc-500 mt-1">проектов</div>
</div>
<div>
<div className="text-2xl tracking-tight font-medium text-zinc-900">100%</div>
<div className="text-xs text-zinc-500 mt-1">сдача в срок</div>
</div>
<div>
<div className="text-2xl tracking-tight font-medium text-zinc-900">5</div>
<div className="text-xs text-zinc-500 mt-1">лет гарантии</div>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden bg-zinc-100">
<img alt="Premium Interior Design" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<img alt="Detail 1" className="rounded-xl w-full h-64 object-cover shadow-sm" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2900&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 2" className="rounded-xl w-full h-80 object-cover shadow-sm" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2158&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Detail 3" className="rounded-xl w-full h-80 object-cover shadow-sm" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="rounded-xl w-full h-64 bg-zinc-200/50 flex items-center justify-center border border-zinc-200">
<iconify-icon className="text-4xl text-zinc-400" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-6">
                        Искусство создавать пространство, отражающее ваш характер
                    </h2>
<p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
                        Мы убеждены, что премиальный интерьер — это не просто дорогие материалы. Это безупречная эргономика, внимание к деталям и абсолютный комфорт. Наша команда берет на себя весь цикл работ: от первого эскиза до расстановки декора в готовой квартире.
                    </p>
<p className="text-sm md:text-base text-zinc-600 leading-relaxed mb-10">
                        Вы избавлены от общения со строителями, поиска материалов и контроля поставок. Мы создаем процесс, в котором ремонт становится для вас приятным ожиданием, а не источником стресса.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-zinc-700">Точное соответствие реализации 3D-визуализациям</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-zinc-700">Прозрачная смета без скрытых платежей</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-zinc-700">Собственные проверенные строительные бригады</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors group" href="#contact">
                        Узнать больше о нашем подходе
                        <iconify-icon className="ml-2 transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="advantages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-4">
                    Почему выбирают нас
                </h2>
<p className="text-sm text-zinc-500">
                    Мы обеспечиваем высочайший уровень сервиса на каждом этапе создания вашего идеального интерьера.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Индивидуальный концепт</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Не используем шаблоны. Каждый проект создается с нуля под ваш образ жизни, привычки и эстетические предпочтения.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Ремонт под ключ</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Берем на себя всю ответственность: от чертежей и согласования планировки до закупки мебели и клининга перед сдачей.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Авторский надзор</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Регулярно посещаем объект, контролируем строителей и следим за тем, чтобы реализация точно соответствовала проекту.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Прозрачный бюджет</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Составляем детализированную смету до начала работ. Вы точно знаете, сколько стоит каждый этап и элемент интерьера.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Свои строители</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Работаем только с проверенными узкопрофильными специалистами, которые умеют читать сложные чертежи.
                    </p>
</div>

<div className="p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
<iconify-icon className="text-2xl text-zinc-700" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3">Премиальные бренды</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Прямые контракты с фабриками Италии, Германии и Испании. Комплектуем объекты эксклюзивной мебелью на выгодных условиях.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">
                        Готовы обсудить ваш будущий интерьер?
                    </h2>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-10 max-w-md">
                        Оставьте заявку на бесплатную консультацию. Мы свяжемся с вами, обсудим задачи, сроки и рассчитаем предварительную стоимость проекта.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-xl text-zinc-300" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Позвоните нам</div>
<a className="text-sm font-medium hover:text-zinc-300 transition-colors" href="tel:+79990000000">+7 (999) 000-00-00</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-xl text-zinc-300" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1">Напишите нам</div>
<a className="text-sm font-medium hover:text-zinc-300 transition-colors" href="mailto:hello@architecture.com">hello@architecture.com</a>
</div>
</div>
</div>
</div>
<div className="bg-zinc-800/50 border border-zinc-700 p-8 md:p-10 rounded-2xl backdrop-blur-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="name">Ваше имя</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="name" placeholder="Александр" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="phone">Телефон</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="phone" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="type">Тип объекта</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all appearance-none" id="type">
<option className="text-zinc-600" disabled="" selected="" value="">Выберите тип объекта</option>
<option value="apartment">Квартира</option>
<option value="house">Загородный дом</option>
<option value="commercial">Коммерческое помещение</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-400" htmlFor="area">Площадь (м²)</label>
<div className="flex items-center gap-4">
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-white" id="area" max="500" min="30" type="range" value="100"/>
<span className="text-sm font-medium w-12 text-right">100</span>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-normal text-zinc-900 bg-white rounded-lg hover:bg-zinc-100 transition-colors mt-4" type="button">
                            Отправить заявку
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-500 text-center mt-4">
                            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-lg font-medium tracking-tighter uppercase text-zinc-900">
                A R C H I T E C T U R E
            </div>
<p className="text-xs text-zinc-400">
                © 2024 Architecture Studio. Все права защищены.
            </p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:paperclip-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
