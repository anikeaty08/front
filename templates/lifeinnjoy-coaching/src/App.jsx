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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center opacity-[0.04]">
<svg className="w-[120%] h-[120%] max-w-none text-[#4A3F35]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 1000 1000">
<path d="M500,100 C500,300 300,400 300,600 C300,800 100,900 100,1100"></path>
<path d="M500,100 C500,350 700,450 700,650 C700,850 900,950 900,1150"></path>
<path d="M500,200 C450,400 350,500 400,700 C450,900 250,1000 300,1200"></path>
<path d="M500,200 C550,400 650,500 600,700 C550,900 750,1000 700,1200"></path>
<path d="M500,300 C480,500 400,600 450,800"></path>
<path d="M500,300 C520,500 600,600 550,800"></path>
</svg>
</div>

<header className="fixed top-0 w-full z-50 bg-[#F2EDE4]/70 backdrop-blur-xl border-b border-[#D1C7B7]/30">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="text-gradient-brand uppercase text-2xl font-medium tracking-tighter font-serif" href="#">LifeInnjoy</a>

<nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-xs uppercase tracking-widest font-medium opacity-70">
<a className="hover:opacity-100 hover:text-[#D97904] transition-colors duration-300" href="#about">Обо мне</a>
<a className="hover:opacity-100 hover:text-[#D97904] transition-colors duration-300" href="#themes">Темы</a>
<a className="hover:opacity-100 hover:text-[#D97904] transition-colors duration-300" href="#process">Процесс</a>
<a className="hover:opacity-100 hover:text-[#D97904] transition-colors duration-300" href="#formats">Форматы</a>
<a className="hover:opacity-100 hover:text-[#D97904] transition-colors duration-300" href="#testimonials">Отзывы</a>
</nav>

<div className="hidden md:block">
<button className="neo-button-shadow hover:neo-button-pressed transition-all duration-300 active:scale-[0.98] text-sm font-medium text-[#4A3F35] rounded-xl pt-2.5 pr-6 pb-2.5 pl-6">
                    Связаться
                </button>
</div>

<button className="md:hidden flex items-center justify-center p-2 text-[#4A3F35] opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>
<main className="relative z-10 w-full flex flex-col items-center">

<section className="min-h-screen flex flex-col w-full pt-20 pr-6 pb-12 pl-6 items-center justify-center">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center">

<div className="mb-8 inline-flex items-center space-x-2 py-1.5 px-4 rounded-full neo-button-pressed bg-[#F2EDE4]">
<iconify-icon className="text-sm text-[#D97904]" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-80 font-medium">Женский ренессанс</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight mb-8 leading-[1.1] text-[#4A3F35]">
                    Возвращение к сердцу <br className="hidden md:block"/> и <span className="italic text-[#D97904] pr-2">внутреннему балансу</span>
</h1>

<p className="md:text-2xl leading-relaxed text-lg font-light opacity-75 max-w-2xl mb-12">
                    Бережное психологическое сопровождение. Путь к самоценности, выстраиванию личных границ и глубокой целостности.
                </p>

<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
<button className="w-full sm:w-auto py-4 px-10 rounded-2xl bg-gradient-to-r from-[#F29F05] to-[#D97904] text-[#F2EDE4] font-medium text-lg shadow-[0_10px_20px_-10px_rgba(217,121,4,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(217,121,4,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] flex justify-center items-center space-x-2">
<span className="">Начать путь</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto py-4 px-10 rounded-2xl neo-button-shadow hover:neo-button-pressed text-[#4A3F35] font-medium text-lg transition-all duration-300 active:scale-[0.98]">
                        Узнать больше
                    </button>
</div>

<a className="absolute bottom-12 animate-bounce flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity duration-300" href="#recognition">
<span className="text-xs uppercase tracking-widest mb-2 font-medium">Вниз</span>
<iconify-icon className="text-2xl" icon="solar:round-arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-20" id="recognition">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#4A3F35]">
                    Если вы узнали себя — <br className="hidden md:block"/>
<span className="italic text-[#D97904] pr-2">с вами всё в порядке</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto mb-20">
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Вы много думаете, анализируете, стараетесь понять себя — но это не приносит облегчения.
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Внутри остаётся тревога, напряжение или ощущение перегруженности.
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Вы привыкли держать всё под контролем, но от этого становится только тяжелее.
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Сложно остановить поток мыслей. Сложно расслабиться. Сложно просто быть.
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Есть ощущение: «я недостаточно», «со мной что-то не так».
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Трудно отстаивать себя без вины.
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        И в отношениях часто повторяются одни и те же сценарии.
                    </p>
</div>
<div className="flex items-start">
<div className="w-3 h-3 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<p className="text-lg font-light leading-relaxed opacity-85">
                        Есть желание близости — но одновременно страх потерять себя.
                    </p>
</div>
</div>

<div className="neo-shadow rounded-[2.5rem] p-10 md:p-14 text-center max-w-4xl mx-auto bg-[#F2EDE4] border border-[#D1C7B7]/20 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F29F05] to-[#D97904] opacity-80"></div>
<iconify-icon className="text-5xl text-[#D97904] mb-6 opacity-90 block mx-auto" icon="solar:heart-pulse-linear"></iconify-icon>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">С вами всё в порядке.</h3>
<p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed">
                    Это не слабость. <br className="md:hidden"/> Это способы, которыми вы привыкли и адаптировались.
                </p>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-20" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 sticky top-32">

<div className="absolute inset-0 neo-shadow rounded-[2.5rem] bg-[#F2EDE4]"></div>

<div className="absolute inset-4 rounded-[2rem] bg-[#D1C7B7]/20 overflow-hidden flex items-center justify-center border border-[#D1C7B7]/30">
<iconify-icon className="text-6xl text-[#D97904]/50" icon="solar:user-circle-linear"></iconify-icon>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 neo-shadow rounded-full bg-[#F2EDE4] flex items-center justify-center text-[#D97904]">
<iconify-icon className="text-3xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col">
<div className="mb-6 inline-flex items-center space-x-2 py-1.5 px-4 rounded-full neo-button-pressed bg-[#F2EDE4] w-max">
<iconify-icon className="text-sm text-[#D97904]" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-80 font-medium">Обо мне</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-[#4A3F35]">
                        Возвращаю <br/>
<span className="italic text-[#D97904] pr-2">к подлинной себе</span>
</h2>

<div className="mb-10 border-l-2 border-[#D97904]/50 pl-6 py-1">
<p className="text-2xl md:text-3xl font-serif italic text-[#4A3F35] tracking-tight leading-snug">
                            «Я не даю готовых решений.<br className="hidden sm:block"/> Я помогаю вам увидеть свои.»
                        </p>
</div>
<div className="space-y-6 text-lg font-light leading-relaxed opacity-85 mb-12">
<p>
                            Я работаю с людьми, которые привыкли справляться сами, но внутри остаются в напряжении.
                        </p>
<p>
                            В основе моей работы — <span className="font-medium">Психоанализ</span> и <span className="font-medium">Гуманистический психодинамический подход</span>. Это означает работу:
                        </p>
<ul className="space-y-4 pt-2">
<li className="flex items-start">
<div className="w-2 h-2 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-4"></div>
<span>без давления и без «исправления»</span>
</li>
<li className="flex items-start">
<div className="w-2 h-2 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-4"></div>
<span>с уважением к вашему темпу</span>
</li>
<li className="flex items-start">
<div className="w-2 h-2 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-4"></div>
<span>с глубиной, но без перегруза</span>
</li>
</ul>
</div>

<div className="pt-10 border-t border-[#D1C7B7]/40">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex flex-col">
<span className="text-sm uppercase tracking-widest font-medium opacity-90 text-gradient-brand">Психолог</span>
<span className="text-sm font-light opacity-80 mt-1.5 leading-snug">Дипломированный<br/>Арт-терапевт</span>
</div>
<div className="flex flex-col">
<span className="text-sm uppercase tracking-widest font-medium opacity-90 text-gradient-brand">Коуч</span>
<span className="text-sm font-light opacity-80 mt-1.5 leading-snug">Сертифицированный коуч<br/>ASTH ICF</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-20" id="themes">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

<div className="neo-shadow rounded-[2.5rem] p-10 md:p-12 flex flex-col bg-[#F2EDE4]">
<div className="flex items-center space-x-5 mb-10">
<div className="w-14 h-14 rounded-full neo-button-pressed flex items-center justify-center text-[#4A3F35] opacity-80 shrink-0">
<iconify-icon className="text-3xl" icon="solar:compass-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight text-[#4A3F35]">С чем можно работать</h3>
</div>
<ul className="space-y-6 flex-grow">
<li className="flex items-start">
<div className="w-2.5 h-2.5 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<span className="text-lg font-light leading-relaxed opacity-85">Тревога и постоянный поток мыслей</span>
</li>
<li className="flex items-start">
<div className="w-2.5 h-2.5 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<span className="text-lg font-light leading-relaxed opacity-85">Самокритика и чувство «я недостаточно», казахский уйят</span>
</li>
<li className="flex items-start">
<div className="w-2.5 h-2.5 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<span className="text-lg font-light leading-relaxed opacity-85">Сложности с границами</span>
</li>
<li className="flex items-start">
<div className="w-2.5 h-2.5 rounded-full neo-button-pressed bg-[#F2EDE4] shrink-0 mt-2.5 mr-5"></div>
<span className="text-lg font-light leading-relaxed opacity-85">Ощущение растерянности и отсутствия опоры</span>
</li>
</ul>
</div>

<div className="neo-shadow rounded-[2.5rem] p-10 md:p-12 flex flex-col bg-[#F2EDE4] relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F29F05] to-[#D97904] opacity-80"></div>
<div className="flex items-center space-x-5 mb-10 relative z-10">
<div className="w-14 h-14 rounded-full neo-button-pressed flex items-center justify-center text-[#D97904] shrink-0">
<iconify-icon className="text-3xl" icon="solar:sun-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight text-[#4A3F35]">Что меняется в процессе</h3>
</div>
<ul className="space-y-6 flex-grow relative z-10">
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">Становится тише внутри</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">Появляется ясность в мыслях и решениях</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">Снижается влияние внутреннего критика</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">Появляется возможность отстаивать себя без вины</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">Формируется ощущение опоры</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">Становится возможной более спокойная близость</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-20" id="process">
<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="mb-6 inline-flex items-center space-x-2 py-1.5 px-4 rounded-full neo-button-pressed bg-[#F2EDE4] w-max">
<iconify-icon className="text-sm text-[#D97904]" icon="solar:route-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-80 font-medium">Как это работает</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-[#4A3F35]">О процессе работы</h2>
<p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed italic text-[#D97904]">
                    Процесс постепенный
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative max-w-5xl mx-auto mb-20">

<div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-[#D1C7B7]/50 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full neo-shadow bg-[#F2EDE4] flex items-center justify-center text-[#D97904] mb-8 shrink-0 border border-[#D1C7B7]/20">
<span className="font-serif text-3xl font-medium text-[#4A3F35]">1</span>
</div>
<p className="text-lg font-light leading-relaxed opacity-85 px-2">
                        Этап знакомства и диагностики, разбор текущего запроса
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full neo-shadow bg-[#F2EDE4] flex items-center justify-center text-[#D97904] mb-8 shrink-0 border border-[#D1C7B7]/20">
<span className="font-serif text-3xl font-medium text-[#4A3F35]">2</span>
</div>
<p className="text-lg font-light leading-relaxed opacity-85 px-2">
                        Разбираем и находим повторяющиеся сценарии — как устроены ваши реакции и тревога
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full neo-shadow bg-[#F2EDE4] flex items-center justify-center text-[#D97904] mb-8 shrink-0 border border-[#D1C7B7]/20">
<span className="font-serif text-3xl font-medium text-[#4A3F35]">3</span>
</div>
<p className="text-lg font-light leading-relaxed opacity-85 px-2">
                        Учимся по-другому реагировать в реальных ситуациях
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full neo-shadow bg-[#F2EDE4] flex items-center justify-center text-[#D97904] mb-8 shrink-0 border border-[#D1C7B7]/20">
<span className="font-serif text-3xl font-medium text-[#4A3F35]">4</span>
</div>
<p className="text-lg font-light leading-relaxed opacity-85 px-2">
                        Формируем внутреннюю опору
                    </p>
</div>
</div>

<div className="neo-shadow rounded-[2.5rem] p-10 md:p-14 text-center max-w-4xl mx-auto bg-[#F2EDE4] border border-[#D1C7B7]/20 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F29F05] to-[#D97904] opacity-80"></div>
<iconify-icon className="text-5xl text-[#D97904] mb-6 opacity-90 block mx-auto" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-xs uppercase tracking-widest font-medium opacity-60 mb-4 font-sans">Суть</h3>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed text-[#4A3F35]">
                    Меняется не только понимание.<br className="hidden md:block"/>
<span className="italic text-[#D97904] pr-2">Меняется ваше состояние и поведение.</span>
</p>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-20" id="formats">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Форматы работы</h2>
<p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                    Выберите подходящий вам ритм для погружения и мягкой трансформации
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-stretch">

<div className="neo-shadow rounded-[2.5rem] p-10 md:p-12 flex flex-col bg-[#F2EDE4] transition-transform duration-500 hover:-translate-y-1">
<div className="mb-8">
<h3 className="text-3xl font-medium tracking-tight mb-4">Индивидуальная сессия</h3>
<p className="text-lg font-light opacity-75 min-h-[4rem] leading-relaxed">
                            Глубокая работа с вашим запросом: тревога, самоценность, границы, внутренние конфликты
                        </p>
</div>
<ul className="space-y-5 mb-12 flex-grow">
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl opacity-80" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-lg font-light">1 сессия</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl opacity-80" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-lg font-light">Персональный разбор</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl opacity-80" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-lg font-light">Мягкая трансформация</span>
</li>
</ul>
<button className="w-full py-5 px-8 rounded-2xl neo-button-shadow hover:neo-button-pressed text-[#4A3F35] font-medium text-lg transition-all duration-300 active:scale-[0.98]">
                        Записаться
                    </button>
</div>

<div className="neo-shadow rounded-[2.5rem] p-10 md:p-12 flex flex-col bg-[#F2EDE4] relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">

<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F29F05] to-[#D97904] opacity-80"></div>
<div className="mb-8 relative z-10">
<h3 className="text-3xl font-medium tracking-tight mb-4">Пакет из 4 сессий</h3>
<p className="text-lg font-light opacity-75 min-h-[4rem] leading-relaxed">
                            Системная работа с внутренними паттернами и устойчивыми изменениями
                        </p>
</div>
<ul className="space-y-5 mb-12 flex-grow relative z-10">
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<span className="text-lg font-light">4 сессии</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<span className="text-lg font-light">Последовательная трансформация</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<span className="text-lg font-light">Глубокая проработка</span>
</li>
</ul>
<button className="relative z-10 w-full py-5 px-8 rounded-2xl bg-gradient-to-r from-[#F29F05] to-[#D97904] text-[#F2EDE4] font-medium text-lg shadow-[0_10px_20px_-10px_rgba(217,121,4,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(217,121,4,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]">
                        Выбрать пакет
                    </button>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-12 scroll-mt-20" id="doubts">
<div className="neo-shadow rounded-[2.5rem] p-10 md:p-14 lg:p-16 flex flex-col md:flex-row gap-12 lg:gap-16 items-center bg-[#F2EDE4] relative overflow-hidden">

<div className="flex-1 w-full">
<div className="mb-6 inline-flex items-center space-x-2 py-1.5 px-4 rounded-full neo-button-pressed bg-[#F2EDE4] w-max">
<iconify-icon className="text-sm text-[#D97904]" icon="solar:question-circle-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-80 font-medium">Если есть сомнения</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-[#4A3F35]">Эта работа для вас, если:</h2>
<ul className="space-y-6">
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">вы много понимаете, но не можете это изменить</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">вы устали жить в постоянном внутреннем напряжении</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">вы хотите не просто «разобраться», а реально изменить состояние</span>
</li>
<li className="flex items-start">
<div className="mt-1 mr-4 shrink-0 text-[#D97904]">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-lg font-light leading-relaxed opacity-85">вы готовы к глубокой, честной работе</span>
</li>
</ul>
</div>

<div className="w-full md:w-[40%] neo-button-pressed rounded-[2rem] p-8 md:p-10 border border-[#D1C7B7]/20 text-center flex flex-col justify-center shrink-0">
<iconify-icon className="text-5xl text-[#D97904] mb-6 opacity-90 block mx-auto" icon="solar:cup-hot-linear"></iconify-icon>
<p className="text-2xl font-serif italic tracking-tight leading-relaxed text-[#4A3F35] mb-4">
                        Можно начать с диагностической встречи.
                    </p>
<p className="text-base font-light opacity-75 leading-relaxed">
                        Без обязательств — чтобы понять, подходит ли вам этот формат.
                    </p>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 pt-16 pb-32 scroll-mt-20 text-center" id="cta">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-[#4A3F35] max-w-4xl mx-auto leading-[1.1]">
                Вы можете продолжать справляться сами <br className="hidden lg:block"/> или попробовать по-другому
            </h2>
<p className="text-2xl md:text-3xl font-light opacity-90 leading-relaxed italic text-[#D97904] mb-12">
                С опорой, ясностью и поддержкой
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-2xl mx-auto">
<button className="w-full sm:w-auto py-5 px-8 rounded-2xl bg-gradient-to-r from-[#F29F05] to-[#D97904] text-[#F2EDE4] font-medium text-lg shadow-[0_10px_20px_-10px_rgba(217,121,4,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(217,121,4,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]">
                    Записаться на диагностическую сессию
                </button>
<button className="w-full sm:w-auto py-5 px-8 rounded-2xl neo-button-shadow hover:neo-button-pressed text-[#4A3F35] font-medium text-lg transition-all duration-300 active:scale-[0.98] flex items-center justify-center space-x-2">
<iconify-icon className="text-xl" icon="solar:calendar-date-linear"></iconify-icon>
<span>Выбрать время</span>
</button>
</div>
</section>

<footer className="w-full pb-12 text-center flex flex-col items-center justify-center opacity-60 border-t border-[#D1C7B7]/20 pt-12">
<div className="flex space-x-1.5 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#8a6d4b]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#8a6d4b] transform -translate-y-1.5"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#8a6d4b]"></div>
</div>
<p className="font-serif tracking-[0.3em] text-lg text-gradient-brand uppercase">Life Innjoy</p>
</footer>
</main>

    </>
  );
}
