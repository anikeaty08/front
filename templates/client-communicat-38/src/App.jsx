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



        // Process Section Scroll Logic
        document.addEventListener('DOMContentLoaded', () => {
            const processSteps = document.querySelectorAll('.process-step');
            const images = [
                document.getElementById('process-img-1'),
                document.getElementById('process-img-2'),
                document.getElementById('process-img-3')
            ];

            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const stepData = entry.target.getAttribute('data-step');
                        // Use modulo to cycle through images since we have more steps than images
                        const index = (parseInt(stepData) - 1) % images.length;

                        images.forEach((img, i) => {
                            if (i === index) {
                                img.classList.add('active');
                                img.classList.remove('inactive');
                            } else {
                                img.classList.remove('active');
                                img.classList.add('inactive');
                            }
                        });
                    }
                });
            }, observerOptions);

            processSteps.forEach(step => observer.observe(step));
        });

        // Draggable Infinite Scroll Logic
        (function() {
            const container = document.getElementById('marquee-container');
            const track = document.getElementById('marquee-track');

            if (!container || !track) return;

            // Clone items for infinite loop
            const originalCards = Array.from(track.children);
            originalCards.forEach(card => track.appendChild(card.cloneNode(true))); 

            let position = 0;
            const speed = 0.5;
            let isDragging = false;
            let startX = 0;
            let prevTranslate = 0;
            let animationID;

            function animate() {
                if (!isDragging) position += speed;
                const trackWidth = track.scrollWidth;
                const setWidth = trackWidth / 2; // Since we cloned once

                if (position >= setWidth) {
                    position = 0;
                    if(isDragging) { prevTranslate += setWidth; startX += setWidth; }
                }
                if (position < 0) {
                   position = setWidth - 1;
                   if(isDragging) { prevTranslate -= setWidth; startX -= setWidth; }
                }

                track.style.transform = `translateX(${-position}px)`;
                animationID = requestAnimationFrame(animate);
            }
            animationID = requestAnimationFrame(animate);

            // Drag Events
            const startDrag = (e) => {
                isDragging = true;
                container.classList.add('cursor-grabbing');
                container.classList.remove('cursor-grab');
                startX = e.pageX || e.touches[0].clientX;
                prevTranslate = position;
            }
            const moveDrag = (e) => {
                if (!isDragging) return;
                const currentX = e.pageX || e.touches[0].clientX;
                const diff = startX - currentX;
                position = prevTranslate + diff;
            }
            const endDrag = () => {
                isDragging = false;
                container.classList.add('cursor-grab');
                container.classList.remove('cursor-grabbing');
            }

            container.addEventListener('mousedown', startDrag);
            container.addEventListener('touchstart', startDrag);
            container.addEventListener('mousemove', moveDrag);
            container.addEventListener('touchmove', moveDrag);
            container.addEventListener('mouseup', endDrag);
            container.addEventListener('mouseleave', endDrag);
            container.addEventListener('touchend', endDrag);
        })();
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
<a className="group flex items-center gap-1 text-xl md:text-2xl tracking-tight font-normal pointer-events-auto font-serif italic" href="#">
<span>Alina</span>
<span className="font-light">Cesari</span>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-12 pointer-events-auto">
<a className="text-xs font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="#problems">Проблемы</a>
<a className="text-xs font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="#process">Решение</a>
<a className="text-xs font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="#results">Результаты</a>
<a className="text-xs font-medium uppercase tracking-wide hover:text-zinc-300 transition-colors" href="#pricing">Тарифы</a>
<a className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm" href="#contact">Telegram</a>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-black">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop">
<source src="https://spark-labs.org/video/reel.mp4" type="video/mp4"/>
</video>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 w-full px-6 py-12 md:px-12 md:py-20 flex flex-col md:flex-row justify-between items-end">
<div className="max-w-4xl fade-in-up">
<div className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
<span className="text-xs uppercase tracking-widest text-zinc-300">Эксперт по клиентским коммуникациям</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-serif mb-8 text-white">
            Нахожу, где ваш бизнес <br/>
<span className="text-zinc-500 italic">теряет деньги</span>
</h1>
<div className="flex flex-col gap-8 md:gap-12">
<p className="max-w-lg leading-relaxed text-zinc-300 text-base md:text-lg font-light">
               Через системность, стратегию, прозрачную аналитику и работу с клиентской базой увеличиваю прибыль в 2–5 раз.
             </p>

<div className="grid grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-6">
<div>
<div className="text-3xl md:text-4xl font-serif text-white mb-1">9</div>
<div className="text-xs uppercase tracking-wider text-zinc-500">Лет опыта</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-serif text-white mb-1">24k</div>
<div className="text-xs uppercase tracking-wider text-zinc-500">Клиентов привела</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-serif text-emerald-400 mb-1">+50%</div>
<div className="text-xs uppercase tracking-wider text-zinc-500">Рост прибыли</div>
</div>
</div>
</div>
</div>
<div className="hidden lg:block mb-8">
<a className="group flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-all w-fit" href="#problems">
<span className="text-sm uppercase tracking-wide">Увеличить доход системно</span>
<iconify-icon className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="overflow-hidden z-10 bg-zinc-950 border-zinc-900/50 border-b pt-24 pb-24 relative" id="problems">
<div className="px-6 md:px-12 mb-16 md:mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight font-serif text-white">
            Знакомые <br/><span className="text-zinc-600 italic">проблемы?</span>
</h2>
<div className="lg:pl-12">
<p className="text-lg md:text-xl font-light text-zinc-400 leading-relaxed">
              Вы не одиноки. Большинство бизнесов сталкиваются с этими вызовами, теряя миллионы на отсутствии системы.
            </p>
</div>
</div>
</div>

<div className="flex w-full overflow-hidden select-none active:cursor-grabbing touch-pan-y" id="marquee-container" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-8 items-stretch will-change-transform" id="marquee-track">

<div className="group relative w-[85vw] md:w-[450px] h-[500px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-rose-900/20 flex items-center justify-center border border-rose-500/20 text-rose-400">
<iconify-icon icon="solar:chart-square-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-serif text-4xl text-zinc-700">01</span>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-3 tracking-tight">Низкая возвращаемость</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                     Клиенты покупают один раз и исчезают. Вы не знаете, кто они, понравился ли им ваш продукт, и планируют ли они вернуться.
                   </p>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black z-0"></div>
</div>

<div className="group relative w-[85vw] md:w-[450px] h-[500px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center border border-blue-500/20 text-blue-400">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<span className="font-serif text-4xl text-zinc-700">02</span>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-3 tracking-tight">Слабые коммуникации</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                     Отправляете письма, но клиенты молчат. Непонятно, какие слова использовать. Да и не всегда понятно, как собрать эту базу.
                   </p>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black z-0"></div>
</div>

<div className="group relative w-[85vw] md:w-[450px] h-[500px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-amber-900/20 flex items-center justify-center border border-amber-500/20 text-amber-400">
<iconify-icon icon="solar:money-bag-linear" width="24"></iconify-icon>
</div>
<span className="font-serif text-4xl text-zinc-700">03</span>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-3 tracking-tight">Маленький средний чек</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                     Не знаете, как увеличить чек без "перегрева". Боитесь показаться навязчивым. Не знаете, как мотивировать сотрудников.
                   </p>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black z-0"></div>
</div>

<div className="group relative w-[85vw] md:w-[450px] h-[500px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center border border-purple-500/20 text-purple-400">
<iconify-icon icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<span className="font-serif text-4xl text-zinc-700">04</span>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-3 tracking-tight">Нет системы</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                     Продажи зависят от настроения. Каждый общается по-своему. Масштабировать хаос невозможно.
                   </p>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black z-0"></div>
</div>

<div className="group relative w-[85vw] md:w-[450px] h-[500px] rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 transition-colors duration-500 shrink-0">
<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<span className="font-serif text-4xl text-zinc-700">05</span>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-3 tracking-tight">Слепая зона</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Вы не знаете, сколько денег будет завтра. Аналитика пылится в таблицах или не собирается вовсе.
                  </p>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black z-0"></div>
</div>
</div>
</div>
</section>

<section className="relative bg-black border-b border-zinc-900/50 py-24 px-6 md:px-12">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 border border-rose-900/50 bg-rose-950/20 rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
                        Реальный Кейс
                    </div>
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-8">
                        От 50 до 1 800 заказов <span className="italic text-zinc-500">в день</span>
</h2>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                        На 8 марта я полностью перестраивала все бизнес-процессы компании. Вместо обычных 50 заказов мы отправляли 1 800 день-в-день.
                    </p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                        Объём продаж вырос в 36 раз, а команду увеличили всего в 1,5 раза. Эффективность каждого сотрудника выросла в 24 раза.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
<div>
<span className="block text-4xl md:text-5xl font-serif text-white mb-2">36x</span>
<span className="text-xs uppercase tracking-wide text-zinc-500">Рост продаж</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-serif text-white mb-2">1.5x</span>
<span className="text-xs uppercase tracking-wide text-zinc-500">Рост команды</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-serif text-white mb-2">35k</span>
<span className="text-xs uppercase tracking-wide text-zinc-500">Роз в год</span>
</div>
<div>
<span className="block text-4xl md:text-5xl font-serif text-white mb-2">8 лет</span>
<span className="text-xs uppercase tracking-wide text-zinc-500">Система работает</span>
</div>
</div>
</div>
<div className="lg:col-span-7 relative h-[600px] rounded-[2rem] overflow-hidden group">
<img alt="Цветочный бизнес" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<p className="text-white text-lg font-serif italic">"Мы даже написали отдельный модуль в ERP-системе. Система работает уже 8 лет как часы."</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-950 border-b border-zinc-900/50" id="process">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:block relative h-full min-h-screen border-r border-zinc-900/50">
<div className="sticky top-0 h-screen w-full flex items-center justify-center p-12 lg:p-16">
<div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/5 border border-zinc-800">
<div className="absolute inset-0 bg-zinc-900/50 z-10 mix-blend-multiply"></div>

<img alt="Audit" className="process-img active w-full h-full object-cover" id="process-img-1" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Team" className="process-img inactive w-full h-full object-cover" id="process-img-2" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img alt="Growth" className="process-img inactive w-full h-full object-cover" id="process-img-3" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="md:px-12 md:py-32 flex flex-col lg:gap-32 pt-24 pr-6 pb-24 pl-6 relative gap-y-24">

<div className="mb-12">
<div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm rounded-full px-3 py-1 mb-6 tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Процесс
                </div>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Где мы ищем ваши деньги?</h2>
</div>

<div className="process-step group flex flex-col justify-center min-h-[30vh]" data-step="1">
<span className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">01. Старт</span>
<h3 className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-tight mb-6 group-hover:text-white transition-colors">
                   Анализ коммуникации
                </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                   Сбор данных и выявление точек роста. Я нахожу, где вы теряете клиентов прямо сейчас, и выявляю ваши "точки боли" как собственника.
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[30vh]" data-step="1">
<span className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">02. Фундамент</span>
<h3 className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-tight mb-6 group-hover:text-white transition-colors">
                   Настройка инструментов
                </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                   Финансовый учет, показатели удовлетворенности и возвращаемости. Организуем сбор клиентской базы, если до этого она не собиралась.
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[30vh]" data-step="2">
<span className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">03. Структура</span>
<h3 className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-tight mb-6 group-hover:text-white transition-colors">
                   Сегментация базы
                </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                   Разделяем клиентов по поведению, архетипам, ценностям и потенциалу продаж. Больше никаких спам-рассылок "для всех".
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[30vh]" data-step="2">
<span className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">04. Скрипты</span>
<h3 className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-tight mb-6 group-hover:text-white transition-colors">
                   Разработка скриптов
                </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                   Пишем тексты для каждого сегмента с учётом их болей и желаний. Это работает даже в ритейл-точках и если вы работаете сами на себя.
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[30vh]" data-step="3">
<span className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">05. Метрики</span>
<h3 className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-tight mb-6 group-hover:text-white transition-colors">
                   Настройка аналитики
                </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                   Отслеживаем CRR, NPS, LTV, средний чек. 5 минут в день — и у вас всегда будет понимание, как сделать х2 к прибыли завтра.
                </p>
</div>

<div className="process-step group flex flex-col justify-center min-h-[30vh]" data-step="3">
<span className="text-xs uppercase tracking-widest text-emerald-500 mb-4 font-semibold">06. Команда</span>
<h3 className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-tight mb-6 group-hover:text-white transition-colors">
                   Обучение сотрудников
                </h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed max-w-lg">
                   Учим команду работать по новым скриптам и единым стандартам сервиса.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50">
<div className="max-w-[1400px] mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6">
                    Визуальная стратегия
                </h2>
<p className="text-xl text-zinc-400 font-light max-w-2xl">
                    Каждая фотография работает на продажи. От идеи до фотосета — полный контроль визуала и позиционирования.
                </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[800px]">
<div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Flower brand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm">Продуктовая матрица</div>
</div>
<div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
<img alt="Aesthetic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
<img alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 row-span-1 rounded-3xl overflow-hidden relative group">
<img alt="Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-6 left-6 text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm">Позиционирование</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black border-b border-zinc-900/50" id="results">
<div className="max-w-[1400px] mx-auto">
<h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-20">
           Результаты <span className="text-zinc-600 italic">в цифрах</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-600 transition-all flex flex-col justify-between h-80 group">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:chart-2-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-5xl font-serif text-white mb-2 group-hover:text-emerald-400 transition-colors">2-5x</div>
<h3 className="text-lg font-medium text-white mb-2">Рост прибыли</h3>
<p className="text-sm text-zinc-500">Увеличение среднего чека, повторных покупок и LTV клиента.</p>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-600 transition-all flex flex-col justify-between h-80 group">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-5xl font-serif text-white mb-2 group-hover:text-blue-400 transition-colors">40%+</div>
<h3 className="text-lg font-medium text-white mb-2">Рост ответов</h3>
<p className="text-sm text-zinc-500">Клиенты начинают отвечать на сообщения и активнее взаимодействуют.</p>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-600 transition-all flex flex-col justify-between h-80 group">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-5xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors">70%+</div>
<h3 className="text-lg font-medium text-white mb-2">Возвращаемость</h3>
<p className="text-sm text-zinc-500">Клиенты возвращаются вместо того, чтобы уходить к конкурентам.</p>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] p-8 hover:border-zinc-600 transition-all flex flex-col justify-between h-80 group">
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-5xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">15%+</div>
<h3 className="text-lg font-medium text-white mb-2">Выручка от VIP</h3>
<p className="text-sm text-zinc-500">Премиум-клиенты покупают чаще благодаря персонализированному подходу.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900/50">
<div className="max-w-[1400px] mx-auto">
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-16">Другие истории успеха</h2>
<div className="flex flex-col gap-8">

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-t border-zinc-800 hover:bg-zinc-900/30 transition-colors duration-300 px-4 rounded-xl">
<div className="lg:col-span-3">
<span className="text-sm font-semibold uppercase tracking-wider text-emerald-500">Цветочный бизнес</span>
<div className="mt-2 text-2xl font-serif text-white">110+ млн ₽/год</div>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl text-white mb-4">Привела 24 000 клиентов, разработала ERP-систему</h3>
<p className="text-zinc-400 font-light leading-relaxed">
                            Повысила лояльность клиентов, превратила компанию в топ-5 цветочных доставок Москвы. Ввела понятную отчетность, где каждый цветок учтен.
                        </p>
</div>
<div className="lg:col-span-3 lg:text-right flex lg:flex-col lg:items-end justify-between items-start gap-2">
<div className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-400">Москва</div>
<div className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-400">Топ-5</div>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-t border-zinc-800 hover:bg-zinc-900/30 transition-colors duration-300 px-4 rounded-xl">
<div className="lg:col-span-3">
<span className="text-sm font-semibold uppercase tracking-wider text-blue-500">Offline-ритейл</span>
<div className="mt-2 text-2xl font-serif text-white">100% Автономность</div>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl text-white mb-4">Открыла полностью автономный островок для франчази</h3>
<p className="text-zinc-400 font-light leading-relaxed">
                            Открыла островок в ТЦ и цех для сборки. Обучила сотрудников, заключила договоры. В Санкт-Петербурге появилась полностью автономная структура.
                        </p>
</div>
<div className="lg:col-span-3 lg:text-right flex lg:flex-col lg:items-end justify-between items-start gap-2">
<div className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-400">СПб</div>
<div className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-400">Новый город</div>
</div>
</article>

<article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-t border-zinc-800 hover:bg-zinc-900/30 transition-colors duration-300 px-4 rounded-xl">
<div className="lg:col-span-3">
<span className="text-sm font-semibold uppercase tracking-wider text-purple-500">Эксперты</span>
<div className="mt-2 text-2xl font-serif text-white">+200% фокус</div>
</div>
<div className="lg:col-span-6">
<h3 className="text-2xl text-white mb-4">Фокус на деньгах и заработке вместо страха</h3>
<p className="text-zinc-400 font-light leading-relaxed">
                            Появляется четкая стратегия на год. Живой интерес "а как я могу заработать еще больше?" вместо страха "меня не поймут".
                        </p>
</div>
<div className="lg:col-span-3 lg:text-right flex lg:flex-col lg:items-end justify-between items-start gap-2">
<div className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-400">Стратегия</div>
<div className="px-3 py-1 rounded-full border border-zinc-700 text-xs text-zinc-400">Менторство</div>
</div>
</article>
<div className="border-b border-zinc-800 w-full"></div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-zinc-950" id="pricing">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Выберите формат работы</h2>
<p className="text-zinc-400 font-light">Разные форматы для разных задач и бюджетов</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-3xl flex flex-col hover:bg-zinc-900/50 transition-colors">
<div className="mb-6">
<span className="text-sm text-zinc-400 uppercase tracking-widest">Консультация</span>
<div className="text-3xl font-serif text-white mt-2">50 000₽</div>
<span className="text-sm text-zinc-500">разовая / 2 часа</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-zinc-300 font-light text-sm">
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Анализ текущих коммуникаций</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Выявление точек роста</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Рекомендации по улучшению</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> План действий на 3 месяца</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> 2 недели поддержки в чате</li>
</ul>
<a className="w-full py-3 rounded-xl border border-zinc-700 text-center text-white hover:bg-white hover:text-black transition-all" href="#contact">Забронировать</a>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col relative bg-zinc-900 border-zinc-700 transform lg:-translate-y-4 shadow-2xl shadow-purple-900/10">
<div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
<div className="mb-6">
<span className="text-sm text-purple-400 uppercase tracking-widest">Проект</span>
<div className="text-3xl font-serif text-white mt-2">300 000₽</div>
<span className="text-sm text-zinc-500">под ключ / 2-3 месяца</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-zinc-200 font-light text-sm">
<li className="flex gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon> Полный аудит коммуникаций</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon> Сегментация клиентской базы</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon> Разработка скриптов продаж</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon> A/B-тестирование сообщений</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon> Настройка аналитики (CRR, NPS)</li>
<li className="flex gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon> Обучение команды</li>
</ul>
<a className="w-full py-3 rounded-xl bg-white text-black text-center font-semibold hover:bg-zinc-200 transition-all" href="#contact">Начать проект</a>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col hover:bg-zinc-900/50 transition-colors">
<div className="mb-6">
<span className="text-sm text-zinc-400 uppercase tracking-widest">Ретейнер</span>
<div className="text-3xl font-serif text-white mt-2">150 000₽</div>
<span className="text-sm text-zinc-500">постоянный / в месяц</span>
</div>
<ul className="space-y-4 mb-8 flex-1 text-zinc-300 font-light text-sm">
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Постоянное сопровождение</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Ежемесячная оптимизация</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Мониторинг метрик</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Тестирование гипотез</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Стратегические сессии (2/мес)</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Безлимитная поддержка</li>
</ul>
<a className="w-full py-3 rounded-xl border border-zinc-700 text-center text-white hover:bg-white hover:text-black transition-all" href="#contact">Обсудить детали</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black border-t border-zinc-900/50">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative h-[600px] rounded-3xl overflow-hidden">
<img alt="Expert" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Я прошла путь от помощника флориста до совладельца <span className="italic text-zinc-500">за 9 лет</span></h2>
<div className="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
<p>Моя суперсила — умение превращать разовых покупателей в постоянных клиентов через правильные слова и системный подход.</p>
<p>За 9 лет я увеличила клиентскую базу компании с 3 000 до 27 000 человек, включая крупных B2B-клиентов (банки, юридические компании, федеральные телеканалы). Достигла показателя возвращаемости 70%+ и NPS 93.</p>
<p>Мой секрет — <span className="text-white font-normal">data-driven подход</span>. Я не гадаю, что сработает. Я тестирую гипотезы, анализирую данные, создаю скрипты и оставляю только то, что реально увеличивает прибыль.</p>
</div>
<div className="flex gap-8 mt-10">
<div>
<span className="block text-2xl font-serif text-white">27k</span>
<span className="text-xs uppercase text-zinc-500">Клиентов</span>
</div>
<div>
<span className="block text-2xl font-serif text-white">70%</span>
<span className="text-xs uppercase text-zinc-500">Возврат</span>
</div>
<div>
<span className="block text-2xl font-serif text-white">93</span>
<span className="text-xs uppercase text-zinc-500">NPS</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-zinc-900" id="contact">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-8xl font-serif text-white tracking-tight mb-8">Готовы увеличить <br/>прибыль в 2–5 раз?</h2>
<p className="text-xl text-zinc-400 font-light mb-12">
                Напишите мне в Telegram, и мы обсудим ваш проект
             </p>
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 text-lg font-medium group" href="https://t.me/alcesari">
<iconify-icon icon="solar:plain-linear" width="24"></iconify-icon>
<span>Написать в Telegram</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<div className="border-t border-zinc-900 bg-zinc-950 pt-12 pb-6">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm font-mono">
<span className="text-white">© 2026</span>
<span className="text-zinc-700">|</span>
<span>Консультант по клиентским коммуникациям</span>
</div>
<div className="flex gap-8 text-sm font-medium uppercase tracking-wide text-zinc-500">
<a className="hover:text-white transition-colors" href="https://t.me/alcesari">Telegram</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>



    </>
  );
}
