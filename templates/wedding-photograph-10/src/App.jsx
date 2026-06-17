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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase text-neutral-900" href="#">RITA</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#portfolio">Портфолио</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">Обо мне</a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">Форматы</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" href="#contact">
                    Связаться
                </a>
<button className="md:hidden text-neutral-900 flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
<div className="w-full md:w-1/2 space-y-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-neutral-900">
                    Искренние истории <br/><span className="text-neutral-400">вашей любви</span>
</h1>
<p className="text-base lg:text-lg text-neutral-500 max-w-md leading-relaxed">
                    Я создаю живые, эмоциональные и эстетичные кадры, которые останутся с вами на всю жизнь. Снимаю в Москве и по всему миру.
                </p>
<div className="pt-2 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" href="#portfolio">
                        Смотреть работы
                    </a>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors" href="#contact">
                        Узнать свободную дату
                    </a>
</div>
</div>
<div className="w-full md:w-1/2 aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden relative bg-neutral-100">
<img alt="Свадебная пара" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-100" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Избранное</h2>
<p className="text-sm text-neutral-500 mt-2">Моменты, которые хочется пересматривать.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors" href="#">
                    Все серии
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-200">
<img alt="Свадьба" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-200">
<img alt="Детали" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-200">
<img alt="Портрет" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-200">
<img alt="Пара" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-200">
<img alt="Церемония" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="break-inside-avoid relative group overflow-hidden rounded-xl bg-neutral-200">
<img alt="Эмоции" className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-100" id="about">
<div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
<div className="w-full md:w-5/12 aspect-square rounded-full overflow-hidden border border-neutral-100 bg-neutral-50 relative">
<img alt="Фотограф Рита" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full md:w-7/12 space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Привет, я Рита</h2>
<div className="space-y-4 text-base text-neutral-500 leading-relaxed">
<p>Для меня фотография — это не просто красивая картинка. Это способ сохранить ваше состояние, атмосферу дня, неуловимые взгляды и прикосновения.</p>
<p>Я не заставляю позировать, если вам это не свойственно. Моя задача — стать вашим другом на этот день, чтобы вы чувствовали себя легко, непринужденно и могли быть собой.</p>
<p>Снимаю на цифру и пленку, ценю минимализм, естественный свет и вневременную классику, которая будет смотреться стильно и актуально даже через 20 лет.</p>
</div>
<div className="pt-4 flex gap-6">
<div className="space-y-1">
<span className="block text-2xl font-medium tracking-tight text-neutral-900">7+</span>
<span className="block text-xs text-neutral-400 uppercase tracking-widest">Лет опыта</span>
</div>
<div className="space-y-1">
<span className="block text-2xl font-medium tracking-tight text-neutral-900">200+</span>
<span className="block text-xs text-neutral-400 uppercase tracking-widest">Свадеб</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-100" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Инвестиции в воспоминания</h2>
<p className="text-sm text-neutral-500 mt-3">Выберите подходящий формат для вашего события.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Камерная свадьба</h3>
<div className="mt-4 mb-8">
<span className="text-3xl font-medium tracking-tight text-neutral-900">от 40 000 ₽</span>
</div>
<ul className="space-y-4 text-sm text-neutral-600 flex-grow mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>До 5 часов съемки</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>От 250 фото в авторской обработке</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Анонс из 15 фото в течение 3 дней</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Закрытая онлайн-галерея</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-md bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors" href="#contact">Выбрать</a>
</div>

<div className="p-8 rounded-2xl bg-neutral-900 text-white flex flex-col relative overflow-hidden shadow-lg">
<div className="absolute top-0 right-0 p-4">
<span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">Популярный</span>
</div>
<h3 className="text-lg font-medium tracking-tight">Классика</h3>
<div className="mt-4 mb-8">
<span className="text-3xl font-medium tracking-tight">от 80 000 ₽</span>
</div>
<ul className="space-y-4 text-sm text-neutral-300 flex-grow mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>До 10 часов съемки</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>От 500 фото в авторской обработке</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Анонс из 30 фото в течение 3 дней</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Съемка на пленку (1 катушка)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Закрытая онлайн-галерея</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors" href="#contact">Выбрать</a>
</div>

<div className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Максимум</h3>
<div className="mt-4 mb-8">
<span className="text-3xl font-medium tracking-tight text-neutral-900">от 120 000 ₽</span>
</div>
<ul className="space-y-4 text-sm text-neutral-600 flex-grow mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Полный день (до 14 часов)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>От 800 фото в обработке</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Работа второго фотографа</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Фотокнига 25x25 (20 разворотов)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Love Story в подарок</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center h-10 rounded-md bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors" href="#contact">Выбрать</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Давайте создадим красоту вместе</h2>
<p className="text-sm text-neutral-500 mt-3">Напишите мне, чтобы узнать о свободных датах и деталях съемки.</p>
</div>
<form className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-widest">Имя</label>
<input className="w-full h-11 px-3 rounded-md border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all bg-neutral-50/50" placeholder="Как к вам обращаться" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-widest">Контакты</label>
<input className="w-full h-11 px-3 rounded-md border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all bg-neutral-50/50" placeholder="Телефон или Telegram" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-widest">Дата</label>
<input className="w-full h-11 px-3 rounded-md border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all bg-neutral-50/50 appearance-none" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-widest">Локация</label>
<input className="w-full h-11 px-3 rounded-md border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all bg-neutral-50/50" placeholder="Город, площадка" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-700 uppercase tracking-widest">Детали</label>
<textarea className="w-full p-3 rounded-md border border-neutral-200 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400 transition-all bg-neutral-50/50 resize-none" placeholder="Расскажите о формате свадьбы, ваших пожеланиях..." rows="4"></textarea>
</div>
<button className="w-full h-11 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" type="button">
                    Отправить запрос
                </button>
<p className="text-xs text-center text-neutral-400 pt-2">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>
</section>

<footer className="py-12 border-t border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-lg font-semibold tracking-tighter uppercase text-neutral-900" href="#">RITA</a>
<div className="flex items-center gap-6 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Telegram</a>
<a className="hover:text-neutral-900 transition-colors" href="#">WhatsApp</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Instagram</a>
</div>
<div className="text-xs text-neutral-400">
                © 2024 Rita Photography.
            </div>
</div>
</footer>

    </>
  );
}
