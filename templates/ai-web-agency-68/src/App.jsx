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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:atom-linear"></iconify-icon>
</div>
<span className="font-medium text-sm tracking-widest uppercase opacity-80">Twist Sites</span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest text-white/50">
<a className="hover:text-white transition-colors duration-300" href="#process">Процесс</a>
<a className="hover:text-white transition-colors duration-300" href="#portfolio">Проекты</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Цены</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-300" href="#contact">
                Начать проект
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-noise">
<div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
<div className="max-w-4xl">
<div className="reveal-element inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] font-medium uppercase tracking-widest text-white/60">AI Web Agency</span>
</div>
<h1 className="reveal-element reveal-delay-100 text-5xl md:text-7xl lg:text-[90px] leading-[0.95] font-medium tracking-tighter text-white mb-8">
                    Мы создаем <br/>
<span className="text-white/30">цифровое будущее</span><br/>
                    для вашего бизнеса.
                </h1>
<p className="reveal-element reveal-delay-200 text-lg md:text-xl text-white/50 max-w-xl font-light leading-relaxed mb-12">
                    Объединяем эстетику, технологии и искусственный интеллект, чтобы запускать премиальные сайты за считанные дни.
                </p>
<div className="reveal-element reveal-delay-300 flex flex-col sm:flex-row items-start gap-6">
<a className="group relative px-8 py-4 bg-white text-black rounded-full text-sm font-medium overflow-hidden transition-all hover:pr-10" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                            Обсудить задачу
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors" href="#portfolio">
                        Смотреть работы
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-blue-900/10 to-transparent blur-[120px] pointer-events-none"></div>
</section>

<div className="w-full border-y border-white/[0.06] bg-[#0A0A0A] overflow-hidden py-8 reveal-element">
<div className="flex items-center justify-around opacity-30 grayscale hover:grayscale-0 transition-all duration-700 max-w-[1400px] mx-auto px-6">
<iconify-icon className="text-3xl" icon="solar:code-square-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:figma-file-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:server-square-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:smartphone-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-3xl" icon="solar:cloud-linear"></iconify-icon>
</div>
</div>

<section className="py-32 px-6" id="process">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20 reveal-element">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Как мы работаем</h2>
<div className="h-[1px] w-full bg-white/10"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-element md:col-span-2 p-10 rounded-3xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-colors duration-500 group relative overflow-hidden">
<div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black">
<iconify-icon className="text-2xl text-white" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium mb-3 tracking-tight">AI Генерация &amp; Дизайн</h3>
<p className="text-white/50 max-w-md">Используем передовые нейросети для создания уникальной структуры и контента, затем дорабатываем вручную до идеала.</p>
</div>
</div>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="reveal-element reveal-delay-100 p-10 rounded-3xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-colors duration-500 group">
<div className="h-full flex flex-col justify-between min-h-[300px]">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black">
<iconify-icon className="text-2xl text-white" icon="solar:programming-linear"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-medium mb-3 tracking-tight">Чистый код</h3>
<p className="text-white/50">Без конструкторов. Только HTML, Tailwind и JS для максимальной скорости.</p>
</div>
</div>
</div>

<div className="reveal-element reveal-delay-200 md:col-span-3 p-10 rounded-3xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-colors duration-500 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="max-w-xl">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black">
<iconify-icon className="text-2xl text-white" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3 tracking-tight">Запуск за 72 часа</h3>
<p className="text-white/50">Оптимизированный процесс позволяет нам выдавать готовый результат быстрее любого классического агентства.</p>
</div>
<div className="flex gap-4 opacity-50">
<div className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest">Анализ</div>
<div className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest">Прототип</div>
<div className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest">Релиз</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#080808]" id="portfolio">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20 reveal-element flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Избранные проекты</h2>
<div className="h-[1px] w-24 bg-white"></div>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" href="#">
                    Все кейсы <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer reveal-element">
<div className="aspect-[16/10] bg-[#111] rounded-lg overflow-hidden mb-6 relative border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#050505] rounded shadow-2xl border border-white/5 group-hover:scale-[1.02] transition-transform duration-700 flex flex-col p-4">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="w-full h-24 bg-white/5 rounded mb-3"></div>
<div className="w-2/3 h-4 bg-white/5 rounded"></div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium mb-1">Architech Studio</h3>
<p className="text-sm text-white/40">Architecture • Web Design</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer reveal-element reveal-delay-100">
<div className="aspect-[16/10] bg-[#111] rounded-lg overflow-hidden mb-6 relative border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#050505] rounded shadow-2xl border border-white/5 group-hover:scale-[1.02] transition-transform duration-700 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon className="text-3xl text-white/30" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium mb-1">Eco Life</h3>
<p className="text-sm text-white/40">E-commerce • Branding</p>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="pricing">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-1 reveal-element">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Прозрачные<br/>Тарифы</h2>
<p className="text-white/50 max-w-xs mb-8">Фиксированная стоимость. Никаких скрытых платежей. Выберите то, что подходит вашему бизнесу.</p>
<a className="text-sm border-b border-white/30 pb-0.5 hover:text-white hover:border-white transition-colors" href="#faq">Частые вопросы</a>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.06] hover:border-white/20 transition-all duration-300 reveal-element reveal-delay-100">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-medium text-lg">Старт</h3>
<p className="text-xs text-white/40 mt-1">Для быстрого запуска</p>
</div>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/60">30 000 ₽</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> One-page сайт
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Адаптив Mobile/Desktop
                            </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> 3 дня на разработку
                            </li>
</ul>
<a className="block w-full py-3 text-center border border-white/10 rounded-lg text-sm hover:bg-white hover:text-black transition-all" href="#contact">Выбрать</a>
</div>

<div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 relative reveal-element reveal-delay-200">
<div className="absolute -top-3 right-8 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Best</div>
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-medium text-lg text-white">Бизнес</h3>
<p className="text-xs text-white/40 mt-1">Полный функционал</p>
</div>
<span className="px-3 py-1 rounded-full bg-white text-black text-xs font-medium">45 000 ₽</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Многостраничный сайт
                            </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> CMS (Управление)
                            </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> SEO + Аналитика
                            </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> 5 дней на разработку
                            </li>
</ul>
<a className="block w-full py-3 text-center bg-white text-black rounded-lg text-sm hover:bg-gray-200 transition-all" href="#contact">Выбрать</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/[0.06]" id="faq">
<div className="max-w-[800px] mx-auto">
<h2 className="text-2xl font-medium mb-12 text-center tracking-tight reveal-element">Вопросы и ответы</h2>
<div className="space-y-2">
<details className="group bg-[#0A0A0A] rounded-lg overflow-hidden reveal-element">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium">Какие сроки разработки?</span>
<iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-white/50" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
                        Стандартный лендинг мы делаем за 3 рабочих дня. Многостраничные сайты занимают от 5 до 7 дней. Скорость достигается за счет использования AI и готовых проверенных решений.
                    </div>
</details>
<details className="group bg-[#0A0A0A] rounded-lg overflow-hidden reveal-element">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium">Что нужно от меня?</span>
<iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-white/50" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
                        Только заполнить бриф. Если у вас есть логотип и фото - отлично. Если нет - мы подберем или сгенерируем их сами.
                    </div>
</details>
<details className="group bg-[#0A0A0A] rounded-lg overflow-hidden reveal-element">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium">Работаете по договору?</span>
<iconify-icon className="group-open:rotate-45 transition-transform duration-300 text-white/50" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
                        Да, мы работаем официально (ИП) с заключением договора и предоставлением всех закрывающих документов.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-[#0A0A0A]" id="contact">
<div className="absolute inset-0 opacity-20">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-xl mx-auto relative z-10 text-center">
<h2 className="reveal-element text-4xl md:text-6xl font-medium tracking-tighter mb-6">Готовы начать?</h2>
<p className="reveal-element reveal-delay-100 text-white/50 mb-10">Оставьте заявку на бесплатную консультацию. Мы проанализируем вашу задачу и предложим решение.</p>
<form className="reveal-element reveal-delay-200 text-left space-y-3">
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-4 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20" placeholder="Ваше имя" type="text"/>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-4 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20" placeholder="Telegram / WhatsApp" type="text"/>
<button className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-gray-200 transition-colors mt-4" type="button">
                    Отправить заявку
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/[0.06] bg-[#050505]">
<div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-white/40">
                © 2024 Twist Sites AI. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Telegram</a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Email</a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>



    </>
  );
}
