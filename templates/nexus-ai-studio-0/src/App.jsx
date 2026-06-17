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



    // Intersection Observer for scroll animations
    document.addEventListener('DOMContentLoaded', () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); 
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
      
      // Card hover effect for mouse tracking
      const cards = document.querySelectorAll('.glass-panel');
      cards.forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
      });
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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500 text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-manrope font-semibold text-xl text-white tracking-tight">SMART<span className="text-blue-500">TENDER</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
<a className="hover:text-white transition-colors" href="#tariffs">Тарифы</a>
<a className="hover:text-white transition-colors" href="#contact">Контакты</a>
</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 transition-all">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span>+7 (495) 123-45-67</span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 animate-on-scroll" style={{animation: 'fadeSlideIn 1s ease forwards'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          Работаем по 44-ФЗ и 223-ФЗ
        </div>
<h1 className="font-manrope font-semibold text-5xl lg:text-7xl leading-[1.1] text-white tracking-tight">
          Ваш тендерный <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">отдел на аутсорсе</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
          Комплексное сопровождение участия в торгах. Мы находим, анализируем и выигрываем государственные контракты для вашего бизнеса с оплатой за результат.
        </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="shiny-cta px-8 py-4 rounded-xl font-manrope font-semibold text-white relative group overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
              Бесплатный аудит
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 rounded-xl font-manrope font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
            Рассчитать стоимость
          </button>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-white/5">
<div>
<p className="font-manrope font-semibold text-2xl text-white">93%</p>
<p className="text-xs text-slate-500">Допуск заявок</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="font-manrope font-semibold text-2xl text-white">₽12Млд+</p>
<p className="text-xs text-slate-500">Выигранных тендеров</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="font-manrope font-semibold text-2xl text-white">24/7</p>
<p className="text-xs text-slate-500">Поддержка юристов</p>
</div>
</div>
</div>

<div className="relative h-[600px] hidden lg:block">
<div className="absolute inset-0 flex items-end justify-center gap-4">

<div className="w-24 h-[60%] glass-panel rounded-t-2xl col-anim relative overflow-hidden group" style={{animationDelay: '0.2s'}}>
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-50"></div>
<div className="absolute bottom-4 left-0 w-full text-center">
<div className="mx-auto w-8 h-8 flex items-center justify-center text-blue-400 mb-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-xs font-mono text-blue-200">ПОИСК</p>
</div>
</div>

<div className="w-24 h-[90%] glass-panel rounded-t-2xl col-anim relative overflow-hidden group border-blue-500/30" style={{animationDelay: '0.4s', background: 'rgba(59, 130, 246, 0.1)'}}>
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-blue-600/40 to-transparent"></div>
<div className="absolute top-0 w-full h-px bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
<div className="absolute bottom-6 left-0 w-full text-center">
<div className="mx-auto w-10 h-10 flex items-center justify-center text-blue-400 mb-3">
<iconify-icon icon="solar:cup-first-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<p className="text-xs font-mono font-bold text-white">ПОБЕДА</p>
</div>
</div>

<div className="w-24 h-[75%] glass-panel rounded-t-2xl col-anim relative overflow-hidden group" style={{animationDelay: '0.6s'}}>
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-purple-600/20 to-transparent opacity-50"></div>
<div className="absolute bottom-4 left-0 w-full text-center">
<div className="mx-auto w-8 h-8 flex items-center justify-center text-purple-400 mb-2">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-xs font-mono text-purple-200">ЗАЯВКА</p>
</div>
</div>

<div className="w-24 h-[45%] glass-panel rounded-t-2xl col-anim relative overflow-hidden group" style={{animationDelay: '0.8s'}}>
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-slate-600/20 to-transparent opacity-50"></div>
<div className="absolute bottom-4 left-0 w-full text-center">
<div className="mx-auto w-8 h-8 flex items-center justify-center text-slate-400 mb-2">
<iconify-icon icon="solar:gavel-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-xs font-mono text-slate-200">ФАС</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-on-scroll">
<div>
<h2 className="font-manrope font-semibold text-3xl md:text-4xl text-white tracking-tight mb-4">Наши услуги</h2>
<p className="text-slate-400 max-w-md">Полный цикл сопровождения: от получения электронной подписи до подписания контракта и защиты интересов в ФАС.</p>
</div>
<a className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1" href="#">
          Все услуги <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.02] transition-colors group animate-on-scroll">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">Мониторинг тендеров</h3>
<p className="text-sm text-slate-400 leading-relaxed">Ежедневный ручной и автоматизированный поиск закупок по вашей специфике на всех площадках РФ.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.02] transition-colors group animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">Подготовка заявок</h3>
<p className="text-sm text-slate-400 leading-relaxed">Анализ документации и подготовка Формы 2. Гарантируем допуск или вернем деньги за услугу.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.02] transition-colors group animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:card-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">Банковские гарантии</h3>
<p className="text-sm text-slate-400 leading-relaxed">Помощь в оформлении БГ от банков-партнеров по сниженным ставкам без залога и визита в банк.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.02] transition-colors group animate-on-scroll">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:scale-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">Защита в ФАС</h3>
<p className="text-sm text-slate-400 leading-relaxed">Обжалование незаконных действий заказчика, отклонений заявки и защита от включения в РНП.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.02] transition-colors group md:col-span-2 animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">Аккредитация и ЭЦП</h3>
<p className="text-sm text-slate-400 leading-relaxed">Регистрация в ЕИС (Единая Информационная Система), получение усиленной квалифицированной электронной подписи (УКЭП) и аккредитация на 8 федеральных площадках за 1 день.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="cases">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center animate-on-scroll">
<h2 className="font-manrope font-semibold text-3xl md:text-4xl text-white tracking-tight">Реальные результаты</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="glass-panel rounded-2xl overflow-hidden relative animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
<div className="p-8 md:p-10 relative z-10 flex flex-col h-full justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">44-ФЗ</div>
<span className="text-slate-400 text-sm">Москва</span>
</div>
<h3 className="text-2xl font-manrope font-semibold text-white mb-4">Поставка медицинского оборудования для ГКБ №1</h3>
<p className="text-slate-400 mb-8">Сложная закупка с требованием конкретных характеристик. Подготовили запрос на разъяснение, внесли изменения в ТЗ и выиграли.</p>
</div>
<div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
<div>
<p className="text-xs text-slate-500 mb-1">Сумма контракта</p>
<p className="text-xl font-manrope font-semibold text-white">45.2 млн ₽</p>
</div>
<div>
<p className="text-xs text-slate-500 mb-1">Снижение цены</p>
<p className="text-xl font-manrope font-semibold text-emerald-400">0.5%</p>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="glass-panel p-6 rounded-xl flex items-center justify-between gap-4 animate-on-scroll hover:border-blue-500/30 transition-colors" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">Ремонт школы искусств</p>
<p className="text-slate-500 text-xs">Строительство</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-manrope font-semibold">12.5 млн ₽</p>
<p className="text-emerald-400 text-xs">Победа</p>
</div>
</div>

<div className="glass-panel p-6 rounded-xl flex items-center justify-between gap-4 animate-on-scroll hover:border-blue-500/30 transition-colors" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:monitor-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">Разработка ПО</p>
<p className="text-slate-500 text-xs">IT услуги</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-manrope font-semibold">8.4 млн ₽</p>
<p className="text-emerald-400 text-xs">Победа</p>
</div>
</div>

<div className="glass-panel p-6 rounded-xl flex items-center justify-between gap-4 animate-on-scroll hover:border-blue-500/30 transition-colors" style={{transitionDelay: '300ms'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:delivery-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-white font-medium text-sm">Логистические услуги</p>
<p className="text-slate-500 text-xs">Транспорт</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-manrope font-semibold">3.2 млн ₽</p>
<p className="text-emerald-400 text-xs">Победа</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="tariffs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
<h2 className="font-manrope font-semibold text-3xl md:text-4xl text-white tracking-tight mb-4">Прозрачные тарифы</h2>
<p className="text-slate-400">Выберите комфортный формат работы. Никаких скрытых платежей, работаем по официальному договору.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl animate-on-scroll">
<h3 className="text-lg font-medium text-white mb-2">Старт</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-manrope font-semibold text-white">15 000</span>
<span className="text-slate-500">₽/мес</span>
</div>
<p className="text-sm text-slate-400 mb-8 border-b border-white/5 pb-8">Для начинающих поставщиков. Базовый поиск и подготовка простых заявок.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Персональный менеджер</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Подбор 20 тендеров</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Подготовка 3 заявок</li>
<li className="flex gap-3 opacity-50"><iconify-icon className="text-slate-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> Жалобы в ФАС</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">Выбрать тариф</button>
</div>

<div className="glass-panel p-8 rounded-2xl border-blue-500/40 relative shadow-2xl shadow-blue-900/20 animate-on-scroll bg-[#0f172a]" style={{transitionDelay: '100ms', transform: 'scale(1.05)'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">Популярный</div>
<h3 className="text-lg font-medium text-white mb-2">Бизнес</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-manrope font-semibold text-white">45 000</span>
<span className="text-slate-500">₽/мес</span>
</div>
<p className="text-sm text-slate-400 mb-8 border-b border-white/5 pb-8">Оптимально для активного участия. Полное сопровождение "под ключ".</p>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Персональный тендерный отдел</li>
<li className="flex gap-3"><iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Безлимитный поиск</li>
<li className="flex gap-3"><iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> До 15 заявок в месяц</li>
<li className="flex gap-3"><iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Юридическая поддержка</li>
<li className="flex gap-3"><iconify-icon className="text-blue-400 shrink-0 mt-0.5" icon="solar:check-circle-bold" strokeWidth="1.5"></iconify-icon> Помощь с БГ</li>
</ul>
<button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-500/20">Выбрать тариф</button>
</div>

<div className="glass-panel p-8 rounded-2xl animate-on-scroll" style={{transitionDelay: '200ms'}}>
<h3 className="text-lg font-medium text-white mb-2">Корпорация</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-manrope font-semibold text-white">90 000</span>
<span className="text-slate-500">₽/мес</span>
</div>
<p className="text-sm text-slate-400 mb-8 border-b border-white/5 pb-8">Для крупных компаний со сложными закупками и большими объемами.</p>
<ul className="space-y-4 mb-8 text-sm text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 2 персональных специалиста</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Безлимитные заявки</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Сложные тех. задания</li>
<li className="flex gap-3"><iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Приоритет в ФАС</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">Обсудить условия</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0f172a] pt-20 pb-10 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 mb-16">
<div>
<h2 className="font-manrope font-semibold text-3xl text-white tracking-tight mb-4">Готовы выигрывать тендеры?</h2>
<p className="text-slate-400 mb-8 max-w-md">Оставьте заявку на бесплатный аудит вашей ниши. Мы подготовим отчет о потенциальных закупках в течение 24 часов.</p>
<div className="flex flex-col gap-4 text-slate-300">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Телефон</p>
<p className="font-medium">+7 (495) 123-45-67</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Email</p>
<p className="font-medium">info@smarttender.ru</p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Имя</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Иван" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Телефон</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">ИНН компании (необязательно)</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Для быстрого аудита" type="text"/>
</div>
<button className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity mt-2" type="button">
              Получить аудит бесплатно
            </button>
<p className="text-[10px] text-slate-500 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 SmartTender. Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Договор оферты</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
