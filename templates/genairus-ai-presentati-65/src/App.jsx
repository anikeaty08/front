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



        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const counter = document.getElementById('counter');
        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.remove('opacity-0', 'pointer-events-none', 'scale-95', 'translate-y-4');
                    slide.classList.add('opacity-100', 'pointer-events-auto', 'scale-100', 'translate-y-0');
                    slide.style.zIndex = '10';
                } else {
                    slide.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100', 'translate-y-0');
                    slide.classList.add('opacity-0', 'pointer-events-none');
                    // Directional transition logic
                    if (index < currentSlide) {
                        slide.classList.add('scale-95', '-translate-y-4');
                        slide.classList.remove('translate-y-4');
                    } else {
                        slide.classList.add('scale-95', 'translate-y-4');
                        slide.classList.remove('-translate-y-4');
                    }
                    slide.style.zIndex = '0';
                }
            });

            counter.textContent = `${currentSlide + 1}/${totalSlides}`;
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlider();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        }

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });

        // Initialize setup
        slides.forEach((slide, index) => {
            if (index !== 0) {
                slide.classList.add('opacity-0', 'pointer-events-none', 'scale-95', 'translate-y-4');
            }
        });
        updateSlider();
    
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
      

<div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/50 rounded-full px-3 py-2 shadow-2xl">
<button className="flex items-center justify-center h-8 w-8 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-400" disabled="" id="prevBtn">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="text-xs font-medium text-zinc-500 w-10 text-center tracking-widest" id="counter">1/9</span>
<button className="flex items-center justify-center h-8 w-8 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-zinc-400" id="nextBtn">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="relative w-full h-full" id="slider">

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center opacity-100 pointer-events-auto scale-100 translate-y-0" style={{zIndex: '10'}}>

<div className="absolute top-0 left-1/4 w-3/4 h-3/4 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-3/4 h-3/4 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<h1 className="md:text-8xl bg-clip-text uppercase z-10 text-6xl font-semibold text-transparent tracking-tighter bg-gradient-to-br from-white via-white to-zinc-400 relative drop-shadow-sm">GenAIrus</h1>
<h2 className="text-lg md:text-2xl text-zinc-400 mt-6 tracking-tight relative z-10 font-medium">Создаем <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">полезные решения</span></h2>
<div className="absolute bottom-8 left-8 text-xs text-zinc-600 font-medium tracking-wide">
                @Genairus 2026, несекретно.
            </div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-16 flex flex-col justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>
<div className="max-w-4xl mx-auto w-full">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-12">Компетенции</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm flex items-start gap-4">
<div className="mt-1 bg-zinc-800 p-2 rounded-lg text-white">
<iconify-icon className="text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">10 лет опыта</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Многолетний опыт в развитии, оптимизации и масштабировании сложных бизнес-процессов.</p>
</div>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm flex items-start gap-4">
<div className="mt-1 bg-zinc-800 p-2 rounded-lg text-white">
<iconify-icon className="text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Специализация</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Углубленная экспертиза в сфере индустриальной автоматизации и высокотехнологичных производств.</p>
</div>
</div>
<div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm flex items-start gap-4 md:col-span-2">
<div className="mt-1 bg-zinc-800 p-2 rounded-lg text-white">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Все аспекты бизнеса</h3>
<p className="text-sm text-zinc-400 leading-relaxed flex flex-wrap gap-2 mt-3">
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Расчет бизнес-моделей</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Создание продукта</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Стратегия</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Маркетинг и продажи</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Производство</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Складирование</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Доставка</span>
<span className="px-2 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50">Постпродажное обслуживание</span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-16 flex flex-col justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>
<div className="max-w-5xl mx-auto w-full">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-10">Результаты деятельности</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4">
<iconify-icon className="text-2xl text-white" icon="solar:global-linear"></iconify-icon>
<div className="text-4xl font-semibold text-white tracking-tighter">10</div>
<p className="text-sm text-zinc-400">Зарубежных компаний успешно выведено на российский рынок</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4">
<iconify-icon className="text-2xl text-white" icon="solar:wallet-money-linear"></iconify-icon>
<div className="text-4xl font-semibold text-white tracking-tighter">&gt;5 <span className="text-2xl text-zinc-500">млрд ₽</span></div>
<p className="text-sm text-zinc-400">Кумулятивный общий портфель заказов</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4">
<iconify-icon className="text-2xl text-white" icon="solar:box-linear"></iconify-icon>
<div className="text-lg font-semibold text-white tracking-tight mt-auto">Новые продукты</div>
<p className="text-sm text-zinc-400">Создание комплексных систем и решений для рынка РФ</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4 md:col-span-2">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-xl text-white" icon="solar:routing-2-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Логистика и складирование</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Собственная компания с налаженной архитектурой доставки грузов из Европы, Азии и США.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-xl text-white" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-base font-medium text-white tracking-tight">Поддержка</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Бесперебойное постпродажное обслуживание по всем ключевым проектам.</p>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-16 flex flex-col justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>
<div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 w-fit mb-4">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="text-xs font-medium text-zinc-300">Разбор кейса</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Авиация</h2>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p>Работаем в авиации с 2012 года. В РФ уверенно заняли рынок информационно-развлекательных систем (ИРС) для VIP-бортов.</p>
<div className="flex items-center gap-6 py-4 border-y border-zinc-800/50">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">10 <span className="text-sm font-normal text-zinc-500">лет</span></div>
<div className="text-xs mt-1">опыта на рынке</div>
</div>
<div className="w-px h-8 bg-zinc-800"></div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">14 <span className="text-sm font-normal text-zinc-500">бортов</span></div>
<div className="text-xs mt-1">успешно оснащено</div>
</div>
</div>
<p>Поддерживаем летную годность по части ИРС своими силами. С 2023 года вошли в стратегическое партнерство с российской компанией и создали уникальную систему.</p>
<ul className="space-y-2 mt-4">
<li className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Рекордные сроки: 1 год от прототипа к серийному комплекту</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Прошли строгую сертификацию блоков по КТ-160</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Получили доп. сертификат типа на установку на ВС SBJ 100</span>
</li>
</ul>
<div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
<div className="flex items-center gap-2 mb-2 text-white font-medium">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm">Инновация проекта</span>
</div>
<p className="text-xs text-zinc-300">В экспериментальном режиме внедряем генеративный ИИ для обеспечения интуитивного и персонализированного пользования системой пассажирами.</p>
</div>
</div>
</div>
<div className="relative h-64 lg:h-[600px] w-full rounded-2xl overflow-hidden border border-zinc-800">
<img alt="Taking off airplane" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-lighten hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
<h2 className="text-5xl md:text-7xl tracking-tighter font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 drop-shadow-lg text-center px-4 relative z-10">Эра генеративного ИИ</h2>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-16 flex flex-col justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>
<div className="max-w-5xl mx-auto w-full">
<div className="mb-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">Опыт реализаций</h2>
<p className="text-base text-zinc-400">Профессионально занимаемся тематикой генеративного ИИ с 2024 года.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-xl text-white mb-3" icon="solar:monitor-smartphone-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">SOTA LLM Портал</h3>
<p className="text-xs text-zinc-400">Создание централизованного корпоративного веб-портала с использованием передовых моделей.</p>
</div>
<div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-xl text-white mb-3" icon="solar:chat-round-dots-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Агентские чат-боты</h3>
<p className="text-xs text-zinc-400">Интеллектуальные системы поддержки и консультаций с контекстной памятью.</p>
</div>
<div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-xl text-white mb-3" icon="solar:calendar-mark-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Агенты-секретари</h3>
<p className="text-xs text-zinc-400">Ведение календаря, отправка напоминаний, запись встреч и автоматическая генерация отчетов.</p>
</div>
<div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-xl text-white mb-3" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Супер-агент HR</h3>
<p className="text-xs text-zinc-400">Поиск кандидатов, создание планов интервью и объективная оценка ответов соискателей.</p>
</div>
<div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-xl text-white mb-3" icon="solar:volume-up-square-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Анализ аудио и видео</h3>
<p className="text-xs text-zinc-400">Системы распознавания звуков и агентское видеонаблюдение с аналитикой в реальном времени.</p>
</div>
<div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-xl text-white mb-3" icon="solar:code-scan-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Code Analyzer</h3>
<p className="text-xs text-zinc-400">ИИ-анализатор кодовой базы с генерацией автотестов и программой онбординга новых разработчиков.</p>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-16 flex flex-col justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>
<div className="max-w-6xl mx-auto w-full">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-12">Методология оркестратора</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h3 className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-6">Архитектурные паттерны</h3>
<div className="space-y-3">
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<div className="text-xs font-semibold text-zinc-500 w-4">01</div>
<div className="text-sm font-medium text-zinc-200">LLM-Workflow <span className="text-zinc-500 font-normal ml-2">(Детерминированное исполнение)</span></div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<div className="text-xs font-semibold text-zinc-500 w-4">02</div>
<div className="text-sm font-medium text-zinc-200">ReAct <span className="text-zinc-500 font-normal ml-2">(Рассуждение и выбор действия)</span></div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<div className="text-xs font-semibold text-zinc-500 w-4">03</div>
<div className="text-sm font-medium text-zinc-200">Reflexion <span className="text-zinc-500 font-normal ml-2">(Самоанализ)</span></div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
<div className="text-xs font-semibold text-zinc-500 w-4">04</div>
<div className="text-sm font-medium text-zinc-200">Plan-and-Execute <span className="text-zinc-500 font-normal ml-2">(Планирование и исполнение)</span></div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
<div className="text-xs font-semibold text-white w-4">05</div>
<div className="text-sm font-medium text-white">Plan-and-Execute + Мультиагентность</div>
</div>
</div>
</div>
<div>
<h3 className="text-xs text-zinc-500 font-medium uppercase tracking-widest mb-6">Технологический стек</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Используем самые продвинутые методики для направления агента к нужному нам результату:</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 border border-zinc-800 rounded-xl bg-[#0a0a0a]">
<div className="text-sm font-semibold text-white mb-1">vLLM</div>
<div className="text-xs text-zinc-500">Оптимизированный высокоскоростной инференс</div>
</div>
<div className="p-4 border border-zinc-800 rounded-xl bg-[#0a0a0a]">
<div className="text-sm font-semibold text-white mb-1">RAG / GraphRAG</div>
<div className="text-xs text-zinc-500">Обогащение персональным контекстом и графами знаний</div>
</div>
<div className="p-4 border border-zinc-800 rounded-xl bg-[#0a0a0a]">
<div className="text-sm font-semibold text-white mb-1">Langgraph</div>
<div className="text-xs text-zinc-500">Контроль стейтов модели и потоков агентов</div>
</div>
<div className="p-4 border border-zinc-800 rounded-xl bg-[#0a0a0a]">
<div className="text-sm font-semibold text-white mb-1">SGR</div>
<div className="text-xs text-zinc-500">Управление вектором мышления моделей</div>
</div>
<div className="p-4 border border-zinc-800 rounded-xl bg-[#0a0a0a] sm:col-span-2">
<div className="text-sm font-semibold text-white mb-1">SO &amp; CoT</div>
<div className="text-xs text-zinc-500">Управление и структурирование вывода моделей (Chain-of-Thought)</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out p-8 md:p-16 flex flex-col justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>
<div className="max-w-6xl mx-auto w-full">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-16 text-center">План взаимодействия</h2>

<div className="flex flex-wrap items-center justify-center gap-y-8 gap-x-2 md:gap-x-4 max-w-4xl mx-auto cursor-default">

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            ТКП
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            Анализ процессов
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            Архитектура
                        </div>
<iconify-icon className="text-zinc-600 text-lg hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-white/20 bg-white/5 shadow-[0_0_10px_rgba(255,255,255,0.05)] text-xs md:text-sm font-medium text-white whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:border-fuchsia-400 hover:bg-white/10">
                            MVP (Валидация)
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            Финальная архитектура
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            Оптимизация
                        </div>
<iconify-icon className="text-zinc-600 text-lg hidden md:block" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            Отладка &amp; Тесты
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800">
                            Обучение клиента
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-white/30 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-xs md:text-sm font-semibold text-white whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] hover:border-emerald-400 hover:bg-white/20">
                            Релиз в продакшн
                        </div>
<iconify-icon className="text-zinc-600 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 md:gap-4">
<div className="px-4 py-2.5 rounded-full border border-zinc-700 bg-zinc-900 shadow-sm text-xs md:text-sm font-medium text-zinc-200 whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:border-indigo-400 hover:bg-zinc-800 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear"></iconify-icon>
                            Техподдержка
                        </div>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center opacity-0 pointer-events-none scale-95 translate-y-4" style={{zIndex: '0'}}>

<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-indigo-500/10 blur-[150px] pointer-events-none"></div>
<h1 className="text-6xl md:text-8xl tracking-tighter font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 uppercase relative z-10">GenAIrus</h1>
<div className="absolute bottom-8 text-xs text-zinc-600 font-medium tracking-wide relative z-10">
                @Genairus 2026, несекретно.
            </div>
</div>
</div>



    </>
  );
}
