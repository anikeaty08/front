import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'ros-base': '#F6F4F1',    // Main Background
'ros-alt': '#EEF3F7',     // Secondary Background
'ros-accent': '#C26A4A',  // Terracotta CTA
'ros-dark': '#2A2A2A',    // Main Text
'ros-gray': '#6B6B6B',    // Secondary Text
'ros-white': '#FFFFFF',
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
borderRadius: {
'xl': '16px',
'2xl': '20px',
'3xl': '24px',
},
boxShadow: {
'soft': '0 10px 40px -10px rgba(42, 42, 42, 0.04)',
'hover': '0 20px 50px -10px rgba(42, 42, 42, 0.08)',
},
transitionTimingFunction: {
'smooth': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
}
}
}
}



        // Reveal Animations on Scroll
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Sticky Navbar Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm', 'bg-ros-base/95');
                navbar.classList.remove('bg-ros-base/90');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-ros-base/95');
                navbar.classList.add('bg-ros-base/90');
            }
        });

        // Simple Parallax Effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxImages = document.querySelectorAll('.parallax-img');
            
            parallaxImages.forEach(img => {
                // Ensure the parent is in viewport before calculating to save performance
                const rect = img.parentElement.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                     const speed = 0.05;
                     const yPos = -(scrolled * speed);
                     img.style.transform = `scale(1.1) translateY(${yPos}px)`;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-ros-base/90 backdrop-blur-md border-b border-ros-dark/5 transition-all duration-300" id="navbar">
<div className="container mx-auto px-6 md:px-12 h-20 flex justify-between items-center">

<a className="text-2xl font-semibold tracking-tight text-ros-dark flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-full bg-ros-accent flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
</span>
                РосГарант
            </a>

<div className="hidden md:flex items-center space-x-12">
<a className="text-sm font-medium text-ros-gray hover:text-ros-dark transition-colors" href="#new-buildings">Новостройки</a>
<a className="text-sm font-medium text-ros-gray hover:text-ros-dark transition-colors" href="#services">Услуги</a>
<a className="text-sm font-medium text-ros-gray hover:text-ros-dark transition-colors" href="#about">О нас</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-semibold text-ros-dark" href="tel:+78000000000">+7 (800) 000-00-00</a>
<button className="w-10 h-10 md:hidden flex items-center justify-center text-ros-dark">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 md:px-12 container mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<h1 className="text-4xl md:text-5xl lg:text-[48px] leading-[1.1] font-medium text-ros-dark tracking-tight mb-6">
                    Решаем задачи с недвижимостью в Новороссийске — <span className="text-ros-accent">безопасно</span> и без лишнего риска.
                </h1>
<p className="text-lg text-ros-gray leading-relaxed mb-10 max-w-lg">
                    15 лет на рынке. 10 агентов. 2 юриста. Полная база новостроек и проверенный вторичный рынок.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-ros-accent text-white rounded-xl text-sm font-medium tracking-wide hover:bg-[#A95A3D] transition-colors shadow-soft">
                        Получить консультацию
                    </button>
<button className="px-8 py-4 border border-ros-dark/20 text-ros-dark rounded-xl text-sm font-medium tracking-wide hover:border-ros-dark transition-colors bg-transparent">
                        Посмотреть объекты
                    </button>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3] group reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<img alt="Novorossiysk Interior" className="absolute inset-0 w-full h-full object-cover parallax-img" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&amp;w=2596&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-ros-alt flex items-center justify-center text-ros-accent">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs font-medium text-ros-gray">Локация</span>
<span className="block text-sm font-semibold text-ros-dark">Новороссийск, Центральный р-н</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

<div className="group bg-white p-6 rounded-2xl shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-ros-alt text-ros-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Купить новостройку</h3>
<p className="text-sm text-ros-gray">Без комиссии, по ценам застройщика.</p>
<div className="mt-4 flex items-center text-xs font-medium text-ros-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Подобрать <iconify-icon className="ml-1 icon-slide" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<div className="w-12 h-12 rounded-full bg-ros-alt text-ros-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Продать жильё</h3>
<p className="text-sm text-ros-gray">Бесплатная оценка и фотосъемка.</p>
<div className="mt-4 flex items-center text-xs font-medium text-ros-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Оценить <iconify-icon className="ml-1 icon-slide" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.4s'}}>
<div className="w-12 h-12 rounded-full bg-ros-alt text-ros-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:key-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Найти вторичку</h3>
<p className="text-sm text-ros-gray">Только проверенные квартиры.</p>
<div className="mt-4 flex items-center text-xs font-medium text-ros-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Искать <iconify-icon className="ml-1 icon-slide" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.5s'}}>
<div className="w-12 h-12 rounded-full bg-ros-alt text-ros-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Инвестировать</h3>
<p className="text-sm text-ros-gray">Стратегии с доходностью от 30%.</p>
<div className="mt-4 flex items-center text-xs font-medium text-ros-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Расчет <iconify-icon className="ml-1 icon-slide" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ros-alt" id="new-buildings">
<div className="container mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-[32px] font-medium text-ros-dark tracking-tight mb-4">Новостройки Новороссийска</h2>
<p className="text-ros-gray max-w-md">Честные цены без переплат. Работаем напрямую с застройщиками сегмента комфорт и бизнес.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-ros-accent hover:text-ros-dark transition-colors mt-6 md:mt-0" href="#">
                    Смотреть все 42 ЖК
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer reveal-on-scroll">
<div className="relative h-64 overflow-hidden">
<img alt="JK" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=2370&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-ros-dark">Сдан</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-ros-dark mb-1">ЖК «Черноморский»</h3>
<p className="text-sm text-ros-gray mb-4">Южный район • 500м до моря</p>
<div className="flex justify-between items-center pt-4 border-t border-ros-alt">
<span className="text-sm font-semibold text-ros-dark">от 6.5 млн ₽</span>
<span className="w-8 h-8 rounded-full border border-ros-alt flex items-center justify-center text-ros-gray group-hover:border-ros-accent group-hover:text-ros-accent transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="relative h-64 overflow-hidden">
<img alt="JK" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1628624747186-a941947ce287?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-ros-accent/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-white">Старт продаж</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-ros-dark mb-1">ЖК «Босфор»</h3>
<p className="text-sm text-ros-gray mb-4">Центр • Видовые квартиры</p>
<div className="flex justify-between items-center pt-4 border-t border-ros-alt">
<span className="text-sm font-semibold text-ros-dark">от 5.2 млн ₽</span>
<span className="w-8 h-8 rounded-full border border-ros-alt flex items-center justify-center text-ros-gray group-hover:border-ros-accent group-hover:text-ros-accent transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="relative h-64 overflow-hidden">
<img alt="JK" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-ros-dark">Ключи 2025</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-ros-dark mb-1">ЖК «Арена»</h3>
<p className="text-sm text-ros-gray mb-4">Приморский • Семейный</p>
<div className="flex justify-between items-center pt-4 border-t border-ros-alt">
<span className="text-sm font-semibold text-ros-dark">от 4.8 млн ₽</span>
<span className="w-8 h-8 rounded-full border border-ros-alt flex items-center justify-center text-ros-gray group-hover:border-ros-accent group-hover:text-ros-accent transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<div className="relative h-64 overflow-hidden">
<img alt="JK" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&amp;w=2584&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-medium text-ros-dark">Бизнес-класс</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-ros-dark mb-1">ЖК «Regatta»</h3>
<p className="text-sm text-ros-gray mb-4">Набережная • Первая линия</p>
<div className="flex justify-between items-center pt-4 border-t border-ros-alt">
<span className="text-sm font-semibold text-ros-dark">от 12.5 млн ₽</span>
<span className="w-8 h-8 rounded-full border border-ros-alt flex items-center justify-center text-ros-gray group-hover:border-ros-accent group-hover:text-ros-accent transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="px-8 py-4 bg-ros-accent text-white rounded-xl text-sm font-medium tracking-wide hover:bg-[#A95A3D] transition-colors shadow-soft reveal-on-scroll">
                    Подобрать квартиру по параметрам
                </button>
</div>
</div>
</section>

<section className="py-24 bg-ros-base">
<div className="container mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-[32px] font-medium text-ros-dark text-center mb-16 reveal-on-scroll">Почему нам доверяют сделки</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-center text-center reveal-on-scroll group">
<div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center text-ros-accent mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">2 Юриста в штате</h3>
<p className="text-sm text-ros-gray leading-relaxed">Каждая сделка проходит двойной контроль юридической чистоты.</p>
</div>

<div className="flex flex-col items-center text-center reveal-on-scroll group" style={{transitionDelay: '0.1s'}}>
<div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center text-ros-accent mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Проверка по 30+ пунктам</h3>
<p className="text-sm text-ros-gray leading-relaxed">История квартиры, собственники, обременения и скрытые риски.</p>
</div>

<div className="flex flex-col items-center text-center reveal-on-scroll group" style={{transitionDelay: '0.2s'}}>
<div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center text-ros-accent mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Оценка по рынку</h3>
<p className="text-sm text-ros-gray leading-relaxed">Используем базу реальных сделок, а не цены из объявлений.</p>
</div>

<div className="flex flex-col items-center text-center reveal-on-scroll group" style={{transitionDelay: '0.3s'}}>
<div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center text-ros-accent mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-ros-dark mb-2">Полное сопровождение</h3>
<p className="text-sm text-ros-gray leading-relaxed">Мы рядом с вами от первого звонка до получения ключей и документов.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ros-alt">
<div className="container mx-auto px-6 md:px-12">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft flex flex-col md:flex-row gap-12 items-center reveal-on-scroll">

<div className="w-full md:w-1/3 aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden relative group">
<img alt="Founder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full md:w-2/3">
<div className="inline-block px-3 py-1 rounded-full bg-ros-alt text-ros-accent text-xs font-semibold uppercase tracking-wider mb-6">Основатель</div>
<h2 className="text-3xl md:text-[32px] font-medium text-ros-dark mb-6">«Репутация важнее комиссии»</h2>
<p className="text-lg text-ros-gray font-light mb-8 leading-relaxed">
                        Мы создавали РосГарант не как очередной отдел продаж, а как сервис, который защищает интересы клиента. В недвижимости цена ошибки слишком высока. Наша задача — сделать процесс прозрачным, понятным и, главное, спокойным для вас.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 items-center">
<button className="flex items-center gap-3 px-6 py-3 bg-ros-dark text-white rounded-xl hover:bg-black transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Смотреть обращение</span>
</button>
<div className="text-left">
<span className="block text-sm font-semibold text-ros-dark">Алексей Смирнов</span>
<span className="block text-xs text-ros-gray">Генеральный директор</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ros-base">
<div className="container mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-[32px] font-medium text-ros-dark">Отзывы клиентов</h2>
<div className="flex items-center gap-2 text-yellow-500 bg-white px-3 py-1 rounded-lg shadow-sm">
<span className="text-ros-dark font-bold text-sm">5.0</span>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-soft reveal-on-scroll">
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<span className="block text-sm font-semibold text-ros-dark">Елена В.</span>
<span className="text-xs text-ros-gray">Купила квартиру в ЖК «Босфор»</span>
</div>
<iconify-icon className="ml-auto opacity-50" icon="logos:yandex" width="20"></iconify-icon>
</div>
<p className="text-sm text-ros-gray leading-relaxed">
                        "Спасибо команде за терпение! Мы смотрели варианты 2 месяца. Никто не давил, честно рассказывали про минусы районов. Юристы проверили всё до запятой."
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<span className="block text-sm font-semibold text-ros-dark">Дмитрий К.</span>
<span className="text-xs text-ros-gray">Инвестиция в новостройку</span>
</div>
<iconify-icon className="ml-auto opacity-50" icon="logos:yandex" width="20"></iconify-icon>
</div>
<p className="text-sm text-ros-gray leading-relaxed">
                        "Покупал удаленно из Москвы. Алексей записал подробные видеообзоры, документы оформили электронно. Очень технологичный и спокойный подход."
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-soft reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="flex items-center gap-4 mb-6">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<span className="block text-sm font-semibold text-ros-dark">Марина С.</span>
<span className="text-xs text-ros-gray">Продажа вторички</span>
</div>
<iconify-icon className="ml-auto opacity-50" icon="logos:yandex" width="20"></iconify-icon>
</div>
<p className="text-sm text-ros-gray leading-relaxed">
                        "Продали квартиру за 3 недели по цене выше, чем я ожидала. Очень профессиональные фото и презентация объекта. Рекомендую!"
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-sm font-medium text-ros-gray hover:text-ros-dark transition-colors border-b border-transparent hover:border-ros-dark pb-0.5" href="#">
                    Читать все отзывы на Яндекс Картах
                </a>
</div>
</div>
</section>

<section className="py-24 bg-ros-base border-t border-ros-dark/5">
<div className="container mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-[32px] font-medium text-ros-dark mb-16 reveal-on-scroll">Типовые ситуации, которые мы решаем</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl border border-ros-dark/5 hover:bg-white hover:border-transparent hover:shadow-soft transition-all duration-300 cursor-pointer reveal-on-scroll">
<div className="w-10 h-10 rounded-lg bg-ros-alt text-ros-dark flex items-center justify-center mb-4">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-ros-dark mb-2">Обмен (Альтернатива)</h3>
<p className="text-xs text-ros-gray">Продать старое и купить новое в один день без потери денег.</p>
</div>

<div className="group p-6 rounded-2xl border border-ros-dark/5 hover:bg-white hover:border-transparent hover:shadow-soft transition-all duration-300 cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-lg bg-ros-alt text-ros-dark flex items-center justify-center mb-4">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-ros-dark mb-2">Материнский капитал</h3>
<p className="text-xs text-ros-gray">Использование сертификатов, военная ипотека, субсидии.</p>
</div>

<div className="group p-6 rounded-2xl border border-ros-dark/5 hover:bg-white hover:border-transparent hover:shadow-soft transition-all duration-300 cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.2s'}}>
<div className="w-10 h-10 rounded-lg bg-ros-alt text-ros-dark flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-arrow-right-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-ros-dark mb-2">Переезд из региона</h3>
<p className="text-xs text-ros-gray">Дистанционный подбор, встреча в аэропорту, экскурсия по городу.</p>
</div>

<div className="group p-6 rounded-2xl border border-ros-dark/5 hover:bg-white hover:border-transparent hover:shadow-soft transition-all duration-300 cursor-pointer reveal-on-scroll" style={{transitionDelay: '0.3s'}}>
<div className="w-10 h-10 rounded-lg bg-ros-alt text-ros-dark flex items-center justify-center mb-4">
<iconify-icon icon="solar:scale-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-ros-dark mb-2">Сложные случаи</h3>
<p className="text-xs text-ros-gray">Доли, опека, наследство, залоговые квартиры.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-ros-white">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group relative h-48 rounded-2xl overflow-hidden reveal-on-scroll" href="#">
<img alt="New" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-ros-dark/20 group-hover:bg-ros-dark/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xl font-medium block">Новостройки</span>
<span className="text-xs opacity-80 flex items-center gap-1 mt-1 group-hover:translate-x-2 transition-transform">Перейти в каталог <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
<a className="group relative h-48 rounded-2xl overflow-hidden reveal-on-scroll" href="#" style={{transitionDelay: '0.1s'}}>
<img alt="Secondary" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-ros-dark/20 group-hover:bg-ros-dark/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xl font-medium block">Вторичный рынок</span>
<span className="text-xs opacity-80 flex items-center gap-1 mt-1 group-hover:translate-x-2 transition-transform">Перейти в каталог <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
<a className="group relative h-48 rounded-2xl overflow-hidden reveal-on-scroll" href="#" style={{transitionDelay: '0.2s'}}>
<img alt="Commercial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2601&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-ros-dark/20 group-hover:bg-ros-dark/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xl font-medium block">Коммерция</span>
<span className="text-xs opacity-80 flex items-center gap-1 mt-1 group-hover:translate-x-2 transition-transform">Перейти в каталог <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-ros-alt pt-24 pb-12">
<div className="container mx-auto px-6 md:px-12">

<div className="bg-ros-dark rounded-3xl p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10 shadow-lg mb-20 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Не знаете с чего начать?</h2>
<p className="text-white/60 text-lg font-light max-w-lg">Получите бесплатную консультацию юриста или специалиста по недвижимости.</p>
</div>
<div className="flex flex-col gap-4 w-full md:w-auto">
<button className="px-8 py-4 bg-ros-accent text-white rounded-xl text-sm font-medium tracking-wide hover:bg-[#A95A3D] transition-colors shadow-lg w-full md:w-auto">
                        Оставить заявку
                    </button>
<div className="flex justify-center gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-ros-dark transition-colors" href="#">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-ros-dark transition-colors" href="#">
<iconify-icon icon="logos:telegram" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-ros-dark/10 pb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tight text-ros-dark flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 rounded-full bg-ros-accent flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</span>
                        РосГарант
                    </a>
<p className="text-xs text-ros-gray leading-relaxed">
                        Агентство недвижимости нового формата.<br/>Новороссийск, ул. Советов, 42.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-ros-dark mb-4">Меню</h4>
<ul className="space-y-3 text-sm text-ros-gray">
<li><a className="hover:text-ros-dark transition-colors" href="#">Каталог</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="#">Услуги</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="#">Команда</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="#">Блог</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-ros-dark mb-4">Услуги</h4>
<ul className="space-y-3 text-sm text-ros-gray">
<li><a className="hover:text-ros-dark transition-colors" href="#">Купить</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="#">Продать</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="#">Инвестиции</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="#">Юридическое сопровождение</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-ros-dark mb-4">Контакты</h4>
<ul className="space-y-3 text-sm text-ros-gray">
<li><a className="hover:text-ros-dark transition-colors" href="tel:+78000000000">+7 (800) 000-00-00</a></li>
<li><a className="hover:text-ros-dark transition-colors" href="mailto:info@rosgarant.ru">info@rosgarant.ru</a></li>
<li className="pt-2 text-xs">Пн-Вс: 09:00 — 20:00</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ros-gray/60">
<span>© 2026 РосГарант. Все права защищены.</span>
<div className="flex gap-6">
<a className="hover:text-ros-gray" href="#">Политика конфиденциальности</a>
<a className="hover:text-ros-gray" href="#">Публичная оферта</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
