import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Navbar Scroll Logic
        const nav = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                // Scrolled state
                nav.classList.remove('bg-transparent', 'py-4');
                nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-slate-100');
            } else {
                // Initial transparent state
                nav.classList.add('bg-transparent', 'py-4');
                nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-slate-100');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-4" id="main-header">
<div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
<div className="flex items-center gap-2">

<a className="text-lg font-bold tracking-tighter text-slate-800 uppercase flex items-center gap-2" href="#">
<span className="text-emerald-500">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="leaf"></i>
</span>
                    Sergek Ecology
                </a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-emerald-600 transition-colors" href="#">Новости</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Подать жалобу</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Эко-калькулятор</a>
<a className="hover:text-emerald-600 transition-colors" href="#">FAQ</a>
<a className="hover:text-emerald-600 transition-colors" href="#">Контакты</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-slate-800 font-semibold text-sm">
<i className="w-4 h-4 text-emerald-500" data-lucide="phone"></i>
                    1414
                </div>
<div className="h-4 w-px bg-slate-200 hidden md:block"></div>
<button className="text-sm font-medium hover:text-emerald-600 transition-colors">RU</button>
</div>
</div>
</header>

<section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white relative overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-50 to-transparent -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Алматы, Казахстан
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Чистый воздух <br/>
<span className="text-emerald-500">для Алматы</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Единый портал об экологии города. Узнавайте о мероприятиях по охране окружающей среды, оставляйте жалобы, получайте льготы и следите за качеством воздуха.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-2xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                        Подать жалобу
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-medium rounded-2xl transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="calculator"></i>
                        Эко-калькулятор
                    </button>
</div>
</div>
<div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group">

<img alt="Природа Алматы" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-white/20">
<div className="flex items-center gap-3">
<div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Качество воздуха</p>
<p className="text-sm font-bold text-slate-800">AQI 45 (Хорошо)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center md:text-left">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Наши достижения в цифрах</h2>
<p className="text-slate-500 max-w-2xl">Результаты работы по улучшению экологической ситуации в Алматы за последний год.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="trending-down"></i>
</div>
<p className="text-4xl font-bold text-slate-900 tracking-tight mb-1">15%</p>
<p className="text-sm text-slate-500 font-medium">Снижение выбросов в 2024</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<p className="text-4xl font-bold text-slate-900 tracking-tight mb-1">5k+</p>
<p className="text-sm text-slate-500 font-medium">Граждан получили льготы</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="trees"></i>
</div>
<p className="text-4xl font-bold text-slate-900 tracking-tight mb-1">10k</p>
<p className="text-sm text-slate-500 font-medium">Деревьев высажено</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<p className="text-4xl font-bold text-slate-900 tracking-tight mb-1">2500+</p>
<p className="text-sm text-slate-500 font-medium">Электромобилей на дорогах</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Сервисы и инструменты</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group p-8 rounded-3xl border border-slate-200 hover:border-red-200 bg-white hover:bg-red-50/30 transition-all duration-300 relative overflow-hidden" href="#">
<div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="alert-circle"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Подать заявку</h3>
<p className="text-slate-500 mb-8 leading-relaxed">Зафиксируйте нарушение: мусор, дым, сруб деревьев или загрязнение воды.</p>
<div className="flex items-center text-red-600 font-medium group-hover:gap-2 transition-all">
                        Перейти
                        <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group p-8 rounded-3xl border border-slate-200 hover:border-emerald-200 bg-white hover:bg-emerald-50/30 transition-all duration-300 relative overflow-hidden" href="#">
<div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Эко-калькулятор</h3>
<p className="text-slate-500 mb-8 leading-relaxed">Рассчитайте свой углеродный след и узнайте, как снизить влияние на среду.</p>
<div className="flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                        Рассчитать
                        <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</div>
</a>

<a className="group p-8 rounded-3xl border border-slate-200 hover:border-blue-200 bg-white hover:bg-blue-50/30 transition-all duration-300 relative overflow-hidden" href="#">
<div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Зоны низких выбросов</h3>
<p className="text-slate-500 mb-8 leading-relaxed">Информация о зонах с ограниченным доступом для транспорта низкого класса.</p>
<div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                        Смотреть карту
                        <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Подать жалобу на источник выбросов</h2>
<p className="text-slate-500">Помогите нам сделать город чище. Сообщите о нарушениях экологических норм.</p>
</div>
<form className="bg-white p-8 md:p-10 rounded-3xl shadow-lg shadow-slate-200/50 space-y-8 border border-slate-100">

<div className="space-y-3">
<label className="block text-sm font-semibold text-slate-700">Тип жалобы</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="complaint_type" type="radio"/>
<div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-slate-50 transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="car-front"></i>
<span className="text-sm font-medium">Автомобиль</span>
<div className="radio-circle w-4 h-4 rounded-full border border-slate-300"></div>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="complaint_type" type="radio"/>
<div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-slate-50 transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="utensils"></i>
<span className="text-sm font-medium">Кафе/Еда</span>
<div className="radio-circle w-4 h-4 rounded-full border border-slate-300"></div>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="complaint_type" type="radio"/>
<div className="border border-slate-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-slate-50 transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="help-circle"></i>
<span className="text-sm font-medium">Другое</span>
<div className="radio-circle w-4 h-4 rounded-full border border-slate-300"></div>
</div>
</label>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700">Что вы наблюдаете?</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-4 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-shadow">
<option>Дым или смог</option>
<option>Вырубка деревьев</option>
<option>Сброс мусора</option>
<option>Загрязнение водоема</option>
</select>
<div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700">Описание проблемы</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-4 px-5 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-shadow" placeholder="Опишите детали нарушения..."></textarea>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700">Фото или видео</label>
<div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-emerald-400 transition-colors cursor-pointer group">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
</div>
<p className="text-sm text-slate-600 font-medium">Нажмите для загрузки</p>
<p className="text-xs text-slate-400 mt-1">JPG, PNG, MP4 до 50MB</p>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-semibold text-slate-700">Адрес или место на карте</label>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-4 px-5 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-shadow" placeholder="Улица Абая 10..." type="text"/>
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
</div>
</div>
<button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30" type="button">
                    Отправить жалобу
                </button>
</form>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Калькулятор эко-класса</h2>
<p className="text-slate-500">Узнайте экологический класс вашего транспортного средства и уровень выбросов.</p>
</div>
<div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40">

<div className="flex border-b border-slate-100">
<button className="flex-1 py-5 text-sm font-semibold text-emerald-600 bg-emerald-50/50 border-b-2 border-emerald-500 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="wand-2"></i>
                        Автоматический расчет
                    </button>
<button className="flex-1 py-5 text-sm font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="edit-3"></i>
                        Ручной расчет
                    </button>
</div>

<div className="p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
<div className="space-y-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Гос. номер (ГРНЗ)</label>
<input className="w-full text-lg font-mono bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 uppercase focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10" placeholder="123 ABC 02" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">ИИН Владельца</label>
<input className="w-full text-lg font-mono bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10" placeholder="000000000000" type="text"/>
</div>
<button className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors">
                                Рассчитать эко-класс
                            </button>
</div>
<div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="info"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Авторизация</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                        Для получения точных данных требуется авторизация. Данные проверяются через официальные базы данных МВД РК.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Льготы и меры поддержки</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Получите доступ к программам поддержки для владельцев экологичного транспорта, субсидиям на покупку электромобилей и другим городским льготам.
                    </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Субсидии до 15% на покупку электромобилей</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Бесплатный въезд в зону LEZ для эко-транспорта</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Льготная парковка в центре города (Зона А)</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-slate-700 font-medium">Освобождение от транспортного налога на 3 года</span>
</li>
</ul>
<button className="px-8 py-3.5 bg-white border border-slate-300 text-slate-700 font-medium rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                        Подать заявку на льготы
                    </button>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl"></div>
<div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative z-10 border border-slate-100">
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
<i className="w-10 h-10" data-lucide="sprout"></i>
</div>
<h3 className="text-5xl font-bold tracking-tight text-slate-900 mb-2">5,000+</h3>
<p className="text-slate-500 font-medium">Жителей уже воспользовались<br/>программами поддержки</p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex justify-center gap-2">
<span className="flex -space-x-3">
<span className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"></span>
<span className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white"></span>
<span className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white"></span>
</span>
<span className="flex items-center text-xs font-semibold bg-slate-100 px-3 rounded-full text-slate-600">
                                Присоединяйтесь
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Новости и статьи</h2>
<p className="text-slate-500">Следите за последними новостями об экологических инициативах.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
                    Показать все
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="h-56 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
<img alt="Solar Panels" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs font-medium mb-3">
<span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">Новости</span>
<span className="text-slate-400">12 Окт 2024</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        Запуск новой станции мониторинга воздуха в Бостандыкском районе
                    </h3>
<div className="flex items-center text-sm font-medium text-slate-500 mt-4 group-hover:text-emerald-600 transition-colors">
                        Читать далее <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</div>
</article>

<article className="group cursor-pointer">
<div className="h-56 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
<img alt="Nature" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-xs font-medium mb-3">
<span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">Отчеты</span>
<span className="text-slate-400">10 Окт 2024</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        Ежеквартальный отчет по качеству воды в озере Сайран
                    </h3>
<div className="flex items-center text-sm font-medium text-slate-500 mt-4 group-hover:text-emerald-600 transition-colors">
                        Читать далее <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</div>
</article>

<article className="group cursor-pointer">
<div className="h-56 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100">
<img alt="Recycling" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 text-xs font-medium mb-3">
<span className="text-orange-600 bg-orange-50 px-2 py-1 rounded-md">Льготы</span>
<span className="text-slate-400">05 Окт 2024</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        Как получить субсидию на установку солнечных панелей для дома
                    </h3>
<div className="flex items-center text-sm font-medium text-slate-500 mt-4 group-hover:text-emerald-600 transition-colors">
                        Читать далее <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</div>
</article>
</div>
<button className="mt-8 w-full md:hidden py-3 border border-slate-200 rounded-xl text-slate-700 font-medium">Показать все новости</button>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Часто задаваемые вопросы</h2>
<p className="text-slate-500">Ответы на популярные вопросы об экологии города.</p>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
                        Как работают зоны низких выбросов (LEZ)?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                        Зоны низких выбросов — это территории города, куда ограничен въезд транспортных средств с низким экологическим классом (обычно ниже Евро-4). Это помогает снизить загрязнение воздуха в густонаселенных районах.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
                        Как подать анонимную жалобу?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                        При заполнении формы вы можете не указывать свои личные данные, если выберете опцию "Анонимная жалоба". Однако для получения обратной связи мы рекомендуем оставить контактный email.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
                        Где посмотреть данные мониторинга в реальном времени?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                        Данные доступны на интерактивной карте на главной странице портала, а также в мобильном приложении Sergek. Информация обновляется каждые 15 минут.
                    </div>
</details>
</div>
<div className="mt-10 text-center">
<p className="text-slate-500 mb-4 text-sm">Не нашли ответ на свой вопрос?</p>
<button className="px-6 py-3 bg-white border border-slate-300 rounded-xl text-slate-700 font-medium hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                    Связаться с поддержкой
                </button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="text-white font-bold tracking-tight uppercase flex items-center gap-2 text-lg mb-6" href="#">
<span className="text-emerald-500"><i className="w-5 h-5" data-lucide="leaf"></i></span>
                        Sergek Ecology
                    </a>
<p className="text-sm leading-relaxed mb-6">
                        Комплексное решение для мониторинга и улучшения экологической обстановки города Алматы с помощью современных технологий.
                    </p>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Навигация</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Главная</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Карта качества воздуха</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Подать жалобу</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Новости экологии</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">О проекте</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Документация</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Политика конфиденциальности</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Условия использования</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Открытые данные (API)</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Экологический кодекс РК</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Контакты</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-1 text-slate-500" data-lucide="map-pin"></i>
<span>г. Алматы, ул. Байзакова 280, Smart City Hub</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:ecology@sergek.kz">ecology@sergek.kz</a>
</li>
</ul>
<div className="flex gap-4 mt-6">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Sergek Group. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
