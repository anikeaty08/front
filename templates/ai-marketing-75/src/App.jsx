import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Count Up Animation
        const counters = document.querySelectorAll('[data-target]');
        const speed = 200;

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText.replace(/\D/g,'');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + (counter.getAttribute('data-target').includes('%') ? '%' : '+');
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target + (counter.getAttribute('data-target').includes('%') ? '%' : '+');
                    }
                };
                updateCount();
            });
        };

        // Intersection Observer for Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.id === 'results' || entry.target.closest('#results')) {
                        animateCounters();
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up, #results').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 bg-black/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center group select-none hover:opacity-90 transition-opacity" href="#">
<div className="bg-[#1800ad] px-2 py-0.5 flex items-center justify-center rounded-sm">
<span className="text-white font-bold text-xl leading-none tracking-tight font-sans">GEN</span>
</div>
<span className="text-white font-bold text-xl leading-none tracking-tight font-sans ml-1">HAWKZ</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#process">Процесс</a>
<a className="hover:text-white transition-colors" href="#results">Результаты</a>
<a className="hover:text-white transition-colors" href="#pricing">Цены</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block px-4 py-2 text-xs font-medium text-white bg-[#1800ad] hover:bg-[#120085] transition-colors rounded-full shadow-[0_0_15px_-5px_#1800ad]" href="#contact">
                    Получить аудит
                </a>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 bg-grid">
<div className="glow-spot top-20 left-0"></div>
<div className="glow-spot bottom-0 right-0"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 z-10 fade-up visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#1800ad] animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">AI-Маркетинг v2.0</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Цифровой маркетинг на базе AI для <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1800ad] to-purple-500">Масштабирования</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                    Стратегии на основе данных. Рост через автоматизацию. Мы используем собственные AI-модели для прогнозирования трендов и оптимизации кампаний в реальном времени.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-8 py-4 bg-[#1800ad] text-white text-sm font-medium rounded-lg hover:bg-[#120085] transition-all shadow-[0_0_20px_-5px_#1800ad]">
                        Бесплатный AI-аудит
                    </button>
<button className="px-8 py-4 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all flex items-center gap-2 group">
                        Заказать звонок
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="pt-8 border-t border-white/10 flex items-center gap-6 text-xs text-zinc-500 font-medium">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:globe" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
                        Работаем по всему миру
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:trending-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                        Фокус на ROI
                    </div>
</div>
</div>

<div className="relative z-10 fade-up delay-100 visible">
<div className="glass-card rounded-2xl p-6 md:p-10 relative overflow-hidden">

<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-sm font-medium text-white">Прогнозируемый рост</h3>
<p className="text-xs text-zinc-500">AI-прогноз в реальном времени</p>
</div>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-red-500/20"></span>
<span className="w-3 h-3 rounded-full bg-yellow-500/20"></span>
<span className="w-3 h-3 rounded-full bg-green-500/20"></span>
</div>
</div>

<div className="relative h-64 w-full">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-zinc-600 font-mono">
<div className="border-b border-white/5 w-full h-0"></div>
<div className="border-b border-white/5 w-full h-0"></div>
<div className="border-b border-white/5 w-full h-0"></div>
<div className="border-b border-white/5 w-full h-0"></div>
</div>
<svg className="w-full h-full absolute inset-0 overflow-visible" viewbox="0 0 400 200">
<defs>
<lineargradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#1800ad" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#1800ad" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="opacity-50" d="M0 180 C 50 170, 80 150, 120 140 S 180 160, 220 100 S 320 60, 400 20" fill="url(#gradientArea)" stroke="none"></path>
<path className="draw-path drop-shadow-[0_0_8px_#1800ad]" d="M0 180 C 50 170, 80 150, 120 140 S 180 160, 220 100 S 320 60, 400 20" fill="none" stroke="#1800ad" strokeWidth="3"></path>
</svg>

<div className="absolute top-[10%] right-0 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-xs text-white shadow-lg animate-[bounce_3s_infinite]">
                            +240% ROI
                        </div>
<div className="absolute top-[40%] left-[50%] bg-black/80 border border-[#1800ad]/50 px-3 py-1 rounded text-xs text-[#1800ad] shadow-lg">
                            3.5x Лидов
                        </div>
</div>

<div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5">
<div className="text-center">
<div className="text-lg font-semibold text-white">+120%</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Трафик</div>
</div>
<div className="text-center border-l border-white/5 border-r">
<div className="text-lg font-semibold text-white">3.5x</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Лиды</div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-white">24/7</div>
<div className="text-[10px] uppercase tracking-wider text-zinc-500">Поддержка</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">На базе нейроинтеллекта</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Мы не гадаем. Мы используем передовые алгоритмы прогнозирования, чтобы ваш маркетинговый бюджет работал с максимальной эффективностью.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-1 fade-up">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#1800ad] mb-4 group-hover:bg-[#1800ad] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Предиктивное SEO</h3>
<p className="text-sm text-zinc-500">AI-анализ пробелов в семантике до того, как их найдут конкуренты.</p>
</div>

<div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-1 fade-up delay-75">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#1800ad] mb-4 group-hover:bg-[#1800ad] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:target" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Умный таргетинг</h3>
<p className="text-sm text-zinc-500">Сегментация аудитории на основе поведенческих вероятностей.</p>
</div>

<div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-1 fade-up delay-150">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#1800ad] mb-4 group-hover:bg-[#1800ad] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Авто-оптимизация</h3>
<p className="text-sm text-zinc-500">Реклама, которая корректирует ставки и креативы автоматически 24/7.</p>
</div>

<div className="glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-1 fade-up delay-200">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#1800ad] mb-4 group-hover:bg-[#1800ad] group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Мгновенные инсайты</h3>
<p className="text-sm text-zinc-500">Панели отчетности в реальном времени, без ручного ввода данных.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<div className="inline-block text-[#1800ad] font-semibold text-xs tracking-widest uppercase mb-4">Глобальные операции</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Работаем без границ и часовых поясов.</h2>
<p className="text-zinc-400 mb-8">Наша децентрализованная команда и AI-инфраструктура позволяют обслуживать индустрии по всему миру без задержек.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> E-commerce (Shopify, Magento)
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> SaaS и Тех-стартапы
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Недвижимость и Медицина
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Решения для Enterprise
                    </li>
</ul>
</div>
<div className="relative h-[400px] w-full flex items-center justify-center fade-up">

<div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-no-repeat bg-center opacity-10 grayscale invert"></div>

<div className="absolute top-[30%] left-[20%] w-2 h-2 bg-[#1800ad] rounded-full shadow-[0_0_15px_3px_#1800ad] animate-pulse"></div>
<div className="absolute top-[40%] left-[45%] w-2 h-2 bg-[#1800ad] rounded-full shadow-[0_0_15px_3px_#1800ad] animate-pulse delay-75"></div>
<div className="absolute top-[25%] left-[80%] w-2 h-2 bg-[#1800ad] rounded-full shadow-[0_0_15px_3px_#1800ad] animate-pulse delay-150"></div>
<div className="absolute top-[60%] left-[70%] w-2 h-2 bg-[#1800ad] rounded-full shadow-[0_0_15px_3px_#1800ad] animate-pulse delay-300"></div>
<div className="glass-card absolute bottom-10 left-10 p-4 rounded-lg flex items-center gap-4 animate-bounce">
<div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
<span className="text-xs font-medium text-white">Активные кампании: 842</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Комплексные решения</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:search-check" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m8 11l2 2l4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21l-4.3-4.3"></path></g></svg>
<h3 className="text-white font-medium mb-1">Продвинутое SEO</h3>
<p className="text-xs text-zinc-500">Техническое, Внешнее, AI-контент</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:share-2" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98"></path></g></svg>
<h3 className="text-white font-medium mb-1">SMO и Брендинг</h3>
<p className="text-xs text-zinc-500">Reels, Органика, Айдентика</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:code" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m16 18l6-6l-6-6M8 6l-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-white font-medium mb-1">Веб-разработка</h3>
<p className="text-xs text-zinc-500">Быстро, масштабируемо, безопасно</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:film" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"></path></g></svg>
<h3 className="text-white font-medium mb-1">Видеомонтаж</h3>
<p className="text-xs text-zinc-500">Кинематографичная реклама, Промо</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:palette" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
<h3 className="text-white font-medium mb-1">Графический дизайн</h3>
<p className="text-xs text-zinc-500">UI Ассеты, Креативы</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:mouse-pointer" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-white font-medium mb-1">PPC и Воронки</h3>
<p className="text-xs text-zinc-500">Google Ads, Фокус на конверсии</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:facebook" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-white font-medium mb-1">Meta Ads</h3>
<p className="text-xs text-zinc-500">IG и FB Системы масштабирования</p>
</div>
<div className="glass-card p-6 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
<svg aria-hidden="true" className="iconify text-zinc-500 group-hover:text-[#1800ad] transition-colors mb-4 iconify--lucide" data-icon="lucide:phone-call" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-white font-medium mb-1">Голосовой агент</h3>
<p className="text-xs text-zinc-500">Обработка лидов и продажи</p>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden" id="results">
<div className="absolute inset-0 bg-[#1800ad]/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2" data-target="240">0%</div>
<div className="text-sm font-medium text-zinc-500">Средний рост ROI</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2" data-target="350">0%</div>
<div className="text-sm font-medium text-zinc-500">Рост лидов</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2" data-target="85">0+</div>
<div className="text-sm font-medium text-zinc-500">Клиентов по миру</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-bold text-white mb-2" data-target="12">0%</div>
<div className="text-sm font-medium text-zinc-500">Улучшение конверсии</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Как мы вас масштабируем</h2>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1800ad] to-transparent"></div>
<div className="space-y-12">
<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-5/12 text-left md:text-right pr-8 pl-12 md:pl-0">
<h3 className="text-xl font-medium text-white">1. Аудит и Исследование</h3>
<p className="text-sm text-zinc-500 mt-2">Глубокое погружение в данные, конкурентов и поиск рыночных ниш.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#1800ad] rounded-full z-10 shadow-[0_0_10px_#1800ad]"></div>
<div className="hidden md:block md:w-5/12 pl-8"></div>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="hidden md:block md:w-5/12 pr-8"></div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-zinc-700 group-hover:border-[#1800ad] rounded-full z-10 transition-colors"></div>
<div className="md:w-5/12 text-left pl-12 md:pl-8">
<h3 className="text-xl font-medium text-white">2. Стратегия и Воронка</h3>
<p className="text-sm text-zinc-500 mt-2">Проектирование пути от незнакомца до лояльного клиента.</p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-5/12 text-left md:text-right pr-8 pl-12 md:pl-0">
<h3 className="text-xl font-medium text-white">3. Запуск и Оптимизация</h3>
<p className="text-sm text-zinc-500 mt-2">Запуск кампаний с AI-корректировками в реальном времени.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-zinc-700 group-hover:border-[#1800ad] rounded-full z-10 transition-colors"></div>
<div className="hidden md:block md:w-5/12 pl-8"></div>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="hidden md:block md:w-5/12 pr-8"></div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-zinc-700 group-hover:border-[#1800ad] rounded-full z-10 transition-colors"></div>
<div className="md:w-5/12 text-left pl-12 md:pl-8">
<h3 className="text-xl font-medium text-white">4. Масштабирование</h3>
<p className="text-sm text-zinc-500 mt-2">Расширение охвата при снижении ручного труда.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Почему выбирают нас</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<div>
<h4 className="text-white font-medium">AI-First Стратегия</h4>
<p className="text-sm text-zinc-500 mt-1">Мы не адаптируем AI. Мы строим стратегии вокруг него.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:eye" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium">Прозрачная отчетность</h4>
<p className="text-sm text-zinc-500 mt-1">Живые дашборды. Никаких скрытых комиссий. Полная ясность.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:globe-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium">Мировой опыт</h4>
<p className="text-sm text-zinc-500 mt-1">Стратегии проверены на 4 континентах и в 12 вертикалях.</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-6">Наш тех-стек</h3>
<div className="grid grid-cols-3 gap-4">
<div className="glass-card h-24 flex flex-col items-center justify-center rounded-lg hover:border-[#1800ad]/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--logos" data-icon="logos:google-analytics" data-width="24" height="26.63" role="img" viewbox="0 0 256 284" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M256.003 247.933a35.224 35.224 0 0 1-39.376 35.161c-18.044-2.67-31.266-18.371-30.826-36.606V36.845C185.365 18.591 198.62 2.881 216.687.24a35.22 35.22 0 0 1 39.316 35.16z" fill="#F9AB00"></path><path d="M35.101 213.193c19.386 0 35.101 15.716 35.101 35.101c0 19.386-15.715 35.101-35.101 35.101S0 267.68 0 248.295s15.715-35.102 35.101-35.102m92.358-106.387c-19.477 1.068-34.59 17.406-34.137 36.908v94.285c0 25.588 11.259 41.122 27.755 44.433a35.16 35.16 0 0 0 42.146-34.56V142.089a35.22 35.22 0 0 0-35.764-35.282" fill="#E37400"></path></svg>
<span className="text-[10px] text-zinc-500">Analytics</span>
</div>
<div className="glass-card h-24 flex flex-col items-center justify-center rounded-lg hover:border-[#1800ad]/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--logos" data-icon="logos:google-ads" data-width="24" height="21.57" role="img" viewbox="0 0 256 230" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z" fill="#FBBC04"></path><path d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z" fill="#4285F4"></path><ellipse cx="42.664" cy="187.924" fill="#34A853" rx="42.664" ry="41.604"></ellipse></svg>
<span className="text-[10px] text-zinc-500">Ads</span>
</div>
<div className="glass-card h-24 flex flex-col items-center justify-center rounded-lg hover:border-[#1800ad]/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--logos" data-icon="logos:meta-icon" data-width="24" height="16.04" role="img" viewbox="0 0 256 171" width="24" xmlns="http://www.w3.org/2000/svg"><defs><lineargradient id="IconifyId19bcb21d10b5476920" x1="13.878%" x2="89.144%" y1="55.934%" y2="58.694%"><stop offset="0%" stop-color="#0064E1"></stop><stop offset="40%" stop-color="#0064E1"></stop><stop offset="83%" stop-color="#0073EE"></stop><stop offset="100%" stop-color="#0082FB"></stop></lineargradient><lineargradient id="IconifyId19bcb21d10b5476921" x1="54.315%" x2="54.315%" y1="82.782%" y2="39.307%"><stop offset="0%" stop-color="#0082FB"></stop><stop offset="100%" stop-color="#0064E0"></stop></lineargradient></defs><path d="M27.651 112.136c0 9.775 2.146 17.28 4.95 21.82c3.677 5.947 9.16 8.466 14.751 8.466c7.211 0 13.808-1.79 26.52-19.372c10.185-14.092 22.186-33.874 30.26-46.275l13.675-21.01c9.499-14.591 20.493-30.811 33.1-41.806C161.196 4.985 172.298 0 183.47 0c18.758 0 36.625 10.87 50.3 31.257C248.735 53.584 256 81.707 256 110.729c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363v-27.616c15.695 0 19.612-14.422 19.612-30.927c0-23.52-5.484-49.623-17.564-68.273c-8.574-13.23-19.684-21.313-31.907-21.313c-13.22 0-23.859 9.97-35.815 27.75c-6.356 9.445-12.882 20.956-20.208 33.944l-8.066 14.289c-16.203 28.728-20.307 35.271-28.408 46.07c-14.2 18.91-26.324 26.076-42.287 26.076c-18.935 0-30.91-8.2-38.325-20.556C2.973 139.413 0 126.202 0 111.148z" fill="#0081FB"></path><path d="M21.802 33.206C34.48 13.666 52.774 0 73.757 0C85.91 0 97.99 3.597 110.605 13.897c13.798 11.261 28.505 29.805 46.853 60.368l6.58 10.967c15.881 26.459 24.917 40.07 30.205 46.49c6.802 8.243 11.565 10.7 17.752 10.7c15.695 0 19.612-14.422 19.612-30.927l24.393-.766c0 17.253-3.4 29.93-9.187 39.946c-5.591 9.686-16.488 19.363-34.818 19.363c-11.395 0-21.49-2.475-32.654-13.007c-8.582-8.083-18.615-22.443-26.334-35.352l-22.96-38.352C118.528 64.08 107.96 49.73 101.845 43.23c-6.578-6.988-15.036-15.428-28.532-15.428c-10.923 0-20.2 7.666-27.963 19.39z" fill="url(#IconifyId19bcb21d10b5476920)"></path><path d="M73.312 27.802c-10.923 0-20.2 7.666-27.963 19.39c-10.976 16.568-17.698 41.245-17.698 64.944c0 9.775 2.146 17.28 4.95 21.82L9.027 149.482C2.973 139.413 0 126.202 0 111.148C0 83.772 7.514 55.24 21.802 33.206C34.48 13.666 52.774 0 73.757 0z" fill="url(#IconifyId19bcb21d10b5476921)"></path></svg>
<span className="text-[10px] text-zinc-500">Meta</span>
</div>
<div className="glass-card h-24 flex flex-col items-center justify-center rounded-lg hover:border-[#1800ad]/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--lucide" data-icon="lucide:bot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
<span className="text-[10px] text-zinc-500">Автоматизация</span>
</div>
<div className="glass-card h-24 flex flex-col items-center justify-center rounded-lg hover:border-[#1800ad]/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--lucide" data-icon="lucide:database" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
<span className="text-[10px] text-zinc-500">CRM</span>
</div>
<div className="glass-card h-24 flex flex-col items-center justify-center rounded-lg hover:border-[#1800ad]/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--lucide" data-icon="lucide:activity" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] text-zinc-500">Теплокарты</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Доказанные результаты</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card rounded-xl overflow-hidden group">
<div className="h-48 bg-zinc-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-[#1800ad] text-white text-[10px] uppercase font-bold tracking-wider rounded">SaaS</span>
<h3 className="text-xl font-medium text-white mt-1">Масштабирование Финтех-стартапа</h3>
</div>
</div>
<div className="p-6">
<p className="text-xs text-zinc-500 mb-4 line-clamp-2">Задача: Высокий CPA и низкое удержание. Решение: AI-оптимизация воронки продаж.</p>
<div className="flex justify-between items-center border-t border-white/5 pt-4">
<div>
<div className="text-lg font-bold text-white">+210%</div>
<div className="text-[10px] text-zinc-500">Рост MRR</div>
</div>
<button className="text-[#1800ad] hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden group">
<div className="h-48 bg-zinc-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-[#1800ad] text-white text-[10px] uppercase font-bold tracking-wider rounded">E-commerce</span>
<h3 className="text-xl font-medium text-white mt-1">Глобальный Фешн Бренд</h3>
</div>
</div>
<div className="p-6">
<p className="text-xs text-zinc-500 mb-4 line-clamp-2">Задача: Стагнация ROAS в Meta Ads. Решение: Предиктивное моделирование аудитории.</p>
<div className="flex justify-between items-center border-t border-white/5 pt-4">
<div>
<div className="text-lg font-bold text-white">4.2x</div>
<div className="text-[10px] text-zinc-500">ROAS</div>
</div>
<button className="text-[#1800ad] hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden group">
<div className="h-48 bg-zinc-900 relative">
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<span className="px-2 py-1 bg-[#1800ad] text-white text-[10px] uppercase font-bold tracking-wider rounded">Недвижимость</span>
<h3 className="text-xl font-medium text-white mt-1">Лиды на элитное жилье</h3>
</div>
</div>
<div className="p-6">
<p className="text-xs text-zinc-500 mb-4 line-clamp-2">Задача: Низкое качество лидов. Решение: Квалификация через авто-обзвон.</p>
<div className="flex justify-between items-center border-t border-white/5 pt-4">
<div>
<div className="text-lg font-bold text-white">-45%</div>
<div className="text-[10px] text-zinc-500">CPL (Цена лида)</div>
</div>
<button className="text-[#1800ad] hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Модели сотрудничества</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-card p-8 rounded-xl">
<h3 className="text-lg font-medium text-white">Старт</h3>
<p className="text-sm text-zinc-500 mt-2">Идеально для локального бизнеса.</p>
<div className="my-6">
<span className="text-3xl font-bold text-white">$1.5k</span><span className="text-zinc-500 text-sm">/мес</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Базовая настройка SEO</li>
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Управление Google Ads</li>
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Ежемесячная отчетность</li>
</ul>
<a className="block w-full py-3 border border-white/10 rounded-lg text-center text-sm text-white hover:bg-white/5 transition-colors" href="#contact">Начать проект</a>
</div>

<div className="glass-card p-8 rounded-xl border-[#1800ad] relative shadow-[0_0_30px_-10px_#1800ad]">
<div className="absolute top-0 right-0 -mt-3 mr-4 bg-[#1800ad] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Популярный</div>
<h3 className="text-lg font-medium text-white">Рост</h3>
<p className="text-sm text-zinc-500 mt-2">Для масштабирования брендов.</p>
<div className="my-6">
<span className="text-3xl font-bold text-white">$4.5k</span><span className="text-zinc-500 text-sm">/мес</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-300"><svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> AI-SEO и Контент</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Масштабирование Meta и Google</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Еженедельные коллы</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><svg aria-hidden="true" className="iconify text-[#1800ad] iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> CRO и Дизайн воронок</li>
</ul>
<a className="block w-full py-3 bg-[#1800ad] rounded-lg text-center text-sm text-white hover:bg-[#120085] transition-colors" href="#contact">Начать сейчас</a>
</div>

<div className="glass-card p-8 rounded-xl">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-zinc-500 mt-2">Кастомные AI-решения.</p>
<div className="my-6">
<span className="text-3xl font-bold text-white">Индивид.</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Выделенная AI-команда</li>
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Кастомные боты автоматизации</li>
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Глобальная поддержка 24/7</li>
<li className="flex items-center gap-2 text-sm text-zinc-400"><svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Полный цикл маркетинга</li>
</ul>
<a className="block w-full py-3 border border-white/10 rounded-lg text-center text-sm text-white hover:bg-white/5 transition-colors" href="#contact">Связаться с отделом</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12">Умы, стоящие за машинами</h2>
<div className="flex flex-wrap gap-8 justify-center md:justify-start">
<div className="flex items-center gap-4 glass-card pr-6 rounded-full p-1">
<div className="w-12 h-12 rounded-full bg-zinc-800"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">Ведущий AI-стратег</div>
</div>
</div>
<div className="flex items-center gap-4 glass-card pr-6 rounded-full p-1">
<div className="w-12 h-12 rounded-full bg-zinc-800"></div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-zinc-500">Глава отдела Performance</div>
</div>
</div>
<div className="flex items-center gap-4 glass-card pr-6 rounded-full p-1">
<div className="w-12 h-12 rounded-full bg-zinc-800"></div>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-zinc-500">Креативный директор</div>
</div>
</div>
<div className="flex items-center gap-4 glass-card pr-6 rounded-full p-1">
<div className="w-12 h-12 rounded-full bg-zinc-800"></div>
<div>
<div className="text-sm font-medium text-white">James Wilson</div>
<div className="text-xs text-zinc-500">Технический лид</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12 text-center">Часто задаваемые вопросы</h2>
<div className="space-y-4">
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium">
                        Как AI улучшает маркетинговые результаты?
                        <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        AI анализирует огромные объемы данных для прогнозирования трендов, оптимизации ставок в реальном времени и персонализации контента для конкретных сегментов аудитории, что приводит к более высокой конверсии и снижению стоимости привлечения.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium">
                        Вы работаете по всему миру?
                        <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        Да, наша команда распределена по нескольким часовым поясам, что позволяет нам управлять кампаниями и оказывать поддержку 24/7 для клиентов в США, Европе и Азии.
                    </div>
</details>
<details className="group glass-card rounded-lg open:bg-white/5 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-white font-medium">
                        Какой минимальный срок контракта?
                        <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                        Для планов "Старт" мы работаем помесячно. Для планов "Рост" и "Enterprise" обычно требуется контракт от 3 месяцев, чтобы дать AI достаточно времени для обучения и оптимизации.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[#1800ad]/10"></div>
<div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !bg-[#1800ad]/20 !w-[500px] !h-[500px]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Готовы масштабировать бизнес с AI?</h2>
<p className="text-zinc-400 mb-10 text-lg">Хватит гадать. Начните расти. Присоединяйтесь к агентству, которое переопределяет цифровую эффективность.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-[#1800ad] text-white font-medium rounded-lg hover:bg-[#120085] transition-all shadow-[0_0_30px_-10px_#1800ad]">
                    Начать проект
                </button>
<button className="px-8 py-4 bg-black border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all">
                    Заказать звонок
                </button>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-white mb-6">Давайте обсудим</h2>
<p className="text-zinc-400 mb-8">Заполните форму, и наш AI-агент направит вас к лучшему стратегу для вашей индустрии.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#1800ad] transition-colors" placeholder="Имя" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#1800ad] transition-colors" placeholder="Email" type="email"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#1800ad] transition-colors" placeholder="Сайт компании" type="text"/>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-zinc-400 focus:outline-none focus:border-[#1800ad] transition-colors">
<option>Выберите услугу</option>
<option>SEO и Контент</option>
<option>Платная реклама (Ads)</option>
<option>Веб-разработка</option>
</select>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-[#1800ad] transition-colors" placeholder="Расскажите о ваших целях..." rows="4"></textarea>
<button className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-zinc-200 transition-colors" type="button">Отправить запрос</button>
</form>
</div>
<div className="flex flex-col justify-between">
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-white font-medium mb-4">Услуги</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-[#1800ad] transition-colors" href="#">SEO Оптимизация</a></li>
<li><a className="hover:text-[#1800ad] transition-colors" href="#">Управление PPC</a></li>
<li><a className="hover:text-[#1800ad] transition-colors" href="#">Социальные сети</a></li>
<li><a className="hover:text-[#1800ad] transition-colors" href="#">Веб-дизайн</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Компания</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-[#1800ad] transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-[#1800ad] transition-colors" href="#">Карьера</a></li>
<li><a className="hover:text-[#1800ad] transition-colors" href="#">Блог</a></li>
<li><a className="hover:text-[#1800ad] transition-colors" href="#">Конфиденциальность</a></li>
</ul>
</div>
</div>
<div className="mt-12">
<div className="flex items-center gap-4 mb-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
</div>
<p className="text-xs text-zinc-600">© 2024 GENHAWKZ. Все права защищены.</p>
</div>
</div>
</div>
</section>



    </>
  );
}
