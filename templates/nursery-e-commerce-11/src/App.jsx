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

        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            }
        }
    
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
      

<div className="fixed inset-0 z-50 bg-white transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col" id="mobile-menu">
<div className="p-6 flex justify-between items-center border-b border-zinc-100">
<span className="text-lg font-bold tracking-tight text-emerald-900">GARDENS.</span>
<button className="p-2 text-zinc-500" onclick="toggleMenu()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>
<div className="p-6 flex flex-col gap-6 text-lg font-medium">
<a className="text-zinc-900" href="#">Главная</a>
<a className="text-zinc-600" href="#catalog">Каталог</a>
<a className="text-zinc-600" href="#wholesale">Оптовикам</a>
<a className="text-zinc-600" href="#about">О компании</a>
<a className="text-zinc-600" href="#contacts">Контакты</a>
</div>
<div className="mt-auto p-6 border-t border-zinc-100">
<div className="flex items-center gap-4 mb-4">
<span className="text-sm font-medium text-zinc-500">Язык:</span>
<button className="text-sm font-semibold text-emerald-700">RU</button>
<button className="text-sm text-zinc-400">KG</button>
</div>
<a className="flex items-center gap-2 text-zinc-900 font-medium mb-2" href="tel:+996555000000">
<i className="w-4 h-4" data-lucide="phone"></i> +996 (555) 00-00-00
            </a>
</div>
</div>

<div className="bg-emerald-950 text-emerald-50 text-xs py-2 px-4 md:px-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="hidden sm:inline">Оптовая и розничная продажа саженцев</span>
<a className="hover:text-white transition-colors" href="mailto:info@gardens.kg">info@gardens.kg</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Доставка и оплата</a>
<span className="text-emerald-800">|</span>
<a className="hover:text-white" href="#">Блог</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center text-white">
<span className="font-bold text-lg">G</span>
</div>
<div className="flex flex-col">
<span className="text-base font-bold tracking-tight text-zinc-900 leading-none">GARDENS</span>
<span className="text-[10px] font-medium tracking-widest text-zinc-500 uppercase leading-none mt-0.5">Consulting</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="text-zinc-900 hover:text-emerald-700 transition-colors" href="#">Главная</a>
<a className="hover:text-emerald-700 transition-colors" href="#catalog">Каталог</a>
<a className="hover:text-emerald-700 transition-colors" href="#wholesale">Оптовикам</a>
<a className="hover:text-emerald-700 transition-colors" href="#about">О компании</a>
<a className="hover:text-emerald-700 transition-colors" href="#contacts">Контакты</a>
</div>

<div className="flex items-center gap-3 md:gap-4">
<div className="hidden sm:flex items-center bg-zinc-100 rounded-full px-3 py-1.5 border border-zinc-200 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
<i className="w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm w-24 md:w-32 ml-2 placeholder-zinc-400 text-zinc-900" placeholder="Поиск..." type="text"/>
</div>
<button className="relative p-2 text-zinc-600 hover:text-emerald-700 transition-colors">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
<span className="absolute top-1 right-0.5 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
</button>
<div className="hidden md:flex items-center gap-1 text-xs font-semibold text-zinc-400 border-l border-zinc-200 pl-4">
<span className="text-emerald-700 cursor-pointer">RU</span>
<span>/</span>
<span className="hover:text-emerald-700 cursor-pointer transition-colors">KG</span>
</div>
<button className="lg:hidden p-2 text-zinc-900" onclick="toggleMenu()">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-zinc-50">

<div className="absolute inset-0 z-0">
<img alt="Orchard" className="w-full h-full object-cover opacity-10 object-bottom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 to-zinc-50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    Новый сезон 2024 открыт
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-6">
                    Профессиональные <span className="text-emerald-700">саженцы</span> для вашего урожая
                </h1>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed max-w-lg">
                    Прямые поставки из лучших питомников Европы и адаптация к местному климату. Гарантия сортности и приживаемости для фермеров и садоводов.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-700/20 active:scale-95" href="#catalog">
                        Перейти в каталог
                    </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all active:scale-95" href="#wholesale">
                        Условия для оптовиков
                    </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-zinc-500">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="check-circle-2"></i>
<span>Фитосертификаты</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="check-circle-2"></i>
<span>Гарантия приживаемости</span>
</div>
</div>
</div>
<div className="relative lg:h-[600px] hidden lg:block">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-emerald-100 rounded-[2rem] -rotate-3"></div>
<img alt="Apple Seedling" className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-zinc-200 rotate-0 hover:rotate-1 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-12 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-zinc-100 max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-orange-100 rounded-lg text-orange-600">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<div>
<p className="text-xs text-zinc-500">В наличии</p>
<p className="text-sm font-bold text-zinc-900">50+ сортов</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">10+</p>
<p className="text-sm text-zinc-500 mt-1">Лет на рынке</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">500k</p>
<p className="text-sm text-zinc-500 mt-1">Проданных саженцев</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">100%</p>
<p className="text-sm text-zinc-500 mt-1">Соблюдение сортности</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">24/7</p>
<p className="text-sm text-zinc-500 mt-1">Консультация агронома</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="catalog">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Каталог саженцев</h2>
<p className="text-zinc-500">Выбирайте из проверенных сортов плодово-ягодных культур</p>
</div>
<a className="text-sm font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group" href="#">
                    Смотреть весь каталог
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 pb-2">
<button className="px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium whitespace-nowrap">Все</button>
<button className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-sm font-medium whitespace-nowrap transition-colors">Яблони</button>
<button className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-sm font-medium whitespace-nowrap transition-colors">Груши</button>
<button className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-sm font-medium whitespace-nowrap transition-colors">Косточковые</button>
<button className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-sm font-medium whitespace-nowrap transition-colors">Орехоплодные</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
<div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden">
<img alt="Apple Tree" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-emerald-800">Хит</span>
</div>
<div className="p-4">
<div className="mb-2">
<h3 className="font-semibold text-zinc-900">Яблоня "Голден Делишес"</h3>
<p className="text-xs text-zinc-500 italic">Malus domestica</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
<span className="bg-zinc-100 px-2 py-1 rounded">2 года</span>
<span className="bg-zinc-100 px-2 py-1 rounded">ММ-106</span>
</div>
<div className="flex items-center justify-between mt-auto">
<div>
<span className="block text-sm font-bold text-zinc-900">350 с.</span>
<span className="text-[10px] text-zinc-400">Розница</span>
</div>
<button className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
<div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden">
<img alt="Cherry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-4">
<div className="mb-2">
<h3 className="font-semibold text-zinc-900">Черешня "Свитхарт"</h3>
<p className="text-xs text-zinc-500 italic">Prunus avium</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
<span className="bg-zinc-100 px-2 py-1 rounded">1 год</span>
<span className="bg-zinc-100 px-2 py-1 rounded">Гизела-5</span>
</div>
<div className="flex items-center justify-between mt-auto">
<div>
<span className="block text-sm font-bold text-zinc-900">420 с.</span>
<span className="text-[10px] text-zinc-400">Розница</span>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
<div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden">
<img alt="Apricot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<span className="absolute top-3 left-3 bg-orange-500/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white">Акция</span>
</div>
<div className="p-4">
<div className="mb-2">
<h3 className="font-semibold text-zinc-900">Абрикос "Шалах"</h3>
<p className="text-xs text-zinc-500 italic">Prunus armeniaca</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
<span className="bg-zinc-100 px-2 py-1 rounded">2 года</span>
<span className="bg-zinc-100 px-2 py-1 rounded">Жердель</span>
</div>
<div className="flex items-center justify-between mt-auto">
<div>
<span className="block text-sm font-bold text-red-600">300 с.</span>
<span className="text-[10px] text-zinc-400 line-through">350 с.</span>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 hover:border-zinc-300 transition-all duration-300">
<div className="aspect-[4/5] bg-zinc-100 relative overflow-hidden">
<img alt="Peach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4">
<div className="mb-2">
<h3 className="font-semibold text-zinc-900">Персик "Ред Хейвен"</h3>
<p className="text-xs text-zinc-500 italic">Prunus persica</p>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
<span className="bg-zinc-100 px-2 py-1 rounded">1 год</span>
<span className="bg-zinc-100 px-2 py-1 rounded">Миндаль</span>
</div>
<div className="flex items-center justify-between mt-auto">
<div>
<span className="block text-sm font-bold text-zinc-900">380 с.</span>
<span className="text-[10px] text-zinc-400">Розница</span>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 text-zinc-600 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#">
                    Показать еще
                    <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-emerald-900 text-white relative overflow-hidden" id="wholesale">
<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<span className="text-emerald-400 font-medium text-sm tracking-wider uppercase mb-4 block">Для бизнеса</span>
<h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">Оптовые поставки для фермерских хозяйств</h2>
<div className="space-y-6 text-emerald-100">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 border border-emerald-700">
<i className="w-6 h-6 text-emerald-300" data-lucide="truck"></i>
</div>
<div>
<h4 className="font-semibold text-white">Логистика под ключ</h4>
<p className="text-sm mt-1 opacity-80">Организуем доставку спецтранспортом с соблюдением температурного режима.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 border border-emerald-700">
<i className="w-6 h-6 text-emerald-300" data-lucide="file-check"></i>
</div>
<div>
<h4 className="font-semibold text-white">Полный пакет документов</h4>
<p className="text-sm mt-1 opacity-80">Договор, счет-фактура, фитосанитарные сертификаты, сертификаты происхождения.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 border border-emerald-700">
<i className="w-6 h-6 text-emerald-300" data-lucide="percent"></i>
</div>
<div>
<h4 className="font-semibold text-white">Гибкая система скидок</h4>
<p className="text-sm mt-1 opacity-80">Индивидуальные условия в зависимости от объема партии.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 text-zinc-900 shadow-2xl">
<h3 className="text-xl font-semibold mb-2">Заявка на оптовый прайс</h3>
<p className="text-sm text-zinc-500 mb-6">Заполните форму, и мы вышлем актуальный прайс-лист на вашу почту.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1">Название компании</label>
<input className="w-full rounded-lg border-zinc-200 text-sm focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-zinc-50 border" placeholder="ОсОО Агро..." type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1">ИНН</label>
<input className="w-full rounded-lg border-zinc-200 text-sm focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-zinc-50 border" placeholder="1234..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Контактное лицо</label>
<input className="w-full rounded-lg border-zinc-200 text-sm focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-zinc-50 border" placeholder="Иван Иванов" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Телефон</label>
<input className="w-full rounded-lg border-zinc-200 text-sm focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-zinc-50 border" placeholder="+996..." type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Email</label>
<input className="w-full rounded-lg border-zinc-200 text-sm focus:border-emerald-500 focus:ring-emerald-500 px-3 py-2 bg-zinc-50 border" placeholder="mail@example.com" type="email"/>
</div>
<button className="w-full bg-emerald-600 text-white rounded-lg py-2.5 font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20" type="button">
                            Получить прайс-лист
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50" id="about">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">О компании Gardens Consulting</h2>
<p className="text-zinc-600">
                    Мы не просто продаем саженцы. Мы предоставляем комплексные решения для закладки интенсивных садов, сопровождая вас от выбора сорта до первого урожая.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="font-semibold text-zinc-900 mb-2">Прямой импорт</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Официальные дистрибьюторы ведущих питомников Италии, Турции и Польши. Никаких посредников и наценок.
                    </p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="font-semibold text-zinc-900 mb-2">Фитоконтроль</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Каждая партия проходит строгий карантинный контроль. Саженцы свободны от вирусных и бактериальных заболеваний.
                    </p>
</div>
<div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<h3 className="font-semibold text-zinc-900 mb-2">Агро-сопровождение</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Консультации по схеме посадки, системе полива и защите растений. Мы заинтересованы в вашем успехе.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16">
<div>
<h3 className="text-2xl font-semibold mb-6">Доставка и оплата</h3>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<i className="w-5 h-5 text-zinc-400 mt-1" data-lucide="credit-card"></i>
<div>
<h4 className="font-medium text-zinc-900">Удобная оплата</h4>
<p className="text-sm text-zinc-500 mt-1">
                                Онлайн оплата картами Visa, Mastercard, Элкарт через Freedom Pay. Для юр. лиц — безналичный расчет с выставлением счета.
                            </p>
<div className="flex gap-2 mt-3 opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="h-6 w-10 bg-zinc-200 rounded"></div> 
<div className="h-6 w-10 bg-zinc-200 rounded"></div> 
</div>
</div>
</div>
<div className="flex gap-4 items-start">
<i className="w-5 h-5 text-zinc-400 mt-1" data-lucide="package"></i>
<div>
<h4 className="font-medium text-zinc-900">Способы доставки</h4>
<p className="text-sm text-zinc-500 mt-1">
                                Самовывоз со склада. Отправка транспортными компаниями по всему Кыргызстану. Курьерская доставка по городу.
                            </p>
</div>
</div>
</div>
</div>
<div id="contacts">
<h3 className="text-2xl font-semibold mb-6">Контакты</h3>
<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span className="text-sm text-zinc-600">г. Бишкек, ул. Садовая 12, офис 304</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600 shrink-0" data-lucide="phone"></i>
<a className="text-sm text-zinc-600 hover:text-emerald-700 font-medium" href="tel:+996555123456">+996 (555) 123-456</a>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600 shrink-0" data-lucide="mail"></i>
<a className="text-sm text-zinc-600 hover:text-emerald-700" href="mailto:sales@gardens.kg">sales@gardens.kg</a>
</li>
</ul>
<div className="mt-6 w-full h-48 bg-zinc-200 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs">
                            Карта (Google Maps / Yandex)
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white text-xs font-bold">G</div>
<span className="font-bold text-zinc-900 tracking-tight">GARDENS.</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        ОсОО «Гарденс Консалтинг».<br/>
                        Современные решения для интенсивного садоводства.
                    </p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Компания</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-700" href="#">О нас</a></li>
<li><a className="hover:text-emerald-700" href="#">Сертификаты</a></li>
<li><a className="hover:text-emerald-700" href="#">Вакансии</a></li>
<li><a className="hover:text-emerald-700" href="#">Блог</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Покупателям</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-700" href="#">Каталог</a></li>
<li><a className="hover:text-emerald-700" href="#">Доставка и оплата</a></li>
<li><a className="hover:text-emerald-700" href="#">Возврат</a></li>
<li><a className="hover:text-emerald-700" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Подписаться</h4>
<form className="flex gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded px-3 py-1.5 text-xs outline-none focus:border-emerald-500 transition-colors" placeholder="Email" type="email"/>
<button className="bg-emerald-600 text-white px-3 py-1.5 rounded text-xs hover:bg-emerald-700 transition-colors">OK</button>
</form>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2024 Gardens Consulting. Все права защищены.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-600" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-zinc-400 hover:text-zinc-600" href="#"><i className="w-4 h-4" data-lucide="message-circle"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
