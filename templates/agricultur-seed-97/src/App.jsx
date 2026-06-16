import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                class: 'lucide',
                'stroke-width': 1.5
            }
        });

        // Advanced Staggered Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        
                        // Handle groups of elements (Stagger effect)
                        if (target.classList.contains('animate-group')) {
                            const children = target.querySelectorAll('.reveal');
                            
                            children.forEach((child, index) => {
                                // Add delay based on index for cascade effect
                                setTimeout(() => {
                                    child.classList.add('active');
                                }, index * 150); // 150ms delay between items
                            });
                        } 
                        // Handle individual elements (fallback)
                        else if (target.classList.contains('reveal')) {
                            target.classList.add('active');
                        }

                        // Stop observing once animated
                        observer.unobserve(target);
                    }
                });
            }, observerOptions);

            // Observe groups and individual reveal elements outside groups
            document.querySelectorAll('.animate-group, .reveal:not(.animate-group .reveal)').forEach(el => {
                observer.observe(el);
            });

            // Header Scroll Effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('py-3', 'shadow-sm');
                    header.classList.remove('py-5');
                } else {
                    header.classList.add('py-5');
                    header.classList.remove('py-3', 'shadow-sm');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
<div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 support-backdrop-blur"></div>
<div className="relative max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="flex items-center justify-between">

<a className="group flex items-center gap-2.5 z-50 relative focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg p-1" href="/">
<div className="text-green-700 transition-transform duration-300 group-hover:scale-110">
<svg className="lucide lucide-sprout w-6 h-6" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<span className="font-bold text-lg tracking-tight text-neutral-900">Северная Олива</span>
</a>

<nav className="hidden lg:flex items-center gap-8 relative z-50">
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-green-700 transition-colors py-2" href="#challenge">Преимущества</a>
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-green-700 transition-colors py-2" href="#comparison">Сравнение</a>
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-green-700 transition-colors py-2" href="#karakula">Сорт «Каракула»</a>
<a className="text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-green-700 transition-colors py-2" href="#economics">Экономика</a>
</nav>

<div className="flex items-center gap-4 z-50">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="#contact">
                        Связаться
                    </a>
</div>
</div>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950 pt-20">

<div className="absolute inset-0 z-0">
<img alt="Поле амаранта" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5f42a16-0db6-48ad-916a-b4e671986eda_3840w.jpg" style={{animationPlayState: 'paused'}}/> 
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-950/60 to-neutral-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-10 w-full py-20">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 max-w-3xl animate-group">
<div className="reveal inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Собственная селекция
                        </div>
<h1 className="reveal text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.05] mb-8">
                            Семена Амаранта: <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Революция</span> в кормах
                        </h1>
<p className="reveal text-lg font-normal text-neutral-400 max-w-lg mb-10 leading-relaxed">
                            Высокопротеиновый силос для животноводства. Инновационное решение для повышения продуктивности вашего хозяйства и снижения затрат.
                        </p>
<div className="reveal flex flex-col sm:flex-row gap-4 mb-16">
<a className="shimmer-btn group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white rounded-full py-4 px-8 shadow-xl shadow-green-900/20 transition-all duration-300" href="#contact">
<span className="relative z-10 text-xs font-bold uppercase tracking-widest">Заказать семена</span>
<svg className="lucide lucide-arrow-right relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white rounded-full py-4 px-8 hover:bg-white/10 transition-colors backdrop-blur-sm" href="#karakula">
<span className="text-xs font-bold uppercase tracking-widest">Получить консультацию</span>
</a>
</div>
<div className="reveal flex items-center gap-12 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-semibold tracking-tight text-white">19-21%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">Протеин</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-white">800 ц/га</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">Зеленой массы</div>
</div>
</div>
</div>

<div className="lg:col-span-5 hidden lg:block animate-group">
<figure className="reveal relative h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
<img alt="Амарантовое поле - сорт Каракула" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ba58da2-4ea5-47d8-a1da-c0dd0ff86814_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent">
<div className="absolute bottom-8 left-8 right-8">
<div className="inline-flex items-center gap-2 mb-3">
<div className="px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white font-bold uppercase tracking-widest border border-white/10">
                                            Элита
                                        </div>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Сорт «Каракула»</h3>
<p className="text-sm text-neutral-300 line-clamp-2">Патентованный сорт с повышенной засухоустойчивостью и максимальным выходом массы.</p>
</div>
</div>
</figure>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative" id="challenge">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="animate-group">
<div className="reveal mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Вызов современного животноводства</h2>
<p className="text-lg text-neutral-600 leading-relaxed">
                                Растущие цены на протеиновые добавки и климатические риски требуют новых, эффективных решений. Традиционные культуры перестают давать гарантированный экономический результат.
                            </p>
</div>
<div className="reveal p-8 lg:p-10 bg-neutral-50 rounded-2xl border border-neutral-100">
<h3 className="text-xl font-semibold tracking-tight text-green-700 mb-8 flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Решение: Амарант
                            </h3>
<ul className="space-y-8">
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-trending-up w-5 h-5 text-neutral-700" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-1">Урожайность</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Превышает кукурузу на 20-30% по выходу зеленой массы.</p>
</div>
</li>
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-zap w-5 h-5 text-neutral-700" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-1">Протеин</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Содержание белка до 21%, что значительно выше аналогов.</p>
</div>
</li>
<li className="flex gap-5">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-shield w-5 h-5 text-neutral-700" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-1">Устойчивость</h4>
<p className="text-sm text-neutral-600 leading-relaxed">Уникальная засухоустойчивость и неприхотливость к почвам.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="animate-group h-full flex items-center">
<figure className="reveal relative w-full h-auto max-h-[500px] lg:max-h-[400px] xl:max-h-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
<img alt="Амарантовое поле на закате" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13021dba-bb75-44f5-92f4-ddfb7b5c784d_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-[10px] uppercase font-bold text-white tracking-widest mb-3 inline-block">Культура будущего</span>
<figcaption className="text-white text-2xl font-medium tracking-tight">Адаптация к изменениям климата</figcaption>
</div>
</figure>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-900 text-white relative overflow-hidden" id="comparison">

<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10 relative z-10">
<div className="animate-group max-w-3xl mb-16">
<span className="reveal inline-block text-green-500 text-xs font-bold uppercase tracking-widest mb-6">Сравнительный анализ</span>
<h2 className="reveal text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Питательная ценность: <br/>Амарант vs Кукуруза</h2>
<p className="reveal text-neutral-400 text-lg leading-relaxed">
                        Лабораторные исследования подтверждают безусловное лидерство амарантового силоса по ключевым показателям качества корма.
                    </p>
</div>
<div className="grid lg:grid-cols-12 gap-10">

<div className="lg:col-span-8 animate-group">
<div className="reveal bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">

<div className="grid grid-cols-4 gap-4 p-6 border-b border-white/5 bg-white/5 text-[10px] uppercase tracking-widest font-bold text-neutral-500">
<div className="col-span-1">Показатель</div>
<div className="text-right">Кукуруза</div>
<div className="text-right text-green-400">Амарант</div>
<div className="text-right">Прирост</div>
</div>

<div className="divide-y divide-white/5 text-sm">
<div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors items-center group">
<div className="col-span-1 font-medium text-white group-hover:text-green-300 transition-colors">Сырой протеин</div>
<div className="text-right text-neutral-500">100%</div>
<div className="text-right font-medium text-white">165%</div>
<div className="text-right"><span className="inline-block py-1 px-2 rounded bg-green-500/20 text-green-400 text-xs font-bold">+65%</span></div>
</div>
<div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors items-center group">
<div className="col-span-1 font-medium text-white group-hover:text-green-300 transition-colors">
                                        Лизин <span className="hidden sm:inline text-neutral-600 ml-1 font-normal">(аминокислота)</span>
</div>
<div className="text-right text-neutral-500">100%</div>
<div className="text-right font-medium text-white">240%</div>
<div className="text-right"><span className="inline-block py-1 px-2 rounded bg-green-500/20 text-green-400 text-xs font-bold">+140%</span></div>
</div>
<div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors items-center group">
<div className="col-span-1 font-medium text-white group-hover:text-green-300 transition-colors">Кальций</div>
<div className="text-right text-neutral-500">100%</div>
<div className="text-right font-medium text-white">180%</div>
<div className="text-right"><span className="inline-block py-1 px-2 rounded bg-green-500/20 text-green-400 text-xs font-bold">+80%</span></div>
</div>
<div className="grid grid-cols-4 gap-4 p-6 hover:bg-white/5 transition-colors items-center group">
<div className="col-span-1 font-medium text-white group-hover:text-green-300 transition-colors">Фосфор</div>
<div className="text-right text-neutral-500">100%</div>
<div className="text-right font-medium text-white">132%</div>
<div className="text-right"><span className="inline-block py-1 px-2 rounded bg-green-500/20 text-green-400 text-xs font-bold">+32%</span></div>
</div>
<div className="grid grid-cols-4 gap-4 p-6 bg-green-900/10 hover:bg-green-900/20 transition-colors items-center border-l-2 border-green-500">
<div className="col-span-1 font-bold text-white leading-tight">Переваримый протеин</div>
<div className="text-right text-neutral-500">~100 г</div>
<div className="text-right font-bold text-green-400">~149 г</div>
<div className="text-right"><span className="inline-block py-1 px-2 rounded bg-green-500 text-white text-xs font-bold">+49%</span></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 animate-group">
<div className="reveal relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden group border border-white/5">
<img alt="Сравнение амаранта" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e0cfe0c-73f1-4c5e-a9f3-bf4c2a1c57c6_800w.png"/>
<div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-24">
<div className="p-5 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
<p className="text-[10px] text-green-400 uppercase tracking-widest font-bold mb-2">Главный итог</p>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-3xl lg:text-4xl font-bold text-white tracking-tight">+93.3%</span>
</div>
<span className="text-sm text-neutral-300 leading-snug block">Выход переваримого протеина с гектара при использовании смешанных посевов.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="animate-group order-2 lg:order-1">
<figure className="reveal relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] ring-1 ring-black/5">
<img alt="Технология смешанного посева" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bdc55b93-18b9-40d7-b9f7-fb9790814cc3_1600w.png"/>
<div className="absolute top-6 left-6">
<span className="bg-white/90 backdrop-blur text-neutral-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                                    Mix Technology
                                </span>
</div>
</figure>
</div>

<div className="animate-group order-1 lg:order-2">
<span className="reveal inline-block text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Технология</span>
<h2 className="reveal text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-8">Оптимальное решение: Смешанный посев</h2>
<p className="reveal text-lg text-neutral-600 font-medium mb-10">
                            Замена 50% кукурузного силоса амарантовым обеспечивает идеальный баланс протеина и энергии, создавая синергетический эффект.
                        </p>
<div className="reveal space-y-8">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<svg className="lucide lucide-flask-conical w-4 h-4" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
</div>
<div>
<h4 className="font-bold text-neutral-900 text-base">Идеальная ферментация</h4>
<p className="text-sm text-neutral-600 mt-2 leading-relaxed">Кукуруза, богатая сахарами, улучшает процесс силосования высокобелкового амаранта, создавая стабильную среду.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<svg className="lucide lucide-scale w-4 h-4" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
</div>
<div>
<h4 className="font-bold text-neutral-900 text-base">Сбалансированный рацион</h4>
<p className="text-sm text-neutral-600 mt-2 leading-relaxed">Вы получаете готовый сбалансированный корм прямо с поля, минимизируя необходимость в балансировке рациона добавками.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="karakula">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="animate-group max-w-3xl mb-16">
<span className="reveal inline-block text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-6">Наш продукт</span>
<h2 className="reveal text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Сорт «Каракула»</h2>
<p className="reveal text-lg text-neutral-600">
                        Специализированный кормовой сорт, выведенный для получения максимальной вегетативной массы в условиях рискованного земледелия.
                    </p>
</div>
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

<div className="lg:col-span-7 animate-group">
<div className="reveal overflow-hidden divide-y divide-neutral-100 bg-white border-neutral-200 border rounded-2xl shadow-sm">
<div className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 hover:bg-neutral-50 transition-colors cursor-default">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-arrow-up w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
<span className="w-32 font-semibold text-neutral-900 text-sm">Стебель</span>
<span className="text-neutral-600 text-sm leading-relaxed">Прямой, сочный, ребристый. Высокая устойчивость к полеганию.</span>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 hover:bg-neutral-50 transition-colors cursor-default">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-leaf w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<span className="w-32 font-semibold text-neutral-900 text-sm">Листья</span>
<span className="text-neutral-600 text-sm leading-relaxed">Крупные (20-22 см), эллиптические. Высокая облиственность растения.</span>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 hover:bg-neutral-50 transition-colors cursor-default">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-calendar w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<span className="w-32 font-semibold text-neutral-900 text-sm">Вегетация</span>
<span className="text-neutral-600 text-sm leading-relaxed">100-110 дней до уборочной спелости. Оптимально для большинства регионов.</span>
</div>
<div className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 hover:bg-neutral-50 transition-colors cursor-default">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-trending-up w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<span className="w-32 font-semibold text-neutral-900 text-sm">Урожайность</span>
<span className="text-neutral-600 text-sm leading-relaxed">Зеленая масса: до 800 ц/га. Семена: до 20 ц/га.</span>
</div>
</div>
<div className="reveal mt-8 p-6 bg-green-50 border border-green-100 rounded-xl flex gap-4">
<svg className="lucide lucide-award w-6 h-6 text-green-700 flex-shrink-0" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<div>
<h4 className="text-sm font-bold text-green-900 uppercase tracking-wide mb-1">Гарантия качества</h4>
<p className="text-sm text-green-800">Семена проходят многоступенчатую очистку и проверку всхожести. Репродукция: Элита.</p>
</div>
</div>
</div>

<div className="lg:col-span-5 animate-group">
<figure className="reveal relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 group">
<img alt="Амарант Каракула" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcec9cf1-b42c-410d-ade8-7cd6132bc584_1600w.jpg"/>
</figure>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-900 text-white" id="economics">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="animate-group text-center max-w-3xl mx-auto mb-20">
<h2 className="reveal text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Высокая рентабельность</h2>
<p className="reveal text-neutral-400 text-lg">
                        Внедрение амаранта — это не расходы, а инвестиция с быстрой окупаемостью за счет снижения себестоимости кормовой единицы.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-group">

<div className="reveal p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="text-amber-400 mb-6">
<svg className="lucide lucide-coins w-8 h-8" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-lg font-bold mb-3">Экономия</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Снижение потребности в покупных белковых концентратах и шротах.</p>
</div>

<div className="reveal p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="text-green-400 mb-6 font-mono text-3xl font-bold tracking-tighter">+11.7%</div>
<h3 className="text-lg font-bold mb-3">Продуктивность</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Рост надоев и качества молока при переходе на амарантовый силос.</p>
</div>

<div className="reveal p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="text-blue-400 mb-6">
<svg className="lucide lucide-droplets w-8 h-8" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-lg font-bold mb-3">Засухоустойчивость</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Снижение рисков потери кормовой базы в засушливые годы (коэффициент транспирации низкий).</p>
</div>

<div className="reveal p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
<div className="text-purple-400 mb-6">
<svg className="lucide lucide-sprout w-8 h-8" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-lg font-bold mb-3">Эффективность земли</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Двукратное увеличение выхода протеина с одного гектара посевной площади.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-neutral-100">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="animate-group">
<h2 className="reveal text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-10">Агротехнология: Экспертное сопровождение</h2>
<div className="space-y-10">

<div className="reveal flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="">
<h4 className="text-base font-bold text-neutral-900 mb-2">Сроки посева</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Посев при прогреве почвы до +10-12°C. Конец апреля – май. Важно не спешить, чтобы избежать возврата холодов.
                                    </p>
</div>
</div>

<div className="reveal flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-settings-2 w-5 h-5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<div className="">
<h4 className="text-base font-bold text-neutral-900 mb-2">Техника посева</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        Широкорядный способ (45-70 см). Глубина заделки 1-1.5 см. <span className="font-semibold text-neutral-900">Обязательное прикатывание</span> для контакта семян с почвой.
                                    </p>
</div>
</div>

<div className="reveal flex gap-6 group">
<div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-tractor w-5 h-5" data-lucide="tractor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"></path><path d="M16 18h-5"></path><path d="M18 5a1 1 0 0 0-1 1v5.573"></path><path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"></path><path d="M4 11V4"></path><path d="M7 15h.01"></path><path d="M8 10.1V4"></path><circle cx="18" cy="18" r="2"></circle><circle cx="7" cy="15" r="5"></circle></svg>
</div>
<div className="">
<h4 className="text-base font-bold text-neutral-900 mb-2">Уборка</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        На силос: в фазе цветения или молочно-восковой спелости семян. Возможно использование стандартной кормоуборочной техники.
                                    </p>
</div>
</div>
</div>
</div>
<div className="animate-group h-full">
<figure className="reveal h-full min-h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Агроном на поле" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47b0f40f-6f01-458e-9008-c5bbc13e3686_1600w.png"/>
<div className="absolute inset-0 bg-neutral-900/10"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg border border-white/20">
<p className="text-neutral-900 font-medium italic text-sm">"Мы предоставляем полные технологические карты и консультируем агрономов на каждом этапе выращивания."</p>
</div>
</div>
</figure>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center animate-group">
<div className="reveal mb-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Готовы повысить эффективность?
                    </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Закажите семена элитного сорта «Каракула» и получите технологическое сопровождение от производителя.
                    </p>
</div>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="shimmer-btn group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-4 px-10 shadow-xl transition-all duration-300 hover:-translate-y-1" href="tel:+78007008181">
<span className="relative z-10 text-sm font-bold uppercase tracking-widest">Заказать консультацию</span>
</a>
<a className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 py-2 border-b-2 border-transparent hover:border-neutral-900 transition-all" href="mailto:info@semenaamaranta.ru">
<span>Скачать прайс-лист</span>
<svg className="lucide lucide-download w-4 h-4 transition-transform group-hover:translate-y-1" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-neutral-200 py-16">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2.5 text-neutral-900" href="/">
<svg className="lucide lucide-sprout w-6 h-6 text-green-700" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
<span className="font-bold text-xl tracking-tight">Северная Олива</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                        Научно-производственная компания. Лидер в селекции и возделывании амаранта в России.
                    </p>
</div>
<div className="space-y-6">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Контакты</h4>
<ul className="space-y-3 text-sm font-medium text-neutral-600">
<li><a className="hover:text-green-700 transition-colors" href="tel:+78007008181">8 800 700 81 81</a></li>
<li><a className="hover:text-green-700 transition-colors" href="mailto:info@semenaamaranta.ru">info@semenaamaranta.ru</a></li>
<li className="text-neutral-500 font-normal">г. Воронеж, ул. Примерная, 123</li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Меню</h4>
<ul className="space-y-3 text-sm font-medium text-neutral-600">
<li><a className="hover:text-green-700 transition-colors" href="#challenge">Преимущества</a></li>
<li><a className="hover:text-green-700 transition-colors" href="#karakula">Сорт Каракула</a></li>
<li><a className="hover:text-green-700 transition-colors" href="#economics">Рентабельность</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 ООО «Северная Олива».</p>
<div className="flex gap-6">
<a className="hover:text-neutral-600" href="#">Политика конфиденциальности</a>
<a className="hover:text-neutral-600" href="#">Договор оферты</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
