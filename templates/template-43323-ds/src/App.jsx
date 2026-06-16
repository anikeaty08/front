import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Intersection Observer for reveal animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#F6F4F1]/90 backdrop-blur-md border-b border-black/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-[#7E2E2F] rounded-lg flex items-center justify-center text-white font-bold text-xl">Р</div>
<div className="leading-tight">
<span className="block font-bold tracking-tight text-lg">РосГарант</span>
<span className="block text-[10px] uppercase tracking-widest text-[#6B6B6B]">Недвижимость</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2A2A2A]">
<a className="hover:text-[#7E2E2F] transition-colors" href="#new">Новостройки</a>
<a className="hover:text-[#7E2E2F] transition-colors" href="#catalog">Каталог</a>
<a className="hover:text-[#7E2E2F] transition-colors" href="#scenarios">Услуги</a>
<a className="hover:text-[#7E2E2F] transition-colors" href="#reviews">Отзывы</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:block font-semibold text-[#2A2A2A] hover:text-[#7E2E2F] transition-colors" href="tel:+79990000000">+7 (999) 000-00-00</a>
<a className="px-6 py-3 rounded-[14px] bg-[#7E2E2F] text-white text-sm font-semibold hover:bg-[#9A3B3C] transition-all hover:shadow-lg hover:shadow-[#7E2E2F]/20 active:scale-95" href="#contact">
                    Связаться
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
<div className="lg:w-1/2 reveal">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#7E2E2F]/10 mb-8 shadow-sm">
<div className="w-2 h-2 rounded-full bg-[#7E2E2F] animate-pulse"></div>
<span className="text-xs font-semibold uppercase tracking-wider text-[#7E2E2F]">Новороссийск, с 2009 года</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#2A2A2A] mb-6">
                    РосГарант — команда экспертов по <span className="text-[#7E2E2F]">недвижимости.</span>
</h1>
<p className="text-lg md:text-xl text-[#6B6B6B] mb-10 max-w-lg leading-relaxed">
                    15 лет на рынке. 10 агентов. 2 юриста. Более 2000 успешных сделок. Мы гарантируем безопасность и комфорт.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 rounded-[18px] bg-[#7E2E2F] text-white font-semibold text-center hover:bg-[#9A3B3C] transition-all shadow-xl shadow-[#7E2E2F]/15 hover:-translate-y-1" href="#contact">
                        Получить консультацию
                    </a>
<a className="px-8 py-4 rounded-[18px] border border-[#7E2E2F] text-[#7E2E2F] font-semibold text-center hover:bg-[#F2E6E6] transition-all hover:-translate-y-1" href="#catalog">
                        Посмотреть объекты
                    </a>
</div>
</div>
<div className="lg:w-1/2 w-full relative reveal delay-200">
<div className="relative rounded-[24px] overflow-hidden shadow-2xl shadow-black/5 aspect-[4/3] group">

<img alt="Команда РосГарант" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-[18px] border border-white/20 shadow-lg flex items-center justify-between">
<div>
<span className="block text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">Рейтинг доверия</span>
<div className="flex text-[#7E2E2F] gap-1">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<div className="text-right">
<span className="block text-2xl font-bold text-[#2A2A2A]">5.0</span>
<span className="text-xs text-[#6B6B6B]">Яндекс Карты</span>
</div>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-[#7E2E2F]/10 rounded-[24px]"></div>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#7E2E2F]/10 reveal">
<div className="px-4 text-center md:text-left">
<span className="block text-5xl md:text-6xl font-bold text-[#7E2E2F] mb-2 tracking-tight">15</span>
<span className="text-sm md:text-base font-medium text-[#2A2A2A]">Лет безупречного<br/>опыта работы</span>
</div>
<div className="px-4 text-center md:text-left">
<span className="block text-5xl md:text-6xl font-bold text-[#2A2A2A] mb-2 tracking-tight">2k+</span>
<span className="text-sm md:text-base font-medium text-[#2A2A2A]">Успешных сделок<br/>в Новороссийске</span>
</div>
<div className="px-4 text-center md:text-left">
<span className="block text-5xl md:text-6xl font-bold text-[#2A2A2A] mb-2 tracking-tight">12</span>
<span className="text-sm md:text-base font-medium text-[#2A2A2A]">Профильных<br/>экспертов</span>
</div>
<div className="px-4 text-center md:text-left">
<div className="h-14 w-14 mb-4 mx-auto md:mx-0 bg-[#EEF3F7] rounded-full flex items-center justify-center text-[#7E2E2F]">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<span className="text-sm md:text-base font-medium text-[#2A2A2A]">Собственный офис<br/>в центре города</span>
</div>
</div>
</section>

<section className="py-24 bg-[#EEF3F7] rounded-[40px] mx-4 md:mx-8" id="new">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<span className="text-[#7E2E2F] font-semibold tracking-widest uppercase text-xs mb-3 block">Первичный рынок</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight">Подбираем надёжные новостройки<br/>без переплаты</h2>
</div>
<div className="text-right">
<p className="text-sm text-[#6B6B6B] max-w-xs mb-4">Вы не платите за наши услуги — комиссию оплачивает застройщик</p>
<a className="inline-flex items-center text-[#7E2E2F] font-semibold hover:gap-2 transition-all" href="#">
                        Весь каталог новостроек <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-2xl hover:shadow-[#7E2E2F]/5 transition-all duration-500 hover:-translate-y-2 reveal delay-100 cursor-pointer">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2A2A2A] text-xs font-bold px-3 py-1.5 rounded-lg">Сдача 2024</span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-[#2A2A2A]">ЖК «Лазурный Берег»</h3>
</div>
<p className="text-[#6B6B6B] text-sm mb-6">Южный район, 500м до моря</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div>
<span className="block text-xs text-[#6B6B6B]">Ипотека от</span>
<span className="font-bold text-[#7E2E2F]">4.5%</span>
</div>
<button className="w-10 h-10 rounded-full border border-[#7E2E2F]/20 flex items-center justify-center text-[#7E2E2F] group-hover:bg-[#7E2E2F] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-2xl hover:shadow-[#7E2E2F]/5 transition-all duration-500 hover:-translate-y-2 reveal delay-200 cursor-pointer">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2A2A2A] text-xs font-bold px-3 py-1.5 rounded-lg">Ключи на руках</span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-[#2A2A2A]">ЖК «Панорама»</h3>
</div>
<p className="text-[#6B6B6B] text-sm mb-6">Центральный район, вид на бухту</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div>
<span className="block text-xs text-[#6B6B6B]">Ипотека от</span>
<span className="font-bold text-[#7E2E2F]">6%</span>
</div>
<button className="w-10 h-10 rounded-full border border-[#7E2E2F]/20 flex items-center justify-center text-[#7E2E2F] group-hover:bg-[#7E2E2F] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-[18px] overflow-hidden hover:shadow-2xl hover:shadow-[#7E2E2F]/5 transition-all duration-500 hover:-translate-y-2 reveal delay-300 cursor-pointer">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2A2A2A] text-xs font-bold px-3 py-1.5 rounded-lg">Сдача 2025</span>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-bold text-[#2A2A2A]">ЖК «Босфор»</h3>
</div>
<p className="text-[#6B6B6B] text-sm mb-6">Приморский район, семейный</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div>
<span className="block text-xs text-[#6B6B6B]">Ипотека от</span>
<span className="font-bold text-[#7E2E2F]">5%</span>
</div>
<button className="w-10 h-10 rounded-full border border-[#7E2E2F]/20 flex items-center justify-center text-[#7E2E2F] group-hover:bg-[#7E2E2F] group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<button className="px-8 py-4 rounded-[18px] bg-[#7E2E2F] text-white font-semibold hover:bg-[#9A3B3C] transition-all shadow-xl shadow-[#7E2E2F]/15">
                    Подобрать квартиру
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="catalog">
<h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight mb-12 text-center reveal">Каталог недвижимости</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<a className="group relative h-80 rounded-[18px] overflow-hidden reveal delay-100" href="#">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef2cf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold text-white mb-1">Новостройки</h3>
<span className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 block">540 объектов</span>
</div>
<div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7E2E2F] transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative h-80 rounded-[18px] overflow-hidden reveal delay-200" href="#">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold text-white mb-1">Вторичное жильё</h3>
<span className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 block">1200 объектов</span>
</div>
<div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7E2E2F] transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>
<a className="group relative h-80 rounded-[18px] overflow-hidden reveal delay-300" href="#">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-2xl font-bold text-white mb-1">Коммерция</h3>
<span className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 block">85 объектов</span>
</div>
<div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#7E2E2F] transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="bg-white rounded-[24px] overflow-hidden shadow-xl shadow-gray-100 border border-gray-100 reveal">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="h-[400px] lg:h-auto relative">
<img alt="Офис РосГарант" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-bold uppercase tracking-wider text-[#2A2A2A]">Работаем сейчас</span>
</div>
</div>
<div className="p-10 lg:p-16 flex flex-col justify-center">
<span className="text-[#7E2E2F] font-semibold tracking-widest uppercase text-xs mb-4 block">Наше пространство</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight mb-6">Работаем очно<br/>и онлайн</h2>
<p className="text-[#6B6B6B] text-lg mb-8 leading-relaxed">
                        Мы создали пространство, где комфортно принимать важные решения. Приходите в наш офис в центре Новороссийска на кофе и консультацию.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#7E2E2F] mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<span className="block font-bold text-[#2A2A2A]">г. Новороссийск, ул. Советов, 42</span>
<span className="text-sm text-[#6B6B6B]">БЦ «Черноморский», офис 305</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#7E2E2F] mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<span className="block font-bold text-[#2A2A2A]">Пн - Пт: 09:00 - 19:00</span>
<span className="text-sm text-[#6B6B6B]">Сб: 10:00 - 16:00</span>
</div>
</div>
</div>
<a className="inline-block text-center px-8 py-3 rounded-[14px] border border-[#2A2A2A] text-[#2A2A2A] font-semibold hover:bg-[#2A2A2A] hover:text-white transition-all" href="#">
                        Построить маршрут
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#EEF3F7] relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight mb-12">Личное обращение основателя</h2>
<div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8">
<img alt="Основатель" className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-[#7E2E2F] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg cursor-pointer">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
<blockquote className="text-xl md:text-2xl font-medium text-[#2A2A2A] leading-relaxed mb-6">
                «Мы не просто продаем квадратные метры. Мы помогаем вам найти место, где начнется новый, счастливый этап вашей жизни. Честность — наш главный капитал.»
            </blockquote>
<div className="flex flex-col items-center">
<span className="font-bold text-[#2A2A2A] text-lg">Алексей Смирнов</span>
<span className="text-[#6B6B6B] text-sm">Основатель АН «РосГарант»</span>
</div>
</div>

<iconify-icon className="absolute top-10 left-10 text-white text-9xl opacity-50 rotate-12 pointer-events-none" icon="solar:quote-up-bold"></iconify-icon>
<iconify-icon className="absolute bottom-10 right-10 text-white text-9xl opacity-50 rotate-12 pointer-events-none" icon="solar:quote-down-bold"></iconify-icon>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="reviews">
<div className="flex justify-between items-end mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight">Отзывы клиентов</h2>
<div className="flex items-center gap-2">
<iconify-icon icon="logos:yandex-ru" width="24"></iconify-icon>
<span className="font-bold text-[#2A2A2A]">4.9</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-white p-8 rounded-[24px] border border-gray-100 hover:shadow-xl hover:shadow-[#7E2E2F]/5 transition-all duration-300 reveal delay-100">
<div className="flex text-[#7E2E2F] gap-1 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#6B6B6B] mb-6 leading-relaxed">«Спасибо команде за оперативность. Подобрали квартиру в новостройке за 3 дня, помогли с ипотекой. Честно, без навязывания.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#2A2A2A] font-bold">Д</div>
<div>
<span className="block font-bold text-[#2A2A2A] text-sm">Дмитрий К.</span>
<span className="block text-xs text-[#6B6B6B]">Купил квартиру в ЖК «Облака»</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[24px] border border-gray-100 hover:shadow-xl hover:shadow-[#7E2E2F]/5 transition-all duration-300 reveal delay-200">
<div className="flex text-[#7E2E2F] gap-1 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#6B6B6B] mb-6 leading-relaxed">«Продавали бабушкину квартиру. Юристы все проверили, сделку провели идеально. Очень спокойный и профессиональный подход.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#2A2A2A] font-bold">Е</div>
<div>
<span className="block font-bold text-[#2A2A2A] text-sm">Елена В.</span>
<span className="block text-xs text-[#6B6B6B]">Сделка по вторичке</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[24px] border border-gray-100 hover:shadow-xl hover:shadow-[#7E2E2F]/5 transition-all duration-300 reveal delay-300">
<div className="flex text-[#7E2E2F] gap-1 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-[#6B6B6B] mb-6 leading-relaxed">«Инвестировал в коммерцию. Ребята дали полную аналитику по окупаемости. Пока все цифры сходятся. Рекомендую.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#2A2A2A] font-bold">М</div>
<div>
<span className="block font-bold text-[#2A2A2A] text-sm">Максим С.</span>
<span className="block text-xs text-[#6B6B6B]">Инвестор</span>
</div>
</div>
</div>
</div>
<div className="text-center reveal">
<a className="inline-flex items-center gap-2 text-[#7E2E2F] font-semibold border-b border-[#7E2E2F]/20 hover:border-[#7E2E2F] pb-1 transition-all" href="#">
                Смотреть все отзывы на Яндекс Картах
            </a>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="scenarios">
<h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] tracking-tight mb-12 text-center reveal">Что вас интересует?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-white p-8 rounded-[24px] border border-gray-100 hover:border-[#7E2E2F]/10 group-hover-bg-tint transition-all duration-300 hover:-translate-y-1 reveal delay-100" href="#">
<div className="w-12 h-12 bg-[#F6F4F1] rounded-full flex items-center justify-center text-[#2A2A2A] mb-6 group-hover:bg-white group-hover:text-[#7E2E2F] transition-colors">
<iconify-icon icon="solar:key-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Купить новостройку</h3>
<p className="text-sm text-[#6B6B6B]">Без комиссии, напрямую от застройщиков</p>
</a>

<a className="group bg-white p-8 rounded-[24px] border border-gray-100 hover:border-[#7E2E2F]/10 group-hover-bg-tint transition-all duration-300 hover:-translate-y-1 reveal delay-200" href="#">
<div className="w-12 h-12 bg-[#F6F4F1] rounded-full flex items-center justify-center text-[#2A2A2A] mb-6 group-hover:bg-white group-hover:text-[#7E2E2F] transition-colors">
<iconify-icon icon="solar:home-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Найти вторичку</h3>
<p className="text-sm text-[#6B6B6B]">Проверенные квартиры с чистой историей</p>
</a>

<a className="group bg-white p-8 rounded-[24px] border border-gray-100 hover:border-[#7E2E2F]/10 group-hover-bg-tint transition-all duration-300 hover:-translate-y-1 reveal delay-300" href="#">
<div className="w-12 h-12 bg-[#F6F4F1] rounded-full flex items-center justify-center text-[#2A2A2A] mb-6 group-hover:bg-white group-hover:text-[#7E2E2F] transition-colors">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Продать квартиру</h3>
<p className="text-sm text-[#6B6B6B]">Бесплатная оценка и быстрая продажа</p>
</a>

<a className="group bg-white p-8 rounded-[24px] border border-gray-100 hover:border-[#7E2E2F]/10 group-hover-bg-tint transition-all duration-300 hover:-translate-y-1 reveal delay-400" href="#">
<div className="w-12 h-12 bg-[#F6F4F1] rounded-full flex items-center justify-center text-[#2A2A2A] mb-6 group-hover:bg-white group-hover:text-[#7E2E2F] transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#2A2A2A] mb-2">Инвестировать</h3>
<p className="text-sm text-[#6B6B6B]">Пассивный доход от недвижимости</p>
</a>
</div>
</section>

<footer className="bg-[#F6F4F1] pt-24 pb-12 px-6 border-t border-[#7E2E2F]/10" id="contact">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl shadow-gray-200/50 mb-20 reveal">
<div className="md:w-1/2">
<h2 className="text-3xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight mb-6">Обсудим вашу задачу <span className="text-[#7E2E2F]">лично</span></h2>
<p className="text-lg text-[#6B6B6B] mb-8">Оставьте заявку, и наш ведущий эксперт свяжется с вами в течение 15 минут.</p>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 text-xl font-bold text-[#2A2A2A] hover:text-[#7E2E2F] transition-colors" href="tel:+79990000000">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            +7 (999) 000-00-00
                        </a>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity" href="#">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#0088cc] text-white flex items-center justify-center hover:opacity-90 transition-opacity" href="#">
<iconify-icon icon="logos:telegram" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="w-full md:w-1/2 max-w-md">
<form className="space-y-4">
<input className="w-full px-6 py-4 bg-[#F6F4F1] rounded-[18px] border-none focus:ring-2 focus:ring-[#7E2E2F]/20 outline-none text-[#2A2A2A] placeholder:text-[#6B6B6B]/50" placeholder="Ваше имя" type="text"/>
<input className="w-full px-6 py-4 bg-[#F6F4F1] rounded-[18px] border-none focus:ring-2 focus:ring-[#7E2E2F]/20 outline-none text-[#2A2A2A] placeholder:text-[#6B6B6B]/50" placeholder="+7 (___) ___-__-__" type="tel"/>
<button className="w-full py-4 rounded-[18px] bg-[#7E2E2F] text-white font-bold text-lg hover:bg-[#9A3B3C] transition-all shadow-lg shadow-[#7E2E2F]/20 hover:-translate-y-1" type="button">
                            Оставить заявку
                        </button>
<p className="text-xs text-[#6B6B6B] text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#6B6B6B] border-t border-gray-200 pt-8">
<div className="mb-4 md:mb-0">
                    © 2024 АН «РосГарант». Все права защищены.
                </div>
<div className="flex gap-6">
<a className="hover:text-[#7E2E2F]" href="#">Политика конфиденциальности</a>
<a className="hover:text-[#7E2E2F]" href="#">Договор оферты</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
