import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="flex items-center gap-2.5 text-xl font-semibold text-slate-900 tracking-tight" href="#">
                    WorkHard
                    <div className="flex text-white bg-slate-900 w-8 h-8 rounded-lg items-center justify-center shadow-lg shadow-slate-900/20">
<i className="w-4.5 h-4.5 stroke-2" data-lucide="briefcase"></i>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="text-slate-900 transition-colors" href="#">Пошук вакансій</a>
<a className="hover:text-slate-900 transition-colors" href="#">Компанії</a>
<a className="hover:text-slate-900 transition-colors" href="#">Створити резюме</a>
<a className="hover:text-slate-900 transition-colors" href="#">Для роботодавців</a>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors"><i className="w-5 h-5" data-lucide="search"></i></button>
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="w-px h-6 bg-slate-200 mx-1"></div>
<button className="flex items-center gap-2 hover:bg-slate-50 pl-2 pr-1 py-1 rounded-full transition-colors">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-600 border border-slate-200">JD</div>
</button>
</div>
</div>
</nav>

<main className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 min-h-screen">

<div className="mb-10">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 flex flex-col md:flex-row gap-2">
<div className="flex-1 flex items-center px-4 h-12 rounded-xl bg-slate-50 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 ring-slate-900/5 transition-all group">
<i className="w-5 h-5 mr-3 text-slate-400 group-focus-within:text-slate-900" data-lucide="search"></i>
<input className="outline-none bg-transparent w-full text-base placeholder:text-slate-400 text-slate-900 font-medium" placeholder="Медичний представник..." type="text" value="Product Designer"/>
</div>
<div className="w-px bg-slate-200 my-2 hidden md:block"></div>
<div className="flex-1 flex items-center px-4 h-12 rounded-xl bg-slate-50 hover:bg-slate-100 focus-within:bg-white focus-within:ring-2 ring-slate-900/5 transition-all group">
<i className="w-5 h-5 mr-3 text-slate-400 group-focus-within:text-slate-900" data-lucide="map-pin"></i>
<input className="outline-none bg-transparent w-full text-base placeholder:text-slate-400 text-slate-900 font-medium" placeholder="Київ" type="text"/>
</div>
<button className="h-12 px-8 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-[0.98]">
                    Знайти
                </button>
</div>

<div className="mt-3 flex items-center gap-4 text-sm text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
<span className="font-medium text-slate-400">Популярні запити:</span>
<button className="hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4">Project Manager</button>
<button className="hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4">QA Engineer</button>
<button className="hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4">Marketing</button>
<span className="w-1 h-1 rounded-full bg-slate-300 mx-2"></span>
<span className="font-medium text-slate-400">Ви шукали:</span>
<button className="hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4">Front-end</button>
</div>
</div>
<div className="grid grid-cols-12 gap-10">

<aside className="hidden lg:block col-span-3 space-y-8">
<div className="flex items-center justify-between pb-4 border-b border-slate-200">
<h2 className="text-lg font-semibold tracking-tight">Фільтри</h2>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900">Скинути</button>
</div>

<div className="space-y-4">
<h3 className="font-medium text-slate-900">Тип зайнятості</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Повна зайнятість</span>
<span className="ml-auto text-xs text-slate-400">124</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Часткова</span>
<span className="ml-auto text-xs text-slate-400">32</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Проектна робота</span>
<span className="ml-auto text-xs text-slate-400">15</span>
</label>
</div>
</div>

<div className="space-y-4 border-t border-slate-100 pt-6">
<h3 className="font-medium text-slate-900">Формат роботи</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Офіс</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Гібрид</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Віддалено</span>
</label>
</div>
</div>

<div className="space-y-4 border-t border-slate-100 pt-6">
<div className="flex items-center justify-between">
<h3 className="font-medium text-slate-900">Зарплата, $</h3>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</label>
</div>
<div className="flex gap-2">
<div className="relative flex-1">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
<input className="w-full pl-6 pr-3 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-slate-900 transition-colors" type="number" value="1000"/>
</div>
<div className="relative flex-1">
<span className="absolute left-3 top-2.5 text-slate-400 text-sm">$</span>
<input className="w-full pl-6 pr-3 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-slate-900 transition-colors" type="number" value="5000"/>
</div>
</div>
<div className="px-1">
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="10000" min="0" type="range"/>
</div>

<div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 mt-4">
<label className="flex items-start gap-3 cursor-pointer">
<div className="relative flex items-center mt-0.5">
<input className="peer h-4 w-4 accent-indigo-600 rounded border-indigo-300" type="checkbox"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-indigo-900 flex items-center gap-1">
                                    Справедлива оплата 
                                    <i className="w-3.5 h-3.5 text-indigo-400" data-lucide="info"></i>
</span>
<span className="text-xs text-indigo-700/80 mt-0.5 leading-snug">Зарплата відповідає вимогам ринку</span>
</div>
</label>
</div>
</div>

<div className="space-y-4 border-t border-slate-100 pt-6">
<h3 className="font-medium text-slate-900 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="shield-check"></i> Фільтри довіри
                    </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Верифікована компанія</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Прозорі умови (офер)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer border-slate-300" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Є відгуки співробітників</span>
</label>
</div>
</div>

<div className="sticky bottom-6 pt-4 bg-white border-t border-slate-100">
<button className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">Застосувати</button>
<button className="w-full mt-3 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="save"></i> Зберегти пошук
                    </button>
</div>
</aside>

<div className="col-span-12 lg:col-span-9">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Вакансії за запитом "Product Designer"</h1>
<p className="text-slate-500 mt-1">Знайдено 243 вакансії</p>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors text-slate-700">
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-up-down"></i>
                                За релевантністю
                            </button>
</div>
<button className="lg:hidden p-2 border border-slate-200 rounded-lg bg-white text-slate-700">
<i className="w-5 h-5" data-lucide="filter"></i>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 mb-8">
<div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700 border border-slate-200">
                        Повна зайнятість
                        <button className="hover:text-slate-900 p-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></button>
</div>
<div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 text-sm font-medium text-slate-700 border border-slate-200">
                        Київ / Гібрид
                        <button className="hover:text-slate-900 p-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></button>
</div>
<div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-50 text-sm font-medium text-indigo-700 border border-indigo-100">
                        Від $1000
                        <button className="hover:text-indigo-900 p-0.5"><i className="w-3.5 h-3.5" data-lucide="x"></i></button>
</div>
<button className="text-sm font-medium text-slate-500 hover:text-red-600 hover:underline decoration-red-200 ml-2">Очистити все</button>
</div>

<div className="space-y-4">

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer relative">
<div className="flex gap-5">
<div className="w-14 h-14 shrink-0 rounded-lg bg-black text-white flex items-center justify-center text-xl font-bold shadow-sm">
                                M
                            </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate pr-4">Senior Product Designer</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-medium text-slate-700">Monobank</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="badge-check"></i>
<span className="text-sm text-slate-400 flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100"><i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i> 4.9</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-lg font-semibold text-slate-900">$4000 – $6000</span>
<span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-100">Вище ринку</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                        Київ (Гібрид)
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                        2 години тому
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-amber-500 fill-amber-50" data-lucide="zap"></i>
                                        Швидка відповідь
                                    </div>
</div>
<p className="mt-4 text-slate-500 line-clamp-2 text-sm leading-relaxed">
                                    Шукаємо досвідченого дизайнера для роботи над новим напрямком інвестицій. Вам потрібно буде проектувати інтерфейси, проводити дослідження та співпрацювати з командою розробки...
                                </p>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Figma</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Mobile Apps</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">FinTech</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
<button className="px-5 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-sm">Переглянути</button>
<button className="px-5 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all text-sm shadow-sm">Відгукнутись</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-indigo-100 p-6 hover:shadow-lg transition-all cursor-pointer relative bg-gradient-to-r from-indigo-50/30 via-white to-white">
<div className="absolute top-0 right-0 p-0 overflow-hidden">
<div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">Hot</div>
</div>
<div className="flex gap-5">
<div className="w-14 h-14 shrink-0 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-sm">
                                G
                            </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate pr-4">Product Designer (Growth)</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-medium text-slate-700">Grammarly</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="badge-check"></i>
<span className="text-sm text-slate-400 flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100"><i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i> 5.0</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-lg font-semibold text-slate-900">$3500 – $5000</span>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">В ринку</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-indigo-500" data-lucide="globe"></i>
                                        Remote Worldwide
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                        5 годин тому
                                    </div>
</div>
<div className="mt-4 flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span className="text-sm text-slate-600">Компанія переглянула ваше резюме на схожу позицію 2 дні тому.</span>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">SaaS</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Analytics</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
<button className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all text-sm shadow-md shadow-indigo-200">Відгукнутись в 1 клік</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer relative">
<div className="flex gap-5">
<div className="w-14 h-14 shrink-0 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-xl font-bold border border-slate-200">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate pr-4">UX/UI Designer</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-medium text-slate-700">SoftServe</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="badge-check"></i>
<span className="text-sm text-slate-400 flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-50 border border-slate-100"><i className="w-3 h-3 fill-slate-300 text-slate-300" data-lucide="star"></i> 4.5</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-lg font-semibold text-slate-400">За домовленістю</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                        Львів
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                        Вчора
                                    </div>
</div>
<p className="mt-4 text-slate-500 line-clamp-2 text-sm leading-relaxed">
                                    Потрібен фахівець з досвідом роботи у Enterprise системах. Знання дизайн-систем обов'язкове. Пропонуємо медичне страхування та спортзал.
                                </p>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Enterprise</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Design System</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
<button className="px-5 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-sm">Переглянути</button>
<button className="px-5 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all text-sm shadow-sm">Відгукнутись</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer relative opacity-90 hover:opacity-100">
<div className="flex gap-5">
<div className="w-14 h-14 shrink-0 rounded-lg bg-orange-500 text-white flex items-center justify-center text-xl font-bold shadow-sm">
                                N
                            </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate pr-4">Junior Web Designer</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-medium text-slate-700">Nova Post</span>
<i className="w-4 h-4 text-blue-500 fill-blue-50" data-lucide="badge-check"></i>
<span className="text-xs font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded ml-2">Без досвіду</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-lg font-semibold text-slate-900">$800 – $1200</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-sm text-slate-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                        Київ
                                    </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                        3 дні тому
                                    </div>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 text-xs font-medium text-slate-600 border border-slate-100">Photoshop</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
<button className="px-5 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all text-sm shadow-sm">Відгукнутись</button>
</div>
</div>
</div>
</div>

<div className="mt-12 flex flex-col items-center gap-6">
<button className="w-full md:w-auto px-8 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 shadow-sm">
                        Показати ще 20 вакансій
                        <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="w-10 h-10 rounded-lg bg-slate-900 text-white font-medium flex items-center justify-center shadow-md shadow-slate-900/10">1</button>
<button className="w-10 h-10 rounded-lg text-slate-600 font-medium flex items-center justify-center hover:bg-slate-50 transition-colors">2</button>
<button className="w-10 h-10 rounded-lg text-slate-600 font-medium flex items-center justify-center hover:bg-slate-50 transition-colors">3</button>
<span className="text-slate-400 px-2">...</span>
<button className="w-10 h-10 rounded-lg text-slate-600 font-medium flex items-center justify-center hover:bg-slate-50 transition-colors">12</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t pt-20 pb-12 px-6 md:px-12 border-slate-100 bg-slate-50">
<div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 text-xl tracking-tight font-semibold mb-6 text-slate-900" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-900 text-white">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
                    WorkHard
                </a>
<p className="text-base text-slate-500 max-w-sm mb-6 leading-relaxed">
                    Платформа для пошуку роботи, де цінують ваш час та професіоналізм. Ми перевіряємо кожну вакансію вручну.
                </p>
<div className="flex gap-3">
<a className="w-9 h-9 rounded-full border flex items-center justify-center text-slate-500 transition-all bg-white border-slate-200 hover:text-slate-900 hover:border-slate-400" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center text-slate-500 transition-all bg-white border-slate-200 hover:text-slate-900 hover:border-slate-400" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-9 h-9 rounded-full border flex items-center justify-center text-slate-500 transition-all bg-white border-slate-200 hover:text-slate-900 hover:border-slate-400" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-base text-slate-900">Платформа</h4>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Про нас</a>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Безпека та верифікація</a>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Блог</a>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Контакти</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-base text-slate-900">Роботодавцям</h4>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Розмістити вакансію</a>
<a className="transition-colors hover:text-slate-900 text-base text-slate-500" href="#">Тарифи</a>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">База резюме</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-base text-slate-900">Legal</h4>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Політика конфіденційності</a>
<a className="text-base text-slate-500 transition-colors hover:text-slate-900" href="#">Умови використання</a>
</div>
</div>
<div className="max-w-[1440px] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm border-slate-200 text-slate-400">
<p>© 2023 WorkHard. Всі права захищені.</p>
<div className="flex gap-6">
<span>Made with <i className="w-3 h-3 inline fill-slate-400" data-lucide="heart"></i> in Ukraine 🇺🇦</span>
</div>
</div>
</footer>


    </>
  );
}
