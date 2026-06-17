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



        // Efficient Icon Loading
        lucide.createIcons();

        // Optimized Observer with passive listeners
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px', // Trigger slightly before element is fully in view
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        
                        if (target.classList.contains('animate-group')) {
                            const children = target.querySelectorAll('.reveal');
                            children.forEach((child, index) => {
                                // Use requestAnimationFrame for smoother stagger
                                requestAnimationFrame(() => {
                                    setTimeout(() => {
                                        child.classList.add('active');
                                    }, index * 80); // Faster stagger
                                });
                            });
                        } else {
                            target.classList.add('active');
                        }
                        
                        // Stop observing once revealed
                        obs.unobserve(target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-group, .reveal:not(.animate-group .reveal)').forEach(el => {
                observer.observe(el);
            });

            // Performant Header Scroll
            const header = document.getElementById('header');
            let lastScroll = 0;
            let ticking = false;

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const currentScroll = window.scrollY;
                        if (currentScroll > 20) {
                            header.classList.add('shadow-sm', 'bg-white/90');
                        } else {
                            header.classList.remove('shadow-sm', 'bg-white/90');
                        }
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
        });
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent" id="header">
<div className="absolute inset-0 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"></div>
<div className="relative max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="flex items-center justify-between py-4">

<a aria-label="Пазл Здоровья - Главная" className="group flex items-center gap-2.5 z-50 relative focus:outline-none" href="/">
<div className="text-amber-600 transition-transform duration-300 group-hover:scale-110">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="font-bold text-lg tracking-tight text-neutral-900">Пазл Здоровья</span>
</a>

<nav className="hidden lg:flex items-center gap-8 relative z-50">
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-amber-600 transition-colors py-2" href="#science">Наука</a>
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-amber-600 transition-colors py-2" href="#ingredients">Состав</a>
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-amber-600 transition-colors py-2" href="#catalog">Программы</a>
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-amber-600 transition-colors py-2" href="#reviews">Отзывы</a>
</nav>

<div className="flex items-center gap-4 z-50">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="#contact">
                        Консультация
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section aria-label="Введение" className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950 pt-20">

<div className="absolute inset-0 z-0">
<img alt="Текстура масла макро" className="w-full h-full object-cover opacity-40 scale-105" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-10 w-full py-20">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-7 max-w-3xl animate-group">
<div className="reveal inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                            Технология холодного отжима
                        </div>
<h1 className="reveal text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.05] mb-8">
                            Ваши клетки всего <br/> тела под
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">защитой</span>
</h1>
<p className="reveal text-lg font-normal text-neutral-400 max-w-lg mb-10 leading-relaxed">
                            Натуральный источник сквалена и антиоксидантов для защиты клеточных мембран, повышения энергии и улучшения здоровья кожи.
                        </p>
<div className="reveal flex flex-col sm:flex-row gap-4 mb-16">
<a className="shimmer-btn group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full py-4 px-8 shadow-xl shadow-amber-900/20 transition-all duration-300" href="#catalog">
<span className="relative z-10 text-xs font-bold uppercase tracking-widest">Каталог продукции</span>
<svg className="lucide lucide-arrow-right relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white rounded-full py-4 px-8 hover:bg-white/10 transition-colors backdrop-blur-sm" href="#science">
<span className="text-xs font-bold uppercase tracking-widest">Как это работает?</span>
</a>
</div>
</div>
<div className="lg:col-span-5 hidden lg:block animate-group">
<figure className="reveal relative h-[60vh] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
<img alt="Молекулярная структура" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7fd9648-721b-497f-a38e-2ace6245dc03_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/10 to-transparent">
<div className="absolute bottom-8 left-8 right-8">
<div className="inline-flex items-center gap-2 mb-3">
<div className="px-2 py-1 bg-amber-500/20 backdrop-blur rounded text-[10px] text-amber-300 font-bold uppercase tracking-widest border border-amber-500/20">
                                            Science Inside
                                        </div>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Клеточный уровень</h3>
<p className="text-sm text-neutral-300 line-clamp-2">Восстановление структуры мембран за счет природного комплекса масел.</p>
</div>
</div>
</figure>
</div>
</div>
</div>
</section>

<section aria-label="Научный подход" className="py-24 lg:py-32 bg-white relative" id="science">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="flex flex-col lg:flex-row lg:gap-16 gap-x-12 gap-y-12 items-center">
<div className="lg:w-1/2">
<div className="animate-group mb-12 lg:text-left">
<span className="reveal inline-block text-amber-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Научный подход</span>
<h2 className="reveal text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Что делает это масло уникальным <br/> для каждой вашей клетки?
                    </h2>
<p className="reveal text-neutral-600 mb-8 leading-relaxed">
                        Мы используем биодоступные формы компонентов, которые распознаются организмом как "свои", обеспечивая максимальное усвоение.
                    </p>
</div>
<div className="flex flex-col gap-6 animate-group">

<article className="reveal p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 group">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-amber-600">
<svg className="lucide lucide-shield" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-lg font-bold text-neutral-900 mb-2">Щит для клеток</h3>
<p className="text-sm text-neutral-600 leading-relaxed">
                                    Мощнейшие антиоксиданты и сквален создают прямую защиту целостности клеточной оболочки от окислительного стресса.
                                </p>
</div>
</div>
</article>
<article className="reveal p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 group">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-amber-600">
<svg className="lucide lucide-zap" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-lg font-bold text-neutral-900 mb-2">Энергия изнутри</h3>
<p className="text-sm text-neutral-600 leading-relaxed">
                                    Защищенная мембрана способствует лучшему клеточному дыханию, повышая общий уровень энергии и жизненного тонуса.
                                </p>
</div>
</div>
</article>
<article className="reveal p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 group">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-amber-600">
<svg className="lucide lucide-activity" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-lg font-bold text-neutral-900 mb-2">Фундамент здоровья</h3>
<p className="text-sm text-neutral-600 leading-relaxed">
                                    Питательная поддержка для кожи и иммунитета. Антиоксиданты укрепляют барьерную функцию каждой клетки.
                                </p>
</div>
</div>
</article>
</div>
</div>

<div className="lg:w-1/2">
<div className="reveal animate-group relative rounded-2xl overflow-hidden shadow-xl group">
<img alt="Коллекция масел" className="transition-transform duration-700 group-hover:scale-105 bg-center w-full h-auto max-w-full object-cover rounded-2xl" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7fd9648-721b-497f-a38e-2ace6245dc03_1600w.png"/>
</div>


</div>
</div>
</div></section>

<section aria-label="Состав" className="py-24 lg:py-32 bg-white border-t border-neutral-100" id="ingredients">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="animate-group text-center max-w-3xl mx-auto mb-16">
<span className="reveal inline-block text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-4">Формула</span>
<h2 className="reveal text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                        Преимущества масел <br/>«Пазл здоровья»
                    </h2>
<p className="reveal text-lg text-neutral-600">Наборы подобраны с учетом содержания полезных веществ для каждого органа, объединяя силу 16 компонентов.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px),minmax(0,1fr)] gap-8 lg:gap-12 items-start">

<div className="animate-group order-1 lg:order-1 w-fit h-full"> 
<figure className="reveal relative w-full h-full rounded-xl overflow-hidden shadow-2xl group border-4 border-white ring-1 ring-neutral-200">
<img alt="Коллекция масел" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7fd9648-721b-497f-a38e-2ace6245dc03_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 to-transparent"></div>
<div className="absolute bottom-12 left-0 right-0 text-center">
<div className="inline-block bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg">
<p className="text-xs font-bold uppercase tracking-widest text-neutral-900">Синергия 16 компонентов</p>
</div>
</div>
</figure>
</div>

<div className="animate-group order-2 lg:order-2 min-w-0"> 
<div className="reveal bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
<h3 className="text-xl font-bold text-neutral-900 mb-6">
                                В каждой упаковке 21 саше из 16 различных масел прямого отжима:
                            </h3>

<ul className="grid grid-cols-2 gap-y-4 gap-x-8">
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Амарантовое
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Арахисовое
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Кедровое
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Конопляное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Кунжутное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Льняное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Расторопши
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Тыквенное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Рыжиковое
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Облепиховое
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Горчичное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Пшеничное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Грецкого ореха
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Виноградное
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Чиа
                                </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span> Маковое
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Каталог продукции" className="py-24 lg:py-32 bg-neutral-900 text-white relative overflow-hidden" id="catalog">

<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10 relative z-10">
<div className="animate-group mb-16 max-w-3xl">
<span className="reveal inline-block text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">Каталог</span>
<h2 className="reveal text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Персональная программа <br/>клеточного питания</h2>
<p className="reveal text-neutral-400 text-lg leading-relaxed">
                        Уникальные наборы на основе единого синергетического комплекса из 16 целебных масел, подобранные под потребности конкретных систем организма.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-group">


<article className="reveal group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
<div className="flex items-start justify-between gap-6 mb-8">
<div className="flex-1">
<div className="flex items-start gap-4">
<div className="p-3 bg-rose-500/10 rounded-xl text-rose-400 flex-shrink-0">
<svg className="lucide lucide-heart w-8 h-8" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">СЕРДЦЕ</h3>
<p className="text-sm font-medium text-neutral-300 uppercase tracking-wide">Энергия и ритм</p>
</div>
</div>
</div>
<div className="relative w-24 h-24 flex-shrink-0">
<span className="absolute -top-2 -right-2 z-10 text-[10px] uppercase font-bold tracking-widest bg-neutral-800 text-white px-2 py-1 rounded shadow-lg">21 Саше</span>
<img alt="Масло для сердца" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="text-xs text-neutral-500 mb-8 border-t border-white/10 pt-4 flex-grow">
                            Состав: Полный комплекс из 16 масел, усиленный для сердечно-сосудистой системы.
                        </div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-rose-600 text-white font-semibold text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500">Выбрать набор</button>
</article>

<article className="reveal group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
<div className="flex items-start justify-between gap-6 mb-8">
<div className="flex-1">
<div className="flex items-start gap-4">
<div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 flex-shrink-0">
<svg className="lucide lucide-brain w-8 h-8" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">МОЗГ</h3>
<p className="text-sm font-medium text-neutral-300 uppercase tracking-wide">Ясность и память</p>
</div>
</div>
</div>
<div className="relative w-24 h-24 flex-shrink-0">
<span className="absolute -top-2 -right-2 z-10 text-[10px] uppercase font-bold tracking-widest bg-neutral-800 text-white px-2 py-1 rounded shadow-lg">21 Саше</span>
<img alt="Масло для мозга" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="text-xs text-neutral-500 mb-8 border-t border-white/10 pt-4 flex-grow">
                            Состав: Полный комплекс из 16 масел, оптимизированный для когнитивных функций.
                        </div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-blue-600 text-white font-semibold text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">Выбрать набор</button>
</article>

<article className="reveal group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
<div className="flex items-start justify-between gap-6 mb-8">
<div className="flex-1">
<div className="flex items-start gap-4">
<div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 flex-shrink-0">
<svg className="lucide lucide-droplets w-8 h-8" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">ПЕЧЕНЬ</h3>
<p className="text-sm font-medium text-neutral-300 uppercase tracking-wide">Детокс и обновление</p>
</div>
</div>
</div>
<div className="relative w-24 h-24 flex-shrink-0">
<span className="absolute -top-2 -right-2 z-10 text-[10px] uppercase font-bold tracking-widest bg-neutral-800 text-white px-2 py-1 rounded shadow-lg">21 Саше</span>
<img alt="Масло для печени" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="text-xs text-neutral-500 mb-8 border-t border-white/10 pt-4 flex-grow">
                            Состав: Полный комплекс из 16 масел с акцентом на расторопшу и очищение.
                        </div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-amber-600 text-white font-semibold text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500">Выбрать набор</button>
</article>

<article className="reveal group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
<div className="flex items-start justify-between gap-6 mb-8">
<div className="flex-1">
<div className="flex items-start gap-4">
<div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 flex-shrink-0">
<svg className="lucide lucide-waves w-8 h-8" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white mb-1">ПОЧКИ</h3>
<p className="text-sm font-medium text-neutral-300 uppercase tracking-wide">Баланс и очищение</p>
</div>
</div>
</div>
<div className="relative w-24 h-24 flex-shrink-0">
<span className="absolute -top-2 -right-2 z-10 text-[10px] uppercase font-bold tracking-widest bg-neutral-800 text-white px-2 py-1 rounded shadow-lg">21 Саше</span>
<img alt="Масло для почек" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="text-xs text-neutral-500 mb-8 border-t border-white/10 pt-4 flex-grow">
                            Состав: Полный комплекс из 16 масел для поддержания водно-солевого баланса.
                        </div>
<button className="w-full py-3 rounded-lg bg-white/5 hover:bg-cyan-600 text-white font-semibold text-xs uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500">Выбрать набор</button>
</article>

<article className="reveal group relative bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 shadow-2xl shadow-orange-900/40 md:col-span-2 lg:col-span-2 transform transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between">
<div>
<div className="flex items-start justify-between gap-8 mb-8">
<div className="flex-1">
<div className="flex items-start gap-6 mb-6">
<div className="p-4 bg-white/10 rounded-xl text-white flex-shrink-0">
<svg className="lucide lucide-gem w-10 h-10" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<div>
<h3 className="text-3xl font-bold text-white mb-2">ОСНОВА</h3>
<p className="text-base font-medium text-orange-100 uppercase tracking-wide">Комплексное оздоровление</p>
</div>
</div>
<p className="text-sm text-white/90 leading-relaxed mb-6 max-w-2xl">
                                        Идеально сбалансированный набор для тех, кто хочет укрепить весь организм сразу. Полный спектр из 16 масел.
                                    </p>
</div>
<div className="relative w-32 h-32 flex-shrink-0">
<span className="absolute -top-2 -right-2 z-10 text-xs uppercase font-bold tracking-widest bg-white text-orange-700 px-3 py-1 rounded-full shadow-lg">ХИТ</span>
<img alt="Базовый набор" className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91a2225b-a5e1-413f-917f-9a6a605bcac8_320w.png"/>
</div>
</div>
<div className="flex items-center gap-2 text-white font-semibold mb-8">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Скидка 15% + бесплатная доставка</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center gap-6 justify-between">
<button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-orange-700 hover:bg-neutral-100 font-bold text-xs uppercase tracking-widest shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700">
                                Заказать сейчас
                            </button>
</div>
</article>
</div>
</div>
</section>

<section aria-label="Отзывы" className="py-24 bg-neutral-900 text-white border-t border-neutral-800" id="reviews">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="animate-group mb-16 text-center">
<h2 className="reveal text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Инвестиция в здоровье,<br/> которой можно доверять</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 animate-group">
<div className="reveal flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5">
<div className="text-amber-400 mb-4"><svg className="lucide lucide-file-check w-8 h-8" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg></div>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Доказано</h4>
<p className="text-xs text-neutral-400">Научная база</p>
</div>
<div className="reveal flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5">
<div className="text-amber-400 mb-4"><svg className="lucide lucide-flask-conical w-8 h-8" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg></div>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Качество</h4>
<p className="text-xs text-neutral-400">Лаб. контроль</p>
</div>
<div className="reveal flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5">
<div className="text-amber-400 mb-4"><svg className="lucide lucide-user-check w-8 h-8" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Поддержка</h4>
<p className="text-xs text-neutral-400">Нутрициолог</p>
</div>
<div className="reveal flex flex-col items-center text-center p-6 bg-white/5 rounded-xl border border-white/5">
<div className="text-amber-400 mb-4"><svg className="lucide lucide-truck w-8 h-8" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg></div>
<h4 className="font-bold text-sm uppercase tracking-wide mb-2">Доставка</h4>
<p className="text-xs text-neutral-400">День в день</p>
</div>
</div>

<div className="animate-group">
<div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 no-scrollbar" role="list">

<div className="reveal min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center flex flex-col bg-neutral-800 p-8 rounded-2xl relative border border-white/5" role="listitem">
<div className="flex gap-1 text-amber-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-300 italic mb-6 flex-grow">"После курса 'Основа' почувствовала прилив сил, которого не было годами. Кожа стала заметно чище."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-neutral-400 text-xs">ЕК</div>
<div>
<h5 className="text-sm font-bold text-white">Елена К.</h5>
<span className="text-xs text-neutral-500">Набор "Основа"</span>
</div>
</div>
</div>

<div className="reveal min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center flex flex-col bg-neutral-800 p-8 rounded-2xl relative border border-white/5" role="listitem">
<div className="flex gap-1 text-amber-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-300 italic mb-6 flex-grow">"Брал для поддержки печени. Анализы улучшились уже через месяц приема. Очень удобно, что все в саше."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-neutral-400 text-xs">МИ</div>
<div>
<h5 className="text-sm font-bold text-white">Михаил И.</h5>
<span className="text-xs text-neutral-500">Набор "Печень"</span>
</div>
</div>
</div>

<div className="reveal min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center flex flex-col bg-neutral-800 p-8 rounded-2xl relative border border-white/5" role="listitem">
<div className="flex gap-1 text-amber-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-300 italic mb-6 flex-grow">"Вкус масел натуральный, насыщенный. Консультация нутрициолога очень помогла определиться с набором."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center font-bold text-neutral-400 text-xs">АН</div>
<div>
<h5 className="text-sm font-bold text-white">Анна Н.</h5>
<span className="text-xs text-neutral-500">Набор "Сердце"</span>
</div>
</div>
</div>
</div>

<div className="md:hidden flex justify-center mt-2">
<span className="text-[10px] uppercase tracking-widest text-neutral-600 flex items-center gap-1">
                            Свайпните <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
<div className="reveal text-center mt-12">
<a className="inline-flex items-center justify-center gap-3 bg-white text-neutral-900 rounded-full py-4 px-10 shadow-xl hover:bg-neutral-100 transition-all font-bold text-sm uppercase tracking-widest group" href="#contact">
                        Получить консультацию
                        <svg className="lucide lucide-message-circle w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</section>

<section aria-label="Контактная форма" className="py-24 bg-neutral-50 border-t border-neutral-200" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center animate-group">
<div className="reveal mb-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Соберите свой Пазл Здоровья
                    </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10">
                        Оставьте заявку сейчас, и наш специалист поможет подобрать идеальную программу восстановления.
                    </p>
</div>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="shimmer-btn group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-5 px-12 shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900">
<span className="relative z-10 text-sm font-bold uppercase tracking-widest">Заказать свой набор</span>
<svg className="lucide lucide-arrow-right relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="reveal mt-6 text-xs text-neutral-400">
                    *Консультация бесплатна и ни к чему вас не обязывает
                </p>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 py-16">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2.5 text-neutral-900" href="/">
<svg className="lucide lucide-shield-check w-6 h-6 text-amber-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-bold text-xl tracking-tight">Пазл Здоровья</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        Натуральные функциональные масла для клеточного питания и системного оздоровления организма.
                    </p>
</div>
<div className="space-y-6">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Контакты</h4>
<ul className="space-y-3 text-sm font-medium text-neutral-600">
<li><a className="hover:text-amber-600 transition-colors" href="tel:+78000000000">8 800 000 00 00</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="mailto:info@healthpuzzle.ru">info@healthpuzzle.ru</a></li>
<li className="text-neutral-500 font-normal">Москва, Пресненская наб., 12</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Меню</h4>
<ul className="space-y-3 text-sm font-medium text-neutral-600">
<li><a className="hover:text-amber-600 transition-colors" href="#science">Наука</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#ingredients">Состав</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#catalog">Каталог</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 Пазл Здоровья.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-600" href="#">Политика конфиденциальности</a>
<a className="hover:text-neutral-600" href="#">Оферта</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
