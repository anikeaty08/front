import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb', // Matches the vibrant blue in image
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
950: '#172554',
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-2.5">
<span className="iconify text-brand-600 text-3xl" data-icon="solar:wheel-bold-duotone"></span>
<span className="font-semibold text-slate-900 tracking-tight text-xl">СтартДрайв</span>
</div>
<div className="hidden md:flex items-center space-x-10 text-base font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#advantages">Преимущества</a>
<a className="hover:text-brand-600 transition-colors" href="#services">Услуги</a>
<a className="hover:text-brand-600 transition-colors" href="#process">Обучение</a>
<a className="hover:text-brand-600 transition-colors" href="#reviews">Отзывы</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#contacts">
                    Записаться
                </a>

<button className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-50">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 pt-32 pb-20 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative z-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold mb-10 tracking-wide">
<span className="iconify text-sm" data-icon="solar:verified-check-bold-duotone"></span>
                        ЛИЦЕНЗИЯ ГИБДД
                    </div>

<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                        Уверенность за рулем начинается в <br className="hidden sm:block"/>
<span className="text-brand-600">СтартДрайв</span>
</h1>

<p className="text-lg sm:text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-normal">
                        Современная методика обучения, новые автомобили и опытные инструкторы. Сдай на права с первого раза без стресса и переплат.
                    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
<a className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 group text-base" href="#contacts">
                            Начать обучение
                            <i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform stroke-[2]" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center text-base" href="#services">
                            Цены и программы
                        </a>
</div>

<div className="flex items-center gap-5">
<div className="flex -space-x-4">
<img alt="Student" className="w-12 h-12 rounded-full border-[3px] border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Student" className="w-12 h-12 rounded-full border-[3px] border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Student" className="w-12 h-12 rounded-full border-[3px] border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-12 h-12 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+2k</div>
</div>
<div className="text-base font-medium text-slate-600">
<span className="text-brand-600 font-bold">2,500+</span> довольных учеников
                        </div>
</div>
</div>

<div className="relative hidden lg:block">

<div className="absolute -inset-4 bg-gradient-to-br from-brand-100/50 to-indigo-100/50 rounded-[3rem] -rotate-3 scale-105 opacity-60 pointer-events-none"></div>

<div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/20 aspect-[4/3.5]">

<img alt="Driving" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent"></div>

<div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
<div className="bg-brand-600 rounded-2xl p-5 flex gap-5 items-center shadow-xl shadow-brand-900/20 max-w-sm">
<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl">
<span className="iconify" data-icon="solar:cup-star-bold-duotone"></span>
</div>
<div>
<div className="text-3xl font-bold text-white tracking-tight mb-0.5">98%</div>
<div className="text-sm text-brand-100 font-medium leading-tight">Сдача экзамена в ГИБДД</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="advantages">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Почему выбирают СтартДрайв?</h2>
<p className="text-lg text-slate-500 mb-10 leading-relaxed">
                        Мы не просто готовим к экзамену, мы учим безопасному вождению в реальных городских условиях. Наша миссия — выпустить на дороги уверенных водителей.
                    </p>
<div className="space-y-8">
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
<span className="iconify text-2xl" data-icon="solar:monitor-smartphone-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Дистанционное обучение</h3>
<p className="text-base text-slate-500">Изучайте теорию в удобном приложении из дома. Вебинары с преподавателями и тесты онлайн 24/7.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
<span className="iconify text-2xl" data-icon="solar:user-id-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Персональный инструктор</h3>
<p className="text-base text-slate-500">Выбирайте наставника по отзывам и рейтингу. Возможность смены инструктора в один клик.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600">
<span className="iconify text-2xl" data-icon="solar:clock-circle-bold-duotone"></span>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Гибкий график вождения</h3>
<p className="text-base text-slate-500">Запись на практические занятия через онлайн-кабинет. Утренние, вечерние часы и выходные дни.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[500px] rounded-3xl bg-slate-50 overflow-hidden border border-slate-100 flex items-center justify-center">

<div className="relative w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 transform rotate-3 transition-transform hover:rotate-0 duration-500">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
<span className="iconify text-lg" data-icon="solar:user-circle-bold-duotone"></span>
</div>
<div>
<div className="h-2 w-24 bg-slate-100 rounded mb-1.5"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
</div>
<span className="iconify text-slate-300 text-xl" data-icon="solar:settings-bold-duotone"></span>
</div>
<div className="space-y-4 mb-6">
<div className="h-16 bg-slate-50 rounded-xl border border-slate-100 p-3 flex items-center gap-3">
<span className="iconify text-brand-500 text-2xl" data-icon="solar:check-circle-bold-duotone"></span>
<div className="flex-1">
<div className="h-2 w-20 bg-slate-200 rounded mb-2"></div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-brand-500 rounded-full"></div>
</div>
</div>
</div>
<div className="h-16 bg-slate-50 rounded-xl border border-slate-100 p-3 flex items-center gap-3">
<span className="iconify text-brand-500 text-2xl" data-icon="solar:check-circle-bold-duotone"></span>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-brand-500 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-2 border-t border-slate-50">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Прогресс</div>
<div className="text-brand-600 font-bold text-lg">75%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Тарифы и программы</h2>
<p className="text-lg text-slate-500">Прозрачное ценообразование без скрытых доплат за топливо или пересдачи внутренних экзаменов.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-semibold text-slate-900">Категория А</h3>
<p className="text-base text-slate-500 mt-1">Мотоциклы</p>
</div>
<span className="iconify text-4xl text-slate-300 group-hover:text-brand-500 transition-colors" data-icon="solar:wheel-angle-bold-duotone"></span>
</div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">18 000 ₽</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Теория (онлайн/класс)
                        </li>
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> 18 часов практики
                        </li>
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Экипировка включена
                        </li>
</ul>
<a className="block w-full py-4 text-center bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-white hover:border-brand-300 hover:text-brand-600 transition-all text-base" href="#contacts">Выбрать курс</a>
</div>

<div className="bg-white rounded-3xl p-8 border-2 border-brand-500 shadow-xl relative overflow-hidden flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 inset-x-0 h-1.5 bg-brand-500"></div>
<div className="flex justify-between items-start mb-6 pt-2">
<div>
<span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-3 uppercase tracking-wider">Популярный</span>
<h3 className="text-xl font-semibold text-slate-900">Категория B</h3>
<p className="text-base text-slate-500 mt-1">МКПП (Механика)</p>
</div>
<span className="iconify text-4xl text-brand-600" data-icon="solar:transmission-square-bold-duotone"></span>
</div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">35 000 ₽</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-base text-slate-900">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Полный курс теории
                        </li>
<li className="flex items-center gap-3 text-base text-slate-900">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> 56 часов вождения
                        </li>
<li className="flex items-center gap-3 text-base text-slate-900">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Организация экзамена
                        </li>
<li className="flex items-center gap-3 text-base text-slate-900">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Доступ в приложение
                        </li>
</ul>
<a className="block w-full py-4 text-center bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors text-base shadow-lg shadow-brand-200" href="#contacts">Выбрать курс</a>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-semibold text-slate-900">Категория B</h3>
<p className="text-base text-slate-500 mt-1">АКПП (Автомат)</p>
</div>
<span className="iconify text-4xl text-slate-300 group-hover:text-brand-500 transition-colors" data-icon="solar:transmission-circle-bold-duotone"></span>
</div>
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">38 000 ₽</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Полный курс теории
                        </li>
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> 54 часа вождения
                        </li>
<li className="flex items-center gap-3 text-base text-slate-600">
<i className="w-5 h-5 text-brand-600 stroke-[3]" data-lucide="check"></i> Комфортные иномарки
                        </li>
</ul>
<a className="block w-full py-4 text-center bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-200 hover:bg-white hover:border-brand-300 hover:text-brand-600 transition-all text-base" href="#contacts">Выбрать курс</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-12">Путь к водительскому удостоверению</h2>
<div className="space-y-10 relative pl-4">

<div className="absolute left-[27px] top-4 bottom-12 w-0.5 bg-slate-100"></div>

<div className="relative flex gap-8">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-200 z-10 ring-8 ring-white">1</div>
<div className="pt-2">
<h4 className="text-xl font-medium text-slate-900">Заявка и договор</h4>
<p className="text-base text-slate-500 mt-2 leading-relaxed">Оставьте заявку на сайте. Мы оформим документы онлайн или в офисе. Нужен только паспорт.</p>
</div>
</div>

<div className="relative flex gap-8">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-xl z-10 ring-8 ring-white">2</div>
<div className="pt-2">
<h4 className="text-xl font-medium text-slate-900">Теория и автодром</h4>
<p className="text-base text-slate-500 mt-2 leading-relaxed">Изучение ПДД и первые навыки управления автомобилем на закрытой площадке.</p>
</div>
</div>

<div className="relative flex gap-8">
<div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold text-xl z-10 ring-8 ring-white">3</div>
<div className="pt-2">
<h4 className="text-xl font-medium text-slate-900">Город и экзамен</h4>
<p className="text-base text-slate-500 mt-2 leading-relaxed">Вождение в городском потоке, внутренний экзамен и сопровождение в ГИБДД.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300">
<span className="iconify text-5xl text-brand-500 mb-4" data-icon="solar:document-add-bold-duotone"></span>
<span className="text-lg font-semibold text-slate-900">Договор</span>
</div>
<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300 mt-12">
<span className="iconify text-5xl text-brand-500 mb-4" data-icon="solar:book-bookmark-bold-duotone"></span>
<span className="text-lg font-semibold text-slate-900">Учеба</span>
</div>
<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300 -mt-12">
<span className="iconify text-5xl text-brand-500 mb-4" data-icon="solar:steering-wheel-bold-duotone"></span>
<span className="text-lg font-semibold text-slate-900">Практика</span>
</div>
<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300">
<span className="iconify text-5xl text-brand-500 mb-4" data-icon="solar:card-2-bold-duotone"></span>
<span className="text-lg font-semibold text-slate-900">Права</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
<div className="lg:col-span-1">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Нам доверяют</h2>
<div className="flex flex-col gap-5">
<div className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">

<span className="iconify text-4xl text-slate-400" data-icon="simple-icons:yandex"></span>
<div>
<div className="flex items-center gap-1.5">
<span className="text-xl font-bold text-slate-900">4.9</span>
<div className="flex text-yellow-400 text-sm space-x-0.5">
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
</div>
</div>
<div className="text-sm text-slate-500">Рейтинг на Яндекс.Картах</div>
</div>
</div>
<div className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">

<span className="iconify text-4xl text-slate-400" data-icon="simple-icons:2gis"></span>
<div>
<div className="flex items-center gap-1.5">
<span className="text-xl font-bold text-slate-900">5.0</span>
<div className="flex text-yellow-400 text-sm space-x-0.5">
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
<span className="iconify" data-icon="solar:star-bold"></span>
</div>
</div>
<div className="text-sm text-slate-500">Рейтинг на 2ГИС</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-base">АИ</div>
<div>
<div className="font-semibold text-slate-900 text-base">Анна Иванова</div>
<div className="text-sm text-slate-400">Выпускница 2023</div>
</div>
</div>
<p className="text-base text-slate-600 leading-relaxed">"Сдала на права с первого раза! Огромное спасибо инструктору Михаилу за терпение. Очень удобно учить теорию в приложении по дороге на работу."</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-base">ДК</div>
<div>
<div className="font-semibold text-slate-900 text-base">Дмитрий К.</div>
<div className="text-sm text-slate-400">Выпускник 2023</div>
</div>
</div>
<p className="text-base text-slate-600 leading-relaxed">"Брал курс на механике. Машины новые, не убитые. Инструкторы адекватные, не кричат. Рассрочка очень выручила, платил частями без проблем."</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1120] text-slate-300 py-24" id="contacts">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-8">Контакты</h2>
<p className="mb-10 text-lg text-slate-400">Остались вопросы или готовы записаться? Заполните форму или позвоните нам.</p>
<div className="space-y-8 mb-12">
<div className="flex items-start gap-6">
<div className="p-3 bg-slate-800 rounded-xl text-brand-500">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Центральный офис</h4>
<p className="text-base mt-1 text-slate-400">г. Москва, ул. Лесная, д. 5, офис 304</p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="p-3 bg-slate-800 rounded-xl text-brand-500">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Телефон</h4>
<p className="text-base mt-1 text-slate-400">+7 (495) 123-45-67</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-10 text-slate-600 shadow-2xl">
<h3 className="text-2xl font-semibold text-slate-900 mb-8">Оставить заявку</h3>
<form className="space-y-6">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider" htmlFor="name">Ваше имя</label>
<input className="block w-full rounded-xl border-slate-200 bg-slate-50 focus:border-brand-500 focus:ring-brand-500 focus:bg-white text-base px-5 py-4 transition-all" id="name" placeholder="Иван Иванов" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider" htmlFor="phone">Телефон</label>
<input className="block w-full rounded-xl border-slate-200 bg-slate-50 focus:border-brand-500 focus:ring-brand-500 focus:bg-white text-base px-5 py-4 transition-all" id="phone" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
<div className="pt-2">
<button className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg shadow-brand-500/30 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all" type="button">
                                Отправить заявку
                            </button>
</div>
<p className="text-xs text-slate-400 text-center mt-2">
                            Нажимаю кнопку, вы соглашаетесь с политикой конфиденциальности.
                        </p>
</form>
</div>
</div>
<div className="border-t border-slate-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<div className="flex items-center gap-3 mb-4 md:mb-0">
<span className="iconify text-brand-500 text-2xl" data-icon="solar:wheel-bold-duotone"></span>
<span className="font-semibold text-white text-base">СтартДрайв</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Лицензия</a>
</div>
</div>
</div>
</section>


    </>
  );
}
