import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Preloader Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 2500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-[#050507] flex items-center justify-center" id="preloader">
<div className="relative flex flex-col items-center gap-6">
<svg fill="none" height="100" viewbox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
<path className="rune-draw" d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z M50 10 L50 90 M10 30 L90 70 M90 30 L10 70" stroke="#eab308" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
<div className="brand-font text-sm tracking-[0.2em] text-yellow-500/50 animate-pulse">Завантаження Містерії</div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent opacity-40 blur-3xl"></div>

<div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/90 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group">
<div className="relative">
<i className="w-6 h-6 text-yellow-600/80 stroke-1 group-hover:rotate-90 transition-transform duration-700" data-lucide="hexagon"></i>
<div className="absolute inset-0 bg-yellow-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="brand-font text-xl text-white tracking-widest pt-1">ПАРС</span>
</div>
<button className="brand-font bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-sm px-6 py-2 transition-all tracking-wider uppercase">
                Увійти
            </button>
</div>
</nav>

<main className="relative z-10 pt-40 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center mb-32 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_80s_linear_infinite] pointer-events-none -z-10 opacity-30">
<div className="absolute top-0 left-1/2 w-2 h-2 bg-zinc-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-2 h-2 bg-zinc-800 rounded-full -translate-x-1/2 translate-y-1/2"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_50s_linear_infinite_reverse] pointer-events-none -z-10 opacity-30"></div>
<div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border-y border-yellow-500/20">
<i className="w-4 h-4 text-yellow-600" data-lucide="sparkles"></i>
<span className="font-serif italic text-yellow-600/80 text-lg tracking-wide">Система Самопізнання</span>
<i className="w-4 h-4 text-yellow-600" data-lucide="sparkles"></i>
</div>
<h1 className="text-6xl md:text-8xl text-white tracking-tight mb-8 leading-[0.9] text-glow brand-font">
                ПАРС <br/><span className="text-zinc-600 text-5xl md:text-7xl">Творення</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl mx-auto font-serif italic">
                Твій Хрест Потенціалу. Твій Час. Твоє Справжнє «Я».
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<button className="brand-font h-12 px-8 bg-yellow-700/80 hover:bg-yellow-600 text-white text-sm font-medium uppercase tracking-[0.2em] transition-all flex items-center gap-3 group border border-yellow-600/50 hover:shadow-[0_0_20px_rgba(202,138,4,0.3)]">
<span>Розпочати Шлях</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="brand-font h-12 px-8 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white bg-transparent text-sm font-medium uppercase tracking-[0.2em] transition-all">
                    Дізнатись Більше
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-40">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 pl-4 border-l border-yellow-500/20">
<h2 className="text-4xl text-white tracking-normal leading-tight brand-font">
                        Що є <span className="text-yellow-600">ПАРС?</span>
</h2>
<div className="space-y-6 text-lg text-zinc-400 font-light leading-8">
<p>
                            ПАРС творення — це система глибинного саморозкриття, що поєднує сакральний календар <span className="text-zinc-200 italic">Цолькін</span>, матрицю <span className="text-zinc-200 italic">Dreamspell</span> та індивідуальний Оракул Особистості.
                        </p>
<p>
                            Це не ще один «духовний курс». Це системна карта твоєї природи, яка показує хто ти є, у якому місці твого великого циклу ти зараз стоїш.
                        </p>
</div>
<div className="p-6 bg-zinc-900/20 border border-zinc-800/50">
<p className="text-xl text-yellow-500/80 italic text-center font-serif">"Це твій особистий Хрест Потенціалу."</p>
</div>
</div>

<div className="relative aspect-square md:aspect-[4/3] bg-[#0A0A0C] border border-zinc-800 flex items-center justify-center group overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent opacity-60"></div>

<div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-zinc-600"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-zinc-600"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-zinc-600"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-zinc-600"></div>

<div className="relative grid grid-cols-3 gap-3 p-10 rotate-45 scale-75 md:scale-90 transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-100 ease-[cubic-bezier(0.23,1,0.32,1)]">
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-red-900/80 w-8 h-8 stroke-1" data-lucide="triangle"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-zinc-600 w-8 h-8 stroke-1" data-lucide="circle"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-blue-900/80 w-8 h-8 stroke-1" data-lucide="square"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-yellow-600/80 w-8 h-8 stroke-1" data-lucide="diamond"></i></div>
<div className="w-20 h-20 border border-yellow-600/30 bg-[#050507] flex items-center justify-center shadow-[0_0_30px_rgba(202,138,4,0.1)] relative z-10 scale-110"><i className="text-yellow-500 w-10 h-10 stroke-[0.75]" data-lucide="sun"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-purple-900/80 w-8 h-8 stroke-1" data-lucide="moon"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-green-900/80 w-8 h-8 stroke-1" data-lucide="star"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-zinc-600 w-8 h-8 stroke-1" data-lucide="wind"></i></div>
<div className="w-20 h-20 border border-zinc-800 bg-[#050507] flex items-center justify-center"><i className="text-red-900/80 w-8 h-8 stroke-1" data-lucide="hexagon"></i></div>
</div>
</div>
</div>
</section>
<div className="max-w-4xl mx-auto mb-24 flex items-center gap-8 opacity-30">
<div className="h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent w-full"></div>
<i className="w-6 h-6 text-zinc-500" data-lucide="infinity"></i>
<div className="h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent w-full"></div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-40">
<div className="text-center mb-20">
<h2 className="text-4xl text-white mb-4 brand-font">Структура Системи</h2>
<p className="text-sm text-yellow-600/70 uppercase tracking-[0.3em] brand-font">П'ять шляхів самоусвідомлення</p>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
<div className="flex flex-col items-center gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-full border border-yellow-500/20 bg-yellow-500/5 flex items-center justify-center shadow-[0_0_25px_-5px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-500">
<i className="w-8 h-8 text-yellow-600 stroke-[0.75]" data-lucide="sun"></i>
</div>
<span className="text-xs uppercase tracking-widest text-yellow-500 brand-font">Кін</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-red-900 transition-colors">
<i className="w-8 h-8 text-red-800 stroke-[0.75]" data-lucide="crosshair"></i>
</div>
<span className="text-xs uppercase tracking-widest text-zinc-500 group-hover:text-red-800 brand-font">Оракул</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-purple-900 transition-colors">
<i className="w-8 h-8 text-purple-800 stroke-[0.75]" data-lucide="hourglass"></i>
</div>
<span className="text-xs uppercase tracking-widest text-zinc-500 group-hover:text-purple-800 brand-font">Час</span>
</div>
<div className="flex flex-col items-center gap-4 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<div className="w-16 h-16 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-blue-900 transition-colors">
<i className="w-8 h-8 text-blue-800 stroke-[0.75]" data-lucide="waves"></i>
</div>
<span className="text-xs uppercase tracking-widest text-zinc-500 group-hover:text-blue-800 brand-font">Виток</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="rune-card glow-gold p-8 rounded-none relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
<i className="w-24 h-24 text-yellow-500 stroke-[0.5]" data-lucide="sun"></i>
</div>
<h3 className="text-2xl text-white mb-2 brand-font group-hover:text-yellow-500 transition-colors">Твій Кін</h3>
<div className="h-px w-12 bg-yellow-600/50 mb-4"></div>
<p className="text-xs text-yellow-600/70 uppercase tracking-widest mb-6 brand-font">Енергетична Істина</p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                        Це твоє ядро. Те, що не змінюється. Ти отримуєш трактування своєї печатки, тону та природної дії.
                    </p>
<ul className="text-sm text-zinc-500 space-y-2 font-serif italic">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-700 rotate-45"></div>Твоя печатка</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-700 rotate-45"></div>Твій тон</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-yellow-700 rotate-45"></div>Внутрішня сила</li>
</ul>
</div>

<div className="rune-card glow-red p-8 rounded-none relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
<i className="w-24 h-24 text-red-500 stroke-[0.5]" data-lucide="crosshair"></i>
</div>
<h3 className="text-2xl text-white mb-2 brand-font group-hover:text-red-500 transition-colors">Оракул</h3>
<div className="h-px w-12 bg-red-800/50 mb-4"></div>
<p className="text-xs text-red-800/70 uppercase tracking-widest mb-6 brand-font">Космічний Паспорт</p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                        Перехрестя п’яти сил: сутність, вища визначеність, союзники, виклики та таємна сила вчителя.
                    </p>
<ul className="text-sm text-zinc-500 space-y-2 font-serif italic">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900 rotate-45"></div>Управитель</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900 rotate-45"></div>Аналог і Антипод</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-red-900 rotate-45"></div>Окультний вчитель</li>
</ul>
</div>

<div className="rune-card glow-purple p-8 rounded-none relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
<i className="w-24 h-24 text-purple-500 stroke-[0.5]" data-lucide="hourglass"></i>
</div>
<h3 className="text-2xl text-white mb-2 brand-font group-hover:text-purple-500 transition-colors">Оракул Часу</h3>
<div className="h-px w-12 bg-purple-800/50 mb-4"></div>
<p className="text-xs text-purple-800/70 uppercase tracking-widest mb-6 brand-font">Навігація Реальність</p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                        Що відбувається в твоєму полі? Які енергії активні сьогодні? Вчися читати знаки часу.
                    </p>
<ul className="text-sm text-zinc-500 space-y-2 font-serif italic">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-purple-900 rotate-45"></div>Енергії дня</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-purple-900 rotate-45"></div>Резонанс</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-purple-900 rotate-45"></div>Підтримка</li>
</ul>
</div>

<div className="rune-card glow-blue p-8 rounded-none relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
<i className="w-24 h-24 text-blue-500 stroke-[0.5]" data-lucide="waves"></i>
</div>
<h3 className="text-2xl text-white mb-2 brand-font group-hover:text-blue-500 transition-colors">Виток</h3>
<div className="h-px w-12 bg-blue-800/50 mb-4"></div>
<p className="text-xs text-blue-800/70 uppercase tracking-widest mb-6 brand-font">Галявина Душі</p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                        13-денна хвиля, в яку ти прийшов у світ. Твої архетипи розвитку та життєві фази.
                    </p>
<ul className="text-sm text-zinc-500 space-y-2 font-serif italic">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rotate-45"></div>Первинні уроки</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rotate-45"></div>Корені</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-900 rotate-45"></div>Фрактали</li>
</ul>
</div>

<div className="rune-card glow-green p-8 rounded-none relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
<i className="w-24 h-24 text-green-500 stroke-[0.5]" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-2xl text-white mb-2 brand-font group-hover:text-green-500 transition-colors">Цикли</h3>
<div className="h-px w-12 bg-green-800/50 mb-4"></div>
<p className="text-xs text-green-800/70 uppercase tracking-widest mb-6 brand-font">Родова Навігація</p>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                        Дізнайся, в якому ти 13-річному циклі, яка тема періоду і куди веде твоя енергія.
                    </p>
<ul className="text-sm text-zinc-500 space-y-2 font-serif italic">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-900 rotate-45"></div>Тема періоду</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-900 rotate-45"></div>Максимальне розкриття</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-green-900 rotate-45"></div>Стратегія</li>
</ul>
</div>

<div className="rune-card glow-blue p-8 rounded-none relative overflow-hidden group flex flex-col justify-center items-center text-center border-dashed border-zinc-700">
<div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-white transition-colors">
<i className="w-8 h-8 text-white stroke-1" data-lucide="map"></i>
</div>
<h3 className="text-2xl text-white mb-3 brand-font">Хрест Потенціалу</h3>
<p className="text-lg text-zinc-400 font-light mb-6">
                        Книга твоєї душі. Цілісний посібник для свідомого життя.
                    </p>
<span className="text-xs bg-white text-black px-4 py-2 font-bold uppercase tracking-widest brand-font">Доступно у ПАРС</span>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<h2 className="text-3xl text-white tracking-normal mb-12 border-l-2 border-yellow-600 pl-6 brand-font">Для кого створений <span className="text-yellow-600">ПАРС?</span></h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
<div className="flex gap-6 group">
<i className="w-5 h-5 text-zinc-600 mt-1 shrink-0 group-hover:text-yellow-600 transition-colors" data-lucide="star"></i>
<p className="text-lg text-zinc-300 font-light leading-relaxed">Тих, хто відчуває, що в ньому є щось більше, ніж просто історія життя.</p>
</div>
<div className="flex gap-6 group">
<i className="w-5 h-5 text-zinc-600 mt-1 shrink-0 group-hover:text-yellow-600 transition-colors" data-lucide="star"></i>
<p className="text-lg text-zinc-300 font-light leading-relaxed">Тих, хто шукає свою високу дію, місію, істинний напрям.</p>
</div>
<div className="flex gap-6 group">
<i className="w-5 h-5 text-zinc-600 mt-1 shrink-0 group-hover:text-yellow-600 transition-colors" data-lucide="star"></i>
<p className="text-lg text-zinc-300 font-light leading-relaxed">Тих, хто прагне жити в ритмі природного часу, а не машинної матриці.</p>
</div>
<div className="flex gap-6 group">
<i className="w-5 h-5 text-zinc-600 mt-1 shrink-0 group-hover:text-yellow-600 transition-colors" data-lucide="star"></i>
<p className="text-lg text-zinc-300 font-light leading-relaxed">Тих, хто хоче вирватися з хаосу та зовнішніх впливів.</p>
</div>
<div className="flex gap-6 group">
<i className="w-5 h-5 text-yellow-600 mt-1 shrink-0" data-lucide="star"></i>
<p className="text-lg text-white font-normal italic leading-relaxed">Якщо ти відчуваєш поклик — ти вже в полі ПАРСу.</p>
</div>
</div>
</section>

<section className="bg-[#08080a] border-y border-white/5 py-32 mb-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-px h-16 bg-gradient-to-b from-transparent to-yellow-600 mx-auto mb-8"></div>
<h2 className="text-4xl text-white mb-8 brand-font">Чому це потрібно саме тепер?</h2>
<p className="text-xl text-zinc-400 font-light leading-loose mb-10 font-serif">
                    Бо зараз час великих зсувів. Світ перевантажений хаосом. Старі системи часу зламалися. 
                    Люди втратили зв’язок із природним ритмом. Кожна душа шукає свою правду.
                </p>
<p className="text-2xl text-yellow-500/80 brand-font tracking-wide">
                    ПАРС — це повернення до істини. До центру. До себе.
                </p>
<div className="w-px h-16 bg-gradient-to-b from-yellow-600 to-transparent mx-auto mt-8"></div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-40">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div>
<h2 className="text-3xl text-white mb-10 brand-font">Що ти проживеш?</h2>
<div className="space-y-8">
<div className="group pl-6 border-l border-zinc-800 hover:border-yellow-600 transition-colors">
<h3 className="text-xl text-white mb-2 brand-font group-hover:text-yellow-500 transition-colors">Ясність шляху</h3>
<p className="text-base text-zinc-500 italic">Ти знаєш, хто ти і куди йдеш.</p>
</div>
<div className="group pl-6 border-l border-zinc-800 hover:border-yellow-600 transition-colors">
<h3 className="text-xl text-white mb-2 brand-font group-hover:text-yellow-500 transition-colors">Розкриття сили</h3>
<p className="text-base text-zinc-500 italic">Ти бачиш, де твої ресурси і дари.</p>
</div>
<div className="group pl-6 border-l border-zinc-800 hover:border-yellow-600 transition-colors">
<h3 className="text-xl text-white mb-2 brand-font group-hover:text-yellow-500 transition-colors">Синхронізація з часом</h3>
<p className="text-base text-zinc-500 italic">Життя тече природно, без опору.</p>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-zinc-900/40 to-black p-12 border border-zinc-800 flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
<h3 className="text-2xl text-white mb-6 brand-font">Це не курс. Це карта твоєї душі.</h3>
<p className="text-lg text-zinc-400 mb-10 font-light leading-relaxed">
                        ПАРС — це структурований гайд, аналітика, практика та спосіб жити. Персональна навігація, а не універсальні поради.
                    </p>
<button className="w-full h-14 bg-zinc-100 text-black hover:bg-white font-bold text-sm uppercase tracking-[0.25em] transition-colors brand-font">
                        Народи свою справжню форму
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020203] py-16">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-zinc-400" data-lucide="hexagon"></i>
<span className="text-sm tracking-widest text-zinc-500 brand-font">PARS SYSTEM © 2025</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500 font-medium uppercase tracking-widest brand-font">
<a className="hover:text-white transition-colors" href="#">Цолькін</a>
<a className="hover:text-white transition-colors" href="#">Dreamspell</a>
<a className="hover:text-white transition-colors" href="#">Контакт</a>
</div>
</div>
</footer>


    </>
  );
}
