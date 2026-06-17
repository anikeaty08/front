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



        lucide.createIcons();
    
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
      
<div className="grain"></div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md">
<div className="flex justify-between items-center p-4 md:p-6">
<a className="text-2xl md:text-3xl font-semibold tracking-tighter uppercase leading-none hover:text-lime-400 transition-colors" href="#">
                ZOO<span className="text-lime-400">.</span>MSK
            </a>
<div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
<a className="hover:text-lime-400 transition-colors" href="#animals">Звери</a>
<a className="hover:text-lime-400 transition-colors" href="#map">Карта</a>
<a className="hover:text-lime-400 transition-colors" href="#info">Инфо</a>
</div>
<button className="bg-lime-400 hover:bg-lime-300 text-black px-6 py-3 rounded-full font-semibold uppercase text-xs tracking-widest transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
<span>Купить Билет</span>
<i className="w-4 h-4" data-lucide="ticket" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen pt-24 pb-12 px-4 flex flex-col justify-center items-center overflow-hidden border-b border-neutral-800">

<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">

<div className="lg:col-span-8 flex flex-col justify-center">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase leading-none tracking-tighter mb-6">
                    Дикая <br/>
<span className="text-lime-400">Природа</span> <br/>
                    В Городе
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-8">
                    Забудьте о скучных клетках. Погрузитесь в экосистему чистого хаоса и красоты. Более 5000 видов, которые смотрят на вас так же, как вы на них.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-5 text-lg font-medium uppercase tracking-tight rounded-none border border-purple-400 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3" href="#tickets">
                        Забронировать визит
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="border border-neutral-600 hover:border-lime-400 hover:text-lime-400 px-8 py-5 text-lg font-medium uppercase tracking-tight transition-colors flex items-center justify-center gap-3">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
                        Смотреть трейлер
                    </button>
</div>
</div>

<div className="lg:col-span-4 relative h-[500px] lg:h-auto mt-8 lg:mt-0">
<div className="absolute inset-0 bg-neutral-800 rotate-3 border border-neutral-700 z-0"></div>
<div className="absolute inset-0 bg-lime-400 -rotate-2 z-10 mix-blend-overlay"></div>
<img alt="Tiger" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 z-20 border-2 border-neutral-800 hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-6 -left-6 bg-white text-black p-4 z-30 max-w-[200px] shadow-[8px_8px_0px_0px_rgba(163,230,53,1)]">
<p className="font-bold text-2xl leading-none tracking-tight">ТИГР</p>
<p className="text-xs uppercase mt-1 tracking-wider border-t border-black pt-1">Amur / Siberia</p>
</div>
<div className="absolute -top-6 -right-6 bg-orange-500 text-black p-3 rounded-full z-30 w-24 h-24 flex items-center justify-center animate-spin-slow">
<svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="curve"></path>
<text className="text-[14px] font-bold uppercase tracking-widest">
<textpath href="#curve">Open • Daily • 24/7 •</textpath>
</text>
</svg>
<i className="w-6 h-6 absolute" data-lucide="sun" strokeWidth="1.5"></i>
</div>
</div>
</div>
</header>

<div className="bg-lime-400 py-4 border-b border-neutral-900 overflow-hidden transform -rotate-1 origin-left scale-105 z-20 relative">
<div className="marquee-container">
<div className="marquee-content text-black font-bold text-4xl uppercase tracking-tight">
                Кормление львов 14:00 <span className="mx-4 text-stroke-black">///</span> 
                Ночные экскурсии <span className="mx-4 text-stroke-black">///</span> 
                Тропический павильон открыт <span className="mx-4 text-stroke-black">///</span> 
                Скидка студентам 20% <span className="mx-4 text-stroke-black">///</span>
                Кормление львов 14:00 <span className="mx-4 text-stroke-black">///</span> 
                Ночные экскурсии <span className="mx-4 text-stroke-black">///</span> 
                Тропический павильон открыт <span className="mx-4 text-stroke-black">///</span> 
                Скидка студентам 20% <span className="mx-4 text-stroke-black">///</span>
</div>
</div>
</div>

<section className="py-20 px-4 bg-neutral-900" id="animals">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-neutral-800 pb-6">
<h2 className="text-5xl md:text-7xl font-semibold uppercase tracking-tighter leading-none">
                    Обитатели <br/> <span className="text-stroke">Зоопарка</span>
</h2>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="p-3 border border-neutral-700 hover:bg-white hover:text-black transition-colors rounded-full"><i data-lucide="arrow-left" strokeWidth="1.5"></i></button>
<button className="p-3 border border-neutral-700 hover:bg-white hover:text-black transition-colors rounded-full"><i data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="group relative bg-neutral-800 overflow-hidden lg:col-span-2 lg:row-span-2 border border-neutral-700 hover:border-lime-400 transition-colors">
<img alt="Flamingo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
<h3 className="text-4xl font-semibold uppercase tracking-tight text-white group-hover:text-lime-400 transition-colors">Фламинго</h3>
<p className="text-neutral-300 mt-2 line-clamp-2">Розовый цвет оперения фламинго зависит от пищи. Здесь их тысячи.</p>
</div>
<div className="absolute top-4 right-4 bg-lime-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm">Тропики</div>
</div>

<div className="group relative bg-orange-600 overflow-hidden border border-orange-500">
<div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
<i className="w-10 h-10 text-black" data-lucide="paw-print" strokeWidth="1.5"></i>
<div>
<p className="text-black font-bold text-5xl tracking-tighter mb-1">250+</p>
<p className="text-black text-sm uppercase font-semibold tracking-wider">Видов рептилий</p>
</div>
</div>
<i className="absolute top-6 right-6 w-6 h-6 text-black opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="move-up-right"></i>
</div>

<div className="group relative bg-neutral-800 overflow-hidden border border-neutral-700">
<img alt="Giraffe" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-purple-900/40 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-2xl font-semibold uppercase tracking-tight">Саванна</h3>
</div>
</div>

<div className="group relative bg-neutral-100 text-neutral-900 overflow-hidden border border-white lg:row-span-2">
<div className="p-6 h-full flex flex-col">
<div className="mb-auto">
<h3 className="text-3xl font-semibold uppercase tracking-tight leading-none mb-4">Лемур Катта</h3>
<p className="text-sm font-medium leading-relaxed">Мадагаскарские эндемики с полосатыми хвостами. Любят солнце и йогу.</p>
</div>
<img alt="Lemur" className="w-full h-48 object-cover mt-4 grayscale contrast-125 border-2 border-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="mt-4 w-full bg-black text-white py-3 uppercase text-xs font-bold tracking-widest hover:bg-lime-400 hover:text-black transition-colors">
                            Подробнее
                        </button>
</div>
</div>

<div className="group relative bg-neutral-800 overflow-hidden border border-neutral-700">
<img alt="Wolf" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 left-4 bg-white text-black px-2 py-1 text-xs font-bold uppercase tracking-widest">Тайга</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-black overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-purple-500 to-orange-500"></div>
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-6xl md:text-8xl font-semibold uppercase tracking-tighter leading-[0.85] mb-8">
                    Не просто <br/>
<span className="text-purple-600 italic">Смотри</span>. <br/>
                    Чувствуй.
                </h2>
<div className="space-y-6">
<div className="flex items-start gap-4 border-t-2 border-black pt-4">
<i className="w-6 h-6 shrink-0 mt-1" data-lucide="map-pin"></i>
<div>
<h4 className="text-xl font-bold uppercase tracking-tight">Локация</h4>
<p className="text-sm font-medium text-neutral-600">Парк Горького, Северный Вход. 15 минут от метро.</p>
</div>
</div>
<div className="flex items-start gap-4 border-t-2 border-black pt-4">
<i className="w-6 h-6 shrink-0 mt-1" data-lucide="clock"></i>
<div>
<h4 className="text-xl font-bold uppercase tracking-tight">Время</h4>
<p className="text-sm font-medium text-neutral-600">ПН-ВС: 09:00 — 21:00. Последний вход в 20:00.</p>
</div>
</div>
<div className="flex items-start gap-4 border-t-2 border-black pt-4">
<i className="w-6 h-6 shrink-0 mt-1" data-lucide="coffee"></i>
<div>
<h4 className="text-xl font-bold uppercase tracking-tight">Сервис</h4>
<p className="text-sm font-medium text-neutral-600">3 кафе, зоны отдыха, Wi-Fi и сувенирная лавка.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="bg-black text-white p-6 aspect-square flex flex-col justify-center items-center text-center rotate-2 hover:rotate-0 transition-transform duration-300">
<span className="text-5xl font-bold block mb-2 text-lime-400">5k+</span>
<span className="uppercase tracking-widest text-xs">Животных</span>
</div>
<div className="bg-purple-600 text-white p-6 aspect-square flex flex-col justify-center items-center text-center -rotate-2 hover:rotate-0 transition-transform duration-300">
<span className="text-5xl font-bold block mb-2">120</span>
<span className="uppercase tracking-widest text-xs">Гекаров</span>
</div>
<div className="bg-orange-500 text-black p-6 aspect-square flex flex-col justify-center items-center text-center -rotate-1 hover:rotate-0 transition-transform duration-300">
<span className="text-5xl font-bold block mb-2">35</span>
<span className="uppercase tracking-widest text-xs">Экскурсий</span>
</div>
<div className="bg-lime-400 text-black p-6 aspect-square flex flex-col justify-center items-center text-center rotate-3 hover:rotate-0 transition-transform duration-300">
<span className="text-5xl font-bold block mb-2">∞</span>
<span className="uppercase tracking-widest text-xs">Эмоций</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-neutral-950 relative overflow-hidden" id="tickets">

<div className="absolute right-0 top-1/2 -translate-y-1/2 text-[400px] font-bold text-neutral-900 opacity-50 select-none pointer-events-none leading-none tracking-tighter">
            ZOO
        </div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1 rounded-full border border-lime-400 text-lime-400 text-xs font-bold uppercase tracking-widest mb-4 bg-lime-400/10">Действуй сейчас</span>
<h2 className="text-5xl md:text-8xl font-semibold uppercase tracking-tighter leading-none text-white">
                    Забери свой <br/> <span className="text-lime-400 underline decoration-4 underline-offset-8 decoration-purple-600">Билет</span>
</h2>
</div>
<form className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 shadow-2xl relative">

<div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-lime-400"></div>
<div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-lime-400"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div className="flex flex-col gap-2">
<label className="text-xs uppercase font-bold tracking-widest text-neutral-400">Дата визита</label>
<input className="bg-neutral-800 border-2 border-neutral-700 text-white p-4 focus:border-lime-400 focus:bg-black focus:outline-none transition-colors uppercase font-mono" type="date" value="2023-10-24"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase font-bold tracking-widest text-neutral-400">Количество</label>
<div className="flex items-center h-full">
<button className="bg-neutral-800 w-14 h-full border-2 border-neutral-700 hover:border-lime-400 text-xl font-bold text-white transition-colors" type="button">-</button>
<input className="bg-black w-full h-full border-y-2 border-neutral-700 text-center text-white text-xl font-bold focus:outline-none" readonly="" type="text" value="2"/>
<button className="bg-neutral-800 w-14 h-full border-2 border-neutral-700 hover:border-lime-400 text-xl font-bold text-white transition-colors" type="button">+</button>
</div>
</div>
</div>

<div className="mb-10 space-y-4">
<label className="flex items-center gap-4 cursor-pointer group">
<div className="relative w-6 h-6 border-2 border-neutral-500 group-hover:border-lime-400 bg-transparent transition-colors">
<input className="peer appearance-none w-full h-full cursor-pointer" type="checkbox"/>
<i className="absolute inset-0 w-full h-full text-black bg-lime-400 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
<span className="text-sm font-medium uppercase tracking-wide text-neutral-300 group-hover:text-white">Добавить аудиогид (+300₽)</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group">
<div className="relative w-6 h-6 border-2 border-neutral-500 group-hover:border-lime-400 bg-transparent transition-colors">
<input checked="" className="peer appearance-none w-full h-full cursor-pointer" type="checkbox"/>
<i className="absolute inset-0 w-full h-full text-black bg-lime-400 opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</div>
<span className="text-sm font-medium uppercase tracking-wide text-neutral-300 group-hover:text-white">Кормление животных (+500₽)</span>
</label>
</div>
<div className="flex flex-col md:flex-row gap-6 items-center justify-between border-t border-neutral-800 pt-8">
<div>
<span className="block text-xs uppercase text-neutral-500 mb-1">Итого к оплате</span>
<span className="text-4xl font-bold text-white tracking-tighter">2 100 ₽</span>
</div>
<button className="w-full md:w-auto bg-lime-400 hover:bg-lime-300 text-black text-lg font-bold uppercase tracking-tight px-12 py-5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3" type="button">
                        Оплатить
                        <i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-black border-t border-neutral-800 pt-20 pb-10 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<a className="text-5xl font-semibold tracking-tighter uppercase leading-none text-white block mb-6" href="#">
                        ZOO<span className="text-lime-400">.</span>MSK
                    </a>
<p className="text-neutral-500 max-w-sm">Мы создаем пространство, где город встречается с дикой природой. Приходите и станьте частью экосистемы.</p>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest mb-6">Навигация</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors uppercase text-sm font-medium" href="#">Главная</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors uppercase text-sm font-medium" href="#">Животные</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors uppercase text-sm font-medium" href="#">Карта парка</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors uppercase text-sm font-medium" href="#">Новости</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-widest mb-6">Контакты</h4>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors uppercase text-sm font-medium" href="#">+7 (999) 000-00-00</a></li>
<li><a className="text-neutral-400 hover:text-lime-400 transition-colors uppercase text-sm font-medium" href="#">hello@zoomsk.ru</a></li>
<li className="flex gap-4 mt-4">
<a className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs uppercase tracking-widest">© 2023 ZOOMSK. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white text-xs uppercase tracking-widest transition-colors" href="#">Privacy</a>
<a className="text-neutral-600 hover:text-white text-xs uppercase tracking-widest transition-colors" href="#">Terms</a>
</div>
</div>

<div className="mt-12 text-center">
<h2 className="text-[12vw] md:text-[14vw] font-bold text-neutral-900 leading-none select-none tracking-tighter hover:text-neutral-800 transition-colors cursor-default">
                    WILDLIFE
                </h2>
</div>
</div>
</footer>


    </>
  );
}
