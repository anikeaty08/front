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
      

<div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-fade-in delay-300 px-4 md:px-0" id="cookie-banner">
<div className="bg-white/90 backdrop-blur-md border border-neutral-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl p-4 flex items-start gap-4">
<div className="flex-1">
<p className="text-sm text-neutral-600 leading-snug">
                    Мы используем файлы cookie для улучшения работы сайта.
                </p>
</div>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" onclick="document.getElementById('cookie-banner').style.display='none'">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 bg-neutral-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-neutral-900/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="lucide:boxes" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-bold tracking-tight text-lg leading-none group-hover:opacity-80 transition-opacity">Гранд Профит</span>
<span className="text-[10px] text-neutral-400 font-medium tracking-wider uppercase leading-none mt-0.5">Групп</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#about">О компании</a>
<a className="hover:text-neutral-900 transition-colors" href="#projects">Наши работы</a>
<a className="hover:text-neutral-900 transition-colors" href="#contacts">Контакты</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end text-xs text-neutral-500 font-mono leading-tight">
<a className="hover:text-neutral-900 transition-colors" href="tel:996888888600">996 888 888 600</a>
<a className="hover:text-neutral-900 transition-colors" href="tel:996312973057">996 312 973 057</a>
</div>
<div className="h-6 w-px bg-neutral-200 hidden md:block"></div>
<button className="flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 px-3 py-1.5 rounded-md transition-colors border border-transparent hover:border-neutral-200">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="16"></iconify-icon>
<span>Ru</span>
</button>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative min-h-[85vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Architecture Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
<div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
<div className="max-w-3xl animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Лидер в сфере инженерных коммуникаций
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 leading-[0.95] mb-8">
                        Строим <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800">инфраструктуру</span> <br/>
                        будущего
                    </h1>
<p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed font-light mb-10">
                        ООО "Гранд Профит Групп" — профессиональное проектирование и монтаж инженерных сетей, строительство жилых и промышленных объектов под ключ.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-4 rounded-xl font-medium text-sm transition-all inline-flex items-center gap-2 shadow-xl shadow-neutral-900/20 hover:shadow-neutral-900/30 hover:-translate-y-1" href="#projects">
                            Наши проекты
                            <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="bg-white/50 backdrop-blur-md border border-neutral-200 text-neutral-900 hover:bg-white px-8 py-4 rounded-xl font-medium text-sm transition-all hover:border-neutral-300" href="#contacts">
                            Связаться с нами
                        </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-6 md:left-auto md:right-10 z-10 animate-fade-in delay-300">
<div className="flex items-center gap-3 text-xs font-mono text-neutral-500 uppercase tracking-widest -rotate-90 md:rotate-0 origin-left">
<span>Скролльте вниз</span>
<div className="w-12 h-px bg-neutral-400"></div>
</div>
</div>
</section>

<section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6">
<div className="bg-white border border-neutral-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1 border-r border-neutral-100 last:border-0 pr-4">
<div className="text-4xl font-semibold tracking-tight text-neutral-900">15<span className="text-emerald-500 text-2xl align-top">+</span></div>
<div className="text-sm text-neutral-500 font-medium">Лет опыта</div>
</div>
<div className="space-y-1 border-r border-neutral-100 last:border-0 pr-4">
<div className="text-4xl font-semibold tracking-tight text-neutral-900">110<span className="text-emerald-500 text-2xl align-top">+</span></div>
<div className="text-sm text-neutral-500 font-medium">Проектов</div>
</div>
<div className="space-y-1 border-r border-neutral-100 last:border-0 pr-4">
<div className="text-4xl font-semibold tracking-tight text-neutral-900">150<span className="text-emerald-500 text-2xl align-top">+</span></div>
<div className="text-sm text-neutral-500 font-medium">Специалистов</div>
</div>
<div className="space-y-1">
<div className="text-4xl font-semibold tracking-tight text-neutral-900">70<span className="text-emerald-500 text-2xl align-top">+</span></div>
<div className="text-sm text-neutral-500 font-medium">Единиц техники</div>
</div>
</div>
</section>

<section className="mt-24 border-y border-neutral-100 bg-neutral-50/50 py-12 overflow-hidden">
<div className="relative w-full max-w-[100vw]">
<div className="flex w-[200%] animate-ticker hover:pause gap-16 items-center">

<div className="flex items-center gap-16 opacity-40 font-semibold text-lg whitespace-nowrap uppercase tracking-widest font-mono text-neutral-400">
<span>JICA</span>
<span>WorldBank</span>
<span>IsDB</span>
<span>TS Group</span>
<span>Manas Airport</span>
<span>Мэрия Бишкек</span>
<span>AUCA</span>
<span>Aga Khan</span>
<span>UNDP</span>
<span>EBRR</span>
<span>ARIS</span>
<span>Alliance Altyn</span>
<span>ADB</span>
</div>

<div className="flex items-center gap-16 opacity-40 font-semibold text-lg whitespace-nowrap uppercase tracking-widest font-mono text-neutral-400">
<span>JICA</span>
<span>WorldBank</span>
<span>IsDB</span>
<span>TS Group</span>
<span>Manas Airport</span>
<span>Мэрия Бишкек</span>
<span>AUCA</span>
<span>Aga Khan</span>
<span>UNDP</span>
<span>EBRR</span>
<span>ARIS</span>
<span>Alliance Altyn</span>
<span>ADB</span>
</div>
</div>

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 relative z-10">
<img alt="Engineering planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1931&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-grid-pattern opacity-50 -z-0"></div>
<div className="absolute top-10 -left-6 w-20 h-20 border border-neutral-200 rounded-full -z-0"></div>
</div>
<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">О Компании</h2>
<div className="h-1 w-16 bg-neutral-900 rounded-full"></div>
</div>
<div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
<p>
<strong className="text-neutral-900 font-medium">ООО "Гранд Профит Групп"</strong> — это больше, чем строительная компания. Мы создаем инфраструктуру будущего. Мы располагаем квалифицированными специалистами, имеющими соответствующие сертификаты и большой опыт инженерных и монтажных работ.
                        </p>
<p>
                            Мы располагаем широкой технической и технологической базой для качественного и высококвалифицированного исполнения потребностей Заказчика. Наши решения надежны, долговечны и соответствуют международным стандартам.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
<iconify-icon className="text-emerald-600" icon="lucide:award" width="24"></iconify-icon>
<span className="text-sm font-medium">Сертифицированное качество</span>
</div>
<div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
<iconify-icon className="text-emerald-600" icon="lucide:shield-check" width="24"></iconify-icon>
<span className="text-sm font-medium">Гарантия на работы</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-24 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Наши Услуги</h2>
<p className="text-neutral-500">Комплексный подход к инженерным задачам</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 transition-colors pb-0.5" href="#">Все услуги</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3">Дорожные работы</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Строительство и ремонт дорожных покрытий любой сложности с использованием современной техники.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3">Электроснабжение</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Монтаж сетей, подстанций и систем освещения. Проектирование силовых линий.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:package" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3">Поставка оборудования</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Логистика и поставка специализированного инженерного оборудования из-за рубежа.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3">Теплоснабжение</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Проектирование и монтаж тепловых сетей и котельных установок промышленного масштаба.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:droplet" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3">Водоснабжение</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Системы водопровода, канализации и современные очистные сооружения.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-600 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3">Газоснабжение</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Газификация объектов жилого и промышленного назначения, установка ГРП.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-neutral-900 text-white p-10 rounded-2xl relative overflow-hidden group min-h-[400px] flex flex-col justify-between">

<div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
<img alt="Industrial texture" className="w-full h-full object-cover grayscale mix-blend-screen" src="https://images.unsplash.com/photo-1581094794329-cdac82a6cc88?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-8 border border-white/10">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold mb-4 tracking-tight">Техническая мощь</h3>
<p className="text-neutral-400 mb-8 max-w-sm text-lg font-light leading-relaxed">
                            Собственная строительная, грузовая и дорожная спецтехника позволяет выполнять задачи любой сложности без посредников.
                        </p>
</div>
<div className="relative z-10">
<div className="h-px w-full bg-white/10 mb-6"></div>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<iconify-icon icon="lucide:check" width="16"></iconify-icon>
<span>Парк техники обновлен в 2023 году</span>
</div>
</div>
</div>

<div className="border border-neutral-200 p-10 rounded-2xl bg-white flex flex-col justify-center relative overflow-hidden">
<div className="bg-grid-pattern absolute inset-0 opacity-50"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100 mb-8">
<iconify-icon icon="lucide:check-circle" width="12"></iconify-icon>
                            Государственная лицензия
                        </div>
<h3 className="text-3xl font-semibold mb-4 tracking-tight">Лицензия на работы</h3>
<p className="text-neutral-500 mb-10 text-lg font-light">
                            Мы работаем в строгом соответствии с законодательством Кыргызской Республики.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-sm text-neutral-400">
<iconify-icon icon="lucide:file-text" width="32"></iconify-icon>
</div>
<div className="text-center sm:text-left">
<div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Серия КРЦ-1-2</div>
<div className="font-mono text-xl text-neutral-900 font-medium">№ 09339 от 03.06.2020</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-100" id="projects">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Наши проекты</h2>
<p className="text-neutral-500 mt-2">Избранные реализованные объекты</p>
</div>
</div>
<div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">

<div className="grid grid-cols-12 gap-4 p-4 border-b border-neutral-200 bg-neutral-50 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<div className="col-span-8 md:col-span-9">Проект</div>
<div className="col-span-4 md:col-span-3 text-right">Дата сдачи</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-neutral-100 hover:bg-neutral-50 transition-colors items-center group cursor-default">
<div className="col-span-8 md:col-span-9">
<div className="font-medium text-lg text-neutral-900 group-hover:text-emerald-700 transition-colors">Жеруй</div>
<div className="text-sm text-neutral-500 mt-1">Комплексные инженерные работы</div>
</div>
<div className="col-span-4 md:col-span-3 text-right font-mono text-sm text-neutral-600">07.04.2022</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-neutral-100 hover:bg-neutral-50 transition-colors items-center group cursor-default">
<div className="col-span-8 md:col-span-9">
<div className="font-medium text-lg text-neutral-900 group-hover:text-emerald-700 transition-colors">Кызыл Кия</div>
<div className="text-sm text-neutral-500 mt-1">Водоснабжение и канализация</div>
</div>
<div className="col-span-4 md:col-span-3 text-right font-mono text-sm text-neutral-600">07.04.2022</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-neutral-100 hover:bg-neutral-50 transition-colors items-center group cursor-default">
<div className="col-span-8 md:col-span-9">
<div className="font-medium text-lg text-neutral-900 group-hover:text-emerald-700 transition-colors">Балыкчы, Чолпон-ата</div>
<div className="text-sm text-neutral-500 mt-1">Реконструкция очистных сооружений</div>
</div>
<div className="col-span-4 md:col-span-3 text-right font-mono text-sm text-neutral-600">07.04.2022</div>
</div>

<div className="grid grid-cols-12 gap-4 p-6 border-b border-neutral-100 hover:bg-neutral-50 transition-colors items-center group cursor-default">
<div className="col-span-8 md:col-span-9">
<div className="font-medium text-lg text-neutral-900 group-hover:text-emerald-700 transition-colors">Бишкекводоканал</div>
<div className="text-sm text-neutral-500 mt-1">Модернизация насосных станций</div>
</div>
<div className="col-span-4 md:col-span-3 text-right font-mono text-sm text-neutral-600">06.02.2023</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-900 text-neutral-400 pt-20 pb-10" id="contacts">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">

<div className="md:col-span-3">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-neutral-900">
<iconify-icon icon="lucide:boxes" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-white">Гранд Профит</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        Профессиональные решения в области строительства и инженерных коммуникаций.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-5">
<h4 className="font-semibold text-white mb-6">Юридическая информация</h4>
<div className="space-y-4 text-sm font-light">
<div className="border-l border-neutral-800 pl-4">
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">Наименование</div>
<div className="text-white font-medium">Общество с ограниченной ответственностью "Гранд Профит Групп"</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="border-l border-neutral-800 pl-4">
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">ИНН</div>
<div className="text-white font-mono">01609201510230</div>
</div>
<div className="border-l border-neutral-800 pl-4">
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">Рег. номер</div>
<div className="text-white font-mono">148779-3301-ООО</div>
</div>
</div>
<div className="border-l border-neutral-800 pl-4">
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">Руководитель</div>
<div className="text-white">Жамалидинов Искендер Нурланбекович</div>
</div>
</div>
</div>

<div className="md:col-span-4">
<h4 className="font-semibold text-white mb-6">Контакты</h4>
<div className="space-y-5 text-sm">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-white" icon="lucide:map-pin" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">Адрес</div>
<span className="text-neutral-300">город Бишкек, Свердловский район,<br/> ул. Баялинова, дом 31а</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-white" icon="lucide:phone" width="16"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">Телефоны</div>
<a className="text-neutral-300 hover:text-white font-mono transition-colors" href="tel:996888888600">996 888 888 600</a>
<a className="text-neutral-300 hover:text-white font-mono transition-colors" href="tel:996312973057">996 312 973 057</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-white" icon="lucide:mail" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-600 uppercase tracking-wider mb-1">Email</div>
<a className="text-neutral-300 hover:text-white transition-colors" href="mailto:info@grandprofit.kg">info@grandprofit.kg</a>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
<p>© 2024 ООО "Гранд Профит Групп". Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Карта сайта</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
