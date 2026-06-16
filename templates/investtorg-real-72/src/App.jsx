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
                        mono: ['Geist', 'monospace'],
                    },
                    colors: {
                        slate: {
                            850: '#151f32',
                        }
                    },
                    boxShadow: {
                        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>InvestTorg | Премиальная витрина залоговой недвижимости</title>

<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>





<style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F8FAFC; /* Slate 50 */
            color: #0F172A; /* Slate 900 */
            -webkit-font-smoothing: antialiased;
        }
        
        /* Custom scrollbar for horizontal sections */
        .hide-scroll::-webkit-scrollbar {
            display: none;
        }
        .hide-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        /* Gradient Text */
        .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(to right, #0F172A, #334155);
        }

        /* Subtle patterns */
        .bg-grid {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px);
        }
    </style>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-mono font-semibold text-lg tracking-tighter">IT</span>
</div>
<div className="hidden md:block">
<span className="block text-sm font-semibold tracking-tight text-slate-900 leading-none">INVEST TORG</span>
<span className="block text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">Aggregator v2.1</span>
</div>
</div>

<div className="hidden md:flex items-center bg-slate-100 rounded-full px-1.5 py-1 border border-slate-200 w-full max-w-lg mx-4">
<div className="px-3 text-slate-400">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</div>
<input className="bg-transparent border-none text-sm w-full focus:ring-0 text-slate-700 placeholder-slate-400 font-medium h-8" placeholder="Поиск по адресу, кадастру или типу..." type="text"/>
<div className="bg-white rounded-full px-2 py-1 text-[10px] font-mono text-slate-500 border border-slate-200 shadow-sm mr-1">⌘K</div>
</div>

<div className="flex items-center gap-3">
<div className="hidden md:flex flex-col items-end mr-2">
<span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">База обновлена</span>
<span className="text-xs font-mono font-medium text-emerald-600">08.12.2025</span>
</div>
<button className="text-slate-500 hover:text-slate-800 transition-colors p-2">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white pl-4 pr-1 py-1.5 rounded-full transition-all group shadow-card">
<span className="text-xs font-medium tracking-wide">Подобрать объект</span>
<div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</div>
</button>
</div>
</div>
</div>
</nav>

<main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

<section>
<div className="flex justify-between items-end mb-6">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight font-sans">Сводка рынка</h1>
<p className="text-slate-500 text-sm mt-1 max-w-2xl">Аналитика по 668 объектам из реестров банкротства и муниципальных торгов (Москва, СПБ, Юг).</p>
</div>

<div className="hidden sm:flex bg-slate-100 p-1 rounded-lg border border-slate-200">
<button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-xs font-medium text-slate-900">Все</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition">Частные</button>
<button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition">Коммерция</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-600">
<span className="iconify" data-icon="lucide:database" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">LIVE</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">668</span>
<span className="text-xs text-slate-500 font-medium">объектов</span>
</div>
<div className="mt-4 flex gap-2">
<div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-[65%]"></div> 
</div>
<div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[35%]"></div> 
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-slate-500 font-medium uppercase tracking-wide">
<span>Частные (432)</span>
<span>Коммерч (236)</span>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-subtle relative overflow-hidden group ring-1 ring-rose-50 hover:ring-rose-200 transition-all">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-rose-50 rounded-full opacity-50 blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="p-2 bg-rose-50 rounded-lg border border-rose-100 text-rose-600">
<span className="iconify" data-icon="lucide:flame" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="flex items-center gap-1 text-[10px] font-mono font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
<span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></span>
                            0-7 ДНЕЙ
                        </span>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-3xl font-semibold tracking-tight text-slate-900">42</span>
<span className="text-xs text-slate-500 font-medium">лота горят</span>
</div>
<p className="mt-2 text-xs text-slate-500 leading-relaxed max-w-[90%]">
                        Критические сроки подачи заявок. Высокая вероятность снижения конкуренции.
                    </p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-subtle relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-600">
<span className="iconify" data-icon="lucide:trending-down" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">-34%</span>
<span className="text-xs text-slate-500 font-medium">ср. дисконт</span>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs text-slate-400">от рыночной стоимости</span>
<span className="iconify text-slate-300" data-icon="lucide:info" data-width="14"></span>
</div>
</div>

<div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-subtle relative overflow-hidden text-white flex flex-col justify-between">
<div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="text-sm font-medium text-slate-300">Регионы</span>
<span className="iconify text-slate-400" data-icon="lucide:map" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="relative z-10 space-y-1 mt-4">
<div className="flex justify-between text-xs">
<span className="text-slate-400">Москва/МО</span>
<span className="font-mono text-white">160</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">Юг (Сочи/Крым)</span>
<span className="font-mono text-white">403</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-400">СПБ</span>
<span className="font-mono text-white">28</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 pt-8">
<div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-6 gap-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-6 bg-rose-500 rounded-full"></div>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight font-sans">Торги в ближайшие 7 дней</h2>
<span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase">Срочно</span>
</div>
<a className="group flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-rose-600 transition-colors" href="#">
                    Смотреть все 42 объекта
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
</div>

<div className="flex gap-6 overflow-x-auto hide-scroll pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">

<article className="min-w-[320px] w-[320px] bg-white rounded-xl border border-rose-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-card transition-all">
<div className="relative h-48 bg-slate-200">
<img alt="Estate" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute top-3 right-3 bg-rose-600 text-white px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-sm bg-opacity-90">
<span className="iconify" data-icon="lucide:timer" data-width="14"></span>
<span className="text-xs font-bold font-mono tracking-wide">2 ДНЯ</span>
</div>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-medium text-slate-800 uppercase tracking-wider">
                            Москва · Коммерция
                        </div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-medium text-slate-900 leading-snug line-clamp-2">Помещение свободного назначения, ЦАО, 1-я линия</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-1">ул. Тверская, д. 12, стр. 2</p>
<div className="mt-4 grid grid-cols-2 gap-2 py-3 border-t border-b border-slate-100">
<div>
<div className="text-[10px] text-slate-400 uppercase">Площадь</div>
<div className="text-sm font-medium text-slate-900">145.5 м²</div>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase">Цена / м²</div>
<div className="text-sm font-medium text-slate-900">185 000 ₽</div>
</div>
</div>
<div className="mt-auto pt-4 flex justify-between items-center">
<div>
<div className="text-[10px] text-slate-400">Начальная цена</div>
<div className="text-lg font-semibold text-slate-900 tracking-tight">26.9 млн ₽</div>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-rose-600 transition">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
</button>
</div>
</div>
</article>

<article className="min-w-[320px] w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden group hover:border-indigo-200 transition-all">
<div className="relative h-48 bg-slate-200">

<div className="absolute inset-0 bg-slate-100 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
<span className="iconify" data-icon="lucide:image-off" data-width="24"></span>
<span className="text-[10px] uppercase font-medium">Фото по запросу</span>
</div>
<div className="absolute top-3 left-3 bg-indigo-900 text-white px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm border border-indigo-700">
                            Эксклюзив
                        </div>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5 border border-slate-200/50">
<span className="iconify text-rose-500" data-icon="lucide:clock" data-width="14"></span>
<span className="text-xs font-semibold font-mono">5 ДНЕЙ</span>
</div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-medium text-slate-900 leading-snug line-clamp-2">Имущественный комплекс (Завод), ЗУ в собственности</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-1">Московская обл., г. Химки</p>
<div className="mt-4 grid grid-cols-2 gap-2 py-3 border-t border-b border-slate-100">
<div>
<div className="text-[10px] text-slate-400 uppercase">Площадь ЗУ</div>
<div className="text-sm font-medium text-slate-900">2.4 Га</div>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase">Потенциал</div>
<div className="text-sm font-medium text-slate-900">Склады</div>
</div>
</div>
<div className="mt-auto pt-4 flex justify-between items-center">
<div>
<div className="text-[10px] text-slate-400">Начальная цена</div>
<div className="text-lg font-semibold text-slate-900 tracking-tight">145.0 млн ₽</div>
</div>
<button className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
                                Презентация
                            </button>
</div>
</div>
</article>

<article className="min-w-[320px] w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden group hover:border-slate-300 transition-all">
<div className="relative h-48 bg-slate-200">
<img alt="Estate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-slate-800 px-3 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
<span className="iconify text-rose-500" data-icon="lucide:clock" data-width="14"></span>
<span className="text-xs font-semibold font-mono">6 ДНЕЙ</span>
</div>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-medium text-slate-800 uppercase tracking-wider">
                            Сочи · Частное
                        </div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-medium text-slate-900 leading-snug line-clamp-2">Жилой дом 350 м² с участком 8 сот.</h3>
<p className="text-xs text-slate-500 mt-1 line-clamp-1">г. Сочи, Хостинский район</p>
<div className="mt-4 grid grid-cols-2 gap-2 py-3 border-t border-b border-slate-100">
<div>
<div className="text-[10px] text-slate-400 uppercase">Торги</div>
<div className="text-sm font-medium text-slate-900">Аукцион</div>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase">Дисконт</div>
<div className="text-sm font-medium text-emerald-600">-25% est.</div>
</div>
</div>
<div className="mt-auto pt-4 flex justify-between items-center">
<div>
<div className="text-[10px] text-slate-400">Начальная цена</div>
<div className="text-lg font-semibold text-slate-900 tracking-tight">32.4 млн ₽</div>
</div>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
</div>
</div>
</article>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">

<div className="lg:col-span-3 space-y-8">
<div className="flex items-center justify-between">
<h3 className="font-medium text-slate-900">Фильтры</h3>
<button className="text-xs text-slate-400 hover:text-slate-600">Сбросить</button>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">До торгов</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-2 rounded-lg bg-rose-50 border border-rose-200 cursor-pointer">
<input checked="" className="text-rose-600 focus:ring-rose-500 border-gray-300" name="deadline" type="radio"/>
<div className="flex-1">
<div className="text-sm font-medium text-rose-900">Горит (0-7 дней)</div>
<div className="text-[10px] text-rose-700 opacity-70">42 объекта</div>
</div>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 border border-transparent cursor-pointer transition">
<input className="text-slate-600 focus:ring-slate-500 border-gray-300" name="deadline" type="radio"/>
<div className="flex-1">
<div className="text-sm font-medium text-slate-700">На горизонте (8-30)</div>
</div>
</label>
<label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 border border-transparent cursor-pointer transition">
<input className="text-slate-600 focus:ring-slate-500 border-gray-300" name="deadline" type="radio"/>
<div className="flex-1">
<div className="text-sm font-medium text-slate-700">Позже (30+)</div>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Регион</label>
<select className="w-full bg-white border border-slate-200 rounded-lg text-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-700">
<option>Все регионы</option>
<option selected="">Москва и МО</option>
<option>Санкт-Петербург</option>
<option>Юг (Крым/Сочи)</option>
</select>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Бюджет (₽)</label>
<div className="flex gap-2">
<input className="w-1/2 bg-white border border-slate-200 rounded-lg text-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-slate-400" placeholder="От" type="text"/>
<input className="w-1/2 bg-white border border-slate-200 rounded-lg text-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-slate-400" placeholder="До" type="text"/>
</div>
</div>

<div className="flex items-center justify-between py-2">
<span className="text-sm font-medium text-slate-700">Только эксклюзив</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200">
<span className="inline-block h-3 w-3 transform rounded-full bg-white transition translate-x-1"></span>
</button>
</div>

<div className="mt-8 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl text-white">
<h4 className="text-sm font-medium mb-2">Нужна помощь юриста?</h4>
<p className="text-xs text-slate-400 mb-3 leading-relaxed">Полное сопровождение участия в торгах. Анализ рисков.</p>
<button className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs font-medium transition">Оставить заявку</button>
</div>
</div>

<div className="lg:col-span-9">

<div className="flex flex-wrap gap-4 justify-between items-center mb-6">
<div className="flex items-baseline gap-2">
<h2 className="text-lg font-medium text-slate-900">Витрина объектов</h2>
<span className="text-sm text-slate-500">Найдено: 160</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400 hidden sm:block">Сортировка:</span>
<select className="bg-transparent text-sm font-medium text-slate-900 border-none focus:ring-0 cursor-pointer pr-8">
<option>Сначала срочные</option>
<option>Высокий интерес (Score)</option>
<option>Цена: по возрастанию</option>
<option>Новые поступления</option>
</select>
<div className="h-4 w-px bg-slate-300 mx-2"></div>
<button className="text-slate-400 hover:text-slate-900"><span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span></button>
<button className="text-slate-900"><span className="iconify" data-icon="lucide:list" data-width="18"></span></button>
</div>
</div>

<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row gap-5 hover:border-slate-300 hover:shadow-subtle transition-all group">

<div className="w-full sm:w-48 h-32 sm:h-auto shrink-0 relative rounded-lg overflow-hidden bg-slate-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                                4 фото
                            </div>
</div>

<div className="flex-1 flex flex-col justify-between py-0.5">
<div>
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Эксклюзив</span>
<span className="text-[10px] text-slate-400">Лот #A-4921</span>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Квартира 120м², исторический центр</h3>
</div>
<div className="text-right">
<div className="flex items-center gap-1.5 justify-end text-orange-600 mb-0.5">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span>
<span className="text-xs font-bold font-mono">14 ДНЕЙ</span>
</div>
<div className="text-[10px] text-slate-400">до 22.12.2025</div>
</div>
</div>
<p className="text-sm text-slate-500 mt-1">Москва, пер. Сивцев Вражек, д. 4</p>

<div className="flex gap-2 mt-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Культурное наследие</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Требует ремонта</span>
</div>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-center gap-6">
<div>
<div className="text-[10px] text-slate-400 uppercase">Цена</div>
<div className="text-lg font-semibold text-slate-900">42 500 000 ₽</div>
</div>
<div className="hidden sm:block">
<div className="text-[10px] text-slate-400 uppercase">За м²</div>
<div className="text-sm font-medium text-slate-700">354 166 ₽</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition">Подробнее</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition">Презентация</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row gap-5 hover:border-slate-300 hover:shadow-subtle transition-all group">
<div className="w-full sm:w-48 h-32 sm:h-auto shrink-0 relative rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-100">
<span className="text-[10px] text-slate-400 font-medium">Фото отсутствует</span>
</div>
<div className="flex-1 flex flex-col justify-between py-0.5">
<div>
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Коммерция</span>
<span className="text-[10px] text-slate-400">Лот #M-220</span>
</div>
<h3 className="text-base font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Подвальное помещение, склад</h3>
</div>
<div className="text-right">
<div className="flex items-center gap-1.5 justify-end text-slate-400 mb-0.5">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="14"></span>
<span className="text-xs font-medium">Уточняется</span>
</div>
</div>
</div>
<p className="text-sm text-slate-500 mt-1">Москва, ул. Профсоюзная</p>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-center gap-6">
<div>
<div className="text-[10px] text-slate-400 uppercase">Цена</div>
<div className="text-lg font-semibold text-slate-900">4 200 000 ₽</div>
</div>
<div className="hidden sm:block">
<div className="text-[10px] text-slate-400 uppercase">Площадь</div>
<div className="text-sm font-medium text-slate-700">82 м²</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition">Запросить инфо</button>
</div>
</div>
</div>
</div>

<div className="py-4 text-center">
<button className="text-sm text-slate-500 font-medium hover:text-slate-900 transition flex items-center justify-center gap-2 mx-auto">
<span className="iconify" data-icon="lucide:loader-2" data-width="16"></span>
                            Показать еще 158 объектов
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white mt-12 py-12">
<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-mono font-bold text-xs">IT</span>
</div>
<span className="font-semibold text-slate-900 text-sm">InvestTorg</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                        Агрегатор инвестиционных объектов недвижимости с торгов по банкротству и муниципального имущества. Мы предоставляем аналитику, но не являемся организатором торгов.
                    </p>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-3">Контакты</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900" href="#">Telegram канал</a></li>
<li><a className="hover:text-slate-900" href="#">WhatsApp Support</a></li>
<li>+7 (495) 000-00-00</li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-slate-900 mb-3">Правовая информация</h5>
<p className="text-[10px] text-slate-400 leading-relaxed">
                        Информация носит справочный характер и не является публичной офертой. Данные получены из открытых источников и Excel-выгрузок. Сроки и условия могут быть изменены организатором.
                    </p>
</div>
</div>
</div>
</footer>


<div className="hidden fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4" id="leadModal">
<div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Подобрать объект</h3>
<p className="text-sm text-slate-500 mb-4">Наши эксперты проанализируют 668 лотов под ваш запрос.</p>
<form className="space-y-3">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-slate-900 outline-none" placeholder="Ваше имя" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-slate-900 outline-none" placeholder="Телефон / Telegram" type="text"/>
<div className="grid grid-cols-2 gap-3">
<select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-500 outline-none">
<option>Цель: Инвестиции</option>
<option>Цель: Для себя</option>
</select>
<select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-500 outline-none">
<option>Бюджет: до 10м</option>
<option>10м - 50м</option>
<option>50м+</option>
</select>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-800 transition mt-2" type="button">Отправить заявку</button>
<p className="text-[10px] text-slate-400 text-center mt-2">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
</form>
</div>
</div>

    </>
  );
}
