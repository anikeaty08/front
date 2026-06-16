import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter uppercase" href="#">Rita</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-300" href="#portfolio">Портфолио</a>
<a className="hover:text-white transition-colors duration-300" href="#approach">Подход</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Контакты</a>
</div>
<button className="md:hidden text-white flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh]">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Открыта для записи на сезон
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-tight mb-8">
                Сохраняю <span className="text-neutral-600">моменты</span>,<br/> 
                создаю <span className="text-neutral-600">эстетику</span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl font-normal leading-relaxed">
                Профессиональный фотограф с фокусом на минимализм, естественный свет и искренние эмоции. Снимаю портреты, свадьбы и истории брендов.
            </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-all duration-300" href="#portfolio">
                    Смотреть работы
                </a>
<a className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-neutral-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-900 transition-all duration-300" href="#contact">
                    Обсудить съемку
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="portfolio">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Избранное</h2>
<p className="text-sm font-normal max-w-md">Селекция лучших кадров, отражающих мой визуальный стиль и подход к работе со светом.</p>
</div>
<div className="flex gap-6 text-sm font-medium border-b border-neutral-800 pb-2">
<button className="text-white">Все проекты</button>
<button className="hover:text-white transition-colors">Портрет</button>
<button className="hover:text-white transition-colors">Свадьба</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[3/4] lg:row-span-2">
<img alt="Portrait Work" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
<span className="text-neutral-300 text-xs uppercase tracking-widest font-medium mb-2">Студия</span>
<h3 className="text-white text-xl font-medium tracking-tight">Минималистичный портрет</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-square">
<img alt="Wedding Work" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-neutral-300 text-xs uppercase tracking-widest font-medium mb-2">Свадьба</span>
<h3 className="text-white text-lg font-medium tracking-tight">История двоих</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3] lg:aspect-auto lg:h-full">
<img alt="Editorial Work" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
<span className="text-neutral-300 text-xs uppercase tracking-widest font-medium mb-2">Фешн</span>
<h3 className="text-white text-lg font-medium tracking-tight">Геометрия города</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 aspect-square lg:col-span-2">
<img alt="Art Work" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
<span className="text-neutral-300 text-xs uppercase tracking-widest font-medium mb-2">Репортаж</span>
<h3 className="text-white text-xl font-medium tracking-tight">За кулисами</h3>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors">
                Показать еще
                <iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900" id="approach">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Как я работаю</h2>
<p className="text-base font-normal leading-relaxed">Моя цель — не просто сделать красивую картинку, а передать атмосферу, характер и уникальность момента. Я ценю комфорт на съемке и естественность в кадре.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:camera-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Подготовка</h3>
<p className="text-sm font-normal leading-relaxed text-neutral-500">Помогаю с выбором локации, подбором образов и референсов. Детальное обсуждение идеи до нажатия на кнопку затвора.</p>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:sun-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Свет и Цвет</h3>
<p className="text-sm font-normal leading-relaxed text-neutral-500">Использую преимущественно естественное освещение. Авторская цветокоррекция с чистыми, глубокими оттенками.</p>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/50 hover:bg-neutral-900/60 transition-colors duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:gallery-edit-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Деликатная ретушь</h3>
<p className="text-sm font-normal leading-relaxed text-neutral-500">Сохраняю текстуру кожи и ваши индивидуальные особенности. Убираю только временные недостатки, оставляя вас собой.</p>
</div>
</div>
</section>

<section className="py-32 px-6" id="contact">
<div className="max-w-4xl mx-auto bg-gradient-to-b from-neutral-900/50 to-transparent border border-neutral-800/80 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6 relative z-10">Готовы создать что-то красивое?</h2>
<p className="text-base text-neutral-400 mb-12 max-w-md mx-auto font-normal relative z-10">
                Свяжитесь со мной удобным способом, чтобы узнать свободные даты и обсудить детали вашей съемки.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
<a className="inline-flex items-center gap-3 text-white bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300" href="mailto:hello@photorita.ru">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                    hello@photorita.ru
                </a>
<a className="inline-flex items-center gap-3 text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300" href="#">
<iconify-icon className="text-lg" icon="solar:paperclip-linear"></iconify-icon>
                    Telegram
                </a>
</div>
</div>
</section>

<footer className="py-10 px-6 max-w-7xl mx-auto border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-white text-base font-medium tracking-tighter uppercase" href="#">Rita</a>
<div className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#">Insta</a>
<a className="hover:text-white transition-colors duration-300" href="#">Tg</a>
<a className="hover:text-white transition-colors duration-300" href="#">Behance</a>
</div>
<p className="text-xs text-neutral-600 font-normal">
            © 2023. Все права защищены.
        </p>
</footer>

    </>
  );
}
