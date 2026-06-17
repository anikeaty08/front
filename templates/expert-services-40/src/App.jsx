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
      

<div className="glow-effect top-[-200px] left-[-200px]"></div>
<div className="glow-effect bottom-[-200px] right-[-200px] opacity-50"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-semibold tracking-tighter uppercase" href="#">TL Expert</a>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#pricing">Стоимость</a>
<a className="hover:text-white transition-colors" href="#stages">Этапы</a>
<a className="hover:text-white transition-colors" href="#cases">Кейсы</a>
<a className="hover:text-white transition-colors" href="#contacts">Контакты</a>
</nav>
<a className="text-sm text-white bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-all px-4 py-2 rounded-full font-medium" href="#contact-form">
                Оставить заявку
            </a>
</div>
</header>
<main className="pt-24 md:pt-32">

<section className="md:py-32 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute inset-0 bg-grid opacity-30 mask-image-linear-to-b from-black to-transparent pointer-events-none" style={{WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'}}></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Работаем по всей России
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-tight mb-6 max-w-4xl">
                Независимая <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">экспертиза</span> <br className="hidden md:block"/>и защита ваших интересов
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light">
                Профессиональная строительная, техническая и правовая оценка. Точные результаты, признаваемые судами и государственными органами.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#contact-form">
                    Бесплатная консультация
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="border-white/[0.1] hover:bg-white/[0.08] transition-colors flex items-center justify-center text-sm font-medium text-white border rounded-full pt-3 pr-8 pb-3 pl-8" href="#services">
                    Смотреть услуги
                </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Наши услуги</h2>
<p className="text-neutral-400 max-w-xl">Полный спектр экспертных услуг для бизнеса и частных лиц.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:bg-[#111111] transition-all relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Строительно-техническая экспертиза</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Оценка качества строительных работ, соответствие ГОСТ и СНиП, определение объемов и стоимости.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white opacity-60 group-hover:opacity-100 transition-opacity" href="#">
                        Подробнее <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:bg-[#111111] transition-all relative overflow-hidden lg:col-span-2">
<div className="absolute right-0 bottom-0 p-8 opacity-10 pointer-events-none">
<iconify-icon height="120" icon="solar:scale-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:scale-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Судебная экспертиза</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6 max-w-md">
                        Проведение независимой экспертизы по определениям судов и постановлениям следственных органов. Подготовка заключений для судебных процессов.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white opacity-60 group-hover:opacity-100 transition-opacity" href="#">
                        Подробнее <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:bg-[#111111] transition-all relative overflow-hidden">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Оценка недвижимости</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Определение рыночной стоимости квартир, домов, земельных участков и коммерческой недвижимости.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white opacity-60 group-hover:opacity-100 transition-opacity" href="#">
                        Подробнее <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:bg-[#111111] transition-all relative overflow-hidden">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:documents-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Аудит документации</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Проверка проектно-сметной документации, договоров подряда на соответствие нормам и правилам.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white opacity-60 group-hover:opacity-100 transition-opacity" href="#">
                        Подробнее <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:bg-[#111111] transition-all relative overflow-hidden">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Технический надзор</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                        Контроль качества строительства на всех этапах, соблюдение сроков и бюджета заказчика.
                    </p>
<a className="inline-flex items-center gap-2 text-sm text-white opacity-60 group-hover:opacity-100 transition-opacity" href="#">
                        Подробнее <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative" id="pricing">
<div className="glow-effect top-0 left-[50%] translate-x-[-50%] opacity-20"></div>
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Стоимость услуг</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Прозрачное ценообразование без скрытых платежей. Точная стоимость рассчитывается индивидуально.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Консультация</h3>
<p className="text-sm text-neutral-500 mb-6 h-10">Первичный анализ ситуации и оценка перспектив.</p>
<div className="mb-8">
<span className="text-3xl font-semibold text-white tracking-tight">от 5 000 ₽</span>
</div>
<ul className="flex-1 space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Анализ имеющихся документов</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Устная консультация эксперта</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Определение стратегии</span>
</li>
</ul>
<a className="w-full block text-center bg-white/[0.03] border border-white/[0.1] text-white py-3 rounded-xl text-sm font-medium hover:bg-white/[0.08] transition-colors" href="#contact-form">Выбрать</a>
</div>

<div className="bg-[#111111] border border-blue-500/30 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
<div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-md border border-blue-500/20">Популярное</div>
<h3 className="text-lg font-medium text-white mb-2">Досудебная экспертиза</h3>
<p className="text-sm text-neutral-500 mb-6 h-10">Комплексное исследование с выдачей официального заключения.</p>
<div className="mb-8">
<span className="text-3xl font-semibold text-white tracking-tight">от 25 000 ₽</span>
</div>
<ul className="flex-1 space-y-4 mb-8 text-sm text-white/90">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Выезд эксперта на объект</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Инструментальное обследование</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Подготовка заключения</span>
</li>
</ul>
<a className="w-full block text-center bg-white text-black py-3 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact-form">Оставить заявку</a>
</div>

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Судебная экспертиза</h3>
<p className="text-sm text-neutral-500 mb-6 h-10">Исследование по определению суда с защитой в заседании.</p>
<div className="mb-8">
<span className="text-3xl font-semibold text-white tracking-tight">от 45 000 ₽</span>
</div>
<ul className="flex-1 space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Анализ материалов дела</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Проведение исследований</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Выдача заключения для суда</span>
</li>
</ul>
<a className="w-full block text-center bg-white/[0.03] border border-white/[0.1] text-white py-3 rounded-xl text-sm font-medium hover:bg-white/[0.08] transition-colors" href="#contact-form">Выбрать</a>
</div>
</div>
</section>

<section className="border-y border-white/[0.05] bg-white/[0.01]" id="stages">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Как мы работаем</h2>
<p className="text-neutral-400">Прозрачный процесс от первого звонка до готового результата.</p>
</div>
<div className="relative">

<div className="absolute left-6 md:left-[50%] top-0 bottom-0 w-px bg-white/[0.05] md:translate-x-[-50%]"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="absolute left-6 md:left-[50%] w-3 h-3 rounded-full bg-[#050505] border-2 border-white/[0.2] md:translate-x-[-50%] group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-colors z-10 translate-y-1.5 md:translate-y-0 translate-x-[-5.5px]"></div>
<div className="ml-16 md:ml-0 md:w-5/12 md:text-right pr-0 md:pr-12">
<h4 className="text-lg font-semibold text-white mb-2">Заявка и консультация</h4>
<p className="text-sm text-neutral-500">Оставьте заявку на сайте или по телефону. Мы изучим вашу проблему и предложим оптимальное решение.</p>
</div>
<div className="hidden md:block md:w-5/12"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="absolute left-6 md:left-[50%] w-3 h-3 rounded-full bg-[#050505] border-2 border-white/[0.2] md:translate-x-[-50%] group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-colors z-10 translate-y-1.5 md:translate-y-0 translate-x-[-5.5px]"></div>
<div className="hidden md:block md:w-5/12"></div>
<div className="ml-16 md:ml-0 md:w-5/12 md:text-left pl-0 md:pl-12">
<h4 className="text-lg font-semibold text-white mb-2">Заключение договора</h4>
<p className="text-sm text-neutral-500">Фиксируем стоимость, сроки и задачи в официальном договоре. Гарантируем конфиденциальность.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="absolute left-6 md:left-[50%] w-3 h-3 rounded-full bg-[#050505] border-2 border-white/[0.2] md:translate-x-[-50%] group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-colors z-10 translate-y-1.5 md:translate-y-0 translate-x-[-5.5px]"></div>
<div className="ml-16 md:ml-0 md:w-5/12 md:text-right pr-0 md:pr-12">
<h4 className="text-lg font-semibold text-white mb-2">Проведение экспертизы</h4>
<p className="text-sm text-neutral-500">Выезд специалиста, инструментальное обследование, лабораторные испытания при необходимости.</p>
</div>
<div className="hidden md:block md:w-5/12"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group">
<div className="absolute left-6 md:left-[50%] w-3 h-3 rounded-full bg-[#050505] border-2 border-white/[0.2] md:translate-x-[-50%] group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-colors z-10 translate-y-1.5 md:translate-y-0 translate-x-[-5.5px]"></div>
<div className="hidden md:block md:w-5/12"></div>
<div className="ml-16 md:ml-0 md:w-5/12 md:text-left pl-0 md:pl-12">
<h4 className="text-lg font-semibold text-white mb-2">Выдача заключения</h4>
<p className="text-sm text-neutral-500">Предоставление официального документа, имеющего юридическую силу для судов и инстанций.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="md:col-span-4 mb-8">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Почему выбирают нас</h2>
</div>

<div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-white/[0.05] rounded-3xl p-8 flex flex-col justify-end md:col-span-2 md:row-span-2 min-h-[240px]">
<div className="mb-auto">
<iconify-icon className="text-blue-400" height="32" icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-5xl font-semibold text-white tracking-tighter mb-2">&gt;10 лет</div>
<div className="text-sm text-neutral-400">Успешного опыта работы на рынке независимой экспертизы.</div>
</div>

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-6 md:col-span-2">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
<iconify-icon icon="solar:user-check-linear" strokeWidth="1.5" text-white=""></iconify-icon>
</div>
<h4 className="text-white font-medium">Аккредитованные эксперты</h4>
</div>
<p className="text-sm text-neutral-500">В штате только специалисты с профильным образованием, допусками СРО и сертификатами.</p>
</div>

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="1.5" text-white=""></iconify-icon>
</div>
<h4 className="text-white font-medium">Оперативность</h4>
</div>
<p className="text-sm text-neutral-500">Соблюдаем оговоренные сроки. Возможен срочный выезд.</p>
</div>

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-6">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center">
<iconify-icon icon="solar:gavel-linear" strokeWidth="1.5" text-white=""></iconify-icon>
</div>
<h4 className="text-white font-medium">Юридическая сила</h4>
</div>
<p className="text-sm text-neutral-500">Наши заключения принимаются во всех судах РФ.</p>
</div>
</div>
</section>

<section className="border-y border-white/[0.05] bg-[#020202] py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs text-center text-neutral-600 uppercase tracking-widest mb-8">Нам доверяют</p>
<div className="flex flex-wrap justify-center gap-x-16 gap-y-8 items-center opacity-40 grayscale">

<div className="text-xl font-semibold tracking-tighter">ГАЗПРОМ</div>
<div className="text-2xl font-light tracking-widest">SBER</div>
<div className="text-xl font-serif italic">AlfaBank</div>
<div className="text-lg font-semibold tracking-widest uppercase border-y border-current px-2 py-1">Роснефть</div>
<div className="text-2xl font-semibold tracking-tighter lowercase">vk</div>
<div className="text-xl font-medium uppercase tracking-widest">РЖД</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="contact-form">
<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row gap-16 relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="md:w-1/2 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Нужна помощь эксперта?</h2>
<p className="text-neutral-400 mb-8">Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут для бесплатной консультации.</p>
<div className="space-y-6 text-sm text-neutral-300">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/[0.05]">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Звоните напрямую</p>
<a className="text-lg font-medium hover:text-white transition-colors" href="tel:+78000000000">8 (800) 000-00-00</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/[0.05]">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Пишите на почту</p>
<a className="text-lg font-medium hover:text-white transition-colors" href="mailto:info@tlexpert.ru">info@tlexpert.ru</a>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 relative z-10">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-neutral-500 pl-1">Имя</label>
<input className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all" placeholder="Иван Иванов" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-500 pl-1">Телефон</label>
<input className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-500 pl-1">Услуга</label>
<div className="relative">
<select className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all">
<option className="bg-[#111]">Строительная экспертиза</option>
<option className="bg-[#111]">Оценка недвижимости</option>
<option className="bg-[#111]">Судебная экспертиза</option>
<option className="bg-[#111]">Другое</option>
</select>
<iconify-icon className="absolute right-4 top-[50%] translate-y-[-50%] text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-500 pl-1">Сообщение (необязательно)</label>
<textarea className="w-full bg-white/[0.02] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none" placeholder="Опишите вашу ситуацию..." rows="3"></textarea>
</div>
<label className="flex items-start gap-3 mt-4 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-white/[0.2] peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 leading-tight">Я согласен с политикой обработки персональных данных.</span>
</label>
<button className="w-full bg-white text-black py-3.5 rounded-xl text-sm font-medium hover:bg-neutral-200 transition-colors mt-6" type="button">
                            Отправить заявку
                        </button>
</form>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="cases">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Успешные кейсы</h2>
<p className="text-neutral-400 max-w-xl">Реальные примеры того, как наша экспертиза помогает защитить интересы клиентов.</p>
</div>
<a className="text-sm text-white hover:text-blue-400 transition-colors inline-flex items-center gap-2" href="#">
                    Все кейсы <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:border-white/[0.1] transition-all">
<div className="flex gap-2 mb-6">
<span className="px-2 py-1 rounded-md bg-white/[0.05] text-xs text-neutral-400">Судебная</span>
<span className="px-2 py-1 rounded-md bg-white/[0.05] text-xs text-neutral-400">Недвижимость</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">Оспаривание некачественного ремонта от застройщика</h3>
<div className="space-y-3 text-sm">
<div className="flex gap-4 border-b border-white/[0.05] pb-3">
<span className="text-neutral-500 w-20 shrink-0">Проблема:</span>
<span className="text-neutral-300">Застройщик сдал квартиру с множественными дефектами (кривые стены, продувание окон). Отказывался устранять.</span>
</div>
<div className="flex gap-4 border-b border-white/[0.05] pb-3">
<span className="text-neutral-500 w-20 shrink-0">Решение:</span>
<span className="text-neutral-300">Проведена комплексная строительная экспертиза, составлена дефектная ведомость и смета на устранение.</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-500 w-20 shrink-0">Результат:</span>
<span className="text-blue-400 font-medium">Суд взыскал с застройщика 1.2 млн рублей компенсации и штраф.</span>
</div>
</div>
</div>

<div className="group bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-8 hover:border-white/[0.1] transition-all">
<div className="flex gap-2 mb-6">
<span className="px-2 py-1 rounded-md bg-white/[0.05] text-xs text-neutral-400">Досудебная</span>
<span className="px-2 py-1 rounded-md bg-white/[0.05] text-xs text-neutral-400">Аудит</span>
</div>
<h3 className="text-xl font-medium text-white mb-4">Завышение объемов работ подрядчиком</h3>
<div className="space-y-3 text-sm">
<div className="flex gap-4 border-b border-white/[0.05] pb-3">
<span className="text-neutral-500 w-20 shrink-0">Проблема:</span>
<span className="text-neutral-300">Заказчик усомнился в объемах выполненных земляных работ, предъявленных к оплате.</span>
</div>
<div className="flex gap-4 border-b border-white/[0.05] pb-3">
<span className="text-neutral-500 w-20 shrink-0">Решение:</span>
<span className="text-neutral-300">Контрольные обмеры геодезическим оборудованием, анализ актов КС-2.</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-500 w-20 shrink-0">Результат:</span>
<span className="text-blue-400 font-medium">Доказано завышение на 30%. Подрядчик согласился на перерасчет в досудебном порядке.</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/[0.05] bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Лицензии и допуски</h2>
<p className="text-neutral-500 text-sm">Официальные документы, подтверждающие нашу квалификацию.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors group" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white truncate">Выписка СРО</p>
<p className="text-xs text-neutral-500">PDF, 1.2 MB</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-blue-400 transition-colors" icon="solar:download-minimalistic-linear"></iconify-icon>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors group" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white truncate">Сертификат судебного эксперта</p>
<p className="text-xs text-neutral-500">PDF, 0.8 MB</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-blue-400 transition-colors" icon="solar:download-minimalistic-linear"></iconify-icon>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors group" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white truncate">Полис страхования ответственности</p>
<p className="text-xs text-neutral-500">PDF, 2.1 MB</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-blue-400 transition-colors" icon="solar:download-minimalistic-linear"></iconify-icon>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05] transition-colors group" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white truncate">Реквизиты компании</p>
<p className="text-xs text-neutral-500">PDF, 0.1 MB</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-blue-400 transition-colors" icon="solar:download-minimalistic-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Отзывы клиентов</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-6 relative">
<iconify-icon className="absolute top-6 right-6 text-white/[0.05] text-4xl" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-neutral-400 mb-6 relative z-10">"Обращались за экспертизой залива квартиры. Эксперт приехал в день обращения, все четко зафиксировал. Смета оказалась очень подробной, суд принял ее без вопросов. Спасибо за профессионализм!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-medium">АМ</div>
<div className="">
<p className="text-sm text-white font-medium">Алексей Михайлов</p>
<p className="text-xs text-neutral-600">Частный клиент</p>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-6 relative">
<iconify-icon className="absolute top-6 right-6 text-white/[0.05] text-4xl" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-neutral-400 mb-6 relative z-10">"Сотрудничаем с TL Expert по вопросам строительного аудита. Отчеты всегда подробные, с ссылками на нормативы. Помогают контролировать подрядчиков и не переплачивать. Рекомендую как надежного партнера."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-medium bg-amber-900/30 text-amber-400">СГ</div>
<div>
<p className="text-sm text-white font-medium">Сергей Гордеев</p>
<p className="text-xs text-neutral-600">ООО "СтройИнвест"</p>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/[0.05] rounded-3xl p-6 relative">
<iconify-icon className="absolute top-6 right-6 text-white/[0.05] text-4xl" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-neutral-400 mb-6 relative z-10">"Нужна была срочная оценка коммерческого помещения для банка. Сделали за 2 дня, отчет полностью устроил кредитный комитет. Очень оперативно и качественно."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-medium bg-amber-900/30 text-amber-400">ЕВ</div>
<div>
<p className="text-sm text-white font-medium">Елена Волкова</p>
<p className="text-xs text-neutral-600">Индивидуальный предприниматель</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.05] bg-[#020202] pt-24 pb-12" id="contacts">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">Контакты</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Офис</p>
<p className="text-sm text-neutral-500">г. Москва, ул. Примерная, д. 10, БЦ "Эксперт", офис 404</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Телефон</p>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="tel:+78000000000">8 (800) 000-00-00</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Email</p>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="mailto:info@tlexpert.ru">info@tlexpert.ru</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-neutral-500 mt-1" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-1">Режим работы</p>
<p className="text-sm text-neutral-500">Пн-Пт: 09:00 - 19:00<br/>Сб-Вс: выходной</p>
</div>
</div>
</div>
</div>

<div className="w-full h-[300px] md:h-full bg-[#0a0a0a] border border-white/[0.05] rounded-3xl relative overflow-hidden flex items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="absolute bottom-6 text-xs text-neutral-600 font-medium">Открыть карту</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/[0.05] pt-8 gap-4">
<div className="text-white text-lg font-semibold tracking-tighter uppercase">TL Expert</div>
<p className="text-xs text-neutral-600">© 2024 TL Expert. Все права защищены.</p>
<div className="flex gap-4 text-xs text-neutral-600">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Оферта</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
