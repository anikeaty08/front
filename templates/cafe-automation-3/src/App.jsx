import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let currentSlide = 0;
        const totalSlides = 8;

        function init() {
            renderPagination();
            showSlide(0);
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'ArrowLeft') prevSlide();
            });
        }

        function renderPagination() {
            const container = document.getElementById('pagination');
            container.innerHTML = '';
            for(let i=0; i<totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = `h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? 'w-8 bg-indigo-500' : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'}`;
                dot.onclick = () => showSlide(i);
                container.appendChild(dot);
            }
        }

        function showSlide(index) {
            if (index < 0 || index >= totalSlides) return;
            
            // Hide current
            const currentEl = document.getElementById(`slide-${currentSlide}`);
            if(currentEl) {
                currentEl.classList.add('hidden');
                currentEl.classList.remove('flex', 'slide-enter');
            }

            // Update index
            currentSlide = index;

            // Show new
            const nextEl = document.getElementById(`slide-${currentSlide}`);
            if(nextEl) {
                nextEl.classList.remove('hidden');
                nextEl.classList.add('flex', 'slide-enter');
            }

            renderPagination();
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

<div className="relative w-full max-w-5xl aspect-video bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:m-8">

<div className="w-full h-12 flex items-center justify-between px-6 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md z-20">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/80"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
<span className="w-3 h-3 rounded-full bg-green-500/80"></span>
</div>
<div className="text-xs font-medium tracking-widest text-zinc-500 uppercase">Cafe Automation v1.0</div>
<div className="flex items-center gap-3 text-zinc-500">
<span className="iconify" data-icon="lucide:wifi" data-width="16"></span>
<span className="iconify" data-icon="lucide:battery-medium" data-width="16"></span>
</div>
</div>

<div className="relative flex-1 w-full h-full p-8 md:p-12 overflow-y-auto" id="slide-container">

<div className="slide hidden flex-col h-full justify-center" id="slide-0">
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Проект
                    </div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4 leading-tight">
                        Обоснование целесообразности <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">разработки системы</span>
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-3 text-white">
<span className="text-indigo-400" data-icon="lucide:target" data-width="20"></span>
<h3 className="text-lg font-medium tracking-tight">Цель</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Автоматизация оформления, передачи, отслеживания статусов и исполнения заказов между официантами и поварами.
                        </p>
</div>
<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-3 text-white">
<span className="text-cyan-400" data-icon="lucide:list-todo" data-width="20"></span>
<h3 className="text-lg font-medium tracking-tight">Задачи</h3>
</div>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-zinc-400">
<span className="iconify mt-1 text-zinc-600" data-icon="lucide:check" data-width="14"></span>
                                Прием заказов через моб. приложение
                            </li>
<li className="flex items-start gap-2 text-sm text-zinc-400">
<span className="iconify mt-1 text-zinc-600" data-icon="lucide:check" data-width="14"></span>
                                Сокращение времени передачи на кухню
                            </li>
<li className="flex items-start gap-2 text-sm text-zinc-400">
<span className="iconify mt-1 text-zinc-600" data-icon="lucide:check" data-width="14"></span>
                                Исключение ошибок ручного ввода
                            </li>
<li className="flex items-start gap-2 text-sm text-zinc-400">
<span className="iconify mt-1 text-zinc-600" data-icon="lucide:check" data-width="14"></span>
                                Централизованный электронный список
                            </li>
</ul>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full" id="slide-1">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Анализ предметной области</h2>
<div className="grid grid-cols-12 gap-6 h-full">

<div className="col-span-12 md:col-span-7 flex flex-col gap-4">
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-indigo-500">
<h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<span className="text-indigo-400" data-icon="lucide:box"></span> Объекты автоматизации
                            </h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-900/50 p-3 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Зона 1</div>
<div className="text-sm text-zinc-200">Кухня</div>
<div className="text-xs text-zinc-500 mt-1">Обработка, статусы</div>
</div>
<div className="bg-zinc-900/50 p-3 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Зона 2</div>
<div className="text-sm text-zinc-200">Зал для гостей</div>
<div className="text-xs text-zinc-500 mt-1">Оформление, передача</div>
</div>
</div>
</div>
<div className="glass-panel p-5 rounded-xl">
<h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<span className="text-indigo-400" data-icon="lucide:users"></span> Участники
                            </h3>
<div className="flex gap-2 flex-wrap">
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Официант</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Повар</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Администратор</span>
<span className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300 border border-zinc-700">Шеф-повар</span>
</div>
</div>
<div className="glass-panel p-5 rounded-xl border-l-4 border-l-red-500/50">
<h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<span className="text-red-400" data-icon="lucide:alert-triangle"></span> Проблемы
                            </h3>
<p className="text-sm text-zinc-400">Ручная передача заказов, ошибки, задержки, потеря информации.</p>
</div>
</div>

<div className="col-span-12 md:col-span-5 relative">
<div className="absolute inset-0 border border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center bg-zinc-900/30">
<span className="iconify text-zinc-600 mb-2" data-icon="lucide:layout-template" data-width="48"></span>
<span className="text-xs text-zinc-500 uppercase tracking-widest text-center px-4">Схема организационной<br/>структуры кафе «Бум»</span>
</div>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full" id="slide-2">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Моделирование бизнес-процессов</h2>
<div className="grid grid-cols-2 gap-6 h-full pb-8">

<div className="glass-panel rounded-2xl p-6 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:git-fork" data-width="100"></span>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:workflow" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white">IDEF0</h3>
</div>
<p className="text-sm text-zinc-400 mb-6">Декомпозиция процессов производства и обслуживания.</p>
<div className="mt-auto h-32 border border-zinc-800 bg-zinc-900 rounded-lg flex items-center justify-center">
<span className="text-xs text-zinc-600">Диаграмма IDEF0</span>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:git-pull-request" data-width="100"></span>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:network" data-width="18"></span>
</div>
<h3 className="text-lg font-medium text-white">IDEF3</h3>
</div>
<p className="text-sm text-zinc-400 mb-6">Процессы оплаты заказа и получения заказа.</p>
<div className="mt-auto h-32 border border-zinc-800 bg-zinc-900 rounded-lg flex items-center justify-center">
<span className="text-xs text-zinc-600">Диаграмма IDEF3</span>
</div>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full" id="slide-3">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium text-white tracking-tight">Архитектура приложения</h2>
<span className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-400 border border-zinc-700">Клиент-серверная</span>
</div>
<div className="flex flex-col md:flex-row gap-4 h-full items-center justify-center relative">

<div className="flex flex-col gap-4 w-full md:w-1/3 z-10">
<div className="glass-panel p-4 rounded-xl text-center border-b-4 border-b-green-500">
<span className="iconify mx-auto mb-2 text-green-400" data-icon="lucide:smartphone" data-width="24"></span>
<div className="font-medium text-white text-sm">Android App</div>
<div className="text-xs text-zinc-500">Mobile Client</div>
</div>
<div className="glass-panel p-4 rounded-xl text-center border-b-4 border-b-blue-500">
<span className="iconify mx-auto mb-2 text-blue-400" data-icon="lucide:monitor" data-width="24"></span>
<div className="font-medium text-white text-sm">Windows Desktop</div>
<div className="text-xs text-zinc-500">Admin Client</div>
</div>
</div>

<div className="hidden md:flex flex-col items-center justify-center w-32 h-full z-0 opacity-50">
<div className="relative w-full border-t border-dashed border-zinc-600">
<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-950 px-2 text-[10px] text-zinc-400">gRPC</span>
</div>
</div>

<div className="glass-panel w-full md:w-1/3 p-6 rounded-2xl border border-zinc-700 z-10">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
<span className="iconify text-indigo-400" data-icon="lucide:server" data-width="20"></span>
<span className="text-sm font-medium text-white">Backend</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between bg-zinc-900/80 p-3 rounded-lg">
<span className="text-xs text-zinc-300">Flask REST API</span>
<span className="text-[10px] font-mono text-zinc-500">:8080</span>
</div>
<div className="flex items-center justify-between bg-zinc-900/80 p-3 rounded-lg">
<span className="text-xs text-zinc-300">gRPC Service</span>
<span className="text-[10px] font-mono text-zinc-500">:50051</span>
</div>
<div className="flex items-center gap-2 mt-4 pt-2 border-t border-zinc-800">
<span className="iconify text-yellow-500" data-icon="lucide:database" data-width="16"></span>
<span className="text-xs text-zinc-300">SQLite (cafe.db)</span>
</div>
</div>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full" id="slide-4">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Диаграмма классов</h2>

<div className="relative w-full h-full p-4 border border-zinc-800 rounded-xl bg-zinc-900/30 flex items-center justify-center gap-8">

<div className="w-64 border border-zinc-700 bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
<div className="bg-zinc-800 px-3 py-2 text-xs font-semibold text-center border-b border-zinc-700 text-indigo-300">
                            ServerApplication
                        </div>
<div className="p-3 space-y-2">
<div className="text-[10px] text-zinc-400 font-mono">+ flask_app: Flask</div>
<div className="text-[10px] text-zinc-400 font-mono">+ grpc_server: Server</div>
<div className="text-[10px] text-zinc-400 font-mono">+ db: SQLAlchemy</div>
<div className="border-t border-zinc-800 my-1"></div>
<div className="text-[10px] text-zinc-400 font-mono italic">run_rest_api(port=8080)</div>
<div className="text-[10px] text-zinc-400 font-mono italic">run_grpc(port=50051)</div>
</div>
</div>
<div className="w-8 h-px bg-zinc-600"></div>

<div className="w-48 border border-zinc-700 bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
<div className="bg-zinc-800 px-3 py-2 text-xs font-semibold text-center border-b border-zinc-700 text-yellow-300">
                            DatabaseModel
                        </div>
<div className="p-3 space-y-2">
<div className="text-[10px] text-zinc-400 font-mono">cafe.db</div>
<div className="border-t border-zinc-800 my-1"></div>
<div className="text-[10px] text-zinc-400 font-mono">Orders</div>
<div className="text-[10px] text-zinc-400 font-mono">Dishes</div>
<div className="text-[10px] text-zinc-400 font-mono">Users</div>
</div>
</div>
<div className="w-8 h-px bg-zinc-600"></div>

<div className="w-48 border border-zinc-700 bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
<div className="bg-zinc-800 px-3 py-2 text-xs font-semibold text-center border-b border-zinc-700 text-green-300">
                            ClientInterface
                        </div>
<div className="p-3 space-y-2">
<div className="text-[10px] text-zinc-400 font-mono">- stub: GrpcStub</div>
<div className="border-t border-zinc-800 my-1"></div>
<div className="text-[10px] text-zinc-400 font-mono italic">connect()</div>
<div className="text-[10px] text-zinc-400 font-mono italic">send_order()</div>
</div>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full" id="slide-5">
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">Оценка конкурентоспособности</h2>
<div className="flex flex-col md:flex-row gap-8 h-full">

<div className="w-full md:w-1/2 glass-panel rounded-2xl p-6 flex flex-col justify-end relative">
<div className="absolute top-6 left-6 text-sm text-zinc-400">Коэффициент тех. уровня (Ak)</div>
<div className="flex items-end justify-center gap-8 h-48 w-full px-8">

<div className="w-24 flex flex-col items-center gap-2 group">
<div className="text-xs text-zinc-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">1.0</div>
<div className="w-full bg-zinc-700 rounded-t-lg relative h-32 opacity-50"></div>
<div className="text-xs font-medium text-zinc-400">R-Keeper</div>
</div>

<div className="w-24 flex flex-col items-center gap-2 group">
<div className="text-xs text-indigo-300 mb-1 font-bold">1.36</div>
<div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg relative h-44 shadow-[0_0_20px_rgba(99,102,241,0.3)]"></div>
<div className="text-xs font-medium text-indigo-400">Наша система</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
<h3 className="text-lg font-medium text-white mb-2">Преимущества</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:layout" data-width="16"></span>
</div>
<span className="text-sm text-zinc-300">Удобство интерфейса</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
</div>
<span className="text-sm text-zinc-300">Скорость работы</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<span className="iconify" data-icon="lucide:coins" data-width="16"></span>
</div>
<span className="text-sm text-zinc-300">Соотношение цена/качество</span>
</div>
</div>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full" id="slide-6">
<div className="flex justify-between items-start mb-8">
<h2 className="text-2xl font-medium text-white tracking-tight">Планирование работ</h2>
<div className="text-right">
<div className="text-xs text-zinc-500 uppercase tracking-widest">Трудоемкость</div>
<div className="text-2xl font-semibold text-indigo-400">52 часа</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-widest mb-4">Команда</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">PM</div>
<span className="text-sm text-zinc-200">Руководитель</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">SA</div>
<span className="text-sm text-zinc-200">Проектировщик</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">DV</div>
<span className="text-sm text-zinc-200">Программист</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">QA</div>
<span className="text-sm text-zinc-200">Внедренец</span>
</div>
</div>
</div>

<div className="relative pl-6 border-l border-zinc-800 space-y-8 py-2">
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-zinc-950"></span>
<h4 className="text-sm font-medium text-white">1. Подготовка и анализ</h4>
<p className="text-xs text-zinc-500 mt-1">Сбор требований</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-950"></span>
<h4 className="text-sm font-medium text-white">2. Проектирование</h4>
<p className="text-xs text-zinc-500 mt-1">Техническое проектирование</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-950"></span>
<h4 className="text-sm font-medium text-white">3. Программирование</h4>
<p className="text-xs text-zinc-500 mt-1">Разработка и тестирование</p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-950"></span>
<h4 className="text-sm font-medium text-white">4. Документация</h4>
<p className="text-xs text-zinc-500 mt-1">Оформление отчетов</p>
</div>
</div>
</div>
</div>

<div className="slide hidden flex-col h-full items-center justify-center text-center" id="slide-7">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl absolute opacity-20"></div>
<h1 className="text-5xl font-medium text-white tracking-tight mb-4 relative z-10">Спасибо за внимание</h1>
<p className="text-zinc-500 text-sm">Готовы ответить на ваши вопросы</p>
</div>
</div>

<div className="w-full h-16 border-t border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-8 z-20">
<button className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white" onclick="prevSlide()">
<span className="iconify" data-icon="lucide:chevron-left" data-width="24"></span>
</button>

<div className="flex gap-2" id="pagination">

</div>
<button className="p-2 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white" onclick="nextSlide()">
<span className="iconify" data-icon="lucide:chevron-right" data-width="24"></span>
</button>
</div>
</div>

<div className="text-zinc-600 text-xs mt-4 font-mono">
        press arrow keys to navigate
    </div>


    </>
  );
}
