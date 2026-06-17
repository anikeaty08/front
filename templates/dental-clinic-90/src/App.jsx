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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="font-medium text-sm tracking-tighter relative z-10">Au</span>
</div>
<span className="text-base font-medium tracking-tight group-hover:text-slate-600 transition-colors">AURA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Услуги</a>
<a className="hover:text-slate-900 transition-colors" href="#technology">Технологии</a>
<a className="hover:text-slate-900 transition-colors" href="#doctors">Врачи</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-all focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 shadow-lg shadow-slate-900/20" href="#booking">
                Записаться
            </a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/60 to-purple-100/60 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-100/60 to-blue-50/60 rounded-full blur-3xl mix-blend-multiply filter opacity-70"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Принимаем новых пациентов</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6 relative">
                    Стоматология 
                    <span className="text-slate-400">как искусство.</span>

<svg className="absolute -right-8 top-0 w-12 h-12 text-blue-500 opacity-20 hidden md:block" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10,50 Q50,10 90,50 T10,90"></path>
</svg>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10 font-normal">
                    Мы объединили передовые цифровые технологии и заботу о комфорте, чтобы создать улыбку, которую вы заслуживаете. Без боли. Без стресса.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-blue-900/10" href="#booking">
                        Записаться на прием
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all shadow-sm" href="#services">
                        Узнать цены
                    </a>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 relative overflow-hidden">
<div className="absolute inset-0 bg-dots-slate opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight text-slate-900">12k+</div>
<div className="text-sm text-slate-500">Довольных пациентов</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight text-slate-900">15</div>
<div className="text-sm text-slate-500">Лет опыта</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight text-slate-900">100%</div>
<div className="text-sm text-slate-500">Стерильность</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium tracking-tight text-slate-900">24/7</div>
<div className="text-sm text-slate-500">Поддержка</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="services">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Наши направления</h2>
<p className="text-slate-500 text-lg max-w-2xl">Комплексный подход к здоровью ваших зубов. От профессиональной гигиены до сложной имплантации.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors relative z-10">
<iconify-icon className="text-slate-900 group-hover:text-blue-600 transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight relative z-10">Терапия и лечение</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">Лечение кариеса под микроскопом, реставрация формы зуба современными композитными материалами.</p>
</div>

<div className="group p-8 rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-50 rounded-full blur-2xl group-hover:bg-purple-100 transition-colors opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors relative z-10">
<iconify-icon className="text-slate-900 group-hover:text-purple-600 transition-colors" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight relative z-10">Эстетика и виниры</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">Создание идеальной улыбки с помощью керамических виниров E-max. Отбеливание Zoom 4.</p>
</div>

<div className="group p-8 rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-green-50 rounded-full blur-2xl group-hover:bg-green-100 transition-colors opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors relative z-10">
<iconify-icon className="text-slate-900 group-hover:text-green-600 transition-colors" icon="solar:screw-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight relative z-10">Имплантация</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">Восстановление утраченных зубов имплантами Straumann и Nobel Biocare. Пожизненная гарантия.</p>
</div>

<div className="group p-8 rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full blur-2xl group-hover:bg-orange-100 transition-colors opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors relative z-10">
<iconify-icon className="text-slate-900 group-hover:text-orange-600 transition-colors" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight relative z-10">Ортодонтия</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">Исправление прикуса брекет-системами Damon и прозрачными элайнерами Invisalign.</p>
</div>

<div className="group p-8 rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-red-50 rounded-full blur-2xl group-hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors relative z-10">
<iconify-icon className="text-slate-900 group-hover:text-red-600 transition-colors" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight relative z-10">Хирургия</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">Атравматичное удаление зубов любой сложности, костная пластика и синус-лифтинг.</p>
</div>

<div className="group p-8 rounded-xl border border-slate-100 bg-white/80 backdrop-blur-sm hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/50 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors opacity-0 group-hover:opacity-100"></div>
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors relative z-10">
<iconify-icon className="text-slate-900 group-hover:text-blue-600 transition-colors" icon="solar:bedside-table-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight relative z-10">Детская стоматология</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">Бережное лечение молочных зубов в игровой форме. Адаптация ребенка к приему.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden" id="technology">

<div className="absolute inset-0 bg-dots-slate opacity-40"></div>
<div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl shadow-slate-200/50 relative overflow-hidden">

<div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
<div className="flex border-slate-100 border-b mb-8 pb-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<span className="text-xs font-mono text-slate-400">SCAN_3D_V2.0</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
<iconify-icon className="text-blue-600" icon="solar:scanner-linear" width="20"></iconify-icon>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-200 rounded mb-1 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>
</div>
<div className="h-1.5 w-16 bg-slate-100 rounded"></div>
</div>
<div className="text-xs font-mono text-green-600">COMPLETE</div>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
<iconify-icon className="text-blue-600" icon="solar:monitor-camera-linear" width="20"></iconify-icon>
<div className="flex-1">
<div className="h-2 w-32 bg-slate-200 rounded mb-1"></div>
<div className="h-1.5 w-20 bg-slate-100 rounded"></div>
</div>
<div className="text-xs font-mono text-slate-400">PROCESSING</div>
</div>
<div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 opacity-60">
<iconify-icon className="text-slate-400" icon="solar:printer-linear" width="20"></iconify-icon>
<div className="flex-1">
<div className="h-2 w-20 bg-slate-200 rounded mb-1"></div>
<div className="h-1.5 w-12 bg-slate-100 rounded"></div>
</div>
<div className="text-xs font-mono text-slate-300">WAITING</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs text-slate-400">Точность сканирования</span>
<span className="text-sm font-semibold text-slate-900">99.8%</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Цифровой протокол лечения
                    </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Мы отказались от неприятных слепков в пользу 3D-сканирования. Компьютерная томография и цифровое моделирование позволяют увидеть результат еще до начала лечения.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 bg-blue-50 p-1 rounded-full">
<iconify-icon className="text-blue-600 block" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-600">3D-снимок (КТ) с минимальной лучевой нагрузкой</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-blue-50 p-1 rounded-full">
<iconify-icon className="text-blue-600 block" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-600">Внутриротовой сканер вместо слепочной массы</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-blue-50 p-1 rounded-full">
<iconify-icon className="text-blue-600 block" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-slate-600">Лечение каналов под микроскопом Leica</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="doctors">

<div className="absolute right-0 top-1/4 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-2">Команда экспертов</h2>
<p className="text-slate-500">Врачи, которым доверяют здоровье.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center gap-1 group" href="#">
                    Вся команда
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-xl mb-4 overflow-hidden relative">

<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23cbd5e1\' fillOpacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="text-xs font-medium text-slate-500">Стаж: 12 лет</div>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Др. Алексей Смирнов</h3>
<p className="text-sm text-slate-500">Главный врач, Хирург-имплантолог</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23cbd5e1\' fillOpacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="text-xs font-medium text-slate-500">Стаж: 9 лет</div>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Др. Елена Новикова</h3>
<p className="text-sm text-slate-500">Ортодонт, Гнатолог</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23cbd5e1\' fillOpacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="text-xs font-medium text-slate-500">Стаж: 7 лет</div>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Др. Мария Волкова</h3>
<p className="text-sm text-slate-500">Стоматолог-терапевт, Эндодонтист</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="booking">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Начните путь к <br/>идеальной улыбке</h2>
<p className="text-slate-400 text-lg mb-10 max-w-md">Оставьте заявку, и наш администратор свяжется с вами для подбора удобного времени визита.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-white" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Телефон</div>
<div className="font-medium">+7 (999) 123-45-67</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-white" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Адрес</div>
<div className="font-medium">Москва, ул. Лесная 5, БЦ White Stone</div>
</div>
</div>
</div>
</div>
<div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl relative">
<form className="space-y-4 relative z-10">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600 ml-1">Имя</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-all placeholder:text-slate-400" placeholder="Иван" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600 ml-1">Телефон</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none transition-all placeholder:text-slate-400" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600 ml-1">Услуга</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 outline-none appearance-none transition-all">
<option>Первичная консультация</option>
<option>Гигиена и чистка</option>
<option>Лечение зубов</option>
<option>Имплантация</option>
<option>Ортодонтия</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center transition-all flex items-center justify-center gap-2 relative overflow-hidden group" type="button">
<span className="relative z-10">Записаться</span>
<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
<iconify-icon className="relative z-10" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-400 text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="faq">
<div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Частые вопросы</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-100 rounded-lg open:ring-1 open:ring-slate-200 open:shadow-sm transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">Больно ли лечить зубы?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        Абсолютно нет. Мы используем компьютерную анестезию STA, которая позволяет обезболить зуб без ощущения укола. Вы почувствуете только легкое прикосновение.
                    </div>
</details>
<details className="group bg-white border border-slate-100 rounded-lg open:ring-1 open:ring-slate-200 open:shadow-sm transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">Сколько стоит первичный осмотр?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        Первичная консультация стоит 1500₽. В нее входит осмотр, фотопротокол, составление предварительного плана лечения и рекомендации специалиста. Если вы остаетесь на лечение в день приема — консультация бесплатна.
                    </div>
</details>
<details className="group bg-white border border-slate-100 rounded-lg open:ring-1 open:ring-slate-200 open:shadow-sm transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">Есть ли рассрочка на лечение?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        Да, мы предоставляем беспроцентную рассрочку от клиники на дорогостоящие планы лечения (имплантация, ортодонтия) сроком до 12 месяцев.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-dots-slate opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs">Au</div>
<span className="font-semibold text-slate-900">AURA</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                        Современная стоматология с человеческим лицом и цифровой точностью.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Услуги</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Терапия</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Хирургия</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Ортодонтия</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Пациентам</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Цены</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Врачи</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Отзывы</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Мы в соцсетях</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400">© 2023 AURA Dental Clinic. Лицензия № ЛО-77-01-000000</p>
<div className="flex gap-6 text-[10px] text-slate-400">
<a className="hover:text-slate-600" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-600" href="#">Договор оферты</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
