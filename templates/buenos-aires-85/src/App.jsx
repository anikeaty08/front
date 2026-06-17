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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-1 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
                EVGENIA<span className="text-zinc-500">.BA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#tours">Экскурсии</a>
<a className="hover:text-white transition-colors" href="#about">Обо мне</a>
<a className="hover:text-white transition-colors" href="#reviews">Отзывы</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors" href="#contact">
                Записаться
            </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 max-w-6xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-6 backdrop-blur-md">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Индивидуальные туры по Аргентине</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Буэнос-Айрес <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">глазами инсайдера</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light mb-10 max-w-xl leading-relaxed">
                Откройте для себя "Париж Южной Америки" без шаблонных маршрутов. Архитектура, танго, гастрономия и скрытые жемчужины города в компании профессионального гида.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all active:scale-95" href="#tours">
                    Выбрать маршрут
                </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-zinc-700 text-white font-medium text-sm hover:bg-white/5 transition-all" href="#about">
                    Познакомиться
                </a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Уникальные маршруты</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Забудьте о скучных датах. Мы исследуем город через истории людей, запахи кофе и ритмы улиц.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Индивидуальный подход</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Программа адаптируется под ваши интересы. Любите искусство? Вино? Историю? Мы найдем это.
                </p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Помощь с фото</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Я знаю лучшие локации для снимков и с удовольствием помогу сохранить воспоминания на фото.
                </p>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="tours">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Авторские экскурсии</h2>
<p className="text-zinc-400 text-sm">Выберите свое идеальное знакомство с городом</p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors self-start md:self-auto" href="#">
                Посмотреть все программы
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative flex flex-col bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-48 w-full bg-gradient-to-br from-blue-900/40 to-indigo-900/20 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                        4 часа
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-medium text-white mb-2">Классический Буэнос-Айрес</h3>
<p className="text-sm text-zinc-400 mb-6 flex-1 line-clamp-3">
                        Основные достопримечательности: Майская площадь, Розовый дом, Обелиск и театр Колон. Идеально для первого знакомства.
                    </p>
<div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
<span className="text-sm font-medium text-white">$120 <span className="text-zinc-500 font-normal">/ группа</span></span>
<button className="text-zinc-300 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-48 w-full bg-gradient-to-br from-emerald-900/40 to-teal-900/20 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612294037637-ec328d0e075e?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                        3 часа
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-medium text-white mb-2">Богемный Палермо и Стрит-арт</h3>
<p className="text-sm text-zinc-400 mb-6 flex-1 line-clamp-3">
                        Прогулка по самому стильному району. Граффити, дизайнерские магазины, парки и лучшие кофейни города.
                    </p>
<div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
<span className="text-sm font-medium text-white">$90 <span className="text-zinc-500 font-normal">/ группа</span></span>
<button className="text-zinc-300 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="h-48 w-full bg-gradient-to-br from-purple-900/40 to-pink-900/20 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545644686-3532f4e3c921?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                        5 часов
                    </div>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="text-lg font-medium text-white mb-2">Ла Бока и Сан-Тельмо</h3>
<p className="text-sm text-zinc-400 mb-6 flex-1 line-clamp-3">
                        Душа старого города. Цветные домики Каминито, антикварные рынки, история танго и колониальная архитектура.
                    </p>
<div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
<span className="text-sm font-medium text-white">$140 <span className="text-zinc-500 font-normal">/ группа</span></span>
<button className="text-zinc-300 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
<img alt="Евгения Гид" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-medium">Евгения</p>
<p className="text-xs text-zinc-400">Лицензированный гид</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-zinc-600"></span>
<span className="text-xs uppercase tracking-widest text-zinc-400">Обо мне</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    Влюбляю в Аргентину <br/>с первого шага
                </h2>
<div className="space-y-6 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
<p>
                        Привет! Меня зовут Евгения. Я живу в Буэнос-Айресе уже более 7 лет и считаю этот город одним из самых удивительных мест на планете.
                    </p>
<p>
                        Моя цель — не просто показать вам достопримечательности из путеводителя, а погрузить вас в атмосферу настоящей аргентинской жизни. Мы будем пить мате, обсуждать политику и футбол, пробовать лучшее мясо и наслаждаться архитектурой.
                    </p>
</div>
<div className="mt-8 flex gap-8">
<div>
<p className="text-3xl font-medium text-white">7+</p>
<p className="text-xs text-zinc-500 mt-1">Лет в стране</p>
</div>
<div>
<p className="text-3xl font-medium text-white">500+</p>
<p className="text-xs text-zinc-500 mt-1">Экскурсий</p>
</div>
<div>
<p className="text-3xl font-medium text-white">4.9</p>
<p className="text-xs text-zinc-500 mt-1">Рейтинг</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-xl mx-auto px-6" id="contact">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Забронировать тур</h2>
<p className="text-sm text-zinc-400">Оставьте заявку, и я свяжусь с вами в течение часа для обсуждения деталей.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-500 ml-1">Имя</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700" placeholder="Иван Петров" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 ml-1">Контакты (WhatsApp/TG)</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700" placeholder="+7 999 000 00 00" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 ml-1">Желаемая экскурсия</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
<option>Классический Буэнос-Айрес</option>
<option>Богемный Палермо</option>
<option>Ла Бока и Сан-Тельмо</option>
<option>Индивидуальный маршрут</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 ml-1">Дата и пожелания</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-700 resize-none" placeholder="Укажите желаемую дату и количество человек..." rows="3"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-zinc-700 rounded bg-zinc-900 checked:bg-white checked:border-white transition-all cursor-pointer" id="policy" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<label className="text-xs text-zinc-500 cursor-pointer select-none" htmlFor="policy">
                    Я согласен на обработку персональных данных
                </label>
</div>
<button className="w-full bg-white text-zinc-950 font-medium py-3 rounded-lg hover:bg-zinc-200 transition-all active:scale-[0.99] flex items-center justify-center gap-2" type="button">
<span>Отправить заявку</span>
<iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<a className="text-white text-base font-medium tracking-tighter mb-2" href="#">EVGENIA.BA</a>
<p className="text-xs text-zinc-600">Ваш проводник в Аргентине</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-telegram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-whatsapp-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 text-center md:text-left border-t border-white/5 pt-8">
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">© 2023 Evgenia Tours. Buenos Aires.</p>
</div>
</footer>

    </>
  );
}
