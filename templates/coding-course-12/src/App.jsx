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



        // Initialize Lucide Icons
        lucide.createIcons();

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Initial Load Timeline
        const tl = gsap.timeline();
        
        tl.from(".nav-element", { 
            y: -30, 
            opacity: 0, 
            duration: 1, 
            ease: "power3.out" 
        })
        .from(".hero-sphere", { 
            scale: 0.7, 
            opacity: 0, 
            duration: 2, 
            ease: "power2.out" 
        }, "-=0.5")
        .from(".hero-text", { 
            y: 40, 
            opacity: 0, 
            duration: 1.2, 
            stagger: 0.2, 
            ease: "power3.out" 
        }, "-=1.5");

        // Sphere continuous subtle rotation
        gsap.to(".hero-sphere-rotate", {
            rotation: 360,
            duration: 60,
            repeat: -1,
            ease: "none"
        });

        // Scroll Animations for sections
        gsap.utils.toArray('.fade-up').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Staggered grid animations
        gsap.utils.toArray('.stagger-grid').forEach(grid => {
            const items = grid.querySelectorAll('.stagger-item');
            gsap.from(items, {
                scrollTrigger: {
                    trigger: grid,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
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
      

<div className="fixed top-0 right-0 w-[80vw] h-[100vh] bg-[radial-gradient(circle_at_70%_50%,_rgba(180,40,0,0.3),_transparent_60%)] pointer-events-none z-0"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/5 flex items-center justify-between px-6 py-4 nav-element">
<div className="flex items-center gap-3">
<div className="grid grid-cols-2 gap-[2px]">
<div className="w-2.5 h-2.5 rounded-full bg-white"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></div>
</div>
<span className="text-base font-mono uppercase tracking-widest text-white">IZUM.STUDY</span>
</div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-gray-400">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#about"><span className="w-1.5 h-1.5 rounded-full border border-current"></span> Программа</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#features"><span className="w-1.5 h-1.5 rounded-full border border-current"></span> Стоимость</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#members"><span className="w-1.5 h-1.5 rounded-full border border-current"></span> Контакты</a>
</div>
<button className="text-white hover:text-[#ff5e00] transition-colors">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<section className="relative h-screen min-h-[700px] flex flex-col justify-end px-6 md:px-12 pb-12 z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square flex items-center justify-center hero-sphere">
<div className="absolute inset-0 bg-[#ff2a00] blur-[100px] opacity-20 rounded-full"></div>
<div className="absolute inset-0 particle-sphere opacity-80 hero-sphere-rotate"></div>

<div className="absolute inset-4 particle-sphere opacity-40 mix-blend-screen" style={{backgroundSize: '14px 14px', maskImage: 'radial-gradient(circle at 60% 40%, black 20%, transparent 60%)'}}></div>
</div>

<div className="w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end justify-between relative z-20 h-full mt-auto">

<div className="w-full md:w-1/2 mb-16 md:mb-0 hero-text">
<h1 className="text-5xl md:text-[5rem] font-medium tracking-tight uppercase leading-[1] text-white">
                    Научись<br/>
                    верстать вместе<br/>
                    с IZUM.STUDY
                </h1>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-gray-500 uppercase hero-text">
                [Скролл]
            </div>

<div className="w-full md:w-auto flex flex-col md:items-end text-left md:text-right hero-text">
<p className="text-base font-mono text-gray-300 mb-8 uppercase tracking-widest text-balance max-w-xs leading-relaxed">
                    Научим верстать сайты<br/>любой сложности на<br/>таптон — с нуля до профи
                </p>
<div className="flex items-center gap-6 mb-8 font-mono text-xs tracking-widest uppercase">
<a className="text-gray-400 hover:text-white transition-colors" href="#">Telegram</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">DProfile</a>
</div>
<div className="flex items-center gap-2">
<button className="bg-white text-black px-8 py-4 font-mono text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                        Хочу в топ
                    </button>
<button className="bg-white text-black w-[52px] h-[52px] flex items-center justify-center hover:bg-gray-200 transition-colors">
<i data-lucide="grip"></i>
</button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0a0503] relative z-10 fade-up">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5 stagger-grid">
<div className="flex flex-col stagger-item">
<span className="text-4xl font-medium tracking-tight text-[#ff5e00]">150+</span>
<span className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">Выпускников</span>
</div>
<div className="flex flex-col stagger-item">
<span className="text-4xl font-medium tracking-tight">12</span>
<span className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">Модулей</span>
</div>
<div className="flex flex-col stagger-item">
<span className="text-4xl font-medium tracking-tight">80%</span>
<span className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">Трудоустроены</span>
</div>
<div className="flex flex-col stagger-item">
<span className="text-4xl font-medium tracking-tight">24/7</span>
<span className="text-xs text-gray-500 mt-2 font-mono uppercase tracking-widest">Поддержка</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="fade-up">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.1] uppercase">Мы устали от<br/>базовых курсов.</h2>
<p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        Большинство школ дают только основы, оставляя вас один на один с реальными сложными макетами. IZUM.STUDY был создан как антидот. Мы погружаемся в хардкорную практику и нестандартные решения.
                    </p>
<p className="text-gray-400 text-lg leading-relaxed">
                        Здесь вы научитесь не просто переносить пиксели из Figma в код, а создавать живые, оптимизированные и семантически верные проекты уровня топ-студий.
                    </p>
</div>
<div className="bg-[#0a0503] border border-white/5 p-8 md:p-12 fade-up">
<i className="text-[#ff5e00] mb-8 w-8 h-8" data-lucide="quote"></i>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug mb-10 text-white/90">
                        "Качество верстки определяет, как продукт будет восприниматься. Мы учим задавать стандарты, а не следовать им."
                    </p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-white/5 border border-white/10 rounded flex items-center justify-center">
<i className="text-gray-400" data-lucide="user"></i>
</div>
<div>
<div className="text-base font-medium">Алекс Ройт</div>
<div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Основатель IZUM</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050200] relative z-10 border-t border-white/5" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-20 fade-up">
<div className="font-mono text-xs text-[#ff5e00] uppercase tracking-widest mb-4">[ Инфраструктура ]</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 uppercase">Всё для роста</h2>
<p className="text-gray-400 text-lg max-w-xl">Инструменты и знания, чтобы оставаться на острие индустрии, без воды и информационного мусора.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-grid">

<div className="md:col-span-2 bg-[#0a0503] border border-white/5 p-8 flex flex-col justify-between group hover:border-[#ff5e00]/50 transition-colors stagger-item">
<div className="mb-12">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-8">
<i className="text-white" data-lucide="library"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Закрытая база знаний</h3>
<p className="text-gray-400 text-base leading-relaxed max-w-lg">Архив записей закрытых лекций, шаблонов, сниппетов и фреймворков от ведущих разработчиков.</p>
</div>
<div className="h-40 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,94,0,0.1),_transparent_70%)] border border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff5e00]/50 to-transparent"></div>
</div>
</div>

<div className="bg-[#0a0503] border border-white/5 p-8 group hover:border-[#ff5e00]/50 transition-colors stagger-item">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-8">
<i className="text-white" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Приватный чат</h3>
<p className="text-gray-400 text-base leading-relaxed">Асинхронное общение без флуда. Помощь кураторов и разбор сложных кейсов.</p>
</div>

<div className="bg-[#0a0503] border border-white/5 p-8 group hover:border-[#ff5e00]/50 transition-colors stagger-item">
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-8">
<i className="text-white" data-lucide="briefcase"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Заказы студий</h3>
<p className="text-gray-400 text-base leading-relaxed">Доступ к реальным коммерческим задачам от наших партнеров для лучших студентов.</p>
</div>

<div className="md:col-span-2 bg-[#0a0503] border border-white/5 p-8 flex flex-col justify-between group hover:border-[#ff5e00]/50 transition-colors stagger-item">
<div>
<div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-8">
<i className="text-white" data-lucide="monitor-play"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Суровые код-ревью</h3>
<p className="text-gray-400 text-base leading-relaxed max-w-lg">Еженедельные видео-созвоны, где мы по строчкам разбираем код. Честная критика, которая помогает расти.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden relative z-10 border-t border-white/5" id="members">
<div className="max-w-6xl mx-auto px-6 mb-16 text-center fade-up">
<div className="font-mono text-xs text-[#ff5e00] uppercase tracking-widest mb-4">[ Резиденты ]</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 uppercase">Наши выпускники</h2>
<p className="text-gray-400 text-lg">Люди, которые создают сайты, награжденные Awwwards и CSSDA.</p>
</div>

<div className="relative flex overflow-x-hidden fade-up">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050200] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050200] to-transparent z-10"></div>
<div className="animate-marquee whitespace-nowrap flex gap-4 px-2" style={{animation: 'marquee 30s linear infinite'}}>

<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Михаил К.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Frontend @ FinTech</div>
</div>
</div>
<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Анна С.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Web Developer @ Agency</div>
</div>
</div>
<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Дмитрий В.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Lead UI @ BigTech</div>
</div>
</div>
<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Елена М.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Creative Developer</div>
</div>
</div>
<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Илья П.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Design Engineer</div>
</div>
</div>

<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Михаил К.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Frontend @ FinTech</div>
</div>
</div>
<div className="w-80 border border-white/5 bg-[#0a0503] p-6 flex items-center gap-5 shrink-0 hover:border-white/20 transition-colors">
<div className="w-14 h-14 bg-[#1a0f0a] border border-white/10"></div>
<div>
<div className="text-base font-medium mb-1">Анна С.</div>
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Web Developer @ Agency</div>
</div>
</div>
</div>
<style>
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
            </style>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#080301] relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20 fade-up">
<div className="font-mono text-xs text-[#ff5e00] uppercase tracking-widest mb-4">[ Этапы ]</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">Как проходит отбор</h2>
</div>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-[1.35rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent stagger-grid">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group stagger-item">
<div className="flex items-center justify-center w-11 h-11 border border-[#ff5e00] bg-black text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm">
                        01
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#0a0503] border border-white/5 p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium tracking-tight mb-3">Заявка</h3>
<p className="text-base text-gray-400 leading-relaxed">Заполните короткую анкету и прикрепите ссылку на ваши текущие работы или код.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group stagger-item">
<div className="flex items-center justify-center w-11 h-11 border border-white/10 bg-black text-gray-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm group-hover:border-white/30 transition-colors">
                        02
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#0a0503] border border-white/5 p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium tracking-tight mb-3">Тестовое задание</h3>
<p className="text-base text-gray-400 leading-relaxed">Небольшой макет для оценки базовых знаний HTML/CSS и вашего подхода к структуре.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group stagger-item">
<div className="flex items-center justify-center w-11 h-11 border border-white/10 bg-black text-gray-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm group-hover:border-white/30 transition-colors">
                        03
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#0a0503] border border-white/5 p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium tracking-tight mb-3">Интервью</h3>
<p className="text-base text-gray-400 leading-relaxed">Короткий созвон с куратором для определения целей и составления плана обучения.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group stagger-item">
<div className="flex items-center justify-center w-11 h-11 border border-white/10 bg-black text-gray-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-sm group-hover:border-white/30 transition-colors">
                        04
                    </div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#0a0503] border border-white/5 p-8 hover:border-white/10 transition-colors">
<h3 className="text-xl font-medium tracking-tight mb-3">Старт обучения</h3>
<p className="text-base text-gray-400 leading-relaxed">Доступ к платформе, чатам и первому хардкорному проекту.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="faq">
<div className="max-w-3xl mx-auto px-6 fade-up">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 uppercase">Частые вопросы</h2>
<div className="divide-y divide-white/5 border-y border-white/5">

<details className="group py-8 [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between cursor-pointer font-medium text-xl tracking-tight">
                        Сколько длится обучение?
                        <span className="transition group-open:rotate-180 text-gray-500">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-400 text-lg mt-6 pr-12 leading-relaxed">
                        В среднем программа занимает 4 месяца при занятости 10-15 часов в неделю. Но доступ к материалам остается навсегда.
                    </p>
</details>

<details className="group py-8 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-xl tracking-tight">
                        Я совсем новичок, мне подойдет?
                        <span className="transition group-open:rotate-180 text-gray-500">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-400 text-lg mt-6 pr-12 leading-relaxed">
                        Мы начинаем с самых азов, но темп интенсивный. Если вы готовы много практиковаться и гуглить — да, мы доведем вас до результата.
                    </p>
</details>

<details className="group py-8 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-medium text-xl tracking-tight">
                        Что насчет трудоустройства?
                        <span className="transition group-open:rotate-180 text-gray-500">
<i data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-400 text-lg mt-6 pr-12 leading-relaxed">
                        Лучших студентов мы рекомендуем в студии-партнеры. Кроме того, в конце курса вы соберете портфолио, с которым не стыдно откликаться на Middle-вакансии.
                    </p>
</details>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#050200] relative overflow-hidden z-10">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff3300] blur-[150px] opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 py-32 text-center fade-up">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 uppercase leading-[1]">Готов писать<br/>чистый код?</h2>
<p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto font-mono tracking-widest uppercase text-xs">
                Оставь заявку, мы свяжемся и обсудим детали
            </p>
<form className="max-w-md mx-auto space-y-6 text-left border border-white/5 bg-[#0a0503] p-8">
<div className="space-y-3">
<label className="font-mono text-xs uppercase tracking-widest text-gray-400">Email</label>
<input className="w-full bg-black border border-white/10 text-white text-base rounded-none focus:outline-none focus:border-[#ff5e00] block px-4 py-4 transition-colors placeholder:text-gray-700" placeholder="dev@example.com" type="email"/>
</div>
<div className="space-y-3">
<label className="font-mono text-xs uppercase tracking-widest text-gray-400">Telegram</label>
<input className="w-full bg-black border border-white/10 text-white text-base rounded-none focus:outline-none focus:border-[#ff5e00] block px-4 py-4 transition-colors placeholder:text-gray-700" placeholder="@username" type="text"/>
</div>

<div className="flex items-start gap-4 pt-4">
<label className="relative flex items-start cursor-pointer group mt-1">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-white/20 bg-black peer-checked:bg-[#ff5e00] peer-checked:border-[#ff5e00] transition-colors"></div>
<i className="absolute text-white w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
</label>
<span className="text-sm text-gray-500 cursor-pointer leading-tight">Я согласен на обработку персональных данных и условия оферты.</span>
</div>
<button className="w-full px-6 py-4 mt-6 bg-white text-black font-mono text-sm uppercase tracking-widest font-medium hover:bg-gray-200 transition-colors" type="button">
                    Отправить
                </button>
</form>
</div>

<div className="border-t border-white/5 relative z-10">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="grid grid-cols-2 gap-[2px]">
<div className="w-2 h-2 rounded-full bg-gray-500"></div>
<div className="w-2 h-2 rounded-full bg-gray-500"></div>
<div className="w-2 h-2 rounded-full bg-gray-500 opacity-50"></div>
<div className="w-2 h-2 rounded-full bg-gray-500 opacity-50"></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-gray-500">IZUM.STUDY</span>
</div>
<div className="text-xs font-mono text-gray-600 uppercase tracking-widest">
                    © 2023 IZUM. All rights reserved.
                </div>
<div className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-gray-500">
<a className="hover:text-white transition-colors" href="#">Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</section>


    </>
  );
}
