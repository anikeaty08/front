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
      
<header className="fixed top-0 left-0 w-full z-[100] transition-transform duration-500 py-4 px-6 md:px-20 flex justify-between items-center mix-blend-difference text-white" id="main-nav">
<div className="display text-xl uppercase tracking-tighter">
        Тимур Строит
    </div>
<nav className="hidden md:flex gap-8 items-center text-[10px] uppercase tracking-[0.2em] text-white/70">
<a className="hover:text-white transition-colors" href="#expert-header">Направления</a>
<a className="hover:text-white transition-colors" href="#about">О компании</a>
<a className="hover:text-white transition-colors" href="#portfolio">Кейсы</a>
<a className="hover:text-white transition-colors" href="#contact">Контакты</a>
<button className="ml-4 px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 rounded-full text-[9px]" onclick="toggleModal(true)">
            Обсудить проект
        </button>
</nav>
</header>
<div className="wrapper">
<div className="fixed inset-0 bg-black z-[10000] flex flex-col justify-center items-center text-white" id="loader">
<div className="display text-4xl mb-4">ТИМУР СТРОИТ</div>
<div className="w-0 h-1 bg-[var(--c-accent)] absolute bottom-0 left-0" id="loader-bar"></div>
</div>
<div className="wrapper">
<section className="h-screen relative flex overflow-hidden bg-black" id="hero-split">
<div className="split-side cursor-pointer group" id="side-home">
<img className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070"/>
<div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
<h2 className="display text-4xl md:text-5xl mb-4 font-semibold uppercase">ИЖС</h2>
<p className="text-[10px] tracking-[0.4em] uppercase opacity-60">Загородные дома</p>
</div>
</div>
<div className="split-side border-l border-white/10 cursor-pointer group" id="side-prom">
<div className="absolute inset-0 w-full h-full pointer-events-none bg-black">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/6h0mgwlx61uhc83yinj17/2.mp4?rlkey=rtctwq2s9xznzxpwtii9eshrq&amp;st=won2n89j&amp;raw=1" type="video/mp4"/>
</video>
</div>
<div className="flex flex-col text-white h-full z-20 relative items-center justify-center">
<h2 className="display text-4xl md:text-5xl mb-4 font-semibold uppercase">ПРОМ</h2>
<p className="text-[10px] tracking-[0.4em] uppercase opacity-60">Промышленные объекты</p>
</div>
</div>
</section>
<section className="py-32 px-6 md:px-20 max-w-[1800px] mx-auto" id="about">
<div id="content-default">
<h2 className="display text-4xl md:text-5xl leading-tight font-semibold">Надежность,<br/><span className="text-orange-600 font-semibold">без компромиссов.</span></h2>
</div>
<div className="hidden" id="content-home">
<h2 className="display text-4xl md:text-5xl font-semibold uppercase">Проектируем и строим
                дома из газобетона
                 — <br/><span className="text-orange-600 font-semibold">за 6-8 месяцев
                в Москве и МО</span></h2>
<p className="mt-6 text-xl text-gray-700 font-light">3-х уровневый контроль качества. Прозрачная смета. Гарантия – 5 лет.</p>
</div>
<div className="hidden" id="content-prom">
<h2 className="display text-4xl md:text-5xl font-semibold uppercase">Строительство <br/>промышленных <span className="text-orange-600 font-semibold">Зданий.</span></h2>
<p className="mt-6 text-xl text-gray-700 font-light">Каждый проект — индивидуальное решение
под конкретные задачи заказчика, мы создаём рабочие объекты, которые приносят бизнесу результат</p>
</div>
</section>
<section className="py-32 px-6 md:px-20 bg-[#121212] text-white" id="competencies">
<div className="max-w-[1800px] mx-auto">
<div className="hidden" id="comp-prom">
<h2 className="display text-3xl md:text-5xl mb-24 text-right leading-tight max-w-5xl ml-auto uppercase tracking-tighter">
                        Основные направления профессиональной компетенции и опыта нашей компании
                    </h2>
<div className="grid gap-y-0 border-t border-white/20">
<div className="grid md:grid-cols-3 gap-10 items-start py-12 border-b border-white/20 hover:bg-white/5 transition-colors px-4">
<div className="display text-lg uppercase tracking-wider text-orange-600">Промышленное строительство</div>
<div className="text-gray-400 text-sm leading-relaxed space-y-3">
<p>• Производственные цеха</p>
<p>• Логистические склады</p>
</div>
<div className="text-gray-400 text-sm leading-relaxed space-y-3">
<p>• Распределительные центры</p>
<p>• Специализированные помещения</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-10 items-start py-12 border-b border-white/20 hover:bg-white/5 transition-colors px-4">
<div className="display text-lg uppercase tracking-wider text-orange-600">Коммерческая недвижимость</div>
<div className="text-gray-400 text-sm leading-relaxed space-y-3">
<p>• Автосервисы и автомойки</p>
<p>• Торговые павильоны</p>
</div>
<div className="text-gray-400 text-sm leading-relaxed space-y-3">
<p>• Офисные центры</p>
<p>• Комплексы под ключ</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-10 items-start py-12 border-b border-white/20 hover:bg-white/5 transition-colors px-4">
<div className="display text-lg uppercase tracking-wider text-orange-600">Инженерный комплекс</div>
<div className="text-gray-400 text-sm leading-relaxed space-y-3">
<p>• Проектирование</p>
<p>• Монтаж инженерных систем</p>
</div>
<div className="text-gray-400 text-sm leading-relaxed space-y-3">
<p>• Монтаж металлоконструкций</p>
<p>• Ограждения</p>
</div>
</div>
</div>
</div>
<div className="hidden" id="comp-home">
<h2 className="display text-3xl md:text-5xl mb-24 leading-tight max-w-5xl uppercase tracking-tighter">
        Вы всегда знаете, что происходит на стройке
    </h2>
<div className="grid md:grid-cols-2 gap-20 border-t border-white/20 pt-16">
<div className="space-y-10">
<div className="border-l-2 border-orange-600 pl-8">
<h3 className="display text-xl uppercase mb-4">Регулярные отчёты</h3>
<p className="text-gray-400 font-light">в общем чате — следите за прогрессом, не выезжая на объект.</p>
</div>
<div className="border-l-2 border-orange-600 pl-8">
<h3 className="display text-xl uppercase mb-4">Онлайн-трансляция</h3>
<p className="text-gray-400 font-light">Контролируйте стройку в любой момент.</p>
</div>
</div>
<div className="space-y-10">
<div className="border-l-2 border-orange-600 pl-8">
<h3 className="display text-xl uppercase mb-4">Сдача этапами</h3>
<p className="text-gray-400 font-light">с подписанием актов скрытых и выполненных работ — знаете за что платите.</p>
</div>
<div className="border-l-2 border-orange-600 pl-8">
<h3 className="display text-xl uppercase mb-4">Исполнительная документация</h3>
<p className="text-gray-400 font-light">на все этапы работ — полный пакет документов, подтверждающих качество.</p>
</div>
</div>
</div>
</div>
</div></section>
<section className="bg-white py-24 text-black hidden" id="izhs-projects">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl uppercase font-bold mb-12 tracking-tight">
            Проекты домов
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group relative h-[400px] block overflow-hidden cursor-pointer" href="/project-kanisty">
<img alt="Канисты" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold mb-1">Канисты</h3>
<p className="text-sm opacity-80">168 м²</p>
</div>
</a>
<a className="group relative h-[400px] block overflow-hidden cursor-pointer" href="#">
<img alt="Марьино" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold mb-1">Марьино</h3>
<p className="text-sm opacity-80">272 м²</p>
</div>
</a>
<a className="group relative h-[400px] block overflow-hidden cursor-pointer" href="#">
<img alt="Лесной" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold mb-1">Лесной</h3>
<p className="text-sm opacity-80">145 м²</p>
</div>
</a>
<a className="group relative h-[400px] block overflow-hidden cursor-pointer" href="#">
<img alt="Сканди" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold mb-1">Сканди</h3>
<p className="text-sm opacity-80">120 м²</p>
</div>
</a>
<a className="group relative h-[400px] block overflow-hidden cursor-pointer" href="#">
<img alt="Хайтек" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold mb-1">Хайтек</h3>
<p className="text-sm opacity-80">310 м²</p>
</div>
</a>
<a className="group relative h-[400px] block overflow-hidden cursor-pointer" href="#">
<img alt="Озерный" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold mb-1">Озерный</h3>
<p className="text-sm opacity-80">195 м²</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-20 bg-[#E3E1DC] hidden" id="advantages-prom">
<div className="max-w-[1400px] mx-auto">
<div className="mb-20">
<p className="text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-4 font-bold">Наш подход</p>
<h2 className="display text-3xl md:text-4xl max-w-2xl leading-tight uppercase">
                        Строительство промышленных и коммерческих объектов
                    </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-stretch">
<div className="bg-[#D6D4D0] p-12 min-h-[350px] flex flex-col justify-between border border-black/5 hover:border-orange-500/50 transition-all duration-500 group">
<h3 className="display text-lg uppercase leading-tight mb-8 group-hover:text-orange-600 transition-colors">Инженерный подход</h3>
<div className="text-sm text-gray-600 leading-relaxed font-light">
<p>Проектируем с учетом реальных нагрузок и специфики вашего оборудования.</p>
<span className="font-bold text-black mt-6 block uppercase text-[10px] tracking-wider">Результат: здание без переделок</span>
</div>
</div>
<div className="bg-[#D6D4D0] p-12 min-h-[350px] flex flex-col justify-between border border-black/5 hover:border-orange-500/50 transition-all duration-500 group">
<h3 className="display text-lg uppercase leading-tight mb-8 group-hover:text-orange-600 transition-colors">ПРОЗРАЧНЫЙ КОНТРОЛЬ</h3>
<div className="text-sm text-gray-600 leading-relaxed font-light">
<p>Фиксируем сроки, этапы и объёмы работ, предоставляем отчётность по ходу строительства.</p>
<span className="font-bold text-black mt-6 block uppercase text-[10px] tracking-wider">Для вас: понятный процесс.</span>
</div>
</div>
<div className="bg-[#D6D4D0] p-12 min-h-[350px] flex flex-col justify-between border border-black/5 hover:border-orange-500/50 transition-all duration-500 group">
<h3 className="display text-lg uppercase leading-tight mb-8 group-hover:text-orange-600 transition-colors">Комплексный цикл</h3>
<div className="text-sm text-gray-600 leading-relaxed font-light">
<p>От геодезии и проектирования до монтажа сложных инженерных систем и ввода в эксплуатацию.</p>
<span className="font-bold text-black mt-6 block uppercase text-[10px] tracking-wider">Результат: один ответственный</span>
</div>
</div>
</div>
</div>
</section>
<section className="stack-section" id="expert-header">
<div className="stack-container">
<div className="card-item" data-category="home">
<div className="card-inner">
<div className="card-content p-8 md:p-12 flex flex-col justify-between h-full">
<div>
<div className="text-5xl display mb-2 text-orange-600">01</div>
<h3 className="text-3xl font-bold uppercase display">Дома из газобетона</h3>
<p className="text-sm mt-4 opacity-70 uppercase tracking-widest">Капитальное строительство</p>
</div>
<div className="text-gray-400 font-light">
                                Профессиональное возведение загородных домов с соблюдением всех СНиП. Личный контроль качества кладки и монолитных узлов.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-orange-500 pb-2 w-max hover:text-orange-500 transition-colors">
                                Рассчитать стоимость
                            </button>
</div>
<div className="card-img-wrap h-full">
<img alt="ИЖС" className="card-img w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070"/>
</div>
</div>
</div>
</div>
</section>
<section className="stack-section bg-[#121212] hidden" id="portfolio">
<div className="text-center mb-20 px-6">
<p className="text-[10px] uppercase tracking-[0.4em] text-orange-600 mb-4 font-bold split-animate uppercase">
                    Экспертиза и результа</p>
<h2 className="display text-4xl md:text-6xl text-white uppercase split-animate">Реализованные объекты</h2>
</div>
<div className="stack-container">
<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-orange-600">01</div>
<h3 className="text-2xl font-bold uppercase display text-white">Холодный склад</h3>
<p className="text-xs mt-4 text-orange-600 uppercase tracking-widest">г. Обнинск</p>
</div>
<div className="text-gray-400 font-light text-sm leading-relaxed">
                                Строительство холодного склада 216 м² с установкой ворот и окон. Заказчик: Фабрика Алюминиевого
                                Профиля.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-orange-500 pb-2 w-max text-white hover:text-orange-500 transition-colors mt-6">Детали проекта</button>
</div>
<div className="card-img-wrap">
<video autoplay="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/4bwon2ifh5ycryze80kyg/.mp4?rlkey=qpvyrp1x78qugapvrjoghioyo&amp;st=t2lbpplj&amp;raw=1" type="video/mp4"/>
</video>
</div>
</div>
</div>
<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-orange-600">02</div>
<h3 className="text-2xl font-bold uppercase display text-white">Фундамент под линию</h3>
<p className="text-xs mt-4 text-orange-600 uppercase tracking-widest">г. Тула</p>
</div>
<div className="text-gray-400 font-light text-sm leading-relaxed">
                                Устройство фундамента 300 м² под дробеструйную линию. Заказчик: ООО "Венталл Стальные Решения".
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-orange-500 pb-2 w-max text-white hover:text-orange-500 transition-colors mt-6">Детали проекта</button>
</div>
<div className="card-img-wrap">
<video autoplay="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/t3e6svq6wwiqtsfvmomvn/.mp4?rlkey=5s0jyhta1jih2z95h6lbdpq1d&amp;st=jblu2bsv&amp;raw=1" type="video/mp4"/>
</video>
</div>
</div>
</div>
<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-5xl display mb-2 text-orange-600">03</div>
<h3 className="text-2xl font-bold uppercase display text-white">Пром-бытовой корпус</h3>
<p className="text-xs mt-4 text-orange-600 uppercase tracking-widest">г. Обнинск</p>
</div>
<div className="text-gray-400 font-light text-sm leading-relaxed">
                                Строительство корпуса 1081 м² вспомогательного назначения. Заказчик: Фабрика Алюминиевого
                                Профиля.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-orange-500 pb-2 w-max text-white hover:text-orange-500 transition-colors mt-6">Детали проекта</button>
</div>
<div className="card-img-wrap">
<video autoplay="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loop="" muted="" playsinline="">
<source src="https://www.dropbox.com/scl/fi/6h0mgwlx61uhc83yinj17/2.mp4?rlkey=rtctwq2s9xznzxpwtii9eshrq&amp;st=ptize2pj&amp;raw=1" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 md:px-20 bg-white overflow-hidden" id="sro"> <div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16">
<h2 className="display text-3xl md:text-5xl uppercase leading-tight">
                Членство в СРО — <br/>
<span className="text-orange-600">Безопасность и законность</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start mb-16">
<div className="relative group">
<div className="border border-gray-100 shadow-xl p-3 bg-white transform group-hover:scale-[1.02] transition-transform duration-700">
<img alt="Выписка СРО 1" className="w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="relative group">
<div className="border border-gray-100 shadow-xl p-3 bg-white transform group-hover:scale-[1.02] transition-transform duration-700">
<img alt="Выписка СРО 2" className="w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
<div className="md:col-span-2">
<h3 className="display text-xl uppercase mb-4">Гарантия ответственности</h3>
<p className="text-gray-600 text-base leading-relaxed font-light">
                    Мы являемся действующим членом саморегулируемой организации. Это подтверждает наличие у нас квалифицированного штата специалистов, соблюдение стандартов качества и наличие финансовых гарантий перед заказчиками.
                </p>
</div>
<div className="flex flex-col justify-end">
<div className="text-orange-600 font-bold mb-1 uppercase text-[10px] tracking-widest">Текущий статус</div>
<div className="text-lg text-gray-900 font-bold uppercase flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Активен
                </div>
</div>
</div>
</div>
</section></div></div>
    </>
  );
}
