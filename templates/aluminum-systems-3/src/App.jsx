import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function router(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('page-enter');
            });

            // Show target page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('page-enter');
                window.scrollTo(0, 0);
            }
        }

        function toggleMobile() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Init default page
        document.addEventListener('DOMContentLoaded', () => {
            router('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 cursor-pointer" onclick="router('home')">
<span className="text-xl font-bold tracking-tighter text-zinc-900 uppercase">Formex</span>
</div>

<nav className="hidden lg:flex gap-1">
<button className="nav-btn px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all" onclick="router('products')">Продукция</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all" onclick="router('solutions')">Решения</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all" onclick="router('production')">Производство</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all" onclick="router('projects')">Проекты</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all" onclick="router('partners')">Партнерам</button>
<button className="nav-btn px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all" onclick="router('contacts')">Контакты</button>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="tel:+996773411114">+996 (773) 41 11 14</a>
<button className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-all" onclick="router('contacts')">
                        Оставить заявку
                    </button>
</div>

<button className="lg:hidden p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify w-6 h-6 text-zinc-900" data-icon="lucide:menu"></span>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-white border-b border-zinc-200 absolute w-full left-0 top-16 px-4 py-4 shadow-lg" id="mobile-menu">
<div className="flex flex-col space-y-2">
<button className="text-left px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 rounded-md" onclick="router('products'); toggleMobile()">Продукция</button>
<button className="text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-md" onclick="router('solutions'); toggleMobile()">Решения</button>
<button className="text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-md" onclick="router('production'); toggleMobile()">Производство</button>
<button className="text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-md" onclick="router('projects'); toggleMobile()">Проекты</button>
<button className="text-left px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-md" onclick="router('contacts'); toggleMobile()">Контакты</button>
</div>
</div>
</header>

<main className="flex-grow pt-16">

<div className="page-section" id="page-home">
<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-zinc-500 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                        Инновации в алюминии
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 max-w-4xl mx-auto">
                        Архитектурные системы <br className="hidden sm:block"/>
<span className="text-zinc-400">будущего поколения</span>
</h1>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                        Проектирование и производство высокотехнологичных фасадных решений, окон и дверей. Создаем оболочки зданий, определяющие облик современных городов.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-8 py-3.5 text-sm font-medium text-white hover:bg-zinc-800 transition-all" onclick="router('products')">
                            Перейти в каталог
                            <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right"></span>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-8 py-3.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all" onclick="router('projects')">
                            Наши проекты
                        </button>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-zinc-100 pt-12">
<div className="group cursor-pointer" onclick="router('production')">
<span className="iconify w-8 h-8 text-zinc-900 mb-4 group-hover:scale-110 transition-transform" data-icon="lucide:factory"></span>
<h3 className="text-sm font-semibold text-zinc-900">Собственное производство</h3>
<p className="mt-2 text-sm text-zinc-500">Завод полного цикла с автоматизированными линиями сборки в Бишкеке.</p>
</div>
<div className="group cursor-pointer" onclick="router('solutions')">
<span className="iconify w-8 h-8 text-zinc-900 mb-4 group-hover:scale-110 transition-transform" data-icon="lucide:layers"></span>
<h3 className="text-sm font-semibold text-zinc-900">Инженерные решения</h3>
<p className="mt-2 text-sm text-zinc-500">Разработка узлов примыкания и расчет статических нагрузок для проектов.</p>
</div>
<div className="group cursor-pointer" onclick="router('partners')">
<span className="iconify w-8 h-8 text-zinc-900 mb-4 group-hover:scale-110 transition-transform" data-icon="lucide:users"></span>
<h3 className="text-sm font-semibold text-zinc-900">Дилерская сеть</h3>
<p className="mt-2 text-sm text-zinc-500">Выгодные условия сотрудничества для строительных компаний и архитекторов.</p>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-products">
<div className="bg-zinc-50 border-b border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Каталог продукции</h1>
<p className="mt-2 text-zinc-500 text-sm max-w-2xl">Алюминиевые профильные системы Formex для остекления жилых, коммерческих и промышленных объектов.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="text-xs font-semibold uppercase text-zinc-900 tracking-wider mb-4">Категории</h3>
<div className="space-y-2">
<label className="flex items-center space-x-3 cursor-pointer group">
<input checked="" className="form-checkbox h-4 w-4 text-zinc-900 border-zinc-300 rounded focus:ring-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Фасадные системы</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-zinc-900 border-zinc-300 rounded focus:ring-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Оконно-дверные (Теплые)</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-zinc-900 border-zinc-300 rounded focus:ring-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Оконно-дверные (Холодные)</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="form-checkbox h-4 w-4 text-zinc-900 border-zinc-300 rounded focus:ring-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Раздвижные системы</span>
</label>
</div>
</div>
<div>
<h3 className="text-xs font-semibold uppercase text-zinc-900 tracking-wider mb-4">Параметры</h3>
<div className="space-y-4">
<div>
<p className="text-[10px] text-zinc-500 mb-2">Монтажная глубина (мм)</p>
<input className="w-full accent-zinc-900 h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer" type="range"/>
<div className="flex justify-between text-[10px] text-zinc-400 mt-1"><span>40</span><span>120</span></div>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-xs">IMG: Profile Cross Section</div>
<div className="absolute top-2 left-2 px-2 py-1 bg-zinc-900 text-white text-[10px] font-medium rounded">FW 50+</div>
</div>
<div className="p-5">
<div className="text-xs text-zinc-500 mb-1">Фасадная серия</div>
<h3 className="font-semibold text-zinc-900">Formex FW-50 Therm</h3>
<div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Видимая ширина</span>
<span className="text-zinc-900 font-medium">50 мм</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Теплопроводность</span>
<span className="text-zinc-900 font-medium">Uf = 1.2 W/m²K</span>
</div>
</div>
<button className="w-full mt-4 py-2 border border-zinc-200 rounded text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Подробнее</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-xs">IMG: Window System</div>
<div className="absolute top-2 left-2 px-2 py-1 bg-white border border-zinc-200 text-zinc-900 text-[10px] font-medium rounded">W 72</div>
</div>
<div className="p-5">
<div className="text-xs text-zinc-500 mb-1">Оконная серия</div>
<h3 className="font-semibold text-zinc-900">Formex W-72 Premium</h3>
<div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Монтажная глубина</span>
<span className="text-zinc-900 font-medium">72 мм</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Стеклопакет</span>
<span className="text-zinc-900 font-medium">до 54 мм</span>
</div>
</div>
<button className="w-full mt-4 py-2 border border-zinc-200 rounded text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Подробнее</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white">
<div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-zinc-300 text-xs">IMG: Door System</div>
<div className="absolute top-2 left-2 px-2 py-1 bg-white border border-zinc-200 text-zinc-900 text-[10px] font-medium rounded">D 65</div>
</div>
<div className="p-5">
<div className="text-xs text-zinc-500 mb-1">Дверная серия</div>
<h3 className="font-semibold text-zinc-900">Formex D-65 Standard</h3>
<div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Тип открывания</span>
<span className="text-zinc-900 font-medium">Распашная</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-zinc-500">Применение</span>
<span className="text-zinc-900 font-medium">Коммерция</span>
</div>
</div>
<button className="w-full mt-4 py-2 border border-zinc-200 rounded text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">Подробнее</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-solutions">
<div className="bg-zinc-900 py-20 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">Application areas</span>
<h1 className="text-4xl font-semibold tracking-tight mb-6">Типовые решения</h1>
<p className="text-zinc-400 max-w-2xl leading-relaxed">
                        Мы разработали готовые конфигурации для различных типов зданий: от частных коттеджей до высотных бизнес-центров. Выберите категорию для просмотра деталей.
                    </p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

<div className="flex flex-col md:flex-row gap-12 items-center mb-24">
<div className="w-full md:w-1/2">
<div className="aspect-video bg-zinc-100 rounded-xl overflow-hidden shadow-sm relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50 flex items-center justify-center">
<span className="iconify w-16 h-16 text-zinc-300" data-icon="lucide:building-2"></span>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-2xl font-semibold text-zinc-900 mb-4">Высотное строительство</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                            Системы элементного фасада (Unitized facade), позволяющие производить монтаж без использования лесов. Высокая ветровая нагрузка, герметичность и скорость монтажа.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-zinc-700">
<span className="iconify w-4 h-4 text-blue-600 mr-2" data-icon="lucide:check"></span>
                                Структурное остекление
                            </li>
<li className="flex items-center text-sm text-zinc-700">
<span className="iconify w-4 h-4 text-blue-600 mr-2" data-icon="lucide:check"></span>
                                Интегрированные системы вентиляции
                            </li>
<li className="flex items-center text-sm text-zinc-700">
<span className="iconify w-4 h-4 text-blue-600 mr-2" data-icon="lucide:check"></span>
                                Пожаробезопасные отсечки
                            </li>
</ul>
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:opacity-70">Смотреть узлы DWG</button>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="aspect-video bg-zinc-100 rounded-xl overflow-hidden shadow-sm relative">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-200 to-zinc-50 flex items-center justify-center">
<span className="iconify w-16 h-16 text-zinc-300" data-icon="lucide:home"></span>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-2xl font-semibold text-zinc-900 mb-4">Частное домостроение</h2>
<p className="text-zinc-500 leading-relaxed mb-6">
                            Панорамные раздвижные системы (HS-portal), теплые алюминиевые окна и входные группы. Максимальное светопропускание и энергоэффективность для современного дома.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-zinc-700">
<span className="iconify w-4 h-4 text-blue-600 mr-2" data-icon="lucide:check"></span>
                                Подъемно-сдвижные двери до 3х метров
                            </li>
<li className="flex items-center text-sm text-zinc-700">
<span className="iconify w-4 h-4 text-blue-600 mr-2" data-icon="lucide:check"></span>
                                Скрытые петли и автоматика
                            </li>
<li className="flex items-center text-sm text-zinc-700">
<span className="iconify w-4 h-4 text-blue-600 mr-2" data-icon="lucide:check"></span>
                                Биометрические замки
                            </li>
</ul>
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:opacity-70">Скачать буклет для частных клиентов</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-production">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center max-w-3xl mx-auto mb-16">
<h1 className="text-3xl font-semibold text-zinc-900 mb-4">Производственный комплекс</h1>
<p className="text-zinc-500">
                        Наш завод в Бишкеке — это 2000 м² производственных площадей, оснащенных итальянским оборудованием FOM Industrie. Мы обеспечиваем полный контроль качества на каждом этапе.
                    </p>
</div>

<div className="relative border-l border-zinc-200 ml-4 md:ml-12 space-y-12">

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center">
<div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
</div>
<div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-medium text-zinc-900">1. Входной контроль и складирование</h3>
<span className="text-xs font-mono text-zinc-400">ZONE A</span>
</div>
<p className="text-sm text-zinc-500 mb-4">
                                Проверка геометрии профиля, качества покраски и комплектующих. Автоматизированная система хранения оптимизирует логистику.
                            </p>
<div className="h-40 bg-zinc-200 rounded flex items-center justify-center text-zinc-400 text-xs">Фото склада профиля</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-zinc-300"></div>
<div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-medium text-zinc-900">2. Высокоточная резка</h3>
<span className="text-xs font-mono text-zinc-400">ZONE B</span>
</div>
<p className="text-sm text-zinc-500 mb-4">
                                Двухголовочные пилы с ЧПУ обеспечивают точность реза до 0.1 мм. Распил под сложными углами для нестандартных конструкций.
                            </p>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-zinc-300"></div>
<div className="bg-zinc-50 rounded-lg p-6 border border-zinc-200">
<div className="flex items-start justify-between mb-4">
<h3 className="text-lg font-medium text-zinc-900">3. Сборка и опрессовка</h3>
<span className="text-xs font-mono text-zinc-400">ZONE C</span>
</div>
<p className="text-sm text-zinc-500 mb-4">
                                Соединение углов методом опрессовки с использованием двухкомпонентного клея. Установка уплотнителей и фурнитуры.
                            </p>
</div>
</div>
</div>

<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-100 pt-8">
<div className="p-4 bg-zinc-50 rounded text-center">
<div className="text-2xl font-bold text-zinc-900">150+</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Окон в смену</div>
</div>
<div className="p-4 bg-zinc-50 rounded text-center">
<div className="text-2xl font-bold text-zinc-900">48h</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Срочный заказ</div>
</div>
<div className="p-4 bg-zinc-50 rounded text-center">
<div className="text-2xl font-bold text-zinc-900">5 лет</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Гарантия</div>
</div>
<div className="p-4 bg-zinc-50 rounded text-center">
<div className="text-2xl font-bold text-zinc-900">100%</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">Контроль</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-projects">
<div className="bg-zinc-50 border-b border-zinc-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Реализованные проекты</h1>
<p className="mt-2 text-zinc-500 text-sm">Галерея объектов с применением систем Formex</p>
</div>
<div className="hidden sm:flex gap-2">
<button className="px-3 py-1 bg-zinc-900 text-white text-xs rounded-full">Все</button>
<button className="px-3 py-1 bg-white border border-zinc-200 text-zinc-600 text-xs rounded-full hover:bg-zinc-50">Коммерческие</button>
<button className="px-3 py-1 bg-white border border-zinc-200 text-zinc-600 text-xs rounded-full hover:bg-zinc-50">Жилые</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase">Бизнес-центр</div>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">ЖК "Авангард"</h3>
<p className="text-sm text-zinc-500 mt-1">г. Бишкек, Южная Магистраль</p>
<p className="text-xs text-zinc-400 mt-2">Система: FW-50, W-72</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase">Отель</div>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Sheraton Bishkek</h3>
<p className="text-sm text-zinc-500 mt-1">г. Бишкек, ул. Киевская</p>
<p className="text-xs text-zinc-400 mt-2">Система: Структурный фасад</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-zinc-200 rounded-lg overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase">Частная резиденция</div>
</div>
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Вилла "Орто-Сай"</h3>
<p className="text-sm text-zinc-500 mt-1">с. Орто-Сай</p>
<p className="text-xs text-zinc-400 mt-2">Система: HS-Portal, W-72</p>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-partners">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h1 className="text-3xl font-semibold text-zinc-900 mb-6">Сотрудничество</h1>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">
                             Мы строим сеть надежных партнеров по всему Кыргызстану и СНГ. Предлагаем не просто профиль, а готовую бизнес-модель по переработке алюминиевых систем.
                         </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<span className="iconify w-5 h-5" data-icon="lucide:briefcase"></span>
</div>
<div>
<h3 className="font-medium text-zinc-900">Дилерам</h3>
<p className="text-xs text-zinc-500 mt-1">Специальные цены на профиль, бесплатное ПО для расчета, обучение персонала и образцы уголков.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<span className="iconify w-5 h-5" data-icon="lucide:pen-tool"></span>
</div>
<div>
<h3 className="font-medium text-zinc-900">Архитекторам</h3>
<p className="text-xs text-zinc-500 mt-1">Библиотеки BIM/CAD узлов, консультации по статике, помощь в защите проектов.</p>
</div>
</div>
</div>
<div className="mt-10">
<button className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded hover:bg-zinc-800 transition-colors" onclick="router('contacts')">
                                 Скачать партнерский пакет
                             </button>
</div>
</div>
<div className="bg-zinc-50 rounded-xl border border-zinc-200 p-8 flex flex-col justify-center">
<h3 className="text-lg font-medium text-zinc-900 mb-6 text-center">География поставок</h3>

<div className="aspect-video bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-400 text-xs">
<span className="iconify w-8 h-8 mr-2" data-icon="lucide:map"></span>
                             Интерактивная карта партнеров
                         </div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-contacts">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<h1 className="text-3xl font-semibold text-zinc-900 mb-8">Контакты</h1>
<div className="space-y-8">
<div>
<h3 className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">Офис продаж</h3>
<p className="text-zinc-900 font-medium">г. Бишкек, ул. Чолпонатинская 2а</p>
<p className="text-sm text-zinc-500 mt-1">Пн-Пт: 09:00 - 18:00</p>
</div>
<div>
<h3 className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">Связь</h3>
<div className="space-y-2">
<a className="block text-xl font-medium text-zinc-900 hover:text-blue-600 transition-colors" href="tel:+996773411114">+996 (773) 41 11 14</a>
<a className="block text-sm text-zinc-600 hover:text-zinc-900" href="mailto:info@formex.kg">info@formex.kg</a>
</div>
</div>
<div>
<h3 className="text-xs font-semibold uppercase text-zinc-400 tracking-wider mb-2">Социальные сети</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram"></span>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:facebook"></span>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:message-circle"></span>
</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
<h2 className="text-lg font-semibold text-zinc-900 mb-6">Оставить заявку</h2>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Ваше имя</label>
<input className="block w-full rounded border-zinc-200 bg-white shadow-sm focus:border-zinc-900 focus:ring-0 sm:text-sm py-2 px-3" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Телефон</label>
<input className="block w-full rounded border-zinc-200 bg-white shadow-sm focus:border-zinc-900 focus:ring-0 sm:text-sm py-2 px-3" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Сообщение</label>
<textarea className="block w-full rounded border-zinc-200 bg-white shadow-sm focus:border-zinc-900 focus:ring-0 sm:text-sm py-2 px-3" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-medium py-3 rounded hover:bg-zinc-800 transition-colors shadow-sm" type="submit">
                                Отправить
                            </button>
</form>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-zinc-50 pt-12 pb-8 border-t border-zinc-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-bold tracking-tighter text-zinc-900 uppercase">Formex</span>
<p className="text-xs text-zinc-400 mt-1">© 2023 Formex Inc.</p>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<button className="hover:text-zinc-900" onclick="router('products')">Продукция</button>
<button className="hover:text-zinc-900" onclick="router('projects')">Проекты</button>
<button className="hover:text-zinc-900" onclick="router('contacts')">Контакты</button>
<a className="hover:text-zinc-900" href="#">Privacy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
