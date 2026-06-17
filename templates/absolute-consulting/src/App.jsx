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



        lucide.createIcons();

        // Single Page Router
        function showPage(pageId, anchorId = null) {
            document.getElementById('page-home').classList.add('hidden-section');
            document.getElementById('page-services').classList.add('hidden-section');
            
            const targetPage = document.getElementById('page-' + pageId);
            if(targetPage) {
                targetPage.classList.remove('hidden-section');
                targetPage.classList.add('fade-in');
            }

            if (anchorId) {
                setTimeout(() => {
                    const el = document.getElementById(anchorId);
                    if(el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
                }, 50);
            } else {
                window.scrollTo(0, 0);
            }
        }

        // Slider Logic
        function scrollSlider(direction) {
            const container = document.getElementById('matrix-slider');
            // Scroll exact width of container to match snap point (1 click = 1 slide)
            const scrollAmount = container.clientWidth; 
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight uppercase flex items-center gap-2 text-white cursor-pointer group" href="#" onclick="showPage('home'); return false;">
<div className="w-4 h-4 border border-white/30 bg-white/5 relative group-hover:border-white transition-colors">
<div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white"></div>
</div>
                Absolute Consulting
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-400">
<button className="hover:text-white transition-colors duration-200 uppercase" onclick="showPage('home', 'context')">Контекст</button>
<button className="hover:text-white transition-colors duration-200 uppercase" onclick="showPage('home', 'method')">Метод</button>
<button className="hover:text-white transition-colors duration-200 uppercase" onclick="showPage('home', 'neuro-system')">Система</button>
<button className="hover:text-white transition-colors duration-200 uppercase" onclick="showPage('home', 'services-matrix')">Матрица</button>
</div>
<a className="hidden sm:flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-medium hover:bg-zinc-200 transition-colors" href="#diagnostics">
<span>Заказать Диагностику</span>
<i data-lucide="arrow-right" height="14" strokeWidth="1.5" width="14"></i>
</a>
</div>
</nav>

<main className="flex-grow pt-16" id="page-home">

<header className="relative pt-24 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-grid pointer-events-none opacity-40"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 fade-in">
<div className="flex flex-wrap gap-4 mb-8">
<div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
<i className="text-white" data-lucide="check" height="12" strokeWidth="1.5" width="12"></i>
<span className="text-xs text-zinc-300">Не очередная реформа</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
<i className="text-white" data-lucide="check" height="12" strokeWidth="1.5" width="12"></i>
<span className="text-xs text-zinc-300">Результат в метриках</span>
</div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 max-w-4xl">
                    Мы возвращаем <br/>
<span className="text-zinc-500">вашей компании равновесие:</span> <br/>
                    от хаоса к росту.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-10">
                    Когда организация теряет баланс между идеей и исполнением, она начинает рассыпаться. Мы восстанавливаем внутреннюю логику системы.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="inline-flex items-center justify-center gap-2 bg-white text-black h-12 px-8 text-sm font-medium hover:bg-zinc-200 transition-all border border-transparent" href="#diagnostics">
                        Начать с диагностики
                    </a>
</div>
</div>
</header>

<section className="py-24 border-b border-white/10 bg-[#060606]" id="context">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="sticky top-24">
<h2 className="text-xs font-mono-num text-zinc-500 mb-2 uppercase tracking-widest">Контекст // 01</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                            Закон возрастания <br/>энтропии.
                        </h3>
<p className="text-zinc-400 font-light leading-relaxed mb-10 text-lg">
                            Любая сложная система стремится к хаосу, если не прикладывать упорядочивающую энергию. В бизнесе это проявляется как размытие смыслов, утеря фокуса и бюрократизация.
                        </p>
<div className="flex items-center gap-4 pt-2">
<span className="font-mono text-zinc-500 text-sm tracking-widest">S = k * ln Ω</span>
<div className="w-8 h-px bg-zinc-800"></div>
<span className="text-xs text-zinc-600 uppercase tracking-wide">Термодинамика бизнеса</span>
</div>
</div>
<div className="space-y-4">

<div className="p-8 border border-white/10 bg-[#090909] group hover:border-white/20 transition-colors">
<div className="w-8 h-8 flex items-center justify-center bg-red-500/10 rounded mb-4 text-red-400">
<i data-lucide="activity" height="18" width="18"></i>
</div>
<h4 className="text-white font-medium mb-2">Симптом 1: Инерция</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Компания движется по старой траектории, игнорируя изменения рынка. Решения принимаются долго, ответственность размыта.</p>
</div>

<div className="p-8 border border-white/10 bg-[#090909] group hover:border-white/20 transition-colors">
<div className="w-8 h-8 flex items-center justify-center bg-red-500/10 rounded mb-4 text-red-400">
<i data-lucide="split" height="18" width="18"></i>
</div>
<h4 className="text-white font-medium mb-2">Симптом 2: Рассинхрон</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Маркетинг обещает одно, продажи продают другое, а продукт делает третье. Клиент чувствует фальш.</p>
</div>

<div className="p-8 border border-white/10 bg-[#090909] group hover:border-white/20 transition-colors">
<div className="w-8 h-8 flex items-center justify-center bg-red-500/10 rounded mb-4 text-red-400">
<i data-lucide="ghost" height="18" width="18"></i>
</div>
<h4 className="text-white font-medium mb-2">Симптом 3: Потеря "Я"</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Собственник перестает узнавать свою компанию. Культура превращается в набор формальных лозунгов.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-[#050505]" id="method">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 fade-in">
<h2 className="text-xs font-mono-num text-zinc-500 mb-4 uppercase tracking-widest">Метод // 02</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Абсолютная Синхронизация</h3>
<p className="text-lg text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
                     Мы не чиним отдельные детали. Мы восстанавливаем вертикальную связь между замыслом собственника и действиями линейного сотрудника.
                   </p>
</div>

<div className="border border-white/10 bg-[#080808] fade-in" style={{animationDelay: '0.1s'}}>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-8 md:p-10 relative group hover:bg-white/[0.02] transition-colors">
<div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-mono-num pointer-events-none group-hover:text-white/[0.05] transition-colors">01</div>
<div className="mb-6 text-white"><i data-lucide="brain-circuit" height="32" strokeWidth="1.5" width="32"></i></div>
<h4 className="text-xl text-white font-medium mb-3">Смысл (Mind)</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Кристаллизация видения. Оформление интуиции собственника в четкую стратегию.</p>
</div>

<div className="p-8 md:p-10 relative group hover:bg-white/[0.02] transition-colors">
<div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-mono-num pointer-events-none group-hover:text-white/[0.05] transition-colors">02</div>
<div className="mb-6 text-white"><i data-lucide="box-select" height="32" strokeWidth="1.5" width="32"></i></div>
<h4 className="text-xl text-white font-medium mb-3">Форма (Body)</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Упаковка смыслов. Бренд, идентичность, визуальный язык и Tone-of-Voice.</p>
</div>

<div className="p-8 md:p-10 relative group hover:bg-white/[0.02] transition-colors">
<div className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-mono-num pointer-events-none group-hover:text-white/[0.05] transition-colors">03</div>
<div className="mb-6 text-white"><i data-lucide="zap" height="32" strokeWidth="1.5" width="32"></i></div>
<h4 className="text-xl text-white font-medium mb-3">Действие (Action)</h4>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Внедрение в процессы. Регламенты, скрипты, обучение команд и автоматизация.</p>
</div>
</div>
</div>

<div className="mt-8 border border-white/10 bg-[#080808] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 text-black">
<i data-lucide="sigma" height="24" strokeWidth="2.5" width="24"></i>
</div>
<div>
<h4 className="text-white font-medium text-lg">Синергетический эффект</h4>
<p className="text-zinc-500 text-sm mt-1 font-mono-num">Когда 1 + 1 = 3</p>
</div>
</div>
<div className="md:text-right w-full md:w-1/2">
<p className="text-zinc-400 font-light leading-relaxed">Целостная система работает эффективнее суммы её разрозненных частей.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-[#050505] relative overflow-hidden" id="neuro-system">
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-xs font-mono-num text-zinc-500 mb-2 uppercase tracking-widest">Система // 03</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Нейросеть услуг
                    </h3>
<p className="text-lg text-zinc-400 font-light max-w-2xl leading-relaxed">
                        Мы не продаём разрозненные услуги. Мы работаем как целостная нервная система бизнеса. Каждая услуга — это нейрон, каждый блок — функциональная зона.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/10 bg-[#080808] p-6 relative group hover:border-white/20 transition-all duration-300">
<div className="absolute top-4 right-4 opacity-20"><i data-lucide="cpu" height="24" width="24"></i></div>
<div className="text-xs font-mono-num text-emerald-400 uppercase tracking-widest mb-3">Левое полушарие</div>
<h4 className="text-xl text-white font-medium mb-2">Производство</h4>
<p className="text-xs text-zinc-500 mb-4 font-light">Логика · Структура · Результат</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<div className="space-y-2 text-sm text-zinc-400">
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500/50 rounded-full"></div>Фокус: как создается ценность</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500/50 rounded-full"></div>Роль: инженерная точность</div>
</div>
</div>

<div className="border border-white/10 bg-[#080808] p-6 relative group hover:border-white/20 transition-all duration-300 transform md:-translate-y-4 shadow-2xl shadow-black">
<div className="absolute top-4 right-4 opacity-20"><i data-lucide="network" height="24" width="24"></i></div>
<div className="text-xs font-mono-num text-purple-400 uppercase tracking-widest mb-3">Ядро системы</div>
<h4 className="text-xl text-white font-medium mb-2">Управление</h4>
<p className="text-xs text-zinc-500 mb-4 font-light">Синхронизация · Ритм · Контроль</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<div className="space-y-2 text-sm text-zinc-400">
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500/50 rounded-full"></div>Фокус: как всё работает вместе</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500/50 rounded-full"></div>Роль: скорость реакции</div>
</div>
</div>

<div className="border border-white/10 bg-[#080808] p-6 relative group hover:border-white/20 transition-all duration-300">
<div className="absolute top-4 right-4 opacity-20"><i data-lucide="lightbulb" height="24" width="24"></i></div>
<div className="text-xs font-mono-num text-blue-400 uppercase tracking-widest mb-3">Правое полушарие</div>
<h4 className="text-xl text-white font-medium mb-2">Маркетинг</h4>
<p className="text-xs text-zinc-500 mb-4 font-light">Образ · Смысл · Внимание</p>
<div className="h-px w-full bg-white/10 mb-4"></div>
<div className="space-y-2 text-sm text-zinc-400">
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500/50 rounded-full"></div>Фокус: как считывается ценность</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500/50 rounded-full"></div>Роль: эмоция и вовлечение</div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-zinc-500">
<div>
<strong className="text-zinc-300 block mb-1">Материал</strong>
                        Сырье системы: с чем мы работаем (смыслы, люди, данные).
                    </div>
<div>
<strong className="text-zinc-300 block mb-1">Движение</strong>
                        Динамика: как запустить поток и устранить застои.
                    </div>
<div>
<strong className="text-zinc-300 block mb-1">Суть</strong>
                        Ядро: зачем это существует (стратегия, идентичность).
                    </div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-[#080808] relative overflow-hidden" id="services-matrix">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
<div>
<h2 className="text-xs font-mono-num text-zinc-500 mb-2 uppercase tracking-widest">Матрица Услуг // 04</h2>
<h3 className="text-3xl font-medium tracking-tight text-white">Архитектура Решений</h3>
</div>
<div className="flex items-center gap-4 mt-6 md:mt-0">

<div className="hidden md:flex gap-4 text-[10px] text-zinc-500 font-mono-num uppercase tracking-wide mr-4">
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>1 нед: 150k</span>
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>2 нед: 250k</span>
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>1 мес: 400k</span>
</div>

<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="scrollSlider(-1)">
<i data-lucide="arrow-left" height="14" width="14"></i>
</button>
<button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" onclick="scrollSlider(1)">
<i data-lucide="arrow-right" height="14" width="14"></i>
</button>
</div>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar w-full" id="matrix-slider">

<div className="min-w-full snap-start shrink-0 pr-0 md:pr-1">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-blue-500/10 rounded text-blue-400"><i data-lucide="megaphone" height="16" width="16"></i></div>
<h3 className="text-xl text-white font-medium">Маркетинг</h3>
<span className="ml-auto text-xs text-zinc-600 font-mono-num">Правое полушарие</span>
</div>
<div className="border border-white/10 bg-[#050505]">

<div className="hidden md:grid grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10 bg-white/[0.02]">
<div className="p-3 border-r border-white/10"></div>
<div className="p-3 border-r border-white/10 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Материал</div>
<div className="p-3 border-r border-white/10 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Движение</div>
<div className="p-3 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Суть</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Внедрение</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">400k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">Ai-Клиент-fit</div>
<p className="text-[10px] text-zinc-500 leading-tight">Процессы сотворчества с ИИ.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">Tone-of-voice</div>
<p className="text-[10px] text-zinc-500 leading-tight">Язык бренда как основа культуры.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">ROMI-подход</div>
<p className="text-[10px] text-zinc-500 leading-tight">Маркетинг нацеленный на ROI.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Продакшн</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">250k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">UX/AI-дизайн</div>
<p className="text-[10px] text-zinc-500 leading-tight">Дизайн на когнитивных принципах.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">VisionCore</div>
<p className="text-[10px] text-zinc-500 leading-tight">Целостный образ бренда.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">Маркет-фит</div>
<p className="text-[10px] text-zinc-500 leading-tight">Прорывная стратегия.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr]">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Консалтинг</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">150k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">Сторимайнинг</div>
<p className="text-[10px] text-zinc-500 leading-tight">Поиск внутренних смыслов.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">Visual-Форсайт</div>
<p className="text-[10px] text-zinc-500 leading-tight">Образ желаемого будущего.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-blue-200">Human code</div>
<p className="text-[10px] text-zinc-500 leading-tight">Лестница к сердцу клиента.</p>
</div>
</div>
</div>
</div>

<div className="min-w-full snap-start shrink-0 pr-0 md:pr-1">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-purple-500/10 rounded text-purple-400"><i data-lucide="briefcase" height="16" width="16"></i></div>
<h3 className="text-xl text-white font-medium">Управление</h3>
<span className="ml-auto text-xs text-zinc-600 font-mono-num">Ядро системы</span>
</div>
<div className="border border-white/10 bg-[#050505]">

<div className="hidden md:grid grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10 bg-white/[0.02]">
<div className="p-3 border-r border-white/10"></div>
<div className="p-3 border-r border-white/10 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Материал</div>
<div className="p-3 border-r border-white/10 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Движение</div>
<div className="p-3 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Суть</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Внедрение</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">400k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Монополия</div>
<p className="text-[10px] text-zinc-500 leading-tight">Управление по фин. целям.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Скайнет</div>
<p className="text-[10px] text-zinc-500 leading-tight">Интранет и база знаний.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Just-in-time</div>
<p className="text-[10px] text-zinc-500 leading-tight">Процессный подход.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Продакшн</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">250k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Фин-Форсайт</div>
<p className="text-[10px] text-zinc-500 leading-tight">Фин. модель бизнеса.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Team play</div>
<p className="text-[10px] text-zinc-500 leading-tight">Система мотивации.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">VR-бизнесклон</div>
<p className="text-[10px] text-zinc-500 leading-tight">Модель бизнес-процессов.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr]">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Консалтинг</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">150k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Кладоискатель</div>
<p className="text-[10px] text-zinc-500 leading-tight">Точки роста в финансах.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">СтратРазбор</div>
<p className="text-[10px] text-zinc-500 leading-tight">Поиск узких мест.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-purple-300">Траблшутинг</div>
<p className="text-[10px] text-zinc-500 leading-tight">Преодоление барьеров.</p>
</div>
</div>
</div>
</div>

<div className="min-w-full snap-start shrink-0">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-emerald-500/10 rounded text-emerald-400"><i data-lucide="factory" height="16" width="16"></i></div>
<h3 className="text-xl text-white font-medium">Производство</h3>
<span className="ml-auto text-xs text-zinc-600 font-mono-num">Левое полушарие</span>
</div>
<div className="border border-white/10 bg-[#050505]">

<div className="hidden md:grid grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10 bg-white/[0.02]">
<div className="p-3 border-r border-white/10"></div>
<div className="p-3 border-r border-white/10 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Материал</div>
<div className="p-3 border-r border-white/10 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Движение</div>
<div className="p-3 text-[10px] font-bold uppercase tracking-widest text-center text-zinc-500">Суть</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Внедрение</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">400k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">Lean 6 sigma</div>
<p className="text-[10px] text-zinc-500 leading-tight">Минимизация затрат.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">Cust-dev</div>
<p className="text-[10px] text-zinc-500 leading-tight">Развитие продукта.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">РеинжинИИринг</div>
<p className="text-[10px] text-zinc-500 leading-tight">Роботизация процессов.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr] border-b border-white/10">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Продакшн</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">250k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">AI-warehouse</div>
<p className="text-[10px] text-zinc-500 leading-tight">Учет ресурсов с ИИ.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">РеПродакшн</div>
<p className="text-[10px] text-zinc-500 leading-tight">Стратегия улучшения.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">ВикИИпедия</div>
<p className="text-[10px] text-zinc-500 leading-tight">База знаний с ИИ.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_1fr]">
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col justify-between items-center md:justify-center md:items-start bg-[#0a0a0a]">
<span className="text-white text-xs font-bold uppercase tracking-wide">Консалтинг</span>
<span className="text-[10px] font-mono-num text-zinc-500 md:mt-1">150k</span>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">Ресурс-Аудит</div>
<p className="text-[10px] text-zinc-500 leading-tight">Инвентаризация.</p>
</div>
<div className="p-4 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.01] hover:bg-white/5 transition-colors cursor-pointer group">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">УТП-драйвер</div>
<p className="text-[10px] text-zinc-500 leading-tight">Усиление преимуществ.</p>
</div>
<div className="p-4 hover:bg-white/5 transition-colors cursor-pointer group bg-white/[0.02]">
<div className="text-white text-sm font-medium mb-1 group-hover:text-emerald-300">Unit-экономика</div>
<p className="text-[10px] text-zinc-500 leading-tight">Расчет прибыли.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/10 bg-[#060606]" id="cases">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-xs font-mono-num text-zinc-500 mb-8 uppercase tracking-widest">Результаты // 05</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-6 border border-white/10 bg-white/[0.02]">
<div className="text-xs text-zinc-500 mb-2">Производство</div>
<div className="text-xl text-white font-medium mb-2">Интеграция финансов</div>
<p className="text-sm text-zinc-400">Переход от формального учета к инструменту управления.</p>
</div>
<div className="p-6 border border-white/10 bg-white/[0.02]">
<div className="text-xs text-zinc-500 mb-2">Ритейл</div>
<div className="text-xl text-white font-medium mb-2">Репозиционирование</div>
<p className="text-sm text-zinc-400">Рост LTV за счет четкого ценностного предложения.</p>
</div>
</div>
</div>
</section>
</main>

<main className="hidden-section flex-grow pt-16" id="page-services">

<header className="py-24 border-b border-white/10 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col gap-4">
<a className="text-xs text-zinc-500 hover:text-white flex items-center gap-1 transition-colors w-fit cursor-pointer" href="#" onclick="showPage('home'); return false;">
<i data-lucide="arrow-left" height="12" width="12"></i> Назад на главную
                    </a>
<h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-white">
                        Каталог Решений
                    </h1>
<p className="text-lg text-zinc-400 font-light max-w-2xl">
                        Детальное описание методологии и инструментов по направлению «Маркетинг».
                    </p>
</div>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="lg:col-span-3">
<div className="sticky top-24 space-y-1">
<div className="text-xs font-mono-num text-zinc-500 uppercase tracking-widest mb-4 pl-3">Навигация</div>
<div className="text-xs text-white/50 px-3 py-2 mt-4 font-medium uppercase">Маркетинг</div>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 border-l border-transparent hover:border-white/30 transition-all" href="#storymining">Сторимайнинг</a>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 border-l border-transparent hover:border-white/30 transition-all" href="#ux-ai">UX / AI-дизайн</a>
<a className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 border-l border-transparent hover:border-white/30 transition-all" href="#ai-client-fit">AI-Клиент-Fit</a>
<div className="h-px bg-white/10 my-4 mx-3"></div>
<div className="text-xs text-white/50 px-3 py-2 font-medium uppercase">Архив</div>
<a className="block px-3 py-2 text-sm text-zinc-500 hover:text-white hover:bg-white/5 border-l border-transparent transition-all" href="#visual-foresight">Visual-форсайт</a>
<a className="block px-3 py-2 text-sm text-zinc-500 hover:text-white hover:bg-white/5 border-l border-transparent transition-all" href="#vision-core">Vision-Core</a>
</div>
</aside>

<div className="lg:col-span-9 space-y-24">

<section className="scroll-mt-32" id="storymining">
<div className="border border-white/10 bg-[#080808] p-8 md:p-12 overflow-hidden relative">
<div className="absolute right-0 top-0 text-[120px] leading-none font-bold text-white/[0.02] font-mono-num select-none pointer-events-none">01</div>
<div className="mb-8">
<div className="inline-flex items-center gap-2 px-2 py-1 border border-white/20 rounded text-[10px] uppercase tracking-wider text-zinc-300 mb-4 bg-white/5">Консультирование</div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Сторимайнинг</h2>
<p className="text-lg text-zinc-400 leading-relaxed font-light">
                                    Мы не придумываем истории. Мы добываем уже существующее золото — реальные смыслы, события и опыт внутри вашей компании. От скрытых историй к контенту, который усиливает бренд.
                                </p>
</div>
</div>
</section>
</div>
</div>
</div>
</main>

<section className="py-32 relative bg-[#020202] border-t border-white/10" id="diagnostics">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                Ваш первый шаг к <br/>управляемому росту.
            </h2>
<p className="text-zinc-400 font-light mb-10 text-lg">
                Не ждите, пока цена дисбаланса станет непомерной. Мы определим точки потери энергии за 20 минут.
            </p>
<form className="max-w-md mx-auto space-y-4 mb-8">
<div className="flex flex-col sm:flex-row gap-2">
<input className="bg-[#050505] border border-white/20 text-white px-4 py-3 w-full text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600" placeholder="work@email.com" type="email"/>
<button className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap" type="submit">
                        Записаться
                    </button>
</div>
<div className="flex items-start gap-2 justify-center">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none border border-white/20 bg-transparent checked:bg-white checked:border-white transition-colors cursor-pointer" id="consent" type="checkbox"/>
<i className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none top-0.5 left-0.5" data-lucide="check" height="12" width="12"></i>
</div>
<label className="text-xs text-zinc-500 text-left select-none cursor-pointer" htmlFor="consent">
                        Я согласен с политикой конфиденциальности.
                    </label>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600">
                    © 2025 Absolute Consulting. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><i data-lucide="linkedin" height="16" width="16"></i></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><i data-lucide="twitter" height="16" width="16"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
