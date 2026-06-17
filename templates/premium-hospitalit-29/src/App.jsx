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
      

<div className="absolute top-0 left-0 w-full h-[150vh] pointer-events-none z-0 overflow-hidden" style={{maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'}}>

<div className="absolute inset-0 opacity-40" style={{backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<div className="absolute top-32 -right-16 md:right-12 w-64 md:w-80 h-[28rem] border border-gray-300 bg-white/30 backdrop-blur-sm p-5 rotate-12 opacity-60">

<div className="flex items-center gap-4 mb-5 relative">
<div className="w-12 h-12 rounded-full border border-gray-300"></div>
<div className="space-y-2 flex-1">
<div className="w-24 h-2 bg-gray-200"></div>
<div className="w-16 h-2 bg-gray-200"></div>
</div>

<div className="absolute -top-6 left-6 w-px h-4 bg-gray-400"></div>
<div className="absolute -top-10 left-3 text-xs text-gray-400 font-mono tracking-tighter">48</div>
</div>

<div className="w-full aspect-square border border-gray-300 mb-5 relative flex items-center justify-center">
<div className="w-8 h-8 border border-gray-200 rotate-45"></div>

<div className="absolute -left-8 top-1/2 w-6 border-t border-gray-400"></div>
<div className="absolute -left-14 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-mono tracking-tighter">1:1</div>
</div>

<div className="flex gap-3 mb-4">
<div className="w-6 h-6 rounded-full border border-gray-300"></div>
<div className="w-6 h-6 rounded-full border border-gray-300"></div>
<div className="w-6 h-6 rounded-full border border-gray-300"></div>
</div>
<div className="w-3/4 h-2 bg-gray-200 mb-2.5"></div>
<div className="w-1/2 h-2 bg-gray-200"></div>
</div>

<div className="absolute top-[38rem] -left-20 md:left-10 w-72 md:w-80 h-[32rem] border border-gray-300 bg-white/30 backdrop-blur-sm p-5 -rotate-6 opacity-50 scale-75 md:scale-100">
<div className="flex flex-col items-center mb-8 relative">
<div className="w-24 h-24 rounded-full border border-gray-300 mb-5 relative flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-gray-200"></div>
</div>

<div className="absolute top-12 -right-10 w-8 border-t border-gray-400"></div>
<div className="absolute top-10 -right-20 text-xs text-gray-400 font-mono tracking-tighter">120</div>
<div className="w-28 h-2 bg-gray-200 mb-3"></div>
<div className="w-40 h-2 bg-gray-200"></div>
<div className="flex gap-5 mt-8 w-full justify-center">
<div className="w-14 h-14 rounded-full border border-gray-300"></div>
<div className="w-14 h-14 rounded-full border border-gray-300"></div>
<div className="w-14 h-14 rounded-full border border-gray-300"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-1.5">
<div className="aspect-square border border-gray-300"></div>
<div className="aspect-square border border-gray-300"></div>
<div className="aspect-square border border-gray-300 relative overflow-hidden">
<div className="absolute w-[200%] h-px bg-gray-300 -rotate-45 top-1/2 -left-1/2"></div>
</div>
<div className="aspect-square border border-gray-300"></div>
<div className="aspect-square border border-gray-300"></div>
<div className="aspect-square border border-gray-300"></div>
</div>
</div>

<div className="absolute top-[15%] left-[20%] text-8xl md:text-9xl font-serif text-gray-300/40 -rotate-12 select-none">M</div>
<div className="absolute top-[35%] right-[35%] text-7xl md:text-8xl font-serif text-gray-300/30 rotate-12 select-none">E</div>
<div className="absolute top-[60%] right-[18%] text-8xl md:text-9xl font-sans font-thin text-gray-300/40 -rotate-6 select-none">H</div>
<div className="absolute top-[25%] left-[60%] text-6xl md:text-7xl font-serif text-gray-300/30 rotate-45 select-none">P</div>
<div className="absolute top-[75%] left-[28%] text-8xl font-sans font-thin text-gray-300/40 rotate-12 select-none">R</div>
</div>

<header className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-xl z-50 border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-28 relative">

<a className="flex flex-col items-center justify-center group" href="#">
<div className="font-serif text-4xl md:text-5xl tracking-tighter leading-none flex items-center font-light text-black group-hover:opacity-80 transition-opacity">
<span>M</span><span>E</span>
</div>
<div className="text-xs tracking-widest mt-2 font-normal text-black uppercase">Bureau</div>
</a>

<nav className="hidden md:flex items-center space-x-12">
<a className="text-lg font-light text-gray-500 hover:text-black transition-colors duration-300" href="#expertise">Подход</a>
<a className="text-lg font-light text-gray-500 hover:text-black transition-colors duration-300" href="#services">Услуги</a>
<a className="text-lg font-light text-gray-500 hover:text-black transition-colors duration-300" href="#cases">Портфолио</a>
</nav>
<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-lg font-normal hover:bg-gray-800 transition-colors duration-300" href="#contact">
                    Обсудить проект
                </a>
</div>

<button className="md:hidden text-black p-2 flex items-center justify-center">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>
<main className="pt-28 relative z-10">

<section className="min-h-[85vh] flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 relative">
<div className="max-w-5xl relative z-10">
<p className="text-lg font-normal text-gray-500 tracking-widest uppercase mb-8 ml-1">Медиа для премиальных объектов</p>
<h1 className="font-serif text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none font-light text-black mb-10">
                    Архитекторы <br className="hidden md:block"/>
<span className="italic font-thin text-gray-600">желанного</span> присутствия.
                </h1>
<p className="text-xl md:text-2xl text-gray-500 max-w-3xl font-thin leading-relaxed mb-12 bg-[#FAFAFA]/50 backdrop-blur-md md:backdrop-blur-none md:bg-transparent rounded-2xl md:p-0">
                    Создаем медиа жизнь в объектах гостеприимства и премиальных пространствах. Превращаем эстетику в лояльность и прямые бронирования.
                </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-normal hover:bg-gray-800 transition-colors duration-300" href="#cases">
                        Смотреть кейсы
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 bg-white/50 backdrop-blur-sm text-black text-lg font-normal hover:border-black transition-colors duration-300" href="#services">
                        Что входит в работу
                    </a>
</div>
</div>
</section>

<section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 mb-40 relative z-10">
<div className="w-full aspect-video md:aspect-[21/9] bg-[#EBEBEB] relative overflow-hidden group cursor-pointer border border-gray-200">
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
<iconify-icon className="text-white ml-1" height="32" icon="solar:play-linear" width="32"></iconify-icon>
</div>
</div>

<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-1000 ease-out"></div>
</div>
</section>

<section className="bg-black text-white py-40 relative z-20" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
<div className="lg:col-span-5">
<h2 className="text-5xl md:text-6xl font-serif tracking-tight font-light leading-none sticky top-40">
                            Медиа-маркетинг, который приносит результат.
                        </h2>
</div>
<div className="lg:col-span-6 lg:col-start-7 space-y-20">
<p className="text-2xl md:text-3xl text-gray-400 font-thin leading-snug">
                            Мы понимаем специфику премиального сегмента и HORECA: от работы с репутацией и сезонности до важности каждой детали в интерьерной съемке.
                        </p>
<div className="space-y-16">

<div className="border-t border-gray-800 pt-8">
<iconify-icon className="mb-6 text-gray-400 block" height="32" icon="solar:stars-linear" width="32"></iconify-icon>
<h3 className="text-3xl tracking-tight font-light mb-4">Стратегия и Визуал</h3>
<p className="text-lg md:text-xl text-gray-500 font-thin leading-relaxed">
                                    Разрабатываем tone of voice и визуальную концепцию. Создаем ленту, которая передает атмосферу вашего пространства и вызывает желание оказаться там немедленно.
                                </p>
</div>

<div className="border-t border-gray-800 pt-8">
<iconify-icon className="mb-6 text-gray-400 block" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
<h3 className="text-3xl tracking-tight font-light mb-4">Продакшн и Reels</h3>
<p className="text-lg md:text-xl text-gray-500 font-thin leading-relaxed">
                                    Организуем регулярные выездные съемки. Делаем акцент на атмосферные короткие видео, фуд-съемку и эстетику интерьеров.
                                </p>
</div>

<div className="border-t border-gray-800 pt-8">
<iconify-icon className="mb-6 text-gray-400 block" height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h3 className="text-3xl tracking-tight font-light mb-4">Продвижение и Комьюнити</h3>
<p className="text-lg md:text-xl text-gray-500 font-thin leading-relaxed">
                                    Настраиваем таргетированную рекламу на целевую аудиторию. Интегрируемся с лидерами мнений. Обеспечиваем безупречный сервис в Direct и комментариях.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 max-w-7xl mx-auto px-6 lg:px-8 relative z-20 bg-[#FAFAFA]" id="cases">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<div>
<h2 className="text-5xl md:text-6xl font-serif tracking-tight font-light mb-4">Проекты</h2>
<p className="text-xl text-gray-500 font-thin">Создание медийного образа для знаковых локаций.</p>
</div>
<a className="inline-flex items-center text-lg font-normal text-black hover:text-gray-500 transition-colors group pb-1 border-b border-black hover:border-gray-500" href="#">
                    Смотреть все работы <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">

<a className="group block" href="#">
<div className="w-full aspect-[4/5] bg-[#EBEBEB] overflow-hidden mb-8 relative border border-gray-200">
<div className="absolute inset-0 bg-gray-200 transition-transform duration-1000 group-hover:scale-105 origin-center"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl tracking-tight font-light mb-3 text-black">Grand Resort &amp; Spa</h3>
<p className="text-lg text-gray-500 font-thin">Комплексный SMM и Таргет</p>
</div>
<span className="text-xs font-normal border border-gray-300 px-4 py-2 rounded-full text-gray-600 uppercase tracking-widest">Курорт</span>
</div>
</a>

<a className="group block md:mt-32" href="#">
<div className="w-full aspect-[4/5] bg-[#EBEBEB] overflow-hidden mb-8 relative border border-gray-200">
<div className="absolute inset-0 bg-gray-300 transition-transform duration-1000 group-hover:scale-105 origin-center"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl tracking-tight font-light mb-3 text-black">Boutique Hotel 1912</h3>
<p className="text-lg text-gray-500 font-thin">Визуальная концепция</p>
</div>
<span className="text-xs font-normal border border-gray-300 px-4 py-2 rounded-full text-gray-600 uppercase tracking-widest">Бутик-отель</span>
</div>
</a>

<a className="group block" href="#">
<div className="w-full aspect-square bg-[#EBEBEB] overflow-hidden mb-8 relative border border-gray-200">
<div className="absolute inset-0 bg-gray-200 transition-transform duration-1000 group-hover:scale-105 origin-center"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl tracking-tight font-light mb-3 text-black">The Oak Restaurant</h3>
<p className="text-lg text-gray-500 font-thin">Инфлюенс-маркетинг</p>
</div>
<span className="text-xs font-normal border border-gray-300 px-4 py-2 rounded-full text-gray-600 uppercase tracking-widest">Ресторан</span>
</div>
</a>

<a className="group block md:mt-32" href="#">
<div className="w-full aspect-square bg-[#EBEBEB] overflow-hidden mb-8 relative border border-gray-200">
<div className="absolute inset-0 bg-gray-300 transition-transform duration-1000 group-hover:scale-105 origin-center"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-3xl tracking-tight font-light mb-3 text-black">Aura Residences</h3>
<p className="text-lg text-gray-500 font-thin">Reels-продакшн</p>
</div>
<span className="text-xs font-normal border border-gray-300 px-4 py-2 rounded-full text-gray-600 uppercase tracking-widest">Недвижимость</span>
</div>
</a>
</div>
</section>

<section className="border-t border-gray-200 bg-white py-40 text-center px-6 relative z-20" id="contact">
<h2 className="font-serif text-5xl md:text-7xl tracking-tight font-light mb-8">Готовы к масштабу?</h2>
<p className="text-xl md:text-2xl text-gray-500 font-thin mb-12 max-w-2xl mx-auto">
                Оставьте заявку, и мы проведем аудит социальных сетей вашего проекта, предложив стратегию роста узнаваемости и продаж.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-xl font-normal hover:bg-gray-800 transition-colors duration-300" href="mailto:hello@mebureau.com">
                Оставить заявку
            </a>
</section>
</main>

<footer className="bg-[#FAFAFA] pt-24 pb-12 border-t border-gray-200 relative z-20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<div className="md:col-span-5">

<div className="inline-flex flex-col items-start mb-8 opacity-80">
<div className="font-serif text-3xl tracking-tighter leading-none flex items-center font-light text-black">
<span>M</span><span>E</span>
</div>
<div className="text-xs tracking-widest mt-2 font-normal text-black uppercase">Bureau</div>
</div>
<p className="text-lg md:text-xl text-gray-500 max-w-sm font-thin leading-relaxed">
                        Премиальное SMM-бюро. Формируем наследие современных брендов в сфере гостеприимства и архитектуры.
                    </p>
</div>
<div className="md:col-span-3 md:col-start-7">
<h4 className="text-lg font-normal tracking-tight mb-8 text-black">Социальные сети</h4>
<ul className="space-y-4 text-lg font-thin text-gray-500">
<li><a className="hover:text-black transition-colors flex items-center group" href="#">Instagram <iconify-icon className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon></a></li>
<li><a className="hover:text-black transition-colors flex items-center group" href="#">Telegram <iconify-icon className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon></a></li>
<li><a className="hover:text-black transition-colors flex items-center group" href="#">Behance <iconify-icon className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon></a></li>
</ul>
</div>
<div className="md:col-span-3">
<h4 className="text-lg font-normal tracking-tight mb-8 text-black">Контакты</h4>
<ul className="space-y-4 text-lg font-thin text-gray-500">
<li>
<a className="hover:text-black transition-colors block mb-4 text-black font-normal" href="mailto:inquiries@mebureau.com">
                                inquiries@mebureau.com
                            </a>
</li>
<li>Работаем по всему миру</li>
<li>Доступны для командировок</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200 text-sm text-gray-400 font-thin gap-4">
<p>© 2024 ME Bureau. Все права защищены.</p>
<div className="space-x-8">
<a className="hover:text-black transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
