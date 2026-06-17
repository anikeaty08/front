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
      

<header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<span className="block text-lg font-semibold tracking-tight leading-none text-slate-900">Плитка<span className="text-orange-600">Про</span></span>
<span className="text-xs text-slate-500 font-medium tracking-wide">Москва и МО</span>
</div>
</div>

<div className="hidden md:flex items-center gap-6">
<div className="flex flex-col text-right">
<span className="text-xs text-slate-500">Ежедневно с 9:00 до 21:00</span>
<a className="hover:text-orange-600 transition-colors text-sm font-semibold" href="https://wa.me/79777670334">+7 (977) 767-03-34</a>
</div>
<a className="hover:bg-slate-800 transition-colors text-sm font-medium text-white bg-slate-900 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5" href="https://wa.me/79777670334">
                        Заказать звонок
                    </a>
</div>

<div className="md:hidden">
<a className="text-slate-900 bg-slate-100 rounded-full pt-2 pr-2 pb-2 pl-2" href="https://wa.me/79777670334">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
                        Работаем без выходных
                    </div>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                        Профессиональная укладка плитки в Москве и МО — <span className="text-orange-600">от 3 дней</span>, с гарантией по договору.
                    </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Аккуратные мастера с опытом от 7 лет. Фиксированная смета до начала работ, ровные швы и соблюдение технологий. Идеальный результат без нервов.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-green-500/20 group font-medium text-white bg-[#25D366] rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg" href="https://wa.me/79777670334">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span className="">Рассчитать в WhatsApp</span>
</a>
<button className="flex gap-2 hover:border-orange-200 hover:bg-orange-50 transition-all font-medium text-slate-900 bg-white border-slate-200 border rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="document.getElementById('contact').scrollIntoView();window.location.href='https://wa.me/79777670334'" role="button">
<iconify-icon className="" icon="solar:ruler-pen-linear" width="20"></iconify-icon>
<span className="">Вызвать замерщика</span>
</button>
</div>
<p className="mt-4 text-xs text-slate-400">
                        *Выезд замерщика по Москве — бесплатно.
                    </p>
</div>
<div className="hidden lg:block relative">
<div className="absolute -inset-4 bg-orange-200/30 rounded-full blur-3xl"></div>

<img alt="Укладка плитки" className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full transform rotate-1 hover:rotate-0 transition-transform duration-500" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-500">Гарантия</div>
<div className="text-sm font-semibold text-slate-900">12 месяцев</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Наши услуги</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Выполняем полный комплекс работ: от демонтажа старого кафеля до финишной затирки швов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-orange-100 transition-all group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ванная и санузел под ключ</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Укладка плитки на пол и стены, облицовка коробов, установка люков-невидимок. Гидроизоляция мокрых зон.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Запил углов под 45°</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-orange-100 transition-all group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Пол в кухне и коридоре</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Укладка керамогранита любого формата. Работаем с диагональной раскладкой и "елочкой".</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Идеально ровная плоскость</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-orange-100 transition-all group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Ступени и лестницы</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Облицовка входных групп, крылец, лестничных маршей клинкером или керамогранитом.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Противоскользящие насечки</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-orange-100 transition-all group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:filters-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Мозаика и панно</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Работа со сложными рисунками, стеклянной и каменной мозаикой. Облицовка душевых поддонов.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Художественная точность</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-orange-100 transition-all group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sledgehammer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Подготовительные работы</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Демонтаж старого покрытия, стяжка пола, выравнивание стен штукатуркой, грунтовка.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Вывоз мусора</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-orange-100 transition-all group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fire-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Тёплый пол</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Монтаж электрических матов или кабельного тёплого пола под плиточный клей.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-1.5"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Проверка сопротивления</li>
</ul>
</div>
</div>

<div className="mt-24 pt-16 border-t border-slate-100">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Выполненные объекты</h2>
<p className="text-slate-500">Реальные фотографии объектов. Обратите внимание на качество укладки, геометрию швов и сложные примыкания.</p>
</div>
<div className="hidden md:flex gap-3">
<div className="flex items-center gap-2 text-xs text-slate-400 font-medium px-4 py-2 bg-slate-50 rounded-full">
<iconify-icon icon="solar:gesture-swipe-right-linear" width="16"></iconify-icon>
                        Листайте галерею
                    </div>
</div>
</div>

<div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>
                    /* Inline style to hide scrollbar for this container only */
                    div[style*="scrollbar-width: none"]::-webkit-scrollbar { display: none; }
                </style>

<div className="flex-none w-[85vw] sm:w-[450px] aspect-[4/3] relative rounded-2xl overflow-hidden group snap-center cursor-pointer border border-slate-100">
<img alt="Ванная лофт" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b4e5ff2-5cf5-4b34-99f6-ec64e76622c8_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase mb-3 border border-white/10">Санузел</span>
<h3 className="text-white font-medium text-lg mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Ванная в стиле лофт</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-light">ЖК "Символ", Москва • 8 м²</p>
</div>
</div>

<div className="flex-none w-[85vw] sm:w-[450px] aspect-[4/3] relative rounded-2xl overflow-hidden group snap-center cursor-pointer border border-slate-100">
<img alt="Керамогранит" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bd65a86-0c20-4ede-b4ae-d3a432bc0b8c_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<span className="inline-flex items-center text-[10px] uppercase font-semibold text-white tracking-wider bg-white/20 border-white/10 border rounded-md mb-3 pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-md">Ванная</span>
<h3 className="text-white font-medium text-lg mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Крупноформатный керамогранит</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-light">Частный дом, Барвиха • 24 м²</p>
</div>
</div>

<div className="flex-none w-[85vw] sm:w-[450px] aspect-[4/3] relative rounded-2xl overflow-hidden group snap-center cursor-pointer border border-slate-100">
<img alt="Душевая" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9659992-4d6e-4251-ae45-d296b9cea620_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase mb-3 border border-white/10">Душевая</span>
<h3 className="text-white font-medium text-lg mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Дизайнерская душевая</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-light">ЖК "Садовые Кварталы" • 4 м²</p>
</div>
</div>

<div className="flex-none w-[85vw] sm:w-[450px] aspect-[4/3] relative rounded-2xl overflow-hidden group snap-center cursor-pointer border border-slate-100">
<img alt="Коридор" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4065e08-e1bd-4f8d-86bf-25977d0c2053_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase mb-3 border border-white/10">Прихожая</span>
<h3 className="text-white font-medium text-lg mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Итальянский керамогранит</h3>
<p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-light">Одинцово • 12 м²</p>
</div>
</div>
</div>

<div className="flex md:hidden justify-center gap-2 mt-4">
<div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Стоимость работ</h2>
<p className="text-slate-400">Честные цены без скрытых накруток. Материалы считаются отдельно.</p>
</div>
<div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
<div className="divide-y divide-slate-700">
<div className="flex justify-between items-center p-6 hover:bg-slate-700/50 transition-colors">
<span className="font-medium">Укладка плитки на пол (стандарт)</span>
<span className="text-orange-400 font-semibold whitespace-nowrap">от 1200 ₽/м²</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-slate-700/50 transition-colors">
<span className="font-medium">Укладка плитки на стены</span>
<span className="text-orange-400 font-semibold whitespace-nowrap">от 1400 ₽/м²</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-slate-700/50 transition-colors">
<span className="font-medium">Керамогранит / Крупный формат</span>
<span className="text-orange-400 font-semibold whitespace-nowrap">от 1600 ₽/м²</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-slate-700/50 transition-colors">
<span className="font-medium">Мозаика</span>
<span className="text-orange-400 font-semibold whitespace-nowrap">от 2500 ₽/м²</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-slate-700/50 transition-colors">
<span className="font-medium">Запил угла под 45 градусов</span>
<span className="text-orange-400 font-semibold whitespace-nowrap">от 900 ₽/п.м.</span>
</div>
<div className="flex justify-between items-center p-6 hover:bg-slate-700/50 transition-colors">
<span className="font-medium">Демонтаж старой плитки</span>
<span className="text-orange-400 font-semibold whitespace-nowrap">от 300 ₽/м²</span>
</div>
</div>
<div className="p-8 bg-slate-800/80 text-center border-t border-slate-700">
<p className="text-sm text-slate-300 mb-6">
                        Точную стоимость назовём после бесплатного выезда замерщика или по вашим фото.
                    </p>
<a className="inline-flex items-center gap-2 hover:bg-[#20bd5a] transition-colors font-medium text-white bg-[#25D366] rounded-lg pt-3 pr-8 pb-3 pl-8" href="https://wa.me/79777670334">
<iconify-icon className="" icon="solar:camera-linear" width="20"></iconify-icon>
                        Отправить фото в WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Почему выбирают нас</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Опыт более 10 лет</h4>
<p className="text-sm text-slate-600">Наши мастера знают все нюансы работы с дорогим и сложным материалом.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-slate-900 mb-1">Официальный договор</h4>
<p className="text-sm text-slate-600">Прописываем стоимость, сроки и гарантию 1 год. Никаких сюрпризов в процессе.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Фиксированная смета</h4>
<p className="text-sm text-slate-600">Цена не меняется в процессе работы. Вы платите ровно столько, сколько договорились.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Соблюдение СНиП</h4>
<p className="text-sm text-slate-600">Работаем строго по технологии. Используем системы выравнивания плитки (СВП).</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:broom-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-slate-900 mb-1">Чистота и порядок</h4>
<p className="text-sm text-slate-600">Убираем строительный мусор после каждого этапа работ. Сдаём объект чистым.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Помощь с материалом</h4>
<p className="text-sm text-slate-600">Подскажем, где купить плитку дешевле, поможем рассчитать количество клея и затирки.</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden bg-white pt-20 pb-20">
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Отзывы клиентов</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Заказывали укладку плитки в новостройке в Мытищах. Мастера работали быстро, мусор за собой убирали. Самое главное — швы идеальные, никаких перепадов. Рекомендую!"</p>
<div>
<div className="font-semibold text-slate-900">Александр П.</div>
<div className="text-xs text-slate-400">г. Мытищи, ремонт ванной</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Нужно было переложить плитку на кухне после протечки. Приехали на следующий день, всё посчитали. Сделали за 2 дня, очень аккуратно. Цена адекватная."</p>
<div>
<div className="font-semibold text-slate-900">Елена В.</div>
<div className="text-xs text-slate-400">Москва, район Митино</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">"Делали крыльцо в загородном доме. Плитка клинкерная, сложная. Мастера справились отлично, ступени ровные, вода не застаивается. Спасибо!"</p>
<div className="">
<div className="font-semibold text-slate-900">Дмитрий С.</div>
<div className="text-xs text-slate-400">МО, д. Жуковка</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-700 mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Работаем по всей Москве и Московской области</h3>
<p className="text-slate-500 text-sm max-w-3xl mx-auto mb-6">
                Выезжаем во все районы Москвы и города МО: Химки, Мытищи, Долгопрудный, Королев, Балашиха, Реутов, Люберцы, Видное, Одинцово, Красногорск и другие (до 80 км от МКАД).
            </p>
</div>
</section>

<section className="overflow-hidden text-white bg-slate-900 pt-20 pb-20 relative" id="contact">

<div className="absolute -right-20 top-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Оставьте заявку на расчёт</h2>
<p className="text-slate-400 mb-10 text-lg">
                        Свяжитесь с нами любым удобным способом. Отвечаем быстро, консультируем бесплатно.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Телефон</div>
<a className="hover:text-orange-400 transition-colors text-xl font-semibold" href="https://wa.me/79777670334">+7 (977) 767-03-34</a>
<div className="text-xs text-slate-500 mt-1">Звоните с 9:00 до 21:00</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-green-500 shrink-0">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Мессенджеры</div>
<div className="flex gap-4">
<a className="hover:text-green-400 transition-colors underline decoration-slate-700 underline-offset-4" href="https://wa.me/79777670334">WhatsApp</a>
</div>
<div className="text-xs text-slate-500 mt-1">С 9:00-21:00</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm">© 2026 ПлиткаПро. Все права защищены.</div>
<div className="text-xs">
                Политика конфиденциальности
            </div>
</div>
</footer>

    </>
  );
}
