import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    for(let i=0; i<3; i++) {
                        document.write(`
                        <div class="flex flex-col gap-4 group cursor-pointer" onclick="navigate('article')">
                            <div class="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
                                <div class="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full z-10">Брокер объясняет</div>
                                <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=600&rnd=${i}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="">
                            </div>
                            <div>
                                <div class="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                    <span class="font-medium text-slate-900">Совкомбанк Инвестиции</span>
                                    <span>•</span>
                                    <span>2 дня назад</span>
                                </div>
                                <h3 class="text-xl font-medium leading-snug group-hover:text-blue-600 transition-colors">Как начать инвестировать с нуля: подробное руководство для новичков</h3>
                            </div>
                        </div>
                        `);
                    }
                


        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Router Logic
        const views = ['hub', 'feed', 'article'];
        const progressBarContainer = document.getElementById('reading-progress-container');
        
        function navigate(viewId) {
            // Hide all views
            views.forEach(v => {
                document.getElementById(`view-${v}`).classList.add('hidden');
            });
            // Show target view
            document.getElementById(`view-${viewId}`).classList.remove('hidden');
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Toggle Progress Bar visibility based on view
            if(viewId === 'article') {
                progressBarContainer.classList.remove('hidden');
                updateProgress(); // Initial check
            } else {
                progressBarContainer.classList.add('hidden');
            }
        }

        // Advanced Filters Toggle
        function toggleFilters() {
            const content = document.getElementById('filter-content');
            const icon = document.getElementById('filter-icon');
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        // Reading Progress Logic
        function updateProgress() {
            if(!document.getElementById('view-article').classList.contains('hidden')) {
                const article = document.querySelector('article');
                if(!article) return;
                const rect = article.getBoundingClientRect();
                const scrollHeight = article.scrollHeight - window.innerHeight;
                // Calculate percentage based on article position relative to viewport
                const scrolled = Math.max(0, -rect.top);
                const progress = Math.min(100, Math.max(0, (scrolled / scrollHeight) * 100));
                document.getElementById('reading-progress').style.width = `${progress}%`;
            }
        }
        window.addEventListener('scroll', updateProgress);

        // Modal Logic
        const modal = document.getElementById('auth-modal');
        const modalContent = document.getElementById('auth-modal-content');
        
        function toggleAuthModal() {
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                // Small delay for transition
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modalContent.classList.remove('scale-95');
                }, 10);
            } else {
                modal.classList.add('opacity-0');
                modalContent.classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50 hidden" id="reading-progress-container">
<div className="h-full bg-blue-600 w-0" id="reading-progress"></div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-8">
<button className="flex items-center gap-2 group" onclick="navigate('hub')">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">С</div>
<div className="flex flex-col">
<span className="text-sm font-semibold leading-tight group-hover:text-blue-600 transition-colors">Совкомбанк</span>
<span className="text-xs text-slate-500 leading-tight">Инвестиции</span>
</div>
</button>
<nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Что купить</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Спецпредложения</a>
<button className="text-blue-600 transition-colors" onclick="navigate('hub')">Медиа</button>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Обучение</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#">Новости</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1" href="#">
                            Сайты банка
                            <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
</nav>
</div>

<div className="hidden lg:flex items-center gap-6 text-sm">
<a className="font-medium hover:text-blue-600 transition-colors" href="tel:88003026696">8 800 302 66 96</a>
<div className="flex items-center gap-3">
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Открыть счет</button>
<button className="border border-slate-200 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                            Войти
                            <i className="w-4 h-4" data-lucide="log-in" strokeWidth="1.5"></i>
</button>
</div>
</div>
<button className="lg:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>
<main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="space-y-12" id="view-hub">

<nav className="flex text-sm text-slate-500 gap-2 items-center">
<a className="hover:text-slate-900 transition-colors" href="#">Главная</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-slate-900">Медиа</span>
</nav>

<section className="space-y-6">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Библиотека решений</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-100 hover:border-blue-300 transition-colors" href="#">
<div className="absolute top-4 right-4 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-8 group-hover:text-blue-600 transition-colors">Сформировать первый портфель</h3>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 border border-emerald-100 hover:border-emerald-300 transition-colors" href="#">
<div className="absolute top-4 right-4 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-emerald-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-8 group-hover:text-emerald-600 transition-colors">Открыть ИИС</h3>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 border border-amber-100 hover:border-amber-300 transition-colors" href="#">
<div className="absolute top-4 right-4 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-amber-600" data-lucide="receipt" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-8 group-hover:text-amber-600 transition-colors">Получить налоговый вычет</h3>
</a>
<a className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 border border-purple-100 hover:border-purple-300 transition-colors" href="#">
<div className="absolute top-4 right-4 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-purple-600" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight mt-8 group-hover:text-purple-600 transition-colors">Стать квал. инвестором</h3>
</a>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-3 space-y-16">

<section className="space-y-6">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Новости</h2>
<button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1" onclick="navigate('feed')">
                                Все новости <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x">

<div className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full z-10">Новость</div>
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-medium text-slate-900">Интерфакс</span>
<span>•</span>
<span>4 часа назад</span>
</div>
<h3 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Microsoft предложит досрочный выход на пенсию сотрудникам в США</h3>
</div>

<div className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-medium text-slate-900">РБК Инвестиции</span>
<span>•</span>
<span>Вчера</span>
</div>
<h3 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Индекс Мосбиржи обновил максимум с начала года на фоне ослабления рубля</h3>
</div>

<div className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-medium text-slate-900">Аналитика</span>
<span>•</span>
<span>2 дня назад</span>
</div>
<h3 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Что будет с ключевой ставкой ЦБ на ближайшем заседании</h3>
</div>
</div>
</section>

<div className="bg-slate-900 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
<div className="relative z-10 space-y-2">
<h3 className="text-2xl font-semibold tracking-tight text-white">Научитесь инвестировать с Совкомбанк Инвестиции</h3>
<p className="text-slate-300">Пройдите бесплатный обучающий курс и сделайте первые шаги</p>
</div>
<button className="relative z-10 shrink-0 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors">Начать обучение</button>
</div>

<section className="space-y-6">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Облигации недели</h2>
<button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1" onclick="navigate('feed')">
                                Все публикации <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x">
<div className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full z-10">Взгляд</div>
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-medium text-slate-900">Совкомбанк Инвестиции</span>
<span>•</span>
<span>10 мая</span>
</div>
<h3 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Топ-5 надежных корпоративных облигаций с доходностью выше вклада</h3>
</div>
<div className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-medium text-slate-900">Аналитика</span>
<span>•</span>
<span>8 мая</span>
</div>
<h3 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Разбор нового выпуска ОФЗ: стоит ли добавлять в портфель?</h3>
</div>
</div>
</section>

<section className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight">Готовые решения и сервисы</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<a className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:bg-slate-100 transition-colors flex flex-col justify-between aspect-square" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-700" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight group-hover:text-blue-600 transition-colors">Подбор облигаций</h3>
</div>
</a>
<a className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:bg-slate-100 transition-colors flex flex-col justify-between aspect-square" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-700" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight group-hover:text-blue-600 transition-colors">Подбор акций</h3>
</div>
</a>
<a className="group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:bg-slate-100 transition-colors flex flex-col justify-between aspect-square" href="#">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-700" data-lucide="pie-chart" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight group-hover:text-blue-600 transition-colors">ПИФы</h3>
</div>
</a>
</div>
</section>

<section className="space-y-6">
<div className="flex items-end justify-between">
<h2 className="text-2xl font-semibold tracking-tight">Аналитика</h2>
<button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1" onclick="navigate('feed')">
                                Все публикации <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x">
<div className="snap-start shrink-0 w-[300px] sm:w-[340px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="font-medium text-slate-900">Аналитический центр</span>
<span>•</span>
<span>Вчера</span>
</div>
<h3 className="text-lg font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Обзор нефтегазового сектора: кто выплатит щедрые дивиденды</h3>
</div>
</div>
</section>

<div className="bg-blue-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
<div className="relative z-10 space-y-4 max-w-md">
<h3 className="text-2xl font-semibold tracking-tight">Установите мобильное приложение</h3>
<p className="text-blue-100">Управляйте инвестициями легко и удобно, где бы вы ни находились</p>
<div className="flex gap-4 pt-2">
<button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="apple" strokeWidth="1.5"></i> App Store
                                </button>
<button className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="smartphone" strokeWidth="1.5"></i> Google Play
                                </button>
</div>
</div>
<div className="relative z-10 bg-white p-3 rounded-xl shrink-0">

<div className="w-24 h-24 bg-slate-900 grid grid-cols-5 grid-rows-5 gap-1 p-1">
<div className="bg-white col-span-2 row-span-2"></div><div className="bg-white"></div><div className="bg-white col-span-2 row-span-2"></div>
<div className="bg-white"></div><div className="bg-white"></div><div className="bg-white"></div>
<div className="bg-white col-span-2"></div><div className="bg-white"></div><div className="bg-white col-span-2"></div>
<div className="bg-white"></div><div className="bg-white"></div><div className="bg-white"></div>
<div className="bg-white col-span-2 row-span-2"></div><div className="bg-white"></div><div className="bg-white col-span-2 row-span-2"></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 space-y-6">
<h3 className="text-xl font-semibold tracking-tight border-b border-slate-200 pb-4">Последние публикации</h3>
<div className="space-y-6">

<div className="group cursor-pointer flex gap-4" onclick="navigate('article')">
<div className="w-20 h-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="flex flex-col gap-1 justify-center">
<div className="text-xs text-slate-500">2 часа назад</div>
<h4 className="text-sm font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Microsoft предложит досрочный выход на пенсию...</h4>
</div>
</div>

<div className="group cursor-pointer flex gap-4" onclick="navigate('article')">
<div className="w-20 h-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="flex flex-col gap-1 justify-center">
<div className="text-xs text-slate-500">Вчера</div>
<h4 className="text-sm font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Индекс Мосбиржи обновил максимум с начала года...</h4>
</div>
</div>

<div className="group cursor-pointer flex gap-4" onclick="navigate('article')">
<div className="w-20 h-20 shrink-0 rounded-lg bg-slate-100 overflow-hidden">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="flex flex-col gap-1 justify-center">
<div className="text-xs text-slate-500">10 мая</div>
<h4 className="text-sm font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Топ-5 надежных корпоративных облигаций...</h4>
</div>
</div>
</div>
<button className="w-full py-3 border border-slate-200 rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors mt-4" onclick="navigate('feed')">Смотреть все</button>
</div>
</div>
</div>
</div>

<div className="space-y-8 hidden" id="view-feed">
<nav className="flex text-sm text-slate-500 gap-2 items-center">
<a className="hover:text-slate-900 transition-colors" href="#" onclick="navigate('hub')">Главная</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="navigate('hub')">Медиа</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-slate-900">Все публикации</span>
</nav>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">Публикации</h1>
<div className="relative w-full sm:w-72">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Поиск по названию..." type="text"/>
</div>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 border-b border-slate-100">
<button className="shrink-0 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Все</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Облигации недели</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Новости</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Курсы</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Распаковка</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Первичные размещения</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Аналитика</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Новости эмитента</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Взгляд</button>
<button className="shrink-0 px-4 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-full text-sm font-medium transition-colors">Брокер объясняет</button>
</div>

<div className="border border-slate-200 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors" onclick="toggleFilters()">
<span className="font-medium text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="1.5"></i> Дополнительные фильтры
                    </span>
<i className="w-4 h-4 text-slate-500 transition-transform" data-lucide="chevron-down" id="filter-icon" strokeWidth="1.5"></i>
</button>
<div className="hidden p-6 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-slate-200" id="filter-content">

<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">Канал / Автор</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600">
<option>Любой</option>
<option>Интерфакс</option>
<option>РБК</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">Период (от - до)</label>
<div className="flex items-center gap-2">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-sm focus:outline-none focus:border-blue-600" type="date"/>
<span className="text-slate-400">-</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-sm focus:outline-none focus:border-blue-600" type="date"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">Актив</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-blue-600" placeholder="Тикер или название" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500">Теги</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600">
<option>Выберите тег</option>
<option>Дивиденды</option>
<option>Отчетность</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="flex flex-col gap-4 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full z-10 flex items-center gap-1">
                            Взгляд
                        </div>
<div className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur text-white text-xs px-2 py-1 rounded-md z-10 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock" strokeWidth="1.5"></i> 3 мин
                        </div>
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-semibold text-blue-600">И</div>
<span className="font-medium text-slate-900">Интерфакс</span>
<span>•</span>
<span>4 часа назад</span>
</div>
<div className="flex gap-1">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-medium border border-slate-200">MSFT</div>
</div>
</div>
<h3 className="text-xl font-medium leading-snug group-hover:text-blue-600 transition-colors">ВЗГЛЯД: Freedom Finance Global понизил целевую цену United Airlines до $125</h3>
</div>
</div>

<div className="flex flex-col gap-4 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full z-10">Новости</div>
<div className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur text-white text-xs px-2 py-1 rounded-md z-10 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock" strokeWidth="1.5"></i> 1 мин
                        </div>
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2 text-xs text-slate-500">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-semibold text-blue-600">И</div>
<span className="font-medium text-slate-900">Интерфакс</span>
<span>•</span>
<span>4 часа назад</span>
</div>
<div className="flex gap-1">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-medium border border-slate-200">MOEX</div>
</div>
</div>
<h3 className="text-xl font-medium leading-snug group-hover:text-blue-600 transition-colors">Microsoft предложит досрочный выход на пенсию сотрудникам в США</h3>
</div>
</div>

<div className="flex flex-col gap-4 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-medium px-2.5 py-1 rounded-full z-10">Аналитика</div>
<div className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur text-white text-xs px-2 py-1 rounded-md z-10 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock" strokeWidth="1.5"></i> 5 мин
                        </div>
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2 text-xs text-slate-500">
<img alt="" className="w-5 h-5 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"/>
<span className="font-medium text-slate-900">Иван Иванов</span>
<span>•</span>
<span>Вчера</span>
</div>
</div>
<h3 className="text-xl font-medium leading-snug group-hover:text-blue-600 transition-colors">Что будет с ключевой ставкой ЦБ на ближайшем заседании и как это повлияет на рынок</h3>
</div>
</div>


</div>
<div className="flex justify-center pt-8 border-t border-slate-200">
<button className="bg-slate-50 border border-slate-200 text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition-colors flex items-center gap-2">
                    Показать еще
                    <i className="w-4 h-4" data-lucide="rotate-cw" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex justify-center items-center gap-2 pb-8">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 cursor-not-allowed"><i className="w-4 h-4" data-lucide="chevron-left" strokeWidth="1.5"></i></button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 font-medium">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 font-medium">3</button>
<span className="text-slate-400">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 font-medium">12</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50"><i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i></button>
</div>
</div>

<div className="space-y-8 hidden" id="view-article">
<nav className="flex text-sm text-slate-500 gap-2 items-center">
<a className="hover:text-slate-900 transition-colors" href="#" onclick="navigate('hub')">Главная</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-slate-900 transition-colors" href="#" onclick="navigate('feed')">Медиа</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-slate-900">Что такое облигации</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<article className="lg:col-span-8 space-y-8">

<div className="space-y-6">
<div className="flex flex-wrap items-center gap-3 text-sm">
<span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium">Брокер объясняет</span>
<div className="flex gap-2">
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">#Обучение</span>
<span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">#Облигации</span>
</div>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">Что такое облигации простыми словами и как на них заработать</h1>
<div className="flex items-center gap-6 text-sm text-slate-500 border-b border-slate-200 pb-6">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i> 12 мая 2024
                            </div>
<div className="flex items-center gap-2" title="Обновлено">
<i className="w-4 h-4" data-lucide="refresh-cw" strokeWidth="1.5"></i> 13 мая 2024
                            </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i> 5 мин чтения
                            </div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<h3 className="font-semibold text-slate-900 mb-2">Краткое содержание</h3>
<p className="text-slate-600">Облигация — это долговая ценная бумага. Покупая её, вы даете деньги в долг государству или компании под процент. Это один из самых надежных инструментов на фондовом рынке, который часто сравнивают с банковским вкладом, но с потенциально большей доходностью и гибкостью.</p>
</div>

<div className="border border-slate-200 rounded-2xl p-6">
<h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="list" strokeWidth="1.5"></i> Содержание
                        </h3>
<ul className="space-y-3 text-blue-600 font-medium">
<li><a className="hover:underline" href="#">1. Как работают облигации</a></li>
<li><a className="hover:underline" href="#">2. Виды облигаций: ОФЗ, корпоративные, муниципальные</a></li>
<li><a className="hover:underline" href="#">3. Риски при инвестировании в облигации</a></li>
<li><a className="hover:underline" href="#">4. Как купить первую облигацию</a></li>
</ul>
</div>

<div className="prose prose-slate max-w-none text-base leading-relaxed space-y-6">
<p>На фондовом рынке есть два основных инструмента: акции и облигации. Если покупка акций делает вас совладельцем бизнеса, то покупка облигации делает вас кредитором. Вы даете деньги в долг, а эмитент (тот, кто выпустил бумагу) обязуется вернуть вам эти деньги в определенный срок и регулярно выплачивать проценты — купоны.</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mt-8 mb-4">Основные параметры облигации</h3>
<ul className="list-disc pl-5 space-y-2 text-slate-700">
<li><strong>Номинал</strong> — сумма, которую эмитент взял в долг по одной бумаге и которую вернет при погашении (чаще всего 1000 рублей).</li>
<li><strong>Купон</strong> — процентная выплата по облигации. Может быть фиксированным или плавающим.</li>
<li><strong>Дата погашения</strong> — день, когда эмитент вернет вам номинал.</li>
<li><strong>Рыночная цена</strong> — цена, по которой бумага торгуется на бирже прямо сейчас. Может быть выше или ниже номинала.</li>
</ul>
<div className="my-8 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
<img alt="График" className="w-full" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="p-3 text-xs text-slate-500 text-center">Динамика доходности ОФЗ за последний год</div>
</div>
<p>Многие инвесторы выбирают облигации как защитную часть портфеля. В отличие от акций, доходность здесь известна заранее (при удержании до погашения), а колебания цены обычно не такие резкие. Подробнее о составлении портфеля читайте в нашей статье <a className="text-blue-600 hover:underline" href="#">«Как собрать первый портфель»</a>.</p>

<div className="flex gap-4 my-6">
<a className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors w-64" href="#">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-medium text-xs border border-slate-200 shrink-0">ОФЗ</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">ОФЗ 26238</span>
<span className="text-xs text-slate-500">Гособлигации</span>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors w-64" href="#">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-medium text-xs border border-slate-200 shrink-0">СБЕР</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Сбербанк БО-40</span>
<span className="text-xs text-slate-500">Корп. облигации</span>
</div>
</a>
</div>
<p>Важно помнить, что хотя государственные облигации (ОФЗ) считаются безрисковым активом, корпоративные бумаги могут нести риск дефолта компании. Поэтому перед покупкой важно изучать финансовое состояние эмитента.</p>
</div>

<div className="bg-slate-50 border-l-4 border-slate-300 p-4 text-sm text-slate-600 italic">
                        Данная информация не является индивидуальной инвестиционной рекомендацией, и финансовые инструменты либо операции, упомянутые в ней, могут не соответствовать вашему инвестиционному профилю и инвестиционным целям (ожиданиям).
                    </div>

<div className="text-sm text-slate-500 pt-4 border-t border-slate-200">
<span className="font-medium text-slate-700">Источники:</span> Данные Московской биржи, аналитика Совкомбанк Инвестиции.
                    </div>

<div className="flex items-center justify-between py-6 border-y border-slate-200">
<div className="flex items-center gap-6">
<button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group">
<div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors"><i className="w-5 h-5" data-lucide="thumbs-up" strokeWidth="1.5"></i></div>
<span className="font-medium">124</span>
</button>
<div className="flex items-center gap-2 text-slate-500">
<i className="w-5 h-5" data-lucide="eye" strokeWidth="1.5"></i>
<span className="font-medium">1.2k</span>
</div>
<button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors group" onclick="toggleAuthModal()">
<div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors"><i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i></div>
<span className="font-medium">12</span>
</button>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Поделиться">
<i className="w-5 h-5" data-lucide="share" strokeWidth="1.5"></i>
</button>
<button className="p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" onclick="toggleAuthModal()" title="В избранное">
<i className="w-5 h-5" data-lucide="bookmark" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="space-y-4 pt-4">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Комментарии</h3>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 shrink-0 flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none cursor-text hover:bg-slate-100 transition-colors" onclick="toggleAuthModal()" placeholder="Написать комментарий..." readonly="" type="text"/>
</div>
</div>
</article>

<aside className="lg:col-span-4 space-y-8">

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center gap-4">
<img alt="" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=96&amp;h=96&amp;q=80"/>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">Иван Иванов</h3>
<p className="text-sm text-slate-500 mt-1">Главный аналитик по долговому рынку Совкомбанк Инвестиции</p>
</div>
<button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Все статьи автора</button>
</div>

<div className="space-y-4">
<h4 className="font-semibold text-slate-900">Читайте также от автора</h4>
<ul className="space-y-4">
<li><a className="text-sm font-medium hover:text-blue-600 transition-colors line-clamp-2" href="#">Обзор новых выпусков корпоративных облигаций за май</a></li>
<li><a className="text-sm font-medium hover:text-blue-600 transition-colors line-clamp-2" href="#">Как ключевая ставка влияет на доходность старых выпусков ОФЗ</a></li>
<li><a className="text-sm font-medium hover:text-blue-600 transition-colors line-clamp-2" href="#">Флоатеры: защита от инфляции или модный тренд?</a></li>
</ul>
</div>

<div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white text-center space-y-4 relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<h3 className="text-xl font-semibold relative z-10">Откройте брокерский счет</h3>
<p className="text-sm text-blue-100 relative z-10">Покупайте облигации без комиссии первый месяц</p>
<button className="w-full py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors relative z-10">Открыть онлайн</button>
</div>
</aside>
</div>

<section className="pt-12 border-t border-slate-200 space-y-6">
<h2 className="text-2xl font-semibold tracking-tight">Похожие статьи</h2>
<div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x">

<div className="snap-start shrink-0 w-[280px] sm:w-[300px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-base font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Топ-5 надежных корпоративных облигаций с доходностью выше вклада</h3>
</div>
<div className="snap-start shrink-0 w-[280px] sm:w-[300px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-base font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Разбор нового выпуска ОФЗ: стоит ли добавлять в портфель?</h3>
</div>
<div className="snap-start shrink-0 w-[280px] sm:w-[300px] flex flex-col gap-3 group cursor-pointer" onclick="navigate('article')">
<div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-base font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Как рассчитать реальную доходность облигации к погашению</h3>
</div>
</div>
</section>

<section className="space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-center">Начать инвестировать легко</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between items-start gap-6 hover:border-blue-300 transition-colors group">
<div className="space-y-2">
<h3 className="text-xl font-semibold tracking-tight">Брокерский счет</h3>
<p className="text-slate-500 text-sm">Быстрый доступ к инвестициям с любых устройств</p>
</div>
<button className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Открыть <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col justify-between items-start gap-6 hover:border-blue-300 transition-colors group">
<div className="space-y-2">
<h3 className="text-xl font-semibold tracking-tight">Откройте ИИС-3</h3>
<p className="text-slate-500 text-sm">Получайте дополнительный доход от инвестиций благодаря сразу двум налоговым льготам</p>
</div>
<button className="text-blue-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Узнать больше <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</div>
</div>
</section>

<section className="bg-blue-50 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
<i className="w-8 h-8" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="space-y-2">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Подпишитесь на рассылку</h2>
<p className="text-slate-600">Главные новости рынков и аналитика каждую неделю в вашей почте</p>
</div>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault()">
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Ваш E-mail" required="" type="email"/>
<button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors whitespace-nowrap" type="submit">Подписаться</button>
</form>
</section>
</div>
</main>

<footer className="bg-slate-50 border-t border-slate-200 py-12 mt-12">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
            © 2024 ПАО «Совкомбанк». Прототип интерфейса.
        </div>
</footer>

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="auth-modal">
<div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl transform scale-95 transition-transform duration-300" id="auth-modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Необходима авторизация</h3>
<button className="text-slate-400 hover:text-slate-600" onclick="toggleAuthModal()"><i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i></button>
</div>
<p className="text-slate-600 mb-8 text-sm">Чтобы оставлять комментарии и сохранять статьи в избранное, пожалуйста, войдите в свой веб-кабинет.</p>
<div className="flex flex-col gap-3">
<button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">Войти по номеру телефона</button>
<button className="w-full bg-white border border-slate-200 text-slate-900 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors" onclick="toggleAuthModal()">Отмена</button>
</div>
</div>
</div>



    </>
  );
}
