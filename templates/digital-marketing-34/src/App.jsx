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



        function route(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.add('active');
                window.scrollTo(0, 0);
            }

            // Update active state in nav
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.getAttribute('data-target') === pageId) {
                    btn.classList.add('text-zinc-900');
                    btn.classList.remove('text-zinc-500');
                } else {
                    btn.classList.remove('text-zinc-900');
                    btn.classList.add('text-zinc-500');
                }
            });
        }

        // Init default state
        document.addEventListener('DOMContentLoaded', () => {
            route('home');
        });
    
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-zinc-100/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="route('home')">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tighter text-sm group-hover:scale-105 transition-transform">
                    M
                </div>
<span className="text-lg font-bold tracking-tighter text-zinc-900">MPRO.</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<button className="nav-link hover:text-zinc-900 transition-colors" data-target="home" onclick="route('home')">Главная</button>
<button className="nav-link hover:text-zinc-900 transition-colors" data-target="services" onclick="route('services')">Услуги</button>
<button className="nav-link hover:text-zinc-900 transition-colors" data-target="portfolio" onclick="route('portfolio')">Кейсы</button>
<button className="nav-link hover:text-zinc-900 transition-colors" data-target="about" onclick="route('about')">О нас</button>
</div>

<button className="text-xs font-medium bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200" onclick="route('contact')">
                Обсудить проект
            </button>
</div>
</nav>

<div className="pt-16 min-h-screen">

<main className="page-content active" id="home">

<section className="relative pt-20 pb-20 md:pt-32 overflow-hidden bg-grid">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/80 backdrop-blur mb-8 shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">Performance Marketing Agency</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[0.95]">
                        Growth partner <br/>
<span className="text-zinc-300">for ambitious brands.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                        Агентство комплексного маркетинга <span className="text-zinc-900 font-medium">MPRO</span>. Мы объединяем данные, креатив и технологии для масштабирования вашего бизнеса.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group w-full md:w-auto" onclick="route('portfolio')">
                            Смотреть кейсы
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-zinc-200 text-zinc-600 text-sm font-medium hover:border-zinc-300 hover:text-zinc-900 transition-all bg-white w-full md:w-auto" onclick="route('services')">
                            Наши услуги
                        </button>
</div>

<div className="mt-20 relative rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 bg-white">
<img alt="Analytics Dashboard" className="w-full h-[400px] object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div className="text-left">
<p className="text-sm font-medium text-zinc-900">ROI Analytics Dashboard</p>
<p className="text-xs text-zinc-500">Real-time data tracking</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-zinc-100 bg-zinc-50/50">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Компании, которые нам доверяют</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-bold text-xl tracking-tighter text-zinc-800">ACME<span className="text-blue-600">CORP</span></div>
<div className="font-bold text-xl tracking-tighter text-zinc-800">stripe</div>
<div className="font-bold text-xl tracking-tighter text-zinc-800 flex items-center gap-1"><span className="w-4 h-4 bg-zinc-800 rounded-full"></span>intercom</div>
<div className="font-bold text-xl tracking-tighter text-zinc-800">Linear</div>
<div className="font-bold text-xl tracking-tighter text-zinc-800">notion</div>
</div>
</div>
</section>
</main>

<main className="page-content" id="services">
<section className="py-20 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<span className="text-xs font-medium text-blue-600 uppercase tracking-wider border border-blue-100 bg-blue-50 px-3 py-1 rounded-full">Экспертиза</span>
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mt-6 mb-4">Наши возможности</h2>
<p className="text-zinc-500 text-lg max-w-2xl">Мы закрываем полный цикл digital-маркетинга: от разработки стратегии до сквозной аналитики и оптимизации продаж.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 bg-white border border-zinc-100 rounded-xl flex items-center justify-center mb-8 text-zinc-900 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Таргетированная реклама</h3>
<ul className="space-y-2 mb-6">
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Facebook &amp; Instagram Ads</li>
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Telegram Ads</li>
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>VK Реклама</li>
</ul>
<a className="text-sm font-medium text-zinc-900 hover:text-blue-600 inline-flex items-center gap-1 transition-colors" href="#">Подробнее <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 bg-white border border-zinc-100 rounded-xl flex items-center justify-center mb-8 text-zinc-900 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magnifer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3">SEO &amp; Content</h3>
<ul className="space-y-2 mb-6">
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Технический аудит</li>
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Контент-маркетинг</li>
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Link Building</li>
</ul>
<a className="text-sm font-medium text-zinc-900 hover:text-blue-600 inline-flex items-center gap-1 transition-colors" href="#">Подробнее <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors group">
<div className="w-12 h-12 bg-white border border-zinc-100 rounded-xl flex items-center justify-center mb-8 text-zinc-900 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Аналитика и Данные</h3>
<ul className="space-y-2 mb-6">
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Настройка GA4 / Метрики</li>
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Сквозная аналитика</li>
<li className="text-sm text-zinc-500 flex items-center gap-2"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>Дашборды (PowerBI)</li>
</ul>
<a className="text-sm font-medium text-zinc-900 hover:text-blue-600 inline-flex items-center gap-1 transition-colors" href="#">Подробнее <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="mt-20 rounded-3xl bg-zinc-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl"></div>
<div className="flex-1 relative z-10">
<h3 className="text-3xl font-semibold tracking-tight mb-4">Индивидуальная стратегия</h3>
<p className="text-zinc-400 leading-relaxed mb-8">
                                 Мы не используем шаблонные решения. Для каждого клиента MPRO разрабатывает уникальный media-mix, исходя из unit-экономики и целей бизнеса.
                             </p>
<button className="px-6 py-3 bg-white text-zinc-900 rounded-full text-sm font-medium hover:bg-zinc-100 transition-colors" onclick="route('contact')">
                                 Заказать стратегию
                             </button>
</div>
<div className="flex-1 relative z-10">
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50">
<div className="text-3xl font-bold mb-1">x3</div>
<div className="text-xs text-zinc-500">Рост заявок</div>
</div>
<div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50">
<div className="text-3xl font-bold mb-1">-40%</div>
<div className="text-xs text-zinc-500">Стоимость лида</div>
</div>
<div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-700/50 col-span-2">
<div className="text-3xl font-bold mb-1">24/7</div>
<div className="text-xs text-zinc-500">Мониторинг кампаний</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content" id="portfolio">
<section className="py-20 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Избранные проекты</h2>
<p className="text-zinc-500">Результаты внедрения performance-маркетинга для наших клиентов.</p>
</div>
<div className="space-y-12">

<div className="grid md:grid-cols-2 gap-8 items-center group">
<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 font-bold text-xs">F</span>
<span className="text-sm font-medium text-zinc-900">Fashion Brand</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors">Масштабирование E-commerce</h3>
<p className="text-zinc-500 leading-relaxed mb-6">
                                    Полный перезапуск рекламных кампаний. Внедрение динамического ремаркетинга и email-воронок. Увеличили возврат инвестиций (ROAS) с 250% до 680% за 4 месяца.
                                </p>
<div className="flex gap-8 border-t border-zinc-100 pt-6">
<div>
<div className="text-2xl font-bold text-zinc-900">680%</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">ROAS</div>
</div>
<div>
<div className="text-2xl font-bold text-zinc-900">+12k</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Новых клиентов</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 overflow-hidden rounded-2xl border border-zinc-200">
<img alt="Fashion Store" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 items-center group">
<div className="overflow-hidden rounded-2xl border border-zinc-200">
<img alt="Fintech App" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">B</span>
<span className="text-sm font-medium text-zinc-900">B2B SaaS</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors">Лидогенерация для FinTech</h3>
<p className="text-zinc-500 leading-relaxed mb-6">
                                    Разработка стратегии Account Based Marketing (ABM) для привлечения крупных корпоративных клиентов. Использование LinkedIn и экспертного контента.
                                </p>
<div className="flex gap-8 border-t border-zinc-100 pt-6">
<div>
<div className="text-2xl font-bold text-zinc-900">$45</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Cost per Lead</div>
</div>
<div>
<div className="text-2xl font-bold text-zinc-900">3.5M</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Pipeline generated</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 items-center group">
<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">E</span>
<span className="text-sm font-medium text-zinc-900">EdTech Platform</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors">Запуск онлайн-школы</h3>
<p className="text-zinc-500 leading-relaxed mb-6">
                                    С нуля до первых 1000 студентов за 2 месяца. Комплексная работа с блогерами, контекстной рекламой и вебинарными воронками.
                                </p>
<div className="flex gap-8 border-t border-zinc-100 pt-6">
<div>
<div className="text-2xl font-bold text-zinc-900">1200+</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Студентов</div>
</div>
<div>
<div className="text-2xl font-bold text-zinc-900">x4</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Окупаемость</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 overflow-hidden rounded-2xl border border-zinc-200">
<img alt="Education" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-content" id="about">
<section className="py-20 px-6 bg-zinc-50">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Команда MPRO</h2>
<p className="text-zinc-500">Мы — группа фанатиков данных и креатива.</p>
</div>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center">
<div className="w-24 h-24 mx-auto bg-zinc-200 rounded-full mb-4 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-zinc-900">Александр</h4>
<p className="text-xs text-blue-600 mb-2">Founder &amp; Head of Strategy</p>
<p className="text-sm text-zinc-500">7 лет опыта в Digital. Работал с бюджетами $1M+.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center">
<div className="w-24 h-24 mx-auto bg-zinc-200 rounded-full mb-4 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-zinc-900">Елена</h4>
<p className="text-xs text-blue-600 mb-2">Senior Media Buyer</p>
<p className="text-sm text-zinc-500">Эксперт по Facebook Ads и Google Analytics.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-100 text-center">
<div className="w-24 h-24 mx-auto bg-zinc-200 rounded-full mb-4 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-zinc-900">Максим</h4>
<p className="text-xs text-blue-600 mb-2">Creative Lead</p>
<p className="text-sm text-zinc-500">Создает креативы, которые пробивают баннерную слепоту.</p>
</div>
</div>
</section>
</main>

<main className="page-content" id="contact">
<section className="min-h-[80vh] flex items-center py-12 px-6 bg-white">
<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16">
<div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-2 block">Контакты</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6">Давайте обсудим вашу задачу</h1>
<p className="text-zinc-500 text-lg mb-12">Заполните форму, и мы проведем бесплатный аудит вашего текущего маркетинга.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Офис</p>
<p className="text-sm text-zinc-500">Москва, Сити, Башня Федерация</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Email</p>
<p className="text-sm text-zinc-500">hello@mpro-agency.ru</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Телефон</p>
<p className="text-sm text-zinc-500">+7 (999) 000-00-00</p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Заявка отправлена!');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Имя</label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Телефон</label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 ml-1">О проекте</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 transition-all resize-none" rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 mt-2">
                                Отправить заявку
                            </button>
<p className="text-[10px] text-zinc-400 text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>
</div>
</section>
</main>
</div>

<footer className="py-12 border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white font-bold text-[10px]">M</div>
<span className="text-sm font-bold text-zinc-900 tracking-tight">MPRO.</span>
</div>
<div className="text-xs text-zinc-400">
                © 2024 MPRO Agency. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:brand-telegram-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
