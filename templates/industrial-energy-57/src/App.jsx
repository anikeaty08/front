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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    
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
      

<header className="fixed top-0 w-full z-50 bg-[#1A1A1B]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 z-10 group" href="#">
<div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center group-hover:bg-orange-500 transition-colors">
<iconify-icon className="text-white text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tighter text-lg leading-none">NPP<br/>KPK</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#about">О предприятии</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#products">Номенклатура</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#services">Услуги</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#projects">Проекты</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide" href="#contacts">Контакты</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<div className="flex flex-col text-right">
<a className="text-white font-medium tracking-tight hover:text-orange-500 transition-colors" href="tel:+73854350878">+7 (3854) 35-08-78</a>
<span className="text-xs text-gray-500">Пн-Пт 08:00 - 17:00</span>
</div>
<a className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all duration-300" href="#lead">
                    Заказать консультацию
                </a>
</div>

<button className="lg:hidden text-gray-300 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-noise">

<div className="absolute inset-0 z-0">
<img alt="Industrial Boiler Manufacturing" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1B] via-[#1A1A1B]/90 to-[#1A1A1B]/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Производство полного цикла</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    ООО НПП КОТЕЛЬНО-ПРОМЫШЛЕННАЯ КОМПАНИЯ
                </h1>
<p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
                    Ведущий производитель теплоэнергетического оборудования в России и СНГ. Инженерное превосходство с 2004 года.
                </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 flex items-start gap-4 transition-colors hover:bg-white/10" data-aos="fade-up" data-aos-delay="100">
<iconify-icon className="text-orange-500 text-2xl mt-1" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-xl font-semibold text-white tracking-tight">20+ лет</div>
<div className="text-sm text-gray-500 mt-1">Опыта на рынке</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 flex items-start gap-4 transition-colors hover:bg-white/10" data-aos="fade-up" data-aos-delay="200">
<iconify-icon className="text-orange-500 text-2xl mt-1" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-xl font-semibold text-white tracking-tight">ISO 9001</div>
<div className="text-sm text-gray-500 mt-1">Стандарты качества</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 flex items-start gap-4 transition-colors hover:bg-white/10" data-aos="fade-up" data-aos-delay="300">
<iconify-icon className="text-orange-500 text-2xl mt-1" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-xl font-semibold text-white tracking-tight">Бийск</div>
<div className="text-sm text-gray-500 mt-1">Собственное производство</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1B] relative z-20" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16" data-aos="fade-up">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Номенклатура оборудования</h2>
<p className="text-gray-400">Проектирование и производство надежных промышленных решений под любые задачи теплоснабжения.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 mt-6 md:mt-0 group" href="#">
                    Смотреть полный каталог
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#1E1E1F] border border-white/5 hover:border-white/20 rounded-xl p-8 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-6xl text-white" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-xl text-gray-300 group-hover:text-orange-500" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Паровые котлы</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Высокопроизводительные котлы серий ДЕ, Е, ДКВр, КЕ для промышленных нужд.</p>
<ul className="text-xs text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Серия ДЕ</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Серия Е, ДКВр, КЕ</li>
</ul>
</div>

<div className="group bg-[#1E1E1F] border border-white/5 hover:border-white/20 rounded-xl p-8 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-6xl text-white" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-xl text-gray-300 group-hover:text-orange-500" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Водогрейные котлы</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Оборудование марок КВ-ГМ, ПТВМ для систем отопления и горячего водоснабжения.</p>
<ul className="text-xs text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Марка КВ-ГМ</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Марка ПТВМ</li>
</ul>
</div>

<div className="group bg-[#1E1E1F] border border-white/5 hover:border-white/20 rounded-xl p-8 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-6xl text-white" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-xl text-gray-300 group-hover:text-orange-500" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Модульные котельные</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Готовые решения МКУ и ПКУ полной заводской готовности для быстрого ввода в эксплуатацию.</p>
<ul className="text-xs text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Установки МКУ</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Установки ПКУ</li>
</ul>
</div>

<div className="group bg-[#1E1E1F] border border-white/5 hover:border-white/20 rounded-xl p-8 transition-all duration-300 relative overflow-hidden" data-aos="fade-up" data-aos-delay="400">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-6xl text-white" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-orange-500/50 transition-colors">
<iconify-icon className="text-xl text-gray-300 group-hover:text-orange-500" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-3">Вспомогательное</h3>
<p className="text-sm text-gray-500 mb-6 line-clamp-2">Тягодутьевые машины, системы водоподготовки и автоматика.</p>
<ul className="text-xs text-gray-400 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Тягодутьевые машины</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div> Водоподготовка</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#141415] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div data-aos="fade-right">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Гарантии и Качество</h2>
<p className="text-gray-400 mb-8 leading-relaxed">
                        Мы обеспечиваем абсолютную надежность нашей продукции благодаря многоступенчатому контролю качества на каждом этапе производства. Наша компания обладает всеми необходимыми допусками и сертификатами для выполнения работ любой сложности.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 rounded bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Лицензии СРО</h4>
<p className="text-sm text-gray-500">Допуск к проектированию, строительству и монтажу особо опасных объектов.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 rounded bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Штат аттестованных специалистов</h4>
<p className="text-sm text-gray-500">Высококвалифицированные сварщики (НАКС) и монтажники с многолетним стажем.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 rounded bg-white/5 border border-white/10 flex items-center justify-center text-orange-500">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Сертификация ISO</h4>
<p className="text-sm text-gray-500">Соответствие международным стандартам качества ISO 9001 и безопасности ISO 18000.</p>
</div>
</div>
</div>
</div>

<div className="relative" data-aos="fade-left">
<div className="absolute -inset-4 bg-gradient-to-r from-orange-500/10 to-transparent blur-2xl z-0 rounded-full"></div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="aspect-[3/4] bg-[#1A1A1B] border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center transform translate-y-8 shadow-2xl">
<iconify-icon className="text-4xl text-gray-600 mb-4" icon="solar:document-medicine-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-16 h-1 bg-gray-800 rounded mb-2"></div>
<div className="w-24 h-1 bg-gray-800 rounded mb-4"></div>
<span className="text-xs text-gray-500 font-medium">Сертификат ISO 9001</span>
</div>
<div className="aspect-[3/4] bg-[#1A1A1B] border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-2xl">
<iconify-icon className="text-4xl text-gray-600 mb-4" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-16 h-1 bg-gray-800 rounded mb-2"></div>
<div className="w-20 h-1 bg-gray-800 rounded mb-4"></div>
<span className="text-xs text-gray-500 font-medium">Свидетельство СРО</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1B]" id="projects">
<div className="max-w-7xl mx-auto px-6 mb-12" data-aos="fade-up">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Реализованные проекты</h2>
<p className="text-gray-400 max-w-2xl">Масштабные инсталляции и производственные цеха. Наше оборудование работает на крупнейших предприятиях отрасли.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 px-4 md:px-6 max-w-[1600px] mx-auto">
<div className="relative aspect-video md:aspect-[4/5] group overflow-hidden bg-gray-900 rounded-l-lg" data-aos="fade-up" data-aos-delay="100">
<img alt="Производственный цех" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-orange-500 mb-2 block">Монтаж</span>
<h3 className="text-lg font-semibold text-white tracking-tight">Цех сборки котельного оборудования</h3>
</div>
</div>
<div className="relative aspect-video md:aspect-[4/5] group overflow-hidden bg-gray-900" data-aos="fade-up" data-aos-delay="200">
<img alt="Монтаж котельной" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&amp;w=2058&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-orange-500 mb-2 block">Инсталляция</span>
<h3 className="text-lg font-semibold text-white tracking-tight">Установка модульной котельной МКУ</h3>
</div>
</div>
<div className="relative aspect-video md:aspect-[4/5] group overflow-hidden bg-gray-900 rounded-r-lg" data-aos="fade-up" data-aos-delay="300">
<img alt="Промышленный объект" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-orange-500 mb-2 block">Запуск</span>
<h3 className="text-lg font-semibold text-white tracking-tight">Ввод в эксплуатацию парового котла ДЕ</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-noise relative" id="lead">
<div className="absolute inset-0 bg-[#1A1A1B]/95 z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-[#141415] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl" data-aos="zoom-in">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Начать сотрудничество</h2>
<p className="text-gray-400 text-sm md:text-base">Оставьте заявку, и наши инженеры свяжутся с вами для расчета стоимости и подбора оборудования под ваши задачи.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative">
<input className="block w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-orange-500 focus:outline-none transition-colors peer" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-2 text-gray-500 text-sm cursor-text transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-translate-y-6 peer-valid:text-xs" htmlFor="name">Имя или Название компании</label>
</div>

<div className="relative">
<input className="block w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-orange-500 focus:outline-none transition-colors peer" id="phone" placeholder=" " required="" type="tel"/>
<label className="absolute left-0 top-2 text-gray-500 text-sm cursor-text transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-translate-y-6 peer-valid:text-xs" htmlFor="phone">Телефон для связи</label>
</div>
</div>

<div className="relative">
<textarea className="block w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-orange-500 focus:outline-none transition-colors peer resize-none overflow-hidden" id="message" oninput="this.style.height = '';this.style.height = this.scrollHeight + 'px'" placeholder=" " rows="1"></textarea>
<label className="absolute left-0 top-2 text-gray-500 text-sm cursor-text transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-translate-y-6 peer-valid:text-xs" htmlFor="message">Краткое описание задачи (опционально)</label>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
<p className="text-xs text-gray-600 max-w-xs">
                            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                        </p>
<button className="w-full md:w-auto px-8 py-3 bg-white text-[#1A1A1B] font-semibold text-sm rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                            Отправить запрос
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-[#111112] pt-16 pb-8 border-t border-white/5 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tighter text-base leading-none">NPP<br/>KPK</span>
</a>
<p className="text-xs text-gray-500 mb-6 max-w-xs">
                        Производство и поставка промышленного теплоэнергетического оборудования по всей территории РФ и стран СНГ.
                    </p>
</div>

<div>
<h5 className="text-white font-medium text-sm tracking-tight mb-4">Навигация</h5>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">О предприятии</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Номенклатура</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Услуги монтажа</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Реализованные проекты</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium text-sm tracking-tight mb-4">Оборудование</h5>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Паровые котлы</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Водогрейные котлы</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Модульные котельные</a></li>
<li><a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Водоподготовка</a></li>
</ul>
</div>

<div id="contacts">
<h5 className="text-white font-medium text-sm tracking-tight mb-4">Контакты</h5>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-500 text-lg mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm text-gray-500">Алтайский край, г. Бийск,<br/>пер. Прямой, 2г</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-500 text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="tel:+73854350878">+7 (3854) 35-08-78</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-gray-500 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="mailto:kotelprom@mail.ru">kotelprom@mail.ru</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-600">
                    © 2004-2023 ООО НПП «Котельно-промышленная компания». Все права защищены.
                </p>
<div className="flex gap-4">
<a className="text-xs text-gray-600 hover:text-gray-400 transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
