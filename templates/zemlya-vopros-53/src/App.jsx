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
      

<div className="min-h-screen md:p-8 lg:p-12 pt-4 pr-4 pb-4 pl-4">
<div className="max-w-[1440px] mx-auto bg-white rounded-[2.5rem] shadow-sm overflow-hidden pb-32">

<header className="flex md:px-16 pt-8 pr-8 pb-8 pl-8 items-center justify-between">
<div className="text-xl font-medium text-slate-900 tracking-tight font-pt-serif">Академия Земельный Вопрос</div>
<nav className="hidden md:flex gap-10">
<a className="hover:text-gray-900 transition-colors text-base font-medium text-gray-500 font-sans" href="#">О нас</a>
<a className="hover:text-gray-900 transition-colors text-base font-medium text-gray-500 font-sans" href="#">Программы</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors font-sans" href="#">Кейсы</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors font-sans" href="#">Наставники</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors font-sans" href="#">Контакты</a>
</nav>
<div className="md:hidden">
<i className="w-6 h-6 text-gray-900" data-lucide="menu" strokeWidth="1.5"></i>
</div>
</header>
<main className="">

<section className="md:px-8 lg:px-16 mt-4 pr-4 pl-4">
<div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] rounded-[2.5rem] overflow-hidden group">

<img alt="Expert" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"/>

<div className="bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div><div className="bg-gradient-to-r from-[#0f172a]/70 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-12 left-8 md:bottom-20 md:left-20 max-w-3xl">
<h1 className="md:text-6xl lg:text-[5rem] leading-[1.05] text-5xl font-medium text-white tracking-tight font-pt-serif">
                                Академия<br/>Земельный Вопрос
                            </h1>
<p className="md:mt-8 md:text-xl lg:text-2xl leading-snug text-lg font-medium text-gray-200 font-manrope max-w-xl mt-6">Начни зарабатывать на земле<br/>от 200 000р в месяц.</p>
</div>
</div>

<div className="mt-8 md:mt-10 ml-4 md:ml-20">
<a className="inline-flex items-center justify-center px-10 py-5 bg-[#0f172a] text-white text-lg font-medium rounded-full hover:bg-black transition-colors w-full sm:w-auto shadow-lg shadow-blue-900/10 font-sans" href="#">
                            Начать обучение
                        </a>
</div>
</section>

<section className="md:px-16 md:mt-48 mt-32 pr-8 pl-8">

<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
<div className="lg:w-5/12">
<h2 className="md:text-4xl lg:text-[2.5rem] leading-snug text-3xl font-medium text-[#0f172a] tracking-tight font-manrope">Академия Земельный Вопрос помогает.</h2>
<p className="mt-8 text-lg text-gray-500 leading-relaxed font-normal font-sans">
                                Мы создали пошаговую экосистему, которая превращает новичков в уверенных специалистов по работе с землей, обеспечивая стабильный доход и глубокое понимание рынка.
                            </p>

<div className="flex items-center gap-8 mt-12 opacity-60 grayscale">
<i className="w-8 h-8" data-lucide="building-2" strokeWidth="1.5"></i>
<i className="w-8 h-8" data-lucide="landmark" strokeWidth="1.5"></i>
<i className="w-8 h-8" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
</div>
<div className="lg:w-6/12 grid grid-cols-2 gap-x-12 gap-y-16">

<div className="flex flex-col">
<span className="text-5xl md:text-6xl tracking-tighter text-[#0f172a] font-manrope font-medium">1000+</span>
<span className="mt-4 text-base text-gray-500 font-medium font-sans">Успешных студентов прошли обучение</span>
</div>

<div className="flex flex-col">
<span className="text-5xl md:text-6xl tracking-tighter text-[#0f172a] font-manrope font-medium">5+</span>
<span className="mt-4 text-base text-gray-500 font-medium font-sans">Видов инвестиций в земельные участки</span>
</div>

<div className="flex flex-col">
<span className="text-5xl md:text-6xl tracking-tighter text-[#0f172a] font-manrope font-medium">98%</span>
<span className="mt-4 text-base text-gray-500 font-medium font-sans">Доля успешных сделок выпускников</span>
</div>

<div className="flex flex-col">
<span className="text-5xl md:text-6xl tracking-tighter text-[#0f172a] font-manrope font-medium">200к</span>
<span className="mt-4 text-base text-gray-500 font-medium font-sans">Минимальный доход в месяц после старта</span>
</div>
</div>
</div>

<div className="mt-40">

<div className="flex mb-12 items-end justify-between">
<h3 className="text-3xl font-medium text-[#0f172a] tracking-tight font-manrope">Из чего состоит академия:</h3>

<div className="flex gap-4">
<button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors group">
<i className="w-6 h-6 text-[#0f172a] group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-14 h-14 rounded-full bg-[#0f172a] flex items-center justify-center hover:bg-black transition-colors group">
<i className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
<img alt="Методика" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#0f172a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-6 left-6 text-white text-lg font-medium tracking-wide drop-shadow-md font-sans">01</div>
</div>
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#0f172a]" data-lucide="book-open" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight text-[#0f172a] font-manrope font-medium">Методика</h4>
</div>
<p className="text-base text-gray-500 leading-relaxed font-normal font-sans">
                                    Пошаговый алгоритм от поиска ликвидного участка до успешной продажи.
                                </p>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
<img alt="Практика" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#0f172a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-6 left-6 text-white text-lg font-medium tracking-wide drop-shadow-md font-sans">02</div>
</div>
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#0f172a]" data-lucide="compass" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight text-[#0f172a] font-manrope font-medium">Практика</h4>
</div>
<p className="text-base text-gray-500 leading-relaxed font-normal font-sans">
                                    Разбор реальных объектов, оформление документов и проведение сделок.
                                </p>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
<img alt="Сообщество" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#0f172a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-6 left-6 text-white text-lg font-medium tracking-wide drop-shadow-md font-sans">03</div>
</div>
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#0f172a]" data-lucide="users" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight text-[#0f172a] font-manrope font-medium">Сообщество</h4>
</div>
<p className="text-base text-gray-500 leading-relaxed font-normal font-sans">
                                    Закрытый клуб инвесторов для обмена опытом и совместных проектов.
                                </p>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
<img alt="Личная поддержка" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#0f172a]/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute top-6 left-6 text-white text-lg font-medium tracking-wide drop-shadow-md font-sans">04</div>
</div>
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-[#0f172a]" data-lucide="user-check" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight text-[#0f172a] font-manrope font-medium">Личная поддержка</h4>
</div>
<p className="text-base text-gray-500 leading-relaxed font-normal font-sans">
                                    Сопровождение наставниками на каждом этапе до первых результатов.
                                </p>
</div>
</div>
</div>
</section>
</main>
</div>
</div>


    </>
  );
}
