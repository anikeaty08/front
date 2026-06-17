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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-medium tracking-tighter text-lg uppercase text-neutral-900" href="#">RITA</a>
<nav className="hidden md:flex gap-8">
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200" href="#about">Обо мне</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200" href="#pricing">Стоимость</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors" href="#pricing">
                Забронировать
            </a>
</div>
</header>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600">Бронирование на 2025 год открыто</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-neutral-900 mb-6 leading-tight">
                Стильная, современная,<br className="hidden md:block"/> кинематографичная съемка.
            </h1>
<p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Свадебный фотограф в Санкт-Петербурге. Создаю снимки без нарочитой постановки, где люди остаются красивыми, настоящими и живыми.
            </p>
</div>

<div className="max-w-6xl mx-auto mt-12 md:mt-16">
<div className="flex flex-col gap-2 md:gap-3 lg:gap-4">

<div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-3 lg:gap-4">

<div className="md:flex-[2] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 1" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&amp;w=800&amp;h=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[4] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 2" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=1000&amp;h=667&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[2] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 3" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&amp;w=800&amp;h=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[4] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 4" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp;w=1000&amp;h=700&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[2] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 5" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1543854589-9e8c56fa7cb6?q=80&amp;w=800&amp;h=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[4] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 6" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=1000&amp;h=667&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-3 lg:gap-4">

<div className="md:flex-[4] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 7" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=1000&amp;h=667&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[2] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 8" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&amp;w=800&amp;h=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[4] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 9" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1606216494957-c50d4f3e690f?q=80&amp;w=1000&amp;h=700&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[2] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 10" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1610173827002-62c0f1f05a04?q=80&amp;w=800&amp;h=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[4] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 11" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&amp;w=1000&amp;h=667&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:flex-[2] h-48 sm:h-64 md:h-40 lg:h-56 xl:h-64 rounded-xl md:rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200 shadow-sm relative group">
<img alt="Свадебная фотография 12" className="w-full h-full object-cover filter grayscale opacity-90 transition duration-700 group-hover:grayscale-0 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&amp;w=800&amp;h=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-200 px-6" id="about">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-12">Обо мне</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
<div className="space-y-6 text-base text-neutral-600 leading-relaxed">
<p>Привет! Меня зовут Рита и я свадебный фотограф из Петербурга. 2025 год для меня как фотографа стал 4-ым свадебным сезоном.</p>
<p>Сегодня фотография занимает 70% моей жизни. Я чувствую себя на своем месте. Меня выбирают невероятные пары, которые хотят стильную, современную, кинематографичную съемку.</p>
</div>
<div className="space-y-6 text-base text-neutral-600 leading-relaxed">
<p>Мне близки снимки без нарочитой постановки. Будто мы не сильно старались — без натяжки, но с характером!</p>
<p>При этом, я уделяю особое внимание режиссуре кадра, композиции и, конечно, свету. Моя миссия простая и честная: чтобы люди на фотографиях были красивыми. Настоящими. Живыми.</p>
<div className="pt-4 flex items-center gap-3 text-neutral-900 font-medium">
                        Всех обняла <span className="text-xl">🫰🏼</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 px-6" id="pricing">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Стоимость</h2>
<p className="text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-16">
                Для вашего удобства я подготовила оптимальные пакетные предложения свадебной фотосъемки. Любой пакет можно расширить по времени или обсудить меньшее количество часов. Я живу и фотографирую в Санкт-Петербурге. Выезд в любые другие города обсуждается отдельно.
            </p>
</div>
</section>

<section className="pb-24 px-6 flex-grow">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

<div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col hover:border-neutral-300 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5">
<iconify-icon className="text-7xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-800">10 часов</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-1">Запомнить всё</h3>
<p className="text-sm text-neutral-500">Полная история твоего свадебного дня</p>
</div>
<div className="mb-8 relative z-10">
<span className="text-4xl font-medium tracking-tighter text-neutral-900">120,000₽</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Онлайн консультация по съемкам и организации</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>От 450 фотографий в авторской цветокоррекции + ретушь крупных планов</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Анонс из 50-70 фото в течение 5-и дней</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Готовность фото — 3 месяца</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Передача через красивый сайт-галерею</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-500 mt-2">
<iconify-icon className="text-neutral-300 text-lg flex-shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Стоимость доп. часа — 15.000₽</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col hover:border-neutral-300 transition-colors">
<div className="mb-6">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-800">8 часов</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-1">Красивая история</h3>
<p className="text-sm text-neutral-500">Ваша история до десерта</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-neutral-900">100,000₽</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Онлайн консультация по съемке и организации</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>От 350 фотографий в авторской цветокоррекции + ретушь крупных планов</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Анонс из 50 фото в течение 5-и дней</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Готовность фото — 3 месяца</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Передача через красивый сайт-галерею</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-500 mt-2">
<iconify-icon className="text-neutral-300 text-lg flex-shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs">Стоимость доп. часа — 15.000₽</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col hover:border-neutral-300 transition-colors">
<div className="mb-6">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-800">3 часа</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-1">Камерная свадьба</h3>
<p className="text-sm text-neutral-500">День только вдвоём: ЗАГС + прогулка</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-neutral-900">45,000₽</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Онлайн консультация и проработка концепции</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>От 150 фотографий (цветокоррекция + ретушь)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Дополнительный профессиональный свет</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Анонс из 30 фото в течение 5-и дней</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Готовность — 3 месяца, передача через галерею</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col hover:border-neutral-300 transition-colors">
<div className="mb-6">
<div className="flex items-center gap-3 mb-4">
<span className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-800">1 час</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-1">Love-Story</h3>
<p className="text-sm text-neutral-500">Фото-история про Вас и Вашу любовь</p>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-neutral-900">17,000₽</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Проработка концепции съёмки</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Помощь с подбором локации, образов, реквизита</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>От 50 фотографий (цветокоррекция + ретушь)</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Готовые фотографии через 30 дней</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<iconify-icon className="text-neutral-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Передача через красивый сайт-галерею</span>
</li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-neutral-200 border-dashed shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-neutral-300 transition-colors">
<div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:camera-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Съемка на плёнку</h3>
</div>
<p className="text-sm text-neutral-500 max-w-lg leading-relaxed">
                        Съемка на плёнку 35 мм: 3 катушки, проявка, оцифровка. Фотографии передаются через сайт-галерею. Можно добавить к любому из пакетов.
                    </p>
</div>
<div className="flex flex-col md:items-end flex-shrink-0">
<span className="text-3xl font-medium tracking-tighter text-neutral-900">27,000₽</span>
<span className="text-xs text-neutral-400 mt-1">Срок отдачи до 30 дней</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-medium tracking-tighter text-lg uppercase text-neutral-900">RITA</div>
<div className="text-xs text-neutral-400 text-center md:text-left">
                © 2025 Свадебный фотограф. Санкт-Петербург.
            </div>
<div className="flex items-center gap-5">
<a aria-label="Instagram" className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Telegram" className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
