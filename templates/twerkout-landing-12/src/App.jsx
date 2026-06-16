import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icon initialization
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500 reveal-element" style={{transitionDelay: '100ms'}}>
<div className="max-w-7xl mx-auto flex justify-between items-center bg-stone-100/70 backdrop-blur-md border border-stone-200/50 rounded-full px-8 py-3 shadow-sm">
<a className="text-xl tracking-tight font-medium italic" href="#">TwerkOut.</a>
<div className="hidden md:flex space-x-8 text-lg font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#about">О нас</a>
<a className="hover:text-stone-900 transition-colors" href="#method">Методика</a>
<a className="hover:text-stone-900 transition-colors" href="#schedule">Расписание</a>
</div>
<a className="group flex items-center gap-2 text-stone-900 font-medium hover:text-stone-600 transition-colors" href="#signup">
<span className="text-lg">Записаться</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-stone-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
<div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-300 bg-stone-50/50 backdrop-blur-sm reveal-element">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-sm font-medium tracking-wide uppercase text-stone-600">Москва • Старт группы 15 Октября</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-stone-900 reveal-element" style={{transitionDelay: '100ms'}}>
                TwerkOut.<br/>
<span className="italic font-light text-stone-500">by Alyona</span>
</h1>
<p className="max-w-xl mx-auto text-xl md:text-2xl text-stone-600 leading-relaxed font-light reveal-element" style={{transitionDelay: '200ms'}}>
                Искусство движения бедрами. Глубокое погружение в афро-культуру и технику твёрка. Классы для начинающих, где тело обретает свободу.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8 reveal-element" style={{transitionDelay: '300ms'}}>
<a className="px-8 py-4 bg-stone-900 text-stone-50 rounded-full text-lg font-medium hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-stone-900/10 hover:shadow-stone-900/20 hover:-translate-y-1" href="#signup">
                    Первое занятие бесплатно
                </a>
<a className="px-8 py-4 bg-transparent border border-stone-300 text-stone-900 rounded-full text-lg font-medium hover:bg-stone-200/50 transition-all duration-300" href="#video">
                    Смотреть видео
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-6 h-6 text-stone-400" data-lucide="arrow-down"></i>
</div>
</header>

<div className="py-12 border-y border-stone-200 bg-stone-50 overflow-hidden marquee-container reveal-element">
<div className="flex whitespace-nowrap marquee-content">
<div className="flex items-center gap-12 px-6">
<span className="text-4xl md:text-6xl font-light italic text-stone-300">TECHNIQUE</span>
<span className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tighter">TWERK</span>
<span className="text-4xl md:text-6xl font-light italic text-stone-300">CULTURE</span>
<span className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tighter">AFRO</span>
<span className="text-4xl md:text-6xl font-light italic text-stone-300">CONFIDENCE</span>
<span className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tighter">MOSCOW</span>
</div>

<div className="flex items-center gap-12 px-6">
<span className="text-4xl md:text-6xl font-light italic text-stone-300">TECHNIQUE</span>
<span className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tighter">TWERK</span>
<span className="text-4xl md:text-6xl font-light italic text-stone-300">CULTURE</span>
<span className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tighter">AFRO</span>
<span className="text-4xl md:text-6xl font-light italic text-stone-300">CONFIDENCE</span>
<span className="text-4xl md:text-6xl font-medium text-stone-800 tracking-tighter">MOSCOW</span>
</div>
</div>
</div>

<section className="h-[60vh] md:h-[80vh] w-full parallax-bg relative reveal-element" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&amp'}}>
<div className="absolute inset-0 bg-stone-900/30"></div>
<div className="absolute inset-0 flex items-center justify-center">
<h2 className="text-5xl md:text-7xl text-stone-100 font-medium tracking-tight text-center px-4 mix-blend-overlay">
                Почувствуй ритм.<br/>Освободи тело.
            </h2>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32 space-y-6 reveal-element">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight text-stone-900">
                    Не просто танцы.<br/>
<span className="text-stone-400 italic">Это терапия.</span>
</h2>
<p className="text-xl text-stone-600 font-light leading-relaxed">
                    TwerkOut — это пространство для девушек поколения A, где мы стираем границы стеснения. Мы изучаем анатомию движения, классический Old School Twerk и современные Hip-Hop интеграции.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-4 text-lg text-stone-700">
<div className="p-2 rounded-full bg-stone-200"><i className="w-5 h-5" data-lucide="zap"></i></div>
                        Работа с мышцами кора и ягодиц
                    </li>
<li className="flex items-center gap-4 text-lg text-stone-700">
<div className="p-2 rounded-full bg-stone-200"><i className="w-5 h-5" data-lucide="music"></i></div>
                        Музыкальность и чувство ритма
                    </li>
<li className="flex items-center gap-4 text-lg text-stone-700">
<div className="p-2 rounded-full bg-stone-200"><i className="w-5 h-5" data-lucide="heart"></i></div>
                        Безопасное комьюнити без осуждения
                    </li>
</ul>
</div>
<div className="grid gap-8">
<div className="group relative overflow-hidden rounded-2xl aspect-[4/5] reveal-element" style={{transitionDelay: '200ms'}}>
<img alt="Dance class" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-video reveal-element" style={{transitionDelay: '300ms'}}>
<img alt="Dance shoes" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-200/30 border-y border-stone-200" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center">Программа обучения</h2>
<p className="text-center text-stone-500 mt-4 text-xl italic font-light">От базы до продвинутых хореографий</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-stone-100 p-8 rounded-xl border border-stone-200 hover:border-stone-400 transition-colors duration-300 reveal-element hover:shadow-xl">
<div className="w-12 h-12 flex items-center justify-center bg-stone-900 text-stone-50 rounded-lg mb-6">
<span className="font-sans font-bold text-xl">01</span>
</div>
<h3 className="text-2xl font-semibold mb-4 text-stone-900">Basics &amp; Technique</h3>
<p className="text-stone-600 leading-relaxed">
                        Постановка корпуса. Изучение базовых "шейков", "вайнов" и ударов. Разбор механики движения таза.
                    </p>
</div>

<div className="bg-stone-100 p-8 rounded-xl border border-stone-200 hover:border-stone-400 transition-colors duration-300 reveal-element" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 flex items-center justify-center bg-stone-900 text-stone-50 rounded-lg mb-6">
<span className="font-sans font-bold text-xl">02</span>
</div>
<h3 className="text-2xl font-semibold mb-4 text-stone-900">Choreography</h3>
<p className="text-stone-600 leading-relaxed">
                        Связываем базовые элементы в стильные связки под актуальные хиты Hip-Hop и Dancehall сцены.
                    </p>
</div>

<div className="bg-stone-100 p-8 rounded-xl border border-stone-200 hover:border-stone-400 transition-colors duration-300 reveal-element" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 flex items-center justify-center bg-stone-900 text-stone-50 rounded-lg mb-6">
<span className="font-sans font-bold text-xl">03</span>
</div>
<h3 className="text-2xl font-semibold mb-4 text-stone-900">Improvisation</h3>
<p className="text-stone-600 leading-relaxed">
                        Учимся слышать музыку и фристайлить. Развитие собственной манеры исполнения и уверенности.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-5xl mx-auto" id="schedule">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-element">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">Расписание</h2>
<p className="mt-2 text-stone-500 text-lg">Локация: м. Цветной Бульвар</p>
</div>
<div className="mt-4 md:mt-0">
<span className="inline-block px-4 py-2 bg-stone-200 text-stone-800 rounded-lg text-sm font-semibold tracking-wide uppercase">Группа Beginners</span>
</div>
</div>
<div className="border-t border-stone-300 reveal-element" style={{transitionDelay: '100ms'}}>

<div className="group py-6 flex flex-col md:flex-row justify-between items-center border-b border-stone-200 hover:bg-stone-200/30 transition-colors px-4">
<div className="flex items-center gap-6">
<span className="text-3xl font-light text-stone-400 w-24">ПН</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-stone-900">Twerk Basic</span>
<span className="text-stone-500">19:00 - 20:30</span>
</div>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-6 py-2 border border-stone-900 rounded-full text-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm uppercase tracking-wide">Записаться</button>
</div>
</div>

<div className="group py-6 flex flex-col md:flex-row justify-between items-center border-b border-stone-200 hover:bg-stone-200/30 transition-colors px-4">
<div className="flex items-center gap-6">
<span className="text-3xl font-light text-stone-400 w-24">СР</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-stone-900">Choreo Class</span>
<span className="text-stone-500">20:00 - 21:30</span>
</div>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-6 py-2 border border-stone-900 rounded-full text-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm uppercase tracking-wide">Записаться</button>
</div>
</div>

<div className="group py-6 flex flex-col md:flex-row justify-between items-center border-b border-stone-200 hover:bg-stone-200/30 transition-colors px-4">
<div className="flex items-center gap-6">
<span className="text-3xl font-light text-stone-400 w-24">ПТ</span>
<div className="flex flex-col">
<span className="text-xl font-medium text-stone-900">Female Energy</span>
<span className="text-stone-500">19:00 - 20:30</span>
</div>
</div>
<div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="px-6 py-2 border border-stone-900 rounded-full text-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm uppercase tracking-wide">Записаться</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-100 relative overflow-hidden" id="signup">

<div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 reveal-element">
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">Начни сегодня</h2>
<p className="text-stone-400 text-xl font-light">
                    Заполни форму, чтобы забронировать место на пробном занятии. 
                    <span className="text-stone-100 border-b border-stone-500">Первый урок — бесплатно.</span>
</p>
</div>
<form className="space-y-6 reveal-element" style={{transitionDelay: '150ms'}}>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Имя</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all" placeholder="Анастасия" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Telegram / WhatsApp</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-4 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
<div className="pt-4">
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-5 h-5 border border-stone-600 rounded flex items-center justify-center transition-colors group-hover:border-stone-400 bg-stone-800 mt-1">
<svg className="w-3 h-3 text-stone-100 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm text-stone-400 leading-tight">Я соглашаюсь на обработку персональных данных и готовлюсь растрясти этот зал.</span>
</label>
</div>
<button className="w-full bg-stone-100 text-stone-900 font-semibold text-lg py-4 rounded-lg hover:bg-stone-300 transition-all duration-300 hover:tracking-wide mt-4" type="button">
                    Записаться на занятие
                </button>
</form>
</div>
</section>

<footer className="bg-stone-900 border-t border-stone-800 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-stone-100 text-2xl font-serif italic">TwerkOut.</div>
<div className="flex gap-6 text-stone-500 text-sm">
<a className="hover:text-stone-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-300 transition-colors" href="#">Telegram</a>
<a className="hover:text-stone-300 transition-colors" href="#">VK</a>
</div>
<div className="text-stone-600 text-sm">
                © 2023 Alyona Twerk. Moscow.
            </div>
</div>
</footer>


    </>
  );
}
