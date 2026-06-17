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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF8]/80 backdrop-blur-md border-b border-gray-100/50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-2xl tracking-tight font-semibold text-[#2D3436]" href="#">
                A.Veresova
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#A8C69F] transition-colors" href="#about">Обо мне</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#A8C69F] transition-colors" href="#services">Услуги</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#A8C69F] transition-colors" href="#process">Процесс</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#A8C69F] transition-colors" href="#faq">Вопросы</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-[#2D3436] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-[#A8C69F] transition-all duration-300 shadow-lg shadow-gray-200" href="#contact">
                Записаться
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden p-2 text-gray-600">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] blob-1 blur-3xl opacity-60 -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-2 blur-3xl opacity-50 translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 lg:text-left text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A8C69F]/10 border border-[#A8C69F]/20 text-[#5F8C54] text-xs font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-[#5F8C54]"></span>
                        Доступна запись на Май
                    </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-[#2D3436] tracking-tight font-serif">
                        Верните себе <br/>
<span className="italic text-[#A8C69F]">внутреннюю</span> опору
                    </h1>
<p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Бережное пространство для работы с тревогой, выгоранием и поиском себя. Я помогу вам услышать свой голос.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#2D3436] text-white rounded-full font-medium transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/50 flex items-center justify-center gap-2 group" href="#contact">
                            Начать терапию
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-[#2D3436] rounded-full font-medium transition-all duration-300 hover:bg-gray-50 flex items-center justify-center" href="#about">
                            Узнать больше
                        </a>
</div>
<div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-gray-400">
<a className="hover:text-[#A8C69F] transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-[#A8C69F] transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:send" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-[#A8C69F] transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:message-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
<div className="relative w-72 h-72 md:w-96 md:h-96">

<div className="absolute inset-0 rounded-full border-2 border-[#A8C69F]/30 scale-105 animate-[spin_12s_linear_infinite]"></div>
<div className="absolute inset-0 rounded-full border border-[#D4A59A]/30 scale-110 animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative z-10">

<img alt="Анна Вересова" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=988&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 animate-[bounce_4s_infinite]">
<div className="p-2 bg-[#F5F1ED] rounded-full text-[#D4A59A]">
<svg aria-hidden="true" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-wide">Опыт работы</p>
<p className="text-sm font-semibold text-[#2D3436]">Более 7 лет</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#F5F1ED]/50 pt-24 pb-24" id="services">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-serif text-[#2D3436]">Форматы работы</h2>
<p className="text-gray-500 text-lg">Выбирайте тот формат, который кажется вам наиболее комфортным для начала пути.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 hover:border-[#A8C69F]/20 group flex flex-col bg-white border-transparent border rounded-[24px] pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-2xl flex items-center justify-center text-[#A8C69F] mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" data-icon="lucide:user" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-serif font-medium mb-3 text-[#2D3436]">Индивидуально</h3>
<p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                        Глубокая работа над личными запросами: тревога, самооценка, поиск предназначения, сложные чувства.
                    </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
<span className="text-sm font-medium text-gray-400">50 минут</span>
<span className="text-lg font-serif font-medium text-[#2D3436]">5 000 ₽</span>
</div>
</div>

<div className="hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 hover:border-[#D4A59A]/20 group flex flex-col overflow-hidden bg-white border-transparent border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
<div className="absolute top-0 right-0 px-3 py-1 bg-[#D4A59A] text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">Популярное</div>
<div className="w-12 h-12 bg-[#FAFAF8] rounded-2xl flex items-center justify-center text-[#D4A59A] mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xl font-serif font-medium mb-3 text-[#2D3436]">Парная терапия</h3>
<p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                        Помощь в преодолении кризисов в отношениях, восстановление доверия и улучшение коммуникации.
                    </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
<span className="text-sm font-medium text-gray-400">80 минут</span>
<span className="text-lg font-serif font-medium text-[#2D3436]">7 000 ₽</span>
</div>
</div>

<div className="bg-white p-8 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#C4B5D6]/20 group flex flex-col">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-2xl flex items-center justify-center text-[#C4B5D6] mb-6 group-hover:scale-110 transition-transform duration-500">
<svg aria-hidden="true" className="" data-icon="lucide:video" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-xl font-serif font-medium mb-3 text-[#2D3436]">Онлайн сессия</h3>
<p className="flex-grow leading-relaxed text-gray-500 mb-6" style={{}}>Полноценная консультация в удобном для вас месте через Zoom или Skype. Экономия времени.</p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
<span className="text-sm font-medium text-gray-400">50 минут</span>
<span className="text-lg font-serif font-medium text-[#2D3436]">5 000 ₽</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-serif mb-8 text-center text-[#2D3436]">С чем я работаю</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Тревожность и панические атаки</span>
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Низкая самооценка</span>
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Эмоциональное выгорание</span>
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Сложности в отношениях</span>
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Переживание утраты</span>
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Поиск себя</span>
<span className="px-5 py-2.5 rounded-full bg-[#FAFAF8] border border-gray-200 text-gray-600 text-sm hover:border-[#A8C69F] hover:bg-[#A8C69F]/5 transition-colors cursor-default">Кризисные состояния</span>
</div>
<p className="text-center text-sm text-gray-400 mt-8 italic">
            * Не работаю с химическими зависимостями и острыми психиатрическими состояниями.
        </p>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="process">
<div className="absolute right-0 bottom-0 w-[600px] h-[600px] blob-3 blur-[100px] opacity-30 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-serif text-[#2D3436] mb-12 text-center">Как проходят сессии</h2>
<div className="relative">

<div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-gray-100 via-[#A8C69F] to-gray-100 hidden md:block"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-6 relative group">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8] border-2 border-[#A8C69F]/30 flex items-center justify-center text-xl font-serif font-medium text-[#2D3436] relative z-10 group-hover:bg-[#A8C69F] group-hover:text-white transition-colors duration-500">1</div>
</div>
<div className="pt-2">
<h3 className="text-xl font-medium mb-2 text-[#2D3436]">Знакомство</h3>
<p className="text-gray-500 leading-relaxed">Бесплатная 15-минутная беседа, чтобы понять, подходим ли мы друг другу. Обсуждаем ваш запрос и организационные моменты.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 relative group">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8] border-2 border-[#D4A59A]/30 flex items-center justify-center text-xl font-serif font-medium text-[#2D3436] relative z-10 group-hover:bg-[#D4A59A] group-hover:text-white transition-colors duration-500">2</div>
</div>
<div className="pt-2">
<h3 className="text-xl font-medium mb-2 text-[#2D3436]">Начало терапии</h3>
<p className="text-gray-500 leading-relaxed">Первые 3-5 встреч мы исследуем вашу историю, формируем доверие и определяем глубинные причины текущего состояния.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 relative group">
<div className="flex-shrink-0">
<div className="w-16 h-16 rounded-full bg-[#FAFAF8] border-2 border-[#C4B5D6]/30 flex items-center justify-center text-xl font-serif font-medium text-[#2D3436] relative z-10 group-hover:bg-[#C4B5D6] group-hover:text-white transition-colors duration-500">3</div>
</div>
<div className="pt-2">
<h3 className="text-xl font-medium mb-2 text-[#2D3436]">Трансформация</h3>
<p className="text-gray-500 leading-relaxed">Регулярные встречи (раз в неделю), где мы шаг за шагом меняем паттерны поведения и мышления. Постепенное завершение терапии по достижению целей.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF8]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-serif text-center mb-12 text-[#2D3436]">Частые вопросы</h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-medium text-[#2D3436]">Гарантируете ли вы конфиденциальность?</span>
<span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                        Абсолютно. Я следую Этическому кодексу психолога. Всё, что мы обсуждаем на сессиях, остается строго между нами. Исключения составляют только ситуации угрозы жизни.
                    </div>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-medium text-[#2D3436]">Сколько сессий мне понадобится?</span>
<span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                        Это индивидуально. Для решения конкретной локальной проблемы может хватить 5-10 встреч. Глубинная работа над личностными изменениями обычно требует от полугода регулярной терапии.
                    </div>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-lg font-medium text-[#2D3436]">Что делать, если мне нужно отменить встречу?</span>
<span className="text-gray-400 transition-transform duration-300 group-open:rotate-180">
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 leading-relaxed animate-[fadeIn_0.3s_ease-out]">
                        Отмена или перенос сессии возможны не позднее чем за 24 часа до назначенного времени. Это позволяет мне планировать график, а вам — уважать наше общее время.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-[#F5F1ED] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.04)]">

<div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#A8C69F]/10 blur-3xl pointer-events-none"></div>
<div className="lg:w-1/2 space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-[#2D3436] mb-4">Начните путь к себе</h2>
<p className="text-gray-500 text-lg">Заполните форму, и я свяжусь с вами в течение рабочего дня, чтобы выбрать удобное время.</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 text-gray-600">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#A8C69F] shadow-sm">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<span>anna.psy@example.com</span>
</div>
<div className="flex items-center gap-4 text-gray-600">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#A8C69F] shadow-sm">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span>Telegram: @anna_psy</span>
</div>
<div className="flex items-center gap-4 text-gray-600">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#A8C69F] shadow-sm">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<span>Москва, ул. Сретенка 12 (или Онлайн)</span>
</div>
</div>
</div>
<div className="lg:w-1/2">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Имя</label>
<input className="w-full bg-white border-0 rounded-xl px-5 py-4 text-[#2D3436] placeholder-gray-300 focus:ring-2 focus:ring-[#A8C69F]/50 focus:outline-none transition-shadow shadow-sm" placeholder="Иван" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Телефон</label>
<input className="w-full bg-white border-0 rounded-xl px-5 py-4 text-[#2D3436] placeholder-gray-300 focus:ring-2 focus:ring-[#A8C69F]/50 focus:outline-none transition-shadow shadow-sm" placeholder="+7 (999) ..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Способ связи</label>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="contact_method" type="radio"/>
<div className="bg-white rounded-xl py-3 text-center text-sm text-gray-500 peer-checked:bg-[#A8C69F] peer-checked:text-white peer-checked:shadow-md transition-all">Telegram</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="contact_method" type="radio"/>
<div className="bg-white rounded-xl py-3 text-center text-sm text-gray-500 peer-checked:bg-[#A8C69F] peer-checked:text-white peer-checked:shadow-md transition-all">WhatsApp</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="contact_method" type="radio"/>
<div className="bg-white rounded-xl py-3 text-center text-sm text-gray-500 peer-checked:bg-[#A8C69F] peer-checked:text-white peer-checked:shadow-md transition-all">Звонок</div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-500 uppercase tracking-wide ml-1">Кратко о запросе (необязательно)</label>
<textarea className="w-full bg-white border-0 rounded-xl px-5 py-4 text-[#2D3436] placeholder-gray-300 focus:ring-2 focus:ring-[#A8C69F]/50 focus:outline-none transition-shadow shadow-sm resize-none" rows="3"></textarea>
</div>
<button className="w-full bg-[#2D3436] text-white font-medium text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#3D4548] transition-all duration-300 mt-2" type="button">
                            Отправить заявку
                        </button>
<p className="text-[10px] text-center text-gray-400">
                            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#FAFAF8] border-t border-gray-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight font-semibold text-[#2D3436]" href="#">A.Veresova</a>
<p className="text-gray-400 text-sm mt-2">Клинический психолог, г. Москва</p>
</div>
<div className="flex gap-8 text-sm text-gray-500 font-medium">
<a className="hover:text-[#A8C69F] transition-colors" href="#about">Обо мне</a>
<a className="hover:text-[#A8C69F] transition-colors" href="#services">Услуги</a>
<a className="hover:text-[#A8C69F] transition-colors" href="#contact">Контакты</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#A8C69F] hover:text-[#A8C69F] hover:bg-white transition-all" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#A8C69F] hover:text-[#A8C69F] hover:bg-white transition-all" href="#">
<svg aria-hidden="true" data-icon="lucide:send" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2024 Анна Вересова. Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-gray-600" href="#">Политика конфиденциальности</a>
<a className="hover:text-gray-600" href="#">Договор оферты</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
